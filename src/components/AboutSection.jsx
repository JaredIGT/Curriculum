import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "PHP", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C#", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "HTML5", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", level: "Basic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "C", level: "Basic", icon: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000" }
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutSection() {
  return (
    <section id="about">
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="title">About Me</h2>
        <p>
          I am currently training as an engineering professional, with a strong interest in software development and data science.
          I have a solid foundation in data structures, algorithms, computer networks, and embedded systems. I am known for my
          analytical skills, consistency, and sense of responsibility. I approach every technical challenge with determination and
          focus, always aiming to deliver efficient solutions in demanding technological environments.
        </p>
      </motion.div>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article className="info-card" variants={cardVariants}>
          <div className="card-head">
            <span className="pill accent">Work Experience</span>
          </div>
          <div className="card-body">
            <h3>Santa Priscila</h3>
            <p className="muted">Training of Web Developer.</p>
            <p>Responsible for the development of the Logistics module of the ERP.</p>
          </div>
        </motion.article>

        <motion.article className="info-card" variants={cardVariants}>
          <div className="card-head">
            <span className="pill accent">Studies</span>
          </div>
          <div className="edu-list">
            <div className="edu-item">
              <h3>Unidad Educativa Montepiedra</h3>
              <p className="muted">Technical High School Diploma in IT Services</p>
            </div>
            <div className="edu-item">
              <h3>Escuela Superior Politecnica Litoral</h3>
              <p className="muted">Bachelor of Computer Engineering</p>
            </div>
          </div>
        </motion.article>
      </motion.div>

      <motion.div
        className="skills-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="skills-head">
          <h3 className="subtitle">Skill Tech</h3>
          <p className="muted">Stack principal con nivel de dominio.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <motion.div key={skill.name} className="skill-card" variants={cardVariants}>
              <div className="skill-icon-wrap">
                <img src={skill.icon} alt={skill.name} width="38" height="38" />
              </div>
              <div>
                <p className="skill-name">{skill.name}</p>
                <p className="skill-level">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
