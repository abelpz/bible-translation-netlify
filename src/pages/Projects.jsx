import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

function Projects() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%', p: 3 }}>
      <Paper sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, width: '100%' }}>
        <Typography variant="h4" gutterBottom>
          Our Projects
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our ongoing translation projects for minority languages.
        </Typography>
        <List sx={{ flexGrow: 1 }}>
          <ListItem>
            <ListItemText primary="Project 1" secondary="Description of Project 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Project 2" secondary="Description of Project 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Project 3" secondary="Description of Project 3" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default Projects;