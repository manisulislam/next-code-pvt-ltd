const ContactUs = () => {
    return (
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-black mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Write your message"
                  ></textarea>
                </div>
  
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Right Side - Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">Our Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      
                      strokeWidth="2"
                      d="M21 11.09A2.25 2.25 0 0118.75 9H5.25A2.25 2.25 0 013 11.09M6 16l6 4 6-4"
                    />
                  </svg>
                  <span className="text-gray-700">support@nextcode.com</span>
                </div>
  
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <span className="text-gray-700">+1 800 123 456</span>
                </div>
  
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      
                      strokeWidth="2"
                      d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
                    />
                  </svg>
                  <span className="text-gray-700">123 Street Name, City, Country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  