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
                <Link to = "Home" style={{cursor: "pointer"}}className="p-2"> 
                Home 
                </Link>

                <Link to="Motivation" style={{cursor: "pointer"}}className="p-2"> 
                About Us
                </Link>

                <Link to="Demo" style={{cursor: "pointer"}}className="bg-green-800 text-white rounded-xl p-2"> Demo </Link>
                
            </div>
        </Box>
    )   
}