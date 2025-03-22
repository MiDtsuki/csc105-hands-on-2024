import React from 'react';
import mitsuki3 from '../image/mitsuki3.jpg';
import mitsuki4 from '../image/mitsuki4.jpg';
import mitsuki5 from '../image/mitsuki5.jpg';
import mitsuki6 from '../image/mitsuki6.avif';
import mitsuki7 from '../image/mitsuki7.webp';
import mitsuki8 from '../image/mitsuki8.png';

const Gallery = () => {
  const images = [
    mitsuki3, mitsuki4, mitsuki5, mitsuki6, mitsuki7, mitsuki8
  ];

  return (
    <section id="gallery" className="min-h-screen bg-[#F2F5FF] p-8 pt-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;