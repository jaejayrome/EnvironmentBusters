import { Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import DockerLogo from '../images/docker12.webp'
import PythonLogo from '../images/pyt.png'
import YoloV8Logo from "../images/yolov8.png";
import PytorchLogo from "../images/pytorch_logo.png"
import FastLogo from '../images/fastest.png'

export default function Automated() {
    return (
        <div className="bg-white flex flex-col"> 
            <Box className="mx-auto py-5 text-center"> 

                <span className="inline-block mt-4 text-4xl font-roboto text-black"> Waste Management Made</span>

                <div>
                    <span className="inline-block text-4xl font-roboto text-green-900"> Automated. </span>
                </div>

                <div> 
                    <span className="font-roboto"> Supported by modern technologies built for the software </span>
                </div>

                <div> 
                    

                    <div className="grid grid-rows-5 sm:grid-cols-5 sm:grid-rows-1 space-y-6 sm:space-y-0 sm:space-x-8 mt-5"> 
                    
                        <div> 
                            <img src = {PythonLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div> 
                            <img src = {PytorchLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div> 
                            <img src = {YoloV8Logo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div> 
                            <img src = {FastLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div> 
                            <img src = {DockerLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                    </div>
                </div>
                
            </Box>

            {/* <div className="grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 grid gap-6 items-center mt-8 mx-10 min-h-full"> 
                <div className="flex flex-col justify-center items-center bg-green-900 shadow-xl rounded-xl p-4 min-h-full hover:scale-105"> 
                    <div> 
                        Accurate
                    </div>
                </div>
            </div> */}
        </div>
    )
}