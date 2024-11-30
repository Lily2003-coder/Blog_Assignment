import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogDashboard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data.slice(0, 16)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const dashboardStyle = {
    padding: '2rem',
    textAlign: 'center',
  };

  const postsListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const postCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    margin: '1rem',
    width: '200px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div style={dashboardStyle}>
      <h1>Blog Dashboard</h1>
      <div style={postsListStyle}>
        {posts.map((post) => (
          <div key={post.id} style={postCardStyle}>
            <h3>{post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
