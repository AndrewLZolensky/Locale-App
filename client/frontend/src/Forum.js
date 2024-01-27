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
import LogOut from './Logout.js';

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
        {/* Top bar with tabs, user info, and logout */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: theme.palette.secondary.dark, padding: theme.spacing(2), display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* User info at the left */}
          <UserPanel sx={{ flexShrink: 0 }} />
          {/* Tabs in the center */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ minHeight: '48px' }}>
              <Tab label="Explore" value="1" sx={tabsx}/>
              <Tab label="My Posts" value="2" sx={tabsx}/>
              <Tab label="My Replies" value="3" sx={tabsx}/>
              <Tab label="Post" value="4" sx={tabsx}/>
            </TabList>
          </Box>
          {/* Additional space or a placeholder box can be added here if needed for alignment */}
          <LogOut sx={{ flexShrink: 0 }} />
        </Box>
        {/* Main content area */}
        <Box sx={{ flex: 1, overflowY: 'auto', padding: theme.spacing(3), height: 'calc(100vh - 48px)' }}>
          <TabPanel value="1">
            <ExploreComponent/>
          </TabPanel>
          <TabPanel value="2">
            <MyPostsComponent/>
          </TabPanel>
          <TabPanel value="3">
            <MyRepliesComponent/>
          </TabPanel>
          <TabPanel value="4">
            <CreatePostComponent/>
          </TabPanel>
        </Box>
      </TabContext>
    </ThemeProvider>
  );
};

export default Forum;

