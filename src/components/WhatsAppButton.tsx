import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=5519997370245&text=Seja%20bem-vindo(a)%20%C3%A0%20Barbarian%20Americana.%20Teremos%20enorme%20prazer%20em%20atend%C3%AA-los(as)!%0A%0AAgradecemos%20seu%20contato.%20Obrigado%20%F0%9F%98%89" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppButton;