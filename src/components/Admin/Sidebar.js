import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiDashboardFill, RiAddCircleFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
    const location = useLocation();
  return (
    <VStack
    spacing={'8'}
    p={"16"}
    boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}>
    <LinkButton  
    Icon={RiDashboardFill} 
    url={"dashboard"} 
    text="Dashboard" 
    active={location.pathname==="/admin/dashboard"}/>
    <LinkButton  
    Icon={RiAddCircleFill} 
    url={"createcourse"} 
    text="Create Course"
    active={location.pathname==="/admin/createcourse"}
    />
    <LinkButton  
    Icon={RiDashboardFill} 
    url={"admincourses"} 
    text="Courses"
    active={location.pathname==="/admin/admincourses"}
    />
    <LinkButton  
    Icon={RiDashboardFill} 
    url={"users"} 
    text="Users"
    active={location.pathname==="/admin/users"}
    />
    </VStack>
  )
}

function LinkButton({url,Icon,text,active}){
    return (
        <Link to={`/admin/${url}`}>
        <Button fontSize={"lg"} variant={"ghost"} colorScheme={active?"purple":""}>
            <Icon style={{margin:"4px"}}/>
            {text}
        </Button>
    </Link>
    )
}
