// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Flame } from 'lucide-react';

const carouselSlides = [
  {
    title: 'Descubre nuestra textura artesanal',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/64584510_2223870781029466_1271832372890828800_n.jpg?stp=c0.79.720.720a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Tp6Xz2C1IE0Q7kNvwHdRX8R&_nc_oc=AdrqvN7ETz_Lml-rwg1Ear3hrsnv4ALeShKNZSzQSDoyHnYTJydcoSRZ0rQk7B--poA&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=-yZrYiZ0O0djnPmSfhWFcQ&_nc_ss=7b2a8&oh=00_Af76-YNC6McVuEhQklm_xq8PQSWx6YkaqyYqNIJ3YLdmCQ&oe=6A31E20D'
  },
  {
    title: 'Sabor auténtico del viejo',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/68756168_2336473466435863_8980991978481123328_n.jpg?stp=c120.0.720.720a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=XTChDwziY0wQ7kNvwFLPoeX&_nc_oc=AdozcXabfAJqDO0IsDaG76oD00madzcZL4SaThQxYiDsD3P-OaV9TVnJ7GBzCWnN0Dc&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=Y8BTfDh4ueER2orpgKCz1Q&_nc_ss=7b2a8&oh=00_Af69XAhqfTwVGAXpcAlsQiBQkz7nun22lLrUvBgpUT_mEQ&oe=6A31E886',
  },
  {
    title: 'El toque ideal',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/596808286_1428444739289115_6381700090379785475_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ArP_Ab7oWoMQ7kNvwGQb0IC&_nc_oc=Adpx9PSsnkMyvEkaLemc9zqs6oP7E9X9j64lZiUzgSTRM1yzXoHGX1i18WSRvY26Pc0&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=JYikIbQ2adgeAbCClfuk7A&_nc_ss=7b2a8&oh=00_Af5lTes6vXaViTipztUuIPTm3sgxdUbK2nJfigkueElN3A&oe=6A103525',
  },
  {
    title: 'Perfecto para tu café',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/68917703_2338243589592184_6674657745267851264_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=5ThIXrRsRZoQ7kNvwFfEhr-&_nc_oc=AdoJ3_aLC7VkOm4tlpFLFN4rDwte0fjfD3UZAURhTWJYjGtKTYY6RWRV407ETaOwdfM&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=7MwqvJ4XPovjYldTUCYAZw&_nc_ss=7b2a8&oh=00_Af4RWFAs7N2G6gJDABWjLHje8tI5EYUm6zqvHAdVYlZdbA&oe=6A31D00F',
  },
];

const categorias = [
  { nombre: 'Rosquillas', img: '/img/Rosquillas.png' },
  { nombre: 'Hojaldras', img: '/img/Hojaldras.png' },
  { nombre: 'Rosquetes', img: '/img/Rosquetes.png' },
  { nombre: 'Cosas de Horno', img: '/img/Cosadehorno.png' },
  { nombre: 'Pupusas', img: '/img/Pupusas.png' },
];

const features = [
  { icon: <Leaf size={24} />, title: 'Ingredientes naturales', desc: 'Sin conservantes ni aditivos artificiales.' },
  { icon: <Flame size={24} />, title: 'Horneado tradicional', desc: 'En hornos de leña de la región de Chinandega.' },
  { icon: <Star size={24} />, title: 'Receta de generaciones', desc: 'La misma fórmula familiar desde hace décadas.' },
];

