import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogDashboard from './components/BlogDashboard';
import AddBlog from './components/AddBlog';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogDashboard />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </Router>
  );
};

export default App;
