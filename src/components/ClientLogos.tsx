import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('80px', '48px'),
    backgroundColor: '#0f0f1a',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    '@media (max-width: 768px)': {
      ...shorthands.padding('60px', '32px'),
    },
  },

  container: {
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  label: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#707080',
    marginBottom: '48px',
  },

  logoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    ...shorthands.gap('48px', '64px'),
    alignItems: 'center',
    justifyItems: 'center',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      ...shorthands.gap('32px', '40px'),
    },
  },

  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60px',
    ...shorthands.padding('16px'),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },

  logoPlaceholder: {
    width: '160px',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    ...shorthands.borderRadius('8px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 600,
    color: '#707080',
    textAlign: 'center',
    ...shorthands.padding('12px'),
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      color: '#a0a0b0',
    },
  },

  logo: {
    maxWidth: '160px',
    maxHeight: '60px',
    width: 'auto',
    height: 'auto',
    filter: 'grayscale(100%) opacity(0.7)',
    transition: 'filter 0.3s ease, transform 0.3s ease',
    ':hover': {
      filter: 'grayscale(0%) opacity(1)',
      transform: 'scale(1.05)',
    },
  },
});

const clientLogos = [
  { name: 'TechCorp', logo: '/logos/client-1.svg' },
  { name: 'HealthTech', logo: '/logos/client-2.svg' },
  { name: 'FinanceX', logo: '/logos/client-3.svg' },
  { name: 'RetailPro', logo: '/logos/client-4.svg' },
  { name: 'SecureLife', logo: '/logos/client-5.svg' },
  { name: 'CloudWave', logo: '/logos/client-6.svg' },
];

export function ClientLogos() {
  const styles = useStyles();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Leading Enterprises
        </motion.div>

        <div className={styles.logoGrid}>
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className={styles.logoWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className={styles.logo}
                />
              ) : (
                <div className={styles.logoPlaceholder}>
                  {client.name}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
