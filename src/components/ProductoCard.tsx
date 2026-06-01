// src/components/ProductoCard.tsx
// Componente reutilizable para mostrar un producto en la grilla
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
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm card-hover"
    >
      {/* Imagen */}
      <div className="items-center h-52 ">
        <img
          src={producto.img}
          alt={producto.titulo}
          className="h-full w-full max-w-full "
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/160x160/D9C5A0/542B12?text=RR';
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-brand-brown text-base mb-1 group-hover:text-brand-orange transition-colors">
          {producto.titulo}
        </h3>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">{producto.desc}</p>
        <div className="flex items-center justify-between">
          <span className="text-brand-orange font-black text-lg">
            C$ {producto.precio}
            <span className="text-gray-400 font-normal text-xs ml-1">/ {producto.unidad}</span>
          </span>
          <span className="text-xs bg-brand-orange/10 text-brand-orange font-semibold px-3 py-1 rounded-full">
            Ver más →
          </span>
        </div>
      </div>
    </Link>
  );
}
