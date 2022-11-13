
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  
  const BodySection_HomePage = () => {
    const [bodySection, setBodySection] = useState([]);
  
    const breakpoints = {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1100px",
      "2xl": "1536px",
    };
  
    const basicBoxStyles = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      textShadow: "0 0 20px black",
      fontWeight: "bold",
      fontSize: "20px",
      color: "white",
    };
  
    useEffect(() => {
      axios.get("https://api-0231.herokuapp.com/bodySection").then((res) => {
        setBodySection(res.data);
      });
    }, []);
  
    return (
      <Box w="90%" h="auto" mt="6rem" m="auto">
        <Flex
          direction={{ base: "column", xl: "row" }}
          alignItems={{ base: "center" }}
        >
          <Box
            boxShadow="lg"
            w={{ base: "100%", lg: "35%" }}
            mb={{ base: "2rem" }}
            h="auto"
          >
            <Text
              mt="2rem"
              fontWeight="100"
              fontSize="24px"
              textAlign="center"
              color="gray"
            >
              Fully Managed Communities By
            </Text>
            <Text
              mt="0.4rem"
              fontWeight="100"
              color="gray"
              fontSize="24px"
              textAlign="center"
            >
              Tripvillas
            </Text>
            <Box m="auto" h="240px" w="94%" mt="2rem">
              <Flex>
                <Box w="50%" h="100px">
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/housekeeper.svg"
                      mb="1rem"
                    ></Image>
                    <Text mb="1rem" textAlign="center" fontWeight="300">
                      High Quality housekeeping
                    </Text>
                  </Flex>
                </Box>
                <Box w="50%" h="100px">
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/towel.svg"
                      mb="1rem"
                    ></Image>
                    <Text mb="1rem" textAlign="center" fontWeight="300">
                      Comfortable Linen and Toiletries
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex>
                <Box w="50%" h="100px">
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/bed.svg"
                      mb="1rem"
                      mt="1rem"
                    ></Image>
                    <Text textAlign="center" fontWeight="300">
                      Quality Furniture & Fittings
                    </Text>
                  </Flex>
                </Box>
                <Box w="50%" h="100px">
                  <Flex direction="column">
                    <Image
                      display="block"
                      m="auto"
                      w="40px"
                      h="40px"
                      src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/dinner.svg"
                      mb="1rem"
                      mt="1rem"
                    ></Image>
                    <Text textAlign="center" fontWeight="300">
                      Food Delivery Or Central Restaurant
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
  
          <Box
            w={{ base: "100%", lg: "65%" }}
            h="auto"
            ml={{ base: "auto", lg: "2rem" }}
          >
            <Grid
              templateRows={{ base: "repeat(12, auto)", lg: "repeat(3, auto)" }}
              templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={6}
            >
              {bodySection.map((sec) => {
                return (
                  <GridItem
                    m={{ base: "auto" }}
                    sx={basicBoxStyles}
                    w="100%"
                    h="150px"
                  >
                    <Image
                      filter="auto"
                      brightness="50%"
                      src={sec.img}
                      alt="image"
                      w={{ base: "80%", lg: "100%" }}
                      h="150px"
                    ></Image>
                    <Flex
                      direction="column"
                      fontSize={{ base: "10px", md: "10px", lg: "8px" }}
                      justifyContent="center"
                      alignItems="center"
                      alignContent="center"
                    >
                      <Text
                        textAlign="center"
                        fontWeight="700"
                        position="relative"
                        color="white"
                        ml={{
                          base: "-18rem",
                          md: "-32rem",
                          lg: "-8rem",
                          xl: "-10rem",
                          "2xl": "-12rem",
                        }}
                      >
                        {sec.name}
                      </Text>
                      <Text
                        textAlign="center"
                        fontWeight="400"
                        position="relative"
                        color="whitesmoke"
                        ml={{
                          base: "-18rem",
                          md: "-32rem",
                          lg: "-8rem",
                          xl: "-10rem",
                          "2xl": "-12rem",
                        }}
                      >
                        {sec.location}
                      </Text>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </Flex>
  
        <Flex
          direction={{ base: "column", lg: "row" }}
          mb={{ base: "2rem", lg: "2rem" }}
          mt="4rem"
          justifyContent="space-between"
        >
          <Box
            boxShadow="lg"
            mb={{ base: "2rem", lg: "2rem" }}
            w={{ base: "100%", lg: "48%" }}
            h="auto"
          >
            <Text fontSize="24px" fontWeight="200" textAlign="center">
              Holiday Home Investment Opportunities
            </Text>
            <Flex
              w="90%"
              mt="2rem"
              mb="2rem"
              ml="auto"
              mr="auto"
              justifyContent="space-around"
            >
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/growth.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Low Cost High Appreciation
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/maids.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Professionally Managed
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column" w="80%">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/give-money.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Guaranteed To Produce Income
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/plan.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    We Designed Floor Plans
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Button
              pl="2rem"
              pr="2rem"
              fontSize="13px"
              display="block"
              m="auto"
              borderRadius="none"
              colorScheme="blue"
              fontWeight="400"
            >
              EXPLORE INVESTMENT OPPORTUNITIES
            </Button>
          </Box>
  
          <Box boxShadow="lg" w={{ base: "100%", lg: "48%" }} h="auto">
            <Text fontSize="24px" fontWeight="200" textAlign="center">
              Are You A Holiday Home Owner/Manager?
            </Text>
            <Flex
              w="90%"
              mt="2rem"
              mb="2rem"
              ml="auto"
              mr="auto"
              justifyContent="space-around"
            >
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/network.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Get Bookings From 100+ Websites
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/layout.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    One Dashboard - Total Control
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/flash.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Instant Book Or Request To Book
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex direction="column">
                  <Image
                    w="40px"
                    h="40px"
                    mb="1rem"
                    src="https://d2vcelvjdj7n25.cloudfront.net/newhome/icons/smartphone-call.svg"
                    display="block"
                    m="auto"
                  ></Image>
                  <Text fontWeight="360" textAlign="center" mt="1rem">
                    Both iOS & Android App Available.
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Button
              pl="2rem"
              pr="2rem"
              fontSize="13px"
              display="block"
              m="auto"
              borderRadius="none"
              colorScheme="blue"
              fontWeight="400"
            >
              LIST YOUR PROPERTY
            </Button>
          </Box>
        </Flex>
      </Box>
    );
  };
  
  export default BodySection_HomePage;