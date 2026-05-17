// src/store/carritoStore.ts
// Estado global del carrito usando Zustand
// Reemplaza: getCarrito(), saveCarrito(), agregarAlCarrito(), etc. de productos-data.js
// Ventaja: estado reactivo — cualquier componente que lo use se re-renderiza automáticamente
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Producto } from '../data/productos';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

interface CarritoState {
  items: ItemCarrito[];
  agregar: (producto: Producto, cantidad?: number) => void;
  quitar:  (productoId: string) => void;
  actualizar: (productoId: string, cantidad: number) => void;
  vaciar: () => void;
  total: () => number;
  cantidadTotal: () => number;
}

export const useCarrito = create<CarritoState>()(
  // persist guarda automáticamente en localStorage, igual que antes
  persist(
    (set, get) => ({
      items: [],

      agregar: (producto, cantidad = 1) =>
        set((state) => {
          const existe = state.items.find((i) => i.producto.id === producto.id);
          if (existe) {
            return {
              items: state.items.map((i) =>
                i.producto.id === producto.id
                  ? { ...i, cantidad: i.cantidad + cantidad }
                  : i
              ),
            };
          }
          return { items: [...state.items, { producto, cantidad }] };
        }),

      quitar: (productoId) =>
        set((state) => ({
          items: state.items.filter((i) => i.producto.id !== productoId),
        })),

      actualizar: (productoId, cantidad) => {
        if (cantidad < 1) return;
        set((state) => ({
          items: state.items.map((i) =>
            i.producto.id === productoId ? { ...i, cantidad } : i
          ),
        }));
      },

      vaciar: () => set({ items: [] }),

      total: () =>
        get().items.reduce(
          (acc, i) => acc + i.producto.precio * i.cantidad,
          0
        ),

      cantidadTotal: () =>
        get().items.reduce((acc, i) => acc + i.cantidad, 0),
    }),
    { name: 'carrito-rosquilla-reyes' }
  )
);
