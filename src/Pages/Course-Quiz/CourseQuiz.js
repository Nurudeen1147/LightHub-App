  import React, { useState } from 'react';
  import {
    Paper,
    Toolbar,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button,
    AppBar,
  } from '@mui/material';
  
  const CourseQuiz = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Perform quiz submission logic here
    // You can compare the selectedOption with the correct answer and calculate the score
    // Or you can send the selectedOption to the server for further processing
  };

  
    return (
      <Paper sx={{ width: 800, margin: 'auto', marginTop: 1, padding: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Course Quiz</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          <b>Question 1</b>: What Cohort are you in your AlX SE Program?
          </Typography>
          <RadioGroup
            aria-label="quiz1"
            name="quiz1"
            value={selectedOption1}
            onChange={handleOptionChange1}
          >
            <FormControlLabel value="a" control={<Radio />} label="Cohort 9" disabled={submitted} />
            <FormControlLabel value="b" control={<Radio />} label="Cohort 10" disabled={submitted} />
            <FormControlLabel value="c" control={<Radio />} label="Cohort 11" disabled={submitted} />
            <FormControlLabel value="d" control={<Radio />} label="Cohort 12" disabled={submitted} />
          </RadioGroup>
        </FormControl>
        </div>
        <div>
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          <b>Question 2</b>: How often do you practice hard things?
          </Typography>
          <RadioGroup
            aria-label="quiz2"
            name="quiz2"
            value={selectedOption2}
            onChange={handleOptionChange2}
          >
            <FormControlLabel value="a" control={<Radio />} label="Not regular" disabled={submitted} />
            <FormControlLabel value="b" control={<Radio />} label="Little regular" disabled={submitted} />
            <FormControlLabel value="c" control={<Radio />} label="Regular" disabled={submitted} />
            <FormControlLabel value="d" control={<Radio />} label="Veru regular" disabled={submitted} />
          </RadioGroup>
        </FormControl>
        </div>
        <div>
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          <b>Question 3</b>: Will you finish your ALX SE program at the normal time?
          </Typography>
          <RadioGroup
            aria-label="quiz3"
            name="quiz3"
            value={selectedOption3}
            onChange={handleOptionChange3}
          >
            <FormControlLabel value="a" control={<Radio />} label="Yes" disabled={submitted} />
            <FormControlLabel value="b" control={<Radio />} label="Not" disabled={submitted} />
            <FormControlLabel value="c" control={<Radio />} label="Not sure" disabled={submitted} />
          </RadioGroup>
        </FormControl>
        </div>
        <div>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!(selectedOption1 && selectedOption2 && selectedOption3) || submitted}
          sx={{ marginTop: 3 }}
        >
          Submit
        </Button>
        </div>
      </Paper>
    );
  };
  
export default CourseQuiz;