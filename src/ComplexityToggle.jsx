import React, { useState } from 'react';
import ComplexityTable from './Noes/ComplexityTable';

function ComplexityToggle() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleModal} // toggles modal
        className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg text-2xl transition-transform transform hover:scale-110"
        title={isOpen ? "Close Complexity Table" : "Open Complexity Table"}
      >
        🧩
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          {/* Modal Box */}
          <div className="relative bg-gray-900 text-gray-100 w-11/12 max-w-5xl rounded-lg shadow-2xl animate-fadeIn"
               style={{ top: '15vh', bottom: '15vh', height: 'auto', overflow: 'auto', position: 'absolute' }}>
            
            {/* Close Button */}
            <button
              onClick={toggleModal} // also toggles
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg text-lg transition-transform transform hover:scale-110"
              title="Close"
            >
              ✖
            </button>

            {/* Modal Header */}
            <div className="flex justify-center mb-4 pt-4">
              <h2 className="text-2xl font-bold text-center">Complexity Table</h2>
            </div>

            {/* Table */}
            <div className="p-4">
              <ComplexityTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ComplexityToggle;
