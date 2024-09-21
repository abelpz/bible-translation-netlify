import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Minority Language Translations
        </Typography>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          We provide translation resources to preserve and promote minority languages.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;