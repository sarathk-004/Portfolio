import { PROJECTS } from "../constants";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-blue-500 uppercase mt-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex justify-center">
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              techstack={project.techstack}
              link={project.link}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center bg-blue-500/65 border-0 rounded-sm text-slate-200 lg:mr-10 lg:ml-10 cursor-pointer">
        <button className="text-center font-semibold p-2 lg:text-lg" href='https://github.com/sarathk-004?tab=repositories'>View More</button>
      </div>
    </div>
  );
};

export default Projects;
