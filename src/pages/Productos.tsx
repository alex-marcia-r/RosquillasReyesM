// src/pages/Productos.tsx
import { useState } from 'react';
import { productos, Categoria } from '../data/productos';
import ProductoCard from '../components/ProductoCard';
import { Search } from 'lucide-react';

const FILTROS: { label: string; value: Categoria | 'todos' }[] = [
  { label: 'Todos',   value: 'todos'   },
  { label: 'Regular', value: 'regular' },
  { label: 'Eventos', value: 'eventos' },
];

export default function Productos() {
  const [filtro, setFiltro]     = useState<Categoria | 'todos'>('todos');
  const [busqueda, setBusqueda] = useState('');

  const filtrados = productos.filter((p) => {
    const matchCategoria = filtro === 'todos' || p.categoria === filtro;
    const matchBusqueda  = p.titulo.toLowerCase().includes(busqueda.toLowerCase());
    return matchCategoria && matchBusqueda;
  });

  return (
    <main className="pt-28 pb-20 px-[6%]" style={{ background: '#fdfcfc' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header editorial */}
        <div className="mb-12 border-b border-el-chalk pb-10">
          <span className="el-eyebrow mb-3 block">Catálogo completo</span>
          <h1
            className="font-cormorant font-light text-brand-brown mb-3"
            style={{ fontSize:'clamp(36px,5vw,52px)', letterSpacing:'-0.02em', lineHeight:1.08 }}
          >
            Explora nuestros productos
          </h1>
          <p className="text-sm" style={{ color:'#777169' }}>
            Para productos de eventos,{' '}
            <a href="/contacto" className="text-brand-orange hover:underline">contáctanos</a>.
          </p>
        </div>

        {/* Buscador + Filtros — ElevenLabs style */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
          {/* Buscador underline */}
          <div className="relative flex-1 max-w-sm">
            <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2" style={{ color:'#a59f97' }} />
            <input
              id="input-busqueda-productos"
              type="text"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="el-input pl-6"
            />
          </div>

          {/* Pills de filtro */}
          <div className="flex gap-2">
            {FILTROS.map(({ label, value }) => (
              <button
                key={value}
                id={`filtro-${value}`}
                onClick={() => setFiltro(value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                  ${filtro === value
                    ? 'bg-brand-orange text-white border-brand-orange shadow-hairline'
                    : 'bg-white text-brand-brown border-el-chalk hover:border-brand-orange hover:text-brand-orange'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla */}
        {filtrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtrados.map((p) => (
              <ProductoCard key={p.id} producto={p} />
            ))}
          </div>
        ) : (
          <p className="text-center py-20 text-sm" style={{ color:'#a59f97' }}>
            No se encontraron productos.
          </p>
        )}
      </div>
    </main>
  );
}
