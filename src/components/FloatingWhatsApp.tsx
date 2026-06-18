// src/components/FloatingWhatsApp.tsx
import wspIcon from '../assets/wsp.png';

export default function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/50581759257';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
    >

      <img 
        src={wspIcon} 
        alt="WhatsApp"
        className="w-8 h-8 object-contain"
      />

      {/* Tooltip on hover */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-brand-brown text-white text-xs font-bold py-2 px-3 rounded-xl shadow-md whitespace-nowrap">
        ¿Te ayudamos por WhatsApp?
      </span>
    </a>
  );
}