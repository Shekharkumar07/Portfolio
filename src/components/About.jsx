import React, { useState } from "react";
import { 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaAward, 
  FaBookOpen, 
  FaChevronRight 
} from "react-icons/fa";

export default function About() {
  // Setup interactive tabs for high user engagement
  const [activeTab, setActiveTab] = useState("experience");

  const skillCategories = [
    { name: "Core & Advanced Java", level: "90%" },
    { name: "Spring Boot & REST APIs", level: "85%" },
    { name: "Databases (MySQL & MongoDB)", level: "80%" },
    { name: "JavaScript & Frontend Basics", level: "70%" },
    { name: "Git, GitHub & Postman/Jira", level: "85%" },
  ];

  return (
    <section id="about" className="pt-8 pb-16 bg-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================= PREMIUM SECTION HEADING ================= */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-green-600 relative inline-block">Me
              <span className="absolute bottom-1 left-0 w-full h-1 bg-green-200 -z-10 transform scale-x-105"></span>
            </span>
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ================= INTERACTIVE DYNAMIC TABS ================= */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
              activeTab === "experience"
                ? "bg-green-600 text-white shadow-green-200 shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            <FaBriefcase className="text-base" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
              activeTab === "education"
                ? "bg-green-600 text-white shadow-green-200 shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            <FaGraduationCap className="text-base" /> Education & Training
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
              activeTab === "skills"
                ? "bg-green-600 text-white shadow-green-200 shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            <FaCode className="text-base" /> Skills & Expertise
          </button>
          <button
            onClick={() => setActiveTab("awards")}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-sm ${
              activeTab === "awards"
                ? "bg-green-600 text-white shadow-green-200 shadow-md"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            <FaAward className="text-base" /> Achievements
          </button>
        </div>

        {/* ================= DYNAMIC TAB CONTENT AREA ================= */}
        <div className="max-w-4xl mx-auto min-h-[380px] bg-gray-50/50 rounded-3xl p-6 md:p-8 border border-gray-100/80 backdrop-blur-sm shadow-inner transition-all duration-500">
          
          {/* TAB: EXPERIENCE */}
          {activeTab === "experience" && (
            <div className="animate-fadeIn">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Backend Developer</h3>
                  <p className="text-green-600 font-semibold text-base mt-0.5">Bursys Technologies | FieldEquip</p>
                </div>
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full shadow-sm">
                  June 15, 2026 – Present
                </span>
              </div>
              <div className="space-y-3">
                {[
                  "Developing and maintaining reliable backend microservices utilizing Java and Spring Boot ecosystems.",
                  "Architecting RESTful APIs and translating business requirements into programmatic application logic.",
                  "Integrating MongoDB document databases for efficient production data persistence and indexing retrieval.",
                  "Debugging system issues and collaborating synchronously with cross-functional product delivery teams."
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <FaChevronRight className="text-green-500 text-xs mt-1.5 flex-shrink-0" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: EDUCATION & TRAINING */}
          {activeTab === "education" && (
            <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
              {/* College Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800 text-lg">Bachelor of Engineering</h4>
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-md">7.35 CGPA</span>
                </div>
                <p className="text-green-600 text-sm font-semibold">Computer Science and Engineering</p>
                <p className="text-gray-500 text-xs mt-1">Chandigarh University, Punjab (2021-2025)</p>
              </div>

              {/* JSpiders Training Card */}
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500/30 transition-all duration-300">
                <h4 className="font-bold text-gray-800 text-lg">Java Full Stack Development</h4>
                <p className="text-green-600 text-sm font-semibold">JSpiders, Bengaluru</p>
                <p className="text-gray-400 text-xs mt-1 mb-3">Professional Certificate Program | 2025</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Core Java", "Spring Boot", "REST APIs", "SQL", "JavaScript", "SDLC"].map((tech) => (
                    <span key={tech} className="text-[10px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: SKILLS */}
          {activeTab === "skills" && (
            <div className="space-y-5 animate-fadeIn">
              <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-green-600 text-sm" /> Core Domain Proficiency
              </h4>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {skillCategories.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-gray-700">
                      <span>{skill.name}</span>
                      <span className="text-green-600">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: AWARDS */}
          {activeTab === "awards" && (
            <div className="grid sm:grid-cols-2 gap-4 animate-fadeIn">
              {[
                { title: "Java (Basic) Certification", desc: "HackerRank Verified Authority" },
                { title: "Blockchain Technology Cert.", desc: "Coursera Global Specialization" },
                { title: "Competitive Coding Bootcamps", desc: "Hackathon Finalist at Chandigarh University" },
                { title: "Professional Development", desc: "Agile, Jira, & System Lifecycles" }
              ].map((award, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3 hover:scale-[1.02] transition duration-300">
                  <span className="text-xl bg-yellow-50 p-2 rounded-lg text-yellow-500">🏆</span>
                  <div>
                    <h5 className="font-bold text-gray-800 text-sm">{award.title}</h5>
                    <p className="text-gray-500 text-xs mt-0.5">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* ================= HIGHLY STANDOUT BLOCKQUOTE ================= */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-base text-gray-700 italic bg-gradient-to-r from-green-50/50 via-emerald-50/20 to-white p-4 rounded-xl border-l-4 border-green-600 shadow-sm">
            "I focus on writing structural, production-ready backend code today while constantly adapting to the enterprise system architectures of tomorrow."
          </p>
        </div>

      </div>
    </section>
  );
}
