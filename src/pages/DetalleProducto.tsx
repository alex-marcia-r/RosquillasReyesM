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
  const [cantidad, setCantidad]   = useState(1);
  const [agregado, setAgregado]   = useState(false);

  const checkRef = useRef<HTMLSpanElement>(null);
  const [checkState, setCheckState] = useState<'out' | 'in'>('out');

  if (!producto) {
    return (
      <div className="pt-32 text-center" style={{ background:'#fdfcfc' }}>
        <p className="text-sm mb-6" style={{ color:'#777169' }}>Producto no encontrado.</p>
        <button onClick={() => navigate('/productos')} className="btn-primary">
          Volver a productos
        </button>
      </div>
    );
  }

  const handleAgregar = () => {
    agregar(producto, cantidad);
    setCheckState('out');
    requestAnimationFrame(() => {
      if (checkRef.current) void checkRef.current.offsetWidth;
      setCheckState('in');
    });
    setAgregado(true);
    setTimeout(() => { setAgregado(false); setCheckState('out'); }, 2500);
  };

  return (
    <main className="pt-28 pb-20 px-[6%]" style={{ background:'#fdfcfc' }}>
      <div className="max-w-5xl mx-auto">

        {/* Volver */}
        <button
          id="btn-volver-productos"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm mb-10 transition-colors"
          style={{ color:'#a59f97' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ff9f0d')}
          onMouseLeave={e => (e.currentTarget.style.color = '#a59f97')}
        >
          <ArrowLeft size={15} /> Volver
        </button>

        {/* Card producto */}
        <div className="bg-white rounded-2xl border border-el-chalk p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">

          {/* Imagen — fondo powder */}
          <div
            className="flex items-center justify-center rounded-xl h-72"
            style={{ background:'#f5f3f1' }}
          >
            <img
              src={producto.img}
              alt={producto.titulo}
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/300x300/D9C5A0/542B12?text=RR';
              }}
            />
          </div>

          {/* Info */}
          <div>
            {producto.categoria === 'eventos' && (
              <span className="el-eyebrow mb-3 block text-brand-orange">
                Exclusiva para eventos
              </span>
            )}
            {producto.categoria !== 'eventos' && (
              <span className="el-eyebrow mb-3 block">Regular</span>
            )}

            <h1
              className="font-cormorant font-light text-brand-brown mb-3"
              style={{ fontSize:'clamp(28px,4vw,40px)', letterSpacing:'-0.02em', lineHeight:1.1 }}
            >
              {producto.titulo}
            </h1>

            <p className="text-sm leading-relaxed mb-6" style={{ color:'#777169' }}>
              {producto.desc}
            </p>

            <div className="mb-1">
              <span className="text-brand-orange font-semibold text-3xl">
                C$ {producto.precio}
              </span>
              <span className="text-sm ml-2" style={{ color:'#a59f97' }}>/ {producto.unidad}</span>
            </div>

            <hr className="el-divider my-6" />

            {/* Cantidad */}
            <div className="flex items-center gap-4 mb-6">
              <span className="el-eyebrow">Cantidad</span>
              <div className="flex items-center gap-3 ml-auto">
                <button
                  id="btn-restar-cantidad"
                  onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                  className="w-9 h-9 rounded-full border border-el-chalk flex items-center justify-center
                             hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <Minus size={15} />
                </button>
                <span className="text-xl font-light w-8 text-center text-brand-brown">{cantidad}</span>
                <button
                  id="btn-sumar-cantidad"
                  onClick={() => setCantidad((c) => c + 1)}
                  className="w-9 h-9 rounded-full border border-el-chalk flex items-center justify-center
                             hover:border-brand-orange hover:text-brand-orange transition-colors"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Botón agregar + SuccessCheck */}
            <button
              id="btn-agregar-carrito"
              onClick={handleAgregar}
              disabled={agregado}
              className={`btn-primary w-full justify-center py-3.5 text-sm
                ${agregado ? '!bg-green-500 !border-green-500 cursor-default' : ''}`}
            >
              {agregado ? (
                <>
                  <span ref={checkRef} className="t-success-check" data-state={checkState} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10.5L8.5 15L16 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  ¡Agregado al carrito!
                </>
              ) : (
                <>
                  <ShoppingCart size={17} />
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
