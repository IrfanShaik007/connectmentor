// src/pages/ExploreMentors.js
import React from 'react';
import MentorCard from '../components/MentorCard';

const mentors = [
  { id: 1, name: 'John Doe', expertise: 'Software Engineering', availability: 'Weekdays' },
  { id: 2, name: 'Jane Smith', expertise: 'Data Science', availability: 'Weekends' },
  { id: 3, name: 'Alice Johnson', expertise: 'Product Management', availability: 'Flexible' },
  { id: 4, name: 'Bob Brown', expertise: 'UX/UI Design', availability: 'Evenings' },
  // Add more mentor objects as needed
];

function ExploreMentors() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Explore Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}

export default ExploreMentors;
