import { Button, Container, Heading, VStack, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from "react-redux"
import { changePassword } from '../../redux/action/profile';
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export default function ChangePassword() {

  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(changePassword(oldPassword,newPassword));
    };

  const { error,message, loading} = useSelector(state => state.profile);


  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }

    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
      
    navigate("/profile");
    }

  },[dispatch,error,message]);


  return (
    <Container minH={"90vh"} py={"16"}>
     <form onSubmit={submitHandler}>
        <Heading 
        textTransform={"uppercase"}
        my={"16"}
        textAlign={["center","left"]}
        children="Change Password" 
        />
        <VStack spacing={"8"}>
        <Input
                required
                value={oldPassword}
                onChange={(e)=> setOldPassword(e.target.value)}
                type='password'
                focusBorderColor='yellow.500'
                placeholder='Old Password'
         />
         <Input 
                required
                value={newPassword}
                onChange={(e)=> setNewPassword(e.target.value)}
                type='password'
                focusBorderColor='yellow.500'
                placeholder='New Password'
         />

         <Button  colorScheme='yellow' w={"full"} type='submit'>Change Password</Button>
        </VStack>
     </form>
    </Container>
  )
}
