
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('es');
  const messages: any = {
    es: 'Hola mundo',
    en: 'Hello world',
    fr: 'Bonjour le monde'
  };

  return (
    <div>
      <select onChange={(e) => setLang(e.target.value)} value={lang}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
      <p>{messages[lang]}</p>
    </div>
  );
}
