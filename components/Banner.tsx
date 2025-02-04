import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-[#25507b]"
      >
        Hola, mi nombre es
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold text-[#25507b] flex flex-col"
      >
        Junior Alejandro
        <span className="text-[#1d3f61] mt-2 lgl:mt-4">Desarrollador web</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-black font-medium"
      >
        apasionado por aprender y crecer en el mundo de la tecnología.{" "}
        <span className="text-[#c0c051]">Especializado en React</span>, me
        encanta crear interfaces interactivas y eficientes. Siempre estoy en la
        búsqueda de nuevos desafíos y oportunidades para mejorar mis habilidades
        y aplicar mis conocimientos en proyectos reales.
      </motion.p>
      <a
        href="https://github.com/junito02/junito02"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-md rounded-lg text-white font-titleFont border border-[#2e3073] mt-6 font-semibold tracking-wide bg-[#1d3f61] hover:bg-[#2e3073] hover:text-white duration-300"
        >
          ¡Mira mi proyecto!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
