// src/pages/Login.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useInputShake } from '../hooks/useInputShake';
import { useAuth } from '../store/authStore';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Login() {
  const revealRef = useScrollReveal();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();
  const loginUser = useAuth((s) => s.login);

  const emailShake = useInputShake();
  const passwordShake = useInputShake();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    let hasError = false;

    if (!email.trim() || !emailRegex.test(email)) {
      emailShake.trigger();
      hasError = true;
    }
    if (!password.trim()) {
      passwordShake.trigger();
      hasError = true;
    }

    if (hasError) return;

    const res = loginUser(email.trim().toLowerCase(), password);

    if (res.success) {
      navigate('/perfil');
    } else {
      setErrorMsg(res.message || 'Error al iniciar sesión.');
      emailShake.trigger();
      passwordShake.trigger();
    }
  };

  return (
    <main ref={revealRef} className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10">
      {/* Glassmorphism ambient glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-orange/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-brown/15 blur-[100px]" />
      </div>
      <div className="w-full max-w-md glass-card-dark rounded-4xl p-10 shadow-[0_8px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/40 reveal">
        <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
          Iniciar Sesión
        </h2>

        {errorMsg && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm font-semibold mb-6 text-center">
            {errorMsg}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-2">Correo electrónico</label>
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
              <p className="t-error-msg font-bold !text-red-300">Ingresa tu correo electrónico.</p>
            </div>
          </div>
          <div>
            <label className="block text-xs font-black tracking-wider uppercase text-white/90 mb-2">Contraseña</label>
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
              <p className="t-error-msg font-bold !text-red-300">Ingresa tu contraseña.</p>
            </div>
          </div>
          <button type="submit" className="w-full btn-primary font-bold mt-2 flex items-center justify-center">
            Entrar
          </button>
        </form>

        <p className="text-center mt-8 text-sm font-semibold text-white/80">
          ¿No tienes cuenta? <Link to="/register" className="text-brand-orange font-bold hover:underline">Regístrate</Link>
        </p>
      </div>
    </main>
  );
}
