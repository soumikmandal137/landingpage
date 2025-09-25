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
  category: yup.string().trim().required("Category is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),
});

const categoryOptions = [
  { label: "Indian", value: "indian" },
  { label: "Mexican", value: "mexican" },
  { label: "Italian", value: "italian" },
  { label: "Chinese", value: "chinese" },
  { label: "Bengali", value: "bengali" },
  { label: "Arabian", value: "arabian" },
  { label: "Japanese", value: "japanese" },
];

const ProductAdd = () => {
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
        Add Food
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
              placeholder="Enter food title"
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

            <TextField
              select
              label="Category"
              required
              fullWidth
              defaultValue=""
              {...register("category")}
              error={!!errors.category}
              helperText={errors.category?.message}
            >
              <MenuItem value="">
                <em>Select Category</em>
              </MenuItem>
              {categoryOptions.map((item, i) => (
                <MenuItem key={i} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </TextField>

            {/* Price */}
            <TextField
              label="Price"
              required
              placeholder="Enter price"
              fullWidth
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
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

export default ProductAdd;
