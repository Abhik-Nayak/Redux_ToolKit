'use client';

import { useGetPostsQuery } from "@/state/api";
import { Box, Card, CardContent, CircularProgress, Button, Typography, Grid, Alert } from '@mui/material';
import { Delete, Edit } from "lucide-react";
// import { Delete, Edit } from '@mui/icons-material';

const PostList = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ marginTop: 2 }}>
        Error fetching posts. Please try again later.
      </Alert>
    );
  }

  return (
    <Box sx={{ padding: 3 , bgcolor: 'background.default'}}>
      <Typography variant="h4" sx={{ marginBottom: 3 }} color="primary">
        Dashboard
      </Typography>
      
      {/* Grid layout for cards */}
      <Grid container spacing={3}>
        {posts?.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {post.body.slice(0, 100)}...
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Button variant="outlined" color="primary" startIcon={<Edit />}>
                    <Edit/>
                  </Button>
                  <Button variant="outlined" color="error" startIcon={<Delete />}>
                    <Delete/>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostList;
