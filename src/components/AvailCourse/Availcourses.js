import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
  Checkbox,
  Link
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Course from './Courselist';

export default function Availcourses() {
  const [expanded, setExpanded] = useState({});
  const [open, setOpen] = useState(false);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checkboxes, setCheckboxes] = useState([false, false, false, false]);
  const [applyButtonDisabled, setApplyButtonDisabled] = useState(true);

  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };


  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
    setApplyButtonDisabled(updatedCheckboxes.every((checkbox) => !checkbox));
  };

  const handleChange = (index) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [index]: isExpanded,
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = () => {
    handleClose();
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <i>Available Courses</i>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <AppBar position="static" sx={{ backgroundColor: '#2F6C7E', mb: 2 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Available Courses
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid>

          <div>
      {Course.map((course, index) => (
        <Accordion
          key={index}
          expanded={expanded[index]}
          onChange={handleChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[index]}
            onChange={(event) => handleCheckboxChange(index)}
            onClick={handleCheckboxClick}
            />
            {course.courseName}
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
            {course.courseTitle}
          </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{course.courseDesc}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            sx={{ mt: 0, mb: 1, mr: 1, backgroundColor: '#2F6C7E' }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleApply}
            color="primary"
            variant="contained"
            disabled={applyButtonDisabled}
            sx={{ mt: 0, mb: 1, mr: 1, backgroundColor: '#2F6C7E' }}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}