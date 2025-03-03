'use client'

import { useCreatePostMutation } from '@/state/api';
import { useState } from 'react';

const CreatePost = () => {
  const [createPost, { isLoading, error }] = useCreatePostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost({ title, body }).unwrap();
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Failed to create post', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Post'}
      </button>
      {error && <p>Error creating post</p>}
    </form>
  );
};

export default CreatePost;
