import React from "react";
import project from '../src/assets/proj13.png'
import node from '../src/assets/n.jpg'
import one from '../src/assets/one.jpg'

export const About = () => {
  return (
    <section className="bg-black text-white p-8" id="about">
      <h2 className="text-6xl font-bold mb-8">
        About <span className="text-emerald-300">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - Background */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01. Background</h3>
          <p className="mb-4">
            I'm a passionate developer steadily learning the full stack, with a solid foundation in computer science and a knack for turning ideas into web solutions.
            My journey into tech started with a simple curiosity: "What happens if I click this?" and here we are.
            I enjoy solving problems, building clean UIs, and occasionally wondering why my CSS hates me.
          </p>
          
          {/* FIXED: Remove wrapper div, add proper sizing */}
          <img 
            className="w-full h-64 object-cover rounded-lg opacity-60 shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 transition-shadow duration-300" 
            src={one} 
            alt="Background" 
          />
                   
        </div>

        {/* Card 2 - Skills */}
        <div className="border relative border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Skills</h3>
          <img
            className="w-full h-48 object-cover opacity-60 rounded-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-shadow duration-300 mb-4"
            src={project} 
            alt="Skills Project" 
          />
          <div className="rounded-lg p-4 border mt-4 border-white/20">
            <code className="text-emerald-200/50">
              const skills = [<br />
              &nbsp;&nbsp;'HTML',<br />
              &nbsp;&nbsp;'CSS',<br />
              &nbsp;&nbsp;'JavaScript',<br />
              &nbsp;&nbsp;'React',<br />
              &nbsp;&nbsp;'Tailwind CSS',<br />
              &nbsp;&nbsp;'Motion (for animations)'<br />
              ];
            </code>
          </div>
        </div>

        {/* Card 3 - Expertise */}
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Currently Learning</h3>
          <p className="text-white/50 mb-4">
           I'm diving deep into backend development, exploring Node.js and MongoDB. Also experimenting with Framer Motion for smoother UI animations and learning how to write cleaner, testable code. Growth never stops.
          </p>
          <img
            className="w-full mt-16 h-64 object-cover rounded-lg opacity-60 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-shadow duration-300"
            src={node} 
            alt="Node.js Learning" 
          />
        </div>

      </div>
    </section>
  );
};