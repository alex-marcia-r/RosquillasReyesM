// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCarrito } from '../store/carritoStore';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cantidadTotal = useCarrito((s) => s.cantidadTotal());

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        ${sticky ? 'py-3 shadow-lg bg-white/95 backdrop-blur-sm' : 'py-4 bg-white'}`}
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
        <Link
          to="/carrito"
          id="btn-carrito-nav"
          className="relative flex items-center gap-1 bg-brand-orange text-white px-4 py-2 rounded-full
                     shadow-md shadow-brand-orange/40 hover:bg-brand-brown transition-colors duration-300"
        >
          <ShoppingCart size={20} />
          {cantidadTotal > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-brand-brown text-white text-[10px]
                             font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cantidadTotal}
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

        {/* Hamburger móvil */}
        <button
          id="btn-menu-mobile"
          className="md:hidden text-brand-brown"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
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
