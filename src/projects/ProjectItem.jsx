import React from "react";

function ProjectItem(props) {
  const { image, name, paragraphe } = props;
  return (
    <div class="project-card">
      <img src={image} alt="project" />
      <h3>{name}</h3>
      <p>{paragraphe}</p>
      <p>
        <a href="#">Github Link</a>
      </p>
    </div>
  );
}

export default ProjectItem;

  