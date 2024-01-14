import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
} from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';

const HelpDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
    <div onClick={setOpen}>
      <IconButton color="inherit">
        <HelpIcon />
      </IconButton> 
    </div>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Help/FAQ
          </Typography>
        </Toolbar>
      </AppBar>
        <DialogContent>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography variant="subtitle1">Question 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 1
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography variant="subtitle1">Question 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 2
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography variant="subtitle1">Question 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 3
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography variant="subtitle1">Question 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 4
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
              <Typography variant="subtitle1">Question 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer 5
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Add more Accordion components for additional questions and answers */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HelpDialog;