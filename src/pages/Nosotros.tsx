// src/pages/Nosotros.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Nosotros() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Nosotros */}
      <section className="bg-brand-brown min-h-[400px] flex items-center px-[10%]">
        <div className="w-full bg-brand-cream rounded-4xl grid md:grid-cols-2 gap-8 items-center px-[5%] py-14 overflow-hidden">
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
              SOBRE NOSOTROS
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-brand-brown leading-tight mb-6">
              Desde 1875 <br />
              <span className="text-brand-orange">Vta Generación</span>
            </h1>
            <p className="text-brand-navy mb-8 font-medium">
              Rosquillas Reyes: Un legado de tradición y resistencia en El Viejo, Chinandega
            </p>
            <Link to="/productos" className="btn-primary inline-flex items-center gap-2">
              Ver productos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl hidden md:block">
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

      {/* Historia */}
      <section className="py-16 px-[10%] bg-white">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">CONOCE MÁS</p>
          <h2 className="text-3xl font-black text-brand-brown">Historia de Rosquilla Reyes</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 text-gray-600 leading-relaxed">
          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-3">La Identidad Gastronómica</h3>
            <p>
              La historia de Rosquillas Reyes se entrelaza con la identidad gastronómica de Nicaragua, siendo un emblema de la continuidad cultural y esfuerzo familiar. Fundada en 1875 por Maria Claudina Reyes, esta empresa ha transcendido generaciones, consolidándose como una de las tres rosquillas emblemáticas del país, junto a las de Somoto y Rivas.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-3">Orígenes y evolución</h3>
            <p>
              El negocio nació como un emprendimiento modesto, donde María Claudina Reyes y sus hermanas vendían rosquillas en las calles de El Viejo, especialmente en fechas festivas. La técnica de elaboración transmitida oralmente, se basaba en un horneado tradicional que garantiza una textura crujiente y porosa, rasgo distintivo que perdura hasta hoy. Con el paso del tiempo, la familia expandió su producción, incorporando productos como hojaldras, rosquetes y bocadillos, sin perder la esencia artesanal.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-orange shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-3">Impacto cultural y económico</h3>
            <p>
              Rosquillas Reyes forma parte de la "trinidad de rosquillas" nicaragüense. Su éxito radica en la consistencia de su proceso, que incluye el uso de utensilios y técnicas heredadas, como el horneado en hornos de barro o leña. Además, el negocio se convierte en un motor económico local, especialmente en temporadas como Semana Santa y Diciembre.
            </p>
          </div>

          <div className="bg-brand-cream p-8 rounded-3xl mt-10">
            <h3 className="text-2xl font-bold text-brand-brown mb-4">La quinta generación: Tamara Teresa Tercero Reyes</h3>
            <p className="text-brand-navy">
              Actualmente, Tamara Teresa Tercero Reyes lidera el taller, preservando métodos que datan de su bisabuela. Bajo su dirección, la empresa mantiene una producción diaria de 150 cazuelas de rosquillas, 210 hojaldras y otros productos, comercializados en Nicaragua y Centroamérica. Su participación en eventos como ExpoPyme (2019) y reconocimientos por calidad reflejan la adaptación a nuevos mercados sin sacrificar la autenticidad.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 px-[10%] bg-brand-brown text-white">
        <div className="text-center mb-12">
          <p className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2">NUESTRA EMPRESA</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-black text-brand-orange mb-4">VISIÓN</h3>
            <p className="leading-relaxed">
              Ser reconocidos como líderes en la producción de rosquillas y postres típicos horneados nicaraguenses, manteniendo nuestra tradición familiar y cultural de mas de 140 años. Queremos seguir siendo un símbolo de identidad y orgullo para la comunidad de El Viejo, Chinandega, y expandir nuestra presencia a nivel nacional e internacional, mientras preservamos el sabor y la calidad que nos han distinguido a lo largo de las generaciones.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-black text-brand-orange mb-4">MISIÓN</h3>
            <p className="leading-relaxed">
              Nuestra misión es preservar y compartir la tradición de elaborar rosquillas y otros postres típicos horneados nicaraguenses, manteniendo la calidad y el sabor que nos ha caracterizado durante mas de 140 años. Nos esforzamos por ser líderes en la producción artesanal de rosquillas, promoviendo el legado familiar y la identidad cultural de nuestra comunidad.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Nuestros valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              'Calidad del producto',
              'Tradición y Herencia',
              'Innovación y Adaptación',
              'Sostenibilidad y Resp. Social',
              'Colaboración familiar',
              'Respeto por la cultura Local'
            ].map((val) => (
              <div key={val} className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-orange shrink-0 mt-1" size={18} />
                <span className="font-medium text-sm md:text-base">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="py-16 px-[10%] bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium text-brand-brown leading-relaxed">
            Rosquillas reyes es un negocio creado en 1875 donde podrás encontrar las tradiciones y mejores Rosquillas, Hojaldras, Rosquetes, Cosas de horno y la especialidad de la casa: Las Pupusas tostadas, ubicados en "El Viejo", Chinandega.
          </p>
        </div>
      </section>
    </main>
  );
}
