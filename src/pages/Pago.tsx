// src/pages/Pago.tsx
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Check } from 'lucide-react';

export default function Pago() {
  const { totalCarrito, vaciarCarrito } = useCarrito();
  const navigate = useNavigate();
  const total = totalCarrito();

  const handleConfirmar = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Pedido confirmado exitosamente!');
    vaciarCarrito();
    navigate('/');
  };

  return (
    <main className="pt-32 pb-24 px-[5%] flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-xl bg-brand-dark rounded-3xl shadow-xl p-10 h-fit">
        <h2 className="text-[2.5rem] font-bold text-white mb-6 text-center">
          Detalles de Facturación
        </h2>
        
        <form className="space-y-6" onSubmit={handleConfirmar}>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Nombre completo" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
            />
            <input 
              type="text" 
              placeholder="Dirección de envío (Ej. Managua...)" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
            />
          </div>
          
          <div className="pt-2">
            <h3 className="text-lg font-semibold text-brand-orange mb-4">Datos de la Tarjeta</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Número de Tarjeta" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="MM/AA" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
                />
                <input 
                  type="text" 
                  placeholder="CVC" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
                />
              </div>
            </div>
          </div>
          
          <button type="submit" className="w-full btn-primary py-4 text-lg font-bold flex items-center justify-center gap-2 mt-4 hover:scale-[1.02] transition-transform">
            Confirmar Pedido (C$ {total.toFixed(2)}) <Check size={20} />
          </button>
        </form>
      </div>
    </main>
  );
}
