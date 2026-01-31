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
  { name: "C", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
  { name: "PostgreSQL", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: ".NET", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" },
  { name: "Django", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
  { name: "TypeScript", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Ruby", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" },
  { name: "Go", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Dart", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg" },
  { name: "Firebase", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
  { name: "Supabase", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg" }
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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

        
      </div>
    </motion.section>
  );
}