import { Card, CardActionArea,  CardContent,  Typography } from '@mui/material';
import React from 'react'

const Blogcard = ({value}) => {
console.log("props",value);

  return (

    
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







      </Card>


  )
}

export default Blogcard