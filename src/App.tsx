import { FluentProvider } from '@fluentui/react-components';
import { customTheme } from './theme';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Problem } from './components/Problem';
import { ValueEquation } from './components/ValueEquation';
import { Offer } from './components/Offer';
import { ProductShowcase } from './components/ProductShowcase';
import { AgentCatalog } from './components/AgentCatalog';
import { PricingCalculator } from './components/PricingCalculator';
import { ValueStack } from './components/ValueStack';
import { Timeline } from './components/Timeline';
import { WhyIncubyte } from './components/WhyIncubyte';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <FluentProvider theme={customTheme}>
      <div style={{
        backgroundColor: '#0f0f1a',
        color: '#ffffff',
        minHeight: '100vh',
        fontFamily: '"Segoe UI Variable", "Segoe UI", system-ui, sans-serif',
      }}>
        {/* Dark - Hero with dramatic background */}
        <Hero />

        {/* Dark - Social proof */}
        <Marquee />

        {/* Light - Problem identification */}
        <Problem />

        {/* Dark - Value proposition */}
        <ValueEquation />

        {/* Light - Product proof */}
        <ProductShowcase />

        {/* Dark - Offering details */}
        <Offer />
        <div id="catalog">
          <AgentCatalog />
        </div>
        <div id="pricing">
          <PricingCalculator />
        </div>

        {/* Light - Additional value */}
        <ValueStack />

        {/* Dark - Process & credibility */}
        <Timeline />
        <div id="about">
          <WhyIncubyte />
        </div>

        {/* Dark - Social proof with photos */}
        <Testimonials />

        {/* Dark - Final CTA */}
        <CTA />
        <Footer />
      </div>
    </FluentProvider>
  );
}

export default App;
