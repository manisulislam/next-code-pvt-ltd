
import {
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaPaintBrush,
  FaCloud,
  FaRobot,
  FaNetworkWired,
  FaShieldAlt,
  FaChartLine,
  FaShoppingCart,
  FaPlug,
  FaCheckCircle,
  FaTools,
  FaLightbulb,
  FaCube,
  FaLock,
 
  FaGamepad,
  FaSync,
  FaGraduationCap,
  FaHeartbeat,
  FaRocket,
} from "react-icons/fa";

const services = [
  { icon: <FaCode />, title: "Custom Software Development" },
  { icon: <FaLaptopCode />, title: "Web Application Development" },
  { icon: <FaMobileAlt />, title: "Mobile App Development" },
  { icon: <FaPaintBrush />, title: "UI/UX Design" },
  { icon: <FaCloud />, title: "Cloud Computing Solutions" },
  { icon: <FaTools />, title: "DevOps & Automation" },
  { icon: <FaRobot />, title: "AI & Machine Learning Solutions" },
  { icon: <FaNetworkWired />, title: "IoT Development" },
  { icon: <FaCube />, title: "Enterprise Software Solutions" },
  { icon: <FaLock />, title: "Blockchain Development" },
  { icon: <FaShieldAlt />, title: "Cybersecurity Services" },
  { icon: <FaChartLine />, title: "Data Analytics & Business Intelligence" },
  { icon: <FaShoppingCart />, title: "E-commerce Development" },
  { icon: <FaPlug />, title: "API Development & Integration" },
  { icon: <FaCheckCircle />, title: "Software Testing & QA" },
  { icon: <FaCloud />, title: "SaaS Product Development" },
  { icon: <FaLightbulb />, title: "IT Consulting" },
  { icon: <FaSync />, title: "Legacy System Modernization" },
  { icon: <FaCube />, title: "Augmented & Virtual Reality Solutions" },
  { icon: <FaGamepad />, title: "Game Development" },
  { icon: <FaGraduationCap />, title: "Educational Software Development" },
  { icon: <FaHeartbeat />, title: "Healthcare IT Solutions" },
  { icon: <FaRocket />, title: "Startup MVP Development" },
];

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-teal-50 py-16 px-6 lg:px-24">
      {/* Header Section */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-600 mb-12">
        Our <span className="text-teal-500">Services</span>
      </h2>
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="text-teal-500 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-blue-600">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
