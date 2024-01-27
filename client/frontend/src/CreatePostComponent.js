// CreatePostComponent.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const CreatePostComponent = () => {
  const theme = useTheme();
  const [image, setImage] = useState(null); // State for storing the uploaded image

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const textFieldStyle = {
    width: '100%', // Full width
    marginBottom: theme.spacing(3), // Margin bottom for spacing between fields
    '& .MuiInputBase-root': {
      color: theme.palette.background.paper // Text color inside the input
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.background.default // Label color
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
      <TextField id="name-field" label="Name" variant="filled" sx={textFieldStyle} />
      <TextField
        id="summary-field"
        label="Summary"
        variant="filled"
        multiline
        minRows={6}
        maxRows={8}
        sx={textFieldStyle}
      />
      <Button variant="contained" component="label" sx={{ marginY: theme.spacing(2) }}>
        Upload Image
        <input type="file" hidden onChange={handleImageChange} />
      </Button>
      {image && <Box component="img" src={image} alt="Uploaded image" sx={{ maxWidth: '100%', height: 'auto', marginY: theme.spacing(2) }} />}
    </Box>
  );
};

export default CreatePostComponent;
