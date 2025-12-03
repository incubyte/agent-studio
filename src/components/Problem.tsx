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
    backgroundColor: '#0f0f1a', // Dark background
    backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255, 107, 53, 0.05) 0%, transparent 40%)',
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
    color: '#ff6b35', // Brand orange
    marginBottom: '16px',
  },

  title: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#ffffff', // White text
    marginBottom: '16px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '20px',
    color: '#94a3b8', // Muted text
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
    backgroundColor: 'rgba(26, 26, 46, 0.6)', // Glass background
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    transitionProperty: 'transform, border-color, box-shadow',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
    minHeight: '280px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    ':hover': {
      transform: 'translateY(-4px)',
      ...shorthands.borderColor('rgba(255, 107, 53, 0.5)'),
      boxShadow: '0 10px 40px -10px rgba(255, 107, 53, 0.2)',
    },
  },

  iconWrapper: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    color: '#ff6b35',
    fontSize: '32px',
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    ...shorthands.borderRadius('12px'),
  },

  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#FFFFFF',
    marginBottom: '16px',
    lineHeight: 1.3,
  },

  cardDescription: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.6,
    color: '#94a3b8',
  },

  footer: {
    textAlign: 'center',
    marginTop: '48px',
    fontSize: '18px',
    color: '#cbd5e1',
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
