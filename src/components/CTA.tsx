import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#1a1a2e',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '32px'),
    },
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 107, 53, 0.3) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  
  container: {
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  
  label: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ff6b35',
    marginBottom: '16px',
  },
  
  title: {
    fontSize: '56px',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '24px',
    lineHeight: 1.1,
    '@media (max-width: 768px)': {
      fontSize: '40px',
    },
  },
  
  subtitle: {
    fontSize: '20px',
    color: '#a0a0b0',
    marginBottom: '48px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
  },
  
  cta: {
    display: 'flex',
    ...shorthands.gap('16px'),
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '48px',
  },
  
  button: {
    backgroundColor: '#ff6b35',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '18px',
    ...shorthands.padding('20px', '40px'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 0 0 rgba(255, 107, 53, 0)',
    ':hover': {
      backgroundColor: '#ff8555',
      transform: 'translateY(-3px)',
      boxShadow: '0 10px 40px rgba(255, 107, 53, 0.5)',
    },
    ':focus-visible': {
      outline: '2px solid #ff6b35',
      outlineOffset: '2px',
    },
  },

  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '18px',
    ...shorthands.padding('20px', '40px'),
    ...shorthands.borderRadius('6px'),
    ...shorthands.border('2px', 'solid', '#ffffff'),
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-3px)',
    },
    ':focus-visible': {
      outline: '2px solid #ffffff',
      outlineOffset: '2px',
    },
  },

  guarantee: {
    display: 'inline-flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    ...shorthands.padding('16px', '24px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(76, 175, 80, 0.3)'),
  },

  guaranteeBadge: {
    width: '6px',
    height: '6px',
    backgroundColor: '#4caf50',
    ...shorthands.borderRadius('50%'),
    boxShadow: '0 0 10px rgba(76, 175, 80, 0.6)',
  },
  
  guaranteeText: {
    fontSize: '15px',
    color: '#a0a0b0',
  },
  
  guaranteeHighlight: {
    color: '#4caf50',
    fontWeight: 600,
  },
});

export function CTA() {
  const styles = useStyles();
  
  return (
    <section className={styles.section}>
      <div className={styles.background} />
      
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.label}>Get Started</p>
          <h2 className={styles.title}>
            Ready to Ship AI<br />That Actually Works?
          </h2>
          <p className={styles.subtitle}>
            Book a 30-minute call to discuss your use case. We'll tell you honestly 
            if we're a good fit — and if not, we'll point you in the right direction.
          </p>
          
          <div className={styles.cta}>
            <MagneticButton className={styles.button}>
              Book a Call →
            </MagneticButton>
            <MagneticButton className={styles.buttonSecondary}>
              View Agent Catalog
            </MagneticButton>
          </div>
          
          <div className={styles.guarantee}>
            <div className={styles.guaranteeBadge} />
            <span className={styles.guaranteeText}>
              <span className={styles.guaranteeHighlight}>Risk-free discovery:</span> If we find it's not a fit, we'll tell you. No pressure to proceed.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
