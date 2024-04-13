import { Avatar, Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { register } from '../redux/action/user';

export const fileUploadCss = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC948",
    backgroundColor:"white"
}

const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss,
};

export default function Register() {

    const [name, setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [imagePrev , setImagePrev] = useState("");
    const [image, setImage] = useState("");

    const dispatch = useDispatch();

    const changeFileHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const submitHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();

      myForm.append("name",name);
      myForm.append("email",email);
      myForm.append("password",password);
      myForm.append("file",image);

      dispatch(register(myForm));
      
    }

  return (
    <>
    <Container height={"110vh"} style={{paddingTop : "100px"}}>
        <VStack width={"full"} justifyContent={"center"} spacing="2">
        
        <Heading my={"4"} textTransform={"uppercase"}  children="Registration"/>
            <form onSubmit={submitHandler} style={{width:"100%"}}>
            <Box my={"4"} display={"flex"} justifyContent={"center"}>
            <Avatar src={imagePrev} size={"2xl"}/>
            </Box>
            <Box my={"4"}>
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

              <Box my={"4"}>
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
             
              <Box my={"4"}>
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

              <Box my={"4"}>
              <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
               <Input
                accept='image/*'
                id='chooseAvatar'
                required
                type='file'
                onChange={changeFileHandler}
                focusBorderColor='yellow.500'
                css={fileUploadStyle}
               />
              </Box>

              <Box my={"4"}>
               <Button type="submit" colorScheme='yellow'>Sign Up</Button>
              </Box>

              <Box my={"4"}>
                Already Registered ? <Link to="/login" as={ReactRouterLink}>
                <Button colorScheme='yellow' variant={"link"}>Login</Button>
                </Link> {" "}here
              </Box>
              
            </form>
        </VStack>
    </Container>
    </>
  )
}
