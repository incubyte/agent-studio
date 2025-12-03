import { useState } from 'react';
import { makeStyles, shorthands, Slider } from '@fluentui/react-components';
import { motion } from 'framer-motion';
import { BASE_AGENT_PRICE, integrationTiers } from '../data/agents';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  section: {
    ...shorthands.padding('120px', '32px'),
    backgroundColor: '#F1F3F5',
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
  
  calculator: {
    backgroundColor: '#F8F9FA',
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    ...shorthands.borderRadius('16px'),
    ...shorthands.padding('48px'),
    maxWidth: '1100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    ...shorthands.gap('64px'),
    '@media (max-width: 900px)': {
      gridTemplateColumns: '1fr',
      ...shorthands.padding('32px'),
      ...shorthands.gap('48px'),
    },
  },

  config: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('40px'),
  },

  configSection: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('20px'),
  },
  
  configTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1A202C',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    lineHeight: 1.3,
  },

  sliderWrapper: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
  },

  sliderLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#4A5568',
    fontWeight: 500,
  },

  sliderValue: {
    color: '#0D3253',
    fontWeight: 600,
    fontSize: '16px',
  },

  sliderNote: {
    fontSize: '14px',
    color: '#718096',
    lineHeight: 1.5,
    fontWeight: 400,
  },
  
  tierGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('16px'),
  },

  tierCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.padding('16px'),
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    cursor: 'pointer',
    transitionProperty: 'border-color, background',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      ...shorthands.borderColor('rgba(203, 213, 224, 0.7)'),
    },
  },

  tierCardActive: {
    ...shorthands.borderColor('#0D3253'),
    backgroundColor: 'rgba(224, 122, 58, 0.05)',
  },
  
  tierName: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#1A202C',
    marginBottom: '8px',
  },

  tierPrice: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#0D3253',
    marginBottom: '8px',
    lineHeight: 1,
  },

  tierDescription: {
    fontSize: '13px',
    color: '#4A5568',
    lineHeight: 1.5,
    marginBottom: '8px',
    fontWeight: 400,
  },

  tierExamples: {
    fontSize: '12px',
    color: '#718096',
    lineHeight: 1.4,
    fontWeight: 400,
  },

  tierCount: {
    marginTop: '16px',
    fontSize: '14px',
    color: '#4A5568',
    fontWeight: 400,
  },
  
  summary: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    ...shorthands.borderRadius('12px'),
    ...shorthands.padding('32px'),
    ...shorthands.border('1px', 'solid', 'rgba(226, 232, 240, 0.6)'),
    position: 'sticky',
    top: '24px',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('24px'),
  },

  summaryTitle: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1A202C',
    textAlign: 'left',
  },
  
  summaryBreakdown: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('12px'),
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(226, 232, 240, 0.6)',
  },

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.gap('16px'),
    fontSize: '14px',
  },

  summaryLabel: {
    color: '#4A5568',
    fontWeight: 400,
  },

  summaryValue: {
    color: '#1A202C',
    fontWeight: 600,
  },

  summaryTotal: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('16px'),
    paddingTop: '24px',
    borderTop: '1px solid rgba(226, 232, 240, 0.6)',
  },

  totalLabel: {
    fontSize: '14px',
    color: '#4A5568',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  priceDisplay: {
    display: 'flex',
    alignItems: 'baseline',
    ...shorthands.gap('4px'),
  },

  priceCurrency: {
    fontSize: '24px',
    color: '#4A5568',
    fontWeight: 600,
    verticalAlign: 'top',
  },

  totalValue: {
    fontSize: '56px',
    fontWeight: 700,
    color: '#1A202C',
    letterSpacing: '-0.02em',
    lineHeight: 1,
  },

  totalNote: {
    fontSize: '14px',
    color: '#718096',
    fontWeight: 400,
  },
  
  ctaButton: {
    width: '100%',
    backgroundColor: '#0D3253',
    color: '#F1F3F5',
    fontWeight: 600,
    fontSize: '16px',
    ...shorthands.padding('16px', '24px'),
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('none'),
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 4px 12px rgba(13, 50, 83, 0.15)',
    ':hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 6px 20px rgba(13, 50, 83, 0.2)',
    },
  },

  included: {
    ...shorthands.padding('20px'),
    backgroundColor: 'rgba(45, 212, 191, 0.05)',
    ...shorthands.borderRadius('8px'),
    ...shorthands.border('1px', 'solid', 'rgba(45, 212, 191, 0.2)'),
  },

  includedTitle: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#2DD4BF',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  includedItem: {
    fontSize: '14px',
    color: '#4A5568',
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    marginBottom: '8px',
    fontWeight: 400,
    lineHeight: 1.5,
    ':last-child': {
      marginBottom: 0,
    },
  },

  checkIcon: {
    color: '#2DD4BF',
    fontSize: '16px',
    flexShrink: 0,
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
                Number of Agents
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
              <p className={styles.sliderNote}>
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

            <div className={styles.summaryBreakdown}>
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
            </div>

            <div className={styles.summaryTotal}>
              <span className={styles.totalLabel}>Total Price</span>
              <div className={styles.priceDisplay}>
                <span className={styles.priceCurrency}>$</span>
                <span className={styles.totalValue}>{total.toLocaleString()}</span>
              </div>
              <div className={styles.totalNote}>One-time payment • No recurring fees</div>
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
