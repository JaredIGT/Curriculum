import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "../styles/projects-section.css";

const projects = [
  {
    id: 1,
    title: "Unknown Titan",
    subtitle: "Game Development",
    description:
      "Proyecto para el NASA Space Apps Challenge que explora la posibilidad de vida en Titán combinando simulaciones y análisis de datos científicos.",
    image: "/img/project2.png",
    tech: ["godot", "csharp"],
    codeLink: "#",
    demoLink: "#",
    category: "Game dev",
    highlight: "NASA Space Apps",
    featured: true,
    year: "2024",
    status: "Completed"
  },
  {
    id: 2,
    title: "PyWeekend Champion",
    subtitle: "Game Development",
    description:
      "Videojuego ganador del hackathon PyWeekend en ESPOL, construido en Godot con foco en mecánicas ágiles y estética dinámica.",
    image: "/img/project.jpg",
    tech: ["godot", "csharp"],
    codeLink: "#",
    demoLink: "#",
    category: "Game dev",
    highlight: "Winner",
    featured: true,
    year: "2024",
    status: "Completed"
  },
  {
    id: 3,
    title: "Prime Detector ASM",
    subtitle: "Low-level Programming",
    description:
      "Programa en ensamblador que determina si un número es primo usando optimizaciones de bajo nivel para mejorar el rendimiento.",
    image: "/img/project3.png",
    tech: ["assembly"],
    codeLink: "#",
    demoLink: "#",
    category: "Low-level",
    highlight: "Optimized",
    featured: false,
    year: "2023",
    status: "Completed"
  },
  {
    id: 4,
    title: "RSA CLI Tool",
    subtitle: "Cryptography",
    description:
      "CLI para explicar e implementar RSA: generación de llaves, cifrado y descifrado con foco en claridad matemática y pruebas reproducibles.",
    image: "/img/project5.jpg",
    tech: ["python"],
    codeLink: "#",
    demoLink: "#",
    category: "Security",
    highlight: "Educational",
    featured: false,
    year: "2023",
    status: "Completed"
  }
];

const techIcons = {
  godot: {
    label: "Godot",
    src: "https://godotengine.org/assets/press/icon_color.png",
    color: "#478cbf"
  },
  csharp: {
    label: "C#",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    color: "#239120"
  },
  assembly: {
    label: "Assembly",
    src: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/20143122/image/medium-061f346ce6cf062c7534f892a730414b.png",
    color: "#ff6b6b"
  },
  python: {
    label: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776ab"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const projectCount = filteredProjects.length;

  return (
    <section id="projects" className="projects-section">
      {/* Animated Background Elements */}
      <div className="projects-bg-elements">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="title">Projects</h2>
          <p className="muted">A selection of my best work and experiments</p>
        </motion.div>

          {/* Filter Tabs */}
          <div className="filter-container">
            <div className="filter-tabs">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`filter-tab ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <motion.div 
              className="project-counter"
              key={projectCount}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="counter-number">{projectCount}</span>
              <span className="counter-label">Projects</span>
            </motion.div>
          </div>
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`project-card ${project.featured ? "featured" : ""} ${
                  hoveredCard === project.id ? "hovered" : ""
                }`}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ "--card-index": index }}
              >
                {/* Card Background Glow */}
                <div className="card-glow"></div>
                
                {/* Status Badge */}
                <div className="status-badges">
                  {project.featured && (
                    <span className="status-badge featured-badge">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
                      </svg>
                      Featured
                    </span>
                  )}
                  <span className="status-badge year-badge">{project.year}</span>
                </div>

                {/* Project Image */}
                <div className="project-image-wrapper">
                  <motion.div 
                    className="project-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="image-overlay"></div>
                  </motion.div>
                  
                  {/* Tech Stack Badges */}
                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <motion.div
                        key={`${project.id}-${tech}`}
                        className="tech-badge"
                        style={{ "--tech-color": techIcons[tech]?.color }}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                      >
                        <img src={techIcons[tech]?.src} alt={techIcons[tech]?.label} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="content-header">
                    <div className="title-group">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-subtitle">{project.subtitle}</span>
                    </div>
                    <span className="highlight-tag">{project.highlight}</span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Actions */}
                  <div className="card-actions">
                    <motion.a
                      href={project.codeLink}
                      className="action-btn btn-secondary"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                      </svg>
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      className="action-btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Demo
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}