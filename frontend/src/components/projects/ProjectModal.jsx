import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full sm:max-w-xl md:max-w-2xl mx-4 p-6 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <div className="max-h-full overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <p className="mb-4">{project.description}</p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Features:</h3>
            <ul className="list-disc list-inside ml-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Tech Stack:</h3>
            <ul className="list-disc list-inside ml-2">
              {project.techStack.map((tech, idx) => (
                <li key={idx} className="text-gray-600">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Images:</h3>
            <div className="flex space-x-4 overflow-x-auto">
              {project.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Project ${idx + 1}`}
                  className="w-32 h-32 object-cover rounded-md cursor-pointer"
                  onClick={() => openImageModal(image)}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            <a href={project.github} className="text-gray-600 hover:text-black">
              <img src="/github.png" alt="GitHub" className="h-6 w-6 inline-block" />
            </a>
          </div>
        </div>
      </div>

      <ImageModal imageUrl={selectedImage} isOpen={!!selectedImage} onClose={closeImageModal} />
    </div>
  );
};

export default ProjectModal;
