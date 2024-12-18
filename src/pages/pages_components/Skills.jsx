import React from "react";
import { Layers, Server, Database } from "lucide-react";
import Headercontent from "../../components/Headercontent";

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

function SkillCard({ skill }) {
  const Icon = skill.Icon;

  return (
    <div className="bg-bgDark rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl min-h-[420px] relative flex flex-col group">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Card Header */}
      <div className="p-6 bg-bgDark relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 mx-auto mb-4 flex justify-center items-center bg-primary/10 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
          <Icon className="w-8 h-8 text-primary stroke-[1.5px] transition-transform duration-300 group-hover:scale-110" />
        </div>

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
            <span
              key={index}
              className="bg-white/10 text-title px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-primary/20 hover:-translate-y-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        {/* Stats */}
        <div className="flex justify-around mb-4">
          <div className="stat">
            <p className="text-primary text-4xl font-bold m-0 leading-none">
              {skill.years}+
            </p>
            <p className="text-title text-sm mt-2">Años</p>
          </div>
          <div className="stat">
            <p className="text-primary text-4xl font-bold m-0 leading-none">
              {skill.projects}
            </p>
            <p className="text-title text-sm mt-2">Proyectos</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-content text-base leading-relaxed m-0">
          {skill.description}
        </p>
      </div>
    </div>
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
      <Headercontent
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px] mx-auto mt-8 md:mt-6 w-full">
        {skillsData.map((skill, i) => (
          <SkillCard skill={skill} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Skills;