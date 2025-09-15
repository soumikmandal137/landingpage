import React from "react";
import { Box, IconButton, Typography, Link } from "@mui/material";
import { Facebook, Instagram, Email, Phone } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import mastercard from "../assets/footer/mastercard.png";
import gpay from "../assets/footer/gpay.png";
import visa from "../assets/footer/visa.png";
import paypal from "../assets/footer/paypal.png";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "#0f1e26",
        color: "#ffffff",
        px: 4,
        py: 6,
      }}
    >
      {/* Column 1: Branding */}
      <Box sx={{ maxWidth: "25%", flex: "0 0 25%", pr: 2, mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#f57c00" }}>
          FOODI
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }} style={{color:"#9C9D9B",fontSize:"16px",lineHeight:"1.2"}}>
          Lorem ipsum dolor sit amet consectetur. Tristique cursus sem nibh nec
          volutpat. Turpis tortor nisi proin. Ligula viverra sem leo ultricies.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Column 2: Contact Info */}
      <Box sx={{ maxWidth: "25%", flex: "0 0 25%", pr: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom style={{fontSize:"25px"}}>
          Contact Us
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Email sx={{ mr: 1,bgcolor:"#182F31",color:"#ffffff",p:0.5,borderRadius:"50%" }} />
          <Typography variant="body2" style={{color:"#9C9D9B"}}>infofoodi@gmail.com</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Phone sx={{ mr: 1,bgcolor:"#182F31",color:"#ffffff",p:0.5,borderRadius:"50%" }} />
          <Typography variant="body2" style={{color:"#9C9D9B"}}>+91 7029112661</Typography>
        </Box>
      </Box>

      {/* Column 3: User Links */}
      <Box sx={{ maxWidth: "25%", flex: "0 0 25%", pr: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom style={{fontSize:"25px", }}>
          User Link
        </Typography>
        {[
          "About Us",
          "Contact Us",
          "Order Delivery",
          "Payments & Tax",
          "Terms of Services",
        ].map((text) => (
          <Typography key={text} variant="body2"  style={{fontSize:"20px",color:"#797B78",paddingBottom:"10px"}}>
            <Link href="#" underline="hover" color="inherit">
              {text}
            </Link>
          </Typography>
        ))}
      </Box>

      {/* Column 4: Location */}
      <Box sx={{ maxWidth: "25%", flex: "0 0 25%", pr: 2, mb: 4 }}>
        <Typography variant="h6" gutterBottom style={{fontSize:"25px"}}>
          Location
        </Typography>
        <Typography variant="body2" style={{fontSize:"20px",color:"#797B78"}}>
          6543 Country Club Ave,
          <br />
          NC 27587, London, UK
          <br />
          +257 654120
        </Typography>
        <Box sx={{ mt: 2 }}>
          <img
            src={mastercard}
            alt="mastercard"
            srcset=""
            width={40}
            style={{ marginRight: "12px" }}
          />
          <img
            src={gpay}
            alt="gpay"
            srcset=""
            width={40}
            style={{ marginRight: "12px" }}
          />
          <img
            src={visa}
            alt="visa"
            srcSet=""
            width={40}
            style={{ marginRight: "12px" }}
          />
          <img
            src={paypal}
            alt="paypal"
            srcset=""
            width={40}
            style={{ marginRight: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
