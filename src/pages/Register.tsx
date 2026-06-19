// src/pages/Register.tsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useInputShake } from '../hooks/useInputShake';
import { useAuth } from '../store/authStore';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const registerUser = useAuth((s) => s.register);

  const nombreShake = useInputShake();
  const emailShake = useInputShake();
  const telefonoShake = useInputShake();
  const passwordShake = useInputShake();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    let hasError = false;

    if (!nombre.trim()) {
      nombreShake.trigger();
      hasError = true;
    }
    if (!email.trim() || !emailRegex.test(email)) {
      emailShake.trigger();
      hasError = true;
    }
    if (!telefono.trim()) {
      telefonoShake.trigger();
      hasError = true;
    }
    // dirección es opcional — no se valida
    if (!password.trim() || password.length < 6) {
      passwordShake.trigger();
      hasError = true;
    }

    if (hasError) return;

    const res = registerUser({
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      telefono: telefono.trim(),
      direccion: direccion.trim(),
      password: password
    });

    if (res.success) {
      navigate('/perfil');
    } else {
      setErrorMsg(res.message || 'Error al registrar.');
      emailShake.trigger();
    }
  };

  return (
    <main className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10 animate-fade-in">
      {/* Glassmorphism ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-brown/15 blur-[100px]" />
      </div>
      <div className="w-full max-w-md glass-card-dark rounded-4xl p-10 shadow-[0_8px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
        <h2 className="text-4xl font-black text-white mb-6 text-center tracking-tight">
          Crear Cuenta
        </h2>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm font-semibold mb-6 text-center">
            {errorMsg}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Nombre */}
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-1.5">Nombre completo</label>
            <div
              ref={nombreShake.wrapRef}
              className={`t-input-wrap${nombreShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={nombreShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${nombreShake.error ? ' is-error' : ''}`}
              >
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    if (nombreShake.error) nombreShake.cancel();
                  }}
                  className={`w-full glass-input-dark
                             ${nombreShake.error ? '!border-red-400 !bg-red-500/10' : ''}`}
                />
              </div>
              <p className="t-error-msg font-bold !text-red-300">Ingresa tu nombre completo.</p>
            </div>
          </div>

          {/* Correo */}
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-1.5">Correo electrónico</label>
            <div
              ref={emailShake.wrapRef}
              className={`t-input-wrap${emailShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={emailShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${emailShake.error ? ' is-error' : ''}`}
              >
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailShake.error) emailShake.cancel();
                  }}
                  className={`w-full glass-input-dark
                             ${emailShake.error ? '!border-red-400 !bg-red-500/10' : ''}`}
                />
              </div>
              <p className="t-error-msg font-bold !text-red-300">Ingresa un correo electrónico válido.</p>
            </div>
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-1.5">Teléfono</label>
            <div
              ref={telefonoShake.wrapRef}
              className={`t-input-wrap${telefonoShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={telefonoShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${telefonoShake.error ? ' is-error' : ''}`}
              >
                <input
                  type="tel"
                  placeholder="+505 8888 8888"
                  value={telefono}
                  onChange={(e) => {
                    setTelefono(e.target.value);
                    if (telefonoShake.error) telefonoShake.cancel();
                  }}
                  className={`w-full glass-input-dark
                             ${telefonoShake.error ? '!border-red-400 !bg-red-500/10' : ''}`}
                />
              </div>
              <p className="t-error-msg font-bold !text-red-300">Ingresa tu número de teléfono.</p>
            </div>
          </div>

          {/* Dirección (opcional) */}
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-1.5">
              Dirección
              <span className="ml-2 text-white/40 font-semibold normal-case tracking-normal">(opcional)</span>
            </label>
            <input
              type="text"
              placeholder="El Viejo, Chinandega"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full glass-input-dark"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-1.5">Contraseña (Mín. 6 caracteres)</label>
            <div
              ref={passwordShake.wrapRef}
              className={`t-input-wrap${passwordShake.error ? ' is-error' : ''}`}
            >
              <div
                ref={passwordShake.inputRef as React.RefObject<HTMLDivElement>}
                className={`t-input${passwordShake.error ? ' is-error' : ''}`}
              >
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (passwordShake.error) passwordShake.cancel();
                  }}
                  className={`w-full glass-input-dark
                             ${passwordShake.error ? '!border-red-400 !bg-red-500/10' : ''}`}
                />
              </div>
              <p className="t-error-msg font-bold !text-red-300">La contraseña debe tener al menos 6 caracteres.</p>
            </div>
          </div>

          <button type="submit" className="w-full btn-primary font-bold mt-4 flex items-center justify-center">
            Registrarse
          </button>
        </form>

        <p className="text-center mt-6 text-sm font-semibold text-white/70">
          ¿Ya tienes cuenta? <Link to="/login" className="text-brand-orange font-bold hover:underline">Inicia Sesión</Link>
        </p>
      </div>
    </main>
  );
}
