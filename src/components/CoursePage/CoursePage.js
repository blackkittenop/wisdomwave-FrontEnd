import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import mainvdo from "../../assets/videos/intro.mp4"
import {useDispatch,useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import { getCourselectures } from '../../redux/action/course';
import {Navigate} from "react-router-dom";


export default function CoursePage({user}) {
  // if(user.role !== 'admin' && (user.subscription===undefined || user.subscription.status!=="active")){
  //   return <Navigate to="/subscribe"/>
  // }
  const dispatch = useDispatch();
  const params = useParams();

  const [lecturenumber,setLectureNumber] = useState(0);
  const {lectures} = useSelector(state => state.course);
  
  useEffect(() => {
    dispatch(getCourselectures(params.id));
  }, [dispatch,params.id])
  
 

  return (<>
    {lectures && lectures.Lectures && lectures.Lectures.length > 0 && 
      (<Grid minH={"90vh"} templateColumns={["1fr", "3fr 1fr"]}>
    {console.log(lectures.Lectures[0].title)}
    {lectures && lectures.Lectures && lectures.Lectures.length > 0 && <Box>
        <video autoPlay controls controlsList='nodownload noremoteplayback' 
        disablePictureInPicture
        disableRemotePlayback
        src={mainvdo} />
        <Heading m={"4"} children={`#${lecturenumber + 1} ${lectures.Lectures[lecturenumber].title}`}/>
        <Heading m={"4"} children="Description"/>
        <Text m={"4"} children={`${lectures.Lectures[lecturenumber].description}`}/>
    </Box>}

      <VStack>
        {
            lectures.Lectures.map((element, index) => (
                <button key={element._id}
                onClick={()=>setLectureNumber(index)}
                 style={{
                    width:"100%",
                    padding:"1rem",
                    textAlign:"center",
                    margin: 0,
                    borderBottom:" 1px solid rgb(0,0,0,0.2)"
                 }} 
                >
                    <Text noOfLines={"1"}>
                      #{index+1} {element.title}
                    </Text>
                </button>
            ))
        } 
      </VStack>
      
    </Grid>)}
    {!lectures || !lectures.Lectures || lectures.Lectures.length <= 0 &&
    (<Heading p={"20"} h={"85vh"}> No Lectures Found</Heading>)}
</>
    
  )
}
