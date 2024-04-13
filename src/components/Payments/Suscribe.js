import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import  axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { server } from '../../redux/store.js';
import { buySubscription, loadUser } from '../../redux/action/user.js';
import toast from "react-hot-toast";
import logo from "../../assets/images/mainImg.jpg"

export default function Suscribe({user}) {
  
  const dispatch = useDispatch();
  const [key,setKey] = useState("");

  const {loading,error,subscriptionId} = useSelector(state => state.subscription);
  const {error:courseError} = useSelector(state => state.course);

  const subscribeHandler = async () => {
    const {data:{key}} = await axios.get(`${server}/razorpaykey`);

    setKey(key);
    dispatch(buySubscription())
    
  }

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }

    if(courseError){
      toast.error(courseError);
      dispatch({type:"clearError"});
      dispatch(loadUser());
    }

    if(subscriptionId){
      const openPopUp = () => {
        const options = {
          key,
          name:"WisdomWave",
          description:"Get access to all premium courses",
          image:logo,
          subscription_id:subscriptionId,
          callback_url:`${server}/paymentverification`,
          prefill:{
            name:user.name,
            email:user.email,
            contact:"",
          },
          notes:{
            address:"New Nandanvan"
          },
          theme:{
            color:"#FFC800"
          }
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      
      openPopUp();
    }
  },[dispatch,error,user.name,user.email,key,subscriptionId,courseError])

  return (
    <>
        <Container h={"90vh"} p={"16"}>
         <Heading children="Welcome"  my="8" textAlign={"center"}/>
         <VStack
         boxShadow={"lg"}
         alignItems={'stretch'}
         borderRadius={"lg"}
         spacing={0}
        >

        <Box bg={"yellow.400"} p={"4"} css={{borderRadius:"8px 8px 0 0"}} >
            <Text color={"black"} children="pro pack - ₹299 only"/>
        </Box>
        <Box p={"4"}>
          <VStack
          textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}
          >
          <Text color={"black"} children="Join pro pack to access all premium contents."/>
          <Heading size={"md"} children="₹299 only"/>
          </VStack>
          <Button my={"8"} width={"full"} colorScheme='yellow' onClick={subscribeHandler} isLoading={loading}>
          Buy Now
          </Button>
        </Box>
        
        <Box bg={"grey"} p={"4"} css={{borderRadius:"0 0 8px 8px"}}>
        <Heading size={"sm"} textTransform={"uppercase"} color={"white"} children="100% refund on cancellation"/>
        <Text fontSize={"xs"} color={"white"} children="*terms & Conditions Apply*"/>
        </Box>

        </VStack>
        </Container>
    </>
    
    // <Container h="90vh" p="16">
    //     <Heading children="Welcome"  my="8" textAlign={Center}/>
        // <VStack
        //  boxShadow={"lg"}
        //  alignItems={'stretch'}
        //  borderRadius={"lg"}
        //  spacing={0}
        // >

        // <Box bg={"yellow.400"} >
        //     <Text  children="pro pack - 299.00 Rs only"/>
        // </Box>


        // </VStack>
    // </Container>
    
  )
}
