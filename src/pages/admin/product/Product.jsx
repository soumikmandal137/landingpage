import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import API from "../../../api/Axiosintance";
import TableComponent from "../../../components/Tablecomponents";
// import { productList } from "../../../hooks/redux/useProducts";
import { Edit, Delete } from '@mui/icons-material';



const handleDelete = async (id) => {
  console.log("Deleting id:", id); 
  // try {
  //   setIsDeleting(true);
  //   await API.delete(`/products/remove/${id}`);
  //   queryClient.invalidateQueries(["products"]);
  // } catch (err) {
  //   console.error("Delete failed:", err);
  // } finally {
  //   setIsDeleting(false);
  // }
};





const Product = () => {
  const navigate = useNavigate();
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [viewDetails, setViewDetails] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [page,setPage] = useState(1);
    const [isDeleting, setIsDeleting] = useState(false);



  const handleEdit = (id) => navigate(`/admin/edit/${id}`);
  


const perpage=5







const columns = [
  { field: "_id", headerName: "ID" },
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description" },
  {field: "category",headerName:"category"},
  {field: "price",headerName:"price"},
  { field: "status", headerName: "Status" },
];


  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await API.delete(`/products/remove${deleteId}`);

    
      queryClient.invalidateQueries(["products"]);

      console.log("Deleted product:", deleteId);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };




  const renderActions = (row) => (
    <>
      <Edit
        color="primary"
        style={{ cursor: 'pointer', marginRight: 8 }}
        onClick={() => handleEdit(row._id)}
      />
      <Delete
        color="error"
        // style={{ cursor: isDeleting ? 'not-allowed' : 'pointer' }}
        onClick={() => handleDelete(row._id)}
      />
    </>
  );





  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Product List
      </Typography>

    


<TableComponent
        columns={columns}
        actions={renderActions}
        onPageChange={(_, value) => setPage(value)}
        loading={isDeleting}
      />



      <Dialog open={openViewDialog} onClose={() => setOpenViewDialog(false)}>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Title: {viewDetails?.title}</Typography>
            <Typography>Description: {viewDetails?.description}</Typography>
            <Typography>Category: {viewDetails?.category}</Typography>
            <Typography>Price: {viewDetails?.price}</Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            onClick={() => {
              handleDelete();
              setOpenDialog(false);
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>



    </Box>
  );
};

export default Product;
