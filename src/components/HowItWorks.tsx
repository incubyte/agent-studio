import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#0F172A',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '24px'),
    },
  },

  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },

  label: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#E07A3A',
    marginBottom: '16px',
  },
  
  title: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: '16px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '20px',
    color: '#94A3B8',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
    fontWeight: 400,
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
    top: '32px',
    left: 'calc(16.67% + 32px)',
    right: 'calc(16.67% + 32px)',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  
  step: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.12)'),
    },
  },
  
  stepNumber: {
    width: '64px',
    height: '64px',
    ...shorthands.border('2px', 'solid', '#E07A3A'),
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 700,
    color: '#E07A3A',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
    backgroundColor: '#0F172A',
  },
  
  stepIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  
  stepTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '12px',
    lineHeight: 1.3,
  },

  stepDescription: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#94A3B8',
    fontWeight: 400,
  },
  
  footer: {
    textAlign: 'center',
    marginTop: '64px',
  },

  footerBanner: {
    display: 'inline-block',
    backgroundColor: 'rgba(224, 122, 58, 0.08)',
    ...shorthands.padding('20px', '40px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(224, 122, 58, 0.3)'),
  },

  footerText: {
    fontSize: '16px',
    fontWeight: 400,
    color: '#94A3B8',
    lineHeight: 1.6,
  },

  footerAccent: {
    color: '#E07A3A',
    fontWeight: 600,
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
