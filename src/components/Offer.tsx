import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#111827',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '24px'),
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
    backgroundColor: 'rgba(224, 122, 58, 0.1)',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('2px', 'solid', '#E07A3A'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    fontWeight: 700,
    color: '#E07A3A',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
  },
  
  stepTitle: {
    fontSize: '22px',
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

  stepHighlight: {
    color: '#E07A3A',
    fontWeight: 600,
  },
  
  banner: {
    backgroundColor: 'rgba(224, 122, 58, 0.08)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('40px'),
    textAlign: 'center',
    ...shorthands.border('1px', 'solid', 'rgba(224, 122, 58, 0.3)'),
  },

  bannerText: {
    fontSize: '20px',
    color: '#F1F5F9',
    fontWeight: 600,
    marginBottom: '8px',
    lineHeight: 1.3,
  },

  bannerSubtext: {
    fontSize: '16px',
    color: '#94A3B8',
    fontWeight: 400,
    lineHeight: 1.6,
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
