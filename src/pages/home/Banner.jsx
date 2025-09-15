import React from 'react'
import banner from "../../assets/banner/banner.png"
import { Box, Button, Stack, Typography } from '@mui/material'
const Banner = () => {
  return (

 <Box 
      sx={{
        position: "relative",
        height: "100vh",
        backgroundRepeat:"no-repeat",
        backgroundImage: ` url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width:"100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundColor:"#182f31"
        }}
    >
      
      <Box
        sx={{
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 2, fontWeight: 500 }}
        >
          HELLO NEW FRIEND
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: "bold", mt: 2 }}
        >
          TASTE HAPPINESS IN <br /> EVERY BITE
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              color: "black",
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            EXPLORE MENU
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": { borderColor: "grey.300", color: "grey.200" },
            }}
          >
            RESERVATION
          </Button>
        </Stack>
      </Box>
    </Box>
    
  )
}

export default Banner