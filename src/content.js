import { oliviaDemos } from "./oliviaDemos";
import chapImg from "./assets/work/chap.jpg";
import line5Img from "./assets/work/line5.jpg";
import crmImg from "./assets/work/crm.jpg";
import novaImg from "./assets/work/novaai.jpg";
import blueImg from "./assets/work/BlueMedical.jpg";
import verdelyImg from "./assets/work/verdely.jpg";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/angelomaiele/",
  github: "https://github.com/lucciii33",
  aiera: "https://aiera.com/",
  aieraNews:
    "https://www.prnewswire.com/news-releases/thoma-bravo-backed-bluematrix-to-acquire-aiera-advancing-governed-ai-distribution-for-investment-research-302902401.html",
  olivia: "https://oliviatools.co/",
  line5Video: "https://www.youtube-nocookie.com/embed/M_iCO6DV0_c?autoplay=1",
};

const aieraSuites = [
  { area: "End-to-end UI", tool: "Playwright" },
  { area: "REST APIs", tool: "Postman / Newman" },
  { area: "MCP servers", tool: "Tool-calling checks" },
  { area: "LLM answers", tool: "LangSmith evals" },
  { area: "Load", tool: "k6" },
  { area: "Data integrity", tool: "SQL" },
  { area: "Release gate", tool: "GitHub Actions" },
];

const aieraSuitesEs = [
  { area: "UI end-to-end", tool: "Playwright" },
  { area: "APIs REST", tool: "Postman / Newman" },
  { area: "Servidores MCP", tool: "Pruebas de tool-calling" },
  { area: "Respuestas del LLM", tool: "Evals con LangSmith" },
  { area: "Carga", tool: "k6" },
  { area: "Integridad de datos", tool: "SQL" },
  { area: "Gate de release", tool: "GitHub Actions" },
];

const projectBase = [
  {
    id: "chap",
    name: "Chap",
    img: chapImg,
    url: "https://www.chapstore.es/",
    front: "Remix, React, Tailwind + daisyUI, Stripe, i18next",
    back: "FastAPI, PostgreSQL, SQLAlchemy, Celery, AWS S3, Render",
  },
  {
    id: "line5",
    name: "Line5",
    img: line5Img,
    url: "https://www.line5.com",
    front: "React, Bootstrap, Ruby on Rails",
    back: "Ruby on Rails, PostgreSQL, AWS",
    video: true,
  },
  {
    id: "crm",
    name: "Line5 CRM",
    img: crmImg,
    url: "https://www.line5.com",
    front: "React, TypeScript, Remix, shadcn/ui",
    back: "Ruby on Rails, PostgreSQL, AWS",
  },
  {
    id: "nova",
    name: "Nova AI",
    img: novaImg,
    url: "https://novaaiapp.com/",
    front: "React, Redux, Bootstrap",
    back: "Express, Node.js, MongoDB, Render",
  },
  {
    id: "blue",
    name: "Blue Medical",
    img: blueImg,
    url: "https://bluemedical.co",
    front: "Next.js, Chakra UI, Redux",
    back: "Express, Node.js, MongoDB, Render",
  },
  {
    id: "verdely",
    name: "Verdely API",
    img: verdelyImg,
    url: "https://plantly22.netlify.app/",
    front: "Ionic, React",
    back: "Node.js, MongoDB",
  },
];

const projectCopy = {
  en: {
    chap: {
      time: "12 months",
      text: "A smart QR tag for pets. One scan emails the owner the pet's location, and the app keeps its medical history, expenses, a wellness journal with alerts, care instructions and a missing-pet poster generator.",
    },
    line5: {
      time: "3 years",
      text: "Fully funded protection plans for vehicles and recreational assets, sold through dealerships with guaranteed approvals and payments that build credit.",
    },
    crm: {
      time: "5 months",
      text: "Line5's CRM for dealership teams: leads, campaigns, reminders and a calendar for customer follow-up.",
    },
    nova: {
      time: "12 months",
      text: "An AI study companion that helps students learn with different study methods.",
    },
    blue: {
      time: "10 months",
      text: "Patient tracking for clinics in any branch of medicine.",
    },
    verdely: {
      time: "2 months",
      text: "An API with care data for 180+ indoor plants, including ideal values read from Arduino sensors.",
    },
  },
  es: {
    chap: {
      time: "12 meses",
      text: "Una chapa inteligente con QR para mascotas. Con un escaneo el dueño recibe un email con la ubicación, y la app guarda su historial médico, gastos, un diario de bienestar con alertas, instrucciones de cuidado y un generador de carteles de mascota perdida.",
    },
    line5: {
      time: "3 años",
      text: "Planes de protección totalmente financiados para vehículos y activos recreativos, vendidos en concesionarios con aprobación garantizada y pagos que construyen crédito.",
    },
    crm: {
      time: "5 meses",
      text: "El CRM de Line5 para equipos de concesionarios: leads, campañas, recordatorios y calendario de seguimiento.",
    },
    nova: {
      time: "12 meses",
      text: "Un compañero de estudio con IA que ayuda a los estudiantes a aprender con distintos métodos.",
    },
    blue: {
      time: "10 meses",
      text: "Seguimiento de pacientes para clínicas de cualquier rama de la medicina.",
    },
    verdely: {
      time: "2 meses",
      text: "Una API con datos de cuidado de más de 180 plantas de interior, incluidos valores ideales leídos con sensores Arduino.",
    },
  },
};

