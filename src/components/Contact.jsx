import React, { useState } from "react";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaPaperPlane 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your favorite backend handler or email service here (e.g., EmailJS, Formspree, or local API)
    console.log("Form Submitted Successfully:", formData);
    alert("Thank you for reaching out! I will get back to you as soon as possible.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="pt-12 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact <span className="text-green-600">Me</span>
          </h2>
          <div className="w-12 h-1 bg-green-600 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Let's build something exceptional together. Drop a message or connect via professional networks.
          </p>
        </div>

        {/* ================= TWO-COLUMN SYMMETRIC GRID ================= */}
        <div className="grid lg:grid-cols-5 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* LEFT SIDEBAR: DIRECT DIRECTORIES & CHANNELS (2/5 Width) */}
          <div className="lg:col-span-2 bg-gray-50/50 rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 tracking-tight">
                Connect Directly
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Open to discussions surrounding backend architecture opportunities, cross-functional project deployments, or general systems engineering queries.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Channel */}
                <a 
                  href="mailto:shekharkr14th@gmail.com" 
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-xs hover:border-green-500/30 transition group"
                >
                  <span className="text-green-600 bg-green-50 p-2.5 rounded-lg text-sm transition group-hover:bg-green-600 group-hover:text-white">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email Address</h4>
                    <p className="text-gray-700 font-semibold text-xs sm:text-sm">shekharkr14th@gmail.com</p>
                  </div>
                </a>

                {/* Location Channel */}
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                  <span className="text-green-600 bg-green-50 p-2.5 rounded-lg text-sm">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Current Location</h4>
                    <p className="text-gray-700 font-semibold text-sm">Bengaluru, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Anchor Pillars */}
            <div className="mt-8 lg:mt-0 border-t border-gray-200/60 pt-6">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">On the Web</span>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/shekharkumar14" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold text-xs py-2.5 px-4 rounded-xl border border-gray-200/80 hover:bg-slate-50 transition shadow-xs"
                >
                  <FaLinkedin className="text-blue-600 text-sm" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/Shekharkumar07" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold text-xs py-2.5 px-4 rounded-xl border border-gray-200/80 hover:bg-slate-50 transition shadow-xs"
                >
                  <FaGithub className="text-slate-900 text-sm" /> GitHub
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR: HIGHLY REFINE INTEGRATED FORM (3/5 Width) */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 tracking-tight mb-6">
              Send an Instant Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input Field */}
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-green-600 focus:bg-white transition"
                />
              </div>

              {/* Email Input Field */}
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="johndoe@example.com"
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-green-600 focus:bg-white transition"
                />
              </div>

              {/* Message Textarea Field */}
              <div>
                <label className="text-xs font-bold text-gray-500 block mb-1.5 uppercase tracking-wide">Your Message</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Hi Shekhar, let's talk about backend integrations..."
                  className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-green-600 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              {/* Submission Button */}
              <button 
                type="submit"
                className="w-full mt-2 flex items-center justify-center gap-2 bg-green-600 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-green-700 transition shadow-sm tracking-wider uppercase cursor-pointer"
              >
                <FaPaperPlane className="text-[10px]" /> Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
