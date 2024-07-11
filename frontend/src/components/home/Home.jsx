import React, { useState, useEffect } from 'react';
import githubIcon from '/github.png';
import linkedinIcon from '/linkedin.png';
import twitterIcon from '/twitter.png';
import instagramIcon from '/instagram.png';
import Modal from 'react-modal';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './home.css';

// Set the app element for accessibility
Modal.setAppElement('#root');

const links = [
  {
    imgSrc: githubIcon,
    imgLink : 'https://github.com/avdhut-thorat-17'
  },
  {
    imgSrc: linkedinIcon,
    imgLink:'https://www.linkedin.com/in/avdhut-thorat-900640204/'
  },
  {
    imgSrc: twitterIcon,
    imgLink:'https://x.com/Avdhut3400'
  },
  {
    imgSrc: instagramIcon,
    imgLink:'https://www.instagram.com/avdhut_thorat_17?igsh=MWJocHlrbzRpZmc4aQ%3D%3D&utm_source=qr'
  }
];

const LoaderAnimation = () => (
  <div className="loader">
    <h1 className="heartbeat">Avdhut Thorat</h1>
  </div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <LoaderAnimation />;
  }

  return (
    <div>
      <header className="bg-slate-400 shadow py-3">
        <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-7xl flex flex-col items-center justify-center md:flex-row">
          <div className="mb-4 md:mb-0 md:mr-8 slide-in-left">
            <img
              className="h-25 w-25 rounded-full"
              src={"https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg"}
              alt=""
            />
          </div>
          <div className="text-center md:text-left shadow-md p-5 lg:px-10 lg:py-10 slide-in-right">
            <h1 className="text-5xl font-bold tracking-tight text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Avdhut Thorat
            </h1>
            <h3 className="text-1xl tracking-tight text-white mt-2">
              MERN stack developer | Problem Solver
            </h3>
            <div className="flex justify-center mt-6">
          <button
            onClick={openModal}
            className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
          >
            View Resume
          </button>
        </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-4 mt-5 mb-5 fade-in">
          {links.map((link, index) => (
            <a key={index} href={link.imgLink} className="hover:scale-110 transition-transform">
              <img className="h-10 w-10 md:h-12 md:w-12 rounded-full" src={link.imgSrc} alt="" />
            </a>
          ))}
        </div>
        
      </header>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Resume Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal">
          Close
        </button>
        <div className="pdf-container">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
            <Viewer fileUrl="https://drive.google.com/file/d/1C51pdZJOm9xSGaazpuYPq3XXPGByHwFM/view" />
          </Worker>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="/Avdhut_Thorat_Resume.pdf"
            download
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
