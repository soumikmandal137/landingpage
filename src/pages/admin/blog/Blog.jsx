import React from 'react'
import { Box, Typography } from '@mui/material'
import TableComponent from '../../../components/Tablecomponents'
import { useState } from 'react';

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




const Blog = () => {
      const [isDeleting, setIsDeleting] = useState(false);
  return (
      <Box>
      <Typography variant="h5" gutterBottom>
        Blog List
      </Typography>

<TableComponent
        columns={columns}
        actions={renderActions}
        onPageChange={(_, value) => setPage(value)}
        loading={isDeleting}
      />

      </Box>
  )
}

export default Blog