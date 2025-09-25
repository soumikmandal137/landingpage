import React from 'react'
import { Box, Breadcrumbs, Button, InputAdornment, TextareaAutosize, TextField, Typography,IconButton, } from '@mui/material'
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import EditIcon from "@mui/icons-material/Edit";
import { Facebook, Instagram, Email, Phone } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const schema = yup.object().shape({
  name: yup.string().required("Title is required"),
  email: yup
  .string()
  .email("Enter a valid email")
  .required("Email is required"),
  subject: yup.string().required("subject is required"),
  description: yup.string().required("description is required"),

});

const Contact = () => {

const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject:"",
      description:"",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); 
  };


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
            Contact Us
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


<Box sx={{display:"flex",maxWidth:"50%",flex:"0 0 50%"}}>
<Box sx={{display:"flex",flexDirection:"column"}}>

  <Box> 
 <Typography sx={{fontSize:"46px",color:"#FFFFFF",fontWeight:"600"}}>Get In Touch</Typography>
 <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"500",lineHeight:"1.2",mt:"24px"}}>Your email address will not be published. Required fields are marked.</Typography>
      </Box>


            <Box sx={{ display: "flex", gap: 4,mt:"68px"}}>
        <TextField
  label="Name"
  sx={{ 
    "& .MuiInputLabel-root": { color: "#fff" },
    "& .MuiInputBase-input": { color: "#fff" }  
  }}
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}

           InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <PersonIcon sx={{ color: "#fff" }} />
      </InputAdornment>
    ),
  }}

        />



        <TextField
          label="Email"
            sx={{ 
    "& .MuiInputLabel-root": { color: "#fff" },
    "& .MuiInputBase-input": { color: "#fff" }  
  }}
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}

            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <EmailIcon sx={{ color: "#fff" }} />
      </InputAdornment>
    ),
  }}

        />
      </Box>

            <Box sx={{ mt:"30px"}}>
        <TextField
  label="subject"
  sx={{ 
    "& .MuiInputLabel-root": { color: "#fff" },
    "& .MuiInputBase-input": { color: "#fff" }  
  }}
          fullWidth
          {...register("subject")}
          error={!!errors.subject}
          helperText={errors.subject?.message}

           InputProps={{
    startAdornment: (
   <InputAdornment position="start">
  <MessageIcon sx={{ color: "#fff" }} />
</InputAdornment>
    ),
  }}

        />




</Box>


        <Box>
          
             <TextareaAutosize
              style={{ marginTop: "20px" }}
              aria-label="Description"
              placeholder="Description"
              minRows={5}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
   InputProps={{
    startAdornment: (
              <InputAdornment position="start">
  <EditIcon   />
</InputAdornment>
   ),
  }}

            />

        </Box>


        <Box>

              <Button
                    // fullWidth
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2,bgcolor:"#D68240",padding:"15px 20px",textTransform:"uppercase" }}
                    // disabled={loading}
                  >
                    Send Message
                  </Button>

        </Box>

</Box>
    
    

</Box>


<Box sx={{display:"flex",maxWidth:"50%",flex:"0 0 50%",bgcolor:"#191e20ff"}}>
<Box sx={{display:"flex",flexDirection:"column"}}>
  <Box>
    <Typography sx={{fontSize:"25px",color:"#ffffff",fontWeight:"600",paddingLeft:"53px",marginTop:"57px"}}>Address:</Typography>
    <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"600",paddingLeft:"53px",marginTop:"18px"}}>543 Country Club Ave, NC 27587, London, UK +1257 6541120</Typography>
  </Box>

 <Box>
    <Typography sx={{fontSize:"25px",color:"#ffffff",fontWeight:"600",paddingLeft:"53px",marginTop:"57px"}}>Contact:</Typography>
    <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"600",paddingLeft:"53px",marginTop:"18px"}}>Phone : +91 8348457995</Typography>
      <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"600",paddingLeft:"53px",marginTop:"18px"}}>Email : Foodi018@gmail.com</Typography>

  </Box>


 <Box>
    <Typography sx={{fontSize:"25px",color:"#ffffff",fontWeight:"600",paddingLeft:"53px",marginTop:"57px"}}>Opening Hourse :</Typography>
    <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"600",paddingLeft:"53px",marginTop:"18px"}}>Monday - Friday :  9:00 AM - 10:00 PM</Typography>
      <Typography sx={{fontSize:"16px",color:"#9C9D9B",fontWeight:"600",paddingLeft:"53px",marginTop:"18px"}}>Saturday - Sunday :  9:00 AM - 7: 00 PM</Typography>

  </Box>


 <Box>
    <Typography sx={{fontSize:"25px",color:"#ffffff",fontWeight:"600",paddingLeft:"53px",marginTop:"57px"}}>Stay Connected :</Typography>
  <Box sx={{ mt: 2,ml:"53px" }}>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <XIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            sx={{
              color: "#ffffff",
              bgcolor: "#182F31",
              borderRadius: "50%",
              p: 1.2,
              ml: "15px",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#f57c00",
                padding:"10px",
                transform: "scale(1.1)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>

  </Box>

     </Box> 
  


</Box>


</Box>

</Box>

  )
}

export default Contact
