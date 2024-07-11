import React from 'react';

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Amrutvahini College of Engineering, Sangamner(Pune)",
    period: "2021 - 2025",
    grades: "8.3 GPA out of 10 GPA",
    description: "Graduated with honors, with a specialization in software engineering and web development. Developed a solid foundation in computer engineering principles and completed several projects that enhanced practical skills in coding and application development."
  },
  {
    degree: "Junior College (12th)",
    institution: "Mahatma Phule Junior College, Dadh(Loni)",
    period: "2019 - 2021",
    grades: "84% out of 100%",
    description: "Achieved a strong academic record with a focus on information technology and data science. Gained proficiency in managing IT systems and understanding data analytics through various coursework and practical experiences."
  },
];

const EducationPage = () => {
  return (
    <div className="bg-transparent max-w-7xl mx-auto px-4 py-9 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">Education</h2>
      <div className="relative">
        <div className="hidden md:block border-l-4 border-black absolute h-full left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex items-center justify-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div
                className={`w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg relative ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <h3 className="text-2xl font-semibold text-black">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-gray-600">{edu.institution}</h4>
                <p className="text-sm text-gray-500">{edu.period}</p>
                <p className="text-sm text-black">{edu.grades}</p>
                <p className="mt-2 text-gray-600">{edu.description}</p>
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

export default EducationPage;
