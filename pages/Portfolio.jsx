import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";

const projects = [
  {
    title: "Neura-GenAI assistant",
    desc: "Neura a web-based GenAI assistant built with React and Gemini API It takes prompts, returns meaningful answers, supports voice input, and feels like your second brain - but without trying too hard.",
    devstack: "React,Tailwind,API-Handling",
    link: "https://neura-64zy9ualx-akshatkandpal840-gmailcoms-projects.vercel.app/",
    git: "https://github.com/Akshatk-star/Neura-AI",
    type: "frontend",
  },
  {
    title: "Lexarev",
    desc: "A concept website to showcase my Front-End Skills, Lexarev is a concept website that is made using modern animation library and showcases advanced CSS and JS skills ",
    devstack: "HTML,CSS,JS,GSAP",
    link: "https://lexarev.vercel.app/",
    git: "https://github.com/Akshatk-star/Frontend-Website",
    type: "Frontend",
  },
  {
    title: "Open Source Contributions",
    devstack: "HTML,CSS,JS,GSAP,React",
    desc: "Actively contributed to multiple open-source projects and helped build event websites for college fests and hackathons.",
    git: "https://github.com/Akshatk-star",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="portfolio" className="bg-black text-white py-24 md:py-64">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 rounded-lg"
            >
              {/* Header */}
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FaArrowDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Section */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-6 bg-black/30 border-t border-white/10 space-y-4"
                  >
                    <p className="text-lg">{project.desc}</p>
                    <p className="text-sm text-emerald-300">
                      Tech Stack: {project.devstack}
                    </p>
                    <div className="flex space-x-4 text-white text-xl">
                      <a href={project.git} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};