import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userType, setUserType] = useState('mentee'); // By default mentee
  const navigate = useNavigate();

  const handleLogin = (e, type) => {
    e.preventDefault();
    setUserType(type);  // Set userType dynamically based on form

    // Example logic for redirecting
    if (type === 'mentee') {
      navigate('/mentee-dashboard');
    } else {
      navigate('/mentor-dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Mentee Login */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Mentee Login</h2>
            <form className="space-y-4" onSubmit={(e) => handleLogin(e, 'mentee')}>
              <div>
                <label htmlFor="mentee-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="mentee-email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="mentee-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="mentee-password"
                  name="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Login as Mentee
              </button>
              <div className="mt-4 text-center">
                <Link to="/mentee-signup" className="text-blue-600 hover:underline">Don't have an account? Sign Up as Mentee</Link>
              </div>
            </form>
          </div>

          {/* Mentor Login */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Mentor Login</h2>
            <form className="space-y-4" onSubmit={(e) => handleLogin(e, 'mentor')}>
              <div>
                <label htmlFor="mentor-email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="mentor-email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="mentor-password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="mentor-password"
                  name="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Login as Mentor
              </button>
              <div className="mt-4 text-center">
                <Link to="/mentor-signup" className="text-blue-600 hover:underline">Don't have an account? Sign Up as Mentor</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
