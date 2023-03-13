import React from "react";

import { responsiveSlider } from "../utils/slider";
import HomeCard from "./Cards/HomeCard";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const CosmeticSection = ({ data }) => {
  const matchesSM = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ margin: "2% 0" }}
    >
      <AliceCarousel
        responsive={responsiveSlider}
        disableDotsControls
        infinite
        mouseTracking
        animationDuration={700}
        disableButtonsControls={false}
        keyboardNavigation
        renderPrevButton={() => {
          return (
            <BsFillArrowLeftCircleFill
              style={{
                display: matchesSM ? "block" : "none",
                fontSize: "40px",
                left: "0%",
                top: "30%",
                position: "absolute",
                color: "pink",
              }}
            />
          );
        }}
        renderNextButton={() => {
          return (
            <BsFillArrowRightCircleFill
              style={{
                display: matchesSM ? "block" : "none",
                fontSize: "40px",
                right: "0%",
                top: "30%",
                position: "absolute",
                color: "pink",
              }}
            />
          );
        }}
      >
        {data.slice(0, 10).map((val, key) => {
          return <HomeCard key={key} val={val} />;
        })}
      </AliceCarousel>
    </Box>
  );
};

export default CosmeticSection;
