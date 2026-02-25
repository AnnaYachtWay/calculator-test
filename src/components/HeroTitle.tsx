import { useEffect, useState } from 'react';
import styles from './HeroTitle.module.css';

const TITLE_LINES = [
  { text: 'YachtValue™', delayClassName: 'lineDelay0' },
  { text: 'Miami Cost Analyzer', delayClassName: 'lineDelay120' },
] as const;

export default function HeroTitle() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setIsRevealed(true);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className={`${styles.heroSection} ${isRevealed ? styles.isRevealed : ''}`}>
      <h1 className={styles.heroTitle}>
        {TITLE_LINES.map((line) => (
          <span key={line.text} className={styles.lineMask}>
            <span className={`${styles.lineInner} ${styles[line.delayClassName]}`}>{line.text}</span>
          </span>
        ))}
      </h1>
      <p className={styles.subtitle}>
        <span className={styles.lineMask}>
          <span className={`${styles.lineInner} ${styles.lineDelay320}`}>
            2026 South Florida Annual Ownership Estimate
          </span>
        </span>
      </p>
    </section>
  );
}
