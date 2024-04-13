import { Box, Grid, HStack, Heading, Progress, Stack, Text, VStack } from '@chakra-ui/react'
import React ,{useEffect} from 'react'
import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart } from './Chart';
import { useDispatch } from 'react-redux';
import { getDashboardStats } from '../../../redux/action/admin';

const Databox = ({title,qty,qtypercent,profit}) =>(
    <Box
    p={"8"}
    m={"10"}
    w={["full","20%"]}
    boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
    borderRadius={"lg"}
    >
    
    <Text children={title} />
    
    <HStack spacing={"6"}>
     <Text fontSize={"2xl"} fontWeight={"bold"} children={qty}/>
 
      <HStack>
        <Text children={`${qtypercent}%`} />
        {profit ?(
            <RiArrowUpLine color='green' />
        ):(
            <RiArrowDownLine color='red'/>
        )}
      </HStack>
    </HStack>
    <Text children={"Since Last Month"} opacity={"0.6"} />

    </Box>
);

const Bar = ({title,value,profit}) => (
    <Box py={"4"} px={["0","20"]}>
     <Heading size={"sm"} children={title} mb={"2"}/>
     <HStack w={"full"} alignItems={"center"}>
        <Text children={profit?"0%":`-${value}`}/>
        <Progress w="full" value={profit?value:0} colorScheme='purple'/>
        <Text children={`${value>100?value:100}%`} />
        
     </HStack>

     </Box>
)

export default function Dashboard() {

    const dispatch = useDispatch();

    useEffect(() => {
     dispatch(getDashboardStats());
    }, [dispatch])
    

  return (
    <Grid
    minH={"100vh"}
    templateColumns={["1fr","5fr 1fr"]}
    css={{
        cursor:`url(),default`
    }}
    >
    <Box boxSizing='border-box' py={"16"} px={["4","0"]}>

     <Text textAlign={"center"} opacity={"0.5"} 
     children={`Last change was on ${String(new Date()).split("G")[0]}`}
     />

     <Heading
     children="Dashboard"
     mb={"16"}
     ml={["0","16"]}
     textAlign={["center","left"]}
     />

     <Stack
     direction={["column","row"]}
     minH={"24"}
     justifyContent={"space-evenly"}
     >

     <Databox title={"Views"} qty={23} qtypercent={12} profit={true}/>
     <Databox title={"Users"} qty={23} qtypercent={34} profit={true}/>
     <Databox title={"Subscription"} qty={23} qtypercent={70} profit={true}/>
     </Stack>

     <Box
     m={["0","16"]}
     borderRadius={"lg"}
     p={["0","16"]}
     mt={["4","16"]}
     boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"} 
     >
        
        <LineChart />
    </Box>

        
        <Grid templateColumns={["1fr","2fr 1fr"]}>
       
            <Box>
            <Heading 
                textAlign={["center","left"]}
                size={"md"}
                children="Progress Bar"
                my={"8"}
                ml={["0","16"]}
            />
            
            <Box>
                <Bar profit={true} title={"Views"} value={12}/>
                <Bar profit={true} title={"Users"} value={34}/>
                <Bar profit={true} title={"Subscription"} value={70}/>
            </Box>
            </Box>

            <Box p={["0","16"]} boxSizing='border-box' py={"4"}>
                <Heading textAlign={"center"} size={"md"} mb={"4"} children="Users" />
                <DoughnutChart/>
            </Box>
        </Grid>
     
    </Box>
    <Sidebar />
    </Grid>
  )
}
