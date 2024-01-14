  import React from 'react';
  import {
    Paper,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    AppBar,
  } from '@mui/material';
  
  const MyCourses = () => {
    const courses = [
      'Course 1',
      'Course 2',
      'Course 3',
      'Course 4',
      // Add more courses as needed
    ];
  
    return (
      <Paper sx={{ width: 600, margin: 'auto', marginTop: 1, padding: 3 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Courses</Typography>
        </Toolbar>
      </AppBar>
        <form>
          <List>
            {courses.map((course, index) => (
              <ListItem key={index}>
                <ListItemText primary={course} />
              </ListItem>
            ))}
          </List>
        </form>
      </Paper>
    );
  };
  
export default MyCourses;