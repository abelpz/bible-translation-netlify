import React from 'react';
import { Typography, Paper, Button, Box } from '@mui/material';

function Donate() {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Donate
      </Typography>
      <Typography variant="body1" paragraph>
        Support our mission by making a donation.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Make a Donation
      </Button>
    </Paper>
  );
}

export default Donate;