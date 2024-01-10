// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';


// // Profile Update Dialog Form Component
// const ProfileUpdate = ({ open, handleClose, handleOpen, profileData }) => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     console.log({
//       firstName: data.get('firstName'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//     });
//     handleClose();
//   };

//   return (
//     <div>
//     <div onClick={handleOpen}>
//         <i>Profile Update</i>
//       </div>
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle>Profile Update</DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="given-name"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 defaultValue={profileData.firstName}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 defaultValue={profileData.lastName}
//                 disabled
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 defaultValue={profileData.email}
//                 disabled
//               />
//             </Grid>
//           </Grid>
//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button type="submit" variant="contained" sx={{ ml: 1 }}>
//               Update
//             </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//     </div>
//   );
// };

// export default ProfileUpdate;


import React, { useState } from 'react';
import { Grid, Button, Dialog, Toolbar, Typography, Box, TextField, AppBar, DialogContent } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ProfileUpdate = () => {
  const [open, setOpen] = useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');
  const [profileData, setProfileData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    preferedName: '',
    phoneNumber: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the necessary logic to update the profile data
    console.log(profileData);
    handleClose();
  };
  return (
    <React.Fragment>

      <div onClick={handleOpen} >Profile
      </div> {/* Replace with your button component */}
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
        <form onSubmit={handleSubmit}>
        <DialogContent>
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile Update
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="firstName"
            label="First name"
            fullWidth
            value={profileData.firstName}
            onChange={handleChange}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="lastName"
            label="Last name"
            fullWidth
            value={profileData.lastName}
            onChange={handleChange}
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="middleName"
            label="Middle name"
            fullWidth
            value={profileData.middleName}
            onChange={handleChange}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="preferedName"
            label="Prefered name"
            fullWidth
            value={profileData.preferedName}
            onChange={handleChange}
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="phoneNumber"
            label="Phone number (include your country code)"
            fullWidth
            value={profileData.phoneNumber}
            onChange={handleChange}
            autoComplete="given-phone"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="email"
            label="Email"
            fullWidth
            value={profileData.email}
            onChange={handleChange}
            autoComplete="given-email"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            name="address1"
            label="Address line 1"
            fullWidth
            value={profileData.address1}
            onChange={handleChange}
            autoComplete="address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="address2"
            label="Address line 2"
            fullWidth
            value={profileData.address2}
            onChange={handleChange}
            autoComplete="address-line2"
            variant="standard"
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField
            name="city"
            label="City"
            fullWidth
            value={profileData.city}
            onChange={handleChange}
            autoComplete="address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="state"
            label="State/Province/Region"
            fullWidth
            value={profileData.state}
            onChange={handleChange}
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="zipCode"
            label="Zip / Postal code"
            fullWidth
            value={profileData.zipCode}
            onChange={handleChange}
            autoComplete="postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="country"
            label="Country"
            fullWidth
            value={profileData.country}
            onChange={handleChange}
            autoComplete="country"
            variant="standard"
          />
        </Grid>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveEmail" value="yes" />}
            label="Would you like to receive special news"
          />
        </Grid>
{/* //           <TextField */}
{/* //             name="firstName"
//             label="First Name"
//             value={profileData.firstName}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="middleName"
//             label="Middle Name"
//             value={profileData.lastName}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="phoneNumber"
//             label="phone Number"
//             value={profileData.course}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="email"
//             label="Email"
//             value={profileData.email}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="address"
//             label="Address"
//             value={profileData.course}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="state"
//             label="State"
//             value={profileData.course}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />
//           <TextField
//             name="country"
//             label="Country"
//             value={profileData.course}
//             onChange={handleChange}
//             fullWidth
//             sx={{ mb: 2 }}
//           />*/}
           <Box flexGrow={1} display="flex" justifyContent="flex-end">
             <Button onClick={handleClose} color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: 0, mb: 1, mr:1 }}>
              <b>Cancel</b>
            </Button>
            <Button onClick={handleSubmit} color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: 0, mb: 1 }}>
              <b>Save</b>
            </Button>
            </Box>
            </DialogContent>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default ProfileUpdate;