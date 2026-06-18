// src/pages/Pago.tsx
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Check } from 'lucide-react';

export default function Pago() {
  const { total, vaciar } = useCarrito();
  const navigate = useNavigate();
  const totalAmount = total();

  const handleConfirmar = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Pedido confirmado exitosamente!');
    vaciar();
    navigate('/');
  };

  return (
    <main className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10 animate-fade-in">
      <div className="w-full max-w-xl glass-card-dark rounded-4xl p-10 shadow-2xl">
        <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
          Datos de Envío
        </h2>
        
        <form className="space-y-6" onSubmit={handleConfirmar}>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Nombre completo" 
              required 
              className="w-full glass-input-dark text-base"
            />
            <input 
              type="text" 
              placeholder="Dirección exacta de envío" 
              required 
              className="w-full glass-input-dark text-base"
            />
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <h3 className="text-lg font-black text-brand-orange mb-4 tracking-wide uppercase text-sm">Método de Pago</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Número de Tarjeta (16 dígitos)" 
                required 
                className="w-full glass-input-dark text-base"
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Vencimiento (MM/AA)" 
                  required 
                  className="w-full glass-input-dark text-base"
                />
                <input 
                  type="text" 
                  placeholder="Código CVC" 
                  required 
                  className="w-full glass-input-dark text-base"
                />
              </div>
            </div>
          </div>
          
          <button type="submit" className="w-full btn-primary py-4 text-base font-bold flex items-center justify-center gap-2 mt-6">
            Confirmar Compra (C$ {totalAmount.toFixed(2)}) <Check size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}
