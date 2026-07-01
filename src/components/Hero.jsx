import React from "react";
import profile from "../data/image.png";
import { ReactTyped } from "react-typed";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaJava,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiJira,
} from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-100 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT SECTION ================= */}

        <div>

          <p className="text-2xl font-bold mb-2 text-gray-700">
            Welcome to My Portfolio 👋
          </p>

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            I am{" "}
            <span className="text-red-600">
              <ReactTyped
                strings={[
                  "Java Full Stack Developer",
                  "Spring Boot Developer",
                  "React Developer",
                ]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={1500}
                loop
              />
            </span>
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Passionate and detail-oriented Java Full Stack Developer with
            hands-on experience in designing and developing scalable web
            applications using Java, Spring Boot, Hibernate, React.js,
            JavaScript, MySQL, and MongoDB. Skilled in developing RESTful APIs,
            implementing JWT Authentication, and creating responsive,
            user-friendly interfaces. Strong foundation in Object-Oriented
            Programming (OOP), SDLC, SQL, Git, GitHub, and Agile development
            practices. Passionate about learning modern technologies and
            building clean, scalable, production-ready applications.
          </p>

          {/* ================= SOCIAL LINKS ================= */}

          <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">

            <div>

              <h3 className="font-semibold mb-3">
                Available On
              </h3>

              <div className="flex space-x-5 text-3xl">

                <a
                  href="https://www.linkedin.com/in/shekharkumar14"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/Shekharkumar07"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://leetcode.com/u/Shekhar_kumar12345/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-yellow-500 transition"
                >
                  <SiLeetcode />
                </a>

                <a
                  href="https://www.instagram.com/shekhar_prasad07/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

            {/* ================= TECH ICONS ================= */}

            <div>

              <h3 className="font-semibold mb-3">
                Technical Skills
              </h3>

              <div className="grid grid-cols-4 gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaJava className="text-red-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaReact className="text-blue-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaJsSquare className="text-yellow-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaPython className="text-blue-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaHtml5 className="text-orange-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaCss3Alt className="text-blue-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiSpring className="text-green-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiHibernate className="text-yellow-700 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiMysql className="text-blue-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiMongodb className="text-green-700 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaGitAlt className="text-orange-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaGithub className="text-black text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiPostman className="text-orange-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiJira className="text-blue-500 text-2xl" />
                </div>

              </div>

            </div>

          </div>
          
                    {/* ================= SKILLS ================= */}

          <div>
            <h3 className="font-semibold mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {/* Programming Languages */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-600 hover:text-white transition">
                Core Java
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-600 hover:text-white transition">
                Advanced Java
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-yellow-500 hover:text-white transition">
                JavaScript
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                Basic Python
              </span>

              {/* Frontend */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition">
                HTML
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white transition">
                CSS
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-cyan-600 hover:text-white transition">
                React.js
              </span>

              {/* Backend */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition">
                Spring
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-700 hover:text-white transition">
                Spring Boot
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-yellow-700 hover:text-white transition">
                Hibernate
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-purple-600 hover:text-white transition">
                REST APIs
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-indigo-600 hover:text-white transition">
                JWT Authentication
              </span>

              {/* Database */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-700 hover:text-white transition">
                MySQL
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-700 hover:text-white transition">
                MongoDB
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-gray-700 hover:text-white transition">
                SQL
              </span>

              {/* Version Control */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-600 hover:text-white transition">
                Git
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-black hover:text-white transition">
                GitHub
              </span>

              {/* Tools */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition">
                Postman
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                Jira
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition">
                Eclipse IDE
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-violet-600 hover:text-white transition">
                IntelliJ IDEA
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-sky-600 hover:text-white transition">
                VS Code
              </span>

              {/* Concepts */}
              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-teal-600 hover:text-white transition">
                OOPs
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-pink-600 hover:text-white transition">
                SDLC
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-500 hover:text-white transition">
                Data Structures
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-purple-500 hover:text-white transition">
                Algorithms
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-cyan-700 hover:text-white transition">
                Logical Programming
              </span>

            </div>
          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Open to Work Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
              Open to Work
            </div>

            <div className="overflow-hidden rounded-full">

              <img
                src={profile}
                alt="Shekhar Kumar"
                className="
                  border-4 border-green-600
                  w-72 h-72
                  md:w-96 md:h-96
                  lg:w-[420px] lg:h-[420px]
                  object-cover
                  rounded-full
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:scale-105
                  hover:rotate-2
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
