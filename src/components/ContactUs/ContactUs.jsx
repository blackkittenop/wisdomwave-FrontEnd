import { Box, Button, Container, FormLabel, Heading, Input, Link, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { contactUs } from '../../redux/action/other';
import toast from 'react-hot-toast';

export default function ContactUs() {
    const dispatch = useDispatch();
    const {error,message:Message} = useSelector(state=>state.other);

    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(contactUs(name,email,message));
    }

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:"clearError"});
      }

      if(Message){
        toast.success(Message);
        dispatch({type:"clearMessage"});
      }
      
    },[dispatch,Message,error])

  return (
    <>
    <Container height={"90vh"} style={{paddingTop : "150px"}}>
        <VStack width={"full"} justifyContent={"center"} spacing="2">
        <Heading margin={"4"} children="Contact Us"/>
            <form onSubmit={submitHandler} style={{width:"100%"}}>
            <Box margin={"4"}>
              <FormLabel htmlFor='name' children="Name" />
               <Input
                required
                id="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                type='text'
                focusBorderColor='yellow.500'
                placeholder='abc'
               />
              </Box>

              <Box margin={"4"}>
              <FormLabel htmlFor='email' children="Email Address" />
               <Input
                required
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                type='email'
                focusBorderColor='yellow.500'
                placeholder='abc@gmail.com'
               />
              </Box>

              <Box margin={"4"}>
              <FormLabel htmlFor='message' children="Your Message" />
               <Textarea
                required
                id="message"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                focusBorderColor='yellow.500'
                placeholder='enter message'
               />
              </Box>
             
              <Box margin={"4"}>
               <Button type="submit" colorScheme='yellow'>Send Message</Button>
              </Box>

              <Box my={"4"} margin={"4"}>
                Request a course ? <Link to="/request" as={ReactRouterLink}>
                <Button colorScheme='yellow' variant={"link"}>Click</Button>
                </Link> {" "}here
              </Box>
              
            </form>
        </VStack>
    </Container>
    </>
  )
}



