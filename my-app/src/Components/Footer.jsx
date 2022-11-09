
import {
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Footer = () => {
    const hover = {
      textDecoration: "underline",
      cursor: "pointer",
    };
  
    const breakpoints = {
      base: "376px",
      md: "768px",
      lg: "960px",
      xl: "1100px",
      "2xl": "1536px",
    };
  
    return (
      <Box w="90%" h="auto" m="auto" mb="4rem">
        <Tabs flexDirection={{ base: "column", lg: "row" }}>
          <TabList flexDirection={{ base: "column", lg: "row" }}>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              ASIA
            </Tab>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              EUROPE
            </Tab>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              NORTH AMERICA
            </Tab>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              SOUTH AMERICA
            </Tab>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              AFRICA
            </Tab>
            <Tab
              _selected={{ borderColor: "blue" }}
              color="gray"
              fontSize="13px"
              _hover={{ color: "black" }}
            >
              OCEANIA
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0px">
              <Box w="100%" mt="3.4rem">
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">India</Text>
                        <Text fontSize="12px" color="gray">
                          3262 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Georgia</Text>
                        <Text fontSize="12px" color="gray">
                          102 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Cambodia</Text>
                        <Text fontSize="12px" color="gray">
                          26 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Oman</Text>
                        <Text fontSize="12px" color="gray">
                          7 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Thailand</Text>
                        <Text fontSize="12px" color="gray">
                          1284 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Turkey</Text>
                        <Text fontSize="12px" color="gray">
                          70 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Nepal</Text>
                        <Text fontSize="12px" color="gray">
                          22 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Bangladesh</Text>
                        <Text fontSize="12px" color="gray">
                          5 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Sri Lanka</Text>
                        <Text fontSize="12px" color="gray">
                          646 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Israel</Text>
                        <Text fontSize="12px" color="gray">
                          53 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Maldives</Text>
                        <Text fontSize="12px" color="gray">
                          19 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Indonesia</Text>
                        <Text fontSize="12px" color="gray">
                          622 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Malaysia</Text>
                        <Text fontSize="12px" color="gray">
                          49 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Taiwan, Province Of China</Text>
                        <Text fontSize="12px" color="gray">
                          17 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box
                  // border="1px solid red"
                  >
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Phillipines</Text>
                        <Text fontSize="12px" color="gray">
                          378 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Japan</Text>
                        <Text fontSize="12px" color="gray">
                          46 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">
                          Hong Kong Special Administrative Region Of China
                        </Text>
                        <Text fontSize="12px" color="gray">
                          16 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">United Arab Emirates</Text>
                        <Text fontSize="12px" color="gray">
                          146 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Viet Nam</Text>
                        <Text fontSize="12px" color="gray">
                          37 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Republic Of Korea</Text>
                        <Text fontSize="12px" color="gray">
                          12 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
  
            <TabPanel p="0px">
              <Box w="100%" mt="3.4rem">
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Croatia</Text>
                        <Text fontSize="12px" color="gray">
                          15594 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Finland</Text>
                        <Text fontSize="12px" color="gray">
                          2086 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Sweden</Text>
                        <Text fontSize="12px" color="gray">
                          677 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Poland</Text>
                        <Text fontSize="12px" color="gray">
                          308 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Bulgaria</Text>
                        <Text fontSize="12px" color="gray">
                          63 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Luxembourg</Text>
                        <Text fontSize="12px" color="gray">
                          12 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Denmark</Text>
                        <Text fontSize="12px" color="gray">
                          14385 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Germany</Text>
                        <Text fontSize="12px" color="gray">
                          1910 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Cyprus</Text>
                        <Text fontSize="12px" color="gray">
                          593 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Belgium</Text>
                        <Text fontSize="12px" color="gray">
                          270 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Ukraine</Text>
                        <Text fontSize="12px" color="gray">
                          47 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Serbia</Text>
                        <Text fontSize="12px" color="gray">
                          7 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Italy</Text>
                        <Text fontSize="12px" color="gray">
                          9268 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Hungary</Text>
                        <Text fontSize="12px" color="gray">
                          1260 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Czech Republic</Text>
                        <Text fontSize="12px" color="gray">
                          585 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Slovakia</Text>
                        <Text fontSize="12px" color="gray">
                          141 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Montenegro</Text>
                        <Text fontSize="12px" color="gray">
                          39 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Iceland</Text>
                        <Text fontSize="12px" color="gray">
                          6 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Spain</Text>
                        <Text fontSize="12px" color="gray">
                          4737 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Austria</Text>
                        <Text fontSize="12px" color="gray">
                          1193 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Portugal</Text>
                        <Text fontSize="12px" color="gray">
                          556 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Slovenia</Text>
                        <Text fontSize="12px" color="gray">
                          119 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Albania</Text>
                        <Text fontSize="12px" color="gray">
                          34 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Lithuania</Text>
                        <Text fontSize="12px" color="gray">
                          6 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">France</Text>
                        <Text fontSize="12px" color="gray">
                          3791 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Greece</Text>
                        <Text fontSize="12px" color="gray">
                          941 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Norway</Text>
                        <Text fontSize="12px" color="gray">
                          513 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Ireland</Text>
                        <Text fontSize="12px" color="gray">
                          68 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Bosnia And Herzegovina</Text>
                        <Text fontSize="12px" color="gray">
                          25 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">
                          The Former Yugoslav Republic Of Macedonia
                        </Text>
                        <Text fontSize="12px" color="gray">
                          6 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Switzerland</Text>
                        <Text fontSize="12px" color="gray">
                          2770 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">
                          United Kingdom Of Great Britain And Northern Ireland
                        </Text>
                        <Text fontSize="12px" color="gray">
                          899 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Netherlands</Text>
                        <Text fontSize="12px" color="gray">
                          491 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Malta</Text>
                        <Text fontSize="12px" color="gray">
                          64 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Romania</Text>
                        <Text fontSize="12px" color="gray">
                          17 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Andorra</Text>
                        <Text fontSize="12px" color="gray">
                          5 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
  
            <TabPanel p="0px">
              <Box w="100%" mt="3.4rem">
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">United States Of America</Text>
                        <Text fontSize="12px" color="gray">
                          3017 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Jamaica</Text>
                        <Text fontSize="12px" color="gray">
                          115 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Panama</Text>
                        <Text fontSize="12px" color="gray">
                          9 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Mexico</Text>
                        <Text fontSize="12px" color="gray">
                          569 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Aruba</Text>
                        <Text fontSize="12px" color="gray">
                          37 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Curacao</Text>
                        <Text fontSize="12px" color="gray">
                          6 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Dominican Republic</Text>
                        <Text fontSize="12px" color="gray">
                          365 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Puerto Rico</Text>
                        <Text fontSize="12px" color="gray">
                          37 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Cuba</Text>
                        <Text fontSize="12px" color="gray">
                          257 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Saint Martin</Text>
                        <Text fontSize="12px" color="gray">
                          34 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Canada</Text>
                        <Text fontSize="12px" color="gray">
                          164 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Sint Maarten</Text>
                        <Text fontSize="12px" color="gray">
                          10 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Costa Rica</Text>
                        <Text fontSize="12px" color="gray">
                          147 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Belize</Text>
                        <Text fontSize="12px" color="gray">
                          9 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
  
            <TabPanel p="0px">
              <Box w="100%" mt="3.4rem">
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Colombia</Text>
                        <Text fontSize="12px" color="gray">
                          198 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Chile</Text>
                        <Text fontSize="12px" color="gray">
                          44 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Brazil</Text>
                        <Text fontSize="12px" color="gray">
                          39 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Argentina</Text>
                        <Text fontSize="12px" color="gray">
                          28 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Peru</Text>
                        <Text fontSize="12px" color="gray">
                          15 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Ecuador</Text>
                        <Text fontSize="12px" color="gray">
                          7 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>{" "}
            </TabPanel>
  
            <TabPanel p="0px">
              <Box w="100%" mt="3.4rem">
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Kenya</Text>
                        <Text fontSize="12px" color="gray">
                          613 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Rwanda</Text>
                        <Text fontSize="12px" color="gray">
                          21 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">South Africa</Text>
                        <Text fontSize="12px" color="gray">
                          277 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Burundi</Text>
                        <Text fontSize="12px" color="gray">
                          19 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Morocco</Text>
                        <Text fontSize="12px" color="gray">
                          197 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Madagascar</Text>
                        <Text fontSize="12px" color="gray">
                          14 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box
                  // border="1px solid red"
                  >
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Uganda</Text>
                        <Text fontSize="12px" color="gray">
                          194 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Egypt</Text>
                        <Text fontSize="12px" color="gray">
                          12 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Mauritius</Text>
                        <Text fontSize="12px" color="gray">
                          71 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Tunisia</Text>
                        <Text fontSize="12px" color="gray">
                          7 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
  
                  <Box>
                    <Flex direction="column">
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Tanzania</Text>
                        <Text fontSize="12px" color="gray">
                          70 holiday homes
                        </Text>
                      </Box>
                      <Box mb="1rem" _hover={hover}>
                        <Text fontWeight="360">Seychelles</Text>
                        <Text fontSize="12px" color="gray">
                          5 holiday homes
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>{" "}
            </TabPanel>
  
            <TabPanel p="0px">
              <Flex
                direction={{ base: "column", lg: "row" }}
                justifyContent="flex-start"
                mt="3.4rem"
              >
                <Box mr="8rem">
                  <Flex direction="column">
                    <Box mb="1rem" _hover={hover}>
                      <Text fontWeight="360">Australia</Text>
                      <Text fontSize="12px" color="gray">
                        397 holiday homes
                      </Text>
                    </Box>
                  </Flex>
                </Box>
  
                <Box mr="8rem">
                  <Flex direction="column">
                    <Box mb="1rem" _hover={hover}>
                      <Text fontWeight="360">New Zealand</Text>
                      <Text fontSize="12px" color="gray">
                        48 holiday homes
                      </Text>
                    </Box>
                  </Flex>
                </Box>
  
                <Box>
                  <Flex direction="column">
                    <Box mb="1rem" _hover={hover}>
                      <Text fontWeight="360">French Polynesia</Text>
                      <Text fontSize="12px" color="gray">
                        18 holiday homes
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  };
  
  export default Footer;