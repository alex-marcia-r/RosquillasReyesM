// src/pages/Pago.tsx
import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../store/carritoStore';
import { Check } from 'lucide-react';
import { useInputShake } from '../hooks/useInputShake';

export default function Pago() {
  const { total, vaciar } = useCarrito();
  const navigate = useNavigate();
  const totalAmount = total();

  // Shakes para validación (campos controlados)
  const nombreShake  = useInputShake();
  const dirShake     = useInputShake();
  const tarjetaShake = useInputShake();
  const fechaShake   = useInputShake();
  const cvcShake     = useInputShake();

  const handleConfirmar = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const inputs = form.querySelectorAll<HTMLInputElement>('input[required]');
    let hasError = false;
    const shakes = [nombreShake, dirShake, tarjetaShake, fechaShake, cvcShake];
    inputs.forEach((input, i) => {
      if (!input.value.trim()) { shakes[i]?.trigger(); hasError = true; }
    });
    if (hasError) return;
    alert('¡Pedido confirmado exitosamente!');
    vaciar();
    navigate('/');
  };

  return (
    <main
      className="min-h-screen pt-28 pb-20 px-[6%]"
      style={{ background: '#fdfcfc' }}
    >
      <div className="max-w-lg mx-auto">

        {/* Header editorial */}
        <div className="mb-10">
          <span className="el-eyebrow mb-3 block">Paso 2 de 2</span>
          <h1
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing: '-0.02em' }}
          >
            Detalles de facturación
          </h1>
        </div>

        {/* Card formulario */}
        <div className="bg-white rounded-2xl border border-el-chalk p-8">
          <form className="space-y-8" onSubmit={handleConfirmar}>

            {/* Datos personales */}
            <div className="space-y-6">
              <span className="el-eyebrow block">Datos personales</span>

              <div>
                <label className="el-eyebrow mb-2 block" style={{ fontSize:'10px' }}>Nombre completo</label>
                <div ref={nombreShake.wrapRef} className={`t-input-wrap${nombreShake.error ? ' is-error' : ''}`}>
                  <div ref={nombreShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${nombreShake.error ? ' is-error' : ''}`}>
                    <input type="text" placeholder="Tu nombre completo" required className="el-input"
                      onChange={(e) => { if (e.target.value && nombreShake.error) nombreShake.cancel(); }} />
                  </div>
                  <p className="t-error-msg mt-1">Ingresa tu nombre completo.</p>
                </div>
              </div>

              <div>
                <label className="el-eyebrow mb-2 block" style={{ fontSize:'10px' }}>Dirección de envío</label>
                <div ref={dirShake.wrapRef} className={`t-input-wrap${dirShake.error ? ' is-error' : ''}`}>
                  <div ref={dirShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${dirShake.error ? ' is-error' : ''}`}>
                    <input type="text" placeholder="Ej. Managua, Nicaragua..." required className="el-input"
                      onChange={(e) => { if (e.target.value && dirShake.error) dirShake.cancel(); }} />
                  </div>
                  <p className="t-error-msg mt-1">Ingresa tu dirección de envío.</p>
                </div>
              </div>
            </div>

            <hr className="el-divider" />

            {/* Datos de tarjeta */}
            <div className="space-y-6">
              <span className="el-eyebrow block">Datos de la tarjeta</span>

              <div>
                <label className="el-eyebrow mb-2 block" style={{ fontSize:'10px' }}>Número de tarjeta</label>
                <div ref={tarjetaShake.wrapRef} className={`t-input-wrap${tarjetaShake.error ? ' is-error' : ''}`}>
                  <div ref={tarjetaShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${tarjetaShake.error ? ' is-error' : ''}`}>
                    <input type="text" placeholder="•••• •••• •••• ••••" required className="el-input"
                      onChange={(e) => { if (e.target.value && tarjetaShake.error) tarjetaShake.cancel(); }} />
                  </div>
                  <p className="t-error-msg mt-1">Ingresa el número de tarjeta.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="el-eyebrow mb-2 block" style={{ fontSize:'10px' }}>Vencimiento</label>
                  <div ref={fechaShake.wrapRef} className={`t-input-wrap${fechaShake.error ? ' is-error' : ''}`}>
                    <div ref={fechaShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${fechaShake.error ? ' is-error' : ''}`}>
                      <input type="text" placeholder="MM/AA" required className="el-input"
                        onChange={(e) => { if (e.target.value && fechaShake.error) fechaShake.cancel(); }} />
                    </div>
                    <p className="t-error-msg mt-1">Requerido.</p>
                  </div>
                </div>
                <div>
                  <label className="el-eyebrow mb-2 block" style={{ fontSize:'10px' }}>CVC</label>
                  <div ref={cvcShake.wrapRef} className={`t-input-wrap${cvcShake.error ? ' is-error' : ''}`}>
                    <div ref={cvcShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${cvcShake.error ? ' is-error' : ''}`}>
                      <input type="text" placeholder="•••" required className="el-input"
                        onChange={(e) => { if (e.target.value && cvcShake.error) cvcShake.cancel(); }} />
                    </div>
                    <p className="t-error-msg mt-1">Requerido.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total + Confirmar */}
            <div className="border-t border-el-chalk pt-6">
              <div className="flex justify-between items-center mb-5">
                <span className="text-sm font-medium text-brand-brown">Total a pagar</span>
                <span className="text-brand-orange font-semibold text-lg">C$ {totalAmount.toFixed(2)}</span>
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-3.5">
                <Check size={17} /> Confirmar pedido
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
