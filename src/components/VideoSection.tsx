import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">CONHEÇA NOSSA ACADEMIA</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Veja como são nossas aulas</h3>
            <p className="text-gray-300 mb-6">
              Na Barbarian Jiu Jitsu, oferecemos um ambiente de treinamento profissional e acolhedor para alunos de todos os níveis. 
              Nosso espaço conta com mais de 300m² de área de tatame, dois banheiros completos, área de atendimento e toda a infraestrutura necessária para seu desenvolvimento no Jiu Jitsu.
            </p>
            <p className="text-gray-300 mb-6">
              Assista ao vídeo ao lado para conhecer nossas instalações e ver como são nossas aulas. Venha fazer parte da nossa equipe!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#trial" 
                className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
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
                AULA EXPERIMENTAL
              </a>
              <a 
                href="#contact" 
                className="border border-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                CONTATO
              </a>
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Barbarian Jiu Jitsu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Galeria de Fotos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Foto da equipe" 
              className="rounded-lg h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <img 
              src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Academia de Jiu Jitsu" 
              className="rounded-lg h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <img 
              src="https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Competição de Jiu Jitsu" 
              className="rounded-lg h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <img 
              src="https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Treinamento avançado" 
              className="rounded-lg h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;