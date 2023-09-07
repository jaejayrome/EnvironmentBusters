import { Box } from "@chakra-ui/layout";
import EnvironmentLogo from "../images/aaa.png";

export default function Motivation() {
    return (
        <Box className="" id="Motivation"> 
            <Box className="flex flex-col sm:flex-row"> 
                <img src = {EnvironmentLogo}  alt = "" className="object-contain w-full sm:w-1/2 sm:h-1/2"/>
                <Box className="mx-auto py-5 text-center"> 
                    <span className="inline-block text-4xl font-roboto "> Waste Management </span>
                    <span className="block text-4xl font-roboto text-green-900"> Revolutionised. </span>

                    <span className="block mt-10 ml-2 mr-2 first_paragraph"> Climate change is the defining issue of our time and generation.
                    It has altered
                    weather patterns, affected food and water supplies, and caused rising sea levels.
                    As a low-lying island citystate, it is an <span style={{fontWeight: "bold", fontSize: "20px"}}>existential threat </span>   
                    for Singapore.  </span>

                    <span className="block mt-5 ml-2 mr-2second_paragraph">
                        According to the Global Alliance for Incinerator Alternatives (GAIA), the waste sector is responsible for 20% of global methane emissions. 
                        Yet, waste reduction solutions like recycling can reduce the sector's total emissions by 84%. 
                        
                    </span>

                    <span className="block ml-2 mr-2 mt-5">
                        In waste recycling, sorting of recyclable items is a critical stage. 
                        However, existing workflows in Singapore rely on humans 
                        for sorting, which is not only slow but labour-intensive, creating significant inefficiencies. Additionally, the National Environment Agency (NEA) 
                        has found that almost 60% of the waste thrown into recycling bins cannot be recycled due to contamination, mainly from food and liquid waste. 
                    </span>

                    <span className="block ml-2 mr-2 mt-5">
        
                        As such, our solution aims to streamline the sorting processes of recyclable waste and significant increase the efficiency of
                        operations in Material Recovery Facilities (MRFs) by utilising deep learning models to identify and automatically sort the waste collected in recycling bins. 

                        At the same time, the sorting of waste items into their respective material categories helps to reduce widespread contamination of recyclable waste, 
                        optimising the proportion of waste successfully recycled. 
                    </span> 
                </Box>
                
            </Box>
        </Box>
    )
}