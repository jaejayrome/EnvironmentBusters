import { Box, UnorderedList, ListItem } from "@chakra-ui/layout";
import { Button, ButtonGroup, useEditable } from '@chakra-ui/react'
import { Link } from "react-scroll";
import Logo from "../images/logo_left.png"
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";


export default function Header() {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 430) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        const updateMedia = () => {
            if (window.innerWidth < 430) {
            setMobile(true);
            } else {
            setMobile(false);
            }
        };
        
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, [])

    return (
        <Box className="flex flex-row justify-between items-center px-4 pt-2">
            <section className="logo">

                <div className="flex flex-row align-center justify-center items-center"> 
                    <img src = {Logo} alt="" className="object-contain w-20 h-20 "/>
                    <span className="font-logo"> 
                    EcoVision
                    </span>
                </div>
                
            </section> 

            {isMobile ? <NavbarMobile/> :<div className="flex flex-row space-x-4 font-roboto"> 
                <Link to = "Home" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                Home 
                </Link>

                <Link to="Motivation" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                Problem
                </Link>

                <Link to="HowItWorks" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                How It Works
                </Link>

                <Link to="Evaluation" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="p-2 hover:transform hover:scale-110 hover:underline hover:underline-offset-8"> 
                Evaluation
                </Link>

                <Link to="Demo" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="bg-green-800 text-white rounded-xl p-2 hover:transform hover:scale-110"> Demo </Link>
            </div>}
        </Box>
    )   
}