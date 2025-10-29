import React, { useState } from 'react';
import ComplexityTable from './Noes/ComplexityTable';

function ComplexityToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [numFunctions, setNumFunctions] = useState(1);
  const [functions, setFunctions] = useState(['n']);
  const [nMax, setNMax] = useState(10);
  const [graph, setGraph] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Choose count, Step 2: Enter functions

  const toggleModal = () => {
    setIsOpen(prev => !prev);
    // Reset state when closing
    if (isOpen) {
      setStep(1);
      setNumFunctions(1);
      setFunctions(['n']);
      setGraph(null);
    }
  };

  const handleNumFunctionsSubmit = () => {
    const count = Math.max(1, Math.min(4, Number(numFunctions)));
    setNumFunctions(count);
    setFunctions(Array(count).fill('').map((_, i) => i === 0 ? 'n' : ''));
    setStep(2);
  };

  const handleFunctionChange = (index, value) => {
    const newFunctions = [...functions];
    newFunctions[index] = value;
    setFunctions(newFunctions);
  };

  const generateGraph = async () => {
    // Filter out empty functions
    const validFunctions = functions.filter(f => f.trim() !== '');
    
    if (validFunctions.length === 0) {
      alert('Please enter at least one function!');
      return;
    }

    setLoading(true);
    setGraph(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/plot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          functions: validFunctions,
          n_max: Number(nMax)
        })
      });

      if (!response.ok) throw new Error("Backend error");
      const data = await response.json();
      setGraph(`data:image/png;base64,${data.image}`);
    } catch (error) {
      console.error("❌ Error fetching graph:", error);
      alert("Couldn't connect to Flask backend. Make sure it's running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  const resetToStep1 = () => {
    setStep(1);
    setGraph(null);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg text-2xl transition-transform transform hover:scale-110"
        title={isOpen ? 'Close Complexity Table' : 'Open Complexity Table'}
      >
        🧩
      </button>

      {/* Modal / Full-screen overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-center overflow-auto">
          <div
            className="relative bg-gray-900 text-gray-100 w-full max-w-6xl rounded-t-lg shadow-2xl"
            style={{
              position: 'absolute',
              top: '20vh',
              bottom: '0',
              overflowY: 'auto',
            }}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg text-lg transition-transform transform hover:scale-110 z-10"
              title="Close"
            >
              ✖
            </button>

            {/* Modal Content */}
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12">

              {/* Header */}
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg">
                  Algorithmic Complexity Visualizer
                </h2>
                <p className="mt-2 text-gray-400 text-lg">
                  Visualize and compare the growth of your algorithms
                </p>
              </div>

              {/* Step Indicator */}
              <div className="mx-6 md:mx-auto max-w-3xl mb-6 flex justify-center items-center gap-4">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  1
                </div>
                <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
                  2
                </div>
              </div>

              {/* Step 1: Choose Number of Functions */}
              {step === 1 && (
                <div className="mx-6 md:mx-auto max-w-3xl p-8 bg-gray-850 rounded-2xl shadow-2xl border border-gray-700">
                  <h3 className="text-2xl font-bold text-center mb-6 text-green-400">
                    How many functions do you want to compare?
                  </h3>
                  <p className="text-gray-400 text-center mb-6">
                    Choose between 1 and 4 functions
                  </p>
                  
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <input
                      type="number"
                      min="1"
                      max="4"
                      value={numFunctions}
                      onChange={(e) => setNumFunctions(e.target.value)}
                      className="w-24 p-4 text-center text-2xl rounded-xl bg-gray-900 border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={handleNumFunctionsSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-2xl text-white font-semibold shadow-lg transform hover:scale-105 transition duration-300"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Enter Functions */}
              {step === 2 && (
                <>
                  <div className="mx-6 md:mx-auto max-w-3xl p-8 bg-gray-850 rounded-2xl shadow-2xl border border-gray-700">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-green-400">
                        Enter Your Functions
                      </h3>
                      <button
                        onClick={resetToStep1}
                        className="text-sm text-gray-400 hover:text-white transition"
                      >
                        ← Change Count
                      </button>
                    </div>

                    <p className="text-gray-300 mb-6 text-center text-sm md:text-base">
                      Examples: <code className="bg-gray-900 px-2 py-1 rounded">n</code>, 
                      <code className="bg-gray-900 px-2 py-1 rounded mx-1">n^2</code>, 
                      <code className="bg-gray-900 px-2 py-1 rounded">n*log(n)</code>, 
                      <code className="bg-gray-900 px-2 py-1 rounded mx-1">2^n</code>
                    </p>

                    {/* Function Inputs */}
                    <div className="space-y-4 mb-6">
                      {functions.map((func, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-gray-400 font-semibold min-w-[80px]">
                            Function {index + 1}:
                          </span>
                          <input
                            type="text"
                            value={func}
                            onChange={(e) => handleFunctionChange(index, e.target.value)}
                            placeholder={`e.g., ${index === 0 ? 'n' : index === 1 ? 'n^2' : index === 2 ? 'n*log(n)' : '2^n'}`}
                            className="flex-1 p-3 rounded-xl bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Max n Input */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
                      <label className="text-gray-200 font-medium">Max n:</label>
                      <input
                        type="number"
                        placeholder="1000"
                        value={nMax}
                        onChange={(e) => setNMax(e.target.value)}
                        className="w-28 p-3 rounded-xl bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-300"
                      />
                    </div>

                    <div className="flex justify-center">
                      <button
                        onClick={generateGraph}
                        disabled={loading}
                        className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 rounded-2xl text-white font-semibold shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? "Generating..." : "Generate Graph"}
                      </button>
                    </div>
                  </div>

                  {/* Graph Output */}
                  <div className="mx-6 md:mx-auto max-w-4xl mt-10 p-6 bg-gray-850 rounded-2xl shadow-2xl border border-gray-700 flex justify-center items-center min-h-[300px]">
                    {graph ? (
                      <img
                        src={graph}
                        alt="Complexity Graph"
                        className="max-w-full rounded-xl shadow-md animate-fadeIn"
                      />
                    ) : loading ? (
                      <p className="text-gray-400">Processing...</p>
                    ) : (
                      <p className="text-gray-500 text-center">No graph generated yet.</p>
                    )}
                  </div>
                </>
              )}

              {/* Complexity Table */}
              <div className="mx-6 md:mx-auto max-w-4xl mt-8 p-6 border-t border-gray-700 rounded-xl shadow-inner bg-gray-850">
                <ComplexityTable />
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplexityToggle;