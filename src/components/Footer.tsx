// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { ExternalLink, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white mt-8 pt-12 pb-6 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-navy mb-8">
        {/* Marca */}
        <div className="col-span-2 md:col-span-1">
          <span className="text-2xl font-black text-brand-brown underline block mb-3">
            Rosquilla<span className="text-brand-orange">Reyes</span>
          </span>
          <p className="text-gray-500 leading-relaxed">
            Sabor tradicional de El Viejo, Chinandega. Hechos con amor y recetas de generaciones.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Navegación</h4>
          <ul className="space-y-2 text-gray-500">
            {['/', '/productos', '/nosotros', '/contacto'].map((path, i) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-brand-orange transition-colors duration-200"
                >
                  {['Inicio', 'Productos', 'Nosotros', 'Contacto'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Productos */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Productos</h4>
          <ul className="space-y-2 text-gray-500">
            {['Rosquillas', 'Hojaldras', 'Rosquetes', 'Cosas de Horno'].map((p) => (
              <li key={p}>
                <Link
                  to="/productos"
                  className="hover:text-brand-orange transition-colors duration-200"
                >
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Contacto</h4>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-orange flex-shrink-0" />
              El Viejo, Chinandega, Nicaragua
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-orange flex-shrink-0" />
              +505 0000-0000
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors duration-200"
              >
                <ExternalLink size={16} className="text-brand-orange" />
                Rosquilla Reyes (FB)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Rosquilla Reyes — Todos los derechos reservados.
      </div>
    </footer>
  );
}
