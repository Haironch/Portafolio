import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgRegistrarVenta from "../../assets/imgs/registrarVenta.png";
import imgFinalizarVenta from "../../assets/imgs/finalizarVenta.png";
import imgDesarrolloWeb from "../../assets/imgs/pageone.png";
import imgAppgym from "../../assets/imgs/appgym.png";

const galleryData = {
  desarrolloweb: [
    {
      id: 1,
      title: "Proyecto a nivel nacional",
      description: "Desarrollo full-stack con Java y PrimeFaces",
      image: imgFinalizarVenta,
      span: "col-span-6 row-span-2",
    },
    {
      id: 2,
      title: "sitio web corporativo",
      description: "Interface de administración con gráficos en tiempo real",
      image: imgDesarrolloWeb,
      span: "col-span-6 row-span-1",
    },
    {
      id: 3,
      title: "Desarrollo a nivel de adunas",
      description: "Diseño responsivo para aduanas del país",
      image: imgRegistrarVenta,
      span: "col-span-3 row-span-1",
    },
    {
      id: 4,
      title: "Desarrollo visual",
      description: "Desarrollo de interfaz visual para empresas",
      image: "https://images.unsplash.com/photo-1678025275990-fc029162ec5d",
      span: "col-span-3 row-span-1",
    },
  ],
  disenouxui: [
    {
      id: 1,
      title: "Diseño UX/UI para App Móvil",
      description: "Interfaz intuitiva para aplicación de delivery",
      image: imgFinalizarVenta,
      span: "col-span-6 row-span-2",
    },
    {
      id: 2,
      title: "Rediseño de Plataforma Web",
      description: "Mejora de experiencia de usuario para e-commerce",
      image: imgDesarrolloWeb,
      span: "col-span-6 row-span-1",
    },
    {
      id: 3,
      title: "Sitio Web Fitness",
      description:
        "Un sitio web que realicé con el fin de poder crear una comunidad fitnes",
      image: imgAppgym,
      span: "col-span-6 row-span-1",
      link: "https://mygymstats.netlify.app",
    },
  ],
  aplicacionesdeescritorio: [
    {
      id: 1,
      title: "Sistema de Gestión",
      description: "Software de gestión empresarial multiplataforma",
      image: imgRegistrarVenta,
      span: "col-span-6 row-span-2",
    },
    {
      id: 2,
      title: "App de Control de Inventario",
      description: "Aplicación de escritorio para control de stock",
      image: imgDesarrolloWeb,
      span: "col-span-6 row-span-2",
    },
  ],
};

const TabButton = ({ active, children, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`relative px-6 py-2 text-lg font-title transition-colors
      ${active ? "text-primary" : "text-title hover:text-primary"}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.div
      className="absolute bottom-0 left-0 h-0.5 bg-primary"
      initial={false}
      animate={{ width: active ? "100%" : "0%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.button>
);

const GalleryItem = ({ item, onClick }) => {
  return (
    <motion.div
      layoutId={`gallery-item-${item.id}`}
      className={`relative rounded-xl overflow-hidden cursor-pointer group ${item.span}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(item.link)}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Contenedor del texto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        <h3 className="text-2xl font-title text-center mb-2">{item.title}</h3>
        <p className="text-sm text-white/90 text-center max-w-md">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

function SkillsGallery() {
  const [activeTab, setActiveTab] = useState("desarrolloweb");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = async (tab) => {
    if (tab === activeTab || isAnimating) return;

    setIsAnimating(true);
    setActiveTab(tab);

    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleItemClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const tabs = [
    { id: "desarrolloweb", label: "Desarrollo Web" },
    { id: "disenouxui", label: "Diseño UX/UI" },
    { id: "aplicacionesdeescritorio", label: "Apps de Escritorio" },
  ];

  return (
    <section className="w-full min-h-screen bg-bgDark py-12 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary text-sm uppercase tracking-wider mb-2"
          >
            PROYECTOS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-title text-4xl font-bold mb-4"
          >
            PORTAFOLIO
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-content max-w-3xl mx-auto"
          >
            Explora mi colección de proyectos en desarrollo web, diseño UX/UI y
            aplicaciones de escritorio. Cada proyecto refleja mi compromiso con
            la calidad y la innovación.
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-12 auto-rows-[300px] gap-6 tm:auto-rows-[350px]"
          layout
        >
          <AnimatePresence mode="wait">
            {galleryData[activeTab]?.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={handleItemClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SkillsGallery;
