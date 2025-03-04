import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-30 py-4 px-6">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <span className="text-black font-bold text-lg"><img src="src/media/logo.png" alt="" /></span>
          </div>
          <h1 className="text-xl font-bold">Barbarian Jiu Jitsu</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;