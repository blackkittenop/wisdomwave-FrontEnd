import React from 'react'
import {VStack, Spinner} from "@chakra-ui/react";

export default function Loader({color="yellow.500"}) {
  return (
    <VStack h={"100vh"} justifyContent={"center"}>
        <div style={{transform : "scale(4)"}}>
            <Spinner 
            thickness='2px' 
            speed='0.65s' 
            emptyColor='trasparent' 
            color={color}
            size={"xl"}
            />
        </div>
    </VStack>
  )
}
