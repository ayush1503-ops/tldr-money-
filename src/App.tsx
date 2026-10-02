import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import NetWorthTracker from './pages/NetWorthTracker';
import FireCalculator from './pages/FireCalculator';
import Calculators from './pages/Calculators';
import Compare from './pages/Compare';
import InfoPage from './pages/InfoPage';
import ThreeBackground from './components/ThreeBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-fg-primary)] relative selection:bg-[var(--color-accent)] selection:text-white scroll-smooth">
        <ThreeBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-24 md:pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expense-tracker-india" element={<ExpenseTracker />} />
              <Route path="/net-worth-tracker-india" element={<NetWorthTracker />} />
              <Route path="/fire-calculator-india" element={<FireCalculator />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/about" element={<InfoPage />} />
              <Route path="/blog" element={<InfoPage />} />
              <Route path="/security" element={<InfoPage />} />
              <Route path="/how-we-make-money" element={<InfoPage />} />
              <Route path="/faq" element={<InfoPage />} />
              <Route path="/contact" element={<InfoPage />} />
              <Route path="/privacy" element={<InfoPage />} />
              <Route path="/terms" element={<InfoPage />} />
              <Route path="/delete-account" element={<InfoPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
