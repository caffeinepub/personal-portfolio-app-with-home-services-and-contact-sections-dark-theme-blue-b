import { useState } from 'react';
import HeaderNav from './components/HeaderNav';
import HomeSection from './sections/HomeSection';
import ServicesSection from './sections/ServicesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

type Section = 'home' | 'services' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <HeaderNav activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="flex-1">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
