import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2023 Minority Language Translations. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;