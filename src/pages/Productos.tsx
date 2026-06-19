// src/pages/Productos.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { productos, Categoria } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { Search } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FILTROS: { label: string; value: Categoria | 'todos' }[] = [
  { label: 'Todos',    value: 'todos'    },
  { label: 'Regular',  value: 'regular'  },
  { label: 'Eventos',  value: 'eventos'  },
];

export default function Productos() {
  const revealRef = useScrollReveal();
  const [filtro, setFiltro] = useState<Categoria | 'todos'>('todos');
  const [busqueda, setBusqueda] = useState('');

  const filtrados = productos.filter((p) => {
    const matchCategoria = filtro === 'todos' || p.categoria === filtro;
    const matchBusqueda  = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  return (
    <main ref={revealRef} className="pt-32 pb-20 px-[6%] md:px-[8%] relative z-10">
      {/* Hero */}
      <div className="text-center mb-12 reveal">
        <h1 className="text-4xl md:text-5xl font-black text-brand-brown mb-3 tracking-tight">
          Explora nuestro <span className="text-brand-orange">catálogo</span>
        </h1>
        <p className="text-brand-navy/70 font-semibold max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Si deseas productos para eventos especiales,{' '}
          <Link to="/contacto" className="text-brand-orange font-bold hover:underline transition-colors">
            contáctanos directamente
          </Link>
          .
        </p>
      </div>

      {/* Buscador + Filtros */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 reveal reveal-delay-1">
        {/* Buscador - Versión CORREGIDA */}
        <div className="relative w-full md:max-w-md">
          {/* Icono - Ahora con z-index alto y posicionamiento correcto */}
          <Search 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown/70 pointer-events-none z-20" 
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            id="input-busqueda-productos"
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full glass-input relative z-10"
            style={{ paddingLeft: '48px' }}
          />
        </div>

        {/* Pills de filtro */}
        <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
          {FILTROS.map(({ label, value }) => (
            <button
              key={value}
              id={`filtro-${value}`}
              onClick={() => setFiltro(value)}
              className={`px-6 py-2.5 rounded-full text-sm font-black tracking-wide transition-all duration-300
                ${filtro === value
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 border border-brand-orange scale-105'
                  : 'bg-white/40 text-brand-brown/85 border border-white/60 hover:border-brand-orange/60 hover:text-brand-orange hover:bg-white/70'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla */}
      {filtrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 reveal reveal-delay-2">
          {filtrados.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-3xl p-16 text-center border-white/60 reveal">
          <p className="text-brand-brown/60 font-bold text-lg">No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </main>
  );
}