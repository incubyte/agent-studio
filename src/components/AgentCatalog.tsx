import { useState } from 'react';
import { makeStyles, shorthands } from '@fluentui/react-components';
import { motion, AnimatePresence } from 'framer-motion';
import { agents, categoryInfo, type AgentCategory } from '../data/agents';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#0B1120',
    '@media (max-width: 768px)': {
      ...shorthands.padding('80px', '24px'),
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
    color: '#E07A3A',
    marginBottom: '16px',
  },

  title: {
    fontSize: '56px',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: '16px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },

  subtitle: {
    fontSize: '18px',
    color: '#94A3B8',
    lineHeight: 1.6,
    fontWeight: 400,
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
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
    backgroundColor: 'transparent',
    color: '#94A3B8',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      ...shorthands.borderColor('rgba(255, 255, 255, 0.2)'),
      color: '#F1F5F9',
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
    },
  },

  tabActive: {
    backgroundColor: 'rgba(224, 122, 58, 0.1)',
    ...shorthands.borderColor('rgba(224, 122, 58, 0.3)'),
    color: '#F1F5F9',
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
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('24px'),
    borderLeft: '3px solid',
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.12)'),
    },
  },

  cardName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '8px',
    lineHeight: 1.3,
  },

  cardDescription: {
    fontSize: '14px',
    lineHeight: 1.6,
    color: '#94A3B8',
    fontWeight: 400,
  },
  
  count: {
    textAlign: 'center',
    marginTop: '32px',
    fontSize: '14px',
    color: '#64748B',
    fontWeight: 400,
  },

  countHighlight: {
    color: '#E07A3A',
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
