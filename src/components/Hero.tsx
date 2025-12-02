import { useState, useEffect } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

const useStyles = makeStyles({
  hero: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    ...shorthands.padding('80px', '32px', '120px', '32px'),
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0A0D14',
    '@media (max-width: 768px)': {
      ...shorthands.padding('72px', '24px', '80px', '24px'),
    },
  },

  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(17, 24, 39, 1) 0%, rgba(10, 13, 20, 1) 100%)',
    pointerEvents: 'none',
  },

  gridPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
    backgroundSize: '48px 48px',
    pointerEvents: 'none',
  },

  heroVisual: {
    position: 'absolute',
    bottom: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '120%',
    maxWidth: '1400px',
    height: '60%',
    backgroundImage: 'url(/orbs.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    opacity: 0.4,
    pointerEvents: 'none',
    '::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(10, 13, 20, 0.9) 0%, rgba(10, 13, 20, 1) 100%)',
    },
  },

  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    width: '100%',
  },

  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('20px', '32px'),
    backgroundColor: 'rgba(10, 13, 20, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    '@media (max-width: 768px)': {
      ...shorthands.padding('16px', '24px'),
    },
  },

  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  logo: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#F1F5F9',
    letterSpacing: '-0.01em',
  },

  navLinks: {
    display: 'flex',
    ...shorthands.gap('32px'),
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },

  navLink: {
    fontSize: '14px',
    color: '#94A3B8',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#F1F5F9',
    },
  },

  heroContent: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },


  title: {
    fontSize: '72px',
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: '-0.02em',
    marginBottom: '24px',
    color: '#F1F5F9',
    '@media (max-width: 768px)': {
      fontSize: '48px',
      ...shorthands.padding('0', '16px'),
    },
  },

  titleRotating: {
    display: 'inline-block',
    color: '#E07A3A',
    minWidth: '400px',
    '@media (max-width: 768px)': {
      minWidth: '280px',
    },
  },

  subtitle: {
    fontSize: '24px',
    lineHeight: 1.5,
    color: '#94A3B8',
    marginBottom: '48px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 400,
  },

  cta: {
    display: 'flex',
    ...shorthands.gap('16px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  button: {
    backgroundColor: '#E07A3A',
    color: '#0B1120',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px rgba(224, 122, 58, 0.25)',
    ':hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(224, 122, 58, 0.3)',
    },
    ':focus-visible': {
      outline: '2px solid #E07A3A',
      outlineOffset: '2px',
    },
  },

  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#F1F5F9',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.2)'),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.3)'),
      transform: 'scale(1.02)',
    },
    ':focus-visible': {
      outline: '2px solid #F1F5F9',
      outlineOffset: '2px',
    },
  },
  
  trustIndicators: {
    display: 'flex',
    ...shorthands.gap('48px'),
    justifyContent: 'center',
    marginTop: '64px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  stat: {
    textAlign: 'center',
    opacity: 0.7,
  },

  statValue: {
    fontSize: '32px',
    fontWeight: 600,
    color: '#F1F5F9',
    lineHeight: 1,
  },

  statLabel: {
    fontSize: '12px',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '4px',
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
      <div className={styles.backgroundGradient} />
      <div className={styles.gridPattern} />
      <div className={styles.heroVisual} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Agent Studio</div>
          <div className={styles.navLinks}>
            <a href="#catalog" className={styles.navLink}>Catalog</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#about" className={styles.navLink}>About</a>
          </div>
        </div>
      </nav>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
        style={prefersReducedMotion ? {} : { opacity, scale }}
      >
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.1, duration: prefersReducedMotion ? 0 : 0.6 }}
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

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
          >
            Production-ready AI agents deployed to your infrastructure in weeks, not months.
            Predictable pricing. Full ownership. No lock-in.
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
          >
            <MagneticButton className={styles.button}>
              Build Your Agent →
            </MagneticButton>
            <MagneticButton className={styles.buttonSecondary}>
              See Pricing
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.trustIndicators}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
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
