import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion } from 'framer-motion';

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
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('24px'),
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      ...shorthands.borderColor('rgba(203, 213, 224, 0.7)'),
    },
  },

  quote: {
    fontSize: '18px',
    lineHeight: 1.7,
    color: '#1A202C',
    fontStyle: 'italic',
    fontWeight: 400,
    marginBottom: '24px',
  },

  author: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('16px'),
  },

  avatar: {
    width: '48px',
    height: '48px',
    ...shorthands.borderRadius('50%'),
    objectFit: 'cover',
  },

  avatarPlaceholder: {
    width: '48px',
    height: '48px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: 'rgba(13, 50, 83, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: 600,
    color: '#0D3253',
  },

  authorInfo: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
  },

  name: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#1A202C',
  },

  authorTitle: {
    fontSize: '14px',
    color: '#4A5568',
    fontWeight: 400,
  },
});

const testimonials = [
  {
    quote: "Reduced our customer support costs by 40% in the first month. The agent handles routine inquiries flawlessly, and our team can focus on complex issues.",
    name: 'Sarah Chen',
    title: 'CTO, TechCorp Solutions',
    photo: null,
    initials: 'SC',
  },
  {
    quote: "The deployment process was seamless. We had our first agent running in production within two weeks, exactly as promised. The ROI was immediate.",
    name: 'Michael Rodriguez',
    title: 'VP of Engineering, HealthTech Partners',
    photo: null,
    initials: 'MR',
  },
  {
    quote: "What impressed us most was the compliance support. HIPAA requirements were baked in from day one. No compromises on security or data privacy.",
    name: 'Jennifer Park',
    title: 'Chief Information Officer, MedCare Systems',
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
              <p className={styles.quote}>
                "{testimonial.quote}"
              </p>

              <div className={styles.author}>
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className={styles.avatar}
                  />
                ) : (
                  <div className={styles.avatarPlaceholder}>
                    {testimonial.initials}
                  </div>
                )}
                <div className={styles.authorInfo}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.authorTitle}>{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
