import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import { StarIcon } from "lucide-react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';



export const Addtocart = ({value}) => {
  return (
  <Box>
    <Box>
      <Card sx={{ maxWidth: 345, bgcolor: "#182f31", borderRadius: "15px" }}>
        <CardActionArea>
          <img
            src={value.img}
            alt=""
            width={"404px"}
            height={"312px"}
 style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}          />
          <CardContent>

              <IconButton
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "#121a1d",
                "&:hover": { bgcolor: "white" },
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#D68240"}} />
            </IconButton>
            <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
              <Rating
                name="text-feedback"
                value={value.rating}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#D68240", fontSize: "25px" }}
            >
            {value.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
              {value.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
          <Button size="small" style={{ color: "#D68240", fontSize: "20px" }}>
            Rs.{value.price}
          </Button>

<Button
  variant="contained"
  sx={{
    backgroundColor: "#121a1d",
    borderRadius: "50%",
    border:"1px solid #d68240",
    minWidth: "40px",
    width: "40px",
    height: "40px",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <ShoppingBasketIcon />
</Button>



        </CardActions>



      </Card>



</Box>


 





    </Box>
  )
}
