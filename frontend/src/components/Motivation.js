import { Box } from "@chakra-ui/layout";
import EnvironmentLogo from "../images/aaa.png";

export default function Motivation() {
    return (
        <Box className="" id="Motivation"> 
            <Box className="flex flex-col sm:flex-row"> 
                <img src = {EnvironmentLogo}  alt = "" className="object-contain w-full sm:w-1/2 sm:h-1/2"/>
                <Box className="mx-auto py-5 text-center"> 
                    <span className="inline-block text-4xl font-roboto "> Waste Management </span>
                    <span className="block text-4xl font-roboto text-green-900"> Connundrum. </span>

                    <div className="flex flex-col text-left space-y-8 px-4 mt-4 sm:mt-0 sm:px-0"> 

                        <div> 
                            <span className="text-2xl font-roboto"> Context <span className="text-3xl"> &#x1F914; </span> </span> 
                            <ul> Climate change is a critical issue with <span className="font-bold"> global </span> consequences <span>&#x1F30F; </span>.</ul>
                            <ul> Singapore <span> &#x1F1F8;&#x1F1EC; </span>, as a low-lying state <span> &#x1F30A;</span>, faces an existential threat from it. </ul>
                        </div>

                        <div> 
                            <span className="text-2xl font-roboto"> Environmental Impact of Waste <span className="text-3xl"> &#x1F621; </span> </span> 
                            <ul> The waste sector <span> &#x1F5D1; </span> contributes to <span className="text-red-900 font-bold">20% </span>of global methane emissions.</ul>
                            <ul> Recycling <span> &#x267B;</span> can reduce waste sector emissions by up to <span className="text-red-900 font-bold">84%</span>. </ul>
                        </div>
                        <div> 
                            <span className="text-2xl font-roboto"> Challenges in Recycling <span className="text-3xl"> &#x1F630; </span> </span> 
                            <ul> Manual waste sorting <span> &#x1F477;&#x200D;&#x2642;&#xFE0F;</span> is slow <span> &#x23F3; </span>and labour-intensive<span> &#x1F4AA;</span>.</ul>
                            <ul> Contamination from food <span> &#x1F35A; </span>and liquid <span> &#x1F9C3;</span>waste, affects recycling bins. </ul>
                        </div>
                        <div> 
                            <span className="text-2xl font-roboto"> Proposed Solution <span className="text-3xl"> &#x1F4BB; </span> </span> 
                            <ul> Implement deep learning models <span> &#x1F916; </span>for efficient waste sorting <span> &#x1F4C8; </span>.</ul>
                            <ul> Material Recovery Facilities (MRFs) benefit <span> &#x1F44D;</span> from improved operations. </ul>
                            <ul> Automated sorting reduces contamination <span> &#x2B07;</span>, enhancing recycling rates <span> &#x1F333;</span>. </ul>
                        </div>
                    </div>
                    
                </Box>
                
            </Box>
        </Box>
    )
}