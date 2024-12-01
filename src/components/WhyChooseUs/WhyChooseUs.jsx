import { FaShieldAlt, FaRegHandshake, FaLaptopCode, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mt-4">
            We provide reliable, efficient, and innovative solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Reason 1 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Security First</h3>
            <p className="text-gray-600 mt-2">
              We prioritize your data security with state-of-the-art encryption and robust protection.
            </p>
          </div>

          {/* Reason 2 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaRegHandshake className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Customer-Centric</h3>
            <p className="text-gray-600 mt-2">
              Our approach revolves around your business goals, offering tailored solutions to fit your needs.
            </p>
          </div>

          {/* Reason 3 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Innovative Technology</h3>
            <p className="text-gray-600 mt-2">
              We leverage cutting-edge technologies to create scalable, sustainable, and high-performing solutions.
            </p>
          </div>

          {/* Reason 4 */}
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaHeadset className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 mt-2">
              Our team is always available to assist you, providing exceptional customer support whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
