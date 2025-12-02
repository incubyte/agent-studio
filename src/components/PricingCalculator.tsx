import { useState } from 'react';
import { makeStyles, shorthands, Slider } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { BASE_AGENT_PRICE, integrationTiers } from '../data/agents';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('100px', '24px'),
    backgroundColor: '#1a1a2e',
  },
  
  container: {
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  header: {
    textAlign: 'center',
    marginBottom: '64px',
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
    fontSize: '48px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '16px',
    '@media (max-width: 768px)': {
      fontSize: '36px',
    },
  },
  
  subtitle: {
    fontSize: '18px',
    color: '#a0a0b0',
  },
  
  calculator: {
    display: 'grid',
    gridTemplateColumns: '1fr 380px',
    ...shorthands.gap('48px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
  
  config: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('32px'),
  },
  
  configSection: {
    backgroundColor: '#242444',
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('24px'),
  },
  
  configTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
  },
  
  sliderWrapper: {
    marginBottom: '16px',
  },
  
  sliderLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px',
    fontSize: '14px',
  },
  
  sliderValue: {
    color: '#ff6b35',
    fontWeight: 600,
  },
  
  tierGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('12px'),
  },
  
  tierCard: {
    backgroundColor: '#1a1a2e',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('16px'),
    ...shorthands.border('2px', 'solid', '#2a2a4e'),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      ...shorthands.borderColor('#ff6b35'),
    },
  },
  
  tierCardActive: {
    ...shorthands.borderColor('#ff6b35'),
    backgroundColor: 'rgba(255, 107, 53, 0.1)',
  },
  
  tierName: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: '4px',
  },
  
  tierPrice: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#ff6b35',
    marginBottom: '8px',
  },
  
  tierDescription: {
    fontSize: '12px',
    color: '#a0a0b0',
    lineHeight: 1.4,
  },
  
  tierExamples: {
    fontSize: '11px',
    color: '#707080',
    marginTop: '8px',
  },
  
  tierCount: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#a0a0b0',
  },
  
  summary: {
    backgroundColor: '#0f0f1a',
    ...shorthands.borderRadius('20px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('2px', 'solid', '#ff6b35'),
    position: 'sticky',
    top: '24px',
    height: 'fit-content',
  },
  
  summaryTitle: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: '24px',
    textAlign: 'center',
  },
  
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.padding('12px', '0'),
    borderBottom: '1px solid #2a2a4e',
    fontSize: '14px',
  },
  
  summaryLabel: {
    color: '#a0a0b0',
  },
  
  summaryValue: {
    color: '#ffffff',
    fontWeight: 600,
  },
  
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.padding('24px', '0', '0'),
    marginTop: '12px',
  },
  
  totalLabel: {
    fontSize: '18px',
    color: '#ffffff',
    fontWeight: 600,
  },
  
  totalValue: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#ff6b35',
  },
  
  totalNote: {
    fontSize: '12px',
    color: '#707080',
    textAlign: 'right',
  },
  
  ctaButton: {
    width: '100%',
    marginTop: '24px',
    backgroundColor: '#ff6b35',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '24px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: '#ff8555',
      transform: 'translateY(-2px)',
    },
  },
  
  included: {
    marginTop: '24px',
    ...shorthands.padding('16px'),
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    ...shorthands.borderRadius('8px'),
  },
  
  includedTitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#4caf50',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  
  includedItem: {
    fontSize: '13px',
    color: '#a0a0b0',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('6px'),
    marginBottom: '4px',
  },
  
  checkIcon: {
    color: '#4caf50',
    fontSize: '14px',
  },
});

type IntegrationSelection = {
  [key: string]: number;
};

