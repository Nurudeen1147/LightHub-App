import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footers() {
  return (
    <Typography variant="body2" color="#929596" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://yahoo.com/">
        LightHub E-Learning Platform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} All rights reserved
      </Typography>
  );
}
