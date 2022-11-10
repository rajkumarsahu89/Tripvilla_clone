import { Box,HStack, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
 } from "@chakra-ui/react";
import { ArrowDownIcon, HamburgerIcon, LockIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
            <HStack style={{ backgroundColor: "#262626" }} p="0.5rem" position="static" justifyContent={"space-between"}>
            <Link color='teal.500' to={'/'}>
            <Image src='https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png' w={"150px"} alt='Dan Abramov' />
            </Link>

            <HStack p={"5px"} gap="20px">
                <LockIcon color={"White"} cursor="pointer" onClick={onOpen}/>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent w={"8rem"} ml="500px">
                            <ModalBody >
                            <Link to={'/SignIn'}><Box>Sign In</Box></Link>
                            <Link to={'/Signup'}><Box>Sign up</Box></Link>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Button bg={"262626"} color={"white"}>INR<ArrowDownIcon/></Button>
                <HamburgerIcon color={"White"}/>
            </HStack>
            </HStack>
            
        </Box>
        </>
    )
}

