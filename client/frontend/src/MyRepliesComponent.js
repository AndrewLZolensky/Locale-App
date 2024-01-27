// MyRepliesComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const MyRepliesComponent = () => {
  const theme = useTheme();
  // Dummy data for the list of replies
  const replies = [
    { id: 1, content: 'Reply to post 1...', postTitle: 'Post Title 1', date: '2023-01-26' },
    { id: 2, content: 'Reply to post 2...', postTitle: 'Post Title 2', date: '2023-01-27' },
    // ... other replies
  ];

  return (
    <Box sx={{ padding: theme.spacing(3), display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      {replies.map((reply) => (
        <Card key={reply.id} sx={{ marginBottom: theme.spacing(2) }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {reply.postTitle}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {reply.content}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {reply.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default MyRepliesComponent;