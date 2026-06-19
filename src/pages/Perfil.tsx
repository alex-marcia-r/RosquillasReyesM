// src/pages/Perfil.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/authStore';
import { User, Mail, Phone, MapPin, Calendar, CheckCircle, LogOut } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Perfil() {
  const revealRef = useScrollReveal();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <main ref={revealRef} className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10">
      {/* Glassmorphism ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/15 blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-brown/15 blur-[100px]" />
      </div>
      <div className="w-full max-w-lg glass-card-dark rounded-4xl p-10 shadow-[0_8px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/40 reveal">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30 mx-auto flex items-center justify-center mb-4">
            <User size={40} />
          </div>
          <p className="text-xs font-black tracking-widest text-brand-orange uppercase">Miembro Rosquillas Reyes</p>
          <h2 className="text-3xl font-black text-white mt-1 tracking-tight">Mi Perfil</h2>
        </div>

        {/* User Info List */}
        <div className="space-y-4 mb-8">
          {/* Nombre */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <User size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Nombre completo</p>
              <p className="text-sm font-bold text-white truncate">{currentUser.nombre}</p>
            </div>
          </div>

          {/* Correo */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Mail size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Correo electrónico</p>
              <p className="text-sm font-bold text-white truncate">{currentUser.email}</p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Phone size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Teléfono</p>
              <p className="text-sm font-bold text-white truncate">{currentUser.telefono}</p>
            </div>
          </div>

          {/* Dirección (sólo si se registró) */}
          {currentUser.direccion && (
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Dirección</p>
                <p className="text-sm font-bold text-white truncate">{currentUser.direccion}</p>
              </div>
            </div>
          )}

          {/* Fecha de Registro */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
              <Calendar size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Fecha de Registro</p>
              <p className="text-sm font-bold text-white truncate">{currentUser.createdAt}</p>
            </div>
          </div>

          {/* Estado */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-black uppercase tracking-wider text-white/50">Estado de Cuenta</p>
              <p className="text-sm font-bold text-green-400 truncate">{currentUser.estado || 'Activo'}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-red-500/20 text-red-300 border border-red-500/30 rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </main>
  );
}
