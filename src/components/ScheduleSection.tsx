import React from 'react';

const ScheduleSection: React.FC = () => {
  const scheduleData = [
    { day: "Segunda-feira", classes: [
      { time: "06:30 - 07:30", name: "Jiu Jitsu para Todos" },
      { time: "12:00 - 13:00", name: "Jiu Jitsu para Todos" },
      { time: "18:00 - 19:00", name: "Barbarian Kids" },
      { time: "19:30 - 21:00", name: "Jiu Jitsu para Todos" }
    ]},
    { day: "Terça-feira", classes: [
      { time: "06:30 - 07:30", name: "Jiu Jitsu para Todos" },
      { time: "12:00 - 13:00", name: "Jiu Jitsu para Todos" },
      { time: "18:00 - 19:00", name: "Barbarian Kids" },
      { time: "19:30 - 21:00", name: "Jiu Jitsu para Mulheres" }
    ]},
    { day: "Quarta-feira", classes: [
      { time: "06:30 - 07:30", name: "Jiu Jitsu para Todos" },
      { time: "12:00 - 13:00", name: "Jiu Jitsu para Todos" },
      { time: "18:00 - 19:00", name: "Barbarian Kids" },
      { time: "19:30 - 21:00", name: "Jiu Jitsu para Todos" }
    ]},
    { day: "Quinta-feira", classes: [
      { time: "06:30 - 07:30", name: "Jiu Jitsu para Todos" },
      { time: "12:00 - 13:00", name: "Jiu Jitsu para Todos" },
      { time: "18:00 - 19:00", name: "Barbarian Kids" },
      { time: "19:30 - 21:00", name: "Jiu Jitsu para Mulheres" }
    ]},
    { day: "Sexta-feira", classes: [
      { time: "06:30 - 07:30", name: "Jiu Jitsu para Todos" },
      { time: "12:00 - 13:00", name: "Jiu Jitsu para Todos" },
      { time: "18:00 - 19:00", name: "Treino Livre" },
      { time: "19:30 - 21:00", name: "Sparring" }
    ]},
    { day: "Sábado", classes: [
      { time: "09:00 - 10:30", name: "Barbarian Kids" },
      { time: "11:00 - 12:30", name: "Jiu Jitsu para Todos" }
    ]}
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">HORÁRIOS</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scheduleData.map((day, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-300">{day.day}</h3>
              <ul className="space-y-3">
                {day.classes.map((classItem, classIndex) => (
                  <li key={classIndex} className="flex justify-between">
                    <span className="font-medium">{classItem.time}</span>
                    <span className="text-gray-700">{classItem.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-black text-white p-8 rounded-lg" id="trial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">AULA EXPERIMENTAL GRATUITA</h3>
              <p className="mb-6">
                Venha conhecer nossa academia e experimente uma aula gratuita com nossos instrutores. 
                Descubra como o Jiu Jitsu pode transformar sua vida!
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Professores qualificados</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Ambiente seguro e acolhedor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Produtos de alta qualidade</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Aulas flexíveis para todos os níveis</span>
                </li>
              </ul>
            </div>
            <div>
              <form className="bg-white text-black p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Agende sua aula experimental</h4>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Nome completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1" htmlFor="date">Data preferencial</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors"
                >
                  AGENDAR AULA GRATUITA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;