
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StrategySection from './components/StrategySection';
import FeaturesGrid from './components/FeaturesGrid';
import HeavyLifting from './components/HeavyLifting';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StrategySection />
        <FeaturesGrid />
        <HeavyLifting />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
