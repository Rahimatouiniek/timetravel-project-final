import { Clock, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="w-8 h-8 text-[#D4AF37]" />
              <span className="text-xl font-bold text-white">TimeTravel Agency</span>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour des voyages temporels d'exception depuis 1994.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  Expérience
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Voyages sur mesure</li>
              <li>Groupes privés</li>
              <li>Événements spéciaux</li>
              <li>Assistance premium</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>contact@timetravel.agency</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TimeTravel Agency. Tous droits réservés à travers le temps et l'espace.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Licence temporelle n° TT-2024-FR-001 | Certifié par l'Institut Temporel International
          </p>
        </div>
      </div>
    </footer>
  );
}
