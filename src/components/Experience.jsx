import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#ff2a2a] text-white py-24 px-6 md:px-12 overflow-hidden font-sans"
    >
      {/* Decorative Star - Top Right */}
      <div className="absolute top-12 right-8 md:right-20 text-black/20">
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Decorative Star - Bottom Left */}
      <div className="absolute bottom-24 left-6 md:left-20 text-black/20">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-black font-black uppercase tracking-[0.3em] text-sm mb-4"
          >
            Where I've Worked
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl md:text-6xl font-black text-black"
          >
            My <span className="text-white">Experience</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-2xl mx-auto mt-5 text-red-50 text-lg font-semibold leading-relaxed"
          >
            Hands-on experience building real-world applications, working with
            modern full-stack technologies and contributing to
            production-focused software solutions.
          </p>
        </div>

        {/* ================= EXPERIENCE TIMELINE ================= */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/20 md:-translate-x-1/2" />

          {/* Timeline Dot */}
          <div
            className="absolute left-4 md:left-1/2 top-10 w-5 h-5 
            bg-black border-4 border-[#ff2a2a] rounded-full 
            md:-translate-x-1/2 z-20"
          />

          {/* ================= EXPERIENCE CARD ================= */}
          <div className="relative pl-12 md:pl-0">
            <div data-aos="fade-up" className="md:w-[85%] mx-auto">
              <div
                className="bg-black rounded-2xl border border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                overflow-hidden hover:border-white/30
                transition-all duration-500"
              >
                {/* ================= CARD HEADER ================= */}
                <div className="p-7 md:p-10 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    {/* Company */}
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        {/* Company Icon */}
                        <div
                          className="w-14 h-14 rounded-xl bg-white
                          flex items-center justify-center
                          text-black font-black text-lg"
                        >
                          S7
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-white">
                            SOFT7 Technology
                          </h3>

                          <p className="text-red-400 font-bold mt-1">
                            Full Stack Development Intern
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-5">
                        <span
                          className="px-4 py-2 rounded-full
                          bg-white/10 text-white text-sm font-semibold"
                        >
                          IT Department
                        </span>

                        <span
                          className="px-4 py-2 rounded-full
                          bg-white/10 text-white text-sm font-semibold"
                        >
                          Remote
                        </span>

                        <span
                          className="px-4 py-2 rounded-full
                          bg-red-600 text-white text-sm font-bold"
                        >
                          Completed
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="md:text-right shrink-0">
                      <p className="text-red-400 font-black text-lg">
                        Nov 2025 — Feb 2026
                      </p>

                      <p className="text-white/50 text-sm mt-1">
                        04 Nov 2025 → 04 Feb 2026
                      </p>
                    </div>
                  </div>
                </div>

                {/* ================= DESCRIPTION ================= */}
                <div className="p-7 md:p-10">
                  <h4 className="text-xl font-black text-white mb-4">
                    Full Stack Development Internship
                  </h4>

                  <p className="text-white/70 leading-relaxed text-base md:text-lg">
                    Worked as a Full Stack Development Intern at SOFT7
                    Technology, contributing to real-world web application
                    development and business-focused software solutions. Worked
                    primarily on frontend development while also contributing to
                    backend functionality and API integration.
                  </p>

                  {/* ================= RESPONSIBILITIES ================= */}
                  <div className="grid md:grid-cols-2 gap-5 mt-10">
                    {/* Responsibility 1 */}
                    <div
                      className="bg-white/[0.04] border border-white/10
                      rounded-xl p-5 hover:border-red-500/50
                      transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-red-500 text-xl">01</div>

                        <div>
                          <h5 className="font-black text-white mb-2">
                            Frontend Development
                          </h5>

                          <p className="text-white/50 text-sm leading-relaxed">
                            Built responsive user interfaces and reusable
                            components using modern frontend technologies.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibility 2 */}
                    <div
                      className="bg-white/[0.04] border border-white/10
                      rounded-xl p-5 hover:border-red-500/50
                      transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-red-500 text-xl">02</div>

                        <div>
                          <h5 className="font-black text-white mb-2">
                            API Integration
                          </h5>

                          <p className="text-white/50 text-sm leading-relaxed">
                            Connected frontend applications with backend
                            services and REST APIs for dynamic functionality.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibility 3 */}
                    <div
                      className="bg-white/[0.04] border border-white/10
                      rounded-xl p-5 hover:border-red-500/50
                      transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-red-500 text-xl">03</div>

                        <div>
                          <h5 className="font-black text-white mb-2">
                            Backend Contribution
                          </h5>

                          <p className="text-white/50 text-sm leading-relaxed">
                            Contributed to backend functionality using Node.js
                            and worked with API-related tasks.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Responsibility 4 */}
                    <div
                      className="bg-white/[0.04] border border-white/10
                      rounded-xl p-5 hover:border-red-500/50
                      transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-red-500 text-xl">04</div>

                        <div>
                          <h5 className="font-black text-white mb-2">
                            Business Applications
                          </h5>

                          <p className="text-white/50 text-sm leading-relaxed">
                            Contributed to business-focused applications
                            including the WhatsApp Business API platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= TECHNOLOGIES ================= */}
                  <div className="mt-10">
                    <h4
                      className="text-sm uppercase tracking-[0.25em]
                      text-red-400 font-black mb-5"
                    >
                      Technologies
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {[
                        "React.js",
                        "Next.js",
                        "JavaScript",
                        "Tailwind CSS",
                        "Node.js",
                        "Express.js",
                        "REST APIs",
                        "Git",
                        "GitHub",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/10
                          border border-white/10 rounded-full
                          text-white text-sm font-semibold
                          hover:bg-red-600 hover:border-red-600
                          transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ================= CERTIFICATE ================= */}
                  <div
                    className="mt-10 pt-8 border-t border-white/10
                    flex flex-col md:flex-row
                    md:items-center md:justify-between gap-6"
                  >
                    <div>
                      <p className="text-white font-black text-lg">
                        Internship Successfully Completed
                      </p>

                      <p className="text-white/50 text-sm mt-2">
                        Certified by SOFT7 Technology
                      </p>
                    </div>

                    <a
                      href="/SOFT7%20Internship%20Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center
                      gap-3 bg-red-600 text-white
                      px-6 py-3 rounded-full
                      font-black border border-red-500
                      hover:bg-white hover:text-black
                      hover:border-white
                      transition-all duration-300"
                    >
                      <span>📜</span>
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM HIGHLIGHT ================= */}
        <div data-aos="fade-up" className="mt-14 text-center">
          <p className="text-black font-black text-lg md:text-xl">
            Dedicated
            <span className="mx-3 text-white">•</span>
            Determined
            <span className="mx-3 text-white">•</span>
            Hardworking
          </p>

          <p className="text-red-50/80 text-sm mt-3">
            Recognized in my internship completion certificate.
          </p>
        </div>
      </div>

      {/* ================= TORN PAPER BOTTOM ================= */}
      <div
        className="absolute bottom-0 left-0 w-full
        pointer-events-none z-30 translate-y-1"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-black"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Experience;
