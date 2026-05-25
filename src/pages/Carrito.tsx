// src/pages/Carrito.tsx
import { Link } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNumberPopIn } from '../hooks/useNumberPopIn';

/** Precio animado con pop-in al cambiar */
function AnimatedPrice({ value, className }: { value: number; className?: string }) {
  const str = String(value);
  const { playing } = useNumberPopIn(value);
  return (
    <span className={`t-digit-group${playing ? ' is-animating' : ''} ${className ?? ''}`}>
      {str.split('').map((ch, i) => (
        <span key={i} className="t-digit" data-stagger={i > 0 ? i : undefined}>{ch}</span>
      ))}
    </span>
  );
}

export default function Carrito() {
  const { items, quitar, actualizar, total, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-20 px-[6%] flex flex-col items-center text-center" style={{ background:'#fdfcfc' }}>
        <ShoppingBag size={64} className="mb-6" style={{ color:'#e5e5e5' }} />
        <span className="el-eyebrow mb-3 block">Carrito vacío</span>
        <h1
          className="font-cormorant font-light text-brand-brown mb-3"
          style={{ fontSize:'clamp(28px,4vw,36px)', letterSpacing:'-0.02em' }}
        >
          Tu carrito está vacío
        </h1>
        <p className="text-sm mb-8" style={{ color:'#777169' }}>Agrega algunos productos para comenzar.</p>
        <Link to="/productos" id="btn-ir-productos-carrito" className="btn-primary">
          Ver productos <ArrowRight size={16} />
        </Link>
      </main>
    );
  }

  const totalValue = total();

  return (
    <main className="pt-28 pb-20 px-[6%]" style={{ background:'#fdfcfc' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-el-chalk">
          <span className="el-eyebrow mb-2 block">Tu pedido</span>
          <h1
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize:'clamp(32px,5vw,48px)', letterSpacing:'-0.02em' }}
          >
            Tu <span className="text-brand-orange italic">carrito</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map(({ producto, cantidad }) => {
              const subtotal = producto.precio * cantidad;
              return (
                <div
                  key={producto.id}
                  id={`carrito-item-${producto.id}`}
                  className="flex items-center gap-5 bg-white rounded-2xl p-5 border border-el-chalk"
                >
                  <img
                    src={producto.img}
                    alt={producto.titulo}
                    className="w-16 h-16 object-contain rounded-xl flex-shrink-0"
                    style={{ background:'#f5f3f1', padding:'8px' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/80x80/D9C5A0/542B12?text=RR';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-cormorant font-light text-lg text-brand-brown truncate"
                      style={{ letterSpacing:'-0.01em' }}
                    >
                      {producto.titulo}
                    </h3>
                    <p className="text-xs" style={{ color:'#777169' }}>C$ {producto.precio} / unidad</p>
                  </div>

                  {/* Cantidad */}
                  <div className="flex items-center gap-2">
                    <button
                      id={`btn-restar-${producto.id}`}
                      onClick={() => actualizar(producto.id, cantidad - 1)}
                      className="w-7 h-7 rounded-full border border-el-chalk flex items-center justify-center
                                 hover:border-brand-orange hover:text-brand-orange transition-colors"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{cantidad}</span>
                    <button
                      id={`btn-sumar-${producto.id}`}
                      onClick={() => actualizar(producto.id, cantidad + 1)}
                      className="w-7 h-7 rounded-full border border-el-chalk flex items-center justify-center
                                 hover:border-brand-orange hover:text-brand-orange transition-colors"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[72px]">
                    <p className="font-semibold text-brand-brown text-sm">
                      C$ <AnimatedPrice value={subtotal} />
                    </p>
                  </div>

                  <button
                    id={`btn-quitar-${producto.id}`}
                    onClick={() => quitar(producto.id)}
                    className="ml-1 transition-colors"
                    aria-label="Quitar producto"
                    style={{ color:'#e5e5e5' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#e5e5e5')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}

            <button
              id="btn-vaciar-carrito"
              onClick={vaciar}
              className="text-xs transition-colors mt-2"
              style={{ color:'#a59f97' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a59f97')}
            >
              Vaciar carrito
            </button>
          </div>

          {/* Resumen */}
          <div className="bg-white rounded-2xl p-7 border border-el-chalk h-fit sticky top-24">
            <span className="el-eyebrow mb-5 block">Resumen del pedido</span>

            <div className="space-y-3 mb-6">
              {items.map(({ producto, cantidad }) => (
                <div key={producto.id} className="flex justify-between text-sm">
                  <span style={{ color:'#777169' }}>{producto.titulo} × {cantidad}</span>
                  <span className="font-medium text-brand-brown">
                    C$ <AnimatedPrice value={producto.precio * cantidad} />
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-el-chalk pt-4 flex justify-between mb-6">
              <span className="font-medium text-brand-brown text-sm">Total</span>
              <span className="text-brand-orange font-semibold text-base">
                C$ <AnimatedPrice value={totalValue} />
              </span>
            </div>

            <Link to="/forma-pago" id="btn-proceder-pago" className="btn-primary w-full justify-center">
              Proceder al pago <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
