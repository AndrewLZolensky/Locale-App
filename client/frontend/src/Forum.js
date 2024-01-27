import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';
import ExploreComponent from './ExploreComponent';
import MyPostsComponent from './MyPostsComponent.js';
import CreatePostComponent from './CreatePostComponent.js';
import MyRepliesComponent from './MyRepliesComponent.js';
import UserPanel from './UserPanel'; // Import the UserPanel component

const tabsx = {
  color: theme.palette.background.default,
  '&.Mui-selected': { color: theme.palette.background.paper },
  '&.MuiTab-root': { minWidth: 'auto', padding: '12px 16px' } // Adjust padding for tabs
};

const Forum = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        {/* Tabs at the top */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: theme.palette.secondary.dark, padding: theme.spacing(2) }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', overflow: 'auto' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ minHeight: '48px' }}>
              <Tab label="Explore" value="1" sx={tabsx}/>
              <Tab label="My Posts" value="2" sx={tabsx}/>
              <Tab label="My Replies" value="3" sx={tabsx}/>
              <Tab label="Post" value="4" sx={tabsx}/>
            </TabList>
          </Box>
        </Box>
        {/* Main content area with UserPanel on the left */}
        <Box sx={{ display: 'flex', height: 'calc(100vh - 48px)' }}>
          {/* UserPanel on the left under the tabs, reduced width */}
          <UserPanel sx={{ width: '200px', flexShrink: 0, padding: theme.spacing(2) }} />
          {/* TabPanel for content on the right */}
          <Box sx={{ flex: 1, overflowY: 'auto' }}>
            <TabPanel value="1" sx={{ padding: theme.spacing(3) }}>
              <ExploreComponent/>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: theme.spacing(3) }}>
              <MyPostsComponent/>
            </TabPanel>
            <TabPanel value="3" sx={{ padding: theme.spacing(3) }}>
              <MyRepliesComponent/>
            </TabPanel>
            <TabPanel value="4" sx={{ padding: theme.spacing(3) }}>
              <CreatePostComponent/>
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </ThemeProvider>
  );
};

export default Forum;
