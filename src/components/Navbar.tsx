// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCarrito } from '../store/carritoStore';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cantidadTotal = useCarrito((s) => s.cantidadTotal());
  const prevCantidad  = useRef(cantidadTotal);
  const [badgeKey, setBadgeKey] = useState(0);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (cantidadTotal > prevCantidad.current) {
      setBadgeKey((k) => k + 1);
    }
    prevCantidad.current = cantidadTotal;
  }, [cantidadTotal]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('header')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const links = [
    { to: '/',          label: 'Inicio'    },
    { to: '/productos', label: 'Productos' },
    { to: '/nosotros',  label: 'Nosotros'  },
    { to: '/noticias',  label: 'Noticias'  },
    { to: '/contacto',  label: 'Contacto'  },
  ];

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 w-[92%] max-w-[1200px] rounded-full border z-50 transition-all duration-500 glass-card flex items-center justify-between px-4 sm:px-6 py-3
        ${sticky ? 'shadow-[0_20px_50px_rgba(84,43,18,0.15)] bg-white/75 border-white/50 top-2 sm:top-4' : 'bg-white/45 border-white/30 top-4 sm:top-6'}`}
    >
      {/* Logo */}
      <Link to="/" className="text-xl sm:text-2xl font-black text-brand-brown tracking-tight hover:scale-[1.02] transition-transform flex-shrink-0">
        Rosquilla<span className="text-brand-orange">Reyes</span>
      </Link>

      {/* Nav desktop */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-3 flex-1 mx-4 lg:mx-6 justify-center">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link text-sm lg:text-base px-3 lg:px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive ? 'bg-brand-orange/15 text-brand-orange font-black' : 'hover:bg-white/40'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Carrito + hamburger */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        {/* Botón carrito con badge animado */}
        <Link
          to="/carrito"
          id="btn-carrito-nav"
          className="relative flex items-center gap-1 bg-brand-orange text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full
                     shadow-lg shadow-brand-orange/30 hover:bg-brand-brown hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <ShoppingCart size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />

          {cantidadTotal > 0 && (
            <span
              key={badgeKey}
              className="t-badge"
              data-open="true"
            >
              <span className="t-badge-dot bg-brand-brown text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cantidadTotal}
              </span>
            </span>
          )}
        </Link>

        {/* Login icon */}
        <Link
          to="/login"
          className="text-brand-brown hover:text-brand-orange hover:bg-white/40 rounded-full p-2 transition-all hidden sm:inline-flex"
          aria-label="Iniciar sesión"
        >
          <User size={20} className="w-5 h-5" />
        </Link>

        {/* Hamburger */}
        <button
          id="btn-menu-mobile"
          className="md:hidden text-brand-brown hover:bg-white/40 rounded-full p-2 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="t-icon-swap" data-state={menuOpen ? 'b' : 'a'}>
            <span className="t-icon" data-icon="a"><Menu size={24} /></span>
            <span className="t-icon" data-icon="b"><X size={24} /></span>
          </span>
        </button>
      </div>

      {/* Menú móvil - overlay completo */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 "
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menú */}
          <div className="absolute top-[110%] left-0 bg-white/95 right-0 rounded-3xl md:hidden flex flex-col p-4 shadow-2xl animate-fade-in z-50 max-h-[70vh] overflow-y-auto">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-4 text-base font-bold rounded-2xl transition-all duration-200 border-b border-brand-brown/5 last:border-0
                   ${isActive ? 'bg-brand-orange/15 text-brand-orange' : 'text-brand-brown/85 hover:bg-brand-orange/5 hover:text-brand-orange'}`
                }
              >
                {label}
              </NavLink>
            ))}
            
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-6 py-4 text-base font-bold rounded-2xl transition-all duration-200 text-brand-brown/85 hover:bg-brand-orange/5 hover:text-brand-orange flex items-center gap-3 border-t border-brand-brown/10 pt-4"
            >
              <User size={20} />
              Iniciar sesión
            </Link>
          </div>
        </>
      )}
    </header>
  );
}