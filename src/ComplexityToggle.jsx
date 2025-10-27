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
          <div className="bg-gray-900 text-gray-100 w-11/12 max-w-6xl max-h-[90vh] p-6 rounded-lg overflow-auto shadow-2xl animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Complexity Table</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold"
              >
                ✖
              </button>
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
