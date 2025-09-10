import React from 'react';
import Navbar from '../components_lite/Navbar';
import praveena from './praveena.jpg'; // Add your image here

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={praveena} alt="Praveena Pantham" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Praveena Pantham</h2>
            <p className="text-gray-600 mb-2">
              Praveena Pantham is a passionate full-stack developer who created this MERN-based Job Portal application.
              She is skilled in modern web development technologies and is dedicated to building useful, real-world applications.
            </p>
            <p className="text-gray-600 mb-2">
              This project demonstrates her expertise in the MERN stack, file handling with Cloudinary, secure authentication,
              and clean, responsive UI design.
            </p>
            <p className="text-gray-600">
              Built with ❤️ and a lot of learning.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300 my-6" />

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developer</h2>
        <div className="flex justify-center">
          <div className="text-center">
            <img src={praveena} alt="Praveena Pantham" className="mx-auto rounded-lg shadow-md h-48 w-48 object-cover" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Praveena Pantham</h3>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
            <p className="text-gray-600 text-sm">Job Portal Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;
