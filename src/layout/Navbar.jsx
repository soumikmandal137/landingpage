import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar=() =>{
  return (
    <Box
      sx={{
    minHeight:"10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 2,
      }}
    >
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#1e1f22",
          borderRadius: "10px",
          px: 2,
          maxWidth: "1200px",
          width: "100%",
              top: 0,
              background: "transparent",
   
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          {/* Left: Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#f97316",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: "18px",
              }}
            >
              F
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "#f97316", fontWeight: "bold" }}
            >
              FOODI
            </Typography>
          </Box>

          {/* Center: Menu Items */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", gap: 3 }}>
            {["Home", "Menu", "About Us", "Chef", "Blog", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.9rem",
                  "&:hover": { color: "#f97316" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Right: Cart + Login */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f97316",
                textTransform: "none",
                fontWeight: "bold",
                px: 3,
                "&:hover": { bgcolor: "#ea580c" },
              }}
            >
              LOGIN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
  
}
export default Navbar;