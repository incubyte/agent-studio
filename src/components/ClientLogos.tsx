import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('80px', '32px'),
    backgroundColor: '#111827',
    borderTop: '1px solid rgba(226, 232, 240, 0.6)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
    '@media (max-width: 768px)': {
      ...shorthands.padding('60px', '24px'),
    },
  },

  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  label: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#64748B',
    marginBottom: '48px',
  },

  logoBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...shorthands.gap('48px'),
    flexWrap: 'wrap',
    opacity: 0.6,
    '@media (max-width: 768px)': {
      ...shorthands.gap('32px'),
    },
  },

  logo: {
    height: '32px',
    width: 'auto',
    filter: 'grayscale(100%) brightness(200%)',
    objectFit: 'contain',
  },

  logoPlaceholder: {
    height: '32px',
    ...shorthands.padding('8px', '24px'),
    backgroundColor: 'rgba(226, 232, 240, 0.3)',
    ...shorthands.borderRadius('6px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 500,
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: '0.5px',
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

        <motion.div
          className={styles.logoBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {clientLogos.map((client) => (
            client.logo ? (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className={styles.logo}
              />
            ) : (
              <div key={client.name} className={styles.logoPlaceholder}>
                {client.name}
              </div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
}
