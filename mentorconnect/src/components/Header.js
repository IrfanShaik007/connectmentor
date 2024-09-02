// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          The Best Way Mentoring
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
        </nav>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-blue-600 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <button
            className="text-white mb-4"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/login" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/signup" className="text-white hover:underline" onClick={() => setIsOpen(false)}>Signup</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
