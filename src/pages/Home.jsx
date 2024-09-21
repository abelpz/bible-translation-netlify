import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function Home() {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Minority Language Translations
      </Typography>
      <Typography variant="body1">
        We provide translation resources to preserve and promote minority languages.
      </Typography>
    </Paper>
  );
}

export default Home;