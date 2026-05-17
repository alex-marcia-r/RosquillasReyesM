// src/pages/DetalleProducto.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getProductoById } from '../data/productos';
import { useCarrito } from '../store/carritoStore';
import { ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';

export default function DetalleProducto() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const agregar = useCarrito((s) => s.agregar);

  const producto = getProductoById(id ?? '');
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  if (!producto) {
    return (
      <div className="pt-32 text-center">
        <p className="text-gray-400 text-lg">Producto no encontrado.</p>
        <button onClick={() => navigate('/productos')} className="btn-primary mt-6">
          Volver a productos
        </button>
      </div>
    );
  }

  const handleAgregar = () => {
    agregar(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  };

  return (
    <main className="pt-28 pb-16 px-[8%]">
      {/* Breadcrumb */}
      <button
        id="btn-volver-productos"
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-400 hover:text-brand-orange transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="bg-white rounded-4xl shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex items-center justify-center bg-gray-50 rounded-3xl p-8 h-72">
          <img
            src={producto.img}
            alt={producto.titulo}
            className="h-full w-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/300x300/D9C5A0/542B12?text=RR';
            }}
          />
        </div>

        {/* Info */}
        <div>
          {producto.categoria === 'eventos' && (
            <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold
                             uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Exclusiva para eventos
            </span>
          )}
          <h1 className="text-3xl font-black text-brand-brown mb-3">{producto.titulo}</h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">{producto.desc}</p>

          <div className="text-4xl font-black text-brand-orange mb-1">
            C$ {producto.precio}
            <span className="text-base font-normal text-gray-400 ml-2">/ {producto.unidad}</span>
          </div>

          {/* Cantidad */}
          <div className="flex items-center gap-4 my-6">
            <button
              id="btn-restar-cantidad"
              onClick={() => setCantidad((c) => Math.max(1, c - 1))}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center
                         hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="text-xl font-bold w-8 text-center">{cantidad}</span>
            <button
              id="btn-sumar-cantidad"
              onClick={() => setCantidad((c) => c + 1)}
              className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center
                         hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            id="btn-agregar-carrito"
            onClick={handleAgregar}
            className={`btn-primary w-full justify-center text-base py-4 transition-all
              ${agregado ? '!bg-green-500 !shadow-green-500/30' : ''}`}
          >
            <ShoppingCart size={20} />
            {agregado ? '¡Agregado!' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </main>
  );
}
