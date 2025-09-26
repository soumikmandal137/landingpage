import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "../../../hooks/utils/supabaseClient";


const schema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
    description: yup.string().trim().required("Description is required"),

});

const UserAdd = () => {



  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
       description: "",
   
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  const onSubmit = async (data) => {
    // console.log("Form Data:", { ...data, image: selectedFile });
    if (selectedFile) {
      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;
      // console.log("Filepath",filePath);
      const {error:uploadfileerror} = await supabase.storage.from("product-images").upload(filePath,selectedFile)
      
      if(uploadfileerror){
        toast.error(uploadfileerror.message)
        console.log("-----",uploadfileerror);
        return
        
      }

    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);


  return (
    <Box>
      <Typography variant="h5" gutterBottom fontWeight={600}>
        Add User
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          mt: 2,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "#fff",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Left Section - Form Fields */}
          <Stack spacing={3} sx={{ flex: 1 }}>
            <TextField
              label="Title"
              required
              placeholder="Enter User title"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

             <TextField
                          label="Description"
                          required
                          placeholder="Enter description"
                          fullWidth
                          multiline
                          minRows={4}
                          {...register("description")}
                          error={!!errors.description}
                          helperText={errors.description?.message}
                        />
            
          </Stack>
        </Stack>
         <Box textAlign="right" mt={4}>
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                </Box>
      </Box>
    </Box>
  );
};

export default UserAdd;
