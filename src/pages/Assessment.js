import React from 'react';
import AssessmentNavbar from '../components/layout/Navbar.js'; // Import the AssessmentNavbar component
import '../styles/Assessment.css';

const Assessment = () => {
  return (
    <div className="assessment">
      <AssessmentNavbar /> {/* Use the AssessmentNavbar Component */}
      {/* ... existing code ... */}
    </div>
  );
};

export default Assessment;
