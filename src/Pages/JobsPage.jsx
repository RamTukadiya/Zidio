// src/pages/JobsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Job from '../components/Job';  // Reuse the existing Job component

const JobsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {/* Job Component to show the available jobs */}
        <Job />
      </div>
      <Footer />
    </div>
  );
};

export default JobsPage;
