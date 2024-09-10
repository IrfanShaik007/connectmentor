import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Key Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Automated Scheduling</h3>
            <p className="text-gray-600">
              Easily book and manage meetings with your mentors through our automated scheduling system.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Video Call Integration</h3>
            <p className="text-gray-600">
              Enjoy seamless video calls with mentors right on the platform, complete with chat functionality.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Expert Mentorship</h3>
            <p className="text-gray-600">
              Connect with seasoned professionals and industry leaders for valuable career guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
