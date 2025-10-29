import React, { useState } from 'react';

import ResumeBuilder from './ResumeBuilder';
import DBMSNotes from './Noes/DBMSNotes';
import DSANotes from './Noes/DSANotes';
import OSNotes from './Noes/OSNotes';
import TOCCDNotes from './Noes/TOCCDNotes';
import CAlgoNotes from './Noes/CALGONotes';
import GATEMathFormulas from './Noes/GATEMathFormulas';
import CNNotes from './Noes/CNNotes';
import GATEDigitalLogicNotes from './Noes/GATEDigitalLogicNotes';
import ComplexityToggle from './ComplexityToggle';
import DiscreteMathNotes from './Noes/DiscreteMathNotes';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠', gradient: 'from-cyan-400 to-blue-500' },
    { id: 'dbms', label: 'DBMS', icon: '💾', gradient: 'from-purple-400 to-pink-500' },
    { id: 'dsa', label: 'DSA', icon: '🧠', gradient: 'from-green-400 to-emerald-500' },
    { id: 'maths', label: 'GATE Maths', icon: '📐', gradient: 'from-orange-400 to-red-500' },
    { id: 'cn', label: 'CN', icon: '🌐', gradient: 'from-blue-400 to-indigo-500' },
    { id: 'dl', label: 'Digital Logic', icon: '💡', gradient: 'from-yellow-400 to-orange-500' },
    { id: 'toccd', label: 'TOCCD', icon: '⚙️', gradient: 'from-teal-400 to-cyan-500' },
    { id: 'calgo', label: 'C Algo', icon: '🧩', gradient: 'from-rose-400 to-pink-500' },
    { id: 'os', label: 'OS', icon: '🖥️', gradient: 'from-violet-400 to-purple-500' },
    { id: 'discretemath', label: 'Discrete Math', icon: '➗', gradient: 'from-fuchsia-400 to-purple-500' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dbms': return <DBMSNotes />;
      case 'cn': return <CNNotes />;
      case 'dsa': return <DSANotes />;
      case 'calgo': return <CAlgoNotes />;
      case 'os': return <OSNotes />;
      case 'dl': return <GATEDigitalLogicNotes />;
      case 'discretemath': return <DiscreteMathNotes />;
      case 'toccd': return <TOCCDNotes />;
      case 'maths': return <GATEMathFormulas />;
      default:
        return (
          <div className="text-center mt-32 px-4 animate-fadeIn">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-3xl opacity-30 animate-pulse"></div>
              <h1 className="relative text-5xl sm:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight tracking-tight">
                Welcome Back 👋
              </h1>
            </div>
            <p className="text-gray-400 mt-6 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Your ultimate companion for GATE preparation. Choose a subject to dive in.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {tabs.slice(1).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tab.icon}
                  </div>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${tab.gradient} text-transparent bg-clip-text`}>
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 flex flex-col relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/5 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30">
                G
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text tracking-tight">
                GATE Prep
              </h1>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-xl opacity-20 blur-sm`}></div>
                  )}
                  <div className="relative flex items-center gap-2">
                    <span className="text-lg">{tab.icon}</span>
                    <span className="hidden xl:inline">{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${tab.gradient}`}></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full backdrop-blur-xl bg-black/40 border-t border-white/5 animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`relative p-4 rounded-xl text-left transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white/10 border border-white/20'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tab.icon}</span>
                      <span className={`text-sm font-semibold ${
                        activeTab === tab.id 
                          ? `bg-gradient-to-r ${tab.gradient} text-transparent bg-clip-text`
                          : 'text-gray-300'
                      }`}>
                        {tab.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 transition-all duration-500">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="relative backdrop-blur-xl bg-black/20 border-t border-white/5 text-center text-gray-500 text-sm py-6">
        <p className="flex items-center justify-center gap-2">
          <span>© 2025 GATE Prep Portal</span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1">
            Crafted with <span className="text-red-500 animate-pulse">♥</span> for Learners
          </span>
        </p>
      </footer>

      {/* Floating Complexity Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <ComplexityToggle />
      </div>
    </div>
  );
}

export default App;