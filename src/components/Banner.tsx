import React from 'react';

interface BannerProps {
  scrollPosition: number;
}

const Banner: React.FC<BannerProps> = ({ scrollPosition }) => {
  // Calculate the transform value based on scroll position
  const transformValue = `translateY(${scrollPosition * 0.5}px)`;

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: 'url(src/media/equipe.jpg)', 
          transform: transformValue 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">BARBARIAN JIU JITSU</h1>
        <p className="text-xl md:text-2xl mb-8">Transforme seu corpo e mente através da arte do Jiu Jitsu</p>
        <a 
          href="#trial" 
          className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            const trialSection = document.getElementById('trial');
            if (trialSection) {
              window.scrollTo({
                top: trialSection.offsetTop,
                behavior: 'smooth'
              });
            }
          }}
        >
          AULA EXPERIMENTAL GRÁTIS
        </a>
      </div>
    </div>
  );
};

export default Banner;