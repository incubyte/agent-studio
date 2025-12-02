import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#1a1a2e',
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
    marginBottom: '48px',
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
  
  equation: {
    backgroundColor: '#242444',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('32px'),
    textAlign: 'center',
    marginBottom: '48px',
    fontSize: '24px',
    fontWeight: 600,
    color: '#ffffff',
    '@media (max-width: 768px)': {
      fontSize: '18px',
      ...shorthands.padding('24px', '16px'),
    },
  },
  
  equationAccent: {
    color: '#ff6b35',
  },
  
  equationMuted: {
    color: '#707080',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    ...shorthands.gap('20px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  card: {
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('24px'),
  },
  
  cardGreen: {
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    ...shorthands.border('1px', 'solid', 'rgba(76, 175, 80, 0.3)'),
  },
  
  cardBlue: {
    backgroundColor: 'rgba(33, 150, 243, 0.1)',
    ...shorthands.border('1px', 'solid', 'rgba(33, 150, 243, 0.3)'),
  },
  
  cardOrange: {
    backgroundColor: 'rgba(255, 152, 0, 0.1)',
    ...shorthands.border('1px', 'solid', 'rgba(255, 152, 0, 0.3)'),
  },
  
  cardPink: {
    backgroundColor: 'rgba(233, 30, 99, 0.1)',
    ...shorthands.border('1px', 'solid', 'rgba(233, 30, 99, 0.3)'),
  },
  
  arrow: {
    fontSize: '28px',
    marginBottom: '12px',
  },
  
  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '8px',
  },
  
  cardTitleGreen: {
    color: '#4caf50',
  },
  
  cardTitleBlue: {
    color: '#2196f3',
  },
  
  cardTitleOrange: {
    color: '#ff9800',
  },
  
  cardTitlePink: {
    color: '#e91e63',
  },
  
  cardDescription: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: '#a0a0b0',
  },
  
  footer: {
    textAlign: 'center',
    marginTop: '48px',
    fontSize: '14px',
    color: '#707080',
  },
});

const valueFactors = [
  {
    arrow: '↑',
    title: 'What You Get',
    description: 'Production-ready agents on your infrastructure. Full ownership. No lock-in.',
    colorClass: 'Green',
  },
  {
    arrow: '↑',
    title: 'Why It Works',
    description: '140+ engineers. Healthcare/compliance DNA. Battle-tested patterns.',
    colorClass: 'Blue',
  },
  {
    arrow: '↓',
    title: 'Speed to Value',
    description: 'Weeks, not months. 2-4 week delivery for most agents.',
    colorClass: 'Orange',
  },
  {
    arrow: '↓',
    title: 'Your Investment',
    description: 'We deploy to your infra. Fixed price. Minimal effort required from your team.',
    colorClass: 'Pink',
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
          className={styles.equation}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Value = <span className={styles.equationAccent}>(What You Get × Why It Works)</span>{' '}
          ÷ <span className={styles.equationMuted}>(Speed to Value × Your Investment)</span>
        </motion.div>
        
        <div className={styles.grid}>
          {valueFactors.map((factor, index) => (
            <motion.div 
              key={factor.title}
              className={`${styles.card} ${styles[`card${factor.colorClass}` as keyof typeof styles]}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.arrow}>{factor.arrow}</div>
              <h3 className={`${styles.cardTitle} ${styles[`cardTitle${factor.colorClass}` as keyof typeof styles]}`}>
                {factor.title}
              </h3>
              <p className={styles.cardDescription}>{factor.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
