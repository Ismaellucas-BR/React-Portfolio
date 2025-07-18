import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/About/about";
import ProjectDetails from "./pages/projects/projectsDetails";
import Projects from "./pages/projects/projects";
import Header from "./components/Header";
import LastSection from "./components/homeComponents/LastSection";
import ScrollToTop from "./components/ScrollToTop";
import Error from "./pages/Error/index";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <LastSection />
    </Router>
  );
}

export default App;