const buildProjects = (lang) =>
  projectBase.map((p) => ({ ...p, ...projectCopy[lang][p.id] }));

export const content = {
  en: {
    nav: { work: "Work", toolkit: "Toolkit", contact: "Contact" },
    themeLabel: { light: "Switch to dark theme", dark: "Switch to light theme" },
    langLabel: "Ver en español",
    hero: {
      title: "I find the bugs before your users\u00A0do.",
      role: "Senior QA Automation Engineer & SDET.",
      bio: "6+ years building quality engineering for fintech, AI products, APIs and distributed systems. I design the test strategy, write the automation and wire it into CI, so every release ships with proof that it works.",
      primary: "Message me on LinkedIn",
      secondary: "GitHub",
    },
    runner: {
      title: "Profile test run",
      command: "npx playwright test angelo.spec.ts",
      suite: "Angelo Maiele",
      tests: [
        "has 6+ years in quality engineering",
        "automates web E2E with Playwright and Cypress",
        "automates mobile UI with Maestro",
        "tests APIs with Postman, Newman and SQL",
        "load tests with k6",
        "evaluates LLMs, MCP servers and AI agents",
        "gates releases in GitHub Actions",
      ],
      passed: "passed",
      rerun: "Run again",
    },
    news: {
      date: "Oct 2026",
      text: "Aiera, the AI research platform I tested and automated, is being acquired by BlueMatrix.",
      link: "Read the announcement",
    },
    work: {
      heading: "Selected work",
      intro:
        "Products I built, and products I made sure would not break.",
      olivia: {
        kind: "My product",
        year: "2026",
        lead: "A senior QA engineer on every merge.",
        summary:
          "OliviaTools reviews and tests your pull requests, writes your docs, sends bug hunters after every new endpoint and builds API and MCP test suites in seconds. Watchers re-check everything after each merge.",
        tabsLabel: "What OliviaTools does",
        demos: oliviaDemos.en,
        running: "running",
        finished: "done",
        demoNote: "Sample run on a demo API.",
        cta: "Try OliviaTools",
      },
      aiera: {
        kind: "QA automation",
        badge: "Acquired by BlueMatrix, Oct 2026",
        summary:
          "AI chat and event intelligence for financial and investment research. I built the automation that covers it end to end, from the UI and APIs to MCP servers, LLM answer quality and load, and wired it into CI.",
        panelTitle: "What my suites cover",
        suites: aieraSuites,
        cta: "Visit Aiera",
        cta2: "Read the announcement",
      },
      more: "More projects",
      frontLabel: "Frontend",
      backLabel: "Backend",
      durationLabel: "Duration",
      visit: "Visit site",
      watch: "Watch the demo",
      close: "Close video",
      projects: buildProjects("en"),
    },
    toolkit: {
      heading: "Toolkit",
      intro:
        "The whole SDLC, from the first test plan to the Slack message that says the nightly run passed.",
      groups: [
        { name: "Web & mobile E2E", items: ["Playwright", "Cypress", "Maestro"] },
        { name: "APIs & data", items: ["Postman / Newman", "Jest", "SQL", "SFTP, cron & pipeline health checks"] },
        { name: "Performance", items: ["k6 load testing"] },
        { name: "AI systems", items: ["LLM evaluation with LangSmith", "MCP servers", "Tool-calling", "AI agents"] },
        { name: "Pipelines", items: ["GitHub Actions", "CI/CD quality gates", "Scheduled regression", "Slack reporting"] },
        { name: "Background", items: ["Full-stack: React, Node.js, Rails", "Security-minded exploratory testing"] },
      ],
    },
    contact: {
      heading: "Got a release you need to trust?",
      text: "Tell me what you are shipping. I'll tell you how I'd test it.",
      primary: "Message me on LinkedIn",
      secondary: "See my GitHub",
      footer: "Angelo Maiele",
    },
  },

  es: {
    nav: { work: "Proyectos", toolkit: "Herramientas", contact: "Contacto" },
    themeLabel: { light: "Cambiar a tema oscuro", dark: "Cambiar a tema claro" },
    langLabel: "View in English",
    hero: {
      title: "Encuentro los bugs antes que tus\u00A0usuarios.",
      role: "Senior QA Automation Engineer y SDET.",
      bio: "Más de 6 años construyendo quality engineering para fintech, productos con IA, APIs y sistemas distribuidos. Diseño la estrategia de pruebas, escribo la automatización y la conecto al CI, para que cada release salga con pruebas de que funciona.",
      primary: "Escríbeme por LinkedIn",
      secondary: "GitHub",
    },
    runner: {
      title: "Ejecución de pruebas del perfil",
      command: "npx playwright test angelo.spec.ts",
      suite: "Angelo Maiele",
      tests: [
        "tiene más de 6 años en quality engineering",
        "automatiza E2E web con Playwright y Cypress",
        "automatiza UI mobile con Maestro",
        "prueba APIs con Postman, Newman y SQL",
        "hace pruebas de carga con k6",
        "evalúa LLMs, servidores MCP y agentes de IA",
        "bloquea releases con gates en GitHub Actions",
      ],
      passed: "pasaron",
      rerun: "Ejecutar otra vez",
    },
    news: {
      date: "Oct 2026",
      text: "BlueMatrix va a adquirir Aiera, la plataforma de research con IA que testeé y automaticé.",
      link: "Lee el anuncio",
    },
    work: {
      heading: "Proyectos destacados",
      intro: "Productos que construí, y productos que me aseguré de que no se rompieran.",
      olivia: {
        kind: "Mi producto",
        year: "2026",
        lead: "Un QA senior en cada merge.",
        summary:
          "OliviaTools revisa y prueba tus pull requests, escribe tus docs, manda bug hunters a cada endpoint nuevo y crea suites de pruebas de API y MCP en segundos. Los watchers vuelven a revisar todo después de cada merge.",
        tabsLabel: "Lo que hace OliviaTools",
        demos: oliviaDemos.es,
        running: "ejecutando",
        finished: "listo",
        demoNote: "Ejecución de ejemplo sobre una API demo.",
        cta: "Prueba OliviaTools",
      },
      aiera: {
        kind: "Automatización de QA",
        badge: "Adquirida por BlueMatrix, oct 2026",
        summary:
          "Chat con IA e inteligencia de eventos para research financiero y de inversión. Construí la automatización que la cubre de punta a punta, desde la UI y las APIs hasta los servidores MCP, la calidad de las respuestas del LLM y la carga, y la conecté al CI.",
        panelTitle: "Lo que cubren mis suites",
        suites: aieraSuitesEs,
        cta: "Visita Aiera",
        cta2: "Lee el anuncio",
      },
      more: "Más proyectos",
      frontLabel: "Frontend",
      backLabel: "Backend",
      durationLabel: "Duración",
      visit: "Ver sitio",
      watch: "Ver la demo",
      close: "Cerrar video",
      projects: buildProjects("es"),
    },
    toolkit: {
      heading: "Herramientas",
      intro:
        "Todo el SDLC, desde el primer plan de pruebas hasta el mensaje de Slack que dice que la regresión nocturna pasó.",
      groups: [
        { name: "E2E web y mobile", items: ["Playwright", "Cypress", "Maestro"] },
        { name: "APIs y datos", items: ["Postman / Newman", "Jest", "SQL", "Health checks de SFTP, cron y pipelines"] },
        { name: "Rendimiento", items: ["Pruebas de carga con k6"] },
        { name: "Sistemas de IA", items: ["Evaluación de LLMs con LangSmith", "Servidores MCP", "Tool-calling", "Agentes de IA"] },
        { name: "Pipelines", items: ["GitHub Actions", "Quality gates en CI/CD", "Regresión programada", "Reportes en Slack"] },
        { name: "Background", items: ["Full-stack: React, Node.js, Rails", "Testing exploratorio con foco en seguridad"] },
      ],
    },
    contact: {
      heading: "¿Tienes un release en el que necesitas confiar?",
      text: "Cuéntame qué estás construyendo y te digo cómo lo probaría.",
      primary: "Escríbeme por LinkedIn",
      secondary: "Mira mi GitHub",
      footer: "Angelo Maiele",
    },
  },
};
