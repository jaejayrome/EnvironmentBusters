import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Box } from '@chakra-ui/react';
import SortingPic from "../images/sorting_bin.png";
import NeuralNetworkLogo from "../images/home_right.png";
import Contamination from "../images/contamination.png";
import { useEffect } from 'react';


export default function HowItWorks() { 



  return(
    <Box id="HowItWorks">
      <Box className="mx-auto py-5 text-center"> 
      <p id="multipleStrings"/>
      
      <span className="inline-block mt-4 text-4xl font-roboto "> Waste Management Made</span>
        <span className="block text-4xl font-roboto text-green-900"> Seamless. </span>
    </Box>

  <SimpleGrid justifyContent={"center"} alignContent={"center"}
  style={{alignItems: "center", justifyContent: "center"}} w="fit-content" spacing={5} templateColumns='repeat(auto-fill, minmax(250px, 2fr))'>
  <Card>
    <CardHeader>
      <Heading size='md'><Image src={NeuralNetworkLogo}></Image><span className="mt-4 text-xl">AI-Based Recognition</span> </Heading>
    </CardHeader>
    <CardBody>
      <Text>Simply throw your recyclable waste inside! Our smart recycling bin utilises deep learning models
        to identify the waste item and sort it accordingly, achieving an accuracy of over 90%.  </Text>
    </CardBody>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card height="477px">
    <CardHeader>
      <Heading size='md'><Image height="160px" fit="cover" src={SortingPic}></Image><span className="mt-4 text-xl">Automatic Sorting</span></Heading>
    </CardHeader>
    <CardBody>
      <Text>The recognised waste will be transported to the correct bin. Everything happens seamlessly and automatically! </Text>
    </CardBody>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'><Image src={Contamination} height="160px" width="180px"></Image><span className="mt-4 text-xl">Reduced Contamination</span> </Heading>
    </CardHeader>
    <CardBody>
      <Text>Proportion of waste contaminated is minimised as waste items are stored in bins of 5 main categories - Paper, Plastic, Metal, Glass and Others.  </Text>
    </CardBody>
    <CardFooter>
    </CardFooter>
  </Card>
</SimpleGrid>
</Box>
  )
}