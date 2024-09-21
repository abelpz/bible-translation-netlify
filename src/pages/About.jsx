import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are dedicated to preserving and promoting minority languages through translation resources.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          To ensure linguistic diversity and cultural preservation through translation support.
        </Typography>
      </Paper>
    </Box>
  );
}

export default About;