import { Box } from "@chakra-ui/layout";
import EnvironmentLogo from "../images/aaa.png";

export default function Motivation() {
    return (
        <Box className=""> 
            <Box className="flex flex-row"> 
                <img src = {EnvironmentLogo}  alt = "" className="object-contain w-1/2 h-1/2"/>
                <Box className="mx-auto py-5 text-center"> 
                    <span className="inline-block text-4xl font-roboto "> Waste Management </span>
                    <span className="block text-4xl font-roboto"> Revolutionised. </span>

                    <span> Include Problem Statement Here</span>
                </Box>
                
            </Box>
        </Box>
    )
}