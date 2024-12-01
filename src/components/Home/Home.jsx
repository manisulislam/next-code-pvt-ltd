import CaseStudies from "../CaseStudies/CaseStudies";
import TechnologyInnovation from "../TechnologyInnovation/TechnologyInnovation";


const Home = () => {
  return (


    <>
    <div className="bg-gradient-to-b from-blue-100 via-teal-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          Welcome to <span className="text-teal-500">Next Code Pvt Ltd</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          We specialize in delivering cutting-edge software solutions that drive <br className="hidden md:block" />
          innovation and empower businesses for the future.
        </p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-400 transition duration-300">
          Learn More
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-teal-500 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We deliver state-of-the-art solutions with a focus on creativity and cutting-edge technologies.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-teal-500 text-4xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Customization</h3>
            <p className="text-gray-700">
              Tailored software solutions designed to meet the unique needs of your business.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-teal-500 text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold text-blue-600 mb-2">Forward Thinking</h3>
            <p className="text-gray-700">
              We anticipate future trends to help you stay ahead in a fast-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-16 bg-teal-500 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base md:text-lg mb-8">
          Contact us today and let us help you bring your vision to life.
        </p>
        <button className="bg-white text-teal-500 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </section>
    </div>

    <TechnologyInnovation/>
    <CaseStudies/>
    
    
    </>
  );
};

export default Home;
