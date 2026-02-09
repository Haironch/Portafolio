import React from "react";
import { motion } from "framer-motion";
import { Code2, Laptop, Palette } from "lucide-react";
import imgHero from "../../assets/imgs/profile.jpg";
import ContactModal from "../pages_components/ContactModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.4 },
  },
};

const Bodyhero = () => {
  return (
    <div className="w-full min-h-screen bg-bgDark flex items-center py-20 sm:py-8 px-3 sm:px-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-1 sm:px-4 md:px-12">
        {/* Columna izquierda */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-8 pt-4 sm:pt-0"
        >
          {/* Nombre */}
          <div className="text-center md:text-left w-full">
            <h1 className="text-4xl mm:text-5xl sm:text-4xl md:text-7xl font-bold text-title tracking-tight leading-tight">
              <motion.span
                variants={slideRight}
                className="inline-block"
              >
                Hairon
              </motion.span>
              <br className="hidden xs:block" />
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.19, 1, 0.22, 1],
                      delay: 0.15,
                    },
                  },
                }}
                className="inline-flex items-end"
              >
                Chávez
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
                  className="ml-0.5 inline-block w-2 h-2 bg-primary animate-pulse"
                />
              </motion.span>
            </h1>
          </div>

          {/* Título y roles */}
          <motion.div
            variants={slideUp}
            className="flex flex-col items-center md:items-start space-y-3 md:space-y-6 w-full"
          >
            <motion.span
              variants={slideUp}
              className="text-sm mm:text-base sm:text-lg md:text-2xl text-primary font-semibold text-center md:text-left px-1 sm:px-0"
            >
              Desarrollador Full Stack y CEO de Tav Solutions Technology
            </motion.span>

            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4"
            >
              {[
                { icon: Code2, label: "Full Stack" },
                { icon: Palette, label: "UX/UI" },
                { icon: Laptop, label: "Design" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  variants={badgeVariants}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 mm:gap-2 px-3 mm:px-4 sm:px-6 py-1.5 mm:py-2 rounded-full bg-primary/10 text-title hover:bg-primary/15 transition-all duration-300 group text-xs mm:text-sm sm:text-base cursor-default"
                >
                  <badge.icon
                    className="text-primary group-hover:scale-110 transition-transform"
                    size={18}
                  />
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enlaces Sociales */}
          <motion.div
            variants={slideUp}
            className="flex flex-col md:flex-row items-center gap-3 md:gap-6"
          >
            <div className="flex gap-2 mm:gap-3 md:gap-6 flex-wrap justify-center">
              {[
                { label: "GitHub", href: "https://github.com/Haironch" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/hairon-chavez-78a551337",
                },
                { label: "Twitter", href: "https://x.com/hc23504778" },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/iron_ch.29",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className="text-title text-xs mm:text-sm sm:text-base md:text-lg hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all"
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Botón CTA */}
          <motion.div
            variants={scaleIn}
          >
            <ContactModal />
          </motion.div>
        </motion.div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative group"
          >
            <figure className="relative m-0 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px]">
              <motion.img
                src={imgHero}
                alt="Hairon Chávez"
                className="w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </figure>

            {/* Marco animado */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1.05 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/100 transition-all duration-500 scale-105 group-hover:scale-100"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bodyhero;
