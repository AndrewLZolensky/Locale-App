// MyPostsComponent.js
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

const MyPostsComponent = () => {
  const theme = useTheme();
  const posts = [
    { id: 1, title: 'Post Title 1', content: 'Content for post 1...' },
    { id: 2, title: 'Post Title 2', content: 'Content for post 2...' },
    // ... other posts
  ];

  // Placeholder functions for edit and delete actions
  const handleEdit = (postId) => {
    console.log(`Edit post with id: ${postId}`);
  };

  const handleDelete = (postId) => {
    console.log(`Delete post with id: ${postId}`);
  };

  return (
    <Box sx={{ padding: theme.spacing(3), display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '600px', margin: 'auto' }}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: theme.spacing(2) }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleEdit(post.id)}>Edit</Button>
            <Button size="small" color="secondary" onClick={() => handleDelete(post.id)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default MyPostsComponent;