export function PricingCalculator() {
  const styles = useStyles();
  const [agentCount, setAgentCount] = useState(1);
  const [integrations, setIntegrations] = useState<IntegrationSelection>({
    'tier-a': 1,
    'tier-b': 0,
    'tier-c': 0,
    'tier-d': 0,
  });
  
  const toggleIntegration = (tierId: string) => {
    setIntegrations(prev => ({
      ...prev,
      [tierId]: prev[tierId] > 0 ? 0 : 1,
    }));
  };
  
  // Calculate totals
  const agentTotal = agentCount * BASE_AGENT_PRICE;
  
  let integrationTotal = 0;
  integrationTiers.forEach(tier => {
    const count = integrations[tier.id] || 0;
    if (tier.price > 0) {
      integrationTotal += count * tier.price;
    }
  });
  
  const total = agentTotal + integrationTotal;
  
  const getActiveIntegrations = () => {
    return integrationTiers.filter(tier => (integrations[tier.id] || 0) > 0);
  };
  
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
          <p className={styles.label}>Pricing Calculator</p>
          <h2 className={styles.title}>Build Your Quote</h2>
          <p className={styles.subtitle}>
            Configure your agents and integrations — see your price instantly
          </p>
        </motion.div>
        
        <div className={styles.calculator}>
          <motion.div 
            className={styles.config}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Agent Count */}
            <div className={styles.configSection}>
              <h3 className={styles.configTitle}>
                🤖 Number of Agents
              </h3>
              <div className={styles.sliderWrapper}>
                <div className={styles.sliderLabel}>
                  <span>Agents</span>
                  <span className={styles.sliderValue}>{agentCount}</span>
                </div>
                <Slider
                  min={1}
                  max={10}
                  value={agentCount}
                  onChange={(_, data) => setAgentCount(data.value)}
                  style={{ width: '100%' }}
                />
              </div>
              <p style={{ fontSize: '14px', color: '#707080' }}>
                ${BASE_AGENT_PRICE.toLocaleString()} per agent • Deploy multiple agents for greater automation
              </p>
            </div>
            
            {/* Integrations */}
            <div className={styles.configSection}>
              <h3 className={styles.configTitle}>
                🔗 Integrations
              </h3>
              <div className={styles.tierGrid}>
                {integrationTiers.map(tier => (
                  <div
                    key={tier.id}
                    className={`${styles.tierCard} ${(integrations[tier.id] || 0) > 0 ? styles.tierCardActive : ''}`}
                    onClick={() => toggleIntegration(tier.id)}
                  >
                    <div className={styles.tierName}>{tier.name}</div>
                    <div className={styles.tierPrice}>
                      {tier.price === 0 ? (tier.id === 'tier-a' ? 'FREE' : 'T&M') : `$${tier.price.toLocaleString()}`}
                    </div>
                    <div className={styles.tierDescription}>{tier.description}</div>
                    <div className={styles.tierExamples}>
                      {tier.examples.slice(0, 3).join(', ')}...
                    </div>
                  </div>
                ))}
              </div>
              
              {getActiveIntegrations().length > 0 && (
                <div className={styles.tierCount}>
                  Selected: {getActiveIntegrations().map(t => t.name).join(', ')}
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Summary */}
          <motion.div 
            className={styles.summary}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className={styles.summaryTitle}>Your Quote</h3>
            
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>
                {agentCount} Agent{agentCount > 1 ? 's' : ''} × ${BASE_AGENT_PRICE.toLocaleString()}
              </span>
              <span className={styles.summaryValue}>
                ${agentTotal.toLocaleString()}
              </span>
            </div>
            
            {getActiveIntegrations().map(tier => (
              <div key={tier.id} className={styles.summaryRow}>
                <span className={styles.summaryLabel}>
                  {tier.name} Integration
                </span>
                <span className={styles.summaryValue}>
                  {tier.price === 0 ? (tier.id === 'tier-a' ? 'FREE' : 'TBD') : `$${tier.price.toLocaleString()}`}
                </span>
              </div>
            ))}
            
            <div className={styles.summaryTotal}>
              <span className={styles.totalLabel}>Total</span>
              <div>
                <div className={styles.totalValue}>
                  ${total.toLocaleString()}
                </div>
                <div className={styles.totalNote}>one-time</div>
              </div>
            </div>
            
            <button className={styles.ctaButton}>
              Get Started →
            </button>
            
            <div className={styles.included}>
              <div className={styles.includedTitle}>Included with every agent</div>
              <div className={styles.includedItem}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
                Production deployment
              </div>
              <div className={styles.includedItem}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
                Full source code
              </div>
              <div className={styles.includedItem}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
                Documentation & training
              </div>
              <div className={styles.includedItem}>
                <CheckmarkCircleFilled className={styles.checkIcon} />
                30-day warranty
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
