import { Typography, Box } from "@mui/material";
import React from "react";

const HomeCard = ({ val }) => {
  if (val) {
    return (
      <Box textAlign="center">
        <img src={val.AImage.data} />
        <Typography>{val.name}</Typography>
      </Box>
    );
  }
};

export default HomeCard;
