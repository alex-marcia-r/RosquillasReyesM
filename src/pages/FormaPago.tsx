// src/pages/FormaPago.tsx
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, Building2, ArrowRight } from 'lucide-react';

const metodos = [
  {
    id: 'tarjeta',
    icon: <CreditCard size={40} strokeWidth={1.5} />,
    titulo: 'Tarjeta de Crédito/Débito',
    desc: 'Visa, Mastercard, American Express',
  },
  {
    id: 'efectivo',
    icon: <Banknote size={40} strokeWidth={1.5} />,
    titulo: 'Pago en Efectivo',
    desc: 'Contra entrega (delivery)',
  },
  {
    id: 'transferencia',
    icon: <Building2 size={40} strokeWidth={1.5} />,
    titulo: 'Transferencia Bancaria',
    desc: 'Depósito directo a cuenta',
  },
];

export default function FormaPago() {
  return (
    <main
      className="min-h-screen pt-28 pb-20 px-[6%]"
      style={{ background: '#fdfcfc' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header editorial */}
        <div className="mb-12 pb-10 border-b border-el-chalk">
          <span className="el-eyebrow mb-3 block">Paso 1 de 2</span>
          <h1
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize: 'clamp(32px,5vw,48px)', letterSpacing: '-0.02em' }}
          >
            Elige tu forma de pago
          </h1>
        </div>

        {/* Cards de método de pago */}
        <div className="grid md:grid-cols-3 gap-5">
          {metodos.map(({ id, icon, titulo, desc }) => (
            <Link
              key={id}
              to="/pago"
              className="bg-white rounded-2xl border border-el-chalk p-8 flex flex-col items-center text-center
                         transition-all duration-200 group
                         hover:border-brand-orange hover:-translate-y-0.5 hover:shadow-hairline-md"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-brand-orange
                           transition-colors duration-200"
                style={{ background: 'rgba(255,159,13,0.08)' }}
              >
                {icon}
              </div>
              <h3
                className="font-cormorant font-light text-lg text-brand-brown mb-2"
                style={{ letterSpacing: '-0.01em' }}
              >
                {titulo}
              </h3>
              <p className="text-xs mb-5" style={{ color: '#777169' }}>{desc}</p>
              <span
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-brand-orange opacity-0
                           group-hover:opacity-100 transition-opacity"
              >
                Seleccionar <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
