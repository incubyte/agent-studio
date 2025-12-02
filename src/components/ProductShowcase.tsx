import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#f5f5f7',
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
    marginBottom: '80px',
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

  subtitle: {
    fontSize: '18px',
    color: '#666666',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.7,
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

  imageWrapper: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/10',
    ...shorthands.borderRadius('16px'),
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
    boxShadow: '0 30px 90px rgba(0, 0, 0, 0.25), 0 10px 40px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1)',
    ...shorthands.border('1px', 'solid', 'rgba(0, 0, 0, 0.08)'),
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    ':hover': {
      transform: 'translateY(-12px) scale(1.02)',
      boxShadow: '0 50px 120px rgba(0, 0, 0, 0.35), 0 20px 60px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1)',
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
    ...shorthands.padding('32px'),
    background: 'linear-gradient(135deg, #1a1a2e 0%, #242444 100%)',
  },

  placeholderIcon: {
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    ...shorthands.borderRadius('12px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ff6b35',
    fontSize: '32px',
    fontWeight: 700,
  },

  placeholderText: {
    fontSize: '14px',
    color: '#a0a0b0',
    textAlign: 'center',
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
    fontSize: '22px',
    fontWeight: 700,
    color: '#303030',
    marginBottom: '8px',
  },

  cardDescription: {
    fontSize: '16px',
    color: '#666666',
    lineHeight: 1.6,
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
