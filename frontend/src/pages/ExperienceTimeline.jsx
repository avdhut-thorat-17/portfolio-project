import React from 'react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="bg-transparent max-w-7xl mx-auto px-4 py-9 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Experience Timeline</h2>
      <div className="relative">
        <div className="hidden md:block border-l-4 border-black absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div
                className={`w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg relative experience-card ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <h3 className="text-2xl font-semibold text-black">{experience.title}</h3>
                <h4 className="text-lg font-medium text-gray-600">{experience.company}</h4>
                <p className="text-sm text-gray-500">{experience.period}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'right-full mr-6' : 'left-full ml-6'}`}>
                  <div className="w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
