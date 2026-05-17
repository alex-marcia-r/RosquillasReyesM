// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Leaf, Flame } from 'lucide-react';

const carouselSlides = [
  {
    title: 'Descubre nuestra textura artesanal',
    bg: 'https://scontent.fmga3-1.fna.fbcdn.net/v/t39.30808-6/472117265_8801190326630779_8194579087937857938_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dXwitz_aptQQ7kNvwGWksNt&_nc_oc=Ado5GNYMnvHjTgi4TKbuGbX79gArZtTMub9UcGGSj-en0V9mBg12Yl5wV56LJrsC75kUS2EtVe4qtwwdhAxjl_26&_nc_zt=23&_nc_ht=scontent.fmga3-1.fna&_nc_gid=Dpkxyi1pwdKDsoiIhB-kbw&oh=00_Af7jmqV32e897cPdFpdH_clyeE2NuXOEaoDu5Lih1lx4hg&oe=6A09292F',
  },
  {
    title: 'Sabor auténtico de El Viejo',
    bg: 'https://scontent.fmga11-2.fna.fbcdn.net/v/t1.6435-9/68756168_2336473466435863_8980991978481123328_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=qetwRHGSdboQ7kNvwEZ2-Fb&_nc_oc=Adp3o56KJGMSm4w0dLt-SatZb3_2Vm2HAJr-KtomIHCD1tyj9ZNyLJlZZPCp7FyBZAq6BzMVc1PKTEBKLCFGI-sy&_nc_zt=23&_nc_ht=scontent.fmga11-2.fna&oh=00_Af5DVuGM9uVX2LgxM1EnWFoSUUFfs4ia6D456BRqICoHzg&oe=6A2AA846',
  },
  {
    title: 'Perfecto para tu café',
    bg: 'https://scontent.fmga3-2.fna.fbcdn.net/v/t39.30808-6/302207359_485800006886931_2372649151414487948_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aRzCJtb_wlAQ7kNvwE4kHxQ&_nc_oc=AdrbhPTsm60u9hWrGtSdCftODb1oCezHo8wGjF78AeaMT_996KIfNgCFxTQTT2S4rIYRI9E0R4J3p_1FqI3PaIAA&_nc_zt=23&_nc_ht=scontent.fmga3-2.fna&oh=00_Af4kQ8exOJU6VbLEQ0Ti1KJYVcyBG5fq_V5FtAjMjmEGNw&oe=6A0930A3',
  },
];

const categorias = [
  { nombre: 'Rosquillas',     img: '/img/Rosquillas.png'  },
  { nombre: 'Hojaldras',      img: '/img/Hojaldras.png'   },
  { nombre: 'Rosquetes',      img: '/img/Rosquetes.png'   },
  { nombre: 'Cosas de Horno', img: '/img/Cosadehorno.png' },
  { nombre: 'Pupusas',        img: '/img/pupusas.png'     },
];

const features = [
  { icon: <Leaf   size={24} />, title: 'Ingredientes naturales',  desc: 'Sin conservantes ni aditivos artificiales.' },
  { icon: <Flame  size={24} />, title: 'Horneado tradicional',    desc: 'En hornos de leña de la región de Chinandega.' },
  { icon: <Star   size={24} />, title: 'Receta de generaciones',  desc: 'La misma fórmula familiar desde hace décadas.' },
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

      {/* ── Carrusel simple ── */}
      <section className="px-[5%] pb-8">
        <div className="relative h-72 md:h-[420px] rounded-4xl overflow-hidden shadow-xl">
          {carouselSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700
                          ${i === slideIdx ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <p className="text-white text-xl font-semibold">{slide.title}</p>
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                id={`dot-${i}`}
                onClick={() => setSlideIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                            ${i === slideIdx ? 'bg-brand-orange w-6' : 'bg-white/60'}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
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
