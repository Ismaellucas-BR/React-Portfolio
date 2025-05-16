import React from "react";
import { motion } from "framer-motion";
import LinkedinSvg from "../icons/Linkedin";
import GitHubSvg from "../icons/Github";
import Instagram from "./Instagram";
function FirstSectionHome() {
  return (
    <section
      className="flex flex-col-reverse gap-5 w-full pb-10 bg-black lg:flex 
     lg:max-w-[1500px] lg:mx-8 lg:flex-row-reverse lg:items-center md:p-5">
      <div className="left-side w-full lg:w-1/2 lg:flex lg:justify-center">
        <div className="lg:w-[500px]">
          <img
            className="rounded-md"
            src="/assets/mainFoto.webp"
            width={800}
            height={800}
            alt="Foto de Ismael Lucas"
          />
        </div>
      </div>
      <div className="right-side w-full flex flex-col gap-5 items-start p-5 lg:w-1/2">
        <div>
          <motion.h2
            className="font-inter text-xl font-semibold text-light-green"
            initial={{ x: -200 }}
            animate={{ x: [-200, 15, 0] }}
            transition={{ duration: 2, ease: "easeInOut" }}>
            Quem sou eu?
          </motion.h2>
          <motion.h1
            className="relative underline-half font-poppins text-3xl font-bold lg:text-6xl lg:w-full"
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: [600, -10, 0], opacity: [0, 1] }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              opacity: { duration: 1.5, ease: "easeInOut" },
            }}>
            Olá, eu sou <br className="hidden lg:flex"></br>
            <span className="text-light-green">Ismael Lucas</span>
          </motion.h1>
        </div>
        <span className="font-inter text-gradient lg:text-lg">
          Tenho 29 anos e atualmente atuo como PJ, desenvolvendo sites e
          funcionalidades para empresas. Hoje sou{" "}
          <strong>desenvolvedor Front-end</strong>, utilizo{" "}
          <span className="text-gradient-white">Next js</span>,{" "}
          <span className="text-gradient-white">TypeScript</span> e{" "}
          <span className="text-gradient-white">Tailwind Css</span> no meu dia a
          dia.
        </span>
        <div className="flex gap-5">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a href="https://www.instagram.com/ismael_lucas36/" target="_blank">
              <Instagram fillone="fill-light-green" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a
              href="https://www.linkedin.com/in/ismael-lucas-72bb04196/"
              target="_blank">
              <LinkedinSvg fillone="fill-light-green" filltwo="fill-red" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}>
            <a href="https://github.com/Ismaellucas-BR" target="_blank">
              <GitHubSvg fillone="fill-light-green" filltwo="fill-red" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FirstSectionHome;
