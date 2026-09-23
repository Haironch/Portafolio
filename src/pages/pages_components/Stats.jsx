import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";

const stats = [
  { value: 6, suffix: "+", label: "Años de experiencia" },
  { value: 20, suffix: "+", label: "Proyectos entregados" },
  { value: 4, suffix: "", label: "Empresas e instituciones" },
  { value: 3, suffix: "", label: "Productos propios" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.19, 1, 0.22, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

function Stats() {
  return (
    <section className="w-full bg-bgLight py-10 sm:py-14 px-3 sm:px-4 md:px-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className={`flex flex-col items-center text-center px-2 ${
              i > 0 ? "md:border-l md:border-primary/20" : ""
            } ${i % 2 === 1 ? "border-l border-primary/20 md:border-l" : ""}`}
          >
            <p className="text-title font-title font-bold text-4xl mm:text-5xl md:text-6xl leading-none">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <div className="w-8 h-0.5 bg-primary/60 my-3 sm:my-4" />
            <p className="text-content text-xs mm:text-sm sm:text-base uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;
