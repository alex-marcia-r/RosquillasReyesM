// src/pages/Noticias.tsx
export default function Noticias() {
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
    <main className="pt-16 pb-16 bg-white min-h-screen">
      <section className="bg-brand-brown min-h-[200px] flex items-center justify-center px-[10%] mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-brand-orange tracking-wider">
          NOTICIAS
        </h1>
      </section>

      <section className="px-[10%]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {noticiasData.map(noticia => (
            <div key={noticia.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <a href={noticia.link || '#'} target="_blank" rel="noreferrer" className="block h-48 overflow-hidden">
                <img 
                  src={noticia.img} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/D9C5A0/542B12?text=Noticia';
                  }}
                />
              </a>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-brand-brown mb-2 line-clamp-2">{noticia.titulo}</h3>
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-4 block">
                  {noticia.fecha}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
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
