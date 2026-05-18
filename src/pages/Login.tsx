// src/pages/Login.tsx
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="pt-32 pb-24 px-[5%] flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-md bg-brand-dark rounded-3xl shadow-xl p-10 h-fit">
        <h2 className="text-[2.5rem] font-bold text-white mb-8 text-center">
          Iniciar Sesión
        </h2>
        
        <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/'; }}>
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">Correo electrónico</label>
            <input 
              type="email" 
              placeholder="tu@correo.com" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:border-brand-orange focus:ring-0 outline-none transition-all"
            />
          </div>
          <button type="submit" className="w-full btn-primary py-3 text-lg font-bold hover:scale-[1.02] transition-transform">
            Entrar
          </button>
        </form>

        <p className="text-center mt-6 text-white/70">
          ¿No tienes cuenta? <Link to="#" className="text-brand-orange font-bold hover:underline">Regístrate</Link>
        </p>
      </div>
    </main>
  );
}
