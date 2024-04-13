import { Avatar, Button, Container, HStack, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { removeFromPlaylist, updateProfilePicture } from '../../redux/action/profile.js'
import { cancelSubscription, loadUser } from '../../redux/action/user.js'
import {toast} from "react-hot-toast"

export default function Profile({user}) {

    const {loading,message,error} = useSelector(user => user.profile);
    const {
        loading:subscriptionLoading,
        message:subscriptionMessage,
        error:subscriptionError
    } = useSelector(user => user.subscription);

    const {isOpen,onClose,onOpen} = useDisclosure();
    const dispatch = useDispatch();

    const changeImageSubmitHandler = async (e,image) =>{
            e.preventDefault();
            const myForm = new FormData();
            myForm.append("name",image);
            await dispatch(updateProfilePicture(myForm));
            dispatch(loadUser());
    }

    const cancelSubscriptionHandler = () => {
        dispatch(cancelSubscription());
    }

    useEffect(()=>{
        if(error){
          toast.error(error);
          dispatch({type:"clearError"});
        }
    
        if(message){
          toast.success(message);
          dispatch({type:"clearMessage"});
          dispatch(loadUser());
        }

        if(subscriptionError){
          toast.error(subscriptionError);
          dispatch({type:"clearError"});
        }

        if(subscriptionMessage){
          toast.success(subscriptionMessage);
          dispatch({type:"clearMessage"});
          dispatch(loadUser());
        }


      },[dispatch,message,error,subscriptionError,subscriptionMessage]);
    
    
      const removeFromPlaylistHandler = async (id) => {
        await dispatch(removeFromPlaylist(id));
        dispatch(loadUser);
    }

  return (
   
    <Container minH={"95vh"} minW={"container.lg"} py={"8"}>
        <Heading m="8" textTransform="uppercase" children="Profile" />
        <Stack 
         justifyContent={"flex-start"}
         direction={['column','row']}
         align={"center"}
         spacing={["8","16"]}
         padding={"8"}
        >
            <VStack>
                <Avatar boxSize={"48"} src={user.avatar.url}/>
                    <Button colorScheme='yellow' variant="ghost" onClick={onOpen}>Change Photo</Button>
            </VStack>

            <VStack alignItems={['center',"flex-start"]}>
                <HStack>
                    <Text children="Name" fontWeight={"bold"} />
                    <Text children={user.name}/>
                </HStack>
                <HStack>
                    <Text children="Email" fontWeight={"bold"} />
                    <Text children={user.email}/>
                </HStack>
                <HStack>
                    <Text children="createdAt" fontWeight={"bold"} />
                    <Text children={user.createdAt}/>
                </HStack>
                {user.role !== "admin" && (<HStack>
                    <Text children="Subscription" fontWeight={"bold"} />
                    {user.subscription && user.subscription.status === 'active' ? (
                        <Button 
                        colorScheme={"yellow"} 
                        variant={"ghost"}
                        onClick={cancelSubscriptionHandler}
                        isLoading={subscriptionLoading}
                        >
                        Cancel Subscription
                        </Button>
                    ):(
                     <Link to="/subscribe">
                        <Button colorScheme={"yellow"}>Suscribe</Button>
                     </Link>   
                    )}
                </HStack>)}
                <Stack alignItems={"center"} direction={["column","row"]}>
                    <Link to="/updateprofile">
                        <Button >Update Profile</Button>
                    </Link>
                    <Link to="/changepassword">
                        <Button >Change Password</Button>
                    </Link>
                </Stack>
            </VStack>
        </Stack>

        <Heading children="Playlist" my={"8"} size={"md"}/>
        {
            user.playlist.length >= 0 && (
                <Stack
                direction={["column","row"]}
                alignItems={"center"}
                p={"4"}
                flexWrap={"wrap"}
                >
                    {
                        user.playlist.map((element)=>(
                            <VStack w={"48"} key={element.course} m={"2"}>
                                <Image boxSize={"full"} objectFit={"contain"} src={element.poster}/>
                                <HStack>
                                    <Link to={`/course/${element.course}`}>
                                        <Button colorScheme='yellow' variant={"ghost"}>Watch Now</Button>
                                    </Link>
                                    {/* <Button onClick={()=>removeFromPlaylistHandler(element.course)}><RiDeleteBin6Fill/></Button>
                                */}
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )}
        <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler}/>
    </Container>
  )
}

function ChangePhotoBox({isOpen,onClose,changeImageSubmitHandler}){

    const [image, setImage] = useState("");
    const [imagePrev , setImagePrev] = useState("");

    const fileUploadCss = {
        cursor:"pointer",
        marginLeft:"-5%",
        width:"110%",
        border:"none",
        height:"100%",
        color:"#ECC948",
        backgroundColor:"white"
    }

    const changeImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const closeHandler = () => {
        onClose();
        setImage("");;
        setImagePrev("");
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"}>
                <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Container>
                            <form onSubmit={(e)=> changeImageSubmitHandler(e,image)}>
                                <VStack spacing={"8"}>
                                    {imagePrev && <Avatar boxSize={"48"} src={imagePrev}/>}
                                    <Input type='file' 
                                    css={{"&::file-selector-button":fileUploadCss}}
                                        onChange={changeImage}
                                    />
                                    <Button w={"full"} colorScheme={"yellow"} type='Submit'>Change</Button>
                                </VStack>
                            </form>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={"3"} onClick={closeHandler}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </Modal>
    )

}

