import { makeStyles, shorthands } from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    ...shorthands.padding('48px', '24px'),
    backgroundColor: '#0a0a14',
    borderTop: '1px solid #1a1a2e',
  },
  
  container: {
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    ...shorthands.gap('48px'),
    marginBottom: '48px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  
  brand: {
    maxWidth: '300px',
  },
  
  logo: {
    fontSize: '24px',
    fontWeight: 800,
    color: '#ffffff',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  
  logoAccent: {
    color: '#ff6b35',
  },
  
  tagline: {
    fontSize: '14px',
    color: '#707080',
    lineHeight: 1.6,
  },
  
  links: {
    display: 'flex',
    ...shorthands.gap('64px'),
    flexWrap: 'wrap',
    '@media (max-width: 600px)': {
      ...shorthands.gap('32px'),
    },
  },
  
  linkGroup: {},
  
  linkTitle: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  link: {
    display: 'block',
    fontSize: '14px',
    color: '#707080',
    textDecoration: 'none',
    marginBottom: '12px',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      color: '#ff6b35',
    },
  },
  
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
    borderTop: '1px solid #1a1a2e',
    flexWrap: 'wrap',
    ...shorthands.gap('16px'),
  },
  
  copyright: {
    fontSize: '14px',
    color: '#505060',
  },
  
  social: {
    display: 'flex',
    ...shorthands.gap('16px'),
  },
  
  socialLink: {
    width: '40px',
    height: '40px',
    backgroundColor: '#1a1a2e',
    ...shorthands.borderRadius('8px'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#707080',
    fontSize: '18px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ff6b35',
      color: '#ffffff',
    },
  },
});

export function Footer() {
  const styles = useStyles();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoAccent}>Incubyte</span> Agent Studio
            </div>
            <p className={styles.tagline}>
              Production-ready AI agents deployed to your infrastructure. 
              Fixed pricing. Full ownership. No lock-in.
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Product</h4>
              <a className={styles.link}>Agent Catalog</a>
              <a className={styles.link}>Pricing</a>
              <a className={styles.link}>How It Works</a>
              <a className={styles.link}>Case Studies</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Company</h4>
              <a className={styles.link}>About Incubyte</a>
              <a className={styles.link}>Blog</a>
              <a className={styles.link}>Careers</a>
              <a className={styles.link}>Contact</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Resources</h4>
              <a className={styles.link}>Documentation</a>
              <a className={styles.link}>Integration Guide</a>
              <a className={styles.link}>Security</a>
              <a className={styles.link}>Compliance</a>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 Incubyte. All rights reserved.
          </p>
          
          <div className={styles.social}>
            <a className={styles.socialLink} title="LinkedIn">in</a>
            <a className={styles.socialLink} title="Twitter">𝕏</a>
            <a className={styles.socialLink} title="GitHub">⌘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
