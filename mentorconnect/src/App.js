// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MenteeSignupPage from './pages/MenteeSignupPage';
import MentorSignupPage from './pages/MentorSignupPage';
import MenteeDashboard from './pages/MenteeDashboard';
import ExploreMentors from './pages/ExploreMentors';
import AIChatbot from './pages/AIChatbot';
import FlexibleScheduling from './pages/FlexibleScheduling';

function App() {
  return (
    <Router>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mentee-signup" element={<MenteeSignupPage />} />
          <Route path="/mentor-signup" element={<MentorSignupPage />} />
          <Route path="/mentee-dashboard" element={<MenteeDashboard />} />
          <Route path="/explore-mentors" element={<ExploreMentors />} />
          <Route path="/ai-chatbot" element={<AIChatbot />} />
          <Route path="/flexible-scheduling" element={<FlexibleScheduling />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
