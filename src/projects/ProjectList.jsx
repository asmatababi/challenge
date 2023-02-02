import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  const { about } = props;
  console.log(about);
  const { projects } = about;
  const ProjectList = projects.map((project, i) => (
    <ProjectItem
      //   project={project}
      name={project.name}
      paraghraphe={project.paraghraphe}
      image={project.image}
      key={project.id}
    ></ProjectItem>
  ));
  return (
    <section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">{ProjectList}</div>
    </section>
  );
}

export default ProjectList;