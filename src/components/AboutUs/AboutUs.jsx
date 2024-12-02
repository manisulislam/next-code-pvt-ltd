import img from "../../assets/images/about.jpg"
import leadImg from "../../assets/images/lead.jpg"
import ctoImg from "../../assets/images/cto.jpeg"
import ceoImg from "../../assets/images/ceo.jpg"

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 via-blue-50 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
          About <span className="text-teal-500">Next Code Pvt Ltd</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          At Next Code Pvt Ltd, we are passionate about driving innovation, embracing forward-thinking ideas, 
          and delivering solutions that empower businesses to thrive in a digital-first world.
        </p>
        <img
          src={img}
          alt="About Us"
          className="rounded-lg shadow-lg mx-auto max-w-full"
        />
      </section>

      {/* Mission, Vision, and Values Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🚀 Mission</h3>
            <p className="text-gray-700">
              To deliver innovative and tailored software solutions that help our clients achieve their goals 
              and set them apart in their industries.
            </p>
          </div>
          {/* Vision */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">🌟 Vision</h3>
            <p className="text-gray-700">
              To become a global leader in software development by consistently pushing the boundaries of 
              creativity and technology.
            </p>
          </div>
          {/* Values */}
          <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">💡 Values</h3>
            <p className="text-gray-700">
              Innovation, excellence, and customer satisfaction are at the core of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-teal-50 px-6 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={ceoImg}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={ctoImg}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">Jane Smith</h3>
            <p className="text-gray-500">Chief Technology Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={leadImg}
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600">Emily Johnson</h3>
            <p className="text-gray-500">Lead Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
