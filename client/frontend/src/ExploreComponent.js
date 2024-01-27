// ExploreComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles'; // Import useTheme

const ExploreComponent = () => {
  const theme = useTheme(); // Access the theme
  // Dummy data for the list of items
  const items = [
    { title: 'Item 1', description: 'Description for item 1' },
    { title: 'Item 2', description: 'Description for item 2' },
    // ... more items
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: theme.spacing(3) }}>
      {/* Container Box for consistent spacing and width */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '600px', margin: 'auto' }}>
        {items.map((item, index) => (
          <Card key={index} sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreComponent;

