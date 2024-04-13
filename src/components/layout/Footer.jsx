import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular, TiSocialInstagramCircular , TiSocialGithubCircular} from "react-icons/ti"

export default function Footer() {
  return (
    <>
        <Box padding={"4"} minH={"10vh"} bg={"black"}>
            <Stack direction={["column","row"]}>
                <VStack alignItems={["center", "flex-start"]} width={"full"}>
                    <Heading children="All rights reserved"  color={"white"}/>
                    <Heading children="@blackkitten18" size={"sm"} fontFamily={"body"} color={"yellow.400"}/>
                </VStack>
                <HStack
                color={"white"}
                spacing={["2","10"]}
                justifyContent={"center"}
                >
                    <a href=''>
                        <TiSocialYoutubeCircular size="50"/>
                    </a>
                    <a href=''>
                        <TiSocialInstagramCircular size="50"/>
                    </a>
                    <a href=''>
                        <TiSocialGithubCircular size="50"/>
                    </a>
                </HStack>
            </Stack>
        </Box>
    </>
  )
}
