import React from "react";
import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import cake from "../../assets/aboutus/cake.png";

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
            color: "#fff",
            justifyContent: "center",
            display: "flex",
            fontSize: "64px",
            fontWeight: "bold",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "64px" }}>Home</Typography>
          <Typography sx={{ color: "#ff7b29", fontSize: "64px" }}>
            About Us
          </Typography>
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

      <Box sx={{ display: "flex" }}>
        <Box>
          <img src={cake} alt="" srcset="" width={650} height={520} />
        </Box>

        <Box sx={{ paddingTop: "98.5px",pl:3}}>
          <Typography
            sx={{ fontSize: "36px", color: "#fff", fontWeight: "600" }}
          >
            We provide healthy food for your family
          </Typography>

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
            every plate tells a story of fresh ingredients, rich flavors, and a
            passion for cooking. From the first bite to the last, we aim to make
            your experience warm, memorable, and full of taste. Whether you join
            us for a quick meal or a special occasion, we’re here to serve
            happiness on every plate
          </Typography>


<Box>

  <Stack direction="row" spacing={2}>
      <Button variant="contained" style={{padding:"20px,15px",backgroundColor:"#D68240",borderRadius:"8px",marginTop:"24px"}}>
        CONTACT US
      </Button>
    </Stack>

</Box>


        </Box>



      </Box>





    </Box>
  );
};

export default About;
