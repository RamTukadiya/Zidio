// src/pages/Home.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements';
import Job from '../components/Job';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Clients from '../components/Clients';  // Ensure this import is correct

export default function Home() {
  // State to control the visibility of the Jobs section
  const [showJobs, setShowJobs] = useState(false);

  // Toggle visibility of the Jobs section
  const handleShowJobs = () => {
    setShowJobs(!showJobs); // Toggle between true and false
  };

  return (
    <>
      <Navbar />
      <Timeline />
      <Achievements />
      <Team />
      
      {/* Conditionally render the Job section based on showJobs state */}
      {showJobs && <Job />}
      
      {/* Clients Section */}
      <Clients />
      
      {/* Footer - pass the handleShowJobs as a prop to allow triggering from the footer */}
      <Footer onJobClick={handleShowJobs} />
    </>
  );
}
