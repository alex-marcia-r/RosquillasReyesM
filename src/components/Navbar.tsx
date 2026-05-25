// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCarrito } from '../store/carritoStore';

export default function Navbar() {
  const [sticky, setSticky]   = useState(false);
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
    if (cantidadTotal > prevCantidad.current) setBadgeKey((k) => k + 1);
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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%]
        transition-all duration-300
        ${sticky
          ? 'py-3 bg-el-eggshell/95 backdrop-blur-sm border-b border-el-chalk shadow-none'
          : 'py-4 bg-el-eggshell border-b border-transparent'
        }`}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-cormorant font-light text-2xl tracking-[-0.01em] text-brand-brown"
      >
        Rosquilla<span className="text-brand-orange">Reyes</span>
      </Link>

      {/* Nav desktop */}
      <nav className="hidden md:flex items-center gap-7">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'text-brand-orange' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Acciones */}
      <div className="flex items-center gap-2">
        {/* Carrito — pill naranja con badge animado */}
        <Link
          to="/carrito"
          id="btn-carrito-nav"
          className="relative inline-flex items-center gap-1.5 btn-primary py-2 px-4"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline text-sm">Carrito</span>

          {cantidadTotal > 0 && (
            <span
              key={badgeKey}
              className="t-badge"
              data-open="true"
            >
              <span className="t-badge-dot bg-brand-brown text-white text-[10px] font-bold rounded-full w-5 h-5">
                {cantidadTotal}
              </span>
            </span>
          )}
        </Link>

        {/* Login */}
        <Link
          to="/login"
          className="text-brand-brown hover:text-brand-orange transition-colors p-2"
          aria-label="Iniciar sesión"
        >
          <User size={22} />
        </Link>

        {/* Hamburger con IconSwap */}
        <button
          id="btn-menu-mobile"
          className="md:hidden text-brand-brown p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className="t-icon-swap" data-state={menuOpen ? 'b' : 'a'}>
            <span className="t-icon" data-icon="a"><Menu size={26} /></span>
            <span className="t-icon" data-icon="b"><X size={26} /></span>
          </span>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-el-eggshell border-b border-el-chalk md:hidden flex flex-col py-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-8 py-3 text-sm font-medium border-b border-el-chalk last:border-0
                 ${isActive ? 'text-brand-orange' : 'text-brand-brown hover:text-brand-orange'}`
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
