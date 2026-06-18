// src/pages/Carrito.tsx
import { Link } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useNumberPopIn } from '../hooks/useNumberPopIn';

function AnimatedPrice({ value, className }: { value: number; className?: string }) {
  const str = String(value);
  const { playing } = useNumberPopIn(value);

  return (
    <span className={`t-digit-group${playing ? ' is-animating' : ''} ${className ?? ''}`}>
      {str.split('').map((ch, i) => (
        <span
          key={i}
          className="t-digit"
          data-stagger={i > 0 ? i : undefined}
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Carrito() {
  const { items, quitar, actualizar, total, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-16 px-[8%] flex flex-col items-center text-center relative z-10">
        <div className="glass-card rounded-4xl p-12 border-white/60 flex flex-col items-center max-w-md mt-12 shadow-2xl">
          <ShoppingBag size={64} className="text-brand-orange/50 mb-6 animate-bounce" />
          <h1 className="text-2xl font-black text-brand-brown mb-3">Tu carrito está vacío</h1>
          <p className="text-brand-navy/70 font-semibold mb-8 leading-relaxed">Agrega algunos de nuestros deliciosos productos artesanales para comenzar tu pedido.</p>
          <Link to="/productos" id="btn-ir-productos-carrito" className="btn-primary">
            Explorar Productos
          </Link>
        </div>
      </main>
    );
  }

  const totalValue = total();

  return (
    <main className="pt-32 pb-20 px-[6%] md:px-[8%] relative z-10">
      <h1 className="text-4xl font-black text-brand-brown mb-10 tracking-tight text-center md:text-left">
        Tu <span className="text-brand-orange">carrito</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Lista */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ producto, cantidad }) => {
            const subtotal = producto.precio * cantidad;
            return (
              <div
                key={producto.id}
                id={`carrito-item-${producto.id}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card rounded-3xl p-5 border-white/50"
              >
                {/* Info Izquierda: Imagen + Detalles */}
                <div className="flex items-center gap-4">
                  <img
                    src={producto.img}
                    alt={producto.titulo}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-2xl bg-white/40 border border-white/50 p-2 flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://placehold.co/80x80/D9C5A0/542B12?text=RR';
                    }}
                  />
                  <div className="min-w-0">
                    <h3 className="font-black text-brand-brown text-base sm:text-lg truncate">{producto.titulo}</h3>
                    <p className="text-brand-orange font-black">C$ {producto.precio}</p>
                  </div>
                </div>

                {/* Controles Derecha: Cantidad + Subtotal + Quitar */}
                <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t border-white/40 sm:border-t-0 w-full sm:w-auto">
                  {/* Cantidad */}
                  <div className="flex items-center gap-2">
                    <button
                      id={`btn-restar-${producto.id}`}
                      onClick={() => actualizar(producto.id, cantidad - 1)}
                      className="w-8 h-8 rounded-full bg-white/50 border border-white/80 flex items-center justify-center
                                 hover:border-brand-orange hover:text-brand-orange hover:bg-white/80 active:scale-90 transition-all text-brand-brown"
                      aria-label="Restar uno"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center font-black text-brand-brown text-sm">{cantidad}</span>
                    <button
                      id={`btn-sumar-${producto.id}`}
                      onClick={() => actualizar(producto.id, cantidad + 1)}
                      className="w-8 h-8 rounded-full bg-white/50 border border-white/80 flex items-center justify-center
                                 hover:border-brand-orange hover:text-brand-orange hover:bg-white/80 active:scale-90 transition-all text-brand-brown"
                      aria-label="Sumar uno"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right min-w-[80px]">
                    <p className="font-black text-brand-brown">
                      C$ <AnimatedPrice value={subtotal} />
                    </p>
                  </div>

                  {/* Quitar */}
                  <button
                    id={`btn-quitar-${producto.id}`}
                    onClick={() => quitar(producto.id)}
                    className="text-brand-brown/40 hover:text-red-500 hover:scale-110 active:scale-90 p-1.5 rounded-full hover:bg-red-50 transition-all"
                    aria-label="Quitar producto"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center pt-2">
            <button
              id="btn-vaciar-carrito"
              onClick={vaciar}
              className="text-xs font-black uppercase tracking-wider text-brand-brown/50 hover:text-red-500 transition-colors bg-white/20 hover:bg-white/50 border border-white/40 px-4 py-2 rounded-full"
            >
              Vaciar mi carrito
            </button>
            <Link
              to="/productos"
              className="text-xs font-black uppercase tracking-wider text-brand-orange hover:underline"
            >
              ← Seguir comprando
            </Link>
          </div>
        </div>

        {/* Resumen */}
        <div className="glass-card rounded-3xl p-8 border-white/60 shadow-2xl h-fit sticky top-24">
          <h2 className="font-black text-xl text-brand-brown mb-6">Resumen de compra</h2>
          <div className="space-y-4 text-sm font-semibold text-brand-navy/80 mb-6">
            {items.map(({ producto, cantidad }) => (
              <div key={producto.id} className="flex justify-between items-center pb-2 border-b border-white/30">
                <span className="truncate max-w-[150px]">{producto.titulo} <span className="text-xs text-brand-brown/50 font-bold">× {cantidad}</span></span>
                <span className="font-black text-brand-brown shrink-0">
                  C$ <AnimatedPrice value={producto.precio * cantidad} />
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/40 pt-4 flex justify-between font-black text-lg text-brand-brown mb-8">
            <span>Total</span>
            <span className="text-brand-orange text-xl">
              C$ <AnimatedPrice value={totalValue} />
            </span>
          </div>
          <Link to="/forma-pago" id="btn-proceder-pago" className="btn-primary w-full justify-center py-4">
            Proceder al pago
          </Link>
        </div>
      </div>
    </main>
  );
}
