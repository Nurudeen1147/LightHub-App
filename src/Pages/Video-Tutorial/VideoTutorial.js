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
    VideoLibraryOutlined,
    ClassOutlined,
    PlayCircleOutlineOutlined,
  } from '@mui/icons-material';
  
  const VideoTutorial = () => {
    return (
      <Paper sx={{ width: 900, margin: 'auto', marginTop: 1, padding: 3 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Course Videos</Typography>
        </Toolbar>
      </AppBar>
        <List component="nav">
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <VideoLibraryOutlined />
            </ListItemIcon>
            <ListItemText primary="Class Lectures" />
          </ListItem>
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <ClassOutlined />
            </ListItemIcon>
            <ListItemText primary="Recorded Sessions" />
          </ListItem>
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <PlayCircleOutlineOutlined />
            </ListItemIcon>
            <ListItemText primary="Class Tutorials" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} href="#" target="_blank" rel="noopener">
            <ListItemIcon>
              <VideoLibraryOutlined />
            </ListItemIcon>
            <ListItemText primary="Other Videos" />
          </ListItem>
        </List>
      </Paper>
    );
  };
  
export default VideoTutorial;