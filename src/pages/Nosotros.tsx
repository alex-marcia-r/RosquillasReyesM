// src/pages/Nosotros.tsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const valores = [
  'Calidad del producto',
  'Tradición y Herencia',
  'Innovación y Adaptación',
  'Sostenibilidad y Resp. Social',
  'Colaboración familiar',
  'Respeto por la cultura Local',
];

export default function Nosotros() {
  return (
    <main style={{ background: '#fdfcfc' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-28 pb-20 px-[6%] border-b border-el-chalk">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="el-eyebrow mb-4 block">Sobre nosotros</span>
            <h1
              className="font-cormorant font-light text-brand-brown mb-5"
              style={{ fontSize:'clamp(40px,6vw,64px)', letterSpacing:'-0.02em', lineHeight:1.05 }}
            >
              Desde 1875 —<br />
              <span className="text-brand-orange italic">5ta Generación</span>
            </h1>
            <p className="text-sm mb-8 max-w-md leading-relaxed" style={{ color:'#777169' }}>
              Rosquillas Reyes: Un legado de tradición y resistencia en El Viejo, Chinandega.
            </p>
            <div className="flex gap-3">
              <Link to="/productos" className="btn-primary">
                Ver productos <ArrowRight size={16} />
              </Link>
              <Link to="/contacto" className="btn-secondary">
                Contacto
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-hairline hidden md:block">
            <img
              src="/img/imagen-nosotros.png"
              alt="Imagen de nosotros"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/D9C5A0/542B12?text=Nosotros';
              }}
            />
          </div>
        </div>
      </section>

      {/* ── HISTORIA ─────────────────────────────────────────── */}
      <section className="py-20 px-[6%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="el-eyebrow mb-3 block">Conoce más</span>
            <h2
              className="font-cormorant font-light text-brand-brown"
              style={{ fontSize:'clamp(28px,4vw,40px)', letterSpacing:'-0.02em' }}
            >
              Historia de Rosquilla Reyes
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                titulo: 'La Identidad Gastronómica',
                texto: 'La historia de Rosquillas Reyes se entrelaza con la identidad gastronómica de Nicaragua, siendo un emblema de la continuidad cultural y esfuerzo familiar. Fundada en 1875 por María Claudina Reyes, esta empresa ha transcendido generaciones, consolidándose como una de las tres rosquillas emblemáticas del país, junto a las de Somoto y Rivas.',
              },
              {
                titulo: 'Orígenes y evolución',
                texto: 'El negocio nació como un emprendimiento modesto, donde María Claudina Reyes y sus hermanas vendían rosquillas en las calles de El Viejo, especialmente en fechas festivas. La técnica de elaboración, transmitida oralmente, se basaba en un horneado tradicional que garantiza una textura crujiente y porosa, rasgo distintivo que perdura hasta hoy.',
              },
              {
                titulo: 'Impacto cultural y económico',
                texto: 'Rosquillas Reyes forma parte de la "trinidad de rosquillas" nicaragüense. Su éxito radica en la consistencia de su proceso, que incluye el uso de utensilios y técnicas heredadas, como el horneado en hornos de barro o leña. Además, el negocio se convierte en un motor económico local, especialmente en temporadas como Semana Santa y Diciembre.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="p-7 rounded-2xl border-l-2 border-brand-orange"
                style={{ background: '#f5f3f1' }}
              >
                <h3
                  className="font-cormorant font-light text-xl text-brand-brown mb-3"
                  style={{ letterSpacing:'-0.01em' }}
                >
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color:'#777169' }}>
                  {item.texto}
                </p>
              </div>
            ))}

            {/* Quinta generación — destacada */}
            <div
              className="p-8 rounded-2xl border border-el-chalk"
              style={{ background:'#fdfcfc' }}
            >
              <span className="el-eyebrow mb-3 block">Quinta generación</span>
              <h3
                className="font-cormorant font-light text-2xl text-brand-brown mb-4"
                style={{ letterSpacing:'-0.02em' }}
              >
                Tamara Teresa Tercero Reyes
              </h3>
              <p className="text-sm leading-relaxed" style={{ color:'#777169' }}>
                Actualmente, Tamara Teresa Tercero Reyes lidera el taller, preservando métodos que datan de su bisabuela.
                Bajo su dirección, la empresa mantiene una producción diaria de 150 cazuelas de rosquillas, 210 hojaldras
                y otros productos, comercializados en Nicaragua y Centroamérica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN — sección dark ───────────────────── */}
      <section className="py-20 px-[6%]" style={{ background:'#000000' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="el-eyebrow mb-3 block" style={{ color:'rgba(255,255,255,0.4)' }}>
              Nuestra empresa
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                titulo: 'Visión',
                texto: 'Ser reconocidos como líderes en la producción de rosquillas y postres típicos horneados nicaragüenses, manteniendo nuestra tradición familiar y cultural de más de 140 años. Queremos seguir siendo un símbolo de identidad y orgullo para la comunidad de El Viejo, Chinandega.',
              },
              {
                titulo: 'Misión',
                texto: 'Preservar y compartir la tradición de elaborar rosquillas y otros postres típicos horneados nicaragüenses, manteniendo la calidad y el sabor que nos ha caracterizado durante más de 140 años. Nos esforzamos por ser líderes en la producción artesanal de rosquillas, promoviendo el legado familiar y la identidad cultural.',
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="p-8 rounded-2xl"
                style={{ border:'1px solid rgba(255,255,255,0.1)' }}
              >
                <h3
                  className="font-cormorant font-light text-brand-orange text-2xl mb-4"
                  style={{ letterSpacing:'-0.02em' }}
                >
                  {item.titulo}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.65)' }}>
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          {/* Valores */}
          <div>
            <span className="el-eyebrow mb-6 block" style={{ color:'rgba(255,255,255,0.4)' }}>
              Nuestros valores
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {valores.map((val) => (
                <div key={val} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background:'#ff9f0d' }}
                  />
                  <span className="text-sm font-medium" style={{ color:'rgba(255,255,255,0.75)' }}>
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MENSAJE FINAL ────────────────────────────────────── */}
      <section className="py-20 px-[6%] border-t border-el-chalk">
        <div className="max-w-3xl mx-auto text-center">
          <span className="el-eyebrow mb-4 block">Desde El Viejo, Nicaragua</span>
          <p
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize:'clamp(20px,3vw,28px)', letterSpacing:'-0.01em', lineHeight:1.5 }}
          >
            Rosquillas Reyes — un negocio creado en 1875 donde encontrarás las mejores
            Rosquillas, Hojaldras, Rosquetes, Cosas de Horno y la especialidad de la casa:
            las{' '}
            <span className="text-brand-orange italic">Pupusas tostadas</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
