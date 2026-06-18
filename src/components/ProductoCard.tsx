// src/components/ProductoCard.tsx
import { Link } from 'react-router-dom';
import { Producto } from '../data/productos';

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <Link
      to={`/productos/${producto.id}`}
      id={`card-${producto.id}`}
      className="group block glass-card rounded-3xl overflow-hidden card-hover"
    >
      {/* Imagen */}
      <div className="flex items-center justify-center h-52 bg-white/30 backdrop-blur-sm p-4 border-b border-white/30">
        <img
          src={producto.img}
          alt={producto.titulo}
          className="h-full w-auto object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/160x160/D9C5A0/542B12?text=RR';
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-black text-brand-brown text-base mb-1 group-hover:text-brand-orange transition-colors">
          {producto.titulo}
        </h3>
        <p className="text-xs text-brand-brown/70 font-medium mb-4 line-clamp-2 leading-relaxed">{producto.desc}</p>
        <div className="flex items-center justify-between">
          <span className="text-brand-orange font-black text-lg">
            C$ {producto.precio}
            <span className="text-brand-brown/60 font-semibold text-xs ml-1">/ {producto.unidad}</span>
          </span>
          <span className="text-xs bg-brand-orange/10 text-brand-orange font-bold px-3 py-1.5 rounded-full group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
            Ver más →
          </span>
        </div>
      </div>
    </Link>
  );
}
