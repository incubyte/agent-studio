import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('100px', '24px'),
    backgroundColor: '#0f0f1a',
  },
  
  container: {
    maxWidth: '1000px',
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
    fontSize: '18px',
    color: '#a0a0b0',
  },
  
  timeline: {
    position: 'relative',
    ...shorthands.padding('0', '0', '0', '48px'),
    '@media (max-width: 600px)': {
      ...shorthands.padding('0', '0', '0', '32px'),
    },
  },
  
  line: {
    position: 'absolute',
    left: '12px',
    top: '0',
    bottom: '0',
    width: '4px',
    background: 'linear-gradient(180deg, #ff6b35 0%, #7209b7 50%, #4361ee 100%)',
    ...shorthands.borderRadius('2px'),
  },
  
  step: {
    position: 'relative',
    marginBottom: '40px',
    ':last-child': {
      marginBottom: 0,
    },
  },
  
  stepDot: {
    position: 'absolute',
    left: '-44px',
    top: '4px',
    width: '24px',
    height: '24px',
    backgroundColor: '#ff6b35',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('4px', 'solid', '#0f0f1a'),
    '@media (max-width: 600px)': {
      left: '-28px',
      width: '20px',
      height: '20px',
    },
  },
  
  stepContent: {
    backgroundColor: '#1a1a2e',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('24px', '28px'),
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateX(8px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
  },
  
  stepHeader: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
    marginBottom: '12px',
    flexWrap: 'wrap',
  },
  
  stepWeek: {
    backgroundColor: '#ff6b35',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 700,
    ...shorthands.padding('6px', '12px'),
    ...shorthands.borderRadius('4px'),
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  stepTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#ffffff',
  },
  
  stepDescription: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#a0a0b0',
  },
  
  footer: {
    textAlign: 'center',
    marginTop: '48px',
    fontSize: '16px',
    color: '#707080',
  },
  
  footerHighlight: {
    color: '#ff6b35',
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
          <div className={styles.line} />
          
          {timelineSteps.map((step, index) => (
            <motion.div 
              key={step.week}
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.stepDot} style={{
                backgroundColor: index === timelineSteps.length - 1 ? '#4361ee' : '#ff6b35',
              }} />
              <div className={styles.stepContent}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepWeek} style={{
                    backgroundColor: index === timelineSteps.length - 1 ? '#4361ee' : '#ff6b35',
                  }}>{step.week}</span>
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
