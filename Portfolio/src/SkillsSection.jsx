import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "Java", "Python",
  "React", "Node.js", "Express",
  "MongoDB", "MySQL", "REST APIs", "JWT",
  "Tailwind CSS", "ShadCN",
  "Socket.io", "Cloudinary",
  "Git", "GitHub", "Postman"
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`relative py-20 px-4 transition-colors duration-700 overflow-hidden ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Central large blurred gradient blob */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-teal-400 via-purple-500 to-indigo-600 opacity-10 rounded-full blur-3xl pointer-events-none z-0" />

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 z-10 relative"
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              backgroundColor: darkMode ? "#0ea5e9" : "#14b8a6",
              color: "#fff",
              boxShadow: "0 0 10px rgba(20, 184, 166, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`text-sm font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer ${
              darkMode
                ? "bg-[#1e293b] text-cyan-300"
                : "bg-white text-teal-700"
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
