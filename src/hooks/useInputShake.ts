import { useRef, useState } from 'react';

function readMs(name: string, fallback: number): number {
  if (typeof document === 'undefined') return fallback;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name).trim();
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : fallback;
}

export function useInputShake() {
  const inputRef = useRef<HTMLElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [error, setError] = useState(false);

  const trigger = () => {
    const el = inputRef.current;
    if (!el) return;
    setError(true);
    el.classList.remove('is-shaking');
    void el.offsetWidth;
    el.classList.add('is-shaking');

    if (timerRef.current) clearTimeout(timerRef.current);
    const shakeMs =
      readMs('--shake-dur-a', 80) * 2 +
      readMs('--shake-dur-b', 60) * 2;
    const hold = readMs('--revert-hold', 3000);
    timerRef.current = setTimeout(() => {
      setError(false);
      timerRef.current = null;
    }, shakeMs + hold);
  };

  const cancel = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setError(false);
  };

  return { wrapRef, inputRef, error, trigger, cancel };
}
