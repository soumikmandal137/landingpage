import React from "react";
import Rev1 from "../assets/reservations/Rev1.png";
import { Box } from "@mui/material";

const Reservation = () => {
  return (
    <Box>
      <img src={Rev1} alt="reservation" style={{ width: "300px", borderRadius: "12px" }} />
    </Box>
  );
};

export default Reservation;
