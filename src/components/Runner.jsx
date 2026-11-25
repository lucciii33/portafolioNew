import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Durations shown next to each passing test, in ms.
const TIMES = [112, 184, 241, 197, 263, 318, 402, 155];
const STEP_MS = 280;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Runner({ t }) {
  const total = t.tests.length;
  const [done, setDone] = useState(() => (prefersReducedMotion() ? total : 0));
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDone(total);
      return undefined;
    }
    setDone(0);
    let i = 0;
    let id;
    // On first load, wait for the headline to finish rising in.
    const start = setTimeout(
      () => {
        id = setInterval(() => {
          i += 1;
          setDone(i);
          if (i >= total) clearInterval(id);
        }, STEP_MS);
      },
      run === 0 ? 900 : 0
    );
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [run, total]);

  const finished = done >= total;
  const seconds = (TIMES.slice(0, total).reduce((a, b) => a + b, 0) / 1000).toFixed(1);

  return (
    <figure className="runner" aria-label={t.title}>
      <div className="runner-bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="runner-body">
        <p className="runner-cmd">
          <span className="runner-prompt" aria-hidden="true">$</span> {t.command}
        </p>
        <p className="runner-suite">{t.suite}</p>
        <ol className="runner-list">
          {t.tests.map((name, i) => {
            const state = i < done ? "pass" : i === done ? "running" : "queued";
            return (
              <li key={name} className={`runner-test is-${state}`}>
                <span className="runner-mark" aria-hidden="true">
                  {state === "pass" ? "✓" : state === "running" ? "" : "·"}
                </span>
                <span className="runner-name">{name}</span>
                <span className="runner-time" aria-hidden="true">
                  {state === "pass" ? `${TIMES[i]}ms` : ""}
                </span>
              </li>
            );
          })}
        </ol>
        <div className="runner-foot">
          <p className={`runner-summary${finished ? " is-done" : ""}`} aria-live="polite">
            {finished ? (
              <>
                <strong>
                  {total} {t.passed}
                </strong>{" "}
                ({seconds}s)
              </>
            ) : (
              <span aria-hidden="true">
                {done}/{total}
              </span>
            )}
          </p>
          <button
            type="button"
            className="runner-rerun"
            onClick={() => setRun((r) => r + 1)}
            disabled={!finished}
          >
            {t.rerun}
          </button>
        </div>
      </div>
    </figure>
  );
}

Runner.propTypes = {
  t: PropTypes.shape({
    title: PropTypes.string,
    command: PropTypes.string,
    suite: PropTypes.string,
    tests: PropTypes.arrayOf(PropTypes.string),
    passed: PropTypes.string,
    rerun: PropTypes.string,
  }).isRequired,
};

export default Runner;
