// src/pages/FormaPago.tsx
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, Building2 } from 'lucide-react';

export default function FormaPago() {
  return (
    <main className="pt-32 pb-24 px-[5%] flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-black text-brand-brown mb-10 text-center">
          Elige tu Forma de Pago
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Link to="/pago" className="bg-brand-brown p-10 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-brand-orange/20 border-2 border-transparent hover:border-brand-orange hover:-translate-y-2 transition-all duration-400 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-400 mb-4">
              <CreditCard size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-white">Tarjeta de Crédito/Débito</h3>
          </Link>

          <Link to="/pago" className="bg-brand-brown p-10 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-brand-orange/20 border-2 border-transparent hover:border-brand-orange hover:-translate-y-2 transition-all duration-400 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-400 mb-4">
              <Banknote size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-white">Pago en Efectivo (Delivery)</h3>
          </Link>

          <Link to="/pago" className="bg-brand-brown p-10 rounded-3xl shadow-md hover:shadow-2xl hover:shadow-brand-orange/20 border-2 border-transparent hover:border-brand-orange hover:-translate-y-2 transition-all duration-400 flex flex-col items-center text-center group cursor-pointer">
            <div className="text-brand-orange group-hover:scale-110 transition-transform duration-400 mb-4">
              <Building2 size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-[1.2rem] font-semibold text-white">Transferencia Bancaria</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
