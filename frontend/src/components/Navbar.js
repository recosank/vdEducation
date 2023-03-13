import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Container, Divider, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Drawer } from "@mui/material";
import Grow from "@mui/material/Grow";

import { RxCross2 } from "react-icons/rx";
import { HiArrowRight } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";

const Navbar = () => {
  const navigate = useNavigate();
  const matchesLG = useMediaQuery("(min-width:1100px)");
  const matchesMD = useMediaQuery("(min-width:800px)");
  const matchesSM = useMediaQuery("(min-width:600px)");
  const matchesXS = useMediaQuery("(min-width:450px)");

  const [searchOpen, setsearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState({
    top: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const list = (anchor) => (
    <Box
      sx={{
        position: "relative",
        border: "0px solid red",
        height: anchor == "top" ? "40vh" : "100vh",
        width: anchor === "top" ? "auto" : 250,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <RxCross2
        onClick={toggleDrawer(anchor, false)}
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          padding: "2%",
          fontSize: "27px",
        }}
      />
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexDirection={matchesXS ? "row" : "column"}
        sx={{ height: "30%", width: "100%" }}
      >
        <Grow in={state[anchor]}>
          <Typography sx={{ fontWeight: "600" }}>Categories</Typography>
        </Grow>
        <Grow in={state[anchor]} {...(state[anchor] ? { timeout: 1000 } : {})}>
          <Typography sx={{ fontWeight: "600" }}>Brands</Typography>
        </Grow>
        <Grow in={state[anchor]} {...(state[anchor] ? { timeout: 1500 } : {})}>
          <Typography sx={{ fontWeight: "600" }}>Luxe</Typography>
        </Grow>
        <Grow in={state[anchor]} {...(state[anchor] ? { timeout: 1800 } : {})}>
          <Typography sx={{ fontWeight: "600" }}>Nykaa Fashion</Typography>
        </Grow>
        <Grow in={state[anchor]} {...(state[anchor] ? { timeout: 2000 } : {})}>
          <Typography sx={{ fontWeight: "600" }}>Beauty Advice</Typography>
        </Grow>
      </Box>
    </Box>
  );

  return (
    <div
      style={{
        borderBottom: "3px solid gray",
        boxShadow: "5",
        position: "relative",
      }}
    >
      <Divider
        sx={{
          position: "absolute",
          width: "99vw",
          height: "2px",
          top: "55%",
          display: matchesMD ? "block" : "none",
        }}
      />
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "1%" }}
        >
          <Box
            display={!matchesLG ? (!searchOpen ? "flex" : "none") : "none"}
            alignItems="center"
            sx={{ width: "30%" }}
          >
            <svg
              style={{ width: "18px", height: "16px" }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleDrawer("top", true)}
            >
              <path
                d="M13 14V16H2V14H13ZM18 7V9H0V7H18ZM16 0V2H5V0H16Z"
                fill="#770015"
              />
            </svg>
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.svg"
              style={{ width: "85px", marginLeft: "5px" }}
            />
          </Box>
          <Box
            display={matchesLG ? "flex" : "none"}
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "50%" }}
          >
            <img
              src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.svg"
              style={{ width: "15%" }}
            />

            <Typography sx={{ fontWeight: "600" }}>Categories</Typography>
            <Typography sx={{ fontWeight: "600" }}>Brands</Typography>
            <Typography sx={{ fontWeight: "600" }}>Luxe</Typography>
            <Typography sx={{ fontWeight: "600" }}>Nykaa Fashion</Typography>
            <Typography sx={{ fontWeight: "600" }}>Beauty Advice</Typography>
          </Box>
          <Drawer
            anchor="top"
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
          >
            {list("top")}
          </Drawer>
          <Box
            display="flex"
            justifyContent={matchesMD ? "space-between" : "end"}
            alignItems="center"
            sx={{ width: matchesLG ? "35%" : "80%" }}
          >
            <Box
              flexGrow={!matchesLG && 1}
              display={matchesMD || searchOpen ? "flex" : "none"}
              justifyContent="start"
              alignItems="center"
              sx={{
                backgroundColor: "rgba(151,151,151,0.1)",
                padding: "10px",
                borderRadius: "7px",
              }}
            >
              <CiSearch
                style={{ fontSize: "31px", color: "gray" }}
                onClick={() => !matchesMD && setsearchOpen(false)}
              />
              <input
                placeholder="Search on Nykaa"
                type="text"
                style={{
                  textDecoration: "none",
                  padding: "0% 0%",
                  border: "none",
                  textTransform: "none",
                  fontSize: "14px",
                  marginLeft: "1%",
                  outline: "none",
                  backgroundColor: "rgba(151,151,151,0)",
                }}
              />
            </Box>
            {!matchesMD && !searchOpen && (
              <CiSearch
                style={{ fontSize: "31px", color: "gray", margin: " 0 2%" }}
                onClick={() => setsearchOpen(true)}
              />
            )}
            <Button
              aria-describedby={id}
              variant="contained"
              sx={{
                display: searchOpen ? "none" : "block",
                backgroundColor: "#fc2779",
                padding: "10px 20px",
                margin: matchesLG ? "0 0%" : "0 2%",
              }}
              onClick={handleClick}
            >
              SIGN IN
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Box sx={{ padding: "6% 5% 2% 5%" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
                  Login/Create Account
                </Typography>
                <Typography sx={{ fontSize: "14px", margin: "2% 0 8% 0" }}>
                  Register now and get 2000 nyka points as a reward istantly!
                </Typography>
                <Button
                  variant="outlined"
                  endIcon={<HiArrowRight />}
                  sx={{
                    width: "100%",
                    marginBottom: "2%",
                    borderColor: "lightgray",
                    color: "rgb(252, 39, 121)",
                    fontWeight: "600",
                  }}
                  onClick={() => navigate("/join")}
                >
                  Sign in with mobile/Email
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  endIcon={<HiArrowRight sx={{ color: "black" }} />}
                  sx={{
                    borderColor: "lightgray",
                    color: "rgb(252, 39, 121)",
                    fontWeight: "600",
                  }}
                >
                  Google
                </Button>
              </Box>
            </Popover>
            <TbShoppingBag
              style={{
                display: searchOpen ? "none" : "block",
                fontSize: "26px",
                color: "gray",
              }}
            />
          </Box>
        </Box>

        <Box
          display={matchesMD ? "flex" : "none"}
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "1%" }}
        >
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              width: "90%",
              color: "rgba(3, 2, 26, 0.6)",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <p>Makeup</p>
            <p>Skin</p>
            <p>Hair</p>
            <p>Appliances</p>
            <p>Natural</p>
            <p>Mom & Baby</p>
            <p>Health & Wellness</p>
            <p>Men</p>
            <p>Fragrance</p>
            <p>Pop Ups</p>
          </Box>

          <img
            src="https://www.freeiconspng.com/uploads/sales-png-5.jpg"
            alt="Free Download Of Sales Icon Clipart"
            style={{ width: "5%" }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
