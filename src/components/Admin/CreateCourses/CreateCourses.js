import { Box, Container, Grid, Heading, VStack, Input, Select, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import {fileUploadCss} from "../../../auth/Register"
import {useDispatch,useSelector} from "react-redux";
import toast from "react-hot-toast";
import { createCourse } from '../../../redux/action/admin';

export default function CreateCourses() {

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [createdBy,setCreatedBy] = useState("");
  const [category,setCategory] = useState("");
  const [image,setImage] = useState("");
  const [imagePrev,setImagePrev] = useState("");

  const dispatch = useDispatch();
  const {error,message} = useSelector(state=>state.admin);

  const changeFileHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onloadend = () => {
        setImagePrev(reader.result)
        setImage(file)
    }
}

  const categories = [
    "web developemnt",
     "Artificial Intellegence",
     "DataStructure and Algorithm",
     "Game Development",
     "Data Science"
 ];

 const submitHandler = (e) => {
  e.preventDefault();
  const myForm = new FormData();

  myForm.append("title",title);
  myForm.append("description",description);
  myForm.append("category",category);
  myForm.append("createdBy",createdBy);
  myForm.append("file",image);

  dispatch(createCourse(myForm));
} 

useEffect(()=>{
  if(error){
    toast.error(error.message);
    dispatch({type:"clearError"});
  }

  if(message){
    toast.success(message.message);
    dispatch({type:"clearMessage"});
    
  }

},[dispatch,message,error]);



  return (
    <Grid
    minH={"100vh"}
    templateColumns={["1fr","5fr 1fr"]}
    css={{
        cursor:`url(),default`
    }}
    >
    <Container py={"16"}>
      <form onSubmit={submitHandler}>
        <Heading 
          textTransform={"uppercase"}
          children="Create Course"
          my={"16"}
          textAlign={["center","left"]}
        />
        <VStack m={"auto"} spacing={"8"}>
        <Input
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            type='text'
            focusBorderColor='purple.300'
            placeholder='Title'
         />

          <Input
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            type='text'
            focusBorderColor='purple.300'
            placeholder='Description'
         />
         
        <Input
            value={createdBy}
            onChange={(e)=> setCreatedBy(e.target.value)}
            type='text'
            focusBorderColor='purple.300'
            placeholder='Creater Name'
         />

         <Select focusBorderColor='purple.300'
          value={category}
          onChange={(e)=> setCategory(e.target.value)}
          >
            <option value={""}>
              category
            </option>

            {
              categories.map((item)=>(
                <option key={item} value={item}>{item}</option>
              ))
            }
        </Select>
        
        <Input
                accept='image/*'
                required
                type='file'
                onChange={changeFileHandler}
                focusBorderColor='purple.300'
                css={{
                  "&::file-selector-button":{
                    ...fileUploadCss,
                    color:"purple"
                  }
                }}
         />

         {
          imagePrev && (<Image src={imagePrev} boxSize={"64"} objectFit={"contain"}/>)
         }
         <Button w={"full"} colorScheme='purple' type='submit'>Create</Button>
         

        </VStack>
      </form>
    </Container>
    <Sidebar />
    </Grid>
  )
}
