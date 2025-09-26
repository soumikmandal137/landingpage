import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import TableComponent from "../../../components/Tablecomponents";
import { useNavigate } from "react-router-dom";

const handleDelete = async (id) => {
console.log("Deleting id:", id); 
};

const User = () => {
    const navigate = useNavigate();
  const [openViewDialog, setOpenViewDialog] = useState(false);
  const [viewDetails, setViewDetails] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [page,setPage] = useState(1);
    const [isDeleting, setIsDeleting] = useState(false);

  const columns = [
  { field: "_id", headerName: "ID" },
  { field: "title", headerName: "Title" },
  { field: "description", headerName: "Description" },
  {field: "category",headerName:"category"},
  {field: "price",headerName:"price"},
  { field: "status", headerName: "Status" },
];


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

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        User List
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

export default User;
