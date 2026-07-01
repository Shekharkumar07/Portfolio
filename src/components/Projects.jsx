import React from "react";
import { FaExternalLinkAlt, FaGithub, FaFolderOpen } from "react-icons/fa";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Student Management System",
      description: "A complete full-stack web application designed to handle administrative operations. Built with a robust Spring Boot backend to serve operational data over APIs, coupled with a responsive UI. Implements full secure CRUD capabilities to dynamically add, view, update, and manage student lifecycle documentation efficiently.",
      tags: ["Java", "Spring Boot", "JavaScript", "REST APIs", "SQL"],
      codeLink: "https://github.com/Shekharkumar07/Student-Management-System",
      demoLink: "https://student-management-system-liard-nine.vercel.app/"
    },
    {
      id: 2,
      title: "Library Management System",
      description: "An enterprise-grade asset tracking ecosystem created by seamlessly unifying a modular backend service framework with an intuitive graphical user interface. Provides automated workflows for book tracking, inventory updates, membership logging, and automated return parameters.",
      tags: ["JavaScript", "HTML", "CSS", "Backend API Integration", "Databases"],
      codeLink: "https://github.com/Shekharkumar07/Library-Management-System-Frontend",
      demoLink: "https://shekhar-library-management-system.netlify.app/"
    },
    {
      id: 3,
      title: "Password Management & Notes Application",
      description: "A highly utility-focused personal security application engineered to store credentials and private encrypted text entries securely. Uses robust server-side scripting validation principles to ensure strong security profiles, database shielding, and instant credential lookup features.",
      tags: ["PHP", "SQL", "Relational Databases", "Application Security"],
      codeLink: "https://github.com/Shekharkumar07/Password-Manager-and-Notes-Application",
      demoLink: "https://tellmepass.infinityfreeapp.com/?i=1"
    },
    {
      id: 4,
      title: "Newfotome Platform",
      description: "A specialized rich media asset handling application utilizing fast scripting engines to deliver responsive browser interactions. Focused on high-performance execution speed, sleek frontend interface components, and asynchronous layout scalability.",
      tags: ["JavaScript", "Modern UI", "Frontend Engine"],
      codeLink: "https://github.com/Shekharkumar07/newfotome",
      demoLink: "https://newfotome.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="pt-12 pb-16 bg-gray-50/40">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured <span className="text-green-600">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A showcase of production-ready web engineering solutions bridging enterprise backend logic with responsive frontends.
          </p>
        </div>

        {/* ================= PROJECTS GRID LAYOUT ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Decorative Icon Title Group */}
                <div className="flex items-center space-x-2 text-green-600 mb-3">
                  <FaFolderOpen className="text-lg" />
                  <span className="text-xs font-bold tracking-wider uppercase text-gray-400">Open Source Core</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-2">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technology Tags System */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Button Links */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <a 
                    href={project.codeLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition shadow-xs"
                  >
                    <FaGithub /> Source Code
                  </a>
                  
                  <a 
                    href={project.demoLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-green-700 transition shadow-xs"
                  >
                    <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
