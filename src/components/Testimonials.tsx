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
    color: '#ffffff',
    marginBottom: '16px',
    lineHeight: 1.1,
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '18px',
    color: '#a0a0b0',
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('40px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.05)'),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('24px'),
    ':hover': {
      transform: 'translateY(-4px)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    },
  },

  photoWrapper: {
    position: 'relative',
    width: '120px',
    height: '120px',
  },

  photo: {
    width: '100%',
    height: '100%',
    ...shorthands.borderRadius('50%'),
    objectFit: 'cover',
    ...shorthands.border('4px', 'solid', '#ff6b35'),
    boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 107, 53, 0.2)',
    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 133, 85, 0.05) 100%)',
  },

  photoPlaceholder: {
    width: '100%',
    height: '100%',
    ...shorthands.borderRadius('50%'),
    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(255, 133, 85, 0.1) 100%)',
    ...shorthands.border('4px', 'solid', '#ff6b35'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '42px',
    fontWeight: 700,
    color: '#ff6b35',
    boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4), 0 0 40px rgba(255, 107, 53, 0.2)',
  },

  quote: {
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#ffffff',
    fontStyle: 'italic',
    position: 'relative',
    '::before': {
      content: '"\u201C"',
      fontSize: '48px',
      color: '#ff6b35',
      position: 'absolute',
      top: '-20px',
      left: '-10px',
      opacity: 0.3,
    },
  },

  author: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
  },

  name: {
    fontSize: '16px',
    fontWeight: 700,
    color: '#ffffff',
  },

  role: {
    fontSize: '14px',
    color: '#a0a0b0',
  },

  company: {
    fontSize: '14px',
    color: '#707080',
  },
});

const testimonials = [
  {
    quote: "Reduced our customer support costs by 40% in the first month. The agent handles routine inquiries flawlessly, and our team can focus on complex issues.",
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechCorp Solutions',
    photo: null,
    initials: 'SC',
  },
  {
    quote: "The deployment process was seamless. We had our first agent running in production within two weeks, exactly as promised. The ROI was immediate.",
    name: 'Michael Rodriguez',
    role: 'VP of Engineering',
    company: 'HealthTech Partners',
    photo: null,
    initials: 'MR',
  },
  {
    quote: "What impressed us most was the compliance support. HIPAA requirements were baked in from day one. No compromises on security or data privacy.",
    name: 'Jennifer Park',
    role: 'Chief Information Officer',
    company: 'MedCare Systems',
    photo: null,
    initials: 'JP',
  },
];

export function Testimonials() {
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
          <p className={styles.label}>Client Success Stories</p>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Join hundreds of enterprises that have transformed their operations with our AI agents
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={styles.photoWrapper}>
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className={styles.photo}
                  />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    {testimonial.initials}
                  </div>
                )}
              </div>

              <p className={styles.quote}>
                {testimonial.quote}
              </p>

              <div className={styles.author}>
                <div className={styles.name}>{testimonial.name}</div>
                <div className={styles.role}>{testimonial.role}</div>
                <div className={styles.company}>{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
