
import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-36px",
        opacity: 1,
        background: "grey",
        borderRadius: "50%",
        borderColor: "white",
        border: "none",
        borderLeftColor: "white",
        borderRightColor: "white",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-8px",
        opacity: 1,
        backgroundColor: "grey",
        borderRadius: "50%",
        borderColor: "white",
        border: "none",
        borderLeftColor: "white",
        borderRightColor: "white",
      }}
      onClick={onClick}
    />
  );
}

const Carousal_HomePage = () => {
  const [topDest, setTopDest] = useState([]);
  const navigate = useNavigate();
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
    boxSize: "250px",
    color: "white",
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios.get("https://api-0231.herokuapp.com/topDestinations").then((res) => {
      setTopDest(res.data);
    });
  }, []);

  return (
    <Box
      w="94%"
      m="auto"
      pl={{ base: "5rem", lg: "2rem" }}
      justifyContent="space-between"
      gap="40px"
      mb="5.4rem"
    >
      {/* <h2> Responsive </h2> */}
      <Slider {...settings}>
        {topDest.map((dest, index) => {
          return (
            <Box
              maxW="250px"
              maxH="150px"
              sx={basicBoxStyles}
              key={index}
              onClick={() => {
                navigate("/products", { state: `${dest.location}` });
              }}
            >
              <Image
                filter="auto"
                brightness="70%"
                w="90%"
                h="150px"
                src={dest.img}
                alt="img"
              ></Image>
              <Text
                fontWeight="400"
                position="relative"
                color="white"
                mt="-6rem"
              >
                {dest.location}
              </Text>
              <Text
                fontSize="14px"
                fontWeight="400"
                position="relative"
                color="whitesmoke"
              >
                {dest.text}
              </Text>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default Carousal_HomePage;