import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import React from "react";
import chef1 from "../../assets/chef/chef1.png";
import chef2 from "../../assets/chef/chef2.png";
import chef3 from "../../assets/chef/chef3.png";
import chef4 from "../../assets/chef/chef4.png";
import chef5 from "../../assets/chef/chef5.png";
import chef6 from "../../assets/chef/chef6.png";
import chef7 from "../../assets/chef/chef7.png";
import chef8 from "../../assets/chef/chef8.png";
import chef9 from "../../assets/chef/chef9.png";
import chef10 from "../../assets/chef/chef10.png";
import chef11 from "../../assets/chef/chef11.png";
import chef12 from "../../assets/chef/chef12.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Chefcard from "../../components/Chefcard";

const Chef = () => {
  const chef = [
    {
      id: 1,
      name: "Musim Rama",
      description: "senior cheff.",
      img: chef1,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 2,
      name: "Ayesha Khan",
      description: "junior cheff",
      img: chef2,

      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 3,
      name: "John Mathew",
      description: "master cheff",
      img: chef3,

      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 4,
      name: "Sophia Lee",
      description: "senior cheff",
      img: chef4,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 5,
      name: "Carlos Rivera",
      description: "master cheff",
      img: chef5,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 6,
      name: "Emma Watson",
      description: "senior cheff",
      img: chef6,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 7,
      name: "Luca Rossi",
      description: "master cheff",
      img: chef7,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 8,
      name: "Mei Wong",
      description: "junior cheff",
      img: chef8,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 9,
      name: "David Miller",
      description: "senio cheff",
      img: chef9,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 10,
      name: "Fatima Zahra",
      description: "junio cheff",
      img: chef10,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 11,
      name: "Oliver Brown",
      description: "master cheff",
      img: chef11,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
    {
      id: 12,
      name: "Hana Suzuki",
      description: "senior cheff",
      img: chef12,
      icons: [<FaFacebook />, <FaInstagram />, <FaTwitter />],
    },
  ];

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
            Our Chef
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

      <Box sx={{ textAlign: "center", paddingTop: "125px" }}>
        <Box>
          <Typography
            sx={{ color: "#fff", fontSize: "36px", fontWeight: "600" }}
          >
        
            Our World Class Chef
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="body2"
            sx={{
              mt: 2,
              maxWidth: "720px",
              mx: "auto",
              color: "#9C9D9B",
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget eros sit semper sit enim. Turpis aliquet sit
            ac eu ultrices ut. Sagittis vestibulum et quis non massa netus.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Grid container spacing={3}>
          {chef?.map((value, index) => (
            //  <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Chefcard key={index} value={value} />
            </Grid>
            // </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Chef;
