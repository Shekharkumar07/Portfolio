import React from "react";
import { 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCertificate
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-green-600">Me</span>
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* ================= EXECUTIVE SUMMARY STATEMENT ================= */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 via-gray-50/50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-12">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center font-medium">
            Computer Science Engineering graduate with experience as a Backend Developer at Bursys Technologies, 
            contributing to the FieldEquip enterprise SaaS platform. Skilled in Java, Spring Boot, REST APIs, MongoDB, 
            and MySQL, with a strong foundation in SDLC and backend development. Passionate about building 
            scalable, high-quality software and continuously enhancing technical expertise.
          </p>
        </div>

        {/* ================= MASTER LAYOUT GRID ================= */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT & CENTER COLUMNS: PROFESSIONAL EXPERIENCE, TRAINING, & EDUCATION */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* --- SECTION: WORK EXPERIENCE --- */}
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-3">
                <FaBriefcase className="text-green-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Professional Journey</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-green-500/30 ml-3">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-green-600 h-4 w-4 rounded-full border-4 border-white ring-4 ring-green-100"></span>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">Backend Developer</h4>
                        <p className="text-green-600 font-semibold text-sm">Bursys Technologies | FieldEquip</p>
                      </div>
                      <div className="flex flex-col items-end text-xs text-gray-500 font-medium sm:text-right">
                        <span className="flex items-center gap-1 bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-semibold">
                          <FaCalendarAlt /> June 15, 2026 – Present
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-disc pl-4">
                      <li>Developing and maintaining backend services using Java and Spring Boot.</li>
                      <li>Building REST APIs and implementing business logic.</li>
                      <li>Working with MongoDB for data storage and retrieval.</li>
                      <li>Debugging issues and collaborating with cross-functional teams to deliver product features.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION: PROFESSIONAL TRAINING --- */}
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-3">
                <FaCertificate className="text-green-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Technical Training</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-green-500/30 ml-3">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-green-600 h-4 w-4 rounded-full border-4 border-white ring-4 ring-green-100"></span>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">Java Full Stack Development</h4>
                        <p className="text-green-600 font-semibold text-sm">JSpiders</p>
                      </div>
                      <div className="text-xs text-gray-500 font-medium space-y-1 sm:text-right">
                        <p className="flex items-center sm:justify-end gap-1"><FaMapMarkerAlt /> Bengaluru</p>
                        <p className="flex items-center sm:justify-end gap-1"><FaCalendarAlt /> 2025</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 text-gray-600 text-xs leading-relaxed list-disc pl-4">
                      <li>Hands-on training in Java Full Stack Development following SDLC practices.</li>
                      <li>Core Java, JDBC, Servlets, JSP, Spring Boot, REST APIs.</li>
                      <li>HTML, CSS, JavaScript, SQL, and database integration.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION: EDUCATION --- */}
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-3">
                <FaGraduationCap className="text-green-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Academic Education</h3>
              </div>

              <div className="relative pl-6 border-l-2 border-green-500/30 ml-3">
                <div className="relative">
                  <span className="absolute -left-[31px] top-1.5 bg-gray-400 h-4 w-4 rounded-full border-4 border-white ring-4 ring-gray-100"></span>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">Bachelor of Engineering</h4>
                        <p className="text-green-600 font-semibold text-sm">Computer Science and Engineering</p>
                      </div>
                      <div className="text-xs text-gray-500 font-medium space-y-1 sm:text-right">
                        <p className="flex items-center sm:justify-end gap-1"><FaMapMarkerAlt /> Chandigarh University, Punjab</p>
                        <p className="flex items-center sm:justify-end gap-1"><FaCalendarAlt /> 2021 - 2025</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-white px-4 py-2 rounded-xl border border-gray-100">
                      <span className="text-xs font-semibold text-gray-500">Academic Standing</span>
                      <span className="text-xs font-bold bg-green-50 text-green-700 px-2.5 py-1 rounded">CGPA: 7.35</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: SIDEBAR METRICS & CERTIFICATIONS */}
          <div className="space-y-8">
            
            {/* --- SECTION: TECH STACK MATRIX --- */}
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-3">
                <FaCode className="text-green-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Skills & Matrix</h3>
              </div>

              <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div>
                  <span className="text-xs font-bold text-green-700 tracking-wide uppercase block mb-2">Backend Architecture</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Core Java", "Advanced Java", "Spring Framework", "Spring Boot", "REST APIs", "JWT Authentication"].map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-green-700 tracking-wide uppercase block mb-2">Databases & Tools</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["MongoDB", "MySQL", "SQL", "Git", "GitHub", "Postman", "Jira"].map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">{tag}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold text-green-700 tracking-wide uppercase block mb-2">Core Foundations</span>
                  <div className="flex flex-wrap gap-1.5">
                    {["OOPS", "SDLC Frameworks", "Data Structures", "Logical Programming"].map((tag) => (
                      <span key={tag} className="text-xs font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200/60 shadow-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION: HONORS & CERTIFICATIONS --- */}
            <div>
              <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-3">
                <FaAward className="text-green-600 text-xl" />
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Achievements</h3>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Java Verified Status", sub: "HackerRank Certification" },
                  { title: "Blockchain Architectures", sub: "Coursera Specialization" },
                  { title: "Professional Growth", sub: "Time Management — LinkedIn" },
                  { title: "Hackathon Finalist", sub: "Chandigarh University" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-3">
                    <span className="text-lg bg-white p-1.5 rounded-lg border border-gray-200 text-yellow-500 shadow-xs">🏆</span>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xs leading-snug">{item.title}</h4>
                      <p className="text-gray-400 text-[11px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
