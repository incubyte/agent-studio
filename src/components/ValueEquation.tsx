import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#0D3253',
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
  
  stepsWrapper: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    ...shorthands.gap('32px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      ...shorthands.gap('48px'),
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('40px'),
    },
  },

  connector: {
    position: 'absolute',
    top: '20px',
    left: 'calc(12.5% + 20px)',
    right: 'calc(12.5% + 20px)',
    height: '1px',
    backgroundColor: 'rgba(203, 213, 224, 0.6)',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },

  step: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },

  stepNumber: {
    width: '40px',
    height: '40px',
    ...shorthands.border('2px', 'solid', 'rgba(203, 213, 224, 0.9)'),
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '16px',
    color: '#F1F5F9',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '24px',
    backgroundColor: '#0D3253',
  },

  stepNumberActive: {
    ...shorthands.border('2px', 'solid', '#E07A3A'),
    color: '#E07A3A',
  },

  stepTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '12px',
    lineHeight: 1.3,
  },

  stepDescription: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '#94A3B8',
  },
});

const steps = [
  {
    title: 'What You Get',
    description: 'Production-ready agents on your infrastructure. Full ownership. No lock-in.',
  },
  {
    title: 'Why It Works',
    description: '140+ engineers. Healthcare/compliance DNA. Battle-tested patterns.',
  },
  {
    title: 'Speed to Value',
    description: 'Weeks, not months. 2-4 week delivery for most agents.',
  },
  {
    title: 'Your Investment',
    description: 'We deploy to your infra. Fixed price. Minimal effort required from your team.',
  },
];

export function ValueEquation() {
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
          <p className={styles.label}>The Value Equation</p>
          <h2 className={styles.title}>How We Maximize Your Value</h2>
        </motion.div>

        <motion.div
          className={styles.stepsWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.connector} />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`${styles.stepNumber} ${index === 0 ? styles.stepNumberActive : ''}`}>
                {index + 1}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
