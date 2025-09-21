import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../public/Logo.svg";
import login from "../assets/login/login.png";
import { useForm } from "react-hook-form";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { supabase } from "../hooks/utils/supabaseClient";
import { toast } from "sonner";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const [loginDialog, setloginDialog] = useState(false);
  const useDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log("user", useDetails);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formdata) => {
    // console.log("Form Data:", data);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formdata.email,
      password: formdata.password,
    });
    if (data.user) {
      toast.success("Login Successfully!!");
      Cookies.set("token", data?.session?.access_token);
      localStorage.setItem("userDetails", JSON.stringify(data?.user));
      reset();
      setloginDialog(false);
    } else {
      toast.error(error.message);
    }
  };

  const handelLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      toast.success("Logout Successfully!!");
      Cookies.remove("token");
      localStorage.removeItem("userDetails");
    } else {
      toast.error(error.message);
    }
  };

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
          // m:10,
          // maxWidth: "1200px",
          top: 0,
          background: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
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

          <Box>
            <img src={Logo} alt="" />
          </Box>

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
            {useDetails ? (
              <Button
                onClick={handelLogout}
                variant="contained"
                sx={{
                  bgcolor: "#f97316",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 3,
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                LOGOUT
              </Button>
            ) : (
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
            )}
            {useDetails?.email === "soumik137@gmail.com" && (
              <Button
                onClick={() => navigate("/admin/dashabord")}
                variant="contained"
                sx={{
                  bgcolor: "#f97316",
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 3,
                  "&:hover": { bgcolor: "#ea580c" },
                }}
              >
                Admin
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <BootstrapDialog 
        aria-labelledby="customized-dialog-title"
        maxWidth="xl"
        open={loginDialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 , background: "#121A1D",}} id="customized-dialog-title">
          
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
        <DialogContent dividers sx={{ background: "#121A1D",}}>
          <Stack>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img src={login} alt="" width={391} height={453} />
              </Box>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  width: 350,
                  background: "#121A1D",
                  padding: 3,
                  borderRadius: 2,
                }}
              >
                {/* Name */}
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Your Name :
                </Typography>
                <TextField sx={{bgcolor:"#182F31"}}
                  {...register("name", { required: "Name is required" })}
                  variant="filled"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{color:"#9C9D9B"}} position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />

                {/* Email */}
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Email :
                </Typography>
                <TextField sx={{bgcolor:"#182F31"}}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  variant="filled"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{color:"#9C9D9B"}} position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                {/* Password */}
                <Typography sx={{ color: "white", fontWeight: "bold" }}>
                  Password :
                </Typography>
                <TextField sx={{bgcolor:"#182F31"}}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  type="password"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{color:"#9C9D9B"}} position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                {/* Submit Button */}
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </Box>
            </Box>
          </Stack>
        </DialogContent>
      </BootstrapDialog>
    </>
    // </Box>
  );
};
export default Navbar;
