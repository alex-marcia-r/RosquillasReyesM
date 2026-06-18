// src/pages/DetalleProducto.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
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

  // SuccessCheck ref + estado
  const checkRef = useRef<HTMLSpanElement>(null);
  const [checkState, setCheckState] = useState<'out' | 'in'>('out');

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

    // Trigger success check
    setCheckState('out');
    requestAnimationFrame(() => {
      if (checkRef.current) void checkRef.current.offsetWidth;
      setCheckState('in');
    });

    setAgregado(true);
    setTimeout(() => {
      setAgregado(false);
      setCheckState('out');
    }, 2500);
  };

  return (
    <main className="pt-32 pb-20 px-[6%] md:px-[8%] relative z-10">
      {/* Breadcrumb */}
      <button
        id="btn-volver-productos"
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm font-bold text-brand-brown/70 hover:text-brand-orange hover:translate-x-[-2px] transition-all mb-8"
      >
        <ArrowLeft size={16} /> Volver a catálogo
      </button>

      <div className="glass-card rounded-4xl border-white/60 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex items-center justify-center bg-white/30 backdrop-blur-md border border-white/30 rounded-3xl p-8 h-80 md:h-[400px]">
          <img
            src={producto.img}
            alt={producto.titulo}
            className="h-full w-auto object-contain max-h-full transition-transform duration-500 hover:scale-102"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://placehold.co/300x300/D9C5A0/542B12?text=RR';
            }}
          />
        </div>

        {/* Info */}
        <div>
          {producto.categoria === 'eventos' && (
            <span className="inline-block bg-brand-orange/15 text-brand-orange text-xs font-black
                             uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 border border-brand-orange/20">
              Exclusiva para eventos
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-black text-brand-brown mb-4 leading-tight">{producto.titulo}</h1>
          <p className="text-brand-navy/80 text-sm md:text-base font-semibold leading-relaxed mb-6">{producto.desc}</p>

          <div className="text-4xl font-black text-brand-orange mb-4">
            C$ {producto.precio}
            <span className="text-base font-bold text-brand-brown/60 ml-2">/ {producto.unidad}</span>
          </div>

          {/* Cantidad */}
          <div className="flex items-center gap-4 my-6">
            <button
              id="btn-restar-cantidad"
              onClick={() => setCantidad((c) => Math.max(1, c - 1))}
              className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/80 flex items-center justify-center
                         hover:border-brand-orange hover:text-brand-orange hover:bg-white/80 hover:scale-105 active:scale-95 transition-all text-brand-brown"
              aria-label="Disminuir cantidad"
            >
              <Minus size={16} />
            </button>
            <span className="text-2xl font-black w-8 text-center text-brand-brown">{cantidad}</span>
            <button
              id="btn-sumar-cantidad"
              onClick={() => setCantidad((c) => c + 1)}
              className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white/80 flex items-center justify-center
                         hover:border-brand-orange hover:text-brand-orange hover:bg-white/80 hover:scale-105 active:scale-95 transition-all text-brand-brown"
              aria-label="Aumentar cantidad"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Botón + SuccessCheck */}
          <div className="relative">
            <button
              id="btn-agregar-carrito"
              onClick={handleAgregar}
              disabled={agregado}
              className={`btn-primary w-full justify-center text-base py-4 font-bold transition-all duration-300
                ${agregado ? '!bg-green-600 !shadow-green-600/35 border border-green-600' : ''}`}
            >
              {agregado ? (
                <>
                  {/* SuccessCheck inline */}
                  <span
                    ref={checkRef}
                    className="t-success-check"
                    data-state={checkState}
                    aria-hidden="true"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10.5L8.5 15L16 7"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  ¡Agregado al carrito!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Agregar al carrito
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
