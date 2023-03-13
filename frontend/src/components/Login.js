import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
import Input from "./Input";
import axios from "axios";
import { postUser, loginUser } from "../api";

//Signup and Login both are here

const Join = () => {
  const navi = useNavigate();
  const [isSignup, setisSignup] = useState(true); //isSignup state is used to control login or signup
  const [isImg, setisImg] = useState(false);
  const UserInit = { email: "", password: "" };
  const [userdata, setuserdata] = useState(UserInit);

  const handleAccounts = (e) => {
    setisSignup((prev) => !prev);
  };

  const handleUserInfo = (e) =>
    setuserdata({ ...userdata, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (isSignup) {
      const data = await postUser({
        email: userdata.email,
        password: userdata.password,
      });

      if (data.status == 201) {
        localStorage.setItem("nykaProfile", JSON.stringify(data.data.profile));
      }
    } else {
      const data = loginUser({
        email: userdata.email,
        password: userdata.password,
      });
      if (data.status == 200) {
        localStorage.setItem("nykaProfile", JSON.stringify(data.data.profile));
      }
    }
    navi("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
      sx={{
        color: "black",
        borderBottom: "1px solid lightgray",
      }}
    >
      <img
        src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.svg"
        style={{
          width: "5%",
          margin: "2% 0%",
          boxShadow: "10px 10px 5px lightgrey",
        }}
      />
      <Box
        display="flex"
        flexShrink={2}
        alignContent="space-between"
        flexDirection="column"
        p={2}
        mb={3}
        sx={{
          borderRadius: "9px",
          fontSize: "0.8rem",
          width: "16%",
          boxShadow: "8px 8px 8px lightgray",
          border: "1px solid lightgray",
        }}
      >
        <Typography sx={{ fontSize: "27px" }}>
          {isSignup ? "Create account" : "login"}
        </Typography>
        {isSignup ? (
          <form encType="multipart/form-data" onSubmit={(e) => handleSignup(e)}>
            <>
              <Input
                name="email"
                lable="Email"
                value={userdata.email}
                onChg={handleUserInfo}
                type="email"
              />
              <Input
                name="password"
                lable="Password"
                ph="at least 8 characters"
                value={userdata.password}
                onChg={handleUserInfo}
                type="password"
              />

              <button
                type="submit"
                style={{
                  marginTop: "1.4rem",
                  width: "100%",
                  height: "1.9rem",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "bold",
                  background:
                    "linear-gradient(to bottom, transparent 0%,black 85% )",
                }}
              >
                Join NAYKAA
              </button>
            </>
          </form>
        ) : (
          <form onSubmit={(e) => handleSignup(e)}>
            <Input
              name="email"
              lable="Email"
              value={userdata.email}
              onChg={handleUserInfo}
              type="email"
            />
            <Input
              name="password"
              lable="Password"
              value={userdata.password}
              onChg={handleUserInfo}
              type="password"
            />
            <button
              type="submit"
              style={{
                backgroundColor: "lightyellow",
                marginTop: "1.4rem",
                width: "100%",
                height: "1.8rem",
                borderRadius: "23px",
              }}
            >
              login NAYKAA account
            </button>
          </form>
        )}
        <Box
          display="flex"
          pt={2}
          mt={5}
          alignItems="center"
          flexShrink={2}
          sx={{
            borderTop: "2px solid lightgray",
            boxShadow: "0 -5px 5px -5px #333",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            {isSignup ? "Already have an account ?" : "Create new account ?"}
          </Typography>
          <Button
            variant="text"
            onClick={handleAccounts}
            sx={{ textTransform: "none", height: "1rem", fontSize: "0.8rem" }}
          >
            <p>{isSignup ? "sign-In" : "sign-up"}</p>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Join;
