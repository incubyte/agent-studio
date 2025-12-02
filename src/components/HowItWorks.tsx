import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('100px', '24px'),
    backgroundColor: '#0f0f1a',
  },
  
  container: {
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  header: {
    textAlign: 'center',
    marginBottom: '64px',
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
    fontSize: '48px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '16px',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  
  subtitle: {
    fontSize: '20px',
    color: '#a0a0b0',
  },
  
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('32px'),
    position: 'relative',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('24px'),
    },
  },
  
  connector: {
    position: 'absolute',
    top: '80px',
    left: '25%',
    right: '25%',
    height: '4px',
    background: 'linear-gradient(90deg, #ff6b35 0%, #ff8555 50%, #ff6b35 100%)',
    ...shorthands.borderRadius('2px'),
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  
  step: {
    backgroundColor: '#1a1a2e',
    ...shorthands.borderRadius('20px'),
    ...shorthands.padding('32px'),
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(255, 107, 53, 0.15)',
    },
  },
  
  stepNumber: {
    width: '64px',
    height: '64px',
    backgroundColor: '#ff6b35',
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 700,
    color: '#ffffff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
  },
  
  stepIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  
  stepTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '12px',
  },
  
  stepDescription: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#a0a0b0',
  },
  
  footer: {
    textAlign: 'center',
    marginTop: '64px',
  },
  
  footerBanner: {
    display: 'inline-block',
    backgroundColor: '#242444',
    ...shorthands.padding('20px', '40px'),
    ...shorthands.borderRadius('12px'),
    ...shorthands.border('2px', 'solid', '#ff6b35'),
  },
  
  footerText: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#ffffff',
  },
  
  footerAccent: {
    color: '#ff6b35',
  },
});

const steps = [
  {
    number: 1,
    icon: '🚗',
    title: 'Pick Your Model',
    description: 'Choose from our catalog of 50+ agent blueprints. Each base agent starts at just $4,000.',
  },
  {
    number: 2,
    icon: '🔧',
    title: 'Add Your Options',
    description: 'Connect to your systems. Simple integrations are free. Complex ones priced clearly upfront.',
  },
  {
    number: 3,
    icon: '🛣️',
    title: 'Drive on Your Roads',
    description: 'Deployed to your infrastructure, using your LLMs. You own everything. No lock-in.',
  },
];

export function HowItWorks() {
  const styles = useStyles();
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.label}>How It Works</p>
          <h2 className={styles.title}>Like Renting a Car — But for AI Agents</h2>
          <p className={styles.subtitle}>
            Simple, predictable, and you drive away with something that works
          </p>
        </motion.div>
        
        <div className={styles.steps}>
          <div className={styles.connector} />
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className={styles.footerBanner}>
            <p className={styles.footerText}>
              <span className={styles.footerAccent}>Predictable pricing.</span> Know exactly what you're paying before we start.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
