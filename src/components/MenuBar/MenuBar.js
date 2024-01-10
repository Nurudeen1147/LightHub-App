import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import menubarStyles from './const/styles';
import HomeIcon from '@mui/icons-material/Home'; 
import { useNavigate } from "react-router-dom";
import logo from './LightHubLogo1.png';
import menubaritemlists from './const/menubaritems';
import overview from './const/Menumenubar';
import { Outlet } from 'react-router-dom';

export default function MenuBar(props) {
  const navigate = useNavigate();

  // const overviewmenu = {
  //   name: 'Overview',
  //   label: 'Overview',
  //   route: 'menu',
  // };

  // const handleClick = () => {
  //   navigate(overview.route);
  // };

  const nav = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
      bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
  };
  
  const navCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
  };
  
  const navCategory1 = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 0.5,
    px: 1,
    bgcolor: '#101F33',
  };

  return (
    <Drawer sx={menubarStyles.drawer} variant="permanent" anchor="left">
      <List sx={{ ...navCategory1 }}>
        {overview.map((overviewmenu) => (
          <Box key={overviewmenu.id} sx={{ bgcolor: '#101F33' }}>
      <ListItem sx={{ ...nav, ...navCategory, fontSize: 40, color: '#fff', marginTop: '-20px' }}>
        <div><img src={logo} alt={logo} style={{ width: '150px', marginBottom: '-70px', marginLeft: '-65px' }} /></div>
        <div style={{ marginLeft: '-40px', marginTop: '15px' }}><i>LightHub</i></div>
      </ListItem>
      <Divider />
      <ListItem sx={{ ...nav, ...navCategory, mt: -0.5, mb: -0.5, ml: '-12px' }} onClick={() => navigate(overviewmenu.route)}>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
          </ListItemIcon>
          <ListItemText sx={menubarStyles.label} primary={overviewmenu.label} />
        </ListItemButton>
      </ListItem>
      </Box>
        ))}
      </List>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <List sx={{ ...navCategory1 }}>
        {menubaritemlists.map((menuItem) => (
          <Box key={menuItem.id} sx={{ bgcolor: '#101F33' }}>
            <ListItem key={menuItem.id} onClick={() => navigate(menuItem.route)}>
              <ListItemButton>
                <ListItemIcon sx={menubarStyles.icons}>{menuItem.icon}</ListItemIcon>
                <ListItemText sx={menubarStyles.label} primary={menuItem.label} />
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider sx={{ mt: 1 }}/>
    </Drawer> 
  );
}