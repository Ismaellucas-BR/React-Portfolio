import Data from "../../../data/projects.json";
import { useRouter } from "next/navigation";

function ProjectsPage() {
  const { push } = useRouter();

  const handleViewProject = (id) => {
    push(`/projects/${id}`);
  };

  return (
    <section className=" flex flex-col justify-center items-center w-full h-screen gap-10 px-10 py-20 lg:grid lg:grid-cols-3">
      {Data.map((project) => (
        <div
          className="item-con group w-full min-h-60"
          key={project.id}
          onClick={() => handleViewProject(project.id)}
        >
          <div className="item-container bg-[#111] bg-opacity-50 border border-[#333] p-4 rounded-lg shadow-md hover:shadow-sm hover:shadow-light-green/90 hover:cursor-pointer hover:rounded-lg lg:hover:scale-110  transition-all">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-40 object-contain rounded-lg"
              width={800}
              height={800}
            />

            <h2 className="group-hover:text-gray-200/70 mt-4 text-3xl font-bold truncate text-ellipsis font-sans">
              {project.name}
            </h2>
            <p className="mt-2 truncate text-ellipsis font-poppins text-lg group-hover:text-gray-200/70">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectsPage;
