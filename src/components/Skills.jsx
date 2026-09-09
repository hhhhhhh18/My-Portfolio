import React, { useEffect, useRef } from "react";
import cLogo from "../assets/Skills/c.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinux,
  FaDocker,
  FaRobot,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiJenkins,
  SiApachemaven,
  SiGnubash,
  SiExpress,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  // Frontend
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    x: 8,
    y: 28,
    delay: "0s",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    category: "Frontend",
    x: 20,
    y: 10,
    delay: "0.5s",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    category: "Frontend",
    x: 40,
    y: 3,
    delay: "1s",
  },
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    x: 67,
    y: 10,
    delay: "1.5s",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    x: 82,
    y: 28,
    delay: "2s",
  },

  // Backend
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    x: 8,
    y: 55,
    delay: "0.7s",
  },
  {
    name: "Express",
    icon: SiExpress,
    category: "Backend",
    x: 18,
    y: 73,
    delay: "1.2s",
  },

  // Languages
  {
    name: "Python",
    icon: FaPython,
    category: "Language",
    x: 34,
    y: 86,
    delay: "1.7s",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Language",
    x: 55,
    y: 88,
    delay: "2.2s",
  },
  {
    name: "C / C++",
    icon: cLogo,
    category: "Language",
    x: 73,
    y: 75,
    delay: "2.7s",
    customClass: "cpp-icon image-icon",
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    x: 91,
    y: 54,
    delay: "0.3s",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    x: 83,
    y: 91,
    delay: "1.1s",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    x: 5,
    y: 85,
    delay: "1.9s",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    icon: FaAws,
    category: "Cloud",
    x: 24,
    y: 91,
    delay: "0.8s",
  },
  {
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
    x: 68,
    y: 93,
    delay: "1.6s",
  },
  {
    name: "Linux",
    icon: FaLinux,
    category: "DevOps",
    x: 91,
    y: 78,
    delay: "2.4s",
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    category: "DevOps",
    x: 96,
    y: 36,
    delay: "0.9s",
  },
  {
    name: "Maven",
    icon: SiApachemaven,
    category: "DevOps",
    x: 35,
    y: 8,
    delay: "2.1s",
  },
  {
    name: "Shell",
    icon: SiGnubash,
    category: "DevOps",
    x: 60,
    y: 6,
    delay: "2.8s",
  },

  // Tools
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools",
    x: 4,
    y: 68,
    delay: "1.4s",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
    x: 88,
    y: 12,
    delay: "2.5s",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    category: "Frontend",
    x: 77,
    y: 58,
    delay: "0.6s",
  },

  // AI
  {
    name: "AI / LLMs",
    icon: FaRobot,
    category: "AI",
    x: 50,
    y: 96,
    delay: "1.3s",
    customClass: "ai-icon",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      section.style.setProperty("--mouse-x", `${x}`);
      section.style.setProperty("--mouse-y", `${y}`);
    };

    const handleMouseLeave = () => {
      section.style.setProperty("--mouse-x", "0");
      section.style.setProperty("--mouse-y", "0");
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      {/* Background decoration */}
      <div className="skills-grid"></div>

      <div className="skills-heading">
        <span className="skills-small-title">MY EXPERTISE</span>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <p>
          Technologies I use to build scalable applications, cloud
          infrastructure and AI-powered solutions.
        </p>
      </div>

      <div className="skills-universe">
        {/* Glow behind sphere */}
        <div className="sphere-glow"></div>

        {/* Central 3D sphere */}
        <div
          className="skill-sphere"
          style={{
            transform: `
      translate(
        calc(-50% + var(--mouse-x) * 12px),
        calc(-50% + var(--mouse-y) * 12px)
      )
    `,
          }}
        >
          <div className="sphere-ring ring-one"></div>
          <div className="sphere-ring ring-two"></div>
          <div className="sphere-ring ring-three"></div>

          <div className="sphere-horizontal"></div>
          <div className="sphere-vertical"></div>

          <div className="sphere-content">
            <span className="core-symbol">&lt;/&gt;</span>

            <strong>MY</strong>
            <strong>TECH</strong>

            <small>STACK</small>
          </div>
        </div>

        {/* Orbiting technology logos */}
        <div className="skill-orbit">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                className={`floating-skill ${skill.customClass || ""}`}
                key={skill.name}
                style={{
                  "--x": `${skill.x}%`,
                  "--y": `${skill.y}%`,
                  "--delay": skill.delay,
                }}
              >
                <div className="skill-logo">
                  {skill.name === "C / C++" ? (
                    <img src={skill.icon} alt={skill.name} />
                  ) : (
                    <Icon />
                  )}
                </div>

                <span className="skill-name">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom categories */}
      <div className="skill-categories">
        <div className="category">
          <span className="category-number">01</span>
          <div>
            <h3>Frontend</h3>
            <p>React · Next.js · JavaScript · Tailwind CSS</p>
          </div>
        </div>

        <div className="category">
          <span className="category-number">02</span>
          <div>
            <h3>Backend</h3>
            <p>Node.js · Express · REST APIs · Databases</p>
          </div>
        </div>

        <div className="category">
          <span className="category-number">03</span>
          <div>
            <h3>Cloud & DevOps</h3>
            <p>AWS · Docker · Linux · Jenkins · Maven · Shell</p>
          </div>
        </div>

        <div className="category">
          <span className="category-number">04</span>
          <div>
            <h3>AI & LLMs</h3>
            <p>AI Applications · LLM Integration · Prompt Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
