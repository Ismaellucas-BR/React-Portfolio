import { useNavigate } from "react-router-dom";

function HandleViewProjectComp() {
  const navigate = useNavigate();

  return function handleViewProject(id) {
    navigate(`/projects/${id}`);
  };
}

export default HandleViewProjectComp;
