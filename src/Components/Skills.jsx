import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div >
        <div class="about-header">
          <h2 class="header">Skills</h2>
        </div>
      </div>
      <div className="skill-container">
        <FaHtml5 />
        <FaCss3Alt />
        <IoLogoJavascript />
        <FaReact />
        <SiRedux />
        <FaGithub />
        <FaGitSquare />
        <FaBootstrap />
        <FaPython />
        <FaJava />
      </div>
    </div>
  );
}

export default Skills;
