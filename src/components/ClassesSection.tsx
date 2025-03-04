import React from 'react';

const ClassesSection: React.FC = () => {
  const classes = [
    {
      title: "Barbarian Kids",
      description: "Aulas especiais de Jiu Jitsu para crianças, desenvolvendo coordenação motora, disciplina, autoconfiança e habilidades sociais em um ambiente divertido e seguro.",
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Jiu Jitsu para Mulheres",
      description: "Aulas exclusivas para mulheres, focadas em técnicas de defesa pessoal e desenvolvimento físico, em um ambiente acolhedor e respeitoso.",
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Jiu Jitsu para Todos",
      description: "Aulas para todos os níveis, desde iniciantes até avançados, com foco no desenvolvimento técnico, físico e mental através da prática do Jiu Jitsu brasileiro.",
      image: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="classes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">MODALIDADES</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{classItem.title}</h3>
                <p className="text-gray-700">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;