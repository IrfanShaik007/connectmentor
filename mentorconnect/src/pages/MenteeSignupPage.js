// src/pages/MenteeSignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function MenteeSignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Mentee Signup</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="mentee-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="mentee-name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
              Sign Up as Mentee
            </button>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-blue-600 hover:underline">Already have an account? Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MenteeSignupPage;
