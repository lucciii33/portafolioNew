import PropTypes from "prop-types";
import "../news.css";

function News({ theme, lenguaje }) {
  const texts = {
    en: {
      heading: "News",
      items: [
        {
          tag: "Fintech · AI",
          date: "Oct 2026",
          title: "Aiera — acquired by BlueMatrix",
          body: "I tested and automated Aiera, one of the best AI chats for finance and investment research. Thoma Bravo-backed BlueMatrix, the world's largest publisher of investment research, has just agreed to acquire Aiera.",
          stack: "Playwright, Postman/Newman, API testing, MCP servers, LangSmith (LLM evals), k6 load testing, SQL, GitHub Actions CI/CD",
          links: [
            { label: "Visit Aiera", url: "https://aiera.com/" },
            {
              label: "Read the announcement",
              url: "https://www.prnewswire.com/news-releases/thoma-bravo-backed-bluematrix-to-acquire-aiera-advancing-governed-ai-distribution-for-investment-research-302902401.html",
            },
          ],
        },
        {
          tag: "My product",
          date: "2026",
          title: "OliviaTools — AI-powered QA platform",
          body: "I built OliviaTools, a QA platform where AI writes Playwright tests from a recorded flow, commits them to your repo and self-heals when the app changes. It also generates API and MCP regression, smoke, load and bug-report suites, plus Claude Code skills for Postman regression collections.",
          stack: "React Router, TypeScript, Tailwind, Node.js, MongoDB, Stripe, REST API, MCP, Playwright, Postman, Claude AI",
          links: [{ label: "Try OliviaTools", url: "https://oliviatools.co/" }],
        },
      ],
    },
    es: {
      heading: "Noticias",
      items: [
        {
          tag: "Fintech · IA",
          date: "Oct 2026",
          title: "Aiera — adquirida por BlueMatrix",
          body: "Testeé y automaticé Aiera, uno de los mejores chats de IA para finanzas e investigación de inversiones. BlueMatrix, respaldada por Thoma Bravo y el mayor publicador de research de inversión del mundo, acaba de acordar la compra de Aiera.",
          stack: "Playwright, Postman/Newman, testing de API, servidores MCP, LangSmith (evaluación de LLMs), pruebas de carga con k6, SQL, CI/CD con GitHub Actions",
          links: [
            { label: "Visita Aiera", url: "https://aiera.com/" },
            {
              label: "Lee el anuncio",
              url: "https://www.prnewswire.com/news-releases/thoma-bravo-backed-bluematrix-to-acquire-aiera-advancing-governed-ai-distribution-for-investment-research-302902401.html",
            },
          ],
        },
        {
          tag: "Mi producto",
          date: "2026",
          title: "OliviaTools — plataforma de QA con IA",
          body: "Construí OliviaTools, una plataforma de QA donde la IA escribe tests de Playwright a partir de un flujo grabado, los sube a tu repo y se auto-repara cuando la app cambia. También genera suites de regresión, smoke, carga y reportes de bugs para APIs y servidores MCP, además de skills de Claude Code para colecciones de regresión en Postman.",
          stack: "React Router, TypeScript, Tailwind, Node.js, MongoDB, Stripe, REST API, MCP, Playwright, Postman, Claude AI",
          links: [{ label: "Prueba OliviaTools", url: "https://oliviatools.co/" }],
        },
      ],
    },
  };

  const t = texts[lenguaje] || texts.en;

  return (
    <section
      className={theme ? "news-main news-main-dark" : "news-main"}
      id="news"
    >
      <h2
        className={
          theme ? "news-heading color-text-white" : "news-heading color-text-dark"
        }
      >
        {t.heading}
      </h2>
      <div className="news-grid">
        {t.items.map((item) => (
          <article
            key={item.title}
            className={theme ? "news-card news-card-dark" : "news-card"}
          >
            <div className="news-meta">
              <span className="news-tag">{item.tag}</span>
              <span className="news-date">{item.date}</span>
            </div>
            <h3 className="news-title">{item.title}</h3>
            <p className="text1 news-body">{item.body}</p>
            <p className="news-stack">{item.stack}</p>
            <div className="news-links">
              {item.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="news-link"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

News.propTypes = {
  theme: PropTypes.bool.isRequired,
  lenguaje: PropTypes.string,
};

export default News;
