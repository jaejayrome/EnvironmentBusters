import { Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import DockerLogo from '../images/docker12.webp'
import PythonLogo from '../images/pyt.png'
import YoloV8Logo from "../images/yolov8.png";
import PytorchLogo from "../images/pytorch_logo.png"
import FastLogo from '../images/fastest.png'
import ProductionSpecification from "../images/production_specificationpng.png"
import ProductionPrototype from "../images/prototype_bin.png"

export default function Automated() {
    return (
        <div className="bg-white flex flex-col" id="Evaluation"> 
            <Box className="mx-auto py-5 text-center"> 

                <span className="inline-block mt-4 text-4xl font-roboto text-black"> Waste Management</span>

                <div>
                    <span className="inline-block text-4xl font-roboto text-green-900"> Automated. </span>
                </div>

                <div> 
                    <span className="font-roboto"> Supported by modern technologies built for the software </span>
                </div>

                <div> 
                    

                    <div className="grid grid-rows-5 sm:grid-cols-5 sm:grid-rows-1 space-y-6 sm:space-y-0 sm:space-x-8 mt-5"> 
                    
                        <div className="mx-auto"> 
                            <img src = {PythonLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div className="mx-auto"> 
                            <img src = {PytorchLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div className="mx-auto"> 
                            <img src = {YoloV8Logo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div className="mx-auto"> 
                            <img src = {FastLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                        <div className="mx-auto">  
                            <img src = {DockerLogo} className="object-contain w-[80px] h-[80px]"/>
                        </div>
                    </div>
                </div>
                
            </Box>

            <div className="flex"> 
                <div className="grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 grid gap-8 mt-8 w-full min-h-full"> 

                    <div className="p-4 mx-8 flex flex-col justify-center items-center text-green-900 bg-white shadow-xl rounded-xl border-2 border-green-900 min-h-full hover:scale-105"> 
                        <div className="font-roboto text-2xl"> 
                            Accurate
                        </div>

                        <div> 
                            <span> Over <span className="text-4xl"> 95% </span> Confidence Interval in Garbage Classification</span>
                        </div>


                    </div>

                    <div className="mx-8 flex flex-col justify-center items-center bg-white shadow-xl rounded-xl p-4 min-h-full border-2 border-green-900  hover:scale-105"> 
                        <div className="text-green-900 font-roboto text-xl"> 
                            Scalable
                        </div>

                        <div className="text-green-900"> 
                            <span> <span className="font-bold"> Easy Deployment </span>  of Software irregardless of CPU Architecture with the use of <span className="font-bold"> Docker Containers</span> to host the model</span>
                        </div>
                    </div>

                    <div className="mx-8 flex flex-col justify-center items-center bg-white shadow-xl rounded-xl p-4 min-h-full border-2 border-green-900 hover:scale-105"> 
                        <div className="text-green-900 font-roboto text-xl"> 
                            Compact
                        </div>

                        <div className="text-green-900"> 
                            <span> Leveraging Raspberry Pis for container hosting provides a distinct <span className="font-bold">spatial efficiency advantage</span>, thanks to the <span className="font-bold">compact form factor</span> of these units.</span>
                        </div>
                    </div>
                </div>
            </div>

            <section id ="product prototype"> 
            <div className="flex flex-col sm:flex-row items-center justify-center my-8 "> 
                <div className="px-4"> 
                    <span className="text-2xl py-4 block font-roboto text-green-900"> Prototype Recycle Bin </span>
                    <img src = {ProductionPrototype} className="object-contain w-full h-full"/>
                </div>

                <div className="px-4"> 
                    <span className="text-2xl py-4 block font-roboto text-green-900"> Prototype Architecture </span>
                    <img src = {ProductionSpecification} className="object-contain w-full h-full"/>
                </div>
            </div>
            </section>
        </div>
    )
}