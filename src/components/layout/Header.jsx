import React from 'react'
import {ColorModeSwitcher} from "../../ColorModeSwitcher.js";
import {RiDashboardLine, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Link, VStack, useDisclosure } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import {useDispatch} from "react-redux";
import { logout } from '../../redux/action/user.js';

const LinkButton = ({url="/" , title="Home", onClose}) => (
    <Link onClick={onClose} as={ReactRouterLink} to={url}>
        <Button variant={"ghost"}>{title}</Button>
    </Link>
)

export default function Header({isAuthenticated=false,user}) {
    const {isOpen , onOpen, onClose} = useDisclosure();
    
    const dispatch = useDispatch();

    const logoutHandler = () => {
        console.log("Logout");
        onClose();
        dispatch(logout());
    }
    
  return (
    <>
        <ColorModeSwitcher/>
        <Button 
         onClick={onOpen}
         colorScheme='yellow' 
         height={"12"} 
         width={"12"} 
         zIndex={"overlay"}
         rounded={"full"} 
         position={"fixed"} 
         top={"6"} 
         left={"6"}>
         <RiMenu5Fill/>
        </Button>

        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
         <DrawerOverlay backdropBlur={"2px"}/>
            <DrawerContent>
                <DrawerHeader borderBottomWidth={"1px"}>COURSES</DrawerHeader>
                <DrawerBody>
                 <VStack alignItems={"flex-start"}>
                    <LinkButton  onClose={onClose} url="/" title="Home"/>
                    <LinkButton  onClose={onClose} url="/courses" title="Explore All Courses"/>
                    <LinkButton  onClose={onClose} url="/request" title="Request a course"/>
                    <LinkButton  onClose={onClose} url="/contactus" title="Contact Us"/>
                    <LinkButton  onClose={onClose} url="/about" title="About"/>

                    <HStack
                     justifyContent={"space-evenly"}
                     position={"absolute"}
                     bottom={"2rem"}  
                     width={"80%"}  
                     textDecoration={"none"}
                    >
                    {(isAuthenticated)?(<>
                        <VStack>
                          <HStack>
                            <Link  onClick={onClose} as={ReactRouterLink} to="/profile">
                                <Button variant={"ghost"} colorScheme='yellow'>Profile</Button>
                            </Link>
                                <Button colorScheme='yellow' onClick={logoutHandler}>
                                    <RiLogoutBoxLine/>
                                    Logout
                                </Button>
                          </HStack>
                          {
                            user && user.role==="admin" && (
                                <Link  onClick={onClose} as={ReactRouterLink} to="/admin/dashboard">
                                    <Button variant={"ghost"} colorScheme='purple'>
                                        <RiDashboardLine/>
                                        Dashboard
                                    </Button>
                                </Link>
                            )
                          }
                        </VStack>
                    </>):(<>
                        <Button colorScheme='yellow'>
                            <Link  onClick={onClose} as={ReactRouterLink} to="/login">Login</Link>
                        </Button>
                    <p>OR</p>
                        <Button colorScheme='yellow'>
                            <Link  onClick={onClose} as={ReactRouterLink} to="/signup">Sign Up</Link>
                        </Button>
                    </>)}

                    </HStack>                    
                 </VStack>
                    
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        
    </>
  )
}
