import { Box, Button, Grid, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr , Heading, Image, useDisclosure} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import CourseModal from './CourseModal';
import {useDispatch,useSelector} from "react-redux";
import { getAllCourses, getCourselectures } from '../../../redux/action/course';
import axios from 'axios';
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/action/admin.js';
import toast from "react-hot-toast";

export default function AdminCourses() {

  
  const {courses,lectures} = useSelector(state=>state.course) ;
  
  const {error,message} = useSelector(state=>state.admin) ;
  const dispatch = useDispatch();

  const {isOpen,onClose,onOpen} = useDisclosure();
  const [courseId,setCourseId] = useState("");
  const [courseTitle,setCourseTitle] = useState("");
  

  const courseDetailsHandler = (courseId,title) => {
    dispatch(getCourselectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  }
  

  const deleteButtonHandler = (courseId) => {
    console.log(courseId);
    dispatch(deleteCourse(courseId));
  }

  const deleteLectureButtonHandler = async (courseId,lectureId) => {
    await dispatch(deleteLecture(courseId,lectureId));
    dispatch(getCourselectures(courseId));
  }

  const addLecturehandler = async (e,courseId,title,description,video) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title",title);
    myForm.append("description",description);
    myForm.append("file",video);

    await dispatch(addLecture(courseId,myForm));
    dispatch(getCourselectures(courseId));
  }


  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }

    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
    }
    dispatch(getAllCourses());
  }, [dispatch,message,error])
  

  return (
    <Grid
    minH={"100vh"}
    templateColumns={["1fr","5fr 1fr"]}
    css={{
        cursor:`url(),default`
    }}
    >
    <Box p={["0","8"]} overflowX={"auto"}> 
    <Heading 
          textTransform={"uppercase"}
          children="All Courses"
          my={"16"}
          textAlign={["center","left"]}
        />

    <TableContainer w={["100vw","full"]}>
      <Table variant={"simple"} size={"lg"}>
        <TableCaption>All available courses in the Database</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Poster</Th>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Creater</Th>
            <Th isNumeric >Views</Th>
            <Th isNumeric >Lectures</Th>
            <Th isNumeric >Action</Th>
          </Tr>
        </Thead>

        <Tbody>
         { courses.map((item)=>(
            <Row 
              key={item._id} 
              item={item} 
              courseDetailsHandler={courseDetailsHandler} 
              deleteButtonHandler={deleteButtonHandler}/>
          ))
         }
        </Tbody>
      </Table>
    </TableContainer>

    <CourseModal isOpen={isOpen} 
      onClose={onClose} 
      id={courseId} 
      courseTitle={courseTitle} 
      deleteButtonHandler={deleteLectureButtonHandler} 
      addLectureHandler={addLecturehandler}
      lectures={lectures.Lectures}
    />
    </Box>
    <Sidebar />
    </Grid>
  )
}

function Row({item,courseDetailsHandler,deleteButtonHandler}){
 return (
  <Tr>
    <Td>{`#${item._id}`}</Td>
    <Td><Image src={item.poster.url}/></Td>
    <Td>{item.title}</Td>
    <Td textTransform={"uppercase"}>{item.category}</Td>
    <Td>{item.createdBy}</Td>
    <Td isNumeric>{item.views}</Td>
    <Td isNumeric>{item.noOfVideos}</Td>
   
    <Td isNumeric>
      <HStack justify={"flex-end"}>
        <Button onClick={()=>courseDetailsHandler(item._id,item.title)} variant={"outline"} color={"purple.500"} >View Lectures</Button>
        <Button onClick={()=>deleteButtonHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
      </HStack>
    </Td>
  </Tr>
 )
}