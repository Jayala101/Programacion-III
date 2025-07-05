
import { useEffect } from 'react';

export default function ScrollLogger() {
  useEffect(() => {
    const handleScroll = () => console.log('Scroll Y:', window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <p>Desplázate hacia abajo y mira la consola</p>;
}
