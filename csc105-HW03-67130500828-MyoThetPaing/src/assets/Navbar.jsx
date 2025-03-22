import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="bg-[#51508B] p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Myo Thet Paing</h1>
        <div className="flex justify-center flex-grow space-x-8">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-300">About Me</a>
          <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
        </div>  
        <Button onClick={() => alert('Yay!! It does nothing.')}>Contact</Button>
      </div>
    </nav>
  );
};

export default Navbar;