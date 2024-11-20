import mockup1 from "./assets/BlueMedical.png";
import mockup2 from "./assets/line5.png";
import mockup3 from "./assets/novaai.png";
import mockup4 from "./assets/crm.png";
import "./projects.css";
import WorkCard from "./components/workCard";
import PropTypes from "prop-types";

function Projects({ scrollPosition, theme, lenguaje }) {
  const texts = {
    en: {
      novaAI:
        "Nova AI is an artificial intelligence app designed to help students study effectively using various learning methods.",
      blueMedical:
        "A software that helps any branch of medicine track their patients",
      line5:
        "Line5 partners with dealerships to fully fund protection plans for vehicles and recreational assets, offering guaranteed approvals and flexible payment options that build credit. With streamlined processes and seamless platform integration, Line5 helps dealerships boost sales and profitability with ease.",
      crm: "System that helps businesses manage interactions with current and potential customers, improving relationships, sales, and customer retention by organizing data and automating processes.",
    },
    es: {
      novaAI:
        "Nova AI es una aplicación de inteligencia artificial diseñada para ayudar a los estudiantes a estudiar de manera efectiva utilizando diversos métodos de aprendizaje.",
      blueMedical:
        "Un software que ayuda a cualquier rama de la medicina a realizar un seguimiento de sus pacientes.",
      line5:
        "Line5 colabora con concesionarios para financiar completamente planes de protección para vehículos y activos recreativos, ofreciendo aprobaciones garantizadas y opciones de pago flexibles que construyen crédito. Con procesos optimizados e integración perfecta de plataformas, Line5 ayuda a los concesionarios a aumentar las ventas y la rentabilidad con facilidad.",
      crm: "Sistema que ayuda a las empresas a gestionar las interacciones con clientes actuales y potenciales, mejorando las relaciones, las ventas y la retención de clientes al organizar datos y automatizar procesos.",
    },
  };

  const langTexts = texts[lenguaje] || texts.en;

  const Times = {
    en: {
      novaAI: "12 month-still working",
      blueMedical: "10 Month",
      line5: "3 Years-still working",
      crm: "5 Month-still working",
    },
    es: {
      novaAI: "12 Meses-Continua",
      blueMedical: "10 Meses",
      line5: "3 Anos-Continua",
      crm: "5 meses-Continua",
    },
  };

  const TimeTexts = Times[lenguaje] || Times.en;

  return (
    <>
      <div
        className={!theme ? "projects-main" : "projects-main-dark "}
        id="projects-main"
      >
        <div className="d-flex-center">
          <WorkCard
            title={"NOVA AI"}
            description={langTexts.novaAI}
            time={TimeTexts.novaAI}
            frontend={"React.js, Bootstrap, Redux"}
            backend={"Express.js, node.js, MongoDB, Render"}
            mockup1={mockup3}
            link={"https://novaaiapp.com/"}
            scrollPosition={scrollPosition}
            theme={theme}
            lenguaje={lenguaje}
          />
          <WorkCard
            title={"Blue Medical"}
            description={langTexts.blueMedical}
            time={TimeTexts.blueMedical}
            frontend={"Next.js, ChakraUI, Redux"}
            backend={"Express.js, node.js, MongoDB, Render"}
            mockup1={mockup1}
            link={"https://bluemedical.co"}
            scrollPosition={scrollPosition}
            theme={theme}
            lenguaje={lenguaje}
          />
          <WorkCard
            title={"Line5"}
            description={langTexts.line5}
            time={TimeTexts.line5}
            frontend={"React.js, Bootstrap, Ruby and Rails"}
            backend={"Ruby and Rails, AWS, Postgress"}
            mockup1={mockup2}
            link={"https://www.line5.com"}
            scrollPosition={scrollPosition}
            theme={theme}
            lenguaje={lenguaje}
          />

          <WorkCard
            title={"line5 CRM"}
            description={langTexts.crm}
            time={TimeTexts.crm}
            frontend={"React, Typescript, Remix, shadcn"}
            backend={"Ruby and Rails, Postgress, AWS"}
            mockup1={mockup4}
            link={"https://crm.staging.line5.com"}
            scrollPosition={scrollPosition}
            theme={theme}
            lenguaje={lenguaje}
          />
        </div>
      </div>
    </>
  );
}

Projects.propTypes = {
  scrollPosition: PropTypes.number,
  theme: PropTypes.bool.isRequired,
  lenguaje: PropTypes.string,
};

export default Projects;
