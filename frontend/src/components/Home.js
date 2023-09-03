import { Box } from "@chakra-ui/layout"
import NeuralNetworkLogo from "../images/front_page_logo.png";
import YoloV5Logo from "../images/yolov5.png";
import PytorchLogo from "../images/pytorch_logo.png"

export default function Home() {

    return (
        <Box className="min-w-full bg-green-900 py-40" id="Home"> 
            <div className="flex flex-row justify-center space-between text-white font-roboto px-4 py-8"> 
                <section id = "left hand title"> 
                    <div className=" flex flex-col space-y-4 text-center"> 
                        <div> 
                            <span className="text-5xl"> 
                                Waste Management 
                            </span> 
                            <span className="text-6xl block text-green-200"> 
                                Simplified.
                            </span>
                        </div>

                        <div className="text-2xl"> 
                            <span className="block"> 
                            Introducing 
                                <span className="inline-block font-code"> 
                                &nbsp;plastic_eliminator v1.0 
                                </span>
                            <span className="block"> 
                                An image classifier <span className="text-green-200">deep learning</span> model that aims to detect plastics
                            </span>                         
                            </span>
                        </div>
                    </div>
                    
                </section>
                <section className="right hand showcase"> 
                <div className="flex justify-center items-center"> 
                    <img src = {NeuralNetworkLogo} alt = "" className="object-contain w-1/2 h-1/2"/>
                </div>
                    
                </section>
            </div>
            <section id = "tech-stack"> 
            
                <div className="flex flex-row justify-center items-center"> 
                    <div className="bg-green-200 mt-8 px-2 py-0 mx-auto flex flex-row items-center justify-center rounded-xl"> 
                        <span> 
                            Built With
                        </span>
                        
                        <img src = {YoloV5Logo} alt = "" className="object-contain w-20 h-20"/>
                        <img src = {PytorchLogo} alt = "" className="object-contain w-20 h-20"/>
                    </div>
                </div>
            </section>
        </Box>
    )
}