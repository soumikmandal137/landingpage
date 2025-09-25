import { Box, Breadcrumbs, Grid, Typography,IconButton,TextField, Button } from '@mui/material'
import card1 from "../../assets/addtocart/card1.png";
import { Addtocart } from '../../components/Addtocart';
import { Add, Remove } from "@mui/icons-material";

import React from 'react'

const cart = ({value}) => {

  const foodItems = [
  {
    id: 1,
    name: "Fried Chicken",
    price: 250,
    quantity: 2,
    img: "card1",
  },
  {
    id: 2,
    name: "Chocolate Ice cream",
    price: 135,
    quantity: 4,
     img: "card1",
  },
  {
    id: 3,
    name: "Chicken Burger",
    price: 175,
    quantity: 2,
    img : "card1",
  },
];

   const cartitem = [
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
        name: "Grilled Chicken Burger",
        description:
          "Juicy grilled chicken patty served with fresh veggies and sauce.",
        rating: 4.5,
        price: 180,
        img: card1,
      },
         {
        id: 3,
        name: "Grilled Chicken Burger",
        description:
          "Juicy grilled chicken patty served with fresh veggies and sauce.",
        rating: 4.5,
        price: 180,
        img: card1,
      },
    ]

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
           Add To Cart
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


<Box sx={{display:"flex"}}>
<Box sx={{maxWidth:"50%",flex:"0 0 50%"}}>

  <Box
      sx={{
        backgroundColor: "#0d0f11",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 3,
      }}
    >
      {foodItems.map((item,index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "12px",
            p: 2,
            gap: 2,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={item.img}
            sx={{
              width: 80,
              height: 80,
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#fff" }}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", mb: 1 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            {/* Quantity controls */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                sx={{
                  backgroundColor: "#0d0f11",
                  border: "1px solid #2a2f35",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#2a2f35" },
                }}
              >
                <Remove />
              </IconButton>
              <Typography sx={{ color: "#fff" }}>{item.quantity}</Typography>
              <IconButton
                sx={{
                  backgroundColor: "#0d0f11",
                  border: "1px solid #2a2f35",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#2a2f35" },
                }}
              >
                <Add />
              </IconButton>
            </Box>
          </Box>

          {/* Price */}
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "#8aff75" }}
          >
            Rs.{item.price}
          </Typography>
        </Box>
      ))}
    </Box> 

</Box>

<Box sx={{maxWidth:"50%",flex:"0 0 50%",ml:10}}>
  
    <Box
      sx={{
        backgroundColor: "#0d0f11",
        p: 3,
        borderRadius: "12px",
        maxWidth: 350,
        color: "#fff",
      }}
    >
      {/* Title */}
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Order SUmmery
      </Typography>

      {/* Items */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
      >
        <Typography>Item</Typography>
        <Typography>8</Typography>
      </Box>

      {/* Subtotal */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
      >
        <Typography>Subtotal</Typography>
        <Typography>Rs.1390.00</Typography>
      </Box>

      {/* Shipping */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
      >
        <Typography>Shipping</Typography>
        <Typography>Rs.0.00</Typography>
      </Box>

      {/* Tax */}
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
      >
        <Typography>Tax</Typography>
        <Typography>Rs.0.00</Typography>
      </Box>

      {/* Divider Line */}
      <Box
        sx={{
          borderTop: "1px dashed gray",
          my: 2,
        }}
      />

      {/* Total */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
        <Typography sx={{ fontWeight: "bold" }}>Rs.1390.00</Typography>
      </Box>

      {/* Coupon Code */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          placeholder="Coupon Code"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            input: { color: "#fff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#888" },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d57b3e",
            color: "#fff",
            fontWeight: "bold",
            px: 3,
            "&:hover": { backgroundColor: "#c56c2f" },
          }}
        >
          APPLY
        </Button>
      </Box>

      {/* Free delivery note */}
      <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
        Free Delivery above Rs. 500
      </Typography>

      {/* Checkout button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#d57b3e",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
          py: 1.5,
          "&:hover": { backgroundColor: "#c56c2f" },
        }}
      >
        PROCEED TO CHECKOUT
      </Button>
    </Box>

</Box>

</Box>


      <Box sx={{ display: "flex" }}>
        <Grid container spacing={3}>
          {cartitem?.map((value, index) => (
            //  <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Addtocart  key={index} value={value} />



            </Grid>
            // </Grid>
          ))}
        </Grid>
      </Box>







    </Box>


  )
}

export default cart
