import React from 'react';
import ProjectCards from '../components/projects/ProjectCards';

const projects = [
  {
    name: 'Property Listing Website',
    description: 'The "Property Listing Website" project is a designed to connect property owners with potential buyers and renters.',
    features:['Easy-to-navigate layout for quick access to emergency contacts.','Clean and responsive design, optimized for both desktop and mobile devices.','Integration of essential emergency services and resources in one platform.'],
    link: '#',
    github: 'https://github.com/avdhut-thorat-17/Property-Listing-Website-Frontend-',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    images: ['https://i.imgur.com/STeCCYP.png/150'],
    backgroundImage: 'https://i.imgur.com/STeCCYP.png'
  },
  {
    name: 'Social Media Website',
    description: 'The "Social Media Website" project is a modern web application that allows users to connect, share, and interact with each other.',
    features:['Easy-to-navigate layout for quick access to user profiles, posts, and interactions.','Clean and responsive design, optimized for both desktop and mobile devices.','User authentication and authorization for secure login and signup.','User profiles with the ability to post updates, images, and comments.','Real-time notifications and updates to keep users engaged.','Integration of social features such as liking, sharing, and commenting on posts.'],
    link: 'https://www.facebook.com',
    github: 'https://github.com/avdhut-thorat-17/social-media-website',
    techStack: ['ReactJs', 'MongoDB', 'Golang','Socket.io'],
    images: ['https://i.imgur.com/a7ZSfCf.jpg/150', 'https://i.imgur.com/suf4vQ9.png/150'],
    backgroundImage: 'https://i.imgur.com/a7ZSfCf.jpg'
  },
  {
    name: 'AirBnb Clone',
    description: 'The "AirBnb Clone" project, is a full-stack web application that replicates of Airbnb platform for users to search, book, and host Listings.',
    features:['Easy-to-navigate layout for searching and booking accommodations.','Clean and responsive design, optimized for both desktop and mobile devices.','User authentication and authorization for secure login and signup.','Detailed property listings with descriptions, images, and booking options.','Hosting functionality allowing users to list their properties.','Integrated payment system for seamless transactions.'],
    link: 'https://stayhub-airbnb.vercel.app',
    github: 'https://github.com/avdhut-thorat-17/StayHub',
    techStack: ['ReactJs', 'MongoDB','ExpressJs','NodeJs'],
    images: ['https://i.imgur.com/evZYYEj.png/150', 'https://i.imgur.com/SpZ9ukW.png/150'],
    backgroundImage: 'https://i.imgur.com/evZYYEj.png'
  },
  {
    name: 'Movies Hub',
    description: 'The "Movies Hub" project is a dynamic web application designed to provide users with an extensive collection of movie information.',
    features:['Easy-to-navigate layout for quick access to movie information.','Clean and responsive design, optimized for both desktop and mobile devices.','Comprehensive movie database with search functionality.','Detailed movie pages with descriptions, reviews, and ratings.','Image gallery showcasing movie posters and stills.'],
    link: 'https://avdhut-thorat-17.github.io/MoviesHub/',
    github: 'https://github.com/avdhut-thorat-17/MoviesHub',
    techStack: ['Html', 'CSS', 'Vanilla Js'],
    images: ['https://i.imgur.com/vaBg19x.jpg/150', 'https://i.imgur.com/QNg56o0.png/150'],
    backgroundImage: 'https://i.imgur.com/vaBg19x.jpg'
  },
  {
    name: 'ACES Student Club',
    description: 'The "ACES Student Club" project is a dedicated website for the ACES student organization, designed to enhance engagement and communication among members.',
    features:['Easy-to-navigate layout for quick access to club events, news, and resources.','Clean and responsive design, optimized for both desktop and mobile devices.','Sections dedicated to club announcements, upcoming events, and member achievements.','Photo gallery showcasing club activities and events.','Contact form for new member sign-ups and inquiries.'],
    link: 'https://avdhut-thorat-17.github.io/ACES/',
    github: 'https://github.com/avdhut-thorat-17/ACES',
    techStack: ['Html', 'CSS', 'Vanilla Js'],
    images: ['https://i.imgur.com/P4JTNGx.jpg/150', 'https://i.imgur.com/cHNRFWu.png/150'],
    backgroundImage: 'https://i.imgur.com/P4JTNGx.jpg'
  },
  {
    name: 'Emergency Services',
    description: 'The "Emergency Services" project is a comprehensive web application designed to provide critical emergency information and resources to users in need.',
    features:['Easy-to-navigate layout for quick access to emergency contacts.','Clean and responsive design, optimized for both desktop and mobile devices.','Integration of essential emergency services and resources in one platform.'],
    link: 'https://avdhut-thorat-17.github.io/Emergency-services/tailwind/index.html',
    github: 'https://github.com/avdhut-thorat-17/Emergency-services',
    techStack: ['Html', 'Tailwind CSS', 'Vanilla Js'],
    images: ['https://i.imgur.com/25slT9K.jpeg', 'https://i.imgur.com/HCzpK10.png'],
    backgroundImage: 'https://i.imgur.com/25slT9K.jpeg'
  }
];

const Projects = () => {
  return (
    <div className="px-4 py-14 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-transperent">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <ProjectCards projects={projects} />
    </div>
  );
};

export default Projects;
