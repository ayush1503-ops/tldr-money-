import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThreeBackground from './components/ThreeBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-bg-base)] text-[var(--color-fg-primary)] relative selection:bg-[var(--color-accent)] selection:text-white scroll-smooth">
        <ThreeBackground />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-24 md:pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
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
