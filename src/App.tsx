import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans relative selection:bg-[var(--color-accent)] selection:text-white">
        <ThreeBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Other routes would go here but we're focusing on the homepage for now */}
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
