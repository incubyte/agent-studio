import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import {
  PeopleTeamRegular,
  ShieldCheckmarkRegular,
  CodeRegular,
  SparkleRegular,
  GlobeRegular,
  ArrowTrendingRegular,
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#F8F9FA',
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
    color: '#0D3253',
    marginBottom: '16px',
  },

  title: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#1A202C',
    marginBottom: '16px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '20px',
    color: '#4A5568',
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
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  card: {
    backgroundColor: 'rgba(226, 232, 240, 0.3)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(226, 232, 240, 0.5)',
      ...shorthands.borderColor('rgba(203, 213, 224, 0.7)'),
    },
  },

  iconWrapper: {
    width: '56px',
    height: '56px',
    backgroundColor: 'rgba(13, 50, 83, 0.12)',
    ...shorthands.borderRadius('12px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    color: '#0D3253',
    fontSize: '32px',
  },
  
  cardTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1A202C',
    marginBottom: '12px',
    lineHeight: 1.3,
  },

  cardDescription: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#4A5568',
    fontWeight: 400,
  },
  
  comparisonSection: {
    marginTop: '80px',
  },

  comparisonHeader: {
    textAlign: 'center',
    marginBottom: '48px',
  },

  comparisonTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#1A202C',
    marginBottom: '16px',
    lineHeight: 1.2,
  },

  comparisonSubtitle: {
    fontSize: '18px',
    color: '#4A5568',
    fontWeight: 400,
  },

  comparisonTable: {
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
  },

  comparisonRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
    ':last-child': {
      borderBottom: 'none',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1.5fr 1fr 1fr',
    },
  },

  comparisonCell: {
    ...shorthands.padding('20px', '24px'),
    fontSize: '15px',
    lineHeight: 1.5,
    '@media (max-width: 768px)': {
      ...shorthands.padding('16px', '16px'),
      fontSize: '14px',
    },
  },

  cellFeature: {
    color: '#4A5568',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    fontWeight: 500,
  },

  cellOthers: {
    color: '#EF4444',
    textAlign: 'center',
    fontWeight: 500,
  },

  cellUs: {
    color: '#2DD4BF',
    textAlign: 'center',
    backgroundColor: 'rgba(45, 212, 191, 0.05)',
    fontWeight: 600,
  },

  stats: {
    marginTop: '64px',
    display: 'flex',
    justifyContent: 'center',
    ...shorthands.gap('64px'),
    flexWrap: 'wrap',
    ...shorthands.padding('32px'),
    backgroundColor: 'rgba(226, 232, 240, 0.3)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
  },

  stat: {
    textAlign: 'center',
  },

  statNumber: {
    fontSize: '48px',
    fontWeight: 700,
    color: '#1A202C',
    lineHeight: 1,
  },

  statLabel: {
    fontSize: '14px',
    color: '#4A5568',
    marginTop: '8px',
    fontWeight: 400,
  },
});

const differentiators = [
  {
    icon: <PeopleTeamRegular />,
    title: '140+ Engineers',
    description: 'Deep expertise in AI, software architecture, and regulated industries.',
  },
  {
    icon: <ShieldCheckmarkRegular />,
    title: 'Healthcare & Compliance DNA',
    description: 'HIPAA, SOX, SOC 2 experience built in. We understand regulated environments.',
  },
  {
    icon: <CodeRegular />,
    title: 'Software Craftsmanship',
    description: 'TDD, pair programming, CI/CD. Quality isn\'t negotiable — it\'s how we work.',
  },
  {
    icon: <SparkleRegular />,
    title: 'AI-Native Since 2023',
    description: 'Production AI systems, not experiments. Battle-tested patterns that work.',
  },
  {
    icon: <GlobeRegular />,
    title: 'Global Team, US Standards',
    description: 'Timezone-flexible delivery with US-quality communication and engineering practices.',
  },
  {
    icon: <ArrowTrendingRegular />,
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

const comparisons = [
  { feature: 'Pricing Model', others: 'T&M, scope creep', us: 'Fixed price, upfront' },
  { feature: 'Delivery Timeline', others: '3-6 months', us: '2-4 weeks' },
  { feature: 'Code Ownership', others: 'Locked in, no access', us: 'Full source code' },
  { feature: 'Infrastructure', others: 'Their cloud only', us: 'Your infra, your choice' },
  { feature: 'Compliance Ready', others: 'Extra cost, delays', us: 'Built-in (HIPAA, SOC 2)' },
  { feature: 'Support After Launch', others: 'Pay per incident', us: '30-day warranty included' },
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
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
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
              <div className={styles.statNumber}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className={styles.comparisonSection}>
          <motion.div
            className={styles.comparisonHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.comparisonTitle}>How We're Different</h3>
            <p className={styles.comparisonSubtitle}>
              Clear advantages that matter for enterprise AI deployment
            </p>
          </motion.div>

          <motion.div
            className={styles.comparisonTable}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className={styles.comparisonRow}>
              <div className={`${styles.comparisonCell} ${styles.cellFeature}`}>
                <strong>Feature</strong>
              </div>
              <div className={`${styles.comparisonCell} ${styles.cellOthers}`}>
                <strong>Others</strong>
              </div>
              <div className={`${styles.comparisonCell} ${styles.cellUs}`}>
                <strong>Us</strong>
              </div>
            </div>

            {comparisons.map((comparison, index) => (
              <motion.div
                key={comparison.feature}
                className={styles.comparisonRow}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <div className={`${styles.comparisonCell} ${styles.cellFeature}`}>
                  {comparison.feature}
                </div>
                <div className={`${styles.comparisonCell} ${styles.cellOthers}`}>
                  {comparison.others}
                </div>
                <div className={`${styles.comparisonCell} ${styles.cellUs}`}>
                  {comparison.us}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
