import React from 'react';
import Button from '../assets/Button';

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen bg-[#F2F5FF] p-8 pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="mt-8 md:mt-0">
          <img
            src="src\image\mitsuki2.png"
            alt="About Me"
            className="w-60 md:w-115 object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Like I said before, I am a CS student. Thats it. Nothing more. Nothing less. Full prediction. Luck based living. Seeing yet can't stop. Knowing yet not acting.
          </p>
          <Button onClick={() => alert('What do you want to know more? If you want to know more about me, dm me.')}>Read More</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;