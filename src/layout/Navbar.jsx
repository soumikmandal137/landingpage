import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle, Stack, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../public/Logo.svg"

const Navbar = () => {
  const navigate = useNavigate();
  const [loginDialog, setloginDialog] = useState(false);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    // <Box
    //   sx={{
    //     minHeight: "10vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "flex-start",
    //     pt: 2,
    //   }}
    // >
<>


    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#1e1f22",
        borderRadius: "10px",
        px: 2,
        maxWidth: "1520px",
        top: 0,
        background: "transparent",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",pt:2
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        {/* Left: Logo */}
        {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
        </Box> */}

        <Box><img src={Logo} alt="" /></Box>

        {/* Center: Menu Items */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "About Us", path: "/about" },
            { name: "Chef", path: "/chef" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Button
              onClick={() => navigate(item.path)}
              key={item.name}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "0.9rem",
                "&:hover": { color: "#f97316" },
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Right: Cart + Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "white" }}>
            <ShoppingCartIcon />
          </IconButton>
          <Button
            onClick={() => setloginDialog(true)}
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


      <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={loginDialog}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Login
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={() => setloginDialog(false)}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <Stack>
                <Box>image</Box>

                <Box>form</Box>
              </Stack>
            </DialogContent>
          </BootstrapDialog>


    </>
    // </Box>
  );
};
export default Navbar;
