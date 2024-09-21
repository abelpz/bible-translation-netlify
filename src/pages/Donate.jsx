import React from 'react';
import { Typography, Paper, Button, Box } from '@mui/material';

function Donate() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Donate
        </Typography>
        <Typography variant="body1" paragraph>
          Support our mission by making a donation.
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
          Make a Donation
        </Button>
      </Paper>
    </Box>
  );
}

export default Donate;