import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empower Your Career with <span className="text-teal-400">Expert Mentorship</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8">Connect with industry leaders and achieve your career goals with personalized guidance.</p>
        <Link to="/explore-mentors">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Explore Mentors
          </button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
