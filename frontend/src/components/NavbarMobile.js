import { IconButton } from '@chakra-ui/react';
import {FaAlignJustify} from 'react-icons/fa6';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { Link } from "react-scroll";

export default function NavbarMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = () => {
    onOpen()
    }

    return (
    <>
        <IconButton variant = "outlined" aria-label='navbar-mobile' icon={<FaAlignJustify />} onClick={handleClick}> 
        </IconButton>

        <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement='top' closeOnEsc blockScrollOnMount returnFocusOnClose = {false}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>{`Environment Busters`}</DrawerHeader> */}
            <DrawerBody>
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

                <Link to="Demo" spy={true} smooth={true} duration={500} style={{cursor: "pointer"}}className="bg-green-900 text-white p-2 rounded-xl justify-center items-center flex hover:transform hover:scale-110"> 
                <span> Demo </span> 
                </Link>
            </div>
            </DrawerBody>
        </DrawerContent>
        </Drawer>
    </>
    )
}