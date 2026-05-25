// src/pages/Contacto.tsx
import { useRef, useState } from 'react';
import { MapPin, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import { useInputShake } from '../hooks/useInputShake';

/** Validación email estricta: requiere usuario@dominio.tld */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export default function Contacto() {
  const [form, setForm]     = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState('Por favor ingresa un correo válido.');

  const nombreShake  = useInputShake();
  const emailShake   = useInputShake();
  const mensajeShake = useInputShake();

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
    let hasError = false;

    if (!form.nombre.trim()) { nombreShake.trigger(); hasError = true; }

    if (!form.email.trim()) {
      setEmailErrMsg('Por favor ingresa tu correo electrónico.');
      emailShake.trigger(); hasError = true;
    } else if (!isValidEmail(form.email)) {
      setEmailErrMsg('El correo debe tener el formato usuario@dominio.com');
      emailShake.trigger(); hasError = true;
    }

    if (!form.mensaje.trim()) { mensajeShake.trigger(); hasError = true; }
    if (hasError) return;

    console.log('Formulario enviado:', form);
    setForm({ nombre: '', email: '', mensaje: '' });
    setEnviado(true);
    triggerCheck();
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-[6%]" style={{ background: '#fdfcfc' }}>

      {/* Header editorial */}
      <div className="max-w-5xl mx-auto pb-12 mb-16 border-b border-el-chalk">
        <span className="el-eyebrow mb-3 block">Contacto</span>
        <h1
          className="font-cormorant font-light text-brand-brown mb-4"
          style={{ fontSize: 'clamp(36px,6vw,56px)', letterSpacing: '-0.02em', lineHeight: 1.08 }}
        >
          Escríbenos.
        </h1>
        <p className="text-sm max-w-md" style={{ color: '#777169', lineHeight: 1.7 }}>
          Para pedidos especiales, eventos o cualquier consulta — estamos aquí.
        </p>
      </div>

      {/* Dos columnas */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

        {/* Info */}
        <div className="space-y-10">
          <div>
            <span className="el-eyebrow mb-5 block">Información de contacto</span>
            <div className="space-y-5">
              {[
                { icon: <MapPin size={14} />, label: 'El Viejo, Chinandega, Nicaragua' },
                { icon: <Phone size={14} />, label: '+505 8250 1265 · +505 2344 0258' },
                { icon: <ExternalLink size={14} />, label: 'Rosquilla Reyes' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-brand-orange">{icon}</span>
                  <span className="text-sm leading-relaxed" style={{ color: '#000000' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="el-divider" />

          <p className="text-xs" style={{ color: '#a59f97', lineHeight: 1.8 }}>
            Rosquillas Reyes · Tradición artesanal desde El Viejo, Nicaragua.<br />
            Respondemos en menos de 24 horas.
          </p>
        </div>

        {/* Formulario */}
        <div>
          {/* Éxito */}
          {enviado && (
            <div
              className="flex items-center gap-3 text-sm mb-8 py-3 px-4"
              style={{ background: '#f5f3f1', borderLeft: '2px solid #ff9f0d', color: '#000000' }}
            >
              <span ref={checkRef} className="t-success-check" data-state={checkState} aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10.5L8.5 15L16 7" stroke="#ff9f0d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Mensaje enviado — te responderemos pronto.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8" noValidate>

            {/* Nombre */}
            <div>
              <label htmlFor="input-nombre" className="el-eyebrow mb-3 block">Nombre</label>
              <div ref={nombreShake.wrapRef} className={`t-input-wrap${nombreShake.error ? ' is-error' : ''}`}>
                <div ref={nombreShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${nombreShake.error ? ' is-error' : ''}`}>
                  <input
                    id="input-nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={form.nombre}
                    onChange={(e) => { setForm({ ...form, nombre: e.target.value }); if (nombreShake.error) nombreShake.cancel(); }}
                    className={`el-input${nombreShake.error ? ' is-error' : ''}`}
                  />
                </div>
                <p className="t-error-msg mt-1">Por favor ingresa tu nombre.</p>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="input-email" className="el-eyebrow mb-3 block">Correo electrónico</label>
              <div ref={emailShake.wrapRef} className={`t-input-wrap${emailShake.error ? ' is-error' : ''}`}>
                <div ref={emailShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${emailShake.error ? ' is-error' : ''}`}>
                  <input
                    id="input-email"
                    type="email"
                    placeholder="usuario@dominio.com"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); if (emailShake.error) emailShake.cancel(); }}
                    className={`el-input${emailShake.error ? ' is-error' : ''}`}
                  />
                </div>
                <p className="t-error-msg mt-1">{emailErrMsg}</p>
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="input-mensaje" className="el-eyebrow mb-3 block">Mensaje</label>
              <div ref={mensajeShake.wrapRef} className={`t-input-wrap${mensajeShake.error ? ' is-error' : ''}`}>
                <div ref={mensajeShake.inputRef as React.RefObject<HTMLDivElement>} className={`t-input${mensajeShake.error ? ' is-error' : ''}`}>
                  <textarea
                    id="input-mensaje"
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    value={form.mensaje}
                    onChange={(e) => { setForm({ ...form, mensaje: e.target.value }); if (mensajeShake.error) mensajeShake.cancel(); }}
                    className={`el-input${mensajeShake.error ? ' is-error' : ''}`}
                    style={{ resize: 'none' }}
                  />
                </div>
                <p className="t-error-msg mt-1">Por favor escribe tu mensaje.</p>
              </div>
            </div>

            <button id="btn-enviar-contacto" type="submit" className="btn-primary gap-2">
              Enviar mensaje <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
