// src/pages/Productos.tsx
import { useState } from 'react';
import { productos, Categoria } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { Search } from 'lucide-react';

const FILTROS: { label: string; value: Categoria | 'todos' }[] = [
  { label: 'Todos',    value: 'todos'    },
  { label: 'Regular',  value: 'regular'  },
  { label: 'Eventos',  value: 'eventos'  },
];

export default function Productos() {
  const [filtro, setFiltro] = useState<Categoria | 'todos'>('todos');
  const [busqueda, setBusqueda] = useState('');

  const filtrados = productos.filter((p) => {
    const matchCategoria = filtro === 'todos' || p.categoria === filtro;
    const matchBusqueda  = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  return (
    <main className="pt-28 pb-16 px-[8%]">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-brand-brown mb-2">
          Explora nuestro <span className="text-brand-orange">catálogo</span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto text-sm">
          Si deseas productos para eventos,{' '}
          <a href="/contacto" className="text-brand-orange font-semibold hover:underline">
            contáctanos
          </a>
          .
        </p>
      </div>

      {/* Buscador + Filtros */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        {/* Buscador */}
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="input-busqueda-productos"
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-gray-200 bg-white
                       text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
          />
        </div>

        {/* Pills de filtro */}
        <div className="flex gap-2">
          {FILTROS.map(({ label, value }) => (
            <button
              key={value}
              id={`filtro-${value}`}
              onClick={() => setFiltro(value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200
                ${filtro === value
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Grilla */}
      {filtrados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtrados.map((p) => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 py-20">No se encontraron productos.</p>
      )}
    </main>
  );
}
