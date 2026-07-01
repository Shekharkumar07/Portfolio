import React from "react";
import profile from "../data/image.png";
import { ReactTyped } from "react-typed";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaJava,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiSpring,
  SiMysql,
  SiMongodb,
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
                  "Backend Engineer",
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
            applications using Java, Spring Boot, JavaScript, MySQL, and MongoDB. 
            Skilled in developing robust RESTful APIs, writing clean code based on 
            Object-Oriented Programming principles, and creating responsive web interfaces. 
            Strong foundation in OOPs, SDLC, SQL, Git, GitHub, and Agile development
            practices. Passionate about learning modern technologies and
            building clean, scalable, production-ready applications.
          </p>

          {/* ================= SOCIAL LINKS & TECH ================= */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Available On</h3>
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
            <div className="flex space-x-4 items-center">
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                <FaJava className="text-red-600 text-3xl" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                <SiSpring className="text-green-600 text-3xl" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                <FaJsSquare className="text-yellow-500 text-3xl" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                <SiMysql className="text-blue-600 text-3xl" />
              </div>
              <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                <FaGitAlt className="text-orange-600 text-3xl" />
              </div>
            </div>
          </div>
          
          {/* ================= 10 KEY SKILLS ================= */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-600 hover:text-white transition cursor-pointer">
              Core Java
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-500 hover:text-white transition cursor-pointer">
              Advanced Java
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer">
              Spring Boot
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-purple-600 hover:text-white transition cursor-pointer">
              REST APIs
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-teal-600 hover:text-white transition cursor-pointer">
              OOPs
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-yellow-500 hover:text-white transition cursor-pointer">
              JavaScript
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition cursor-pointer">
              HTML & CSS
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-700 hover:text-white transition cursor-pointer">
              MySQL
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-700 hover:text-white transition cursor-pointer">
              MongoDB
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-600 hover:text-white transition cursor-pointer">
              Git & GitHub
            </span>
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
