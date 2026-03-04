import { useState } from 'react';

const destinations = [
  // NOUVELLE SECTION : PRÉSENTATION DE L'AGENCE
  {
    id: 'presentation',
    title: 'Découvrez TimeTravel Agency',
    description:
      "Une immersion exclusive dans les coulisses de nos expéditions temporelles avec notre présentation officielle.",
    image: 'https://i.imgur.com/PGoReVF.png', 
    video: 'https://res.cloudinary.com/ddqiwwsjb/video/upload/Vid%C3%A9o_finale_voix-off_et_musique_sdhjxy.mp4',
  },
  {
    id: 'paris',
    title: 'Paris 1889',
    description:
      "Vivez l'Exposition Universelle et découvrez la Tour Eiffel à son inauguration.",
    image: 'https://i.imgur.com/JToEwRi.jpg',
    video: 'https://res.cloudinary.com/ddqiwwsjb/video/upload/paris1889-video_zo2bpp.mp4',
  },
  {
    id: 'florence',
    title: 'Florence 1504',
    description:
      'Plongez dans la Renaissance italienne et admirez le génie de Michel-Ange.',
    image: 'https://i.imgur.com/DJbAN1w.jpg',
    video: 'https://res.cloudinary.com/ddqiwwsjb/video/upload/florence1504-video_lykxsc.mp4', 
  },
  {
    id: 'cretace',
    title: 'Crétacé',
    description:
      "Explorez l’ère des dinosaures et la nature sauvage d'il y a 65 millions d'années.",
    image: 'https://i.imgur.com/UKBfs6b.jpg',
    video: 'https://res.cloudinary.com/ddqiwwsjb/video/upload/cretace-video_zrydm7.mp4',
  },
];

export default function Destinations() {
  const [active, setActive] = useState(null);

  return (
    <section id="destinations" className="py-24 bg-[#0f0f0f] text-white px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Nos Destinations Exclusives
      </h2>

      {/* Changement de grid-cols-3 à grid-cols-2 ou adaptatif pour 4 éléments */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition duration-500 border border-gray-800"
          >
            <div className="relative">
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">
                {dest.title}
              </h3>

              <p className="text-gray-300 mb-6">{dest.description}</p>

              {active === dest.id && (
                <div className="mb-6 animate-fade-in bg-black rounded-xl overflow-hidden">
                  {dest.video.includes('.mp4') ? (
                    <video
                      src={dest.video}
                      controls
                      autoPlay
                      className="w-full h-64 bg-black"
                    >
                      Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                  ) : (
                    <iframe
                      src={dest.video}
                      className="w-full h-64 border-0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              )}

              <button
                onClick={() =>
                  setActive(active === dest.id ? null : dest.id)
                }
                className="w-full bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8972f] transition-colors"
              >
                {active === dest.id ? 'Fermer la vidéo' : 'Découvrir'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}