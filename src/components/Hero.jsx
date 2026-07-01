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
} from "react-icons/fa";

import {
  SiLeetcode,
  SiSpring,
  SiHibernate,
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

        {/* LEFT SECTION */}
        <div>
          <p className="text-2xl font-bold mb-2 text-gray-700">
            Welcome To My Portfolio
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
            applications using Java, Spring Boot, Hibernate, React.js, MySQL,
            and MongoDB. Skilled in building RESTful APIs, implementing JWT
            authentication, and developing responsive user interfaces. Strong
            foundation in Object-Oriented Programming (OOP), SQL, Git, GitHub,
            and Agile development methodologies with a passion for delivering
            clean, efficient, and production-ready applications.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">

            {/* SOCIAL LINKS */}
            <div>
              <h3 className="font-semibold mb-3">
                Available on
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

            {/* TECH ICONS */}
            <div>
              <h3 className="font-semibold mb-3">
                Tech Stack
              </h3>

              <div className="grid grid-cols-3 gap-4">

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaJava className="text-red-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiSpring className="text-green-600 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <SiHibernate className="text-yellow-700 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaReact className="text-blue-500 text-2xl" />
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition">
                  <FaJsSquare className="text-yellow-500 text-2xl" />
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

              </div>
            </div>

          </div>
                    {/* ================= TECH STACK BADGES ================= */}
          <div>
            <h3 className="font-semibold mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-red-600 hover:text-white transition">
                Java
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-600 hover:text-white transition">
                Spring Boot
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-yellow-600 hover:text-white transition">
                Hibernate
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-600 hover:text-white transition">
                REST APIs
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-purple-600 hover:text-white transition">
                JWT
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-cyan-600 hover:text-white transition">
                React.js
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-yellow-500 hover:text-white transition">
                JavaScript
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-500 hover:text-white transition">
                HTML5
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-500 hover:text-white transition">
                CSS3
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-sky-600 hover:text-white transition">
                Tailwind CSS
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-blue-700 hover:text-white transition">
                MySQL
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-green-700 hover:text-white transition">
                MongoDB
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-orange-600 hover:text-white transition">
                Git
              </span>

              <span className="px-3 py-1 bg-white rounded-full shadow hover:bg-black hover:text-white transition">
                GitHub
              </span>

            </div>
          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="flex justify-center">
          <div className="overflow-hidden rounded-full">
            <img
              src={profile}
              alt="Shekhar Kumar"
              className="
                border-4 border-green-600
                w-[420px] h-[420px]
                object-cover
                rounded-full
                shadow-2xl
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-green-400/50
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}
