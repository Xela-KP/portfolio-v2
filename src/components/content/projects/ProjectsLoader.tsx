import LinkArrow from "components/icons/LinkArrow";
import type { Project, Projects } from "projects/project";
import TechStack from "./Languages";

const ProjectsLoader = ({ projects }: { projects: Projects }) => {
  const projectArray = Object.values(projects);
  return (
    <>
      {projectArray.map((project) => (
        <ProjectLoader key={project.name} {...project} />
      ))}
    </>
  );
};

const ProjectLoader = ({
  name,
  description,
  languages,
  date,
  link,
}: Project) => (
  <li className="mb-4 relative ">
    <div className="group/item group-hover/list:opacity-40 hover:!opacity-100 transition-all">
      <div className="py-4 px-8 group/cover rounded-md group-hover/item:shadow-sky group-hover/item:shadow-md transition-all">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 rounded-md group-hover/item:opacity-10 group-hover/item:bg-gray-700/50 group-hover/item:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover/item:drop-shadow-lg transition-all"
        />
        <div className="grid grid-cols-4 gap-x-2">
          <span className="col-span-2 pt-1 grid-rows-2">
            <h3 className="text-gray-500 font-semibold text-sm">
              {date.from} - {date.to}
            </h3>
            <TechStack languages={languages} />
          </span>
          <span className="col-span-2">
            <h1>
              {name}
              <span className="inline-block">
                <LinkArrow />
              </span>
            </h1>
            <p>{description}</p>
          </span>
        </div>
      </div>
    </div>
  </li>
);
export default ProjectsLoader;
