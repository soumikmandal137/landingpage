import React from 'react'
import { Box, Breadcrumbs, Typography } from '@mui/material'


const About = () => {
  return (
        <Box>

    <Box
      sx={{
        textAlign: "center",
        color: "#fff",
        py: 6,
      }}
    >
    
      <Breadcrumbs
        separator="/"
        aria-label="breadcrumb"
        sx={{
          color:"#fff",
          justifyContent: "center",
          display: "flex",
          fontSize: "64px",
          fontWeight: "bold",
        }}
      >
        <Typography sx={{ color: "#fff",fontSize:"64px" }}>Home</Typography>
        <Typography sx={{ color: "#ff7b29",fontSize:"64px" }}>About Us</Typography>
      </Breadcrumbs>

      <Typography
        variant="body2"
        sx={{
          mt: 2,
          maxWidth: "700px",
          mx: "auto",
          color: "#9C9D9B",
          fontSize: "16px",
          lineHeight: 1.6,
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
        Facilisis eget eros sit semper sit enim. Turpis aliquet sit ac eu
        ultrices ut. Sagittis vestibulum et quis non massa netus.
      </Typography>
    </Box>


    </Box>
  )
}

export default About