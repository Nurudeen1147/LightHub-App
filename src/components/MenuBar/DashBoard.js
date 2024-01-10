import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import DBheader from './const/dbheader';
import { createCustomTheme } from './themee';
import MenuBar from './MenuBar';
import Footers from './footers';
import { Outlet, useNavigate } from 'react-router-dom';

const theme = createCustomTheme();

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const drawerWidth = 280;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleMenuChange = (menu) => {
    navigate(`/${menu}`); // Navigate to the selected menu item
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp && (
            <MenuBar
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              onMenuChange={handleMenuChange}
            />
          )}
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <DBheader onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Outlet /> {/* Render the corresponding component based on the route */}
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#242d2e' }}>
            <Footers />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}