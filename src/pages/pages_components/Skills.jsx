import React from "react";
import { Layers, Server, Database } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  {
    type: "Frontend",
    title: "Desarrollo Web",
    Icon: Layers,
    years: 4,
    projects: 15,
    tags: ["React", "HTML5", "CSS3", "JavaScript"],
    description:
      "Especializado en crear interfaces modernas y responsivas con enfoque en la experiencia de usuario y rendimiento.",
  },
  {
    type: "Backend",
    title: "Desarrollo Backend",
    Icon: Server,
    years: 4,
    projects: 12,
    tags: ["Node.js", "Java", "Express", "Spring Boot"],
    description:
      "Experiencia en desarrollo de APIs RESTful, microservicios y arquitecturas escalables.",
  },
  {
    type: "Bases de Datos",
    title: "Gestión de Datos",
    Icon: Database,
    years: 4,
    projects: 10,
    tags: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    description:
      "Diseño e implementación de bases de datos relacionales y NoSQL con enfoque en optimización y seguridad.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function SkillCard({ skill }) {
  const Icon = skill.Icon;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-bgDark rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl min-h-[420px] relative flex flex-col group"
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient border top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Header */}
      <div className="p-6 bg-bgDark relative z-10">
        {/* Icon Container */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 flex justify-center items-center bg-primary/10 rounded-full"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(144, 124, 102, 0.2)",
          }}
        >
          <Icon className="w-8 h-8 text-primary stroke-[1.5px]" />
        </motion.div>

        {/* Title Section */}
        <p className="text-primary text-sm uppercase tracking-wider mb-1 text-center">
          {skill.type}
        </p>
        <h3 className="text-title text-2xl font-title m-0 text-center mb-3">
          {skill.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {skill.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-white/10 text-title px-3 py-1 rounded-full text-sm"
              whileHover={{
                y: -2,
                backgroundColor: "rgba(144, 124, 102, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        {/* Stats */}
        <div className="flex justify-around mb-4">
          <motion.div
            className="stat"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-4xl font-bold m-0 leading-none">
              {skill.years}+
            </p>
            <p className="text-title text-sm mt-2">Años</p>
          </motion.div>
          <motion.div
            className="stat"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-4xl font-bold m-0 leading-none">
              {skill.projects}
            </p>
            <p className="text-title text-sm mt-2">Proyectos</p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          className="text-content text-base leading-relaxed m-0"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          viewport={{ once: true }}
        >
          {skill.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function Skills() {
  const title = "Experiencia Profesional";
  const subtitle = "Mis Habilidades";
  const description =
    "Desarrollador Full Stack con 4 años de experiencia y pensum académico cerrado. Especializado en tecnologías web modernas, desarrollo backend robusto y gestión eficiente de bases de datos. Con experiencia en la creación de soluciones a nivel nacional trabajando para empresas como la Superintendencia de Administración Tributaria, específicamente en el departamento de Aduanas.";

  return (
    <section
      id="skills"
      className="w-full bg-bgLight flex flex-col justify-center py-8 px-4 md:px-12 box-border -mt-1"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-primary uppercase tracking-wider text-sm mb-2">
          {title}
        </h2>
        <h3 className="text-title text-4xl font-bold mb-4">{subtitle}</h3>
        <p className="text-content leading-relaxed">{description}</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto mt-8 md:mt-6 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
