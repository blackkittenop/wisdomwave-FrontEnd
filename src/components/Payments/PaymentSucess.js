import { Box, Button, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link as ReactRouterLink,useSearchParams } from 'react-router-dom'

export default function PaymentSucess() {
  const reference = useSearchParams()[0].get("reference");
  
  return (
    <Container 
     h={"90vh"}
     p={"16"}
    >
    <Heading my={"2"} textAlign={"center"} children="Ta Da !! You are a Suscriber Now !!"/>
    <VStack
    boxShadow={"lg"}
    pb={"16"}
    alignItems={"center"}
    borderRadius={"16"}
    >
    <Box w={"full"} bg={"yellow.400"} p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
      <Text color={"black"}>Payment Success</Text>
    </Box>

    <Box p={"4"}>
      <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
        <Text>
          congrulations, you are a pro member you have access to premium contents.
        </Text>
        <Heading size={"4xl"}>
          <RiCheckboxCircleFill/>
        </Heading>
      </VStack>
    </Box>

    <Link as={ReactRouterLink} to="/profile">
      <Button variant={"ghost"} >Go To Profile</Button>
    </Link>
    <Heading size={"xs"}> Reference number:{reference}</Heading>

    </VStack>
    </Container>
  )
}
