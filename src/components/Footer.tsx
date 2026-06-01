// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white  pt-12 pb-6 px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-brand-navy mb-8">
        {/* Marca */}
        <div className="col-span-2 md:col-span-1">
          <span className="text-2xl font-black text-brand-brown underline block mb-3">
            Rosquillas<span className="text-brand-orange">Reyes</span>
          </span>
          <p className="text-gray-500 leading-relaxed">
            Somos una empresa panificadora comprometida con ofrecer productos de la más alta calidad, liderando siempre las mejores tendencias del momento.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Navegación</h4>
          <ul className="space-y-2 text-gray-500">
            {['/', '/productos', '/nosotros', '/noticias', '/contacto', '/login'].map((path, i) => (
              <li key={path}>
                <Link
                  to={path}
                  className="hover:text-brand-orange transition-colors duration-200"
                >
                  {['Inicio', 'Productos', 'Nosotros', 'Noticias', 'Contacto', 'Login'][i]}
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

        {/* Contacto y Horarios */}
        <div>
          <h4 className="font-bold text-gray-800 mb-3">Contáctenos y Horarios</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
              <span>De la estación de policía 2 cuadras al Sur, El Viejo, Nicaragua</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-orange flex-shrink-0" />
              <span>+505 8250 1265 <br /> +505 2344 0258</span>
            </li>
            <li className="mt-4 pt-4 border-t border-gray-100">
              <strong>LUNES A VIERNES:</strong> <br /> 6:00 A.M. - 9:00 P.M.
            </li>
            <li>
              <strong>DOMINGOS Y SÁBADOS:</strong> <br /> 7:00 A.M. - 9:00 P.M.
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
