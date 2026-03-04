import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import BookingForm from './components/BookingForm';
import Experience from './components/Experience';
import Quiz from './components/Quiz';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Header />
      <Hero />
      <About />
      <Destinations />
      <BookingForm/>
      <Experience />
      <Quiz />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;