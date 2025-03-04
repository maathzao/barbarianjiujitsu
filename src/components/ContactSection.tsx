import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">CONTATO</h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
            <p className="mb-8">
              Estamos à disposição para esclarecer suas dúvidas, fornecer mais informações sobre nossas aulas e planos. 
              Preencha o formulário ao lado ou utilize um dos canais de contato abaixo.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Phone className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">Telefone</h4>
                  <p>(19) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">E-mail</h4>
                  <p>contato@barbarian.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1" size={20} />
                <div>
                  <h4 className="font-bold">Endereço</h4>
                  <p>Rua Ibitinga, 1969 Parque Novo Mundo, Americana</p>
                  <p>São Paulo - SP, 13467-530</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Siga-nos no Instagram</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/barbarian_americana" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <Instagram size={20} className="mr-2" />
                  <span className="font-bold">@barbarian_americana</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-gray-100 p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="contact-name">Nome completo</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Seu nome"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="contact-email">E-mail</label>
                <input 
                  type="email" 
                  id="contact-email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="contact-phone">Telefone</label>
                <input 
                  type="tel" 
                  id="contact-phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="contact-subject">Assunto</label>
                <select 
                  id="contact-subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="aula-experimental">Aula Experimental</option>
                  <option value="planos">Informações sobre preços</option>
                  <option value="outro">Outro Assunto</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="contact-message">Mensagem</label>
                <textarea 
                  id="contact-message" 
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;