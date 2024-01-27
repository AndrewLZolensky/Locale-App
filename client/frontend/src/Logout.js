import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const LogOut = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: theme.spacing(2) }}>
      <Button variant="outlined" sx={{ marginTop: theme.spacing(1), color:'white', border:'1px solid white', padding: '3px 3px', '&.Mui-selected': { color:'white'} }}>
        Log out
      </Button>
    </Box>
  );
};

export default LogOut;
