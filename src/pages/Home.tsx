// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Flame, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

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
    title: 'El toque ideal para tu mesa',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t39.30808-6/596808286_1428444739289115_6381700090379785475_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ArP_Ab7oWoMQ7kNvwGQb0IC&_nc_oc=Adpx9PSsnkMyvEkaLemc9zqs6oP7E9X9j64lZiUzgSTRM1yzXoHGX1i18WSRvY26Pc0&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=JYikIbQ2adgeAbCClfuk7A&_nc_ss=7b2a8&oh=00_Af5lTes6vXaViTipztUuIPTm3sgxdUbK2nJfigkueElN3A&oe=6A103525',
  },
  {
    title: 'Perfecto para tu café',
    bg: 'https://scontent.fmga4-1.fna.fbcdn.net/v/t1.6435-9/68917703_2338243589592184_6674657745267851264_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=5ThIXrRsRZoQ7kNvwFfEhr-&_nc_oc=AdoJ3_aLC7VkOm4tlpFLFN4rDwte0fjfD3UZAURhTWJYjGtKTYY6RWRV407ETaOwdfM&_nc_zt=23&_nc_ht=scontent.fmga4-1.fna&_nc_gid=7MwqvJ4XPovjYldTUCYAZw&_nc_ss=7b2a8&oh=00_Af4RWFAs7N2G6gJDABWjLHje8tI5EYUm6zqvHAdVYlZdbA&oe=6A31D00F',
  },
];

const categorias = [
  { nombre: 'Rosquillas',     img: '/img/Rosquillas.png' },
  { nombre: 'Hojaldras',      img: '/img/Hojaldras.png' },
  { nombre: 'Rosquetes',      img: '/img/Rosquetes.png' },
  { nombre: 'Cosas de Horno', img: '/img/Cosadehorno.png' },
  { nombre: 'Pupusas',        img: '/img/Pupusas.png' },
];

