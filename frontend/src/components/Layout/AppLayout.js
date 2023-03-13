import React from "react";
import Container from "@mui/material/Container";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">{children}</Container>
    </div>
  );
};

export default AppLayout;
