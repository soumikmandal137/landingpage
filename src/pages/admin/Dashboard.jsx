import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
// import {  Person, ShoppingCart } from '@mui/icons-material';
import { FaCube } from 'react-icons/fa';
import { Person, ShoppingCart } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Box sx={{ padding: 10,display:"flex",justifyContent:"space-between",alignItems:"center" }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
              borderRadius: 2,
              padding: 2,
              height: 100,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <FaCube sx={{ fontSize: 40, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Products</Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>5</Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
              borderRadius: 2,
              padding: 2,
              height: 100,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Person sx={{ fontSize: 40, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Users</Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>5</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
              borderRadius: 2,
              padding: 2,
              height: 100,
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <ShoppingCart sx={{ fontSize: 40, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>Orders</Typography>
              <Typography variant="h5" sx={{ color: 'white' }}>5</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
