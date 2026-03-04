import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              L'Excellence du Voyage Temporel
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Depuis plus de 30 ans, TimeTravel Agency redéfinit l'art du voyage dans le temps.
              Nos services premium vous offrent une expérience unique et inoubliable à travers les
              époques les plus fascinantes de l'histoire de l'humanité.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Chaque voyage est conçu sur mesure par nos experts temporels, garantissant votre
              sécurité absolue et un confort incomparable. Nos guides certifiés vous accompagnent
              à chaque instant pour vous faire vivre des moments d'exception.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Rejoignez notre cercle exclusif de voyageurs temporels et découvrez des destinations
              que seuls quelques privilégiés ont eu la chance d'explorer.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-lg transform rotate-3" />
              {/* J'AI MIS UN LIEN VALIDE CI-DESSOUS */}
              <img
                src="https://res.cloudinary.com/ddqiwwsjb/image/upload/v1709485000/time-travel-composite.jpg" 
                alt="Nos époques exclusives : Paris, Florence et Crétacé"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover border border-[#D4AF37]/30"
                onError={(e) => {
                  // Image de secours si le lien expire
                  e.currentTarget.src = "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/50 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}