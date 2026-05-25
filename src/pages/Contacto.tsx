// src/pages/Contacto.tsx
import { useRef, useState } from 'react';
import { MapPin, Phone, ExternalLink, Send } from 'lucide-react';
import { useInputShake } from '../hooks/useInputShake';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  // Shake por cada campo
  const nombreShake  = useInputShake();
  const emailShake   = useInputShake();
  const mensajeShake = useInputShake();

  // Success check al enviar
  const checkRef = useRef<HTMLSpanElement>(null);
  const [checkState, setCheckState] = useState<'out' | 'in'>('out');

  const triggerCheck = () => {
    setCheckState('out');
    requestAnimationFrame(() => {
      if (checkRef.current) void checkRef.current.offsetWidth;
      setCheckState('in');
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Regex para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación visual con shake
    let hasError = false;
    if (!form.nombre.trim())  { nombreShake.trigger();  hasError = true; }
    if (!form.email.trim() || !emailRegex.test(form.email)) { emailShake.trigger();   hasError = true; }
    if (!form.mensaje.trim()) { mensajeShake.trigger(); hasError = true; }
    if (hasError) return;

    console.log('Formulario enviado:', form);
    setForm({ nombre: '', email: '', mensaje: '' });
    setEnviado(true);
    triggerCheck();
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <main className="pt-28 pb-16 px-[8%]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-brand-brown mb-2">
          Contáctenos
        </h1>
        <p className="text-gray-500 text-sm">
          Para pedidos especiales o eventos, escríbenos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="font-bold text-xl text-brand-brown">Información de contacto</h2>
          {[
            { icon: <MapPin size={20} />, label: 'El Viejo, Chinandega, Nicaragua' },
            { icon: <Phone size={20} />, label: '+505 8250 1265 | +505 2344 0258' },
            { icon: <ExternalLink size={20} />, label: 'Rosquilla Reyes' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-4 text-gray-600">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange
                              flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-5" noValidate>
          {/* Feedback de éxito */}
          {enviado && (
            <div className="bg-green-50 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-3">
              {/* SuccessCheck */}
              <span
                ref={checkRef}
                className="t-success-check"
                data-state={checkState}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10.5L8.5 15L16 7"
                    stroke="#16a34a"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              ¡Mensaje enviado! Nos comunicaremos pronto.
            </div>
          )}

          {/* Campo nombre */}
          <div>
            <label htmlFor="input-nombre" className="text-xs font-semibold text-gray-500 block mb-1">
              Nombre
            </label>
            <div
              ref={nombreShake.wrapRef}
              className={`t-input-wrap${nombreShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={nombreShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${nombreShake.error ? ' is-error' : ''}`}
              >
                <input
                  id="input-nombre"
                  type="text"
                  value={form.nombre}
                  onChange={(e) => {
                    setForm({ ...form, nombre: e.target.value });
                    if (nombreShake.error) nombreShake.cancel();
                  }}
                  placeholder="Tu nombre"
                  className={`w-full border rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors
                             ${nombreShake.error
                               ? 'border-red-400 bg-red-50/40'
                               : 'border-gray-200'}`}
                />
              </div>
              <p className="t-error-msg">Por favor ingresa tu nombre.</p>
            </div>
          </div>

          {/* Campo email */}
          <div>
            <label htmlFor="input-email" className="text-xs font-semibold text-gray-500 block mb-1">
              Correo electrónico
            </label>
            <div
              ref={emailShake.wrapRef}
              className={`t-input-wrap${emailShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={emailShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${emailShake.error ? ' is-error' : ''}`}
              >
                <input
                  id="input-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (emailShake.error) emailShake.cancel();
                  }}
                  placeholder="tu@correo.com"
                  className={`w-full border rounded-xl px-4 py-3 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors
                             ${emailShake.error
                               ? 'border-red-400 bg-red-50/40'
                               : 'border-gray-200'}`}
                />
              </div>
              <p className="t-error-msg">Por favor ingresa un correo válido.</p>
            </div>
          </div>

          {/* Campo mensaje */}
          <div>
            <label htmlFor="input-mensaje" className="text-xs font-semibold text-gray-500 block mb-1">
              Mensaje
            </label>
            <div
              ref={mensajeShake.wrapRef}
              className={`t-input-wrap${mensajeShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={mensajeShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${mensajeShake.error ? ' is-error' : ''}`}
              >
                <textarea
                  id="input-mensaje"
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) => {
                    setForm({ ...form, mensaje: e.target.value });
                    if (mensajeShake.error) mensajeShake.cancel();
                  }}
                  placeholder="¿En qué podemos ayudarte?"
                  className={`w-full border rounded-xl px-4 py-3 text-sm resize-none
                             focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-colors
                             ${mensajeShake.error
                               ? 'border-red-400 bg-red-50/40'
                               : 'border-gray-200'}`}
                />
              </div>
              <p className="t-error-msg">Por favor escribe tu mensaje.</p>
            </div>
          </div>

          <button id="btn-enviar-contacto" type="submit" className="btn-primary w-full justify-center">
            <Send size={16} /> Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
}
