import React, { useState } from 'react';
import JuniorDeveloperPortfolio from './JuniorDeveloperPortfolio';
import Practcie from './Practcie';
import ResumeBuilder from './ResumeBuilder';
import DBMSNotes from './Noes/DBMSNotes'
import DSANotes from './Noes/DSANotes';
import OSNotes from './Noes/OSNotes'
import TOCCDNotes from './Noes/TOCCDNotes';
import CAlgoNotes from './Noes/CALGONotes';
import CNNotes from './Noes/CNNotes';
import ComplexityTable from './Noes/ComplexityTable';
import DiscreteMathNotes from './Noes/DiscreteMathNotes';
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: '🏠 Home' },
    { id: 'dbms', label: '💾 DBMS' },
    { id: 'dsa', label: '🧠 DSA' },
    { id: 'cn', label: '🌐 CN' },
    { id: 'toccd', label: '⚙️ TOCCD' },
    { id: 'calgo', label: '🧩 C Algo' },
    { id: 'os', label: '🖥️ OS' },
    { id: 'discretemath', label: '➗ Discrete Math' },
    // { id: 'practice', label: '💪 Practice' },
    // { id: 'resume', label: '📄 Resume Builder' },
    // { id: 'portfolio', label: '🚀 Portfolio' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dbms': return <DBMSNotes />;
      case 'cn': return <CNNotes />;
      case 'dsa': return <DSANotes />;
      case 'calgo': return <CAlgoNotes />;
      case 'os': return <OSNotes />;
      case 'discretemath': return <DiscreteMathNotes />;
      case 'toccd': return <TOCCDNotes />;
      // case 'practice': return <Practcie />;
      // case 'resume': return <ResumeBuilder />;
      // case 'portfolio': return <JuniorDeveloperPortfolio />;
      default:
        return (
          <div className="text-center mt-24 animate-fadeIn">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Welcome, Gate Aspirant 👋
            </h1>
            <p className="text-gray-400 mt-3 text-lg tracking-wide">
              Level up your GATE prep with beautiful, focused tools.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      
      {/* Navbar */}
      <nav className="backdrop-blur-lg bg-white/10 sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            GATE Prep Portal
          </h1>

          {/* Desktop Tabs */}
          <ul className="hidden md:flex space-x-4">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer px-3 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg scale-105'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center space-y-4 py-10 z-40 animate-fadeIn">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-3/4 text-center py-3 rounded-lg text-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                    : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 transition-all duration-500 animate-fadeInUp">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6 border-t border-white/10">
        © 2025 GATE Prep Portal • Crafted with 💙 for Learners
        <div className="mt-4">
          <ComplexityTable />
        </div>
      </footer>
    </div>
  );
}

export default App;
