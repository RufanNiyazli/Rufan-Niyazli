import React from "react";

function Project({ project }) {
  const { name, img, description, link } = project;
  return (
    <div className="cards">
      <div className="card">
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{description}</p>
        <button>
          <a href={link}>GitHub Link</a>
        </button>
      </div>
    </div>
  );
}

export default Project;
