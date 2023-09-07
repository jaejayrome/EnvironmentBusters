import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Box, Grid } from '@chakra-ui/react';
import SortingPic from "../images/sorting_bin.png";
import NeuralNetworkLogo from "../images/home_right.png";
import Contamination from "../images/contamination.png";
import { useEffect } from 'react';


export default function HowItWorks() { 

// can change the text to this colour iusing the csss stilyle
//  

  return(
  <Box id="HowItWorks" className="flex justify-center items-center flex-col bg-green-900">
    <Box className="mx-auto py-5 text-center"> 
      <p id="multipleStrings"/>
      
      <span className="inline-block mt-4 text-4xl font-roboto text-white"> Waste Management Made</span>
        <div>
        <span className="inline-block text-4xl font-roboto text-green-200"> Seamless. </span>
        </div>
        
    </Box>

    <div className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-8 px-8 py-8 sm:mb-8'>
    <Card className='items-center jusitfy-center flex shadow-xl p-4 hover:transform hover:scale-105'>
    <Image className = "w-1/3 h-1/3"src={NeuralNetworkLogo}></Image>
      <CardHeader>
        <Heading size='lg'><span className="mt-4 text-xl">AI-Based Recognition</span> </Heading>
      </CardHeader>
      <CardBody>
        <Text>Simply throw your recyclable waste inside! Our smart recycling bin utilises deep learning models
          to identify the waste item and sort it accordingly, achieving an accuracy of over 90%.  </Text>
      </CardBody>
    </Card>
    <Card className='items-center jusitfy-center flex shadow-xl p-4 hover:transform hover:scale-105' >
    <Image className = "w-1/3 h-1/3 object-contain"  src={SortingPic}></Image>
      <CardHeader>
        <Heading size='lg'><span className="mt-4 text-xl">Automatic Sorting</span></Heading>
      </CardHeader>
      <CardBody>
        <Text className=''>The recognised waste will be transported to the correct bin. Everything happens seamlessly and automatically! </Text>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
    <Card className='items-center jusitfy-center flex shadow-xl p-4 hover:transform hover:scale-105'>
      <Image src={Contamination} className = "w-1/3 h-1/3 object-contain"></Image>
      <CardHeader>
        <Heading size='lg'><span className="mt-4 text-xl">Reduced Contamination</span> </Heading>
      </CardHeader>
      <CardBody>
        <Text>Proportion of waste contaminated is minimised as waste items are stored in bins of 5 main categories - Paper, Plastic, Metal, Glass and Others.  </Text>
      </CardBody>
      <CardFooter>
      </CardFooter>
    </Card>
  </div>
</Box>
  )
}