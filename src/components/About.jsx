import React from "react";
import { FaGraduationCap, FaCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    // Replaced negative margins with clean, minimal padding (pt-4 pb-4)
    <section id="about" className="pt-4 pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading (Tight spacing) */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-green-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Education & Background */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col">
            <div className="text-green-600 text-3xl mb-4">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Background</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              I am a Computer Science & Engineering graduate with a strong 
              academic foundation in software engineering principles, system design, 
              and lifecycle management.
            </p>
          </div>

          {/* Card 2: Core Expertise */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col">
            <div className="text-red-600 text-3xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Expertise</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Specialized in building scalable backend architectures using Core & Advanced Java 
              and Spring Boot. Proficient in database management (MySQL, MongoDB) and 
              creating smooth frontend integrations.
            </p>
          </div>

          {/* Card 3: Philosophy & Goals */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col">
            <div className="text-yellow-500 text-3xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mindset</h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              Driven by solving real-world challenges through highly clean, 
              maintainable code. I love dissecting complex logic, understanding data structures, 
              and continuously adopting modern ecosystem tools.
            </p>
          </div>

        </div>

        {/* Brief Bottom Statement Summary (Tighter spacing top/bottom) */}
        <div className="mt-6 max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 italic bg-green-50 p-5 rounded-xl border-l-4 border-green-600">
            "I focus on writing production-ready code today while constantly adapting to the architectures of tomorrow."
          </p>
        </div>

      </div>
    </section>
  );
}
