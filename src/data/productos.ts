// src/data/productos.ts
// Fuente única de verdad de los productos (equivalente a productos-data.js)

export type Categoria = 'regular' | 'eventos';

export interface Producto {
  id: string;
  img: string;
  titulo: string;
  precio: number; // Precio base
  unidad: string;
  desc: string;
  categoria: Categoria;
}

export const productos: Producto[] = [
  {
    id: 'rosquillas',
    img: '/img/Productos/Rosquillas.png',
    titulo: 'Rosquillas Tradicionales',
    precio: 2,
    unidad: 'Unidad',
    categoria: 'regular',
    desc: 'Nuestras rosquillas son elaboradas con la auténtica receta de El Viejo, Chinandega. Hechas a base de maíz tostado, queso seco y mantequilla, horneadas a la perfección en hornos de leña tradicionales. Se venden por unidad y en paquetes de 50, 100, 200, 300, 400 o 500.',
  },
  {
    id: 'hojaldras',
    img: '/img/Productos/Hojaldras.png',
    titulo: 'Hojaldras Crujientes',
    precio: 20,
    unidad: '3 unidades',
    categoria: 'regular',
    desc: 'Deliciosas hojaldras horneadas con un toque dulce y una textura suave por dentro pero crujiente por fuera. El balance perfecto de ingredientes tradicionales para endulzar tu tarde. Se venden en paquetes de 3 unidades por C$ 20.',
  },
  {
    id: 'rosquetes',
    img: '/img/Productos/Rosquetes.png',
    titulo: 'Rosquete',
    precio: 2,
    unidad: 'Unidad',
    categoria: 'regular',
    desc: 'Tradicionales rosquetes bañados en dulce, con esa cubierta blanca azucarada que se deshace en la boca. Un verdadero clásico de la gastronomía chinandegana.',
  },
  {
    id: 'cosasdehorno',
    img: '/img/Productos/Cosadehorno.png',
    titulo: 'Cosas de Horno Variadas',
    precio: 15,
    unidad: 'Unidad',
    categoria: 'regular',
    desc: 'Una selección de nuestras mejores cosas de horno: perrereque, empanadas de queso, y más. Todo recién horneado con la tradición que nos caracteriza. Se venden por unidad y en bandejas de 5, 10 y 20.',
  },
  {
    id: 'pupusas',
    img: '/img/Productos/Pupusas.png',
    titulo: 'Pupusas Tostadas',
    precio: 15,
    unidad: 'Unidad',
    categoria: 'eventos',
    desc: 'Nuestra especialidad para eventos: pupusas de quesillo tostadas al horno. Ideales para compartir, servidas con su tradicional curtido. Se venden por unidad (C$ 15).',
  },
];

export const getProductoById = (id: string): Producto | undefined =>
  productos.find((p) => p.id === id);

export const getPrecioPresentacion = (
  productoId: string,
  tipo: 'unidad' | 'paquete',
  paqueteSize?: number
): number => {
  if (productoId === 'pupusas') return 15;
  if (productoId === 'hojaldras') return 20; // 3 por 20, no tiene paquetes variables

  const base = productoId === 'rosquillas' ? 2 : (productoId === 'rosquetes' ? 2 : 15);
  if (tipo === 'paquete' && paqueteSize) {
    return base * paqueteSize;
  }
  return base;
};
