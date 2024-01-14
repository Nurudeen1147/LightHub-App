  import React from 'react';
  import {
    Paper,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Link,
    AppBar,
  } from '@mui/material';
  import {
    DescriptionOutlined,
    SchoolOutlined,
    UpdateOutlined,
  } from '@mui/icons-material';
  
  const CourseMaterials = () => {
    return (
      <Paper sx={{ width: 900, margin: 'auto', marginTop: 1, padding: 3 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Course Material</Typography>
        </Toolbar>
      </AppBar>
        <List component="nav">
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <DescriptionOutlined />
            </ListItemIcon>
            <ListItemText primary="Course Documents" />
          </ListItem>
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            <ListItemText primary="Ebooks" />
          </ListItem>
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <SchoolOutlined />
            </ListItemIcon>
            <ListItemText primary="Educational Sites" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <UpdateOutlined />
            </ListItemIcon>
            <ListItemText primary="Latest Updates" />
          </ListItem>
        </List>
      </Paper>
    );
  };

export default CourseMaterials;