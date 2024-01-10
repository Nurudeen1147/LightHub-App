import React, { useState } from 'react';
import { Typography, Grid, AppBar, Toolbar, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phoneNumber: ''
  });
  const [message, setMessage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendEmail = () => {
    // Replace `your-email@example.com` with your actual email address
    const emailLink = `mailto:your-email@example.com?subject=Contact%20Form%20Inquiry&body=${encodeURIComponent(
      `Email: ${contactDetails.email}\nPhone Number: ${contactDetails.phoneNumber}\n\n${message}`
    )}`;
    window.location.href = emailLink;
  };
  return (
    <div>
      <div onClick={handleOpen}>
        <i>Contact Us</i>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
      <AppBar position="static"  sx={{ backgroundColor: '#2F6C7E', mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contact Us
          </Typography>
        </Toolbar>
      </AppBar>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div>
                <h3>Contact Details:</h3>
                <p>Phone Number: 08065274615</p>
                <p>Address: No 1, Alhaja Moromoke Oyelowo Street,
                  Adam Estate, Ikotun Lagos State, Nigeria.</p>
                <p>Email: neroevali4u@yahoo.co.uk</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                name="email"
                value={contactDetails.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Phone Number"
                type="text"
                fullWidth
                name="phoneNumber"
                value={contactDetails.phoneNumber}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                label="Message"
                type="text"
                fullWidth
                multiline
                rows={6}
                value={message}
                onChange={handleMessageChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" 
            type="submit"
            variant="contained"
            sx={{ mt: -2, mb: 1, mr:1, backgroundColor: '#2F6C7E' }}>
            Cancel
          </Button>
          <Button onClick={handleSendEmail} color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: -2, mb: 1, mr:1, backgroundColor: '#2F6C7E' }}>
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUs;