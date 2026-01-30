import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Game Development - Unknown Titan",
    description:
      "Unknown Titan es un proyecto para el NASA Space Apps Challenge que explora la posibilidad de vida en Titán combinando simulaciones y análisis de datos científicos.",
    image: "/img/project2.png",
    tech: ["godot", "csharp"],
    codeLink: "#",
    demoLink: "#",
    category: "Game dev",
    highlight: "NASA Space Apps"
  },
  {
    id: 2,
    title: "Game Development - PyWeekend Winner",
    description:
      "Videojuego ganador del hackathon PyWeekend en ESPOL, construido en Godot con foco en mecánicas ágiles y estética dinámica.",
    image: "/img/project.jpg",
    tech: ["godot", "csharp"],
    codeLink: "#",
    demoLink: "#",
    category: "Game dev",
    highlight: "PyWeekend winner"
  },
  {
    id: 3,
    title: "Prime Number Detector in Assembly",
    description:
      "Programa en ensamblador que determina si un número es primo usando optimizaciones de bajo nivel para mejorar el rendimiento en análisis numérico.",
    image: "/img/project3.png",
    tech: ["assembly"],
    codeLink: "#",
    demoLink: "#",
    category: "Low-level",
    highlight: "Optimización"
  },
  {
    id: 4,
    title: "Development a command-line interface (CLI)",
    description:
      "CLI para explicar e implementar RSA: generación de llaves, cifrado y descifrado con foco en claridad matemática y pruebas reproducibles.",
    image: "/img/project5.jpg",
    tech: ["python"],
    codeLink: "#",
    demoLink: "#",
    category: "Security",
    highlight: "RSA"
  }
];

const techIcons = {
  godot: {
    label: "Godot",
    src: "https://godotengine.org/assets/press/icon_color.png"
  },
  csharp: {
    label: "C#",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
  },
  assembly: {
    label: "Assembly",
    src: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/20143122/image/medium-061f346ce6cf062c7534f892a730414b.png"
  },
  python: {
    label: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }
};

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.16, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Obtener categorías únicas
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filtrar proyectos
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Proyectos que disfruto construir</span>
        <div className="title-row">
          <h2>Experiencias con enfoque técnico y visual</h2>
          <p>
            Prototipos y entregables que mezclan código bien estructurado, sensibilidad visual y cuidado por la
            interacción. Cada pieza está animada para que se sienta viva sin sacrificar performance.
          </p>
        </div>

        {/* Categoría Tabs */}
        <motion.div
          className="category-tabs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`tab-button ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        key={activeCategory}
      >
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{
              y: -6,
              borderColor: "rgba(99, 102, 241, 0.55)",
              boxShadow: "0 28px 70px rgba(99, 102, 241, 0.18)"
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="card-ink" />
            <div className="project-meta">
              <span className="pill accent">{project.category}</span>
              <span className="pill muted">{project.highlight}</span>
            </div>
            <motion.div
              className="project-media"
              whileHover={{ scale: 1.01, rotate: -0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="tech-chips">
                {project.tech.map((tech) => (
                  <span key={`${project.id}-${tech}`} className="chip">
                    <img src={techIcons[tech]?.src} alt={techIcons[tech]?.label} />
                    <span>{techIcons[tech]?.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-actions">
                <a className="ghost-btn" href={project.codeLink} target="_blank" rel="noreferrer">
                  Ver código
                </a>
                <a className="solid-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                  Ver demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
