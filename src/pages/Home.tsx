// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Flame } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const carouselSlides = [
  {
    title: 'Descubre nuestra textura artesanal',
    bg: 'https://scontent.fmga3-1.fna.fbcdn.net/v/t1.6435-9/68769008_2327054004044476_8387505335866228736_n.jpg?stp=dst-jpg_tt6&cstp=mx720x960&ctp=s720x960&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=d7CR9dLJ7yoQ7kNvwGrhYNa&_nc_oc=AdoXOsRCG_BSie5gvICbqotzHtxTCLrtCYf2xtk3weeO49IOjFawOLpoxxZARCxgD1ePvSmCYP2sLXI-I9BVqEBc&_nc_zt=23&_nc_ht=scontent.fmga3-1.fna&_nc_gid=vkk7I6aa6xn9pW41snLeUQ&_nc_ss=7b289&oh=00_Af9Y3jV_KG3qVNt9hBX7hPpzl9KMqAC9NNlGYPFrYlNTvQ&oe=6A59A5F4'
  },
  {
    title: 'Sabor auténtico del viejo',
    bg: 'https://scontent.fmga3-2.fna.fbcdn.net/v/t39.30808-6/302207359_485800006886931_2372649151414487948_n.jpg?stp=dst-jpg_tt6&cstp=mx752x750&ctp=s752x750&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-OQmz2-82TsQ7kNvwGW1uk-&_nc_oc=AdpM9S-blVJW0o8n_Bx1ddOgz_pLANtjRXlKHENnwI7rbHKC3kyLCP-sPOEHVMYptvZD3oBqwd4fTGgo01onkHxM&_nc_zt=23&_nc_ht=scontent.fmga3-2.fna&_nc_gid=ozTnCiJyEY25IbbPOWW3oA&_nc_ss=7b289&oh=00_Af83OuP0yvLS67svVGudxr52NC02nhyEkXASLYIFFG8_6Q&oe=6A37FDE3',
  },
  {
    title: 'El toque ideal',
    bg: 'https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/129820471_3452004274882771_7090790656303660067_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=C5q7obAIc8kQ7kNvwFrlq1l&_nc_oc=AdoqBCMNv5Tt--4g3i2-LgE-sfRt6y0dm573qojqGZpqqth9hozu1YIiHHhJw4Dg-ik&_nc_zt=23&_nc_ht=scontent.fmga3-2.fna&_nc_gid=Xjv44jSkTIyaVo3npZ9lKQ&_nc_ss=7b289&oh=00_Af9vDZRNUaNLTI1HyvCDHjpHgq3SZP68ZpOctArMLleANQ&oe=6A454245',
  },
  {
    title: 'Perfecto para tu café',
    bg: 'https://scontent.fmga3-2.fna.fbcdn.net/v/t1.6435-9/69153452_2336473603102516_1639316307381846016_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ItYCv9t29ZEQ7kNvwHtlPj3&_nc_oc=Adpa6GclEsvKXHy6PsZ9j0UNOezzz3GdtOnW2dwpYV3IWujIXSsdaduzAs0eQasD4V8dNppDbq6Dfki30YGlQdoU&_nc_zt=23&_nc_ht=scontent.fmga3-2.fna&_nc_gid=Kaehr0TVxPfimhBOcWYCSQ&_nc_ss=7b289&oh=00_Af8XUXExRu-bq6U0AXTlsm-ClDnPOxkY5afxuGWOXICadQ&oe=6A599074',
  },
];

