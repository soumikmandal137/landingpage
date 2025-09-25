import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "../../../hooks/utils/supabaseClient";

const schema = yup.object().shape({
  name: yup.string().trim().required("Title is required"),
  position: yup.string().trim().required("Description is required"),
  category: yup.string().trim().required("Category is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
});

const Addchef = () => {
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
      name: "",
      position: "",
      category: "",
      price: "",
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
      const { error: uploadfileerror } = await supabase.storage
        .from("product-images")
        .upload(filePath, selectedFile);

      if (uploadfileerror) {
        toast.error(uploadfileerror.message);
        console.log("-----", uploadfileerror);
        return;
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
        Add Chef
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
          label="Name"
          required
          placeholder="Enter Chef Name"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField
          label="Position"
          required
          placeholder="Enter Chef position"
          fullWidth
          {...register("position")}
          error={!!errors.position}
          helperText={errors.position?.message}
        />


  </Stack>
 <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Stack
              spacing={2}
              alignItems="center"
              sx={{ width: "100%", maxWidth: 350 }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 300,
                  border: "2px dashed #bbb",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#fafafa",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "#f0f7ff",
                  },
                }}
              >
                {previewUrl ? (
                  <>
                    <Avatar
                      alt="Preview"
                      src={previewUrl}
                      variant="rounded"
                      sx={{
                        width: 150,
                        height: 150,
                        mb: 1,
                        borderRadius: 2,
                      }}
                    />
                    <Typography variant="body2" noWrap sx={{ maxWidth: "90%" }}>
                      {selectedFile?.name}
                    </Typography>
                  </>
                ) : (
                  <Typography color="textSecondary">
                    Drag & drop or click to upload
                  </Typography>
                )}
              </Box>

              <input
                type="file"
                accept="image/*"
                id="upload-file"
                hidden
                onChange={handleFileChange}
              />
              <label htmlFor="upload-file" style={{ width: "100%" }}>
                <Button variant="contained" component="span" fullWidth>
                  {previewUrl ? "Change Image" : "Upload Image"}
                </Button>
              </label>
            </Stack>
          </Box>

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

export default Addchef;
