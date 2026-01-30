import { motion } from "framer-motion";

const contacts = [
  {
    label: "LinkedIn",
    value: "Jared Gonzalez Teran",
    href: "https://linkedin.com/in/jared-gt",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50" fill="currentColor">
        <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zM11 14.47c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6s0-9.26 0-10c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29c0 .91 0 10 0 10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
      </svg>
    )
  },
  {
    label: "Email",
    value: "jarecgonza@gmail.com",
    href: "mailto:jarecgonza@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 50 50" fill="currentColor">
        <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" />
      </svg>
    )
  },
  {
    label: "Phone",
    value: "+593992688069",
    href: "https://wa.me/593992688069",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.11-.21c1.12.45 2.33.69 3.48.69.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.29 21 3 13.71 3 4c0-.55.45-1 1-1h3.01c.55 0 1 .45 1 1 0 1.15.24 2.36.69 3.48.15.39.05.84-.21 1.11l-2.2 2.2z" />
      </svg>
    )
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

export default function ContactSection() {
  return (
    <section id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="title">Get in Touch</h2>
      </motion.div>

      <motion.div className="contact-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
        <motion.div className="form-card" variants={item}>
          <div className="form-head">
            <span className="form-label">GET IN TOUCH</span>
            <h3>Let's Discuss Projects</h3>
            <p className="muted">Get in touch with us for any kind of help. We are here to give you the best and also here to help you find your projects.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" name="name" placeholder="Name *" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Email *" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject *" required />
            </div>
            <div className="form-group">
              <label>Your message</label>
              <textarea name="message" rows="6" placeholder="Your message *" />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>

        <motion.div className="contact-info-panel" variants={item}>
          <h3>Let's Discuss Your Project</h3>
          
          <div className="contact-links">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-chip">
                <span className="icon-wrap">{c.icon}</span>
                <div>
                  <p className="chip-label">{c.label}</p>
                  <p className="chip-value">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="map-wrap">
            <iframe
              title="Ubicación ESPOL"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.9122831056047!2d-79.96899473045196!3d-2.147762699723936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6dcbef9c9389%3A0x5d56a4e07c5dbcef!2sESPOL%20-%20Escuela%20Superior%20Politécnica%20del%20Litoral!5e0!3m2!1ses!2sec!4v1716127151234!5m2!1ses!2sec"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
