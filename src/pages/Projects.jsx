import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';

function Projects() {
  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Our Projects
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our ongoing translation projects for minority languages.
      </Typography>
      <List>
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
  );
}

export default Projects;