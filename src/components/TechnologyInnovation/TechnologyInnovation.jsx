import { FaRocket, FaLaptopCode, FaCog, FaBrain, FaMobileAlt } from 'react-icons/fa';

const TechnologyInnovation = () => {
  return (
    <section className="bg-gradient-to-r from-teal-400 to-blue-500 py-20 px-4">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-12 text-black hover:text-teal-700 transition duration-300">
          Technology & Innovation
        </h2>
        <p className="text-lg mb-12">
          We embrace cutting-edge technology to deliver innovative solutions that make a real impact on our clients.
        </p>

        {/* Grid layout for different screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaRocket className="text-5xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-teal-500 transition duration-300">
              Innovation
            </h3>
            <p className="text-gray-700">
              Pushing boundaries with innovative technologies to transform the future.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaLaptopCode className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-blue-500 transition duration-300">
              Software Development
            </h3>
            <p className="text-gray-700">
              Building high-performance software with modern frameworks and languages.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCog className="text-5xl text-indigo-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-indigo-500 transition duration-300">
              Automation
            </h3>
            <p className="text-gray-700">
              Streamlining processes and systems through smart automation solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaBrain className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-purple-500 transition duration-300">
              AI & Machine Learning
            </h3>
            <p className="text-gray-700">
              Harnessing the power of AI to drive intelligent decision-making and predictions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaMobileAlt className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-green-500 transition duration-300">
              Mobile Development
            </h3>
            <p className="text-gray-700">
              Creating intuitive and scalable mobile apps for iOS and Android platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInnovation;
