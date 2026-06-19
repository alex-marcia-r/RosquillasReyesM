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
  const [opcion, setOpcion] = useState<string>('unidad');

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

  const supportsPackages = producto.id === 'rosquillas' || producto.id === 'cosasdehorno';

  const getOpciones = () => {
    if (producto.id === 'rosquillas') {
      return ['unidad', '50', '100', '200', '300', '400', '500'];
    }
    if (producto.id === 'cosasdehorno') {
      return ['unidad', '5', '10', '20'];
    }
    return ['unidad'];
  };

  const opciones = getOpciones();

  const getPrecioDeOpcion = (opt: string): number => {
    if (producto.id === 'pupusas') return 15;
    if (producto.id === 'hojaldras') return 20; // 3 por C$ 20

    const base = producto.id === 'rosquillas' ? 2 : (producto.id === 'rosquetes' ? 2 : 15);
    if (opt === 'unidad') return base;
    return base * parseInt(opt, 10);
  };

  const getLabelDeOpcion = (opt: string): string => {
    if (opt === 'unidad') return 'Unidad';
    if (producto.id === 'cosasdehorno') {
      return `Bandeja de ${opt}`;
    }
    return opt; // just the number
  };

  const priceOfSelectedOption = getPrecioDeOpcion(opcion);

  const handleAgregar = () => {
    const paqueteSelected = opcion === 'unidad' ? undefined : parseInt(opcion, 10);
    agregar(producto, cantidad, paqueteSelected, priceOfSelectedOption);

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
            C$ {priceOfSelectedOption}
            <span className="text-base font-bold text-brand-brown/60 ml-2">
              / {opcion === 'unidad' ? producto.unidad : (producto.id === 'cosasdehorno' ? `Bandeja de ${opcion}` : `Paquete de ${opcion}`)}
            </span>
          </div>

          {/* Opciones de Presentación / Paquetes */}
          {supportsPackages && (
            <div className="mb-6">
              <label className="block text-xs font-black tracking-wider uppercase text-brand-brown/70 mb-2">
                Selecciona la Presentación
              </label>
              <div className="flex flex-wrap gap-2">
                {opciones.map((opt) => {
                  const price = getPrecioDeOpcion(opt);
                  const isSelected = opcion === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => setOpcion(opt)}
                      className={`py-3 px-3.5 rounded-xl border text-xs font-bold text-center transition-all duration-300 min-w-[70px]
                        ${isSelected
                          ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20 scale-102 font-black'
                          : 'bg-white/40 border-white/80 text-brand-brown hover:bg-white/70 hover:border-brand-orange/40'}`}
                    >
                      <div>{getLabelDeOpcion(opt)}</div>
                      <div className={isSelected ? 'text-white/85 text-[10px]' : 'text-brand-brown/60 font-semibold text-[10px]'}>C$ {price}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

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
