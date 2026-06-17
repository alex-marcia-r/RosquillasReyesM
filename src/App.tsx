// src/App.tsx — Enrutador principal de la app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
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

function App() {
  return (
    <BrowserRouter>
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

