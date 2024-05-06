import ProjectsLoader from "./ProjectsLoader";
import projects from "utils/projectDirectory";
const Projects = () => (
  <section id="projects">
    <ol className="group/list">
      <ProjectsLoader projects={projects} />
    </ol>
  </section>
);
export default Projects;
