import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";



import React from "react";


const Chefcard = ({value}) => {
console.log("props",value);



  return (
    <Box>




      <Card sx={{ maxWidth: 345, bgcolor: "#182f31", borderRadius: "15px" }}>
        <CardActionArea>
          <img
            src={value.img}
            alt=""
            width={"404px"}
            height={"312px"}
            />
          <CardContent>

    
           

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#ffffffff", fontSize: "25px",textAlign:"center"}}
            >
            {value.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#9C9D9B",fontSize:"20px",fontWeight:"300",textAlign:"center" }}>
              {value.description}
            </Typography>
          </CardContent>
        </CardActionArea>



<CardActions
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  }}
>
  <Typography
    variant="body2"
    sx={{ 
      display: "flex", 
      gap: 2, 
      color: "#fff", 
      fontSize: "30px" 
    }}
  >
    {value.icons}
  </Typography>
</CardActions>



      </Card>
    </Box>
  );
};

export default Chefcard;
