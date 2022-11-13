import { Box,HStack, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
 } from "@chakra-ui/react";
import { ArrowDownIcon, HamburgerIcon,SmallAddIcon,} from '@chakra-ui/icons'
import { DrawerBody, DrawerCloseButton,Drawer,Divider,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    Text,Placement } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React,{useState} from "react";
import Sign from "../Components/Sign";

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("right");
   
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
            <HStack style={{ backgroundColor: "#262626" }} p="0.5rem" position="static" justifyContent={"space-between"}>
            <Link color='teal.500' to={'/'}>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThAZDMuE0muw583ibP5kksvjdNwgmIXic-mt9OSKEaPR7HSUVgXL630R41rtDqNqNT-98&usqp=CAU' w={"150px"} alt='Dan Abramov' />
            </Link>

            {/* <HStack p={"5px"} gap="20px"> */}
                {/* <SmallAddIcon color={"White"} cursor="pointer" onClick={onOpend}/>
                <Modal isOpen={isOpend} onClose={onClosed}>
                    <ModalOverlay>
                        <ModalContent w={"8rem"} ml="1400px">
                            <ModalBody >
                            <Link to={'/SignIn'}><Box>Sign In</Box></Link>
                            <Link to={'/Signup'}><Box>Sign up</Box></Link>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Button bg={"262626"} color={"gray"}>INR<ArrowDownIcon/></Button> */}
              
                <Sign/>

            
                
                <Button
              as={IconButton}
              icon={<HamburgerIcon color="white" h="6" w="6" />}
              backgroundColor="#262626"
              color="white"
              colorScheme="white"
              onClick={onOpen}
              _hover={{
                bg: "none",
                color: "none",
              }}
            >
              {/* Open */}
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent backgroundColor="black">
                <DrawerCloseButton color="white" />
                <DrawerBody color="white" fontSize="14px" textAlign="center">
                  <Box mt="2rem">
                    <Text>ARE YOU A PROPERTY OWNER/MANAGER?</Text>
                    <Link
                      to="/addproperty-form-1"
                      color="whiteAlpha.700"
                      mt="0.6rem"
                      mb="0.6rem"
                    >
                      List New Property
                    </Link>
                    <Text color="whiteAlpha.700">
                      Sign in to your Dashboard
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="4rem" />
                  <Box>
                    <Text>HOLIDAY HOMES FOR SALE</Text>
                    <Text color="whiteAlpha.700" mt="0.6rem" mb="0.6rem">
                      Tripvillas Managed
                      <Text fontSize="13px">
                        Homes from A grade developers. Rentals guaranteed
                      </Text>
                    </Text>
                    <Text color="whiteAlpha.700">
                      Marketplace
                      <Text fontSize="13px">
                        See what homes are up for sale from different property
                        owners.
                      </Text>
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Box>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      About Us
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Privacy Policy
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Terms of Use
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      FAQs
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Contact Us
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Text color="whiteAlpha.800">© Tripvillas Pte Ltd</Text>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            </HStack>
            {/* </HStack> */}
            
        </Box>
        </>
    )
}

