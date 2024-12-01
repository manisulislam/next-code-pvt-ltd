import { FaFolderOpen, FaEye, FaCheckCircle } from 'react-icons/fa';

const CaseStudies = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-black mb-12">
          Our Case Studies
        </h2>
        <p className="text-lg mb-12">
          We have worked on a wide range of projects, each tailored to solve unique challenges and deliver impactful results. Here are some of the case studies that highlight our expertise.
        </p>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaFolderOpen className="text-5xl text-teal-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-teal-500 transition duration-300">
              E-Commerce Solution
            </h3>
            <p className="text-gray-700 mb-4">
              We helped a leading retailer enhance their e-commerce platform, boosting sales by 30%.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">5 months ago</span>
              <FaEye className="text-teal-500 cursor-pointer hover:text-teal-700 transition duration-300" />
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCheckCircle className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-blue-500 transition duration-300">
              Automation & Efficiency
            </h3>
            <p className="text-gray-700 mb-4">
              Implemented automation solutions that reduced client operational costs by 40%.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">8 months ago</span>
              <FaEye className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-300" />
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaFolderOpen className="text-5xl text-indigo-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-indigo-500 transition duration-300">
              Mobile App Development
            </h3>
            <p className="text-gray-700 mb-4">
              Developed a custom mobile app that enhanced user engagement for a local business.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">1 year ago</span>
              <FaEye className="text-indigo-500 cursor-pointer hover:text-indigo-700 transition duration-300" />
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCheckCircle className="text-5xl text-orange-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-orange-500 transition duration-300">
              AI & Data Analytics
            </h3>
            <p className="text-gray-700 mb-4">
              Leveraged AI to analyze large datasets, providing actionable insights for a finance company.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">6 months ago</span>
              <FaEye className="text-orange-500 cursor-pointer hover:text-orange-700 transition duration-300" />
            </div>
          </div>

          {/* Case Study 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaFolderOpen className="text-5xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-green-500 transition duration-300">
              Cloud Solutions
            </h3>
            <p className="text-gray-700 mb-4">
              Helped a healthcare provider migrate to cloud infrastructure, reducing IT overhead by 50%.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">3 months ago</span>
              <FaEye className="text-green-500 cursor-pointer hover:text-green-700 transition duration-300" />
            </div>
          </div>

          {/* Case Study 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaCheckCircle className="text-5xl text-purple-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-black mb-2 hover:text-purple-500 transition duration-300">
              Blockchain Implementation
            </h3>
            <p className="text-gray-700 mb-4">
              Introduced blockchain to track transactions and enhance transparency for a financial institution.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">9 months ago</span>
              <FaEye className="text-purple-500 cursor-pointer hover:text-purple-700 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
