// src/pages/Noticias.tsx
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Noticias() {
  const revealRef = useScrollReveal();

  const noticiasData = [
    {
      id: 1,
      titulo: 'Dato curioso',
      fecha: 'Septiembre 17, 2025',
      img: '/img/image 1.png',
      desc: '¿Sabiás que? Las Rosquillas Reyes son todo un orgullo de El Viejo, Chinandega, famosas por elaborar los mejores rosquillas tradicionales de la región.'
    },
    {
      id: 2,
      titulo: 'Riquísimas y crujientes',
      fecha: 'Febrero 10, 2015',
      img: '/img/image 2.png',
      desc: 'El aroma delata su presencia… donde sea que esté la gente lo reconoce: ¡Son rosquillas Reyes!'
    },
    {
      id: 3,
      titulo: 'La lavada de plata',
      fecha: 'Diciembre 5, 2021',
      img: '/img/image 3.png',
      link: 'https://www.facebook.com/RosquillasReyes1/photos/lavada-de-la-plata-2021/4490095551073633/',
      desc: 'Como todos los años celebramos la lavada de la plata, invitamos a venir a comprar nuestras deliciosas rosquillas, hojaldras, rosquetes cosa de hornos y la especialidad de la casa las exquisitas pupusas tostadas'
    },
    {
      id: 4,
      titulo: '¿Quién causa tanta alegria ...?',
      fecha: 'Diciembre 6, 2025',
      img: '/img/image 4.png',
      desc: 'Rosquillas Reyes dándole la bienvenida a todos los peregrino que visitan la casa de nuestra madre, nuestra señora del trono'
    }
  ];

  return (
    <main ref={revealRef} className="pt-32 pb-20 px-[6%] md:px-[8%] relative z-10">
      <section className="min-h-[50px] flex items-center justify-center rounded-3xl mb-8 relative overflow-hidden reveal">
        <p className="text-brand-brown/70 font-bold text-sm md:text-base">
          Historias, eventos y momentos especiales
        </p>
      </section>

      <section className="px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal reveal-delay-1">
          {noticiasData.map(noticia => (
            <div key={noticia.id} className="glass-card rounded-3xl overflow-hidden border-white/60 flex flex-col card-hover">
              <a href={noticia.link || '#'} target="_blank" rel="noreferrer" className="block h-48 overflow-hidden border-b border-white/30">
                <img 
                  src={noticia.img} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/D9C5A0/542B12?text=Noticia';
                  }}
                />
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-brand-brown mb-2 line-clamp-2 leading-snug">{noticia.titulo}</h3>
                <span className="text-xs font-black text-brand-orange uppercase tracking-wider mb-4 block">
                  {noticia.fecha}
                </span>
                <p className="text-brand-navy/80 font-semibold text-sm leading-relaxed flex-grow">
                  {noticia.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
