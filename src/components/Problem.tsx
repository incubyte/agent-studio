import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { 
  ArrowSyncCircleRegular, 
  LockClosedRegular, 
  MoneyRegular 
} from '@fluentui/react-icons';

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
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('24px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('24px'),
    },
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    transition: 'background 0.2s ease, border-color 0.2s ease',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.12)',
    },
  },

  iconWrapper: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: '#E07A3A',
    fontSize: '32px',
  },

  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#FFFFFF',
    marginBottom: '24px',
    lineHeight: 1.3,
  },

  cardDescription: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '#94A3B8',
  },

  footer: {
    textAlign: 'center',
    marginTop: '48px',
    fontSize: '16px',
    color: '#666666',
    fontStyle: 'italic',
  },
});

const problems = [
  {
    icon: <ArrowSyncCircleRegular />,
    title: 'POC Purgatory',
    description: 'AI experiments never make it to production. Internal teams are stretched thin, learning on the job while competitors ship.',
  },
  {
    icon: <LockClosedRegular />,
    title: 'Compliance Blocks',
    description: 'SaaS AI tools can\'t touch your data. HIPAA, SOX, and security requirements kill promising solutions before they start.',
  },
  {
    icon: <MoneyRegular />,
    title: 'Unpredictable Costs',
    description: 'Every vendor says "it depends." T&M billing leads to scope creep, budget overruns, and painful conversations with finance.',
  },
];

export function Problem() {
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
          <p className={styles.label}>The Problem</p>
          <h2 className={styles.title}>Enterprise AI Projects Are Stuck</h2>
          <p className={styles.subtitle}>
            You've seen the demos. You know AI can transform your business. 
            But getting from POC to production feels impossible.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {problems.map((problem, index) => (
            <motion.div 
              key={problem.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.iconWrapper}>
                {problem.icon}
              </div>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          The result: AI initiatives stall, competitors move ahead, and teams lose confidence.
        </motion.p>
      </div>
    </section>
  );
}
