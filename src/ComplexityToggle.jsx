import React, { useState } from 'react';
import ComplexityTable from './Noes/ComplexityTable';

function ComplexityToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg text-2xl transition-transform transform hover:scale-110"
        title="Open Complexity Table"
      >
        🧩
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-gray-900 text-gray-100 w-11/12 max-w-6xl max-h-[90vh] p-6 rounded-lg overflow-auto shadow-2xl animate-fadeIn">
            
            {/* Floating Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg text-lg transition-transform transform hover:scale-110"
              title="Close"
            >
              ✖
            </button>

            {/* Modal Header */}
            <div className="flex justify-center mb-4">
              <h2 className="text-2xl font-bold text-center">Complexity Table</h2>
            </div>

            {/* Table */}
            <ComplexityTable />
          </div>
        </div>
      )}
    </>
  );
}

export default ComplexityToggle;
