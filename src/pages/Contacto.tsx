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

    // Crear mensaje pre-llenado para WhatsApp
    const mensajeWhatsApp = `¡Hola, Rosquillas Reyes! 🥖\n\nMe gustaría ponerme en contacto con ustedes:\n\n👤 *Nombre:* ${form.nombre}\n📧 *Correo:* ${form.email}\n💬 *Mensaje:* ${form.mensaje}`;
    const url = `https://wa.me/50581759257?text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Abrir chat de WhatsApp
    window.open(url, '_blank');

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
            { icon: <Phone size={20} />, label: 'Llamar: +505 8250 1265 | +505 2344 0258' },
            {
              icon: (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.01 14.069.993 11.453.992c-5.436 0-9.861 4.371-9.865 9.801-.001 1.83.483 3.61 1.4 5.17l-1.018 3.719 3.825-.992zm11.366-6.406c-.312-.156-1.848-.894-2.136-1-.288-.106-.499-.156-.708.156-.208.312-.807.994-.99 1.202-.183.208-.365.234-.677.078-1.849-.93-2.909-1.799-3.974-3.645-.24-.415.24-.385.688-1.282.078-.156.039-.293-.02-.449-.06-.156-.499-1.202-.683-1.649-.18-.433-.361-.375-.499-.382l-.425-.008c-.147 0-.385.056-.587.279-.202.223-.77.747-.77 1.82 0 1.072.787 2.107.897 2.253.111.147 1.547 2.333 3.75 3.297.525.228.934.365 1.253.467.527.167 1.008.143 1.388.087.424-.062 1.848-.742 2.107-1.42.259-.678.259-1.258.182-1.38-.077-.123-.288-.199-.6-.356z"/>
                </svg>
              ),
              label: 'Chat de WhatsApp: +505 8175 9257',
              href: 'https://wa.me/50581759257'
            },
            { icon: <ExternalLink size={20} />, label: 'Facebook: Rosquillas Reyes', href: '#' },
          ].map(({ icon, label, href }) => {
            const isClickable = !!href;
            const content = (
              <>
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange
                                flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <span className="text-sm">{label}</span>
              </>
            );

            if (isClickable) {
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-600 hover:text-brand-orange transition-all duration-200"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={label} className="flex items-center gap-4 text-gray-600">
                {content}
              </div>
            );
          })}
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
              ¡Mensaje enviado a WhatsApp! Nos comunicaremos pronto.
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
