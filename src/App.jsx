// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import JobsPage from './Pages/JobsPage';  // Import JobsPage

const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />  {/* New route for JobsPage */}
    </Routes>
  );
};

export default App;
