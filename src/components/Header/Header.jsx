import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-teal-400 text-white shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-teal-200">
            Next Code Pvt Ltd
          </Link>
        </div>

        {/* Desktop Links */}
        <nav
          className={`hidden lg:flex space-x-8 ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
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

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden md:hidden bg-gradient-to-r from-blue-400 to-teal-400">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-white hover:text-blue-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:bg-white hover:text-blue-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-white hover:bg-white hover:text-blue-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:bg-white hover:text-blue-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
