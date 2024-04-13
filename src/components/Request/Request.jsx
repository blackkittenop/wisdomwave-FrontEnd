import { Box, Button, Container, FormLabel, Heading, Input, Link, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'
import { courseRequest } from '../../redux/action/other';
import toast from 'react-hot-toast';


export default function Request() {

  const dispatch = useDispatch();
  const {error,message} = useSelector(state=>state.other);

  const [name, setName] = useState("");
  const [email , setEmail] = useState("");
  const [course , setCourse] = useState("");

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(courseRequest(name,email,course));
    }

    useEffect(()=>{
      if(error){
        toast.error(error);
        dispatch({type:"clearError"});
      }

      if(message && message.success){
        toast.success(message.message);
        dispatch({type:"clearMessage"});
      }
      
    },[dispatch,message,error]);


  return (
    <>
    <Container height={"90vh"} style={{paddingTop : "150px"}}>
        <VStack width={"full"} justifyContent={"center"} spacing="2">
        <Heading margin={"4"} children="Request A Course"/>
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
              <FormLabel htmlFor='course' children="Course" />
               <Textarea
                required
                id="course"
                value={course}
                onChange={(e)=> setCourse(e.target.value)}
                focusBorderColor='yellow.500'
                placeholder='enter course details ..'
               />
              </Box>
             
              <Box margin={"4"}>
               <Button type="submit" colorScheme='yellow'>Send Mail</Button>
              </Box>

              <Box my={"4"} margin={"4"}>
                Send Available Courses !! <Link to="/courses" as={ReactRouterLink}>
                <Button colorScheme='yellow' variant={"link"}>Click</Button>
                </Link> {" "}here
              </Box>
              
            </form>
        </VStack>
    </Container>
    </>
  )
}