const features = [
  { icon: <Leaf size={20} />, title: 'Ingredientes naturales', desc: 'Sin conservantes ni aditivos artificiales.' },
  { icon: <Flame size={20} />, title: 'Horneado tradicional', desc: 'En hornos de leña de la región de Chinandega.' },
  { icon: <Star size={20} />, title: 'Receta de generaciones', desc: 'La misma fórmula familiar desde hace décadas.' },
];

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlideIdx((i) => (i + 1) % carouselSlides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      {/* ── HERO ──────────────────────────────────────────────
          ElevenLabs: dos columnas, headline Cormorant 300,
          eyebrow label, pill button naranja de marca        */}
      <section className="bg-el-eggshell pt-28 pb-20 px-[6%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <span className="el-eyebrow mb-4 block">
              Rosquilla Reyes — El Viejo, Nicaragua
            </span>

            <h1
              className="font-cormorant font-light leading-none text-brand-brown mb-6"
              style={{
                fontSize: 'clamp(44px, 7vw, 72px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              Sabor que hace{' '}
              <span className="text-brand-orange italic">historia.</span>
              <br />
              Tradición que se{' '}
              <span className="text-brand-orange italic">comparte.</span>
            </h1>

            <p className="text-sm mb-8 max-w-sm" style={{ color: '#777169', lineHeight: 1.7 }}>
              Desde 1875 elaboramos rosquillas, hojaldras y rosquetes artesanales
              en El Viejo, Chinandega. Quinta generación de tradición familiar.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/productos" id="btn-hero-ver-productos" className="btn-primary">
                Ver productos <ArrowRight size={16} />
              </Link>
              <Link to="/nosotros" className="btn-secondary">
                Nuestra historia
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="rounded-2xl overflow-hidden shadow-hairline">
            <img
              src="/img/productos.jpg"
              alt="Productos Rosquilla Reyes"
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://placehold.co/600x450/D9C5A0/542B12?text=Rosquilla+Reyes';
              }}
            />
          </div>
        </div>
      </section>

      {/* ── DIVIDER ─────────────────────────────────────────── */}
      <hr className="el-divider mx-[6%]" />

      {/* ── CATEGORÍAS ──────────────────────────────────────── */}
      <section className="py-20 px-[6%]">
        <div className="max-w-6xl mx-auto">
          <div className="section-header text-center">
            <span className="el-eyebrow mb-3 block">Catálogo</span>
            <h2
              className="font-cormorant font-light text-brand-brown"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em' }}
            >
              Tipos de Rosquillas y Antojos
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-10 mt-10">
            {categorias.map((cat) => (
              <Link
                key={cat.nombre}
                to="/productos"
                id={`cat-${cat.nombre.toLowerCase().replace(/\s/g, '-')}`}
                className="flex flex-col items-center gap-3 group"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center
                              border border-el-chalk transition-all duration-300
                              group-hover:border-brand-orange group-hover:shadow-hairline"
                  style={{ background: '#f5f3f1' }}
                >
                  <img
                    src={cat.img}
                    alt={cat.nombre}
                    className="w-12 h-12 object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <span
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#777169' }}
                >
                  {cat.nombre}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA (CARRUSEL) — fondo oscuro preservado ────── */}
      <section className="relative w-full min-h-[480px] md:h-[580px] flex items-center justify-center overflow-hidden bg-black">
        {/* BGs borrosas */}
        {carouselSlides.map((slide, i) => (
          <div
            key={`bg-${i}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                        ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.bg})`, filter: 'blur(20px) brightness(0.22)' }}
          />
        ))}

        <div className="relative z-10 w-full max-w-6xl mx-auto px-[6%] flex flex-col md:flex-row items-center justify-between gap-12 py-12">
          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="el-eyebrow mb-4 block" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Nuestra galería
            </span>
            <h2
              className="font-cormorant font-light text-white mb-6"
              style={{ fontSize: 'clamp(40px,6vw,64px)', letterSpacing:'-0.02em', lineHeight:1.05 }}
            >
              <span className="text-brand-orange italic">Galería</span>
            </h2>
            <div className="relative h-16 flex items-center justify-center md:justify-start">
              {carouselSlides.map((slide, i) => (
                <p
                  key={`text-${i}`}
                  className={`text-lg text-gray-300 font-light transition-opacity duration-700 absolute
                              ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`}
                >
                  {slide.title}
                </p>
              ))}
            </div>
          </div>

          {/* Coverflow 3D */}
          <div className="md:w-1/2 flex justify-center perspective-[1200px] h-[380px] items-center relative">
            <div className="relative w-full max-w-[380px] h-full flex items-center justify-center transform-style-3d">
              {carouselSlides.map((slide, i) => {
                const total = carouselSlides.length;
                let diff = i - slideIdx;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;
                const isActive = diff === 0;
                const isPrev   = diff === -1 || (diff < 0 && total === 2);
                const isNext   = diff === 1;
                let transform = 'translateX(0) scale(0) rotateY(0deg) translateZ(-200px)';
                let zIndex = 0; let opacity = 0;
                if (isActive) { transform = 'translateX(0) scale(1) rotateY(0deg) translateZ(0px)'; zIndex = 30; opacity = 1; }
                else if (isPrev) { transform = 'translateX(-55%) scale(0.8) rotateY(15deg) translateZ(-100px)'; zIndex = 20; opacity = 0.6; }
                else if (isNext) { transform = 'translateX(55%) scale(0.8) rotateY(-15deg) translateZ(-100px)'; zIndex = 20; opacity = 0.6; }
                return (
                  <div
                    key={`slide-3d-${i}`}
                    className="absolute w-[230px] sm:w-[260px] aspect-[4/5] rounded-xl overflow-hidden
                               shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out cursor-pointer select-none"
                    style={{
                      transform, zIndex, opacity,
                      border: isActive ? '3px solid rgba(255,255,255,0.85)' : '2px solid rgba(255,255,255,0.25)',
                    }}
                    onClick={() => setSlideIdx(i)}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center pb-5">
                        <p className="text-white text-xs font-medium tracking-widest uppercase text-center px-4">
                          {slide.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Dots */}
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

      {/* ── FEATURES ────────────────────────────────────────── */}
      <section className="py-20 px-[6%]" style={{ background: '#fdfcfc' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-header text-center mb-12">
            <span className="el-eyebrow mb-3 block">Por qué elegirnos</span>
            <h2
              className="font-cormorant font-light text-brand-brown"
              style={{ fontSize: 'clamp(28px,4vw,40px)', letterSpacing:'-0.02em' }}
            >
              Artesanía en cada mordida
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-2xl border border-el-chalk hover:border-brand-orange
                           transition-colors duration-200 group"
                style={{ background: '#fdfcfc' }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-5 text-brand-orange"
                  style={{ background: 'rgba(255,159,13,0.08)' }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-cormorant font-light text-xl text-brand-brown mb-2"
                  style={{ letterSpacing:'-0.01em' }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color:'#777169' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
