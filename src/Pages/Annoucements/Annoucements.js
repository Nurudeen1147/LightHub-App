import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogContent,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { Delete, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState([false, false, false, false]);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);

  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
    setDeleteButtonDisabled(updatedCheckboxes.every((checkbox) => !checkbox));
  };

  const handleDelete = () => {
    // Perform delete operation here
    // Example: Deleting the checked messages
    const updatedCheckboxes = checkboxes.map((checkbox) => false);
    setCheckboxes(updatedCheckboxes);
    setDeleteButtonDisabled(true);
  };

  return (
    <div>
    <div onClick={setOpen}>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton> 
    </div>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notification Page
          </Typography>
        </Toolbar>
      </AppBar>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Messages
          </Typography>
          {checkboxes.map((checked, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => handleCheckboxChange(index)}
                />
              }
              label={`Message ${index + 1}`}
            />
          ))}

          {checkboxes.some((checkbox) => checkbox) ? (
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Message Details</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This is the content of the message.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ) : null}
          <Box flexGrow={1} display="flex" justifyContent= "space-between">
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{ mt: 1, mb:1}}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDelete}
            disabled={deleteButtonDisabled}
            sx={{ mt: 1, mb: 1 }}
          >
            <Delete />
            Delete
          </Button>
          </Box>
          
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notification;