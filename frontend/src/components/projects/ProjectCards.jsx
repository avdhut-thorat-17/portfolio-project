import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCards = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-4 flex flex-col justify-between cursor-pointer"
            onClick={() => openModal(project)}
            style={{
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div> {/* Increased opacity */}
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white">{project.name}</h2>
              <p className="mt-2 text-gray-100">{project.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white">Tech Stack:</h3>
                <ul className="list-disc list-inside ml-2">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx} className="text-gray-300">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative z-10 mt-4 flex justify-between items-center">
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
              <a href={project.github} className="text-gray-300 hover:text-white">
                <img src="/github.png" alt="GitHub" className="h-6 w-6 inline-block" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ProjectCards;
