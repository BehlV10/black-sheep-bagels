import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NoticeBanner from './components/NoticeBanner';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import LocationsSection from './components/LocationsSection';
import MarketOutpost from './components/MarketOutpost';
import EventsSection from './components/EventsSection';
import InstagramGallery from './components/InstagramGallery';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#c89243] selection:text-white">
      <NoticeBanner />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <LocationsSection />
        <MarketOutpost />
        <EventsSection />
        <InstagramGallery />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
