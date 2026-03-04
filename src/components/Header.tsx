import { useState, useEffect } from 'react';
import { Clock, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Ferme le menu après avoir cliqué
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-[#0f0f0f]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Clock className="w-8 h-8 text-[#D4AF37]" />
            <span className="text-xl sm:text-2xl font-bold text-white">TimeTravel Agency</span>
          </div>

          {/* Navigation Bureau (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['hero', 'destinations', 'experience', 'reservation', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-200 font-medium capitalize"
              >
                {item === 'hero' ? 'Accueil' : item}
              </button>
            ))}
          </nav>

          {/* Bouton Menu Mobile (Les 3 traits) */}
          <button 
            className="md:hidden text-[#D4AF37] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['hero', 'destinations', 'experience', 'reservation', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-300 hover:text-[#D4AF37] hover:bg-gray-900 rounded-md capitalize"
              >
                {item === 'hero' ? 'Accueil' : item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}