import { useState } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import viteLogo from "/vite.svg";
import "./projects.css";
import WorkCard from "./components/workCard";

function Projects() {


  return (
    <>
      <div className="projects-main" id="projects-main">
        <div>
        <WorkCard title={"test"} description={"A medical Software to help tracking patiens"} time={"12 Months"} frontend={"react.js, Bootstrap, MDBootstrap"} backend={"Express.js, node.js, mongoDB"}/>
        <WorkCard title={"test2"} description={"Line5 a finacial services the best option to loan your home"} time={"4 month"}/>
        </div>
     
       
      </div>
    </>
  );
}

export default Projects;
