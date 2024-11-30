import React from "react";
import Project from "./Project";
import Commerce from "../img/commerce.png";
import Convertor from "../img/convertor.png";
import XoX from "../img/xox.png";
import Todo from "../img/todo.jpg";

function Projects() {
  const projects = [
    {
      name: "React-Currency",
      link: "https://github.com/RufanNiyazli/React_ECommerce",
      img: Convertor,
      description:
        "A currency converter application built in React, leveraging API integration with Axios for real-time currency exchange rates.",
      hostlink: null
    },
    {
      name: "TicTacToe Game",
      link: "https://github.com/RufanNiyazli/React_XoXGame",
      img: XoX,
      description:
        " A simple yet engaging Tic Tac Toe game implemented in React, showcasing dynamic rendering and responsive gameplay.",
      hostlink: ""
    },
    {
      name: "E-Commerce WebSite",
      link: "https://github.com/RufanNiyazli/React_ECommerce",
      img: Commerce,
      description:
        " A fully functional e-commerce website built using React, Redux Toolkit, React Router DOM, API integration with Axios, and LocalStorage for state persistence.",
      hostlink: ""
    },
    {
      name: "ToDo Site",
      link: "https://github.com/RufanNiyazli/React_TodoApp",
      img: Todo,
      description:
        " A task management application developed in React and TypeScript, utilizing LocalStorage for data storage and persistence.Also You can edit and delete todos.",
      hostlink: ""
    }
  ];

  return (
    <div id="projects">
      <div>
        <div class="about-header">
          <h2 class="header">Projects</h2>
        </div>
      </div>
      <div className="card-container">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
