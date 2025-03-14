import React, { useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Droplet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Ambar Dhara</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/donate" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t py-4 px-4 space-y-4">
            <Link to="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">About Us</Link>
            <Link to="/projects" className="block text-gray-600 hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
            <Link to="/donate" className="block bg-blue-600 text-white px-6 py-2 rounded-full text-center">
              Donate Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;