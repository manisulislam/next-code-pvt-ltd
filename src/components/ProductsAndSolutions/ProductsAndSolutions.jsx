import { FaRocket, FaCog, FaHandshake, FaStar } from 'react-icons/fa';

const ProductsAndSolutions = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          Our Products & Solutions
        </h2>

        {/* Products Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-black mb-6">
            Innovative Products
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Discover our cutting-edge products designed to streamline your business processes and increase efficiency.
          </p>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaRocket className="text-5xl text-teal-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-teal-500 transition duration-300">
                Cloud Software Suite
              </h4>
              <p className="text-gray-700 mb-4">
                A suite of cloud-based tools to enhance collaboration, efficiency, and scalability for your business.
              </p>
              <button className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCog className="text-5xl text-blue-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-blue-500 transition duration-300">
                Automation Tools
              </h4>
              <p className="text-gray-700 mb-4">
                Streamline your workflows with our advanced automation tools that reduce manual effort and errors.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaHandshake className="text-5xl text-orange-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-orange-500 transition duration-300">
                Business Partnership
              </h4>
              <p className="text-gray-700 mb-4">
                Partner with us to leverage our expertise in technology solutions and grow your business.
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-3xl font-semibold text-black mb-6">
            Tailored Solutions
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            We provide personalized solutions that cater to the unique needs of your industry.
          </p>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaStar className="text-5xl text-yellow-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-yellow-500 transition duration-300">
                Custom Software Development
              </h4>
              <p className="text-gray-700 mb-4">
                Create tailor-made software solutions that fit your exact business needs and goals.
              </p>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Solution 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaRocket className="text-5xl text-green-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-green-500 transition duration-300">
                Digital Transformation
              </h4>
              <p className="text-gray-700 mb-4">
                Modernize your business processes with our digital transformation services.
              </p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">
                Learn More
              </button>
            </div>

            {/* Solution 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <FaCog className="text-5xl text-red-500 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-black mb-2 hover:text-red-500 transition duration-300">
                IT Consulting Services
              </h4>
              <p className="text-gray-700 mb-4">
                Get expert advice to improve your IT infrastructure and optimize performance.
              </p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsAndSolutions;
