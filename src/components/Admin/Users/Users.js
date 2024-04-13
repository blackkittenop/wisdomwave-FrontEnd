import { Box, Button, Grid, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr , Heading} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers, updateUserRole } from '../../../redux/action/admin';
import toast from 'react-hot-toast';


export default function Users() {

  const {users,loading,error,message} = useSelector(state=>state.admin);
  const dispatch = useDispatch();

  const updateHandler = (userId) => {
    dispatch(updateUserRole(userId));
  }

  const deleteButtonHandler = (userId) => {
    dispatch(deleteUser(userId));
  }

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }

    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"});
    }

    dispatch(getAllUsers());
  },[dispatch,message,error])

  return (
    <Grid
    minH={"100vh"}
    templateColumns={["1fr","5fr 1fr"]}
    css={{
        cursor:`url(),default`
    }}
    >
    
      <Box p={["0","16"]} overflowX={"auto"}> 
    <Heading 
          textTransform={"uppercase"}
          children="All Users"
          my={"16"}
          textAlign={["center","left"]}
        />

    <TableContainer w={["100vw","full"]}>
      <Table variant={"simple"} size={"lg"}>
        <TableCaption>All available users in the Database</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>subscription</Th>
            <Th isNumeric >Action</Th>
          </Tr>
        </Thead>

        <Tbody>
         {
          users && users.map((item)=>(
            <Row 
              key={item._id} 
              item={item} 
              updateHandler={updateHandler} 
              deleteButtonHandler={deleteButtonHandler}/>
          ))
         }
        </Tbody>
      </Table>
    </TableContainer>
    </Box>
    
    <Sidebar />
    </Grid>
  )
}

function Row({item,updateHandler,deleteButtonHandler}){
 return (
  <Tr>
    <Td>{`#${item._id}`}</Td>
    <Td>{item.name}</Td>
    <Td>{item.email}</Td>
    <Td>{item.role}</Td>
    <Td>{item.subscription && item.subscription.status === "active" ? "Active":"Not Active"}</Td>
    <Td isNumeric>
      <HStack justify={"flex-end"}>
        <Button onClick={()=>updateHandler(item._id)} variant={"outline"} color={"purple.500"} >Change Role</Button>
        <Button onClick={()=>deleteButtonHandler(item._id)} color={"purple.600"}><RiDeleteBin7Fill/></Button>
      </HStack>
    </Td>
  </Tr>
 )
}