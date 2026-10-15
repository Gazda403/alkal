import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import ProfileCutaway from './components/ProfileCutaway';
import EnergyCalculator from './components/EnergyCalculator';
import QuoteEstimator from './components/QuoteEstimator';
import ProjectsGallery from './components/ProjectsGallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState('');

  const handleOpenQuoteModal = (productName = '') => {
    setSelectedProductForModal(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForModal('');
  };

  const handleSelectProduct = (productName) => {
    // Smooth scroll to the interactive calculator with the preselected product
    const calcSection = document.getElementById('kalkulator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenQuoteModal(productName);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#0F172A] flex flex-col font-sans selection:bg-[#0F172A] selection:text-[#F4F3EF]">
      {/* Editorial Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section with Architectural Showcase & 3-Step Value Ribbon */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Product Program & Technical Profile Showcase */}
        <ProductShowcase onSelectProduct={handleSelectProduct} />

        {/* Interactive Anatomy / Profile Cutaway */}
        <ProfileCutaway />

        {/* Energy & Acoustic Savings Simulator */}
        <EnergyCalculator onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Interactive Lead Estimator / Wizard */}
        <QuoteEstimator />

        {/* Realized Projects in Banja Luka */}
        <ProjectsGallery onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Local Trust & Dario Kalezić Master Craftsmanship */}
        <WhyUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Customer Reviews & Social Proof */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Mobile 1-Tap Call & Viber Sticky Bar */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={selectedProductForModal}
      />
    </div>
  );
}
