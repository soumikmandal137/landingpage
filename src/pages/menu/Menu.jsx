import React from 'react'
import { Box, Typography,Breadcrumbs, Stack, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import card1 from "../../assets/menu/card1.png"

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


  const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const value = 3.5;


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
          color:"#fff",
          justifyContent: "center",
          display: "flex",
          fontSize: "64px",
          fontWeight: "bold",
        }}
      >
        <Typography sx={{ color: "#fff",fontSize:"64px" }}>Home</Typography>
        <Typography sx={{ color: "#ff7b29",fontSize:"64px" }}>Our Menu</Typography>
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
        Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
        Facilisis eget eros sit semper sit enim. Turpis aliquet at ac eu donec ut.
        Sagittis vestibulum at quis non massa netus.
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


<Box sx={{display:"flex"}}>


    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>





    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



     <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



</Box>

 








<Box sx={{display:"flex",marginTop:"18px"}}>


    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>





    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



     <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



</Box>










<Box sx={{display:"flex",marginTop:"18px"}}>


    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>





    <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



     <Box sx={{marginRight:"24px"}}>

<Card sx={{ maxWidth: 345,bgcolor:"#182f31",borderRadius:"15px" }}>
      <CardActionArea>
       <img src={card1} alt="" srcset="" width={"384px"} height={"292px"}  />
        <CardContent>


    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="text-feedback"
        value={value}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>




          <Typography gutterBottom variant="h5" component="div" sx={{color:"#D68240",fontSize:"25px"}}>
            FriedChicken
          </Typography>
          <Typography variant="body2" sx={{ color: "#9C9D9B" }}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" style={{color:"#D68240",fontSize:"20px"}}>
          Rs.250
        </Button>
      </CardActions>
    </Card>

    </Box>



</Box>





    </Box>


  )
}

export default Menu