import { createDarkTheme, createLightTheme, type BrandVariants } from '@fluentui/react-components';

const incubyteBrand: BrandVariants = {
  10: '#050a10',
  20: '#0a1420',
  30: '#101e30',
  40: '#162840',
  50: '#1a1a2e', // Primary dark
  60: '#243050',
  70: '#2e3a60',
  80: '#384470',
  90: '#424e80',
  100: '#4c5890',
  110: '#5662a0',
  120: '#606cb0',
  130: '#6a76c0',
  140: '#7480d0',
  150: '#7e8ae0',
  160: '#8894f0',
};

export const incubyteLightTheme = createLightTheme(incubyteBrand);
export const incubyteDarkTheme = createDarkTheme(incubyteBrand);

// Custom overrides for accent color (orange)
export const customTheme = {
  ...incubyteDarkTheme,
  colorBrandForeground1: '#ff6b35',
  colorBrandForeground2: '#ff8555',
  colorBrandBackground: '#ff6b35',
  colorBrandBackgroundHover: '#ff8555',
  colorBrandBackgroundPressed: '#e55a2a',
  colorNeutralBackground1: '#0f0f1a',
  colorNeutralBackground2: '#1a1a2e',
  colorNeutralBackground3: '#242444',
  colorNeutralForeground1: '#ffffff',
  colorNeutralForeground2: '#b0b0c0',
  colorNeutralForeground3: '#808090',
};

export const colors = {
  // Primary backgrounds
  background: '#0A0D14',
  backgroundSecondary: '#111827',
  backgroundTertiary: '#0B1120',

  // Accent colors
  accent: '#E07A3A',
  accentSecondary: '#64748B',

  // Text colors
  text: '#F1F5F9',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',

  // Highlight colors
  success: '#2DD4BF',

  // Light backgrounds (for inverted sections)
  backgroundLight: '#F8FAFC',
  backgroundLightSecondary: '#F1F5F9',
  textDark: '#0F172A',
  textDarkSecondary: '#475569',

  // Legacy category colors (keep for agent catalog)
  support: '#3B82F6',
  marketing: '#8B5CF6',
  hr: '#EC4899',
  finance: '#06B6D4',
  sales: '#E07A3A',
};
