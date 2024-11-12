import { useState, useEffect, useRef } from "react";
import hand from "./assets/victory.png";
import email from "./assets/email.png";
import arrow from "./assets/arrow.png";
import mockup1 from "./assets/BlueMedical.png";
import mockup2 from "./assets/line5.png";
import mockup3 from "./assets/novaai.png";
import mockup4 from "./assets/crm.png";
import "./projects.css";
import WorkCard from "./components/workCard";

function Projects({ scrollPosition }) {
  return (
    <>
      <div className="projects-main" id="projects-main">
        <div className="d-flex-center">
          <WorkCard
            title={"NOVA AI"}
            description={
              "Nova AI is an artificial intelligence app designed to help students study effectively using various learning methods."
            }
            time={"min-12 month"}
            frontend={"React.js, Bootstrap, Redux"}
            backend={"Express.js, node.js, MongoDB, Render"}
            mockup1={mockup3}
            link={"https://novaaiapp.com/"}
            scrollPosition={scrollPosition}
          />
          <WorkCard
            title={"Blue Medical"}
            description={
              "A software that helps any branch of medicine to track ther patients"
            }
            time={"10 month"}
            frontend={"Next.js, ChakraUI, Redux"}
            backend={"Express.js, node.js, MongoDB, Render"}
            mockup1={mockup1}
            link={"https://bluemedical.co"}
            scrollPosition={scrollPosition}
          />
          <WorkCard
            title={"Line5"}
            description={
              "Line5 partners with dealerships to fully fund protection plans for vehicles and recreational assets, offering guaranteed approvals and flexible payment options that build credit. With streamlined processes and seamless platform integration, Line5 helps dealerships boost sales and profitability with ease."
            }
            time={"2 years-still"}
            frontend={"React.js, Bootstrap, Ruby and Rails"}
            backend={"Ruby and Rails, AWS, Postgress"}
            mockup1={mockup2}
            link={"https://www.line5.com"}
            scrollPosition={scrollPosition}
          />

          <WorkCard
            title={"line5 CRM"}
            description={
              "system that helps businesses manage interactions with current and potential customers, improving relationships, sales, and customer retention by organizing data and automating processes."
            }
            time={"5 month"}
            frontend={"React, Typescript, Remix, shadcn"}
            backend={"Ruby and Rails, Postgress, AWS"}
            mockup1={mockup4}
            link={"https://crm.staging.line5.com"}
            scrollPosition={scrollPosition}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
