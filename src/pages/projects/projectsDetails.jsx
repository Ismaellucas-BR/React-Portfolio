import React from "react";
import * as motion from "framer-motion/client";
import Data from "../../../data/projects.json";
import GitHub from "../../components/icons/GitHub";
import PlayButton from "../../components/icons/PlayButton";
import { useParams } from "react-router-dom";

function DinamicPage({ params }) {
  const { id } = useParams();
  const project = Data.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Projeto não encontrado</p>;
  }

  return (
    <section className="project-detail flex flex-col items-center justify-center w-full px-10 py-20">
      <div
        className="relative h-96 w-full max-w-7xl  bg-cover bg-no-repeat bg-center rounded-lg shadow-xs"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="w-full h-full bg-black/70"></div>
        <h1 className="absolute top-2/4 left-2/4 translate-x-[-50%] text-2xl lg:text-5xl font-bold font-inter w-full text-center">
          {project.name}
        </h1>
      </div>

      <p className="mt-10 font-inter text-lg">{project.description}</p>

      <div className="flex flex-col justify-start items-start w-full max-w-7xl py-10 gap-5 font-inter text-xl capitalize font-normal lg:p-10">
        <div className="flex justify-center items-center gap-5">
          Veja agora:
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <a href={project.linkSite} target="_blank">
              <PlayButton fillone="fill-light-green" filltwo="fill-red" />
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span>Repositório:</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "inline-block" }}
          >
            <a href={project.gitHub} target="_blank">
              <GitHub fillone="fill-light-green" filltwo="fill-red" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DinamicPage;
