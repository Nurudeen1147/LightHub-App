import React, { useState } from 'react';
import {
  Link,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Course from '../../components/AvailCourse/Courselist';
import Fees from '../../components/Payment/CoursePayment';

export default function AddaCourse() {
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
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Available Courses</Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} style={{ margin: '20px', padding: '20px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
            </Grid>
            <Box flexGrow={1} display="flex" justifyContent="flex-end">
            <Button onClick={handleClose} color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mr:1 }}>
              <i><b>Cancel</b></i>
            </Button>
            <Button onClick={handleApply} color="primary"
            type="submit"
            variant="contained"
            disabled={applyButtonDisabled}
            sx={{ mt: 3}}>
              <b><Fees /></b>
            </Button>
            </Box>
      </Paper>
      {/* <Outlet /> */}
    </div>
  );
}