import { yupResolver } from "@hookform/resolvers/yup";
import {
  // Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, { useEffect, useState } from "react";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import API from "../../../api/Axiosintance";
import { toast } from "sonner";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Key } from "lucide-react";

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
  { lable: "Indian", value: "indian" },
  { label: "Mexican", value: "mexican" },
  { label: "Italian", value: "italian" },
  { label: "Chinese", value: "chinese" },
  { label: "Bengali", value: "bengali" },
  { label: "Arabian", value: "arabian" },
  { label: "Japanese", value: "Japanese" },
];
const ProductAdd = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price:"",
      image: "",
    },
  });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const onSubmit = async (data) => {
    console.log("form data", data);
  };

  return (
    <Box sx={{}}>
      <Typography variant="h5" gutterBottom>
        Add Food
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "60%" }}>
            <TextField
              label="Title"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <TextareaAutosize
              style={{ marginTop: "20px" }}
              aria-label="Description"
              placeholder="Description"
              minRows={5}
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
            <FormControl sx={{ mt: 2 }} size="small">
              <InputLabel id="demo-select-small-label" sx={{mb: 3}}>category </InputLabel>
              <Select
              // sx={{ mt: 2 }} 
                labelId="demo-select-small-label"
                id="demo-select-small"
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
              >
                <MenuItem value="">
                  <em>Select Options</em>
                </MenuItem>
                {categoryOptions?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>

            </FormControl>

  <TextField sx={{mt:2}}
              label="Price"
              fullWidth
              {...register("price")}
              error={!!errors.price}
              helperText={errors.price?.message}
            />


          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", width: "40%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "300px",
                  height: "300px",
                  border: "1px dotted #ccc",
                }}
              ></Box>
              <Button component="label" variant="outlined" sx={{ mt: 3 }}>
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </Button>
            </Box>
          </Box>
        </Stack>
        <Button
          // fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          // disabled={loading}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProductAdd;
