// src/pages/Carrito.tsx
import { Link } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Carrito() {
  const { items, quitar, actualizar, total, vaciar } = useCarrito();

  if (items.length === 0) {
    return (
      <main className="pt-32 pb-16 px-[8%] flex flex-col items-center text-center">
        <ShoppingBag size={72} className="text-gray-200 mb-6" />
        <h1 className="text-2xl font-bold text-brand-brown mb-2">Tu carrito está vacío</h1>
        <p className="text-gray-400 mb-8">Agrega algunos productos para comenzar.</p>
        <Link to="/productos" id="btn-ir-productos-carrito" className="btn-primary">
          Ver productos
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-28 pb-16 px-[8%]">
      <h1 className="text-3xl font-black text-brand-brown mb-8">
        Tu <span className="text-brand-orange">carrito</span>
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ producto, cantidad }) => (
            <div
              key={producto.id}
              id={`carrito-item-${producto.id}`}
              className="flex items-center gap-5 bg-white rounded-3xl p-5 shadow-sm"
            >
              <img
                src={producto.img}
                alt={producto.titulo}
                className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-2 flex-shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/80x80/D9C5A0/542B12?text=RR';
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-brand-brown truncate">{producto.titulo}</h3>
                <p className="text-brand-orange font-black">C$ {producto.precio}</p>
              </div>

              {/* Cantidad */}
              <div className="flex items-center gap-2">
                <button
                  id={`btn-restar-${producto.id}`}
                  onClick={() => actualizar(producto.id, cantidad - 1)}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center
                             hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center font-semibold text-sm">{cantidad}</span>
                <button
                  id={`btn-sumar-${producto.id}`}
                  onClick={() => actualizar(producto.id, cantidad + 1)}
                  className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center
                             hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-right min-w-[70px]">
                <p className="font-black text-brand-brown">C$ {producto.precio * cantidad}</p>
              </div>

              <button
                id={`btn-quitar-${producto.id}`}
                onClick={() => quitar(producto.id)}
                className="text-gray-300 hover:text-red-400 transition-colors ml-2"
                aria-label="Quitar producto"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}

          <button
            id="btn-vaciar-carrito"
            onClick={vaciar}
            className="text-sm text-gray-400 hover:text-red-400 transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        {/* Resumen */}
        <div className="bg-white rounded-3xl p-8 shadow-sm h-fit sticky top-24">
          <h2 className="font-bold text-xl text-brand-brown mb-6">Resumen</h2>
          <div className="space-y-3 text-sm text-gray-500 mb-6">
            {items.map(({ producto, cantidad }) => (
              <div key={producto.id} className="flex justify-between">
                <span>{producto.titulo} × {cantidad}</span>
                <span className="font-semibold text-brand-brown">
                  C$ {producto.precio * cantidad}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4 flex justify-between font-black text-lg text-brand-brown mb-6">
            <span>Total</span>
            <span className="text-brand-orange">C$ {total()}</span>
          </div>
          <Link to="/forma-pago" id="btn-proceder-pago" className="btn-primary w-full justify-center">
            Proceder al pago
          </Link>
        </div>
      </div>
    </main>
  );
}