const heroBackgrounds = [
  'https://scontent.fmga11-1.fna.fbcdn.net/v/t1.6435-9/121008214_3297936620289538_2633595177504074197_n.jpg?stp=dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B7ZPvkKHZ_8Q7kNvwE1NM2J&_nc_oc=AdoM_xjI7mbpAKJSwqc3S1MkbXRTt2uQUTOH93PvUr00AKyCFPaUhtlRScYUkYVTF6kKi2epLUQUQRa70H1yUkkZ&_nc_zt=23&_nc_ht=scontent.fmga11-1.fna&_nc_gid=xKtTFwpH6mQ4kPZeI_T6jA&_nc_ss=7b289&oh=00_Af_58cIw82-lE_6sdGWD8C_OXw69hNcN-5XkfxmMzMWdMQ&oe=6A597495',
  'https://scontent.fmga11-2.fna.fbcdn.net/v/t1.6435-9/68756168_2336473466435863_8980991978481123328_n.jpg?stp=dst-jpg_tt6&cstp=mx960x720&ctp=s960x720&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ntMvzG-OR0wQ7kNvwES0JxJ&_nc_oc=AdpRb9TYiD6xgdwPsW3zlxCdHVxT0FpkCwDQw-I92a9yhOaSPtbk5i1GVcsEZr8YCnn-q6AiwgNBtlFc5iAv-lhH&_nc_zt=23&_nc_ht=scontent.fmga11-2.fna&_nc_gid=HMuEl4vkUbHL834n75J_Eg&_nc_ss=7b289&oh=00_Af-ooUBYxPsbdDKbaJHnDsqp7_ydfkkUQQMF-qosnaSc2w&oe=6A597586',
  'https://scontent.fmga11-2.fna.fbcdn.net/v/t39.30808-6/595751830_1428445512622371_5987428805025589576_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1153&ctp=s2048x1153&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4YD3D0ZcxsUQ7kNvwH1NU9K&_nc_oc=AdpLRS6g-8UXaEQzAIZGA1erKij56XQRFUV6WTYfY4EZPTI_bhRB3_VH8gPqQ6f7tWYK8E0JGgmU8pC7NMVYk6y1&_nc_zt=23&_nc_ht=scontent.fmga11-2.fna&_nc_gid=1U_TSG_Hiqa0gMurXWfEuQ&_nc_ss=7b289&oh=00_Af9IKkyYWtZ8NST8QoU43r4mZl67IIVaIahzSx-v_qy-JQ&oe=6A37D424'
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
  const revealRef = useScrollReveal();
  const [bgSlideIdx, setBgSlideIdx] = useState(0);
  const [gallerySlideIdx, setGallerySlideIdx] = useState(0);

  useEffect(() => {
    const totalBgImages = heroBackgrounds.length;
    const id = setInterval(() => setBgSlideIdx((i) => (i + 1) % totalBgImages), 5000);
    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    const id = setInterval(() => setGallerySlideIdx((i) => (i + 1) % carouselSlides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main ref={revealRef} className="relative z-10">
      {/* Glassmorphism ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Glow muy fuerte en la izquierda */}
        <div className="absolute top-1/3 left-[-15%] w-[650px] h-[650px] rounded-full bg-brand-orange/35 blur-[120px]" />
        <div className="absolute top-[60%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-orange/30 blur-[110px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-brand-orange/20 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-brown/25 blur-[120px]" />
      </div>
{/* ── Hero ── */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Full-Bleed Background Container con imágenes en transición */}
  <div className="absolute inset-0 z-0">
    {/* Imágenes de fondo en carrusel */}
    {heroBackgrounds.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
          index === bgSlideIdx ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img 
          src={img}
          alt={`Productos Rosquilla Reyes ${index + 1}`}
          className={`w-full h-full object-cover blur-[3px] brightness-[0.9] transition-transform duration-[5000ms] ease-out ${
            index === bgSlideIdx ? 'scale-110' : 'scale-100'
          }`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 
              'https://placehold.co/1920x1080/D9C5A0/542B12?text=Rosquilla+Reyes';
          }}
        />
      </div>
    ))}
    
    {/* Dark/Glassy Overlay - Muy ligero para mayor luminosidad */}
    <div className="absolute inset-0 bg-black/20 z-10 backdrop-blur-[1px]"></div>
    
    {/* Gradiente overlay - Muy suave */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35 z-20"></div>

    {/* Ambient glassmorphism glows on top of background image (highly prominent on the left) */}
    <div className="pointer-events-none absolute inset-0 z-25 overflow-hidden">
      <div className="absolute top-[10%] left-[-20%] w-[650px] h-[650px] rounded-full bg-brand-orange/55 blur-[90px]" />
      <div className="absolute bottom-1/4 right-[-15%] w-[550px] h-[550px] rounded-full bg-brand-brown/30 blur-[100px]" />
    </div>
  </div>

  {/* Centered Content */}
  <div className="relative z-30 max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
    <div className="space-y-10">

      {/* Título - BLANCO PURO para máximo contraste */}
      <h1 className="font-black text-5xl md:text-[64px] text-white max-w-4xl mx-auto leading-tight drop-shadow-2xl">
        Sabor que hace <span className="text-brand-orange drop-shadow-[0_0_20px_rgba(217,145,68,0.3)]">historia.</span>
        <br /> Tradición que se <span className="text-brand-orange drop-shadow-[0_0_20px_rgba(217,145,68,0.3)]">comparte.</span>
      </h1>

      {/* Descripción - BLANCO MÁS BRILLANTE */}
      <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-medium drop-shadow-lg">
        Descubre el equilibrio perfecto entre la masa fermentada lentamente y nuestros glaseados orgánicos inspirados en la naturaleza.
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
        <Link 
          to="/productos" 
          className="w-full sm:w-auto bg-brand-orange text-white text-sm uppercase tracking-widest px-12 py-5 rounded-full shadow-2xl shadow-brand-orange/50 hover:bg-brand-orange/80 hover:scale-105 transition-all text-center font-bold"
        >
          Ver productos <ArrowRight size={18} className="inline ml-2" />
        </Link>
        <Link 
          to="/nosotros" 
          className="w-full sm:w-auto text-sm uppercase tracking-widest px-12 py-5 rounded-full border-2 border-white bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-white font-bold text-center"
        >
          Nuestra Historia
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/80 animate-bounce">
    <span className="material-symbols-outlined text-4xl">↓</span>
  </div>
</section>
      {/* ── Carrusel Rediseñado (Nuestra Galería) ── */}
      <section className="relative w-full min-h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden bg-brand-dark/95 py-12">
        {/* Fondo con imagen opaca y desenfocada */}
        {carouselSlides.map((slide, i) => (
          <div
            key={`bg-${i}`}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                        ${i === gallerySlideIdx ? 'opacity-35' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${slide.bg})`,
              filter: 'blur(24px)'
            }}
          />
        ))}

        {/* Contenido principal: texto a la izq y cuadro pequeño a la der */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Texto a la izquierda */}
          <div className="md:w-1/2 text-center md:text-left reveal">
            <h2 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl text-white">
              Nuestra <span className="text-brand-orange">Galería</span>
            </h2>
            <div className="relative h-28 flex items-center justify-center md:justify-start">
              {carouselSlides.map((slide, i) => (
                <p
                  key={`text-${i}`}
                  className={`text-xl md:text-2xl text-brand-cream font-bold transition-all duration-700 absolute tracking-wide leading-relaxed
                              ${i === gallerySlideIdx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                  {slide.title}
                </p>
              ))}
            </div>
          </div>

          {/* Carrusel 3D (Efecto Coverflow) */}
          <div className="md:w-1/2 flex justify-center perspective-[1200px] h-[400px] items-center relative reveal reveal-delay-2">
            <div className="relative w-full max-w-[400px] h-full flex items-center justify-center transform-style-3d">
              {carouselSlides.map((slide, i) => {
                // Lógica para el efecto carrusel infinito (Coverflow)
                const total = carouselSlides.length;
                let diff = i - gallerySlideIdx;
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
                  opacity = 0.65;
                } else if (isNext) {
                  transform = 'translateX(55%) scale(0.8) rotateY(-15deg) translateZ(-100px)';
                  zIndex = 20;
                  opacity = 0.65;
                }

                return (
                  <div
                    key={`slide-3d-${i}`}
                    className="absolute w-[240px] sm:w-[280px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out cursor-pointer select-none"
                    style={{
                      transform,
                      zIndex,
                      opacity,
                      border: isActive ? '4px solid #ff9f0d' : '2px solid rgba(255, 255, 255, 0.2)',
                    }}
                    onClick={() => setGallerySlideIdx(i)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.bg})` }}
                    />

                    {/* Sombra interna para texto solo en el activo */}
                    {isActive && (
                      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center pb-6">
                        <p className="text-white text-sm font-black tracking-widest uppercase text-center px-4">
                          {slide.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Dots para navegación manual */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-50">
                {carouselSlides.map((_, i) => (
                  <button
                    key={`dot-${i}`}
                    onClick={() => setGallerySlideIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300
                                ${i === gallerySlideIdx ? 'bg-brand-orange w-6' : 'bg-white/40 w-2 hover:bg-white'}`}
                    aria-label={`Ir al slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Categorías ── */}
      <section className="py-24 px-[8%] relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-black text-brand-brown mb-3">
            Tipos de Rosquillas y Antojos
          </h2>
          <p className="text-brand-navy/60 font-semibold text-sm max-w-md mx-auto">
            Explora nuestra variedad artesanal horneada con recetas tradicionales y sabor inigualable.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 reveal reveal-delay-1">
          {categorias.map((cat) => (
            <Link
              key={cat.nombre}
              to="/productos"
              id={`cat-${cat.nombre.toLowerCase().replace(/\s/g, '-')}`}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-24 h-24 rounded-full glass-card border-white/60 flex items-center justify-center
                              transition-all duration-300 group-hover:border-brand-orange/60 group-hover:scale-110 shadow-lg shadow-brand-brown/5">
                <img
                  src={cat.img}
                  alt={cat.nombre}
                  className="w-14 h-14 object-contain transition-transform duration-300 group-hover:rotate-12"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs md:text-sm font-black text-brand-brown/85 group-hover:text-brand-orange transition-colors">
                {cat.nombre}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-[8%] relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={f.title} className={`flex flex-col items-center text-center p-8 rounded-3xl glass-card border-white/60 hover:bg-white/80 card-hover reveal reveal-delay-${idx + 1}`}>
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange
                              flex items-center justify-center mb-6 shadow-inner">
                {f.icon}
              </div>
              <h3 className="font-black text-brand-brown text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-brand-navy/70 font-semibold leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
