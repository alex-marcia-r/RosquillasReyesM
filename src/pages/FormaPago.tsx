// src/pages/FormaPago.tsx
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, Building2 } from 'lucide-react';

export default function FormaPago() {
  return (
    <main className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-brand-brown mb-3 tracking-tight">
            Elige tu Forma de Pago
          </h2>
          <p className="text-brand-navy/70 font-semibold text-sm md:text-base max-w-md mx-auto">
            Selecciona el método de pago más conveniente para finalizar tu pedido de forma segura.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/pago" className="glass-card-dark p-10 rounded-3xl hover:border-brand-orange hover:shadow-[0_15px_40px_rgba(255,159,13,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-300 mb-4">
              <CreditCard size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black text-white">Tarjeta de Crédito/Débito</h3>
          </Link>

          <Link to="/pago" className="glass-card-dark p-10 rounded-3xl hover:border-brand-orange hover:shadow-[0_15px_40px_rgba(255,159,13,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-300 mb-4">
              <Banknote size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black text-white">Pago en Efectivo</h3>
          </Link>

          <Link to="/pago" className="glass-card-dark p-10 rounded-3xl hover:border-brand-orange hover:shadow-[0_15px_40px_rgba(255,159,13,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-300 mb-4">
              <Building2 size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-black text-white">Transferencia Bancaria</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
