// src/state/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }), // Example API
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts', // Get all posts
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `/posts/${id}`, // Get a single post
    }),
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
    }),
    updatePost: builder.mutation<Post, Post>({
      query: (updatedPost) => ({
        url: `/posts/${updatedPost.id}`,
        method: 'PUT',
        body: updatedPost,
      }),
    }),
    deletePost: builder.mutation<{}, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = api;
