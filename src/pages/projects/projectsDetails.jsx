import React from "react";
import * as motion from "framer-motion/client";
import Data from "../../../data/projects.json";
import GitHub from "../../components/icons/GitHub";
import PlayButton from "../../components/icons/PlayButton";
import { useParams } from "react-router-dom";

function DinamicPage() {
  const { id } = useParams();
  const project = Data.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <section className="project-detail flex flex-col w-full h-full lg:h-screen lg:flex-row">
      {/* Coluna Esquerda (Texto Fixo) */}
      <div className="leftSide sticky top-0 flex flex-col items-start justify-start h-full p-10 w-full text-white md:w-1/2 lg:h-screen">
        <h1 className="text-2xl lg:text-5xl font-bold font-inter w-full text-left">
          {project.name}
        </h1>
        <p className="mt-10 font-inter text-lg">{project.description}</p>

        {project.haveLink !== true ? null : (
          <div className="flex flex-col justify-start items-start w-full max-w-7xl py-10 gap-10 font-inter text-xl capitalize font-normal md:flex-row">
            <div className="flex justify-center items-center gap-5">
              Veja agora:
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: "inline-block" }}>
                <a
                  href={project.linkSite}
                  target="_blank"
                  rel="noopener noreferrer">
                  <PlayButton fillone="fill-light-green" filltwo="fill-red" />
                </a>
              </motion.div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <span>Repositório:</span>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ display: "inline-block" }}>
                <a
                  href={project.gitHub}
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHub fillone="fill-light-green" filltwo="fill-red" />
                </a>
              </motion.div>
            </div>
          </div>
        )}
        <div className="hidden justify-left items-left scroll-indicator w-full h-20 bg-black text-light-green lg:flex">
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="font-poppins font-semibold text-lg flex items-center gap-2">
            <span>Role a imagem para ver mais →</span>
          </motion.div>
        </div>
      </div>

      {/* Coluna Direita (Imagem Rolável - Desktop) */}
      <div className="hidden rightSide w-full md:w-1/2 overflow-y-auto h-screen lg:block">
        <img
          src={project.imageInterna}
          alt="imagem do site"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Coluna Direita (Imagem Fixa - Mobile) */}
      <div className="flex lg:hidden rightSideMobile w-full h-full px-5 pb-10">
        <img
          src={project.image}
          alt="imagem do site"
          className="w-full h-full rounded-md"
        />
      </div>
    </section>
  );
}

export default DinamicPage;
