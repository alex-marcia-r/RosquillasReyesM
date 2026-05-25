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
    <main className="pt-32 pb-24 px-[5%] flex justify-center bg-gray-50 min-h-screen">
      <div className="w-full max-w-md bg-brand-dark rounded-3xl shadow-xl p-10 h-fit">
        <h2 className="text-[2.5rem] font-bold text-white mb-8 text-center">
          Iniciar Sesión
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">Correo electrónico</label>
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
                  className={`w-full px-4 py-3 rounded-xl border bg-white/10 text-white placeholder-white/60 focus:ring-0 outline-none transition-all
                             ${emailShake.error ? 'border-red-400' : 'border-white/20 focus:border-brand-orange'}`}
                />
              </div>
              <p className="t-error-msg !text-red-300">Ingresa tu correo electrónico.</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-white/90 mb-2">Contraseña</label>
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
                  className={`w-full px-4 py-3 rounded-xl border bg-white/10 text-white placeholder-white/60 focus:ring-0 outline-none transition-all
                             ${passwordShake.error ? 'border-red-400' : 'border-white/20 focus:border-brand-orange'}`}
                />
              </div>
              <p className="t-error-msg !text-red-300">Ingresa tu contraseña.</p>
            </div>
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
