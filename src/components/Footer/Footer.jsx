import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Next Code Pvt Ltd</h3>
            <p className="text-gray-300 text-sm">
              We are a tech company focused on delivering innovative software solutions that transform businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c5.52 0 10 4.48 10 9.96 0 5.38-4.48 9.96-10 9.96s-10-4.58-10-9.96c0-5.48 4.48-9.96 10-9.96zM9.25 13.5h2.5v7h-2.5v-7zm1.25-4.5c-.75 0-1.25-.5-1.25-1.25s.5-1.25 1.25-1.25 1.25.5 1.25 1.25-.5 1.25-1.25 1.25z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.48 4.85c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.72-.96.57-2.02.99-3.14 1.21-1.3-1.39-3.14-2.25-5.17-2.25-3.9 0-7.05 3.15-7.05 7.05 0 .56.06 1.11.17 1.64-5.86-.29-11.05-3.1-14.52-7.38-.61 1.04-.95 2.26-.95 3.54 0 2.44 1.25 4.58 3.15 5.84-1.16-.04-2.26-.35-3.22-.88v.09c0 3.41 2.43 6.27 5.67 6.93-1.18.32-2.43.49-3.71.49-1.59 0-3.12-.15-4.61-.43 3.13 1.95 6.84 3.09 10.84 3.09 13.02 0 20.14-10.77 20.14-20.14 0-.31 0-.62-.02-.92.77-.56 1.44-1.27 1.97-2.08z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-blue-400">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400">Our Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 1234 NextCode St, Tech City</li>
              <li>📧 support@nextcode.com</li>
              <li>📞 +1 800 123 456</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-300">Stay updated with our latest news and offers.</p>
            <form action="#" method="POST">
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Next Code Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
