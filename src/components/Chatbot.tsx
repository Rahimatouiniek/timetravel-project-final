import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: 'Bonjour ! Je suis votre assistant temporel. Comment puis-je vous aider à organiser votre voyage (Paris 1889, Florence, Crétacé) ?',
    sender: 'bot',
    timestamp: new Date(),
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automatique vers le bas quand un message arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // LOGIQUE DE RÉPONSE DU BOT
  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();
    
    if (text.includes('paris')) return "Pour Paris 1889, l'Exposition Universelle est l'attraction phare. N'oubliez pas votre habit de soirée !";
    if (text.includes('florence') || text.includes('renaissance')) return "À Florence en 1504, vous pourrez croiser Michel-Ange. Évitez de parler de technologie moderne pour ne pas finir au cachot !";
    if (text.includes('crétacé') || text.includes('dinosaure')) return "Le Crétacé est magnifique mais dangereux. Restez dans la bulle de sécurité du dôme temporel.";
    if (text.includes('prix') || text.includes('cher') || text.includes('coûte')) return "Nos voyages temporels commencent à 5000€ par saut. Nous acceptons les Bitcoins et l'or pur.";
    if (text.includes('sécurité') || text.includes('danger')) return "Toutes nos destinations sont sécurisées par un bouclier temporel ISO 27001. Aucun risque de paradoxe !";
    if (text.includes('bonjour') || text.includes('salut')) return "Bonjour voyageur ! Quelle époque vous tente aujourd'hui ?";
    
    return "C'est une excellente question. Je vais me renseigner auprès de nos historiens. En attendant, voulez-vous des infos sur Paris ou Florence ?";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');

    // Simulation de réflexion du bot
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(currentInput),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[90vw] sm:w-96 h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-[#D4AF37] p-4 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="bg-black p-1.5 rounded-full">
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-black uppercase tracking-wider text-sm">Assistant Temporel</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:bg-black/10 p-1 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-[#D4AF37] text-black rounded-tr-none shadow-md shadow-[#D4AF37]/20'
                      : 'bg-gray-800 text-white rounded-tl-none border border-gray-700'
                  }`}>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-[10px] opacity-50 mt-1 text-right italic">
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Votre question..."
                className="flex-1 bg-black text-white border border-gray-700 rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all"
              />
              <button onClick={handleSend} className="bg-[#D4AF37] hover:bg-[#F5E6AB] text-black p-2 rounded-xl transition-all active:scale-90">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 bg-[#D4AF37] hover:bg-[#F5E6AB] text-black p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:rotate-12 z-50 border-2 border-black"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}