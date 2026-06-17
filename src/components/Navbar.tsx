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
  const [badgeKey, setBadgeKey] = useState(0); // fuerza re-mount del badge para replay

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cuando el contador sube, re-lanzamos la animación del badge
  useEffect(() => {
    if (cantidadTotal > prevCantidad.current) {
      setBadgeKey((k) => k + 1);
    }
    prevCantidad.current = cantidadTotal;
  }, [cantidadTotal]);

  const links = [
    { to: '/',          label: 'Inicio'    },
    { to: '/productos', label: 'Productos' },
    { to: '/nosotros',  label: 'Nosotros'  },
    { to: '/noticias',  label: 'Noticias'  },
    { to: '/contacto',  label: 'Contacto'  },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[10%] transition-all duration-500
        ${sticky ? 'py-3 shadow-lg bg-white/95 ' : 'py-4 bg-white'}`}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-black text-brand-brown underline tracking-tight">
        Rosquilla<span className="text-brand-orange">Reyes</span>
      </Link>

      {/* Nav desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link text-sm ${isActive ? 'text-brand-orange' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Carrito + hamburger */}
      <div className="flex items-center gap-3">
        {/* Botón carrito con badge animado */}
        <Link
          to="/carrito"
          id="btn-carrito-nav"
          className="relative flex items-center gap-1 bg-brand-orange text-white px-4 py-2 rounded-full
                     shadow-md shadow-brand-orange/40 hover:bg-brand-brown transition-colors duration-300"
        >
          <ShoppingCart size={20} />

          {/* NotificationBadge */}
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
          className="text-brand-brown hover:text-brand-orange transition-colors p-2"
          aria-label="Iniciar sesión"
        >
          <User size={24} />
        </Link>

        {/* Hamburger con IconSwap */}
        <button
          id="btn-menu-mobile"
          className="md:hidden text-brand-brown p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="t-icon-swap" data-state={menuOpen ? 'b' : 'a'}>
            <span className="t-icon" data-icon="a"><Menu size={28} /></span>
            <span className="t-icon" data-icon="b"><X size={28} /></span>
          </span>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden flex flex-col py-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-8 py-3 text-sm font-semibold border-b border-gray-100
                 ${isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
