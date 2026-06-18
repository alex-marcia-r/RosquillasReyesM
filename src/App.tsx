// src/App.tsx — Enrutador principal de la app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home             from './pages/Home';
import Productos        from './pages/Productos';
import DetalleProducto  from './pages/DetalleProducto';
import Carrito          from './pages/Carrito';
import Contacto         from './pages/Contacto';
import Nosotros         from './pages/Nosotros';
import Login            from './pages/Login';
import Noticias         from './pages/Noticias';
import FormaPago        from './pages/FormaPago';
import Pago             from './pages/Pago';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <BrowserRouter>
      {/* Capa de fondo con blobs líquidos animados */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-orange/15 blur-[80px] md:blur-[120px] animate-liquid-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-brand-navy/10 blur-[90px] md:blur-[130px] animate-liquid-2" />
        <div className="absolute top-[40%] right-[-15%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-brown/10 blur-[80px] md:blur-[100px] animate-liquid-3" />
        <div className="absolute bottom-[20%] left-[-15%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-brand-cream/35 blur-[90px] md:blur-[110px] animate-liquid-1" />
      </div>

      <Navbar />
      <Routes>
        <Route path="/"                    element={<Home />}            />
        <Route path="/productos"           element={<Productos />}       />
        <Route path="/productos/:id"       element={<DetalleProducto />} />
        <Route path="/carrito"             element={<Carrito />}         />
        <Route path="/contacto"            element={<Contacto />}        />
        <Route path="/nosotros"            element={<Nosotros />}        />
        <Route path="/login"               element={<Login />}           />
        <Route path="/noticias"            element={<Noticias />}        />
        <Route path="/forma-pago"          element={<FormaPago />}       />
        <Route path="/pago"                element={<Pago />}            />
        {/* 404 */}
        <Route path="*" element={
          <div className="pt-40 text-center text-gray-400">
            <p className="text-6xl font-black text-brand-orange mb-4">404</p>
            <p>Página no encontrada.</p>
          </div>
        } />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;

