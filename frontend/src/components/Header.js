import { Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from "react-scroll";
import Logo from "../images/logo_left.png"

export default function Header() {
    return (
        <Box className="flex flex-row justify-between items-center px-4 pt-2">
            <section className="logo">

                <div className="flex flex-row align-center justify-center items-center"> 
                    <img src = {Logo} alt="" className="object-contain w-20 h-20 "/>
                    <span className="font-logo"> 
                    Environment Busters
                    </span>
                </div>
                
            </section> 

            <div className="flex flex-row space-x-4 font-roboto"> 
                <Link to = "Home" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                Home 
                </Link>

                <Link to="Motivation" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                About Us
                </Link>

                <Link to="HowItWorks" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                How It Works
                </Link>

                <Link to="Demo" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="bg-green-800 text-white rounded-xl p-2 hover:transform hover:scale-110"> Demo </Link>


                
            </div>
        </Box>
    )   
}