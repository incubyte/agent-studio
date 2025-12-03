import { makeStyles, shorthands } from '@fluentui/react-components';

export const useGlobalStyles = makeStyles({
  root: {
    backgroundColor: '#0f0f1a',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: '"Segoe UI Variable", "Segoe UI", system-ui, sans-serif',
  },

  section: {
    ...shorthands.padding('80px', '24px'),
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  sectionAlt: {
    backgroundColor: '#1a1a2e',
  },

  sectionTitle: {
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#ff6b35',
    marginBottom: '8px',
  },

  heading: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '24px',
    color: '#ffffff',
  },

  headingMd: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: '24px',
    color: '#ffffff',
  },

  subheading: {
    fontSize: '20px',
    lineHeight: 1.5,
    color: '#a0a0b0',
    maxWidth: '600px',
  },

  card: {
    backgroundColor: 'rgba(26, 26, 46, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('24px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
    ':hover': {
      ...shorthands.borderColor('rgba(255, 107, 53, 0.5)'),
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 40px -10px rgba(255, 107, 53, 0.2)',
    },
  },

  cardAccent: {
    backgroundColor: 'rgba(36, 36, 68, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('20px'),
    borderLeft: '4px solid #ff6b35',
    ...shorthands.borderTop('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    ...shorthands.borderRight('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    ...shorthands.borderBottom('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
  },

  button: {
    backgroundColor: '#ff6b35',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
    boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
    ':hover': {
      backgroundColor: '#ff8555',
      transform: 'translateY(-2px)',
      boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)',
    },
  },

  buttonSecondary: {
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
    color: '#ff6b35',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 107, 53, 0.5)'),
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(4px)',
    ':hover': {
      backgroundColor: 'rgba(255, 107, 53, 0.2)',
      ...shorthands.borderColor('#ff6b35'),
      boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)',
    },
  },

  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('24px'),
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },

  grid3: {
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

  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    ...shorthands.gap('24px'),
    '@media (max-width: 1000px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },

  grid5: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    ...shorthands.gap('16px'),
    '@media (max-width: 1100px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 700px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 500px)': {
      gridTemplateColumns: '1fr',
    },
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  textGradient: {
    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8555 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  accentBar: {
    width: '80px',
    height: '4px',
    backgroundColor: '#ff6b35',
    ...shorthands.borderRadius('2px'),
  },
});
