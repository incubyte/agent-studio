import { useState, useEffect } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('80px', '0'),
    backgroundColor: '#FFFFFF',
    ...shorthands.overflow('hidden'),
    position: 'relative',
    '@media (max-width: 768px)': {
      ...shorthands.padding('60px', '0'),
    },
  },

  label: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#718096',
    marginBottom: '32px',
    ...shorthands.padding('0', '48px'),
  },

  marqueeWrapper: {
    position: 'relative',
    display: 'flex',
    ...shorthands.overflow('hidden'),
  },

  marqueeContent: {
    display: 'flex',
    ...shorthands.gap('80px'),
    alignItems: 'center',
    willChange: 'transform',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    color: '#4A5568',
    fontSize: '14px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    userSelect: 'none',
  },

  dot: {
    width: '4px',
    height: '4px',
    backgroundColor: '#0D3253',
    ...shorthands.borderRadius('50%'),
  },

  highlight: {
    color: '#1A202C',
    fontWeight: 600,
  },
});

const items = [
  { text: '140+ Engineers', highlight: true },
  { text: 'Healthcare Compliance DNA', highlight: false },
  { text: '50+ Agent Blueprints', highlight: true },
  { text: 'Fixed Price Model', highlight: false },
  { text: '2-4 Week Delivery', highlight: true },
  { text: 'Production Ready', highlight: false },
  { text: 'Your Infrastructure', highlight: true },
  { text: 'No Lock-in', highlight: false },
];

export function Marquee() {
  const styles = useStyles();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className={styles.section}>
      <div className={styles.label}>Trusted by Enterprise Teams</div>

      <div className={styles.marqueeWrapper}>
        <motion.div
          className={styles.marqueeContent}
          animate={prefersReducedMotion ? {} : { x: [0, -1600] }}
          transition={
            prefersReducedMotion
              ? {}
              : {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.dot} />
              <span className={item.highlight ? styles.highlight : ''}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
