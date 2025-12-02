import { useState } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion, AnimatePresence } from 'framer-motion';
import { agents, categoryInfo, type AgentCategory } from '../data/agents';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('140px', '48px'),
    backgroundColor: '#0f0f1a',
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
    marginBottom: '48px',
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
  },
  
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    ...shorthands.gap('12px'),
    marginBottom: '48px',
  },
  
  tab: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('12px', '20px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('2px', 'solid', '#2a2a4e'),
    backgroundColor: 'transparent',
    color: '#a0a0b0',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      ...shorthands.borderColor('#ff6b35'),
      color: '#ffffff',
    },
  },
  
  tabActive: {
    backgroundColor: '#ff6b35',
    ...shorthands.borderColor('#ff6b35'),
    color: '#ffffff',
  },
  
  tabIcon: {
    fontSize: '18px',
  },
  
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    ...shorthands.gap('16px'),
  },
  
  card: {
    backgroundColor: 'rgba(26, 26, 46, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('24px'),
    borderLeft: '4px solid',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.05)'),
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      backgroundColor: 'rgba(26, 26, 46, 0.9)',
    },
  },
  
  cardName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '8px',
  },
  
  cardDescription: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: '#a0a0b0',
  },
  
  count: {
    textAlign: 'center',
    marginTop: '32px',
    fontSize: '14px',
    color: '#707080',
  },
  
  countHighlight: {
    color: '#ff6b35',
    fontWeight: 600,
  },
});

const categories: AgentCategory[] = ['support', 'marketing', 'hr', 'finance', 'sales'];

export function AgentCatalog() {
  const styles = useStyles();
  const [activeCategory, setActiveCategory] = useState<AgentCategory>('support');
  
  const filteredAgents = agents.filter(agent => agent.category === activeCategory);
  const info = categoryInfo[activeCategory];
  
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
          <p className={styles.label}>Agent Catalog</p>
          <h2 className={styles.title}>50+ Agent Blueprints</h2>
          <p className={styles.subtitle}>
            Choose from our library of pre-built agent patterns, each starting at $4,000
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map(category => {
            const catInfo = categoryInfo[category];
            return (
              <button
                key={category}
                className={`${styles.tab} ${activeCategory === category ? styles.tabActive : ''}`}
                onClick={() => setActiveCategory(category)}
                style={{
                  borderColor: activeCategory === category ? catInfo.color : undefined,
                  backgroundColor: activeCategory === category ? catInfo.color : undefined,
                }}
              >
                <span className={styles.tabIcon}>{catInfo.icon}</span>
                {catInfo.label}
              </button>
            );
          })}
        </motion.div>
        
        <div className={styles.grid}>
          <AnimatePresence mode="wait">
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                className={styles.card}
                style={{ borderLeftColor: info.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <h3 className={styles.cardName}>{agent.name}</h3>
                <p className={styles.cardDescription}>{agent.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.p 
          className={styles.count}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Showing <span className={styles.countHighlight}>{filteredAgents.length}</span> agents in{' '}
          <span className={styles.countHighlight}>{info.label}</span> • Each includes deployment, 
          documentation, training, and 30-day warranty
        </motion.p>
      </div>
    </section>
  );
}
