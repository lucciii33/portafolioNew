import { useState,useEffect, useRef } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import mockup1 from "./assets/BlueMedical.png";
import mockup2 from "./assets/BluelightTech.png";
import mockup3 from "./assets/Elana.png";
import viteLogo from "/vite.svg";
import "./projects.css";
import WorkCard from "./components/workCard";

function Projects({scrollPosition}) {

  

  return (
    <>
      <div  className='projects-main' id="projects-main">
        <div>
        <WorkCard title={"Blue Medical"} description={"A medical Software to help tracking patiens"} time={"12 Months"} frontend={"React.js, Bootstrap, MDBootstrap, Redux"} backend={"Express.js, node.js, mongoDB"} mockup1={mockup2} link={"https://www.bluelighttech.co"} scrollPosition={scrollPosition} />
        <WorkCard title={"Blue light Tech"} description={"Line5 a finacial services the best option to loan your home"} time={"4 month"}frontend={"Next.js, ChakraUI, Redux"} backend={"Express.js, node.js, mongoDB"}  mockup1={mockup1} link={"https://staging-site-elana.netlify.app"} scrollPosition={scrollPosition}  />
        <WorkCard title={"Elana"} description={"Line5 a finacial services the best option to loan your home"} time={"4 month"}frontend={"Next.js, ChakraUI, Redux"} backend={"Express.js, node.js, mongoDB"}  mockup1={mockup3} link={"https://staging-site-elana.netlify.app"} scrollPosition={scrollPosition}  />
        </div>
    
      </div>
    </>
  );
}

export default Projects;
