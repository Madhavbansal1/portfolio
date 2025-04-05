// src/components/AboutSection.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const paragraphs = [
  `Hey! I’m Madhav Bansal — a passionate Full Stack Developer currently pursuing my B.Tech in Computer Science at GLA University. I love turning complex problems into simple, beautiful, and intuitive solutions.`,
  `Over the past few years, I’ve dived deep into modern web development, mastering technologies like React, Node.js, Express, MongoDB, and Tailwind CSS. I'm equally confident working on the frontend to design engaging UIs and on the backend to architect scalable systems and RESTful APIs.`,
  `My journey has been filled with exciting milestones — from solving 600+ problems on LeetCode and participating in hackathons like Sphinx at MNIT Jaipur, to building real-world projects like Kabadi Kart and a Website Monitoring System.`,
  `I believe in continuous learning, building for impact, and collaborating with like-minded people. I’m currently seeking new opportunities for internships and open-source contributions where I can apply my skills, grow as a developer, and help solve real problems.`,
];

const AboutSection = ({ darkMode }) => {
  const [visibleParagraphs, setVisibleParagraphs] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < paragraphs.length) {
        setVisibleParagraphs((prev) => [...prev, paragraphs[index]]);
        index++;
      } else {
        clearInterval(interval); // Stop once all paragraphs are shown
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className={`relative py-20 px-4 transition-colors duration-700 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      {/* Background blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-teal-400 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] rounded-full bg-emerald-500 opacity-20 blur-3xl animate-pulse delay-2000" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 z-10 relative"
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-6 z-10 relative">
        <AnimatePresence>
          {visibleParagraphs.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-lg leading-relaxed text-center transition duration-300 ease-in-out transform ${
                darkMode
                  ? "text-white hover:text-teal-400"
                  : "text-gray-800 hover:text-emerald-600"
              }`}
            >
              {para}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;
