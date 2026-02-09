import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "CANELLA",
    role: "Analista Desarrollador",
    period: "2025 - Actualidad",
    current: true,
  },
  {
    id: 2,
    company: "Superintendencia de Administración Tributaria (SAT)",
    role: "Desarrollador",
    period: "06/2023 - 03/2025",
    current: false,
  },
  {
    id: 3,
    company: "UTZ CHE'",
    role: "Desarrollador",
    period: "06/2022 - 04/2023",
    current: false,
  },
  {
    id: 4,
    company: "Hogar del Niño",
    role: "Desarrollador",
    period: "2020",
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TimelineItem = ({ experience, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex items-center w-full mb-8 md:mb-12 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Card */}
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
        } pl-8 sm:pl-12 md:pl-0`}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="relative bg-bgLight rounded-xl p-4 sm:p-6 border border-primary/10
                     hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5
                     transition-all duration-300 group"
        >
          {/* Badge actualidad */}
          {experience.current && (
            <span className="absolute -top-3 right-4 bg-primary text-bgDark text-xs font-bold px-3 py-1 rounded-full">
              Actual
            </span>
          )}

          {/* Empresa */}
          <h3 className="text-title text-base sm:text-xl font-title font-bold mb-1 group-hover:text-primary transition-colors duration-300">
            {experience.company}
          </h3>

          {/* Rol */}
          <p className="text-content text-sm mb-3 flex items-center gap-2 justify-start md:justify-end">
            {isLeft ? (
              <>
                <span>{experience.role}</span>
                <Briefcase size={14} className="text-primary" />
              </>
            ) : (
              <>
                <Briefcase size={14} className="text-primary" />
                <span>{experience.role}</span>
              </>
            )}
          </p>

          {/* Periodo */}
          <div
            className={`flex items-center gap-2 text-primary text-sm font-title ${
              isLeft ? "justify-start md:justify-end" : "justify-start"
            }`}
          >
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
        </motion.div>
      </div>

      {/* Dot central - visible solo en desktop */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 items-center justify-center z-10">
        <div
          className={`w-5 h-5 rounded-full border-[3px] border-primary transition-all duration-300 ${
            experience.current ? "bg-primary scale-110" : "bg-bgDark"
          }`}
        />
      </div>

      {/* Dot móvil */}
      <div className="md:hidden absolute left-0 top-6 w-4 h-4 flex items-center justify-center z-10">
        <div
          className={`w-4 h-4 rounded-full border-[3px] border-primary ${
            experience.current ? "bg-primary" : "bg-bgDark"
          }`}
        />
      </div>

      {/* Espacio vacío del otro lado en desktop */}
      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  );
};

function AboutTimeline() {
  return (
    <section className="w-full bg-bgDark py-12 sm:py-16 px-3 sm:px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-primary text-sm uppercase tracking-wider mb-2">
            SOBRE MÍ
          </h2>
          <h3 className="text-title text-2xl sm:text-4xl font-bold font-title mb-4 sm:mb-6">
            MI TRAYECTORIA
          </h3>
          <p className="text-content max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed px-1">
            Desarrollador Full Stack con experiencia en instituciones
            gubernamentales y empresas privadas. Apasionado por crear soluciones
            tecnológicas que generen impacto real, desde sistemas tributarios
            hasta plataformas bancarias.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Línea central - desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {/* Línea izquierda - mobile */}
          <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTimeline;
