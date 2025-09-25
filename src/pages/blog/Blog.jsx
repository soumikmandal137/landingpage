import React from 'react'
import { Box, Breadcrumbs, Grid, Typography } from '@mui/material'
import card1 from "../../assets/blog/card1.png"
import Blogcard from '../../components/Blogcard';

const Blog = () => {

const blog = [
  {
    id: 1,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
  },

    {
    id: 2,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
  },

    {
    id: 3,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
  },

    {
    id: 4,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
  },

    {
    id: 5,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
  },

    {
    id: 6,
    user: {
      role: "Admin",
      date: "17June2025",
      comments: "comments",
    },
    name: "10  Benefits of Doing a Detox",
    description: "Savor our latest blog where we serve up delicious recipes, insider kitchen tips, and design inspirations that blend mouthwatering flavors with a delightful dining experience",
    Read:"Read More",
    img: card1,
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
           Our Blog
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
            Latest news & blog
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
          {blog?.map((value, index) => (
            //  <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Blogcard key={index} value={value} />

  





            </Grid>
            // </Grid>
          ))}






        </Grid>
      </Box>




</Box>
  )
}

export default Blog