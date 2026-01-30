import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/skills-section.css";

const skills = [
  { name: "Java", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "JavaScript", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "PHP", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
  { name: "Python", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "C#", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
  { name: "HTML5", level: "Advanced", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS3", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "React", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Vue.js", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
  { name: "C", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" }
  }
};

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Calculate positions for skills on elliptical orbits
  const getOrbitPosition = (index, total, radiusX, radiusY, offsetAngle = 0) => {
    const angle = (index / total) * 2 * Math.PI + offsetAngle;
    return {
      x: 50 + radiusX * Math.cos(angle),
      y: 50 + radiusY * Math.sin(angle),
      angle: angle
    };
  };

  // Inner orbit (5 skills)
  const innerOrbitSkills = skills.slice(0, 5);
  const innerPositions = innerOrbitSkills.map((_, i) => 
    getOrbitPosition(i, 5, 15, 8, -Math.PI / 2)
  );

  // Outer orbit (5 skills)
  const outerOrbitSkills = skills.slice(5, 10);
  const outerPositions = outerOrbitSkills.map((_, i) => 
    getOrbitPosition(i, 5, 25, 15, -Math.PI / 2 + 0.3)
  );

  return (
    <motion.section
      className="skills-section-connected"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-container-connected">
        {/* Header */}
        <motion.div 
          className="skills-header-connected"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title">Tech Skills</h2>
        </motion.div>
        {/* Bottom Skills Grid with Details */}
        <motion.div 
          className="skills-detail-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name}
              className={`skill-detail-card ${hoveredSkill === skill.name ? 'card-highlighted' : ''}`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="card-info">
                <h3>{skill.name}</h3>
                <span className={`level-badge level-${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Visualization */}
        <motion.div 
          className="connection-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* SVG for orbital paths */}
          <svg className="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.6)" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Inner circular orbit */}
            <motion.circle
              cx="50"
              cy="50"
              r="12"
              stroke="rgba(168, 85, 247, 0.5)"
              strokeWidth="0.15"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Outer circular orbit */}
            <motion.circle
              cx="50"
              cy="50"
              r="22"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="0.15"
              fill="none"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Connection lines from icons to center */}
            {[...innerPositions, ...outerPositions].map((pos, index) => (
              <motion.line
                key={`connection-${index}`}
                x1={pos.x}
                y1={pos.y}
                x2="50"
                y2="50"
                stroke="rgba(168, 85, 247, 0.2)"
                strokeWidth="0.08"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className={hoveredSkill === skills[index]?.name ? 'line-active' : ''}
              />
            ))}

            {/* Center glow ring */}
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              stroke="rgba(168, 85, 247, 0.5)"
              strokeWidth="0.2"
              fill="none"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {/* Center Core */}
          <motion.div 
            className="center-core"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="core-glow"></div>
            <div className="core-inner">
              <svg viewBox="0 0 40 40" className="core-icon">
                <path 
                  d="M8 5 L8 35 M16 5 L16 35 M24 5 L24 35 M32 5 L32 35" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Inner Orbit Icons */}
          {innerOrbitSkills.map((skill, index) => (
            <motion.div
              key={`inner-${skill.name}`}
              className={`skill-icon ${hoveredSkill === skill.name ? 'skill-icon-active' : ''}`}
              style={{
                left: `${innerPositions[index].x}%`,
                top: `${innerPositions[index].y}%`,
              }}
              variants={iconVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <img src={skill.icon} alt={skill.name} />
              <div className="skill-tooltip">
                <span className="tooltip-name">{skill.name}</span>
                <span className="tooltip-level">{skill.level}</span>
              </div>
            </motion.div>
          ))}

          {/* Outer Orbit Icons */}
          {outerOrbitSkills.map((skill, index) => (
            <motion.div
              key={`outer-${skill.name}`}
              className={`skill-icon ${hoveredSkill === skill.name ? 'skill-icon-active' : ''}`}
              style={{
                left: `${outerPositions[index].x}%`,
                top: `${outerPositions[index].y}%`,
              }}
              variants={iconVariants}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <img src={skill.icon} alt={skill.name} />
              <div className="skill-tooltip">
                <span className="tooltip-name">{skill.name}</span>
                <span className="tooltip-level">{skill.level}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </motion.section>
  );
}