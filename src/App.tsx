import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import ClassesSection from './components/ClassesSection';
import ScheduleSection from './components/ScheduleSection';
import VideoSection from './components/VideoSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      {/* Mobile Menu Button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-full shadow-lg"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 pt-20">
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Barbarian Jiu Jitsu</h2>
          <nav>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block py-2 hover:text-gray-300 transition-colors flex items-center w-full text-left"
                >
                  <ChevronRight size={16} className="mr-2" /> Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('classes')} 
                  className="block py-2 hover:text-gray-300 transition-colors flex items-center w-full text-left"
                >
                  <ChevronRight size={16} className="mr-2" /> Modalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('schedule')} 
                  className="block py-2 hover:text-gray-300 transition-colors flex items-center w-full text-left"
                >
                  <ChevronRight size={16} className="mr-2" /> Horários
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('trial')} 
                  className="block py-2 hover:text-gray-300 transition-colors flex items-center w-full text-left"
                >
                  <ChevronRight size={16} className="mr-2" /> Aula Experimental
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block py-2 hover:text-gray-300 transition-colors flex items-center w-full text-left"
                >
                  <ChevronRight size={16} className="mr-2" /> Contato
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative">
        <Navbar />
        <Banner scrollPosition={scrollPosition} />
        <AboutSection />
        <ClassesSection />
        <ScheduleSection />
        <VideoSection />
        <ContactSection />

        {/* Footer */}
        <footer className="bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo and Location */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-xl"><img src="src/media/logo.png" alt="" /></span>
                  </div>
                  <h3 className="text-xl font-bold">Barbarian Jiu Jitsu</h3>
                </div>
                <div className="flex items-start mb-2">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p>Av. Paulista, 1000 - Bela Vista</p>
                    <p>São Paulo - SP, 01310-100</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline mt-1 inline-block">
                      Ver no mapa
                    </a>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-xl font-bold mb-4">Navegação</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">Quem Somos</button></li>
                  <li><button onClick={() => scrollToSection('classes')} className="hover:text-gray-300 transition-colors">Modalidades</button></li>
                  <li><button onClick={() => scrollToSection('schedule')} className="hover:text-gray-300 transition-colors">Horários</button></li>
                  <li><button onClick={() => scrollToSection('trial')} className="hover:text-gray-300 transition-colors">Aula Experimental</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contato</button></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-2" />
                    <span>(19) 99737-0245</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-2" />
                    <span>contato@barbarian.com.br</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Redes Sociais</h4>
                    <div className="flex space-x-2">
                      <a href="https://instagram.com/barbarian_americana" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Barbarian Jiu Jitsu. Todos os direitos reservados | Desenvolvido por Murylo</p>
            </div>
          </div>
        </footer>
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;