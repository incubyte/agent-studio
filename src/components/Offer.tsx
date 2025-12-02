import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#0f0f1a',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '32px'),
    },
  },

  container: {
    maxWidth: '1400px',
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
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('32px'),
    marginBottom: '48px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  step: {
    textAlign: 'center',
    position: 'relative',
  },
  
  stepNumber: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('2px', 'solid', '#ff6b35'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 700,
    color: '#ff6b35',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      top: '-8px',
      right: '-8px',
      bottom: '-8px',
      left: '-8px',
      ...shorthands.borderRadius('50%'),
      ...shorthands.border('1px', 'solid', 'rgba(255, 107, 53, 0.2)'),
    },
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
  
  stepHighlight: {
    color: '#ff6b35',
    fontWeight: 600,
  },
  
  banner: {
    backgroundColor: 'rgba(36, 36, 68, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('40px'),
    textAlign: 'center',
    ...shorthands.border('2px', 'solid', '#ff6b35'),
    position: 'relative',
    overflow: 'hidden',
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, transparent, #ff6b35, transparent)',
    },
  },

  bannerText: {
    fontSize: '20px',
    color: '#ffffff',
    fontWeight: 600,
    marginBottom: '8px',
  },

  bannerSubtext: {
    fontSize: '16px',
    color: '#a0a0b0',
  },
});

const steps = [
  {
    number: 1,
    title: 'Choose Your Agent',
    description: 'Select from our catalog of 50+ proven agent blueprints.',
    highlight: 'Starting at $4,000',
  },
  {
    number: 2,
    title: 'Connect Your Systems',
    description: 'Integrate with your existing tools and infrastructure.',
    highlight: 'Simple integrations: FREE',
  },
  {
    number: 3,
    title: 'Deploy to Production',
    description: 'Running on your infrastructure. Your LLMs. You own everything.',
    highlight: 'Full ownership',
  },
];

export function Offer() {
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
          <p className={styles.label}>The Offer</p>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>
            Three steps from kickoff to production agent
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>
                {step.description}<br />
                <span className={styles.stepHighlight}>{step.highlight}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.banner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className={styles.bannerText}>
            Predictable Pricing. Know exactly what you're paying before we start.
          </p>
          <p className={styles.bannerSubtext}>
            No surprises. No scope creep. No uncomfortable budget conversations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
