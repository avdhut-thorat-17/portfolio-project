// src/components/Achievements.jsx

import React from 'react';
import './achievementsPage.css';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Hackathon Winner',
    description: 'Won the second place in the College level SIH Hackathon 2023.',
    image: 'https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/0317_hackathon_0.jpg?itok=6wpRdWAc/150',
  },
  {
    title: 'Top Coder',
    description: '1st Prize winner in Sumedh Technical Event - Code Clash Competition',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIpD3R9xQoqzFfxfr0w0ULgbfzieWfeueMg&s/150',
  },
  {
    title: 'Project Excellence',
    description: 'Received the best project award for creating the College Event Management Website.',
    image: 'https://smb.telkomuniversity.ac.id/wp-content/uploads/2023/09/spesifikasi-laptop.jpg',
  },
  // Add more achievements here...
];

const Achievements = () => {
  return (
    <div className="achievements-container py-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center text-black mb-16"
        >
          Achievements
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="achievement-card bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative"
            >
              <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h2>
                <p className="text-gray-700">{achievement.description}</p>
                <div className="card-number absolute top-4 right-4 text-4xl text-gray-300 font-extrabold">
                  #{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
