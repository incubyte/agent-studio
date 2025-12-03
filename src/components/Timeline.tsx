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
  
  timeline: {
    position: 'relative',
    borderLeft: '2px solid rgba(203, 213, 224, 0.6)',
    ...shorthands.padding('0', '0', '0', '32px'),
    marginLeft: '8px',
  },

  step: {
    position: 'relative',
    paddingBottom: '48px',
    ':last-child': {
      paddingBottom: 0,
    },
  },

  stepNode: {
    position: 'absolute',
    left: '-38px',
    top: '4px',
    width: '16px',
    height: '16px',
    backgroundColor: '#111827',
    ...shorthands.border('2px', 'solid', '#E07A3A'),
    ...shorthands.borderRadius('50%'),
  },

  stepNodeCompleted: {
    backgroundColor: '#E07A3A',
  },
  
  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('8px'),
  },

  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    flexWrap: 'wrap',
  },

  stepWeek: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#E07A3A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  stepTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#F1F5F9',
    lineHeight: 1.3,
  },

  stepDescription: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#94A3B8',
    fontWeight: 400,
    maxWidth: '600px',
  },
  
  footer: {
    textAlign: 'center',
    marginTop: '64px',
    fontSize: '16px',
    color: '#94A3B8',
    lineHeight: 1.6,
    fontWeight: 400,
  },

  footerHighlight: {
    color: '#E07A3A',
    fontWeight: 600,
  },
});

const timelineSteps = [
  {
    week: 'Week 1',
    title: 'Discovery',
    description: 'Understand your requirements, map integrations, and define success criteria. We align on exactly what you\'re getting.',
  },
  {
    week: 'Week 2',
    title: 'Build',
    description: 'Agent development, prompt engineering, and integration setup. Working code, not slideshows.',
  },
  {
    week: 'Week 3',
    title: 'Calibrate',
    description: 'Testing with your team, response fine-tuning, and edge case handling. We iterate until it works for your context.',
  },
  {
    week: 'Week 4',
    title: 'Deploy',
    description: 'Production deployment to your infrastructure, full documentation, and training session for your team.',
  },
  {
    week: '+30 Days',
    title: 'Support',
    description: 'Bug fixes included in your 30-day warranty. Optional ongoing support available at transparent rates.',
  },
];

export function Timeline() {
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
          <p className={styles.label}>Delivery Timeline</p>
          <h2 className={styles.title}>From Kickoff to Production</h2>
          <p className={styles.subtitle}>
            Weeks, not months. Here's how we get you to working software fast.
          </p>
        </motion.div>
        
        <div className={styles.timeline}>
          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.week}
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`${styles.stepNode} ${
                  index < 3 ? styles.stepNodeCompleted : ''
                }`}
              />
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepWeek}>{step.week}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          Typical timeline: <span className={styles.footerHighlight}>2-4 weeks</span> depending on complexity and integrations
        </motion.p>
      </div>
    </section>
  );
}
