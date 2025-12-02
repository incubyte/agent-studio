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
    backgroundColor: '#1a1a2e',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('24px'),
    ...shorthands.border('1px', 'solid', '#2a2a4e'),
    transition: 'all 0.3s ease',
    ':hover': {
      ...shorthands.borderColor('#ff6b35'),
      transform: 'translateY(-4px)',
    },
  },
  
  cardAccent: {
    backgroundColor: '#242444',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('20px'),
    borderLeft: '4px solid #ff6b35',
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
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#ff8555',
      transform: 'translateY(-2px)',
    },
  },
  
  buttonSecondary: {
    backgroundColor: 'transparent',
    color: '#ff6b35',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('2px', 'solid', '#ff6b35'),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(255, 107, 53, 0.1)',
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
