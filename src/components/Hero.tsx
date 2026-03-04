import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0f0f] z-10" />

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30" />

      <div className={`relative z-20 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Voyagez à travers le Temps
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Découvrez les époques les plus extraordinaires de l'histoire.
        </p>
        <button
          onClick={scrollToDestinations}
          className="bg-[#D4AF37] hover:bg-[#C4A037] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          Explorer les Destinations
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </div>
    </section>
  );
}
