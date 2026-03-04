import { useEffect, useRef, useState } from 'react';
import { Shield, Sparkles, Bot } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Sécurité Temporelle',
    description: 'Nos protocoles de sécurité avancés garantissent votre protection absolue lors de chaque voyage. Technologie de pointe certifiée par l\'Institut Temporel International.',
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: 'Luxe & Raffinement',
    description: 'Profitez d\'un service 5 étoiles tout au long de votre périple. Hébergements d\'exception, guides privés et expériences exclusives personnalisées.',
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: 'Assistance IA 24/7',
    description: 'Notre intelligence artificielle veille sur vous en permanence. Support instantané, traduction universelle et conseils d\'experts à chaque instant.',
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Une Expérience Incomparable
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gradient-to-b from-gray-900 to-black rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/10 rounded-full mb-6 text-[#D4AF37]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
