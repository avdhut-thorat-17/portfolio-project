import React from 'react';

const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl w-full mx-4 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="flex justify-center">
          <img src={imageUrl} alt="Project" className="w-full h-auto object-contain rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
