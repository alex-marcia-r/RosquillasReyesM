<div align="center">


# 🍪 Rosquilla Reyes

**Catálogo web moderno para la marca artesanal Rosquilla Reyes**  
*El Viejo, Chinandega — Nicaragua*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Zustand](https://img.shields.io/badge/Zustand-store-433e38?style=for-the-badge)](https://zustand-demo.pmnd.rs)

</div>

---

## 📋 Tabla de contenido

- [Descripción](#-descripción)
- [Stack tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Primeros pasos](#-primeros-pasos)
- [Scripts disponibles](#-scripts-disponibles)
- [Siguientes pasos](#-siguientes-pasos)

---

## 📖 Descripción

Rosquilla Reyes es una aplicación web **SPA (Single Page Application)** desarrollada con React y Vite para mostrar el catálogo de productos artesanales de la marca, permitir agregar productos a un carrito y contactar al negocio.

Este proyecto es la versión modernizada del sitio original construido en HTML/CSS/JS vanilla, migrando a un stack actual mantenible y escalable.

---

## 🛠 Stack tecnológico

| Tecnología | Versión | Rol |
|---|---|---|
| [React](https://react.dev) | 18 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Vite](https://vitejs.dev) | 5 | Build tool y dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3 | Estilos utility-first |
| [React Router](https://reactrouter.com) | 6 | Enrutamiento SPA |
| [Zustand](https://github.com/pmndrs/zustand) | 5 | Estado global del carrito |
| [lucide-react](https://lucide.dev) | latest | Iconos |

---

## ✨ Características

- 🛒 **Carrito de compras** persistente en `localStorage` vía Zustand
- 🔍 **Búsqueda en vivo** de productos con filtros por categoría
- 📱 **Diseño responsivo** con menú hamburger para móvil
- 🎠 **Carrusel automático** en la página de inicio (sin dependencias externas)
- 🖼️ **Imagen de fallback** automática si una imagen de producto falla
- 🔗 **Navegación SPA** sin recarga de página (React Router v6)
- 🟠 **Badge reactivo** del carrito en el Navbar
- ✅ **0 errores TypeScript** en compilación estricta

---

## 📁 Estructura del proyecto

```
Rosquillas Reyes/
├── public/
│   └── img/                    # Imágenes estáticas (productos, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Header con sticky, badge de carrito y menú móvil
│   │   ├── Footer.tsx           # Footer con links de navegación
│   │   └── ProductoCard.tsx     # Tarjeta reutilizable de producto
│   │
│   ├── data/
│   │   └── productos.ts         # Fuente única de verdad — interfaz Producto tipada
│   │
│   ├── pages/
│   │   ├── Home.tsx             # / — Hero, categorías y carrusel
│   │   ├── Productos.tsx        # /productos — grilla con búsqueda y filtros
│   │   ├── DetalleProducto.tsx  # /productos/:id — detalle con selector de cantidad
│   │   ├── Carrito.tsx          # /carrito — resumen de pedido
│   │   └── Contacto.tsx         # /contacto — formulario de contacto
│   │
│   ├── store/
│   │   └── carritoStore.ts      # Zustand store — estado global del carrito
│   │
│   ├── App.tsx                  # Enrutador raíz (BrowserRouter + Routes)
│   ├── main.tsx                 # Punto de entrada de la aplicación
│   └── index.css                # Tailwind directives + Google Fonts + componentes globales
│
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 Primeros pasos

### Prerrequisitos

- [Node.js](https://nodejs.org) v18 o superior
- npm v9 o superior

### Instalación

```bash
# 1. Ir a la carpeta del proyecto
cd "Rosquillas Reyes"

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:5173**

---

## 📜 Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| Desarrollo | `npm run dev` | Inicia el servidor con HMR en `localhost:5173` |
| Verificar tipos | `npx tsc --noEmit` | Comprueba errores TypeScript sin compilar |
| Build | `npm run build` | Genera el bundle de producción en `dist/` |
| Preview | `npm run preview` | Sirve el build de producción localmente |

---

## 🗺 Rutas de la aplicación

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Home | Hero, categorías de productos y carrusel de imágenes |
| `/productos` | Catálogo | Grilla de todos los productos con búsqueda y filtros |
| `/productos/:id` | Detalle | Información completa del producto y botón de carrito |
| `/carrito` | Carrito | Resumen del pedido con cantidades y total |
| `/contacto` | Contacto | Formulario de contacto para pedidos y eventos |

---


<div align="center">

Hecho con ❤️ y maíz tostado · **Rosquilla Reyes** © 2025

</div>
