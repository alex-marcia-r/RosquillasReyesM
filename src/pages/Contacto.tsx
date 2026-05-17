// src/pages/Contacto.tsx
import { useState } from 'react';
import { MapPin, Phone, ExternalLink, Send } from 'lucide-react';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la llamada a la API (fetch POST /api/contacto)
    console.log('Formulario enviado:', form);
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
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
            { icon: <Phone  size={20} />, label: '+505 0000-0000' },
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
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm space-y-5">
          {enviado && (
            <div className="bg-green-50 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl">
              ¡Mensaje enviado! Nos comunicaremos pronto.
            </div>
          )}

          <div>
            <label htmlFor="input-nombre" className="text-xs font-semibold text-gray-500 block mb-1">
              Nombre
            </label>
            <input
              id="input-nombre"
              type="text"
              required
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              placeholder="Tu nombre"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
            />
          </div>

          <div>
            <label htmlFor="input-email" className="text-xs font-semibold text-gray-500 block mb-1">
              Correo electrónico
            </label>
            <input
              id="input-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@correo.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
            />
          </div>

          <div>
            <label htmlFor="input-mensaje" className="text-xs font-semibold text-gray-500 block mb-1">
              Mensaje
            </label>
            <textarea
              id="input-mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              placeholder="¿En qué podemos ayudarte?"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none
                         focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
            />
          </div>

          <button id="btn-enviar-contacto" type="submit" className="btn-primary w-full justify-center">
            <Send size={16} /> Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
}
