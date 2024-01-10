import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, AppBar, Toolbar, Typography, Paper, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';

const CourseCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddLecture = () => {
    // Handle adding lecture logic here
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Course Calendar</Typography>
        </Toolbar>
      </AppBar>

      <Paper elevation={3} style={{ margin: '20px', padding: '20px' }}>
        <Button onClick={handleOpen} color="primary" variant="contained" sx={{ mb: 2 }}>
          Add Lecture
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Lecture</DialogTitle>

          <DialogContent>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                fullWidth
              />
            </LocalizationProvider>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddLecture} color="primary" variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>

        {/* Render the calendar here */}
        {/* You can use a third-party library or build your own calendar component */}
      </Paper>
      <Outlet />
    </div>
  );
};

export default CourseCalendar;