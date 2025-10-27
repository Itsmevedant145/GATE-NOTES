import React, { useState } from 'react';
import ComplexityTable from './Noes/ComplexityTable';

function ComplexityToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110"
        title="Show Complexity Table"
      >
        🧩
      </button>

      {/* Popup Table */}
      {isOpen && (
        <div className="mt-2 p-4 w-80 max-h-96 overflow-auto bg-gray-900 text-gray-100 rounded-lg shadow-xl border border-gray-700 animate-fadeIn">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Complexity Table</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white font-bold"
            >
              ✖
            </button>
          </div>
          <ComplexityTable />
        </div>
      )}
    </div>
  );
}

export default ComplexityToggle;
