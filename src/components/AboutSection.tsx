import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">QUEM SOMOS</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              A Barbarian Jiu Jitsu é um centro de excelência dedicado ao ensino do Jiu Jitsu brasileiro em seu mais alto nível. Fundada por mestres com décadas de experiência, nossa academia tem como missão não apenas ensinar técnicas de luta, mas transformar vidas através dos princípios fundamentais desta arte marcial.
            </p>
            <p className="text-lg mb-6">
              Nossa equipe de instrutores é composta por faixas-pretas premiados em competições nacionais e internacionais, comprometidos com o desenvolvimento técnico e pessoal de cada aluno.
            </p>
            <p className="text-lg">
              Na Barbarian Jiu Jitsu, acreditamos que o verdadeiro Jiu Jitsu vai além do tatame - é uma filosofia de vida que promove disciplina, respeito, perseverança e autoconfiança.
            </p>
          </div>
          <div className="h-full">
            <img 
              src="src/media/equipe.jpg" 
              alt="Academia Barbarian Jiu Jitsu" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;