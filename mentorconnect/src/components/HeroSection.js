// src/components/HeroSection.js
import React from 'react';

function HeroSection() {
  return (
    <section className="bg-blue-200 text-center py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to The Best Way Mentoring</h1>
        <p className="text-base md:text-lg mb-6">
          Connect with industry experts and mentors to guide you in your career and skill development.
        </p>
        <div>
          <a href="#features" className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-blue-600">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
