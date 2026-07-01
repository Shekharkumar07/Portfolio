import React from "react";
import { 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaAward 
} from "react-icons/fa";

export default function About() {
  return (
    // Clean, tight padding to prevent large gaps above and below the section
    <section id="about" className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-green-600">Me</span>
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mt-2 rounded"></div>
        </div>

        {/* ================= PROFESSIONAL SUMMARY CARD ================= */}
        <div className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm mb-10 text-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Computer Science Engineering graduate with experience as a Backend Developer at Bursys Technologies, 
            contributing to the FieldEquip enterprise SaaS platform. Skilled in Java, Spring Boot, REST APIs, MongoDB, 
            and MySQL, with a strong foundation in SDLC and backend development. Passionate about building 
            scalable, high-quality software and continuously enhancing technical expertise.
          </p>
        </div>

        {/* ================= 2-COLUMN GRID FOR CONTENT ================= */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN: EDUCATION & TRAINING */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-2">
              <FaGraduationCap className="text-green-600 text-2xl" />
              <h2 className="text-2xl font-bold text-gray-900">Education & Training</h2>
            </div>

            {/* University Card */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 text-base">Bachelor of Engineering</h4>
                  <p className="text-green-600 font-semibold text-sm">Computer Science and Engineering</p>
                  <p className="text-gray-500 text-xs mt-0.5">Chandigarh University, Punjab</p>
                </div>
                <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded">
                  CGPA: 7.35
                </span>
              </div>
              <p className="text-gray-500 text-xs">Graduation: 2021-2025</p>
            </div>

            {/* JSpiders Training Card */}
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm">
              <div className="mb-2">
                <h4 className="font-bold text-gray-800 text-base">Java Full Stack Development</h4>
                <p className="text-green-600 font-semibold text-sm">JSpiders, Bengaluru</p>
                <p className="text-gray-500 text-xs mt-0.5">Professional Training | 2025</p>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-gray-600 text-xs leading-relaxed">
                <li>Hands-on training in Java Full Stack Development following SDLC practices.</li>
                <li>Core Java, JDBC, Servlets, JSP, Spring Boot, REST APIs.</li>
                <li>HTML, CSS, JavaScript, SQL, and database integration.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS & EXPERTISE */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 border-b border-gray-200 pb-2">
              <FaCode className="text-green-600 text-2xl" />
              <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm space-y-3">
              <div>
                <span className="text-xs font-bold text-green-700 block mb-1">Programming & Frontend</span>
                <p className="text-gray-700 text-sm">Core Java, Advanced Java, JavaScript, Basic Python, HTML, CSS</p>
              </div>
              <div>
                <span className="text-xs font-bold text-green-700 block mb-1">Backend Architectures</span>
                <p className="text-gray-700 text-sm">Spring, Spring Boot, REST APIs, JWT Authentication</p>
              </div>
              <div>
                <span className="text-xs font-bold text-green-700 block mb-1">Databases & Infrastructure</span>
                <p className="text-gray-700 text-sm">MongoDB, MySQL, SQL, Git, GitHub</p>
              </div>
              <div>
                <span className="text-xs font-bold text-green-700 block mb-1">Tools & Core Concepts</span>
                <p className="text-gray-700 text-sm">Postman, Jira, OOPS, SDLC, Data Structures & Algorithms (Basics)</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= PROFESSIONAL EXPERIENCE ================= */}
        <div className="max-w-5xl mx-auto mt-12 mb-12">
          <div className="flex items-center space-x-3 mb-6 border-b border-gray-200 pb-2">
            <FaBriefcase className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Backend Developer</h3>
                <p className="text-green-600 font-semibold text-sm">Bursys Technologies | FieldEquip</p>
              </div>
              <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full mt-2 sm:mt-0">
                June 15, 2026 – Present
              </span>
            </div>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
              <li>Developing and maintaining backend services using Java and Spring Boot.</li>
              <li>Building REST APIs and implementing business logic.</li>
              <li>Working with MongoDB for data storage and retrieval.</li>
              <li>Debugging issues and collaborating with cross-functional teams to deliver product features.</li>
            </ul>
          </div>
        </div>

        {/* ================= ACHIEVEMENTS & AWARDS ================= */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="flex items-center space-x-3 mb-4 border-b border-gray-200 pb-2">
            <FaAward className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Achievements & Awards</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-3">
              <span className="text-yellow-500 mt-1">🏆</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Java (Basic) Certification</h4>
                <p className="text-gray-500 text-xs">HackerRank Verified Certification</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-3">
              <span className="text-yellow-500 mt-1">🏆</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Blockchain Technology Certificate</h4>
                <p className="text-gray-500 text-xs">Coursera Global Specialization</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-3">
              <span className="text-yellow-500 mt-1">🏆</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Professional Development Milestones</h4>
                <p className="text-gray-500 text-xs">Time Management & Entrepreneurship — LinkedIn Learning</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-start space-x-3">
              <span className="text-yellow-500 mt-1">🏆</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Competitive Coding Bootcamps</h4>
                <p className="text-gray-500 text-xs">Finalist in major Hackathons conducted at Chandigarh University</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
