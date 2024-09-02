// src/pages/MentorDashboard.js
import React from 'react';
import MentorNavbar from '../components/MentorNavbar'; // Import MentorNavbar
import Footer from '../components/Footer';

function MentorDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <MentorNavbar /> {/* Use MentorNavbar */}
      <main className="flex-grow p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Mentor Dashboard</h1>
        <p>Welcome to the Mentor Dashboard! Here you can manage your profile, view mentee requests, and more.</p>
      </main>
      <Footer />
    </div>
  );
}

export default MentorDashboard;
