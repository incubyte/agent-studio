export interface Agent {
  id: string;
  name: string;
  description: string;
  category: AgentCategory;
}

export type AgentCategory = 'support' | 'marketing' | 'hr' | 'finance' | 'sales';

export const categoryInfo: Record<AgentCategory, { label: string; color: string; icon: string }> = {
  support: { label: 'Customer Support', color: '#4361ee', icon: '🎧' },
  marketing: { label: 'Marketing', color: '#7209b7', icon: '📣' },
  hr: { label: 'HR', color: '#f72585', icon: '👥' },
  finance: { label: 'Finance', color: '#4cc9f0', icon: '💰' },
  sales: { label: 'Sales', color: '#ff6b35', icon: '🎯' },
};

export const agents: Agent[] = [
  // Customer Support
  { id: 'ticket-triage', name: 'Ticket Triaging Agent', description: 'Auto-categorize, prioritize, and route tickets to the right team', category: 'support' },
  { id: 'image-parser', name: 'Image Parser Agent', description: 'Extract data from uploaded images, eliminate manual data entry', category: 'support' },
  { id: 'escalation-prediction', name: 'Escalation Prediction Agent', description: 'Flag tickets likely to escalate before they do', category: 'support' },
  { id: 'sla-guardian', name: 'SLA Guardian Agent', description: 'Monitor and prevent SLA breaches automatically', category: 'support' },
  { id: 'duplicate-detection', name: 'Duplicate Detection Agent', description: 'Identify and merge duplicate tickets', category: 'support' },
  { id: 'customer-context', name: 'Customer Context Agent', description: 'Assemble customer history before agent pickup', category: 'support' },
  { id: 'wrap-up', name: 'Post-Interaction Wrap-up Agent', description: 'Auto-fill disposition and notes from transcript', category: 'support' },
  { id: 'response-qa', name: 'Response QA Agent', description: 'Review responses for tone and accuracy before sending', category: 'support' },
  { id: 'sentiment-monitor', name: 'Sentiment Monitor Agent', description: 'Track real-time sentiment during conversations', category: 'support' },
  { id: 'smart-routing', name: 'Smart Routing Agent', description: 'Route by skills, workload, and language', category: 'support' },

  // Marketing
  { id: 'content-repurposing', name: 'Content Repurposing Agent', description: 'One blog → 10 social posts, emails, and ads', category: 'marketing' },
  { id: 'brand-voice', name: 'Brand Voice Guardian Agent', description: 'Review content for brand consistency', category: 'marketing' },
  { id: 'headline-generator', name: 'Headline Generator Agent', description: 'Create A/B test variations at scale', category: 'marketing' },
  { id: 'campaign-performance', name: 'Campaign Performance Agent', description: 'Explain why performance is up or down', category: 'marketing' },
  { id: 'lead-scoring', name: 'Lead Scoring Agent', description: 'Score leads by behavior and engagement signals', category: 'marketing' },
  { id: 'content-decay', name: 'Content Decay Agent', description: 'Flag content losing rankings for refresh', category: 'marketing' },
  { id: 'competitor-monitor', name: 'Competitor Monitor Agent', description: 'Track competitor content and messaging changes', category: 'marketing' },
  { id: 'social-listening', name: 'Social Listening Agent', description: 'Surface relevant mentions and trends', category: 'marketing' },
  { id: 'weekly-digest', name: 'Weekly Digest Agent', description: 'Auto-generate executive marketing summary', category: 'marketing' },
  { id: 'funnel-leak', name: 'Funnel Leak Agent', description: 'Identify where prospects drop off', category: 'marketing' },

  // HR
  { id: 'resume-screening', name: 'Resume Screening Agent', description: 'Score and rank candidates by criteria', category: 'hr' },
  { id: 'candidate-sourcing', name: 'Candidate Sourcing Agent', description: 'Find candidates matching job requirements', category: 'hr' },
  { id: 'interview-scheduling', name: 'Interview Scheduling Agent', description: 'Coordinate availability across parties', category: 'hr' },
  { id: 'onboarding-checklist', name: 'Onboarding Checklist Agent', description: 'Track and remind on onboarding tasks', category: 'hr' },
  { id: 'policy-qa', name: 'Policy Q&A Agent', description: 'Answer employee policy questions 24/7', category: 'hr' },
  { id: 'leave-balance', name: 'Leave Balance Agent', description: 'Check and process leave requests', category: 'hr' },
  { id: 'performance-review', name: 'Performance Review Prep Agent', description: 'Gather feedback and draft summaries', category: 'hr' },
  { id: 'exit-interview', name: 'Exit Interview Analyzer Agent', description: 'Extract themes from exit feedback', category: 'hr' },
  { id: 'benefits-enrollment', name: 'Benefits Enrollment Agent', description: 'Guide employees through benefits selection', category: 'hr' },
  { id: 'training-compliance', name: 'Training Compliance Agent', description: 'Track and remind on required training', category: 'hr' },

  // Finance
  { id: 'expense-approval', name: 'Expense Approval Agent', description: 'Review and route expense requests', category: 'finance' },
  { id: 'invoice-processing', name: 'Invoice Processing Agent', description: 'Extract, validate, and route invoices', category: 'finance' },
  { id: 'budget-variance', name: 'Budget Variance Agent', description: 'Analyze and explain budget variances', category: 'finance' },
  { id: 'cash-flow', name: 'Cash Flow Forecaster Agent', description: 'Predict cash position based on patterns', category: 'finance' },
  { id: 'vendor-payment', name: 'Vendor Payment Agent', description: 'Answer payment status inquiries', category: 'finance' },
  { id: 'financial-report', name: 'Financial Report Agent', description: 'Generate recurring financial summaries', category: 'finance' },
  { id: 'audit-trail', name: 'Audit Trail Agent', description: 'Track and document financial changes', category: 'finance' },
  { id: 'contract-renewal', name: 'Contract Renewal Alert Agent', description: 'Flag upcoming renewals and expirations', category: 'finance' },
  { id: 'revenue-recognition', name: 'Revenue Recognition Agent', description: 'Apply rev rec rules to transactions', category: 'finance' },
  { id: 'procurement-analyzer', name: 'Procurement Analyzer Agent', description: 'Find savings opportunities in spend', category: 'finance' },

  // Sales
  { id: 'lead-qualification', name: 'Lead Qualification Agent', description: 'Score and prioritize inbound leads', category: 'sales' },
  { id: 'crm-enrichment', name: 'CRM Enrichment Agent', description: 'Auto-fill missing contact and company data', category: 'sales' },
  { id: 'proposal-generator', name: 'Proposal Generator Agent', description: 'Draft proposals from templates + CRM data', category: 'sales' },
  { id: 'competitive-intel', name: 'Competitive Intel Agent', description: 'Surface competitor info during deals', category: 'sales' },
  { id: 'deal-risk', name: 'Deal Risk Agent', description: 'Flag at-risk deals based on signals', category: 'sales' },
  { id: 'meeting-prep', name: 'Meeting Prep Agent', description: 'Compile briefing docs before calls', category: 'sales' },
  { id: 'follow-up-scheduler', name: 'Follow-up Scheduler Agent', description: 'Schedule and remind on follow-ups', category: 'sales' },
  { id: 'win-loss', name: 'Win/Loss Analyzer Agent', description: 'Extract patterns from deal outcomes', category: 'sales' },
  { id: 'territory-mapper', name: 'Territory Mapper Agent', description: 'Analyze and optimize territory coverage', category: 'sales' },
  { id: 'quote-builder', name: 'Quote Builder Agent', description: 'Configure and generate quotes from specs', category: 'sales' },
];

export const integrationTiers = [
  { id: 'tier-a', name: 'Tier A', price: 0, label: 'FREE', description: 'S3, basic file storage, simple webhooks', examples: ['S3', 'Google Sheets', 'Webhooks', 'Email'] },
  { id: 'tier-b', name: 'Tier B', price: 500, label: '$500', description: 'Composio integrations (100+ apps)', examples: ['Slack', 'HubSpot', 'Zendesk', 'Salesforce', 'Jira'] },
  { id: 'tier-c', name: 'Tier C', price: 1500, label: '$1,500', description: 'Database & API integrations', examples: ['PostgreSQL', 'MySQL', 'REST APIs', 'GraphQL'] },
  { id: 'tier-d', name: 'Tier D', price: 0, label: 'T&M', description: 'Enterprise / Legacy systems', examples: ['SAP', 'Epic', 'Cerner', 'Custom protocols'] },
];

export const BASE_AGENT_PRICE = 4000;
