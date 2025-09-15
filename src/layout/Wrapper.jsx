import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Wrapper = () => {
  return (
      <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121A1D"
      }}
    >
      <Navbar />

      <Container sx={{ py:4 }}>
        <Outlet /> 
      </Container>

      <Footer />
    </Box>
  );
};

export default Wrapper;
