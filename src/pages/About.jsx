import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        We are dedicated to preserving and promoting minority languages through translation resources.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1">
        To ensure linguistic diversity and cultural preservation through translation support.
      </Typography>
    </Paper>
  );
}

export default About;