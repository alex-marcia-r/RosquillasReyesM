// src/pages/Login.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInputShake } from '../hooks/useInputShake';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailShake = useInputShake();
  const passwordShake = useInputShake();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!email.trim() || !emailRegex.test(email)) { emailShake.trigger(); hasError = true; }
    if (!password.trim()) { passwordShake.trigger(); hasError = true; }
    if (hasError) return;
    window.location.href = '/';
  };

  return (
    <main className="pt-32 pb-24 px-[6%] md:px-[8%] flex justify-center items-center min-h-screen relative z-10 animate-fade-in">
      <div className="w-full max-w-md glass-card-dark rounded-4xl p-10 shadow-2xl">
        <h2 className="text-4xl font-black text-white mb-8 text-center tracking-tight">
          Iniciar Sesión
        </h2>

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

        <p className="text-center mt-8 text-sm font-semibold text-white/70">
          ¿No tienes cuenta? <Link to="#" className="text-brand-orange font-bold hover:underline">Regístrate</Link>
        </p>
      </div>
    </main>
  );
}
