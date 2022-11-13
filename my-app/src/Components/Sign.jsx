import { Box,HStack, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
 } from "@chakra-ui/react";
 import { Link, NavLink } from "react-router-dom";
 import { ArrowDownIcon, HamburgerIcon,SmallAddIcon,} from '@chakra-ui/icons'
 

 const Sign=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        
       <div>
         <HStack p={"5px"} gap="20px">
                <SmallAddIcon color={"White"} cursor="pointer" onClick={onOpen}/>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent w={"8rem"} ml="200px">
                            <ModalBody >
                            <NavLink to='/login'><Box>Sign In</Box></NavLink>
                            <Link to={'/Signup'}><Box>Sign up</Box></Link>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Button bg={"262626"} color={"gray"}>INR<ArrowDownIcon/></Button>
                </HStack>
       </div>
        
    )
 }
 export default Sign
