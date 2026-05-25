// src/components/ProductoCard.tsx
import { Link } from 'react-router-dom';
import { Producto } from '../data/productos';

interface Props { producto: Producto; }

export default function ProductoCard({ producto }: Props) {
  return (
    <Link
      to={`/productos/${producto.id}`}
      id={`card-${producto.id}`}
      className="group block bg-white rounded-2xl overflow-hidden card-hover"
    >
      {/* Imagen — fondo powder ElevenLabs */}
      <div
        className="flex items-center justify-center h-48 overflow-hidden"
        style={{ background: '#f5f3f1' }}
      >
        <img
          src={producto.img}
          alt={producto.titulo}
          className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/160x160/D9C5A0/542B12?text=RR';
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5 border-t border-el-chalk">
        {/* Eyebrow — categoría */}
        <span className="el-eyebrow mb-1.5 block">
          {producto.categoria === 'eventos' ? 'Para eventos' : 'Regular'}
        </span>

        <h3
          className="font-cormorant font-light text-xl leading-snug text-brand-brown mb-1
                     group-hover:text-brand-orange transition-colors"
          style={{ letterSpacing: '-0.01em' }}
        >
          {producto.titulo}
        </h3>

        <p className="text-xs mb-3 line-clamp-2" style={{ color: '#777169' }}>
          {producto.desc}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-brand-orange font-semibold text-base">
            C$ {producto.precio}
            <span className="text-xs font-normal ml-1" style={{ color: '#a59f97' }}>
              / {producto.unidad}
            </span>
          </span>
          <span
            className="text-xs font-medium px-3 py-1 rounded-full border border-el-chalk
                       group-hover:border-brand-orange group-hover:text-brand-orange transition-colors"
            style={{ color: '#777169' }}
          >
            Ver más →
          </span>
        </div>
      </div>
    </Link>
  );
}
