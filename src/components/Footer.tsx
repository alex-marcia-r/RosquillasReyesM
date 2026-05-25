// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-el-eggshell border-t border-el-chalk mt-8 pt-14 pb-6 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant font-light text-2xl tracking-[-0.01em] text-brand-brown block mb-4">
              Rosquilla<span className="text-brand-orange">Reyes</span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: '#777169' }}>
              Empresa panificadora comprometida con la más alta calidad artesanal desde 1875, El Viejo, Nicaragua.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <span className="el-eyebrow mb-5 block">Navegación</span>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Inicio' },
                { path: '/productos', label: 'Productos' },
                { path: '/nosotros', label: 'Nosotros' },
                { path: '/noticias', label: 'Noticias' },
                { path: '/contacto', label: 'Contacto' },
                { path: '/login', label: 'Login' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm transition-colors duration-200 hover:text-brand-orange"
                    style={{ color: '#777169' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Productos */}
          <div>
            <span className="el-eyebrow mb-5 block">Productos</span>
            <ul className="space-y-3">
              {['Rosquillas', 'Hojaldras', 'Rosquetes', 'Cosas de Horno', 'Pupusas'].map((p) => (
                <li key={p}>
                  <Link
                    to="/productos"
                    className="text-sm transition-colors duration-200 hover:text-brand-orange"
                    style={{ color: '#777169' }}
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y Horarios */}
          <div>
            <span className="el-eyebrow mb-5 block">Contacto y Horarios</span>
            <ul className="space-y-4 text-sm" style={{ color: '#777169' }}>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">De la estación de policía 2 cuadras al Sur, El Viejo, Nicaragua</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-brand-orange flex-shrink-0 mt-0.5" />
                <span>+505 8250 1265<br />+505 2344 0258</span>
              </li>
              <li className="pt-4 border-t border-el-chalk leading-relaxed">
                <strong className="font-medium text-brand-brown">Lunes — Viernes</strong><br />
                6:00 A.M. — 9:00 P.M.
              </li>
              <li>
                <strong className="font-medium text-brand-brown">Sáb. — Dom.</strong><br />
                7:00 A.M. — 9:00 P.M.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-el-chalk pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: '#a59f97' }}>
            © {new Date().getFullYear()} Rosquilla Reyes — Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: '#a59f97' }}>
            El Viejo, Chinandega, Nicaragua
          </p>
        </div>
      </div>
    </footer>
  );
}
