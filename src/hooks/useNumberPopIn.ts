import { useEffect, useRef, useState } from 'react';

export function useNumberPopIn(value: string | number) {
  const strValue = String(value);
  const prevRef = useRef(strValue);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (prevRef.current === strValue) return;
    prevRef.current = strValue;
    setPlaying(false);
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPlaying(true))
    );
    return () => cancelAnimationFrame(id);
  }, [strValue]);

  return { playing };
}
