import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { 
  CheckmarkCircleFilled,
  ShieldCheckmarkFilled,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#f5f5f7',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '32px'),
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
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ff6b35',
    marginBottom: '16px',
  },

  title: {
    fontSize: '56px',
    fontWeight: 700,
    color: '#303030',
    marginBottom: '16px',
    lineHeight: 1.1,
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('24px'),
    marginBottom: '48px',
    '@media (max-width: 700px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  card: {
    backgroundColor: '#ffffff',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('24px'),
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('16px'),
    ...shorthands.border('1px', 'solid', 'rgba(0, 0, 0, 0.08)'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      ...shorthands.borderColor('#ff6b35'),
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    },
  },
  
  iconWrapper: {
    width: '48px',
    height: '48px',
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    ...shorthands.borderRadius('12px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  
  checkIcon: {
    color: '#ff6b35',
    fontSize: '24px',
  },
  
  cardContent: {
    flexGrow: 1,
  },
  
  cardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#303030',
    marginBottom: '8px',
  },

  cardDescription: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#666666',
  },

  guarantee: {
    backgroundColor: '#ffffff',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('24px'),
    ...shorthands.border('2px', 'solid', '#4caf50'),
    boxShadow: '0 4px 16px rgba(76, 175, 80, 0.15)',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  
  guaranteeIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    ...shorthands.borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: '#4caf50',
    fontSize: '40px',
  },
  
  guaranteeContent: {
    flexGrow: 1,
  },
  
  guaranteeTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#4caf50',
    marginBottom: '8px',
  },
  
  guaranteeText: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#666666',
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
        </motion.div>
        
        <div className={styles.grid}>
          {valueItems.map((item, index) => (
            <motion.div 
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className={styles.iconWrapper}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.guarantee}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className={styles.guaranteeIcon}>
            <ShieldCheckmarkFilled />
          </div>
          <div className={styles.guaranteeContent}>
            <h3 className={styles.guaranteeTitle}>Risk Reversal Guarantee</h3>
            <p className={styles.guaranteeText}>
              If we find it's not a fit during discovery, we'll tell you. No pressure to proceed. 
              We'd rather lose a deal than deliver something that doesn't solve your problem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
