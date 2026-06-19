// src/store/carritoStore.ts
// Estado global del carrito usando Zustand

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Producto } from '../data/productos';

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
  paqueteSelected?: number; // 50, 100, 150, 200 o undefined (unidad)
  precioUnitario: number;
}

interface CarritoState {
  items: ItemCarrito[];
  agregar: (producto: Producto, cantidad?: number, paqueteSelected?: number, precioUnitario?: number) => void;
  quitar:  (productoId: string, paqueteSelected?: number) => void;
  actualizar: (productoId: string, paqueteSelected: number | undefined, cantidad: number) => void;
  vaciar: () => void;
  total: () => number;
  cantidadTotal: () => number;
}

export const useCarrito = create<CarritoState>()(
  persist(
    (set, get) => ({
      items: [],

      agregar: (producto, cantidad = 1, paqueteSelected, precioUnitario) =>
        set((state) => {
          const finalPrice = precioUnitario !== undefined 
            ? precioUnitario 
            : (paqueteSelected ? producto.precio * paqueteSelected : producto.precio);

          const existe = state.items.find(
            (i) => i.producto.id === producto.id && i.paqueteSelected === paqueteSelected
          );

          if (existe) {
            return {
              items: state.items.map((i) =>
                i.producto.id === producto.id && i.paqueteSelected === paqueteSelected
                  ? { ...i, cantidad: i.cantidad + cantidad }
                  : i
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                producto,
                cantidad,
                paqueteSelected,
                precioUnitario: finalPrice,
              },
            ],
          };
        }),

      quitar: (productoId, paqueteSelected) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.producto.id === productoId && i.paqueteSelected === paqueteSelected)
          ),
        })),

      actualizar: (productoId, paqueteSelected, cantidad) => {
        if (cantidad < 1) return;
        set((state) => ({
          items: state.items.map((i) =>
            i.producto.id === productoId && i.paqueteSelected === paqueteSelected
              ? { ...i, cantidad }
              : i
          ),
        }));
      },

      vaciar: () => set({ items: [] }),

      total: () =>
        get().items.reduce(
          (acc, i) => acc + (isNaN(i.precioUnitario) ? 0 : i.precioUnitario) * i.cantidad,
          0
        ),

      cantidadTotal: () =>
        get().items.reduce((acc, i) => acc + i.cantidad, 0),
    }),
    { name: 'carrito-rosquilla-reyes' }
  )
);
