import { useRef } from "react";
import PropTypes from "prop-types";
import { LINKS } from "../content";
import aieraImg from "../assets/work/aiera.jpg";
import { useInView } from "../hooks/useInView";
import OliviaShowcase from "./OliviaShowcase";
import Reveal from "./Reveal";

function ExternalLink({ href, className, children }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

/** Aiera coverage panel: each suite ticks green in sequence when it scrolls in. */
function AieraSuites({ title, suites }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} className={`suites${inView ? " is-in" : ""}`} aria-label={title}>
      <p className="suites-title">{title}</p>
      <ul>
        {suites.map((s, i) => (
          <li key={s.area} style={{ "--d": `${300 + i * 260}ms` }}>
            <span className="suites-check" aria-hidden="true">
              <span className="suites-spin" />
              <span className="suites-tick">✓</span>
            </span>
            <span className="suites-area">{s.area}</span>
            <span className="suites-tool">{s.tool}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

AieraSuites.propTypes = {
  title: PropTypes.string.isRequired,
  suites: PropTypes.arrayOf(PropTypes.shape({ area: PropTypes.string, tool: PropTypes.string })).isRequired,
};

function Work({ t }) {
  const dialogRef = useRef(null);
  const frameRef = useRef(null);

  const openVideo = () => {
    if (frameRef.current) frameRef.current.src = LINKS.line5Video;
    dialogRef.current?.showModal();
  };
  const closeVideo = () => dialogRef.current?.close();
  const onDialogClose = () => {
    if (frameRef.current) frameRef.current.src = "about:blank";
  };

  const { aiera } = t;

  return (
    <section className="work section" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="section-head">
          <Reveal as="h2" id="work-heading">
            {t.heading}
          </Reveal>
          <Reveal as="p" delay={1} className="section-intro">
            {t.intro}
          </Reveal>
        </header>

        <OliviaShowcase t={t.olivia} />

        <article className="feature feature-aiera">
          <Reveal>
            <AieraSuites title={aiera.panelTitle} suites={aiera.suites} />
          </Reveal>
          <Reveal delay={1} className="feature-text">
            <p className="feature-kind">{aiera.kind}</p>
            <h3 className="feature-title">Aiera</h3>
            <p className="badge">{aiera.badge}</p>
            <p className="feature-summary">{aiera.summary}</p>
            <div className="btn-row">
              <ExternalLink href={LINKS.aiera} className="btn btn-primary">
                {aiera.cta}
              </ExternalLink>
              <ExternalLink href={LINKS.aieraNews} className="btn btn-ghost">
                {aiera.cta2}
              </ExternalLink>
            </div>
          </Reveal>
          <Reveal
            as="a"
            delay={1}
            className="feature-shot aiera-shot"
            href={LINKS.aiera}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            aria-hidden="true"
          >
            <span className="shot-chrome">
              <span />
              <span />
              <span />
              <span className="shot-url">aiera.com</span>
            </span>
            <img src={aieraImg} alt="" width="1600" height="864" loading="lazy" />
          </Reveal>
        </article>

        <Reveal as="h3" className="more-heading">
          {t.more}
        </Reveal>
        <ul className="projects">
          {t.projects.map((p) => (
            <Reveal as="li" key={p.id} className="project">
              <a
                className="project-img"
                href={p.url}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={p.img} alt="" loading="lazy" width="1600" height="960" />
              </a>
              <div className="project-text">
                <h4 className="project-name">{p.name}</h4>
                <p className="project-desc">{p.text}</p>
                <dl className="project-facts">
                  <div>
                    <dt>{t.durationLabel}</dt>
                    <dd>{p.time}</dd>
                  </div>
                  <div>
                    <dt>{t.frontLabel}</dt>
                    <dd>{p.front}</dd>
                  </div>
                  <div>
                    <dt>{t.backLabel}</dt>
                    <dd>{p.back}</dd>
                  </div>
                </dl>
                <div className="btn-row">
                  <ExternalLink href={p.url} className="text-link">
                    {t.visit}
                    <span className="sr-only">: {p.name}</span>
                  </ExternalLink>
                  {p.video && (
                    <button type="button" className="text-link" onClick={openVideo}>
                      {t.watch}
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="video-dialog"
        onClose={onDialogClose}
        onClick={(e) => e.target === dialogRef.current && closeVideo()}
        aria-label="Line5 demo"
      >
        <div className="video-inner">
          <button type="button" className="video-close" onClick={closeVideo}>
            {t.close}
          </button>
          <div className="video-frame">
            <iframe
              ref={frameRef}
              title="Line5 demo"
              src="about:blank"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </dialog>
    </section>
  );
}

Work.propTypes = {
  t: PropTypes.object.isRequired,
};

export default Work;
