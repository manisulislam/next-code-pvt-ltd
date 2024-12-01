import { FaThumbsUp, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';

const CompanyValues = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Company Values</h2>
          <p className="text-lg text-gray-600 mt-4">
            We are driven by a set of core values that guide us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Value 1: Integrity */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300">
            <div className="text-blue-600 bg-blue-50 p-4 rounded-full">
              <FaThumbsUp size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Integrity</h3>
            <p className="text-gray-600 mt-2 text-center">
              We hold ourselves accountable to the highest standards of integrity and honesty.
            </p>
          </div>

          {/* Value 2: Collaboration */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300">
            <div className="text-green-600 bg-green-50 p-4 rounded-full">
              <FaHandshake size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Collaboration</h3>
            <p className="text-gray-600 mt-2 text-center">
              We believe in working together to achieve success, fostering an environment of teamwork.
            </p>
          </div>

          {/* Value 3: Innovation */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300">
            <div className="text-yellow-600 bg-yellow-50 p-4 rounded-full">
              <FaLightbulb size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Innovation</h3>
            <p className="text-gray-600 mt-2 text-center">
              We encourage creativity and embrace new ideas to drive continuous improvement.
            </p>
          </div>

          {/* Value 4: Respect */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 hover:bg-blue-100 transition duration-300">
            <div className="text-purple-600 bg-purple-50 p-4 rounded-full">
              <FaUsers size={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">Respect</h3>
            <p className="text-gray-600 mt-2 text-center">
              We treat others with dignity and respect, valuing diverse perspectives and experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
