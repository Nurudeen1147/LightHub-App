import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageRoutes from './components/HomePage';
import MenuBarRoutes from './components/MenuBar/index';
import { Grid } from '@mui/material';
import Dashboard from './components/MenuBar/DashBoard';
import Chatroom from './Pages/Chatroom/Chatroom';

function App() {
  return (
    <Grid>
      {/* <HomePageRoutes /> */}
      <Dashboard />
    </Grid>
  );
}

export default App;