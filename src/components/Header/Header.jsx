
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-400 to-teal-400 p-4 shadow-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-extrabold tracking-wide">
        <Link to="/">Next Code Pvt Ltd</Link>
      </div>

      {/* Navigation */}
      <nav className={`lg:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <Link
          to="/"
          className="text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded transition duration-300"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded transition duration-300"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-white hover:bg-white hover:text-blue-500 px-4 py-2 rounded transition duration-300"
        >
          Contact
        </Link>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
