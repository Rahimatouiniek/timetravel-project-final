import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; destination: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Quel type d\'environnement préférez-vous ?',
    options: [
      { text: 'Une ville élégante et culturelle', destination: 'paris' },
      { text: 'La nature sauvage et primitive', destination: 'cretace' },
      { text: 'Des palais et monuments artistiques', destination: 'florence' },
    ],
  },
  {
    id: 2,
    question: 'Qu\'aimeriez-vous découvrir ?',
    options: [
      { text: 'L\'architecture et les innovations', destination: 'paris' },
      { text: 'Les créatures préhistoriques', destination: 'cretace' },
      { text: 'Les chefs-d\'œuvre de la Renaissance', destination: 'florence' },
    ],
  },
  {
    id: 3,
    question: 'Quel est votre style de voyage ?',
    options: [
      { text: 'Sophistiqué et mondain', destination: 'paris' },
      { text: 'Aventureux et unique', destination: 'cretace' },
      { text: 'Culturel et enrichissant', destination: 'florence' },
    ],
  },
  {
    id: 4,
    question: 'Quelle expérience vous attire le plus ?',
    options: [
      { text: 'Assister à un événement historique majeur', destination: 'paris' },
      { text: 'Observer des espèces disparues', destination: 'cretace' },
      { text: 'Rencontrer des artistes légendaires', destination: 'florence' },
    ],
  },
];

const destinations = {
  paris: {
    name: 'Paris 1889',
    description: 'La Belle Époque vous attend ! Plongez dans l\'élégance parisienne et découvrez la Tour Eiffel fraîchement inaugurée.',
  },
  cretace: {
    name: 'Crétacé',
    description: 'L\'aventure préhistorique ultime ! Explorez un monde où les dinosaures règnent en maîtres.',
  },
  florence: {
    name: 'Florence 1504',
    description: 'La Renaissance italienne vous appelle ! Immergez-vous dans l\'art et la culture à leur apogée.',
  },
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<keyof typeof destinations | null>(null);

  const handleAnswer = (destination: string) => {
    const newAnswers = [...answers, destination];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const counts = newAnswers.reduce((acc: Record<string, number>, dest) => {
        acc[dest] = (acc[dest] || 0) + 1;
        return acc;
      }, {});

      const recommended = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      ) as keyof typeof destinations;

      setRecommendation(recommended);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendation(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quelle Époque Est Faite Pour Vous ?
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-gray-300 text-lg">
            Répondez à notre quiz pour découvrir votre destination idéale
          </p>
        </div>

        {!showResult ? (
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 border border-gray-800">
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Question {currentQuestion + 1} sur {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[#D4AF37] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-8">
              {questions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.destination)}
                  className="w-full text-left p-4 bg-black border border-gray-700 rounded-lg hover:border-[#D4AF37] hover:bg-gray-900 transition-all duration-300 text-white"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-8 border border-[#D4AF37] text-center">
            <CheckCircle2 className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Votre Destination Idéale :
            </h3>
            <h4 className="text-4xl font-bold text-[#D4AF37] mb-6">
              {recommendation && destinations[recommendation].name}
            </h4>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {recommendation && destinations[recommendation].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
              >
                Recommencer le quiz
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('destinations');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-[#D4AF37] text-black rounded-full hover:bg-[#C4A037] transition-all duration-300 font-semibold"
              >
                Voir toutes les destinations
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
