import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/language-switcher.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <motion.div 
      className="language-switcher-sticky"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <button 
        onClick={() => changeLanguage('es')}
        className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
        title="Español"
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        title="English"
      >
        EN
      </button>
    </motion.div>
  );
}
