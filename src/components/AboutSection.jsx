import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function AboutSection() {
  return (
    <section id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Grid Section */}
        <motion.div 
          className="about-hero-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Left Section - A LITTLE HISTORY */}
          <motion.div className="grid-left" variants={itemVariants}>
            <div className="vertical-label">
              <span>HISTORY</span>
              
            </div>
            <div className="history-text">
              <p>
                I am currently training as an engineering professional, with a strong interest in software development and data science.
                I have a solid foundation in data structures, algorithms, computer networks, and embedded systems.
              </p>
              <p>
                I am known for my analytical skills, consistency, and sense of responsibility. I approach every technical challenge with 
                determination and focus, always aiming to deliver efficient solutions in demanding technological environments.
              </p>
            </div>
          </motion.div>

          {/* Right Section - ABOUT Title */}
          <motion.div className="grid-right" variants={itemVariants}>
            <div className="about-title-wrapper">
              <h2 className="about-title-massive">ABOUT</h2>
              <div className="about-subtitle-arrow">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M30 10 L30 45 M15 30 L30 45 L45 30" stroke="white" strokeWidth="3" strokeLinecap="square"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          className="cards-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.article className="retro-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-badge">Work Experience</span>
            </div>
            <div className="card-body">
              <h3>Santa Priscila</h3>
              <p className="card-subtitle">Training of Web Developer</p>
              <p>Responsible for the development of the Logistics module of the ERP.</p>
            </div>
          </motion.article>

          <motion.article className="retro-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-badge">Studies</span>
            </div>
            <div className="card-body">
              <div className="edu-item">
                <h3>Unidad Educativa Montepiedra</h3>
                <p className="card-subtitle">Technical High School Diploma in IT Services</p>
              </div>
              <div className="edu-item">
                <h3>Escuela Superior Politecnica Litoral</h3>
                <p className="card-subtitle">Bachelor of Computer Engineering</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
      
    </section>
  );
}