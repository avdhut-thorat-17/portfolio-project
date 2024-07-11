import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import ExperienceTimeline from './pages/ExperienceTimeline';
import Skills from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import FooterPage from './pages/FooterPage';
import Achievements from './pages/AchievementsPage';
import Navbar from './components/navbar/Navbar'; // Import the Navbar component

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Sumago Infotech Pvt. Ltd. Nashik",
    period: "Dec 2023 - Jan 2024",
    description: [
      "Led the development team in creating and maintaining web applications using MERN stack.",
      "Implemented front-end features with React.js and back-end services with Node.js and Express.",
      "Utilized MongoDB for database management.",
      "Collaborated with team members to design and optimize user experiences.",
      "Gained experience in full-stack development and agile methodologies."
    ]
  },
  {
    title: "Web Developer",
    company: "InternPe",
    period: "Nov 2023",
    description: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript.",
      "Improved website performance through efficient coding practices.",
      "Worked closely with the design team for visual and functional consistency.",
      "Contributed to the development of interactive web elements."
    ]
  },
  {
    title: "Open Source Contributor",
    company: "Hacktoberfest event",
    period: "Oct 2023",
    description: [
      "Contributed to various open-source projects.",
      "Submitted pull requests to improve code quality and add features.",
      "Collaborated with maintainers and contributors to enhance documentation.",
      "Gained experience in version control and open-source best practices."
    ]
  }
];

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="experience">
        <ExperienceTimeline experiences={experiences} />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="education">
        <EducationPage />
      </section>
      <section id="footer">
        <FooterPage />
      </section>
    </>
  );
}

export default App;
