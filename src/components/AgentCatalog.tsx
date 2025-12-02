import { useState, useEffect } from 'react';
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
    color: '#E07A3A',
    marginBottom: '16px',
  },

  title: {
    fontSize: '48px',
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
    fontSize: '20px',
    color: '#94A3B8',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.6,
    fontWeight: 400,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    ...shorthands.gap('24px'),
    marginBottom: '48px',
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.12)'),
    },
  },

  categoryBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    ...shorthands.gap('6px'),
    ...shorthands.padding('6px', '12px'),
    ...shorthands.borderRadius('6px'),
    backgroundColor: 'rgba(224, 122, 58, 0.1)',
    fontSize: '12px',
    fontWeight: 600,
    color: '#E07A3A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '16px',
  },

  cardName: {
    fontSize: '20px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '12px',
    lineHeight: 1.3,
  },

  cardDescription: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#94A3B8',
    fontWeight: 400,
  },

  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  viewAllButton: {
    ...shorthands.padding('16px', '32px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.2)'),
    backgroundColor: 'transparent',
    color: '#F1F5F9',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.3)'),
      transform: 'scale(1.02)',
    },
    ':focus-visible': {
      outline: '2px solid #F1F5F9',
      outlineOffset: '2px',
    },
  },

  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    ...shorthands.padding('32px'),
    '@media (max-width: 768px)': {
      ...shorthands.padding('16px'),
    },
  },

  modalContent: {
    backgroundColor: '#0B1120',
    ...shorthands.borderRadius('16px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.1)'),
    maxWidth: '1200px',
    width: '100%',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  modalHeader: {
    ...shorthands.padding('32px', '32px', '24px', '32px'),
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      ...shorthands.padding('24px', '24px', '20px', '24px'),
    },
  },

  modalTitle: {
    fontSize: '32px',
    fontWeight: 700,
    color: '#F1F5F9',
    lineHeight: 1.2,
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },

  closeButton: {
    width: '40px',
    height: '40px',
    ...shorthands.borderRadius('50%'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.2)'),
    backgroundColor: 'transparent',
    color: '#F1F5F9',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'all',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.3)'),
    },
  },

  modalTabs: {
    display: 'flex',
    ...shorthands.gap('8px'),
    ...shorthands.padding('24px', '32px', '0', '32px'),
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    overflowX: 'auto',
    '@media (max-width: 768px)': {
      ...shorthands.padding('20px', '24px', '0', '24px'),
    },
  },

  modalTab: {
    ...shorthands.padding('12px', '24px'),
    backgroundColor: 'transparent',
    ...shorthands.border('none'),
    borderBottom: '2px solid transparent',
    color: '#94A3B8',
    fontSize: '15px',
    fontWeight: 600,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transitionProperty: 'color, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      color: '#F1F5F9',
    },
  },

  modalTabActive: {
    color: '#F1F5F9',
    borderBottomColor: '#E07A3A',
  },

  modalBody: {
    ...shorthands.padding('32px'),
    overflowY: 'auto',
    '@media (max-width: 768px)': {
      ...shorthands.padding('24px'),
    },
  },

  agentList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('16px'),
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },

  agentItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.padding('20px'),
    ...shorthands.border('1px', 'solid', 'rgba(255, 255, 255, 0.08)'),
    transitionProperty: 'background, border-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      ...shorthands.borderColor('rgba(255, 255, 255, 0.12)'),
    },
  },

  agentName: {
    fontSize: '16px',
    fontWeight: 600,
    color: '#F1F5F9',
    marginBottom: '6px',
    lineHeight: 1.3,
  },

  agentDescription: {
    fontSize: '14px',
    lineHeight: 1.5,
    color: '#94A3B8',
    fontWeight: 400,
  },
});

const featuredAgents = [
  {
    id: 'ticket-triage',
    name: 'Ticket Triaging Agent',
    description: 'Auto-categorize, prioritize, and route tickets to the right team. Reduce support costs by 40% in the first month.',
    category: 'support',
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing Agent',
    description: 'Extract, validate, and route invoices. Eliminate manual data entry and ensure compliance with financial regulations.',
    category: 'finance',
  },
  {
    id: 'lead-qualification',
    name: 'Lead Qualification Agent',
    description: 'Score and prioritize inbound leads. Focus your sales team on high-value opportunities and accelerate revenue growth.',
    category: 'sales',
  },
];

export function AgentCatalog() {
  const styles = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AgentCategory>('support');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Group agents by category
  const agentsByCategory = agents.reduce((acc, agent) => {
    if (!acc[agent.category]) {
      acc[agent.category] = [];
    }
    acc[agent.category].push(agent);
    return acc;
  }, {} as Record<AgentCategory, typeof agents>);

  const categories: AgentCategory[] = ['support', 'marketing', 'hr', 'finance', 'sales'];
  const currentCategoryAgents = agentsByCategory[activeCategory] || [];

  return (
    <>
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
            <h2 className={styles.title}>Featured Agent Blueprints</h2>
            <p className={styles.subtitle}>
              Production-ready agents that deliver immediate value. Each starting at $4,000, deployed in 2-4 weeks.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {featuredAgents.map((agent, index) => {
              const catInfo = categoryInfo[agent.category as keyof typeof categoryInfo];
              return (
                <motion.div
                  key={agent.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className={styles.categoryBadge}>
                    {catInfo.label}
                  </div>
                  <h3 className={styles.cardName}>{agent.name}</h3>
                  <p className={styles.cardDescription}>{agent.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <button
              className={styles.viewAllButton}
              onClick={() => setIsModalOpen(true)}
            >
              Browse All 50+ Agent Blueprints →
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2 className={styles.modalTitle}>All Agent Blueprints</h2>
                <button
                  className={styles.closeButton}
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              <div className={styles.modalTabs}>
                {categories.map((category) => {
                  const catInfo = categoryInfo[category];
                  return (
                    <button
                      key={category}
                      className={`${styles.modalTab} ${activeCategory === category ? styles.modalTabActive : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {catInfo.label}
                    </button>
                  );
                })}
              </div>

              <div className={styles.modalBody}>
                <div className={styles.agentList}>
                  {currentCategoryAgents.map((agent) => (
                    <div key={agent.id} className={styles.agentItem}>
                      <h4 className={styles.agentName}>{agent.name}</h4>
                      <p className={styles.agentDescription}>{agent.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
