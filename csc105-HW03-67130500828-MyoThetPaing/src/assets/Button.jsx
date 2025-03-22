import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#D5D4FF] text-[#51508B] px-4 py-2 rounded hover:bg-[#B4B2FF] transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;