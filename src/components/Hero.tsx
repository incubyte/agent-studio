import { useState, useEffect } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

const useStyles = makeStyles({
  hero: {
    minHeight: '108vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    ...shorthands.padding('40px', '48px'),
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/orbs.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    pointerEvents: 'none',
    '::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(26, 31, 58, 0.75) 0%, rgba(15, 15, 26, 0.85) 100%)',
    },
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 30% 20%, rgba(0, 212, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(255, 140, 66, 0.12) 0%, transparent 50%)',
    pointerEvents: 'none',
    zIndex: 1,
  },

  backgroundBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.08) 100%)',
    pointerEvents: 'none',
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    width: '100%',
  },

  heroContent: {
    textAlign: 'center',
  },

  announcement: {
    display: 'inline-flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    ...shorthands.padding('10px', '24px'),
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    ...shorthands.borderRadius('24px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
    marginBottom: '32px',
    fontSize: '14px',
    color: '#a0a0b0',
  },

  announcementDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#4caf50',
    ...shorthands.borderRadius('50%'),
    boxShadow: '0 0 10px rgba(76, 175, 80, 0.6)',
  },

  badge: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: '#ff6b35',
    marginBottom: '24px',
    ...shorthands.padding('8px', '16px'),
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    ...shorthands.borderRadius('4px'),
  },

  title: {
    fontSize: '84px',
    fontWeight: 900,
    lineHeight: 0.95,
    letterSpacing: '-0.02em',
    marginBottom: '24px',
    color: '#ffffff',
    '@media (max-width: 768px)': {
      fontSize: '56px',
      ...shorthands.padding('0', '16px'),
    },
  },

  titleRotating: {
    display: 'inline-block',
    color: '#ff6b35',
    minWidth: '400px',
    '@media (max-width: 768px)': {
      minWidth: '280px',
    },
  },
  
  subtitle: {
    fontSize: '24px',
    lineHeight: 1.7,
    color: '#a0a0b0',
    marginBottom: '48px',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  accentBar: {
    width: '80px',
    height: '4px',
    backgroundColor: '#ff6b35',
    ...shorthands.borderRadius('2px'),
    marginBottom: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  cta: {
    display: 'flex',
    ...shorthands.gap('16px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  button: {
    backgroundColor: '#ff6b35',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '20px',
    ...shorthands.padding('20px', '40px'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4), 0 0 50px rgba(255, 107, 53, 0.2), 0 0 100px rgba(255, 107, 53, 0.1)',
    ':hover': {
      backgroundColor: '#ff8555',
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 30px rgba(255, 107, 53, 0.6), 0 0 70px rgba(255, 107, 53, 0.3), 0 0 120px rgba(255, 107, 53, 0.15)',
    },
    ':focus-visible': {
      outline: '2px solid #ff6b35',
      outlineOffset: '2px',
    },
  },

  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#ff6b35',
    fontWeight: 600,
    fontSize: '18px',
    ...shorthands.padding('18px', '36px'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.border('2px', 'solid', '#ff6b35'),
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      backgroundColor: 'rgba(255, 107, 53, 0.1)',
      transform: 'translateY(-2px)',
    },
    ':focus-visible': {
      outline: '2px solid #ff6b35',
      outlineOffset: '2px',
    },
  },
  
  stats: {
    display: 'flex',
    ...shorthands.gap('48px'),
    justifyContent: 'center',
    marginTop: '80px',
    flexWrap: 'wrap',
  },

  stat: {
    textAlign: 'center',
  },

  statValue: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#ff6b35',
  },

  statLabel: {
    fontSize: '14px',
    color: '#707080',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

});

const rotatingValues = [
  'Your Infrastructure',
  'Fixed Price',
  'No Lock-in',
  '2-4 Weeks'
];

export function Hero() {
  const styles = useStyles();
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % rotatingValues.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage} />
      <div className={styles.background} />
      <div className={styles.backgroundBottom} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        style={prefersReducedMotion ? {} : { opacity, scale }}
      >
        <div className={styles.heroContent}>
          <motion.div
            className={styles.announcement}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.1, duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            <div className={styles.announcementDot} />
            <span>Serving 140+ enterprise clients worldwide</span>
          </motion.div>

          <motion.span
            className={styles.badge}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            Incubyte Agent Studio
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.3, duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            AI Agents.<br />
            <span className={styles.titleRotating}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentValueIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
                >
                  {rotatingValues[currentValueIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <div className={styles.accentBar} />

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
          >
            Production-ready AI agents deployed to your infrastructure in weeks, not months.
            Predictable pricing. Full ownership. No lock-in.
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.7 }}
          >
            <MagneticButton className={styles.button}>
              Build Your Agent →
            </MagneticButton>
            <MagneticButton className={styles.buttonSecondary}>
              See Pricing
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 1 }}
          >
            <div className={styles.stat}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Agent Blueprints</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>$4K</div>
              <div className={styles.statLabel}>Starting Price</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>2-4</div>
              <div className={styles.statLabel}>Weeks Delivery</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>140+</div>
              <div className={styles.statLabel}>Engineers</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
