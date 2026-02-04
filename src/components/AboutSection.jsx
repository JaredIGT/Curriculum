import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
              <span>{t('about.history')}</span>
              
            </div>
            <div className="history-text">
              <p>
                {t('about.historyText1')}
              </p>
              <p>
                {t('about.historyText2')}
              </p>
            </div>
          </motion.div>

          {/* Right Section - ABOUT Title */}
          <motion.div className="grid-right" variants={itemVariants}>
            <div className="about-title-wrapper">
              <h2 className="about-title-massive">{t('about.about')}</h2>
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
              <span className="card-badge">{t('about.workExperience')}</span>
            </div>
            <div className="card-body">
              <h3>Santa Priscila</h3>
              <p className="card-subtitle">{t('about.trainingWebDeveloper')}</p>
              <p>{t('about.responsibleLogistics')}</p>
            </div>
          </motion.article>

          <motion.article className="retro-card" variants={itemVariants}>
            <div className="card-header">
              <span className="card-badge">{t('about.studies')}</span>
            </div>
            <div className="card-body">
              <div className="edu-item">
                <h3>Unidad Educativa Montepiedra</h3>
                <p className="card-subtitle">{t('about.highSchoolDiploma')}</p>
              </div>
              <div className="edu-item">
                <h3>Escuela Superior Politecnica Litoral</h3>
                <p className="card-subtitle">{t('about.bachelorDegree')}</p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
      
    </section>
  );
}