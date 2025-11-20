import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InventoryTeaser from './components/InventoryTeaser';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy-950 min-h-screen flex flex-col font-sans">
      {/* Fixed Header Assembly */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </header>
      
      <main className="flex-grow">
        <Hero />
        {/* InventoryTeaser deve vir logo após o Hero para o efeito de sobreposição funcionar */}
        <InventoryTeaser />
        <Features />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;