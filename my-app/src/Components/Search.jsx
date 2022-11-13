
import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Text,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { SearchIcon } from "@chakra-ui/icons";
  
  const Search = () => {
    // For search location
    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);
  
    const breakpoints = {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1100px",
      "2xl": "1536px",
    };
  
    const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
  
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    useEffect(() => {
      fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(JSON.parse(result));
          setListPlace(JSON.parse(result));
        })
        .catch((err) => console.log("err: ", err));
    }, [queryString]);
  
    const bgImg = {
      filter: "blur(0.1px)",
      WebkitFilter: "blur(0.1px)",
      height: "auto",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "0px",
      cursor: "pointer",
      brightness: "30%",
    };
  
    const hotelImg = {
      blurImg:
        "url(https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg) center/cover no-repeat",
    };
  
    const basicBoxStyles = {
      color: "white",
      textShadow: "0 0 20px black",
      fontWeight: "bold",
      fontSize: "20px",
      color: "white",
      height: "520px",
    };
  
    return (
      <Box>
        <Box sx={basicBoxStyles}>
          <Image
            src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
            w="100%"
            h="520px"
            maxW="100%"
            filter="auto"
            brightness="40%"
          ></Image>
          <Flex justifyContent="center" brightness="100%">
            <Box
              minW={{ base: "90%", lg: "884px" }}
              maxW={{ base: "90%" }}
              h="auto"
              color="white"
              fontWeight="600"
              position="relative"
              mt="-22rem"
            >
              <Text fontSize="26px">
                Book
                <Text ml="0.4rem" mr="0.4rem" as="s">
                  Hotels
                </Text>
                Vacation Rentals
              </Text>
              <Text fontSize="26px" mb="1rem">
                Top Holiday Homes - Villas, Apartments & Homestays
              </Text>
              <Box
                maxW="100%"
                display="flex"
                margin="auto"
                h="auto"
                background="white"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                pb={{ base: "0rem", lg: "1rem" }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                  pt="0.6rem"
                  pl="0.6rem"
                  pr="0.6rem"
                  color="black"
                  direction={{ base: "column", xl: "row" }}
                >
                  <Flex
                    direction="column"
                    h="auto"
                    overflowY="hidden"
                    textShadow="none"
                    fontWeight="200"
                    w="100%"
                  >
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.400" />}
                      />
  
                      <Input
                        borderRadius="none"
                        w="200%"
                        pl="2rem"
                        type="text"
                        placeholder="Location"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
                        }}
                      ></Input>
                    </InputGroup>
                  </Flex>
  
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          data-svg="sign-in"
                        >
                          <polygon
                            fill="grey"
                            points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"
                          ></polygon>
                          <polygon
                            fill="grey"
                            points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"
                          ></polygon>
                        </svg>
                      }
                    />
                    <Input
                      borderRadius="none"
                      w="100%"
                      type="date"
                      placeholder="Check In"
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          data-svg="sign-out"
                        >
                          <polygon
                            fill="grey"
                            points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
                          ></polygon>
                          <polygon
                            fill="grey"
                            points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"
                          ></polygon>
                        </svg>
                      }
                    />
                    <Input
                      borderRadius="none"
                      w="100%"
                      type="date"
                      placeholder="Check Out"
                      onFocus="(this.type='date')"
                    ></Input>
                  </InputGroup>
                  <Select
                    placeholder="Select Guests"
                    borderRadius="none"
                    w="100%"
                    color="gray.600"
                    p="0"
                  >
                    <option value="option1">1 guest</option>
                    <option value="option2">2 guests</option>
                    <option value="option3">3 guests</option>
                    <option value="option4">4 guests</option>
                    <option value="option5">5 guests</option>
                    <option value="option6">6 guests</option>
                    <option value="option7">7 guests</option>
                    <option value="option8">8 guests</option>
                    <option value="option9">9 guests</option>
                    <option value="option10">10 guests</option>
                    <option value="option11">11 guests</option>
                    <option value="option12">12 guests</option>
                    <option value="option13">13 guests</option>
                    <option value="option14">14 guests</option>
                    <option value="option15">15 guests</option>
                    <option value="option16">16 guests</option>
                    <option value="option17">17 guests</option>
                    <option value="option18">18 guests</option>
                    <option value="option19">19 guests</option>
                    <option value="option20">20 guests</option>
                    <option value="option21">21 guests</option>
                    <option value="option22">22 guests</option>
                    <option value="option23">23 guests</option>
                    <option value="option24">24 guests</option>
                    <option value="option25">25 guests</option>
                    <option value="option26">26 guests</option>
                    <option value="option27">27 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option29">29 guests</option>
                    <option value="option30">30 guests</option>
                    <option value="option31">31 guests</option>
                    <option value="option32">32 guests</option>
                    <option value="option33">33 guests</option>
                    <option value="option34">34 guests</option>
                    <option value="option35">35 guests</option>
                    <option value="option36">36 guests</option>
                    <option value="option37">37 guests</option>
                    <option value="option38">38 guests</option>
                    <option value="option39">39 guests</option>
                    <option value="option40">40 guests</option>
                    <option value="option41">41 guests</option>
                    <option value="option42">42 guests</option>
                    <option value="option43">43 guests</option>
                    <option value="option44">44 guests</option>
                    <option value="option45">45 guests</option>
                    <option value="option46">46 guests</option>
                    <option value="option47">47 guests</option>
                    <option value="option48">48 guests</option>
                    <option value="option49">49 guests</option>
                    <option value="option50">50 guests</option>
                  </Select>
                  <Button borderRadius="none" w="60%" colorScheme="blue">
                    Search
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default Search;