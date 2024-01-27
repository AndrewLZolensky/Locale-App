import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { createTheme } from '@mui/material/styles';

// Define your theme
const theme = createTheme({
    palette: {
      primary: {
        main: '#556cd6',
        light: '#788bff',
        dark: '#334cb2',
      },
      secondary: {
        main: '#19857b',
        light: '#4fb3bf',
        dark: '#005f56',
      },
      divider: 'rgba(0, 0, 0, 0.12)', // You can also define the divider color here
      // ... other colors
    },
  });
  

const Forum = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: theme.palette.primary.light}}>
        {/* Flex container for centering TabList */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Explore" value="1" />
            <Tab label="My Posts" value="2" />
            <Tab label="My Replies" value="3" />
            <Tab label="Post" value="4" />
          </TabList>
        </Box>
      </Box>
      <TabPanel value="1">
        
      </TabPanel>
      <TabPanel value="2">Content of Item Two</TabPanel>
      <TabPanel value="3">Content of Item Three</TabPanel>
      <TabPanel value="4" sx={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', height: '60vh', justifyContent: 'space-around'}}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
      </TabPanel>
    </TabContext>
  );
};

export default Forum;