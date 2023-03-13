import React from "react";
import useSWR from "swr";

import AppLayout from "./Layout/AppLayout";
import TitleSectionsLayout from "./Layout/TitleSectionsLayout";
import BloomingCard from "./Cards/BloomingCard";
import CosmeticSection from "./CosmeticSection";
import { getHome } from "../api";

import { Box, Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Skeleton from "@mui/material/Skeleton";

const Home = () => {
  const matchesLG = useMediaQuery("(min-width:1300px)");
  const matchesMD = useMediaQuery("(min-width:1000px)");
  const matchesSM = useMediaQuery("(min-width:600px)");

  const {
    data: homeData,
    isLoading,
    error,
  } = useSWR("/home", getHome, {
    fallback: false,
    revalidateOnFocus: false,
  });

  if (isLoading) {
    return (
      <div className="App">
        <AppLayout>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="80vh"
            sx={{ marginTop: "5%" }}
          />
        </AppLayout>
      </div>
    );
  }

  if (homeData) {
    const { bannerData, cosmeticData, offerData } = homeData;
    return (
      <AppLayout>
        <Box
          sx={{
            width: "100%",
            height: matchesLG ? "450px" : matchesMD ? "400px" : "300px",
          }}
        >
          <img
            src={bannerData[0].FImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <CosmeticSection
          data={[...cosmeticData, ...cosmeticData, ...cosmeticData]}
        />

        <TitleSectionsLayout title="Blomming Deals For You">
          <Grid container rowGap={matchesLG ? "0" : matchesSM ? 2.5 : 1}>
            {/* [..] I'm using this because i don't have enouth data in my database so i am replicating it. */}

            {[...offerData, ...offerData].map((val, key) => {
              return (
                <Grid
                  xs={matchesMD ? 4 : matchesSM ? 6 : 12}
                  key={key}
                  sx={{ padding: matchesLG ? "1.5%" : "0.5%" }}
                >
                  <BloomingCard val={val} />
                </Grid>
              );
            })}
          </Grid>
        </TitleSectionsLayout>
      </AppLayout>
    );
  }
};

export default Home;
