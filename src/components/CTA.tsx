import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
  section: {
    background: 'linear-gradient(180deg, #0F172A 0%, #0B1120 100%)',
    ...shorthands.padding('120px', '32px'),
    textAlign: 'center',
    position: 'relative',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '24px'),
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '300px',
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(224, 122, 58, 0.3), transparent)',
    },
  },
  
  container: {
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontSize: '56px',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: '24px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '40px',
    },
  },

  subtitle: {
    fontSize: '20px',
    color: '#94A3B8',
    marginBottom: '48px',
    lineHeight: 1.6,
    fontWeight: 400,
  },
  
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ...shorthands.gap('16px'),
    marginBottom: '32px',
  },

  primaryButton: {
    backgroundColor: '#E07A3A',
    color: '#0B1120',
    fontWeight: 600,
    fontSize: '18px',
    ...shorthands.padding('18px', '48px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px rgba(224, 122, 58, 0.25)',
    ':hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(224, 122, 58, 0.3)',
    },
    ':focus-visible': {
      outline: '2px solid #E07A3A',
      outlineOffset: '2px',
    },
  },

  secondaryLink: {
    fontSize: '16px',
    color: '#94A3B8',
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#F1F5F9',
    },
  },

  note: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: 1.6,
    fontWeight: 400,
  },
});

export function CTA() {
  const styles = useStyles();
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Ready to Ship AI That Actually Works?
          </h2>
          <p className={styles.subtitle}>
            Book a 30-minute discovery call. We'll tell you honestly if we're a good fit
            — and if not, point you in the right direction.
          </p>

          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Book Your Discovery Call →
            </button>
            <a href="#" className={styles.secondaryLink}>
              Or schedule a call at your convenience
            </a>
          </div>

          <p className={styles.note}>
            No pressure. No sales pitch. Just an honest conversation about your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
