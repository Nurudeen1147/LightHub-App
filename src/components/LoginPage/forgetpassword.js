import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid } from '@mui/material';

const Forgetpassword = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log('Email:', email);
    handleClose();
  };
  return (
    <div>
      <Grid onClick={handleOpen}>
        <i>Forget Password</i>
        </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Forget Password</DialogTitle>
        <DialogContent >
            <i>Insert your email address </i>
          <TextField 
            autoFocus
            margin="dense"
            label="Email Address"
            type="text"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Forgetpassword;