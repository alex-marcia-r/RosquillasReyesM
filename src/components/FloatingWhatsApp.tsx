// src/components/FloatingWhatsApp.tsx
import React from 'react';

export default function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/50581759257';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
    >
      {/* Pulse wave animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-0 transition-opacity"></span>

      {/* WhatsApp SVG Icon */}
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.993 11.453.992c-5.436 0-9.861 4.371-9.865 9.801-.001 1.83.483 3.61 1.4 5.17l-1.018 3.719 3.825-.992zm11.366-6.406c-.312-.156-1.848-.894-2.136-1-.288-.106-.499-.156-.708.156-.208.312-.807.994-.99 1.202-.183.208-.365.234-.677.078-1.849-.93-2.909-1.799-3.974-3.645-.24-.415.24-.385.688-1.282.078-.156.039-.293-.02-.449-.06-.156-.499-1.202-.683-1.649-.18-.433-.361-.375-.499-.382l-.425-.008c-.147 0-.385.056-.587.279-.202.223-.77.747-.77 1.82 0 1.072.787 2.107.897 2.253.111.147 1.547 2.333 3.75 3.297.525.228.934.365 1.253.467.527.167 1.008.143 1.388.087.424-.062 1.848-.742 2.107-1.42.259-.678.259-1.258.182-1.38-.077-.123-.288-.199-.6-.356z"/>
      </svg>

      {/* Tooltip on hover */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-brand-brown text-white text-xs font-bold py-2 px-3 rounded-xl shadow-md whitespace-nowrap">
        ¿Te ayudamos por WhatsApp?
      </span>
    </a>
  );
}
