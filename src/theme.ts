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
  primary: '#1a1a2e',
  primaryLight: '#242444',
  accent: '#ff6b35',
  accentLight: '#ff8555',
  accentGradientStart: '#ff6b35',
  accentGradientEnd: '#ff8555',
  surface: '#0f0f1a',
  surfaceLight: '#1a1a2e',
  surfaceDarkest: '#0a0a12',
  backgroundLight: '#f5f5f7',
  backgroundLightSecondary: '#ffffff',
  text: '#ffffff',
  textMuted: '#a0a0b0',
  textDim: '#707080',
  textDark: '#303030',
  textDarkMuted: '#666666',
  success: '#4caf50',
  support: '#4361ee',
  marketing: '#7209b7',
  hr: '#f72585',
  finance: '#4cc9f0',
  sales: '#ff6b35',
};
