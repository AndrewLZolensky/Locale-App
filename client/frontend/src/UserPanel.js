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
      <Avatar sx={{ marginBottom: theme.spacing(0.5) }}>U</Avatar>
      <Typography variant="p" sx={{color:'white'}}>Username</Typography>
      <Button variant="outlined" sx={{ marginTop: theme.spacing(1), color:'white', border:'1px solid white', padding: '3px 3px', '&.Mui-selected': { color:'white'} }}>
        Logout
      </Button>
    </Box>
  );
};

export default UserPanel;
