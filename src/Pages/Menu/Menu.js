import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', ml:2, fontWeight: 700, fontSize: '30px', color: '#2F6C7E' }}
      >
      <i>Welcome: This is your dashboard</i>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center" fontWeight="700">
      <i>Here you can access your courses, add more courses, track your progress, send and receive messages, and update your profile.</i>
      </Typography>
    </Paper>
    <Outlet />
    </div>
  );
}