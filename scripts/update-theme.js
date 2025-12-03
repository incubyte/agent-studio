#!/usr/bin/env node

/**
 * Theme Converter: Dark → Light (Incubyte Brand)
 *
 * This script updates all color values across components to match
 * Incubyte's light, professional brand identity.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Color mapping: Dark theme → Incubyte light theme
const colorMap = {
  // Backgrounds
  '#0A0D14': '#FFFFFF',
  '#0B1120': '#FFFFFF',
  '#111827': '#F8F9FA',
  '#0F172A': '#F1F3F5',

  // Text colors
  '#F1F5F9': '#1A202C',
  '#FFFFFF': '#1A202C',
  '#ffffff': '#1A202C',
  '#94A3B8': '#4A5568',
  '#64748B': '#718096',

  // Accent colors (orange → navy)
  '#E07A3A': '#0D3253',
  '#FF6B35': '#0D3253',
  '#ff6b35': '#0D3253',

  // Borders
  'rgba(255, 255, 255, 0.03)': 'rgba(226, 232, 240, 0.3)',
  'rgba(255, 255, 255, 0.05)': 'rgba(226, 232, 240, 0.5)',
  'rgba(255, 255, 255, 0.08)': 'rgba(226, 232, 240, 0.6)',
  'rgba(255, 255, 255, 0.1)': 'rgba(203, 213, 224, 0.6)',
  'rgba(255, 255, 255, 0.12)': 'rgba(203, 213, 224, 0.7)',
  'rgba(255, 255, 255, 0.15)': 'rgba(203, 213, 224, 0.8)',
  'rgba(255, 255, 255, 0.2)': 'rgba(203, 213, 224, 0.9)',
  'rgba(255, 255, 255, 0.3)': 'rgba(160, 174, 192, 0.4)',

  // Navigation/overlay backgrounds
  'rgba(10, 13, 20, 0.95)': 'rgba(255, 255, 255, 0.95)',
  'rgba(10, 13, 20, 0.9)': 'rgba(255, 255, 255, 0.9)',
  'rgba(10, 13, 20, 1)': 'rgba(255, 255, 255, 1)',

  // Specific component backgrounds
  'rgba(36, 36, 68, 0.8)': 'rgba(248, 249, 250, 0.95)',
  'rgba(17, 24, 39, 1)': 'rgba(231, 245, 255, 0.6)',

  // Button hover states
  'rgba(224, 122, 58, 0.1)': 'rgba(13, 50, 83, 0.08)',
  'rgba(224, 122, 58, 0.15)': 'rgba(13, 50, 83, 0.12)',
  'rgba(224, 122, 58, 0.25)': 'rgba(13, 50, 83, 0.15)',
  'rgba(224, 122, 58, 0.3)': 'rgba(13, 50, 83, 0.2)',
};

function replaceColors(content) {
  let result = content;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    const regex = new RegExp(oldColor.replace(/[()]/g, '\\$&'), 'gi');
    result = result.replace(regex, newColor);
  }

  return result;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = replaceColors(content);

  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✓ Updated: ${filePath}`);
    return true;
  }

  return false;
}

function main() {
  const componentsDir = path.join(__dirname, '../src/components');
  const files = glob.sync(`${componentsDir}/**/*.tsx`);

  console.log(`Processing ${files.length} component files...\\n`);

  let updatedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      updatedCount++;
    }
  });

  console.log(`\\n✅ Complete! Updated ${updatedCount} files.`);
}

main();
