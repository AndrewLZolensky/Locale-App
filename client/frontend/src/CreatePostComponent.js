// CreatePostComponent.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const CreatePostComponent = () => {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = {
      name: data.get('name'),
      summary: data.get('summary')
    }
    console.log(JSON.stringify(postData));
  };

  const textFieldStyle = {
    width: '100%', // Full width
    marginBottom: theme.spacing(3), // Margin bottom for spacing between fields
    '& .MuiInputBase-root': {
      color: 'black', // Set text color to black
      fontFamily: 'Arial, sans-serif', // Set your desired font family here
    },
    '& .MuiInputLabel-root': {
      color: 'black', // Set label color to black
      fontFamily: 'Arial, sans-serif', // Set your desired font family here for the label
    },
    '& .MuiFilledInput-root': {
      backgroundColor: theme.palette.background.default, // Background color of the TextField
      '&:hover': {
        backgroundColor: theme.palette.background.paper, // Background color on hover
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper, // Background color when focused
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '600px', margin: 'auto', padding: theme.spacing(3) }}>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="name-field" 
          name="name" // Add a name attribute
          label="Name" 
          variant="filled" 
          sx={textFieldStyle} 
        />
        <TextField
          id="summary-field"
          name="summary" // Add a name attribute
          label="Summary"
          variant="filled"
          multiline
          minRows={6}
          maxRows={8}
          sx={textFieldStyle}
        />
        <Button 
          type="submit" // Make this a submit button
          variant="contained" 
          sx={{ marginY: theme.spacing(2) }}
        >
          Post
        </Button>
      </form>
    </Box>
  );
};

export default CreatePostComponent;
