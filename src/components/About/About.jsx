import { Avatar, Box, Button, Container, HStack, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import mainvdo from  "../../assets/videos/intro.mp4"
import {RiSecurePaymentFill} from "react-icons/ri"
import termsandconditions from "../../assets/docs/termsandconditions"
import { Link as ReactRouterLink } from 'react-router-dom'

const Founder = () => (
    <Stack 
     direction={["column","row"]}
     padding={"8"}
     spacing={["4","16"]}
     >
     <VStack>
        <Avatar 
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaq8CpdUjVhZQYbPxe6TVTjYJOjvB0fT4TUOw2QvIy_Em4z2pV86K2NMXQtXl-FWamiQ&usqp=CAU'
        boxSize={['40','48']}
        />
        <Text children="Co-Founder" opacity={"0.6"} />
     </VStack>

     <VStack justifyContent={"center"} textAlign={["center","flex-start"]}>
        <Heading children="Hardik Thakre" size={["md","xl"]} />
        <Text textAlign={["center","start"]} children="Hi, I am full-stack developer and freelancer.
        Other than programming I am a problem solver and have keep intrest in management.
        I like to learn new things and learning is my hobby."></Text>
     </VStack>
    
    </Stack>
)

  const Tanc = ({termscondition}) => (
    <Box>
        <Heading
          my={"4"}
          size={"md"}
          textAlign={["center","left"]}
          children="Terms & Conditions"  
        />
        <Box h={"sm"} p={"4"} overflowY={"scroll"}>
          <Text fontFamily={"heading"} textAlign={["center","left"]}>{termscondition}</Text>
        </Box>
        <Heading my={"4"} size={"xs"} children="Payment refund can applicable for first 7 days only."/>
    </Box>
     
  ) 

export default function About() {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center","left"]} />
        <Founder />
        <Stack m={"8"} direction={["column","row"]} alignItems={"center"}>
        <Text
        fontFamily={"cursive"}
        m={"8"}
        textAlign={["center","start"]}
        >
        We are a group of teacher who teaches advanced technologies courses in very low price.
        Our aim is to provide good quality courses to the students in the reasonable price.
        We have the family of 10k students across globe !! 
        </Text>

        <Link as={ReactRouterLink} to="/subscribe">
         <Button variant={"ghost"} colorScheme='yellow' >
            Check Out Our Plans
         </Button>
        </Link>
        </Stack>

        <Tanc termscondition={termsandconditions} />

        <video autoPlay controls controlsList='nodownload loop nofullscreen noremoteplayback' 
        disablePictureInPicture
        disableRemotePlayback
        src={mainvdo} />

        <HStack my={"4"} p={"4"}>
            <RiSecurePaymentFill />
            <Heading
            size={"xs"}
            fontFamily={"sans-serif"}
            textTransform={"uppercase"}
            children="Payment is Secured by Razorpay"
            />
        </HStack>

    </Container>
  )
}
