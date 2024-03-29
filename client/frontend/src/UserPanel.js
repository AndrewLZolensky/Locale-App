// UserPanel.js
import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const UserPanel = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2) }}>
      <Avatar sx={{ marginBottom: theme.spacing(0.5) }}>AZ</Avatar>
      <Typography variant="p" sx={{color:'white'}}>Username</Typography>
    </Box>
  );
};

export default UserPanel;
