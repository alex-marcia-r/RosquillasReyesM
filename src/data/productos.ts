// src/data/productos.ts
// Fuente única de verdad de los productos (equivalente a productos-data.js)
// Tipado con TypeScript para prevenir errores en runtime

export type Categoria = 'regular' | 'eventos';

export interface Producto {
  id: string;
  img: string;
  titulo: string;
  precio: number;
  unidad: string;
  desc: string;
  categoria: Categoria;
}

export const productos: Producto[] = [
  {
    id: 'rosquillas',
    img: '/img/Productos/Rosquillas.png',
    titulo: 'Rosquillas Tradicionales',
    precio: 120,
    unidad: 'Bolsa',
    categoria: 'regular',
    desc: 'Nuestras rosquillas son elaboradas con la auténtica receta de El Viejo, Chinandega. Hechas a base de maíz tostado, queso seco y mantequilla, horneadas a la perfección en hornos de leña tradicionales.',
  },
  {
    id: 'hojaldras',
    img: '/img/Productos/Hojaldras.png',
    titulo: 'Hojaldras Crujientes',
    precio: 150,
    unidad: 'Bolsa',
    categoria: 'regular',
    desc: 'Deliciosas hojaldras horneadas con un toque dulce y una textura suave por dentro pero crujiente por fuera. El balance perfecto de ingredientes tradicionales para endulzar tu tarde.',
  },
  {
    id: 'rosquetes',
    img: '/img/Productos/Rosquetes.png',
    titulo: 'Rosquetes Bañados',
    precio: 110,
    unidad: 'Bolsa',
    categoria: 'regular',
    desc: 'Tradicionales rosquetes bañados en dulce, con esa cubierta blanca azucarada que se deshace en la boca. Un verdadero clásico de la gastronomía chinandegana.',
  },
  {
    id: 'cosasdehorno',
    img: '/img/Productos/Cosadehorno.png',
    titulo: 'Cosas de Horno Variadas',
    precio: 140,
    unidad: 'Bandeja',
    categoria: 'regular',
    desc: 'Una selección de nuestras mejores cosas de horno: perrereque, empanadas de queso, y más. Todo recién horneado con la tradición que nos caracteriza.',
  },
  {
    id: 'pupusas',
    img: '/img/Productos/Pupusas.png',
    titulo: 'Pupusas Tostadas',
    precio: 120,
    unidad: 'Unidad',
    categoria: 'eventos',
    desc: 'Nuestra especialidad para eventos: pupusas de quesillo tostadas al horno. Ideales para compartir, servidas con su tradicional curtido.',
  },
];

export const getProductoById = (id: string): Producto | undefined =>
  productos.find((p) => p.id === id);