import { useState, useEffect } from 'react';

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  // Auto-avance del carrusel cada 4 s
  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % carouselSlides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-brand-brown min-h-[540px] flex items-center pt-20">
        <div className="mx-[5%] w-full bg-brand-cream rounded-4xl grid md:grid-cols-2 gap-8
                        items-center px-[5%] py-14 my-10 overflow-hidden">
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
              Conozca nuestros productos
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-brand-brown leading-tight mb-6">
              Sabor que hace <span className="text-brand-orange">historia.</span>
              <br /> Tradición que se <span className="text-brand-orange">comparte.</span>
            </h1>
            <Link to="/productos" id="btn-hero-ver-productos" className="btn-primary">
              Ver productos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/img/productos.jpg"
              alt="Productos Rosquilla Reyes"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://placehold.co/600x400/D9C5A0/542B12?text=Rosquilla+Reyes';
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Categorías ── */}
      <section className="py-16 px-[10%]">
        <h2 className="text-center text-2xl font-bold text-brand-navy mb-10">
          Tipos de Rosquillas y Antojos
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {categorias.map((cat) => (
            <Link
              key={cat.nombre}
              to="/productos"
              id={`cat-${cat.nombre.toLowerCase().replace(/\s/g, '-')}`}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center
                              transition-all duration-300 group-hover:shadow-brand-orange/30 group-hover:scale-110">
                <img
                  src={cat.img}
                  alt={cat.nombre}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                {cat.nombre}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Carrusel Rediseñado (Nuestra Galería) ── */}
      <section className="relative w-full min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden my-12 bg-black">
        {/* Fondo con imagen opaca y desenfocada */}
        {carouselSlides.map((slide, i) => (
          <div
            key={`bg-${i}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                        ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.bg})`,
              filter: 'blur(20px) brightness(0.25)'
            }}
          />
        ))}

        {/* Contenido principal: texto a la izq y cuadro pequeño a la der */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12 py-12">

          {/* Texto a la izquierda */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-blue mb-6 drop-shadow-2xl">
              <br /><span className="text-brand-orange">Galería</span>
            </h2>
            <div className="relative h-24 flex items-center justify-center md:justify-start">
              {carouselSlides.map((slide, i) => (
                <p
                  key={`text-${i}`}
                  className={`text-xl md:text-2xl text-gray-300 font-medium transition-opacity duration-700 absolute
                              ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`}
                >
                  {slide.title}
                </p>
              ))}
            </div>
          </div>

          {/* Carrusel 3D (Efecto Coverflow) */}
          <div className="md:w-1/2 flex justify-center perspective-[1200px] h-[400px] items-center relative">
            <div className="relative w-full max-w-[400px] h-full flex items-center justify-center transform-style-3d">
              {carouselSlides.map((slide, i) => {
                // Lógica para el efecto carrusel infinito (Coverflow)
                const total = carouselSlides.length;
                let diff = i - slideIdx;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isActive = diff === 0;
                const isPrev = diff === -1 || (diff < 0 && total === 2); // Ajuste para pocos slides
                const isNext = diff === 1;

                // Estilos base de posición y escala
                let transform = 'translateX(0) scale(0) rotateY(0deg) translateZ(-200px)';
                let zIndex = 0;
                let opacity = 0;

                if (isActive) {
                  transform = 'translateX(0) scale(1) rotateY(0deg) translateZ(0px)';
                  zIndex = 30;
                  opacity = 1;
                } else if (isPrev) {
                  transform = 'translateX(-55%) scale(0.8) rotateY(15deg) translateZ(-100px)';
                  zIndex = 20;
                  opacity = 0.6;
                } else if (isNext) {
                  transform = 'translateX(55%) scale(0.8) rotateY(-15deg) translateZ(-100px)';
                  zIndex = 20;
                  opacity = 0.6;
                }

                return (
                  <div
                    key={`slide-3d-${i}`}
                    className={`absolute w-[240px] sm:w-[280px] aspect-[4/5] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out cursor-pointer select-none`}
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      border: isActive ? '4px solid rgba(255, 255, 255, 0.9)' : '2px solid rgba(255, 255, 255, 0.3)',
                    }}
                    onClick={() => setSlideIdx(i)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.bg})` }}
                    />

                    {/* Sombra interna para texto solo en el activo */}
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center pb-6">
                        <p className="text-white text-sm font-bold tracking-widest uppercase text-center px-4">
                          {slide.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Dots para navegación manual */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                {carouselSlides.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    onClick={() => setSlideIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300
                                ${i === slideIdx ? 'bg-brand-orange w-6' : 'bg-white/40 w-1.5 hover:bg-white'}`}
                    aria-label={`Ir al slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 px-[10%] bg-white">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center p-6 rounded-3xl
                                          bg-gray-50 hover:bg-brand-orange/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-orange/10 text-brand-orange
                              flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-brand-brown mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
