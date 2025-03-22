import React from 'react';
import Button from '../assets/Button';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-[#F2F5FF] p-8 pt-20 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="mt-8 md:mt-0">
          <img
            src="src\image\mitsuki1.png"
            alt="Profile"
            className="w-60 md:w-115 object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg mb-4">Hello, it's me</p>
          <h1 className="text-4xl font-bold mb-4">Unemployed Myo</h1>
          <p className="text-lg mb-4">
            Hi, I'm Myo Thet Paing. I'm a student. I'm a CompSci student. CompSci? What is that? System.out.println(); Hahahaha, jk jk. You know, sometimes, I wonder, what if I.... That would be werid right? Just go sleep.
          </p>
          <div className="flex space-x-4 mb-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl text-blue-500 hover:text-blue-600"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl text-gray-800 hover:text-gray-900"></i>
            </a>
          </div>
          <Button onClick={() => alert('Not what you expected. No portfolio. Move to next page.')}>My Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;