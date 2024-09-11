import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon from react-icons

const mentors = [
  { id: 1, name: 'mentor1' },
  { id: 2, name: 'mentor2' },
  { id: 3, name: 'mentor3' },
];

function ExploreMentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [schedule, setSchedule] = useState({ date: '', time: '' });

  const handleScheduleClick = (mentor) => {
    setSelectedMentor(mentor);
    localStorage.setItem('selectedMentor', JSON.stringify(mentor));
  };

  const handleDateChange = (e) => {
    setSchedule({ ...schedule, date: e.target.value });
  };

  const handleTimeChange = (e) => {
    setSchedule({ ...schedule, time: e.target.value });
  };

  const handleConfirm = () => {
    localStorage.setItem('schedule', JSON.stringify(schedule));
    window.location.href = '/flexible-scheduling'; // Redirect to scheduling page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Explore Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <FaUserCircle className="text-gray-400 text-4xl mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">{mentor.name}</h2>
            </div>
            <button
              onClick={() => handleScheduleClick(mentor)}
              className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Schedule
            </button>
          </div>
        ))}
      </div>
      {selectedMentor && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Date and Time</h2>
          <input
            type="date"
            onChange={handleDateChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <input
            type="time"
            onChange={handleTimeChange}
            className="mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
          <button
            onClick={handleConfirm}
            className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default ExploreMentors;
