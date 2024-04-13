import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {toast} from "react-hot-toast"
import { resetPassword } from '../redux/action/profile.js';

export default function ResetPassword() {
   
   const[password, setPassword] = useState("");
   const params = useParams();

    const {message,error} = useSelector(state=>state.profile);

    const dispatch = useDispatch();

   const submitHandler = (e)=> {
    e.preventDefault();
    dispatch(resetPassword(params.token,password));
   };

   useEffect(()=>{
    if(error){
        toast.error(error);
        dispatch({type:"clearError"})
    }
    
    if(message){
        toast.success(message);
        dispatch({type:"clearMessage"});

    }
   },[dispatch,error,message])

   return (
    <Container py={"16"} h={"90vh"}>
        <form onSubmit={submitHandler}>
            <Heading  
            my="16"
            children="Reset Password" 
            textAlign={["center","left"]} 
            textTransform={"uppercase"}/>

            <VStack spacing={"8"}>
                <Input
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="enter password"
                    type="password"
                    focusBorderColor="yellow.500"
                />
            
             <Button type='submit' w={"full"} colorScheme='yellow'>Reset Password</Button>
            </VStack>
        </form>
    </Container>
  )
}
