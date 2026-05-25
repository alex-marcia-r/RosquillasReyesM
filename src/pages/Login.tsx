// src/pages/Login.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInputShake } from '../hooks/useInputShake';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  const emailShake    = useInputShake();
  const passwordShake = useInputShake();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!email.trim())    { emailShake.trigger();    hasError = true; }
    if (!password.trim()) { passwordShake.trigger(); hasError = true; }
    if (hasError) return;
    window.location.href = '/';
  };

  return (
    <main
      className="min-h-screen pt-28 pb-20 px-[6%] flex items-start justify-center"
      style={{ background: '#fdfcfc' }}
    >
      <div className="w-full max-w-md">
        {/* Header editorial */}
        <div className="mb-10">
          <span className="el-eyebrow mb-3 block">Cuenta</span>
          <h1
            className="font-cormorant font-light text-brand-brown"
            style={{ fontSize: 'clamp(32px,5vw,44px)', letterSpacing: '-0.02em' }}
          >
            Iniciar sesión
          </h1>
        </div>

        {/* Card formulario */}
        <div className="bg-white rounded-2xl border border-el-chalk p-8">
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>

            {/* Email */}
            <div>
              <label className="el-eyebrow mb-3 block" htmlFor="login-email">
                Correo electrónico
              </label>
              <div
                ref={emailShake.wrapRef}
                className={`t-input-wrap${emailShake.error ? ' is-error' : ''}`}
              >
                <div
                  ref={emailShake.inputRef as React.RefObject<HTMLDivElement>}
                  className={`t-input${emailShake.error ? ' is-error' : ''}`}
                >
                  <input
                    id="login-email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailShake.error) emailShake.cancel();
                    }}
                    className="el-input"
                  />
                </div>
                <p className="t-error-msg mt-1">Ingresa tu correo electrónico.</p>
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="el-eyebrow mb-3 block" htmlFor="login-password">
                Contraseña
              </label>
              <div
                ref={passwordShake.wrapRef}
                className={`t-input-wrap${passwordShake.error ? ' is-error' : ''}`}
              >
                <div
                  ref={passwordShake.inputRef as React.RefObject<HTMLDivElement>}
                  className={`t-input${passwordShake.error ? ' is-error' : ''}`}
                >
                  <input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (passwordShake.error) passwordShake.cancel();
                    }}
                    className="el-input"
                  />
                </div>
                <p className="t-error-msg mt-1">Ingresa tu contraseña.</p>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center py-3.5">
              Entrar
            </button>
          </form>
        </div>

        <p className="text-center mt-6 text-sm" style={{ color: '#777169' }}>
          ¿No tienes cuenta?{' '}
          <Link to="#" className="text-brand-orange hover:underline font-medium">
            Regístrate
          </Link>
        </p>
      </div>
    </main>
  );
}
