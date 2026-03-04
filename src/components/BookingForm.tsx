import { useState } from 'react';
import { Calendar, Users, MapPin, Send } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi sécurisé
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservation" className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/20 shadow-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Réserver votre Saut Temporel</h2>
          <p className="text-gray-400">Remplissez le protocole de voyage pour garantir votre place dans le flux.</p>
        </div>

        {submitted ? (
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37] p-6 rounded-xl text-center animate-pulse">
            <p className="text-[#D4AF37] font-bold text-xl">Requête transmise avec succès !</p>
            <p className="text-gray-400 mt-2">Un agent temporel vous contactera sous 24h terrestres.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Destination
                </label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all">
                  <option>Paris 1889</option>
                  <option>Florence 1504</option>
                  <option>Crétacé (-65M années)</option>
                </select>
              </div>

              {/* Voyageurs */}
              <div>
                <label className="block text-sm font-medium text-[#D4AF37] mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Nombre de Voyageurs
                </label>
                <input type="number" min="1" max="5" defaultValue="1" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Date de Départ Souhaitée
              </label>
              <input type="date" required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">Votre Identifiant (Email)</label>
              <input type="email" required placeholder="nom@exemple.com" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
            </div>

            <button type="submit" className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl hover:bg-[#F5E6AB] transition-all transform active:scale-95 flex items-center justify-center gap-2">
              <Send className="w-5 h-5" /> Confirmer la Demande de Réservation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}