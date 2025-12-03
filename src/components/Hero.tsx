import { Button, Text, Display } from '@fluentui/react-components';
import { ArrowRight24Regular } from '@fluentui/react-icons';
import { useGlobalStyles } from '../styles';
import { motion } from 'framer-motion';

export const Hero = () => {
  const styles = useGlobalStyles();

  return (
    <section className={styles.section} style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Aurora Background Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.15) 0%, rgba(15, 15, 26, 0) 70%)',
        zIndex: 0,
        filter: 'blur(60px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text className={styles.sectionTitle} style={{
            fontSize: '16px',
            letterSpacing: '4px',
            marginBottom: '24px',
            display: 'block'
          }}>
            INCUBYTE AGENTWORKS
          </Text>

          <Display style={{
            fontSize: 'clamp(48px, 6vw, 84px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '32px',
            color: '#ffffff',
            letterSpacing: '-0.02em'
          }}>
            Build <span className="text-gradient-orange">Intelligent Agents</span> That Actually Work
          </Display>

          <Text size={600} style={{
            fontSize: '22px',
            color: '#94a3b8',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
            display: 'block'
          }}>
            Stop building toys. Start shipping enterprise-grade AI agents that drive real business value.
          </Text>

          <div className={styles.flexCenter} style={{ gap: '24px' }}>
            <Button
              className={`${styles.button} animate-glow`}
              size="large"
              icon={<ArrowRight24Regular />}
              iconPosition="after"
            >
              Start Building
            </Button>
            <Button
              className={styles.buttonSecondary}
              size="large"
            >
              View Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
