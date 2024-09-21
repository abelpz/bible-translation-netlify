import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minority Language Translations
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">Home</Button>
          <Button color="inherit" component={RouterLink} to="/about">About</Button>
          <Button color="inherit" component={RouterLink} to="/donate">Donate</Button>
          <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;