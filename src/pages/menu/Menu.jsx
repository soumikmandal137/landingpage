import React from "react";
import {
  Box,
  Typography,
  Breadcrumbs,
  Stack,
  Button,
  Grid,
  IconButton,
} from "@mui/material";

import card1 from "../../assets/menu/card1.png";
import Menucard from "../../components/Menucard";


const Menu = () => {
  const cuisines = [
    "Indian",
    "Mexican",
    "Italian",
    "Chinese",
    "Bengali",
    "Arabian",
    "Japanese",
  ];



  const menuitem = [
    {
      id: 1,
      name: "Grilled Chicken Burger",
      description:
        "Juicy grilled chicken patty served with fresh veggies and sauce.",
      rating: 4.5,
      price: 180,
      img: card1,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description:
        "Classic pizza topped with mozzarella cheese and fresh basil.",
      rating: 4.2,
      price: 220,
      img: card1,
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      description: "Creamy Alfredo pasta with parmesan and garlic.",
      rating: 4.7,
      price: 260,
      img: card1,
    },
    {
      id: 4,
      name: "Veggie Sandwich",
      description: "Freshly baked bread stuffed with seasonal vegetables.",
      rating: 4.0,
      price: 120,
      img: card1,
    },
    {
      id: 5,
      name: "Chicken Biryani",
      description:
        "Aromatic basmati rice cooked with tender chicken and spices.",
      rating: 4.8,
      price: 300,
      img: card1,
    },
    {
      id: 6,
      name: "Paneer Tikka",
      description: "Spicy marinated paneer cubes grilled to perfection.",
      rating: 4.3,
      price: 200,
      img: card1,
    },
    {
      id: 7,
      name: "Fish Curry",
      description: "Tangy and spicy fish curry with coastal flavors.",
      rating: 4.6,
      price: 280,
      img: card1,
    },
    {
      id: 8,
      name: "Cheese Fries",
      description: "Crispy fries topped with melted cheese and herbs.",
      rating: 4.1,
      price: 150,
      img: card1,
    },
    {
      id: 9,
      name: "Chocolate Brownie",
      description: "Rich and gooey chocolate brownie with choco chips.",
      rating: 4.9,
      price: 100,
      img: card1,
    },
  ];

  return (
    <Box>
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
            <Typography sx={{ color: "#fff", fontSize: "64px" }}>
              Home
            </Typography>
            <Typography sx={{ color: "#ff7b29", fontSize: "64px" }}>
              Our Menu
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
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget eros sit semper sit enim. Turpis aliquet sit
            ac eu ultrices ut. Sagittis vestibulum et quis non massa netus.
          </Typography>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            py: 6,
          }}
        >
          {/* Title */}
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Delicious Menu
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body2"
            sx={{ maxWidth: "600px", mx: "auto", mb: 4, opacity: 0.8 }}
          >
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget eros sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </Typography>

          {/* Buttons */}
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            justifyContent="center"
            gap={2}
          >
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  borderRadius: "12px",
                  textTransform: "none",
                  px: 3,
                  "&:hover": {
                    bgcolor: "white",
                    color: "#0d1117",
                  },
                }}
              >
                {cuisine}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Grid container spacing={3}>
          {menuitem?.map((value, index) => (
            //  <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Menucard key={index} value={value} />



            </Grid>
            // </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Menu;
