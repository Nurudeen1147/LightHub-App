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
            {/* <div>
            <Accordion expanded={expanded[0] === 0} onChange={handleChange(0)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <div>
                      <Checkbox
                        {...label}
                        checked={checkboxes[0]}
                        onChange={() => handleCheckboxChange(0)}
                      />
                      Course 1
                    </div>
                  </Typography>
                  <Typography sx={{ color: 'text.secondary' }}>check the course description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    The course overview, duration, curriculum, instruction information, course fee will be here.
                    Other relevant information about the course will also be provided here.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded[1] === 1} onChange={handleChange(1)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[1]}
            onChange={() => handleCheckboxChange(1)}
            />
            Course 2
          </div>
            </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[2] === 2} onChange={handleChange(2)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[2]}
            onChange={() => handleCheckboxChange(2)}
            />
            Course 3
          </div>
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[3] === 3} onChange={handleChange(3)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[3]}
            onChange={() => handleCheckboxChange(3)}
            />
            Course 4
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[4] === 4} onChange={handleChange(4)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[4]}
            onChange={() => handleCheckboxChange(4)}
            />
            Course 5
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[5] === 5} onChange={handleChange(5)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[5]}
            onChange={() => handleCheckboxChange(5)}
            />
            Course 6
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[6] === 6} onChange={handleChange(6)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[6]}
            onChange={() => handleCheckboxChange(6)}
            />
            Course 7
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded[7] === 7} onChange={handleChange(7)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          <div>
          <Checkbox
            {...label}
            checked={checkboxes[7]}
            onChange={() => handleCheckboxChange(7)}
            />
            Course 8
          </div>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
          check the course description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The coures overview, duration, curriculum, 
            instruction information, course fee will be in here.
            Other relivant information about the course 
            will also be provided here.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div> */}
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