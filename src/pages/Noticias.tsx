// src/pages/Noticias.tsx
export default function Noticias() {
  const noticiasData = [
    {
      id: 1,
      titulo: 'Dato curioso',
      fecha: 'Septiembre 17, 2025',
      img: '/img/image 1.png',
      desc: '¿Sabías que? Las Rosquillas Reyes son todo un orgullo de El Viejo, Chinandega, famosas por elaborar los mejores rosquillas tradicionales de la región.',
    },
    {
      id: 2,
      titulo: 'Riquísimas y crujientes',
      fecha: 'Febrero 10, 2015',
      img: '/img/image 2.png',
      desc: 'El aroma delata su presencia… donde sea que esté la gente lo reconoce: ¡Son rosquillas Reyes!',
    },
    {
      id: 3,
      titulo: 'La lavada de plata',
      fecha: 'Diciembre 5, 2021',
      img: '/img/image 3.png',
      link: 'https://www.facebook.com/RosquillasReyes1/photos/lavada-de-la-plata-2021/4490095551073633/',
      desc: 'Como todos los años celebramos la lavada de la plata, invitamos a venir a comprar nuestras deliciosas rosquillas, hojaldras, rosquetes y la especialidad de la casa.',
    },
    {
      id: 4,
      titulo: '¿Quién causa tanta alegría...?',
      fecha: 'Diciembre 6, 2025',
      img: '/img/image 4.png',
      desc: 'Rosquillas Reyes dándole la bienvenida a todos los peregrinos que visitan la casa de nuestra madre, nuestra señora del trono.',
    },
  ];

  return (
    <main className="pt-28 pb-20" style={{ background: '#fdfcfc' }}>
      {/* Header editorial */}
      <section className="px-[6%] border-b border-el-chalk pb-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <span className="el-eyebrow mb-3 block">Blog y actualizaciones</span>
          <h1
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize: 'clamp(36px,5vw,52px)', letterSpacing: '-0.02em', lineHeight: 1.08 }}
          >
            Noticias
          </h1>
        </div>
      </section>

      {/* Grilla de cards */}
      <section className="px-[6%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {noticiasData.map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-2xl overflow-hidden card-hover flex flex-col border border-el-chalk"
            >
              {/* Imagen */}
              <a href={noticia.link || '#'} target="_blank" rel="noreferrer" className="block h-44 overflow-hidden" style={{ background:'#f5f3f1' }}>
                <img
                  src={noticia.img}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/D9C5A0/542B12?text=Noticia';
                  }}
                />
              </a>

              {/* Contenido */}
              <div className="p-5 flex flex-col flex-grow border-t border-el-chalk">
                <span className="el-eyebrow mb-2 block">{noticia.fecha}</span>
                <h3
                  className="font-cormorant font-light text-xl text-brand-brown mb-3 line-clamp-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {noticia.titulo}
                </h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#777169' }}>
                  {noticia.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
