import "../../App.css";
import { Typography, Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const TitleSectionsLayout = ({ title, children }) => {
  const matchesLG = useMediaQuery("(min-width:1300px)");
  const matchesMD = useMediaQuery("(min-width:1000px)");
  const matchesSM = useMediaQuery("(min-width:600px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  return (
    <Box textAlign="center" sx={{ marginTop: "6%" }}>
      <Typography
        className="heading"
        sx={{
          fontSize: matchesLG
            ? "40px"
            : matchesSM
            ? "30px"
            : matchesXS
            ? "25px"
            : "20px",
          margin: matchesSM ? "2% 0" : "4% 0",
          fontWeight: "900",
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default TitleSectionsLayout;
