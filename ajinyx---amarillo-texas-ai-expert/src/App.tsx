import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import Home from './pages/Home';
import EnterpriseAdvisory from './pages/EnterpriseAdvisory';
import SmallBusinessGrowth from './pages/SmallBusinessGrowth';
import CustomSolutions from './pages/CustomSolutions';
import BookMeeting from './pages/BookMeeting';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-400">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enterprise" element={<EnterpriseAdvisory />} />
          <Route path="/small-business" element={<SmallBusinessGrowth />} />
          <Route path="/custom-solutions" element={<CustomSolutions />} />
          <Route path="/book/meeting" element={<BookMeeting />} />
        </Routes>
        <Footer />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}
