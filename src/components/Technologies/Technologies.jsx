import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAws, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTypescript, SiExpress, SiDjango, SiFastapi } from "react-icons/si";

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
      { name: "Django", icon: <SiDjango className="text-green-600" /> },
      { name: "DRF", icon: <FaPython className="text-red-500" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
    ],
  },
  {
    category: "Cloud",
    items: [{ name: "AWS", icon: <FaAws className="text-yellow-600" /> }],
  },
];

const Technologies = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{tech.category}</h3>
              <div className="grid grid-cols-3 gap-4 justify-center items-center">
                {tech.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <div className="text-4xl">{item.icon}</div>
                    <p className="text-sm font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
