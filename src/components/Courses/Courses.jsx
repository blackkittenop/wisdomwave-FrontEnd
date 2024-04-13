import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import "../Home/home.css";
import { useDispatch } from "react-redux";
import { getAllCourses } from '../../redux/action/course';
import axios from "axios";
import { addToPlaylist } from '../../redux/action/profile.js';

export default function Courses() {
    const [keyword,setKeyword] = useState("");
    const [category,setCategory] = useState('');
    const categories = [
        "web developemnt",
         "Artificial Intellegence",
         "DataStructure and Algorithm",
         "Game Development",
         "Data Science"
     ]
     const dispatch = useDispatch();

    const addToPlaylistHandler = (courseId) => {
        dispatch(addToPlaylist(courseId));
    }


    const [courses,setCourses] = useState([]);
    useEffect(()=>{
      axios.get("https://wisdomwave-backend.onrender.com/api/v1/courses").then((res)=>{
      setCourses(res.data.courses);
      })
    },[courses])

    const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creater,description,lecture,lectureCount}) => {
        return (
            <>
                <VStack className='course' alignItems={["center","flex-start"]}>
                    <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
                    <Heading 
                    textAlign={["center","left"]} 
                    children={title} 
                    maxW={"200"} 
                    size={"lg"}
                    fontFamily={"sans-serif"}
                    noOfLines={3}
                    />
                    <Text noOfLines={"2"} children={description}/>
                    <HStack>
                        <Text 
                         fontWeight={"bold"} 
                         textTransform={"uppercase"}
                         children={"Creater"}/>
                          <Text 
                         fontFamily={"body"} 
                         textTransform={"uppercase"}
                         children={creater}/>
                    </HStack>

                    <Heading
                     size={"xs"}
                     children={`Views - ${lectureCount}`}
                     textTransform={"uppercase"}
                    />

                    <Stack
                     direction={["column","row"]} alignItems="center"
                    >
                        <Link as={ReactRouterLink} to={`/course/${id}`}>
                            <Button colorScheme='yellow' >Watch Now</Button>
                        </Link>
                        <Button variant={"ghost"} colorScheme='yellow' onClick={()=> addToPlaylistHandler(id)} >Add To Playlist</Button>
                    </Stack>
                </VStack>
            </>
        )
        }

  

  return (
    <>
        <Container minH={"95vh"} minW={"container.lg"} paddingY={"8"}>
            <Heading children="All Courses" minW={"8"}></Heading>

            <Input
            value={keyword}
            type='text'
            placeholder='search a course'
            onChange={(e)=>{console.log(e.target.value)}}
            focusBorderColor='yellow.400'
            />

            <HStack overflowX={"auto"} paddingY={"8"} css={""}>
                {categories.map((item,index)=>(
                    <Button key={index} onClick={()=> setCategory({item})} minW={{"&&::-webkit-scrollbar":{
                        display:"none"
                    }}}>
                        <Text children={item}/>
                    </Button>
                ))
                }
            </HStack> 

            <Stack
             direction={["column","row"]}
             flexWrap={"wrap"}
             justifyContent={["flex-start","space-evenly"]}
             alignItems={["center","flex-start"]}
            >

            {
                courses && courses.map((item)=>(
                    <Course 
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    creater={item.createdBy}
                    views={item.views}
                    imageSrc={item.poster.url}
                    id={item._id}
                    lectureCount={"2"}
                    addToPlaylistHandler={addToPlaylistHandler}
                     />
                ))
            }

            </Stack>
            
        </Container>
    </>
  )
}
