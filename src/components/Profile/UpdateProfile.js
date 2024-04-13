import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { updateprofile } from '../../redux/action/profile';
import { loadUser } from '../../redux/action/user';

export default function UpdateProfile({user}) {
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
      e.preventDefault();
      dispatch(updateprofile(name,email));
      dispatch(loadUser());
      navigate("/profile");
    }

  return (
    <Container minH={"90vh"} py={"16"}>
     <form onSubmit={submitHandler}>
        <Heading 
        textTransform={"uppercase"}
        my={"16"}
        textAlign={["center","left"]}
        children="Update Profile" 
        />
        <VStack spacing={"8"}>
        <Input
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type='text'
            focusBorderColor='yellow.500'
            placeholder='Name'
         />

        <Input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type='email'
            focusBorderColor='yellow.500'
            placeholder='Email'
         />
         

         <Button colorScheme='yellow' w={"full"} type='submit'>Update Profile</Button>
        </VStack>
     </form>
    </Container>
  )
}
