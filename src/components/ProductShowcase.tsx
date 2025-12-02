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

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('40px'),
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.gap('32px'),
    },
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('24px'),
  },

  demoContainer: {
    background: 'linear-gradient(180deg, #111827 0%, #0B1120 100%)',
    ...shorthands.padding('80px', '40px'),
    ...shorthands.borderRadius('16px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.05)'),
    '@media (max-width: 768px)': {
      ...shorthands.padding('40px', '24px'),
    },
  },

  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/10',
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-4px)',
    },
  },

  mockupPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.gap('16px'),
    ...shorthands.padding('48px', '32px'),
    background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
  },

  placeholderIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: 'rgba(224, 122, 58, 0.15)',
    ...shorthands.borderRadius('12px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E07A3A',
    fontSize: '32px',
  },

  placeholderText: {
    fontSize: '14px',
    color: '#64748B',
    textAlign: 'center',
    fontWeight: 400,
  },

  mockupImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  cardContent: {
    textAlign: 'center',
  },

  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '8px',
  },

  cardDescription: {
    fontSize: '16px',
    color: '#94A3B8',
    lineHeight: 1.6,
  },

  // Tab/Toggle styling for future use
  demoTabs: {
    display: 'flex',
    ...shorthands.gap('8px'),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    ...shorthands.padding('4px'),
    ...shorthands.borderRadius('8px'),
    marginBottom: '24px',
  },

  demoTab: {
    ...shorthands.padding('8px', '16px'),
    ...shorthands.borderRadius('6px'),
    fontSize: '14px',
    color: '#94A3B8',
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'background 0.2s ease, color 0.2s ease',
    fontWeight: 500,
    ':hover': {
      color: '#F1F5F9',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
  },

  demoTabActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#F1F5F9',
  },

  // Optional browser chrome frame for context
  browserChrome: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('12px', '12px', '0', '0'),
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.borderBottom('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
  },

  chromeDots: {
    display: 'flex',
    ...shorthands.gap('6px'),
  },

  chromeDot: {
    width: '10px',
    height: '10px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },

  chromeAddress: {
    flex: 1,
    marginLeft: '12px',
    ...shorthands.padding('4px', '12px'),
    ...shorthands.borderRadius('4px'),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontSize: '12px',
    color: '#64748B',
    fontWeight: 400,
  },
});

const showcaseItems = [
  {
    title: 'Intuitive Dashboard',
    description: 'Monitor agent performance, track metrics, and manage deployments in real-time',
    icon: '📊',
    mockup: '/screenshots/dashboard-mockup.svg',
  },
  {
    title: 'Simple Integrations',
    description: 'Connect to your existing tools and systems with pre-built integrations',
    icon: '🔌',
    mockup: '/screenshots/integration-mockup.svg',
  },
  {
    title: 'Detailed Analytics',
    description: 'Track ROI, efficiency gains, and business impact with comprehensive reporting',
    icon: '📈',
    mockup: '/screenshots/analytics-mockup.svg',
  },
];

export function ProductShowcase() {
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
          <p className={styles.label}>Product Overview</p>
          <h2 className={styles.title}>See Your Agent in Action</h2>
          <p className={styles.subtitle}>
            Professional-grade tools designed for enterprise teams. Deploy, monitor, and optimize your AI agents with confidence.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.demoContainer}>
                <div className={styles.imageWrapper}>
                  {item.mockup ? (
                    <img
                      src={item.mockup}
                      alt={item.title}
                      className={styles.mockupImage}
                    />
                  ) : (
                    <div className={styles.mockupPlaceholder}>
                      <div className={styles.placeholderIcon}>
                        {item.icon}
                      </div>
                      <div className={styles.placeholderText}>
                        Product screenshot coming soon
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
