import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('100px', '24px'),
    backgroundColor: '#1a1a2e',
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
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('24px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  card: {
    backgroundColor: '#0f0f1a',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('28px'),
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
    },
  },
  
  iconWrapper: {
    width: '56px',
    height: '56px',
    backgroundColor: 'rgba(255, 107, 53, 0.15)',
    ...shorthands.borderRadius('12px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    fontSize: '28px',
  },
  
  cardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '10px',
  },
  
  cardDescription: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#a0a0b0',
  },
  
  stats: {
    marginTop: '64px',
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.gap('64px'),
    flexWrap: 'wrap',
    ...shorthands.padding('32px'),
    backgroundColor: '#0f0f1a',
    ...shorthands.borderRadius('16px'),
  },
  
  stat: {
    textAlign: 'center',
  },
  
  statValue: {
    fontSize: '42px',
    fontWeight: 800,
    color: '#ff6b35',
  },
  
  statLabel: {
    fontSize: '14px',
    color: '#707080',
    marginTop: '4px',
  },
});

const differentiators = [
  {
    icon: '👥',
    title: '140+ Engineers',
    description: 'Deep expertise in AI, software architecture, and regulated industries.',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Compliance DNA',
    description: 'HIPAA, SOX, SOC 2 experience built in. We understand regulated environments.',
  },
  {
    icon: '⚡',
    title: 'Software Craftsmanship',
    description: 'TDD, pair programming, CI/CD. Quality isn\'t negotiable — it\'s how we work.',
  },
  {
    icon: '🤖',
    title: 'AI-Native Since 2023',
    description: 'Production AI systems, not experiments. Battle-tested patterns that work.',
  },
  {
    icon: '🌍',
    title: 'Global Team, US Standards',
    description: 'Timezone-flexible delivery with US-quality communication and engineering practices.',
  },
  {
    icon: '📈',
    title: 'Scale When Ready',
    description: 'Start with one agent. Add more as you see results. No long-term commitments.',
  },
];

const stats = [
  { value: '140+', label: 'Engineers' },
  { value: '50+', label: 'Agent Blueprints' },
  { value: '2-4', label: 'Week Delivery' },
  { value: '15+', label: 'Industries Served' },
];

export function WhyIncubyte() {
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
          <p className={styles.label}>Why Incubyte</p>
          <h2 className={styles.title}>Not Just Another AI Vendor</h2>
          <p className={styles.subtitle}>
            We're software craftspeople who happen to be great at AI. 
            That's a rare combination.
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {differentiators.map((item, index) => (
            <motion.div 
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
