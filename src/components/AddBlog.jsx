import React, { useState } from 'react';

const AddBlog = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ blogName, description, author });
    setBlogName('');
    setDescription('');
    setAuthor('');
  };

  const formContainerStyle = {
    padding: '2rem',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '80%',
    padding: '0.5rem',
    margin: '0.5rem 0',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formContainerStyle}>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Name"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          style={inputStyle}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={inputStyle}
          required
        /><br/><br/>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
