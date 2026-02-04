import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/projects-section.css";

const projects = [
  {
    id: 1,
    title: "Unknown Titan",
    subtitle: "Game Development",
    image: "/img/project2.png",
    tech: ["godot", "csharp"],
    codeLink: "https://github.com/RobertoPatino1/Titan",
    demoLink: "https://singularitycoders.itch.io/unknown-titan",
    category: "Game dev",
    highlight: "NASA Space Apps",
    featured: true,
    year: "2024",
    status: "Completed"
  },
  {
    id: 2,
    title: "A second chance",
    subtitle: "Game Development",
    image: "/img/project.jpg",
    tech: ["godot", "csharp"],
    codeLink: "https://bananahunter243.itch.io/a-second-chance",
    demoLink: "https://bananahunter243.itch.io/a-second-chance",
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
    image: "/img/project3.png",
    tech: ["assembly"],
    codeLink: "https://github.com/lalitard/binaryConverter", 
    demoLink: "https://github.com/lalitard/binaryConverter", 
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
    image: "/img/project5.jpg",
    tech: ["python"],
    codeLink: "https://github.com/JaredIGT/MasterHackRSA",
    demoLink: "https://github.com/JaredIGT/MasterHackRSA",
    category: "Security",
    highlight: "Educational",
    featured: false,
    year: "2023",
    status: "Completed"
  },
  {
    id: 5,
    title: "iSponsor",
    subtitle: "Web Application",
    image: "/img/project4.png",
    tech: ["react", "supabase", "javascript"],
    codeLink: "https://github.com/jaredigt/iSponsor",
    demoLink: "https://github.com/jaredigt/iSponsor",
    category: "Web",
    highlight: "Full Stack",
    featured: true,
    year: "2025",
    status: "Completed"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    subtitle: "Real-time Data Visualization",
    image: "/img/project6.png",
    tech: ["react", "materialui", "typescript"],
    codeLink: "https://github.com/JaredIGT/dashboard",
    demoLink: "https://jaredigt.github.io/dashboard/",
    category: "Web",
    highlight: "Real-time",
    featured: true,
    year: "2025",
    status: "Completed"
  },
  {
    id: 7,
    title: "EcoWarning",
    subtitle: "Environmental Alert System",
    image: "/img/project8.png",
    tech: ["vue", "php"],
    codeLink: "https://github.com/JaredIGT/EcoWarning",
    demoLink: "https://github.com/JaredIGT/EcoWarning",
    category: "Web",
    highlight: "Environmental",
    featured: false,
    year: "2025",
    status: "Completed"
  },
  {
    id: 8,
    title: "Lexic Analizador GO",
    subtitle: "Lexical Analyzer",
    image: "/img/project9.png",
    tech: ["go", "python"],
    codeLink: "https://github.com/JaredIGT/LexicAnalizerGO",
    demoLink: "#",
    category: "Compiler",
    highlight: "Parser",
    featured: false,
    year: "2025",
    status: "Completed"
  },
  {
    id: 9,
    title: "Landing Page",
    subtitle: "Modern Web Design",
    image: "/img/project7.png",
    tech: ["firebase", "tailwind", "html"],
    codeLink: "https://github.com/JoseMurillo2711/landing",
    demoLink: "https://landing-beige-alpha-40.vercel.app/",
    category: "Web",
    highlight: "Modern Design",
    featured: true,
    year: "2025",
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
  },
  react: {
    label: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61dafb"
  },
  materialui: {
    label: "Material-UI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    color: "#007fff"
  },
  supabase: {
    label: "Supabase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    color: "#3ecf8e"
  },
  firebase: {
    label: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#ffa726"
  },
  typescript: {
    label: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178c6"
  },
  javascript: {
    label: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#f7df1e"
  },
  go: {
    label: "Go",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    color: "#00add8"
  },
  tailwind: {
    label: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06b6d4"
  },
  html: {
    label: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#e34c26"
  },
  vue: {
    label: "Vue.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "#4fc08d"
  },
  php: {
    label: "PHP",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777bb4"
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
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("Web");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Merge hardcoded projects with translations
  const translatedProjects = projects.map((project) => {
    const projectTranslation = t(`projects.projects.${project.id - 1}`, null);
    if (projectTranslation && typeof projectTranslation === "object") {
      return { ...project, ...projectTranslation };
    }
    return project;
  });

  const allCategories = [...new Set(translatedProjects.map((p) => p.category))];
  const categories = ["Web", ...allCategories.filter(c => c !== "Web")];

  const filteredProjects =
    activeCategory === "All"
      ? translatedProjects
      : translatedProjects.filter((p) => p.category === activeCategory);

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
          <h2 className="title">{t('projects.title')}</h2>
          <p className="muted">{t('projects.subtitle')}</p>
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
              <span className="counter-label">{t('projects.title')}</span>
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
                      <h3 className="project-title">{t(`projects.projects.${project.id - 1}.title`, project.title)}</h3>
                      <span className="project-subtitle">{t(`projects.projects.${project.id - 1}.subtitle`, project.subtitle)}</span>
                    </div>
                    <span className="highlight-tag">{t(`projects.projects.${project.id - 1}.highlight`, project.highlight)}</span>
                  </div>

                  <p className="project-description">{t(`projects.projects.${project.id - 1}.description`, project.description)}</p>

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
                      {t('projects.viewCode')}
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      className="action-btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t('projects.viewDemo')}
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