// src/pages/Nosotros.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Nosotros() {
  return (
    <main className="relative z-10 pb-16">
      {/* Hero Nosotros */}
      <section className="pt-32 pb-12 px-[6%] md:px-[8%]">
        <div className="w-full glass-card border-white/60 rounded-4xl grid md:grid-cols-2 gap-10 items-center p-8 md:p-14 shadow-2xl">
          <div>
            <p className="text-xs font-black tracking-widest text-brand-orange uppercase mb-3">
              SOBRE NOSOTROS
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-brand-brown leading-tight mb-6">
              Desde 1875 <br />
              <span className="text-brand-orange">Vta Generación</span>
            </h1>
            <p className="text-brand-navy font-bold mb-8 text-base md:text-lg leading-relaxed">
              Rosquillas Reyes: Un legado de tradición, esfuerzo y resiliencia en la histórica ciudad de El Viejo, Chinandega.
            </p>
            <Link to="/productos" className="btn-primary inline-flex items-center gap-2">
              Explorar Productos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-3xl border border-white/50 shadow-xl overflow-hidden h-72 md:h-[400px]">
            <img
              src="/img/imagen-nosotros.png"
              alt="Tradición Rosquillas Reyes"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/D9C5A0/542B12?text=Nosotros';
              }}
            />
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 px-[6%] md:px-[8%]">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-black uppercase tracking-widest text-xs mb-2">CONOCE MÁS</p>
          <h2 className="text-3xl md:text-4xl font-black text-brand-brown">Nuestra Historia</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 leading-relaxed">
          <div className="glass-card p-8 rounded-3xl border-l-4 border-l-brand-orange border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <h3 className="text-xl font-black text-brand-brown mb-3">La Identidad Gastronómica</h3>
            <p className="text-brand-navy/80 font-semibold text-sm md:text-base">
              La historia de Rosquillas Reyes se entrelaza con la identidad gastronómica de Nicaragua, siendo un emblema de la continuidad cultural y esfuerzo familiar. Fundada en 1875 por Maria Claudina Reyes, esta empresa ha trascendido generaciones, consolidándose como una de las tres rosquillas emblemáticas del país, junto a las de Somoto y Rivas.
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-3xl border-l-4 border-l-brand-orange border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <h3 className="text-xl font-black text-brand-brown mb-3">Orígenes y evolución</h3>
            <p className="text-brand-navy/80 font-semibold text-sm md:text-base">
              El negocio nació como un emprendimiento modesto, donde María Claudina Reyes y sus hermanas vendían rosquillas en las calles de El Viejo, especialmente en fechas festivas. La técnica de elaboración transmitida oralmente, se basaba en un horneado tradicional que garantiza una textura crujiente y porosa, rasgo distintivo que perdura hasta hoy. Con el paso del tiempo, la familia expandió su producción, incorporando productos como hojaldras, rosquetes y bocadillos, sin perder la esencia artesanal.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border-l-4 border-l-brand-orange border border-white/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300">
            <h3 className="text-xl font-black text-brand-brown mb-3">Impacto cultural y económico</h3>
            <p className="text-brand-navy/80 font-semibold text-sm md:text-base">
              Rosquillas Reyes forma parte de la "trinidad de rosquillas" nicaragüense. Su éxito radica en la consistencia de su proceso, que incluye el uso de utensilios y técnicas heredadas, como el horneado en hornos de barro o leña. Además, el negocio se convierte en un motor económico local, especialmente en temporadas como Semana Santa y Diciembre.
            </p>
          </div>

          <div className="glass-card bg-brand-cream/30 border border-white/50 p-8 rounded-4xl mt-12 shadow-xl">
            <h3 className="text-2xl font-black text-brand-brown mb-4">La quinta generación: Tamara Teresa Tercero Reyes</h3>
            <p className="text-brand-navy/95 font-semibold text-sm md:text-base leading-relaxed">
              Actualmente, Tamara Teresa Tercero Reyes lidera el taller, preservando métodos que datan de su bisabuela. Bajo su dirección, la empresa mantiene una producción diaria de 150 cazuelas de rosquillas, 210 hojaldras y otros productos, comercializados en Nicaragua y Centroamérica. Su participación en eventos como ExpoPyme (2019) y reconocimientos por calidad reflejan la adaptación a nuevos mercados sin sacrificar la autenticidad.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mx-[6%] md:mx-[8%] py-20 px-8 md:px-16 bg-brand-dark/95 text-white rounded-4xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* Soft decorative background blob inside the dark card */}
        <div className="absolute top-[-30%] right-[-30%] w-[60%] h-[60%] rounded-full bg-brand-orange/15 blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand-orange font-black uppercase tracking-widest text-xs mb-2">NUESTRA EMPRESA</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Misión, Visión y Valores</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-16">
            <div className="glass-card bg-white/5 border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black text-brand-orange mb-4 tracking-wide">VISIÓN</h3>
              <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                Ser reconocidos como líderes en la producción de rosquillas y postres típicos horneados nicaragüenses, manteniendo nuestra tradición familiar y cultural de más de 145 años. Queremos seguir siendo un símbolo de identidad y orgullo para la comunidad de El Viejo, Chinandega, y expandir nuestra presencia a nivel nacional e internacional, mientras preservamos el sabor y la calidad que nos han distinguido a lo largo de las generaciones.
              </p>
            </div>
            <div className="glass-card bg-white/5 border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-black text-brand-orange mb-4 tracking-wide">MISIÓN</h3>
              <p className="text-white/80 font-medium text-sm md:text-base leading-relaxed">
                Nuestra misión es preservar y compartir la tradición de elaborar rosquillas y otros postres típicos horneados nicaragüenses, manteniendo la calidad y el sabor que nos ha caracterizado durante más de 145 años. Nos esforzamos por ser líderes en la producción artesanal de rosquillas, promoviendo el legado familiar y la identidad cultural de nuestra comunidad.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 text-center">
            <h3 className="text-2xl font-black text-white mb-8">Nuestros valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {[
                'Calidad del producto',
                'Tradición y Herencia',
                'Innovación y Adaptación',
                'Sostenibilidad y Resp. Social',
                'Colaboración familiar',
                'Respeto por la cultura Local'
              ].map((val) => (
                <div key={val} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <CheckCircle2 className="text-brand-orange shrink-0 mt-0.5" size={18} />
                  <span className="font-bold text-sm md:text-base text-white">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="mt-16 mx-[6%] md:mx-[8%] py-12 px-6 glass-card rounded-3xl border-white/60 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-bold text-brand-brown leading-relaxed">
            Rosquillas Reyes es un negocio creado en 1875 donde podrás encontrar las tradiciones y mejores Rosquillas, Hojaldras, Rosquetes, Cosas de horno y la especialidad de la casa: Las Pupusas tostadas. Visítanos en El Viejo, Chinandega.
          </p>
        </div>
      </section>
    </main>
  );
}
