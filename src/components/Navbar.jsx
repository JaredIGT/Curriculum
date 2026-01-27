import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      y: -20,
      pointerEvents: 'none'
    },
    open: { 
      opacity: 1, 
      y: 0,
      pointerEvents: 'auto'
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05 }
    })
  };

  return (
    <header>
      <nav id="navbar">
        <ul>
          <li className="nav-brand">
            <motion.a 
              href="#welcome-section"
              onClick={closeMenu}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <svg id="nav-logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#673AB7" 
              width="50" height="50" viewBox="0 0 30 30">
                <defs>
                  <linearGradient id="gradienteLila" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <path d="M24 8L24 6 22 6 22 4 20 4 20 6 18 6 18 8 17 8 16 8 16 10 14 10 14 8 13 8 12 8 
                12 6 10 6 10 4 8 4 8 6 6 6 6 8 4 8 4 10 4 18 6 18 6 20 8 20 8 22 10 22 10 24 12 24 12 26 
                15 26 18 26 18 24 20 24 20 22 22 22 22 20 24 20 24 18 26 18 26 10 26 8z" fill="url(#gradienteLila)">
                </path>
              </svg>
              <span id="nav-name">JIGT</span>
            </motion.a>
          </li>

          {/* Menú de escritorio */}
          <div className="nav-links">
            <li><motion.a 
              href="#welcome-section" 
              className="nav-options"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >Home</motion.a></li>
            <li><motion.a 
              href="#about" 
              className="nav-options"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >About</motion.a></li>
            <li><motion.a 
              href="#projects" 
              className="nav-options"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >Projects</motion.a></li>
            <li><motion.a 
              href="#contact" 
              className="nav-options"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >Contact Me</motion.a></li>
          </div>

          <li className="nav-button"> 
            <motion.a 
              id="profile-link" 
              href="https://github.com/JaredIGT" 
              className="nav-follow" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Follow Me
            </motion.a>
          </li>

          {/* Icono Hamburger para móviles */}
          <motion.button 
            className="hamburger"
            onClick={toggleMenu}
            animate={menuOpen ? 'open' : 'closed'}
            initial="closed"
          >
            <motion.span variants={topLineVariants} transition={{ duration: 0.3 }} />
            <motion.span variants={middleLineVariants} transition={{ duration: 0.3 }} />
            <motion.span variants={bottomLineVariants} transition={{ duration: 0.3 }} />
          </motion.button>

          {/* Menú móvil */}
          <motion.div 
            className="mobile-menu"
            animate={menuOpen ? 'open' : 'closed'}
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.li custom={0} variants={menuItemVariants} animate={menuOpen ? 'open' : 'closed'}>
              <a href="#welcome-section" className="nav-options mobile" onClick={closeMenu}>Home</a>
            </motion.li>
            <motion.li custom={1} variants={menuItemVariants} animate={menuOpen ? 'open' : 'closed'}>
              <a href="#about" className="nav-options mobile" onClick={closeMenu}>About</a>
            </motion.li>
            <motion.li custom={2} variants={menuItemVariants} animate={menuOpen ? 'open' : 'closed'}>
              <a href="#projects" className="nav-options mobile" onClick={closeMenu}>Projects</a>
            </motion.li>
            <motion.li custom={3} variants={menuItemVariants} animate={menuOpen ? 'open' : 'closed'}>
              <a href="#contact" className="nav-options mobile" onClick={closeMenu}>Contact Me</a>
            </motion.li>
            <motion.li custom={4} variants={menuItemVariants} animate={menuOpen ? 'open' : 'closed'}>
              <a 
                href="https://github.com/JaredIGT" 
                className="nav-follow mobile" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Follow Me
              </a>
            </motion.li>
          </motion.div>
        </ul>
      </nav>        
    </header>
  )
}
