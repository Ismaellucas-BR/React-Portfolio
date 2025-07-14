import Data from "../../../data/projects.json";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

  const handleViewProject = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section className=" flex flex-col justify-center items-center w-full h-auto gap-10 px-5 py-20 lg:grid lg:grid-cols-3">
      {Data.map((project) => (
        <div
          className={`item-con w-full ${
            project.status === "in progress"
              ? "cursor-not-allowed opacity-60 hover:cursor-not-allowed"
              : "hover:shadow-xs hover:shadow-light-green/90 hover:cursor-pointer hover:rounded-lg hover:scale-105"
          } transition-all`}
          key={project.id}
          onClick={() => {
            if (project.status !== "in progress") {
              handleViewProject(project.id);
            }
          }}>
          <div className="item-container bg-[#111] bg-opacity-50 border border-[#333] p-4 rounded-lg shadow-md hover:shadow-xs hover:shadow-light-green/90  hover:rounded-lg lg:hover:scale-110  transition-all text-white">
            <img
              src={project.thumbnail}
              alt={project.alt}
              className="w-full h-40 object-contain rounded-lg"
              width={800}
              height={800}
            />

            <h2 className="group-hover:text-gray-200/70 mt-4 text-xl font-bold truncate text-ellipsis font-inter">
              {project.name}
            </h2>
            <p className="mt-2 truncate text-ellipsis font-poppins text-sm group-hover:text-gray-200/70">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsPage;
