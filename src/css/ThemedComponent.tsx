
import { useTheme } from './ThemeProvider';

export default function ThemedComponent(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  const style: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <p>El tema actual es: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}


