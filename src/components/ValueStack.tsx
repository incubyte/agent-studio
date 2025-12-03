import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import {
  CheckmarkCircleFilled,
  ShieldCheckmarkFilled,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#0f0f1a', // Dark background
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
    color: '#ff6b35',
    marginBottom: '16px',
  },

  title: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '20px',
    color: '#94a3b8',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
    fontWeight: 400,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('16px'),
    marginBottom: '48px',
    '@media (max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },

  featureItem: {
    display: 'flex',
    ...shorthands.gap('16px'),
    alignItems: 'flex-start',
    ...shorthands.padding('24px'),
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.05)'),
    transitionProperty: 'border-color, background-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      ...shorthands.borderColor('rgba(255, 107, 53, 0.3)'),
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
    },
  },

  featureCheck: {
    width: '24px',
    height: '24px',
    backgroundColor: 'rgba(45, 212, 191, 0.1)',
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  checkIcon: {
    color: '#2DD4BF',
    fontSize: '14px',
  },

  featureContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('6px'),
  },

  featureTitle: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
    lineHeight: 1.3,
  },

  featureDescription: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#94a3b8',
    fontWeight: 400,
  },

  highlightedBox: {
    backgroundColor: 'rgba(45, 212, 191, 0.05)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('24px'),
    ...shorthands.border('1px', 'solid', 'rgba(45, 212, 191, 0.2)'),
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      textAlign: 'center',
      ...shorthands.gap('16px'),
    },
  },

  highlightedIcon: {
    width: '56px',
    height: '56px',
    backgroundColor: 'rgba(45, 212, 191, 0.15)',
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#2DD4BF',
    fontSize: '28px',
  },

  highlightedContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('8px'),
  },

  highlightedTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#2DD4BF',
    lineHeight: 1.3,
  },

  highlightedText: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#94a3b8',
    fontWeight: 400,
  },
});

const valueItems = [
  {
    title: 'Working Agent Deployed',
    description: 'Not a POC. Not a demo. A production-ready agent running in your environment.',
  },
  {
    title: 'Your Infrastructure',
    description: 'AWS, Azure, GCP, or on-prem. Deployed where your data lives.',
  },
  {
    title: 'Full Source Code',
    description: 'Complete ownership. Fork it, modify it, extend it. No lock-in.',
  },
  {
    title: 'Documentation',
    description: 'Comprehensive docs for your team to maintain and extend.',
  },
  {
    title: 'Training Session',
    description: 'Hands-on training for your team on agent management.',
  },
  {
    title: 'Prompt Engineering',
    description: 'Optimized prompts tuned for your specific use case.',
  },
  {
    title: 'Calibration Phase',
    description: 'Testing with your real data and edge cases.',
  },
  {
    title: '30-Day Warranty',
    description: 'Bug fixes included. We stand behind our work.',
  },
];

export function ValueStack() {
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
          <p className={styles.label}>What's Included</p>
          <h2 className={styles.title}>Everything You Need to Succeed</h2>
          <p className={styles.subtitle}>
            From deployment to documentation, we provide comprehensive support for your AI agent implementation
          </p>
        </motion.div>

        <div className={styles.grid}>
          {valueItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.featureItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className={styles.featureCheck}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.highlightedBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.highlightedIcon}>
            <ShieldCheckmarkFilled />
          </div>
          <div className={styles.highlightedContent}>
            <h3 className={styles.highlightedTitle}>Risk Reversal Guarantee</h3>
            <p className={styles.highlightedText}>
              If we find it's not a fit during discovery, we'll tell you. No pressure to proceed.
              We'd rather lose a deal than deliver something that doesn't solve your problem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
