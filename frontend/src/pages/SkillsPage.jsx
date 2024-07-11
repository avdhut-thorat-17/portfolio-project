import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faHtml5, faCss3Alt, faPython, faJava, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import './SkillPage.css'; // Ensure this CSS file is created and linked

const skills = [
  { name: 'React', level: 'Expert', icon: faReact, color: '#61DBFB', percentage: 85 },
  { name: 'JavaScript', level: 'Expert', icon: faJs, color: '#F0DB4F', percentage: 90 },
  { name: 'MongoDB', level: 'Proficient', icon: faDatabase, color: '#4DB33D', percentage: 70 },
  { name: 'Node.js', level: 'Proficient', icon: faNodeJs, color: '#3C873A', percentage: 75 },
  { name: 'C++', level: 'Proficient', icon: faCode, color: '#00599C', percentage: 75 },
  { name: 'Next.js', level: 'Proficient', icon: faReact, color: '#000000', percentage: 75 },
  { name: 'MySQL', level: 'Proficient', icon: faDatabase, color: '#4479A1', percentage: 70 },
  { name: 'GitHub', level: 'Proficient', icon: faGithub, color: '#181717', percentage: 80 },
  { name: 'HTML5', level: 'Expert', icon: faHtml5, color: '#E34C26', percentage: 95 },
  { name: 'Java', level: 'Proficient', icon: faJava, color: '#007396', percentage: 75 },
  { name: 'CSS3', level: 'Expert', icon: faCss3Alt, color: '#264DE4', percentage: 80 },
  { name: 'C', level: 'Proficient', icon: faCode, color: '#A8B9CC', percentage: 75 },
  { name: 'Python', level: 'Proficient', icon: faPython, color: '#3776AB', percentage: 80 },
  { name: 'Pandas', level: 'Proficient', icon: faPython, color: '#150458', percentage: 70 },
  { name: 'NumPy', level: 'Proficient', icon: faPython, color: '#013243', percentage: 70 },
];

const Skills = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState(6);

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
    setVisibleSkills(6); // Reset visible skills when filter changes
  };

  const handleViewMore = () => {
    setVisibleSkills(prevVisibleSkills => prevVisibleSkills + 6);
  };

  const handleViewLess = () => {
    setVisibleSkills(6); // Reset to initial state
  };

  const filteredSkills = selectedLevel === 'All' 
    ? skills 
    : skills.filter(skill => skill.level === selectedLevel);

  const skillsToDisplay = filteredSkills.slice(0, visibleSkills);

  return (
    <div className="skills-container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="skills-title text-3xl font-extrabold text-gray-900 mb-6">Skills</h2>
      <div className="mb-6">
        <select 
          value={selectedLevel} 
          onChange={handleLevelChange} 
          className="p-2 rounded border border-gray-300"
        >
          <option value="All">All</option>
          <option value="Expert">Expert</option>
          <option value="Proficient">Proficient</option>
        </select>
      </div>
      <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsToDisplay.map((skill, index) => (
          <div
            key={index}
            className={`skill-card p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 ${skill.level.toLowerCase()}`}
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-icon-container mb-4" style={{ color: skill.color }}>
              {skill.icon && <FontAwesomeIcon icon={skill.icon} size="3x" />}
            </div>
            <h3 className="skill-name text-xl font-semibold">{skill.name}</h3>
            <p className="skill-level mt-2">{skill.level}</p>
            <div className="skill-percentage pt-5">{skill.percentage}%</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {visibleSkills < filteredSkills.length && (
          <button 
            onClick={handleViewMore} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 mr-2"
          >
            View More
          </button>
        )}
        {visibleSkills > 6 && (
          <button 
            onClick={handleViewLess} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300"
          >
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
