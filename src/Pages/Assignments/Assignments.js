  import React from 'react';
  import {
    Paper,
    Toolbar,
    Typography,
    TextField,
    Button,
    AppBar,
  } from '@mui/material';
  
  const Assignments = () => {
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form submission logic here
    };
  
    return (
      <Paper sx={{ width: 600, margin: 'auto', marginTop: 1, padding: 3 }}>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Course Assignment</Typography>
        </Toolbar>
      </AppBar>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Paste your Google Doc link here"
            fullWidth
            margin="normal"
          />
          <TextField
            required
            label="Summary of your report"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: 3 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    );
  };
export default Assignments;