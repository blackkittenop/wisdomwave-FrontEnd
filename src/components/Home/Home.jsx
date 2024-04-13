import React from 'react'
import {Box, Button, HStack, Heading, Image, Link, Stack, Text, VStack} from "@chakra-ui/react";
import "./home.css"
import mainImg from "../../assets/images/mainImg.png";
import {CgGoogle,CgYoutube} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from  "react-icons/di"
import mainvdo from "../../assets/videos/intro.mp4"


export default function Home() {
  return (
    <>
      <section className="home">
        <div className='container'>
          <Stack
            direction={["column", "row"]}
            height={"100%"}
            justifyContent={['center','space-between']}
            alignItems={"center"}
            spacing={["16","56"]}
          >
          <VStack width={'full'} alignItems={["center","flex-end"]} spacing={2} fontFamily={"cursive"}>
            <Heading textAlign={["center", "left"]} 
            children="LEARN FROM THE EXPERTS" 
            fontSize={'2xl'}
            />
            <Text textAlign={["center", "left"]} children="Xplore Valuable contents here !!"/>
            <Link to="/courses">
              <Button size={"lg"} colorScheme='yellow'>
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image className='vector_img' boxSize={"md"} src={mainImg} ></Image>

          </Stack>
        </div>

        <Box className="box" padding={"8"} bg={"black"} >
          <Heading
            textAlign={"center"}
            fontFamily={"body"}
            color={"yellow.400"}
            children='OUR BRAND'
          />
          <HStack className='brandBanner' justifyContent={"space-evenly"} marginTop={"4"}>
            <CgGoogle/>
            <CgYoutube/>
            <SiCoursera/>
            <SiUdemy/>
            <DiAws/>
          </HStack>
        </Box>

        <div className='container2' justifyContent={"center"}>
          <video autoPlay controls controlsList='nodownload nofullscreen noremoteplayback' 
          disablePictureInPicture
          disableRemotePlayback
          src={mainvdo} />
        </div>

      </section>
    </>
    
    
  )
}
