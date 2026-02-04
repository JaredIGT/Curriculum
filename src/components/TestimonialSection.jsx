import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    quote: "Showed remarkable learning ability in a short time and applied it effectively to team projects.",
    name: "Marcos del Rosario",
    role: "Project Leader at Santa Priscila"
  },
  {
    quote: "He was a key figure in making technical decisions during project development.",
    name: "Jefferson Davalos",
    role: "Fullstack Developer at Ambiensa"
  },
  {
    quote:
      "He is known for his determination and unwavering commitment to delivering high-quality results in every task he undertakes",
    name: "Jose Zambrano",
    role: "Fullstack Developer at Ambiensa"
  }
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export default function TestimonialSection() {
  const { t } = useTranslation();
  const testimonials = t('testimonials.testimonials', { returnObjects: true });
  return (
    <section id="testimonials">
      <motion.div
        className="testimonial-header"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="title">{t('testimonials.title')}</h2>
        <p className="muted">{t('testimonials.subtitle')}</p>
      </motion.div>

      <motion.div className="testimonials" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <motion.article key={t.name} className="testimonial-card" variants={item}>
              <blockquote>"{t.quote}"</blockquote>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-role">{t.role}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
