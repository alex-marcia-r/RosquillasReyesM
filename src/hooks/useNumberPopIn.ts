// src/hooks/useNumberPopIn.ts
// Devuelve el estado `playing` y la función `replay`.
// Uso:
//   const { playing, replay } = useNumberPopIn(value);
//   <span className={`t-digit-group${playing ? ' is-animating' : ''}`}>
//     {value.split('').map((ch, i) => (
//       <span key={i} className="t-digit" data-stagger={i > 0 ? i : undefined}>{ch}</span>
//     ))}
//   </span>

import { useEffect, useRef, useState } from 'react';

export function useNumberPopIn(value: string | number) {
  const strValue = String(value);
  const prevRef = useRef(strValue);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (prevRef.current === strValue) return;
    prevRef.current = strValue;
    // Replay: quita clase → reflow → re-agrega
    setPlaying(false);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPlaying(true))
    );
    return () => cancelAnimationFrame(id);
  }, [strValue]);

  return { playing };
}
