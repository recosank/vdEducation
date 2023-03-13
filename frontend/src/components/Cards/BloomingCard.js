import { Typography, Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const BloomingCard = ({ val }) => {
  const matchesLG = useMediaQuery("(min-width:1300px)");
  const matchesMD = useMediaQuery("(min-width:1000px)");
  const matchesSM = useMediaQuery("(min-width:600px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box textAlign="left" sx={{ position: "relative" }}>
      <img src={val.MImage.data} style={{ width: "100%" }} />
      <div style={{ position: "absolute", bottom: "5%" }}>
        <Typography
          sx={{
            fontSize: matchesLG
              ? "18px"
              : matchesMD
              ? "16px"
              : matchesSM
              ? "14px"
              : matchesXS
              ? "18px"
              : "14px",
            fontWeight: "700",
          }}
        >
          {val.title}
        </Typography>
        <Typography
          sx={{
            fontSize: matchesLG
              ? "16px"
              : matchesMD
              ? "14px"
              : matchesSM
              ? "13px"
              : matchesXS
              ? "16px"
              : "13px",
            lineHeight: matchesLG ? "17px" : matchesMD ? "15px" : "15px",
          }}
        >
          {val.subTitle.slice(0, 26)}
        </Typography>
        <Typography
          sx={{
            fontSize: matchesLG
              ? "16px"
              : matchesMD
              ? "14px"
              : matchesSM
              ? "13px"
              : matchesXS
              ? "16px"
              : "13px",
          }}
        >
          {val.subTitle.slice(26)}
        </Typography>
      </div>
    </Box>
  );
};

export default BloomingCard;
