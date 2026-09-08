import React, { useState } from "react";

import smartCommute1 from "../assets/projects/smart-commute-1.png";
import smartCommute2 from "../assets/projects/smart-commute-2.png";
import smartCommute3 from "../assets/projects/smart-commute-3.png";

import whatsappApi1 from "../assets/projects/whatsapp-api-1.png";
import whatsappApi2 from "../assets/projects/whatsapp-api-2.png";

import careerAi1 from "../assets/projects/career-ai-1.png";
import careerAi2 from "../assets/projects/career-ai-2.png";
import careerAi3 from "../assets/projects/career-ai-3.png";

import dockerExpense1 from "../assets/projects/docker-expense-1.png";
import dockerExpense2 from "../assets/projects/docker-expense-2.png";

import orbital1 from "../assets/projects/orbital-1.png";
import orbital2 from "../assets/projects/orbital-2.png";

const projects = [
  {
    number: "01",
    title: "Smart Commute",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "An intelligent transportation platform designed to help users compare and choose better travel options based on route, time, distance, and cost. The application provides dedicated experiences for metro, bus, bike, and car travel with route information and smart recommendations.",
    role: "Full Project — Designed & Developed by Me",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "JavaScript",
      "APIs",
      "GTFS",
      "Maps",
    ],
    images: [smartCommute1, smartCommute2, smartCommute3],
    liveUrl: "https://smart-commute-blush.vercel.app/",
    githubUrl: "https://github.com/hhhhhhh18/smart-commute",
  },

  {
    number: "02",
    title: "WhatsApp Business API",
    category: "WEB APPLICATION",
    description:
      "A business-focused WhatsApp API platform designed to help organizations automate customer communication, marketing, notifications, and lead management. The platform presents API capabilities, integrations, automation workflows, and business messaging features through a modern responsive interface.",
    role: "Frontend Development + Backend Contribution",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "APIs",
      "WhatsApp Business API",
    ],
    images: [whatsappApi1, whatsappApi2],
    liveUrl: "https://soft7.in/whatsapp-api",
  },

  {
    number: "03",
    title: "Career Guidance AI",
    category: "AI-POWERED FULL-STACK APPLICATION",
    description:
      "An AI-powered career guidance platform that helps students and professionals make better career decisions. It provides personalized career guidance, interview preparation, industry insights, performance tracking, and AI-assisted career tools through an interactive dashboard.",
    role: "Full Project — Designed & Developed by Me",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "JavaScript",
      "AI APIs",
      "Authentication",
      "Dashboard",
    ],
    images: [careerAi1, careerAi2, careerAi3],
    liveUrl: "https://career-guidance-with-ai.vercel.app/",
    githubUrl: "https://github.com/hhhhhhh18/career-guidance-with-ai",
  },

  {
    number: "04",
    title: "Node.js Application with Docker",
    category: "DEVOPS / CONTAINERIZATION",
    description:
      "A Node.js application containerized using Docker to create a consistent and portable runtime environment. The project demonstrates Dockerfile-based application packaging and the fundamentals of running a Node.js application inside a container.",
    role: "Designed & Implemented by Me",
    technologies: [
      "Node.js",
      "JavaScript",
      "Docker",
      "Dockerfile",
      "Containers",
      "DevOps",
    ],
    images: [dockerExpense1, dockerExpense2],
    githubUrl: "https://github.com/hhhhhhh18/Nodejs-application",
  },

  {
    number: "05",
    title: "Orbital 3D Carousel",
    category: "DEVOPS / CLOUD DEPLOYMENT",
    description:
      "A visually immersive 3D carousel website featuring interactive cards, parallax motion, glassmorphism effects, and responsive visual interactions. The project was deployed as a static website using Amazon S3, demonstrating practical cloud hosting and deployment.",
    role: "Static Website Deployment & Cloud Hosting",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "3D UI",
      "AWS S3",
      "Cloud Deployment",
    ],
    images: [orbital1, orbital2],
    liveUrl: "https://www.tooplate.com/view/2167-orbital",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project) => {
    setActiveProject(project);
    setActiveImage(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveImage(0);
  };

  return (
    <>
      <section
        id="projects"
        className="relative w-full bg-[#ff2a2a] px-6 md:px-12 pt-24 pb-40 overflow-hidden font-sans"
      >
        {/* Decorative stars */}
        <div className="absolute top-16 right-10 md:right-20 text-black opacity-20 animate-pulse pointer-events-none">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
          </svg>
        </div>

        <div
          className="absolute bottom-40 left-5 md:left-20 text-black opacity-20 animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section heading */}
          <div data-aos="fade-up" className="mb-20">
            <p className="text-sm font-black tracking-[0.3em] uppercase text-black/60 mb-4">
              WHAT I'VE BUILT SO FAR
            </p>

            <h2 className="text-5xl md:text-7xl font-black text-black leading-none">
              My Projects<span className="text-white">.</span>
            </h2>

            <p className="mt-6 text-lg md:text-xl font-bold text-red-50 max-w-2xl leading-relaxed">
              A collection of full-stack applications, AI-powered products, and
              DevOps projects that showcase how I turn ideas into practical,
              working solutions.
            </p>
          </div>

          {/* Project cards */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <article
                key={project.number}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-black rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative min-h-[300px] lg:min-h-[430px] bg-gray-900 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Project number */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black font-black text-sm">
                        {project.number}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/70 text-xs font-black tracking-[0.2em] uppercase">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 lg:p-12 text-white flex flex-col justify-between">
                    <div>
                      <p className="text-red-400 text-sm font-black tracking-widest mb-3">
                        PROJECT {project.number}
                      </p>

                      <h3 className="text-3xl md:text-4xl font-black mb-5">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>

                      {/* Role */}
                      <div className="mt-7">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                          My Role
                        </p>

                        <p className="font-bold text-white">{project.role}</p>
                      </div>

                      {/* Technologies */}
                      <div className="mt-7">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-3">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold text-gray-200"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3 mt-10">
                      <button
                        onClick={() => openProject(project)}
                        className="px-6 py-3 rounded-full bg-white text-black font-black hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                      >
                        View Project
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full border border-white/40 text-white font-black hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
                        >
                          Live Demo ↗
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full border border-white/40 text-white font-black hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
                        >
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Torn paper divider */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none z-20 transform translate-y-1">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-20 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Project modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#111] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 text-white text-xl font-bold hover:bg-white hover:text-black transition-all"
            >
              ×
            </button>

            <div className="overflow-y-auto max-h-[92vh]">
              {/* Large screenshot */}
              <div className="relative bg-black">
                <img
                  src={activeProject.images[activeImage]}
                  alt={`${activeProject.title} screenshot`}
                  className="w-full max-h-[60vh] object-contain"
                />

                {/* Previous */}
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImage(
                          (activeImage - 1 + activeProject.images.length) %
                            activeProject.images.length,
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 text-white text-2xl hover:bg-white hover:text-black transition-all"
                    >
                      ‹
                    </button>

                    {/* Next */}
                    <button
                      onClick={() =>
                        setActiveImage(
                          (activeImage + 1) % activeProject.images.length,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 text-white text-2xl hover:bg-white hover:text-black transition-all"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {activeProject.images.length > 1 && (
                <div className="flex gap-3 p-4 overflow-x-auto bg-[#151515]">
                  {activeProject.images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setActiveImage(index)}
                      className={`shrink-0 w-28 h-20 rounded-lg overflow-hidden border-2 ${
                        activeImage === index
                          ? "border-white"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Modal information */}
              <div className="p-7 md:p-10 text-white">
                <p className="text-red-400 text-xs font-black tracking-[0.25em] uppercase mb-3">
                  {activeProject.category}
                </p>

                <h3 className="text-3xl md:text-5xl font-black mb-5">
                  {activeProject.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  {activeProject.description}
                </p>

                <div className="mt-7">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                    My Role
                  </p>

                  <p className="font-bold">{activeProject.role}</p>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {activeProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-bold"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white text-black font-black hover:bg-gray-200 transition"
                    >
                      Open Live Project ↗
                    </a>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border border-white/30 font-black hover:bg-white hover:text-black transition"
                    >
                      View GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
