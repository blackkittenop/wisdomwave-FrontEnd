import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { login } from '../redux/action/user';

export default function Login() {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email,password));
    }

  return (
    <>
    <Container height={"95vh"} style={{paddingTop : "150px"}}>
        <VStack width={"full"} justifyContent={"center"} spacing="2">
        <Heading margin={"4"} children="Welcome To WisdomWave"/>
            <form onSubmit={submitHandler} style={{width:"100%"}}>
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
              <FormLabel htmlFor='password' children="Enter Password" />
               <Input
                required
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                focusBorderColor='yellow.500'
                placeholder='enter password'
               />
              </Box>

              <Box>
                <Link to="/forgetpassword" as={ReactRouterLink}>
                  <Button variant={"Link"} fontSize={"sm"}>Forget Password ?</Button>
                </Link>
              </Box>

              <Box margin={"4"}>
               <Button type="submit" colorScheme='yellow'>Login</Button>
              </Box>

              <Box my={"4"} margin={"4"}>
                New User ? <Link to="/signup" as={ReactRouterLink}>
                <Button colorScheme='yellow' variant={"link"}>Sign Up</Button>
                </Link> {" "}here
              </Box>
              
            </form>
        </VStack>
    </Container>
    </>
  )
}
