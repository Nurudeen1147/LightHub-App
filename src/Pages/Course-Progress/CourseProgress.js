import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Paper, LinearProgress } from '@mui/material';
import { Outlet } from 'react-router-dom';

const CourseProgressTracker = () => {
  // Sample course completion data
  const courseModules = [
    { id: 1, name: 'Module 1', completed: true },
    { id: 2, name: 'Module 2', completed: true },
    { id: 3, name: 'Module 3', completed: false },
    { id: 4, name: 'Module 4', completed: false },
  ];

  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    // Calculate course completion percentage
    const completedModulesCount = courseModules.filter((module) => module.completed).length;
    const totalModulesCount = courseModules.length;
    const percentage = (completedModulesCount / totalModulesCount) * 100;
    setCompletionPercentage(percentage);
  }, [courseModules]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Course Progress Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper sx={{ p: 3, mt: 2 }}>
        <div>
          <Typography variant="body1">Course 1 Completion Level:</Typography>
          <LinearProgress variant="determinate" value={completionPercentage} sx={{ mb: 2 }} />
          <Typography variant="caption" color="text.secondary">
            {`${completionPercentage}%`}
          </Typography>
        </div>
        {courseModules.map((module) => (
          <div key={module.id}>
            <Typography variant="body1">{module.name}</Typography>
            <input type="checkbox" checked={module.completed} disabled />
          </div>
        ))}
      </Paper>
      <Paper sx={{ p: 3, mt: 2 }}>
        <div>
          <Typography variant="body1">Course 2 Completion Level:</Typography>
          <LinearProgress variant="determinate" value={completionPercentage} sx={{ mb: 2 }} />
          <Typography variant="caption" color="text.secondary">
            {`${completionPercentage}%`}
          </Typography>
        </div>
        {courseModules.map((module) => (
          <div key={module.id}>
            <Typography variant="body1">{module.name}</Typography>
            <input type="checkbox" checked={module.completed} disabled />
          </div>
        ))}
      </Paper>
      <Paper sx={{ p: 3, mt: 2 }}>
        <div>
          <Typography variant="body1">Course 3 Completion Level:</Typography>
          <LinearProgress variant="determinate" value={completionPercentage} sx={{ mb: 2 }} />
          <Typography variant="caption" color="text.secondary">
            {`${completionPercentage}%`}
          </Typography>
        </div>
        {courseModules.map((module) => (
          <div key={module.id}>
            <Typography variant="body1">{module.name}</Typography>
            <input type="checkbox" checked={module.completed} disabled />
          </div>
        ))}
      </Paper>
      <Paper sx={{ p: 3, mt: 2 }}>
        <div>
          <Typography variant="body1">Course 4 Completion Level:</Typography>
          <LinearProgress variant="determinate" value={completionPercentage} sx={{ mb: 2 }} />
          <Typography variant="caption" color="text.secondary">
            {`${completionPercentage}%`}
          </Typography>
        </div>
        {courseModules.map((module) => (
          <div key={module.id}>
            <Typography variant="body1">{module.name}</Typography>
            <input type="checkbox" checked={module.completed} disabled />
          </div>
        ))}
      </Paper>
      <Outlet />
    </div>
  );
};

export default CourseProgressTracker;