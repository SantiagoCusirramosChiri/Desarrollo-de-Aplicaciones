import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        margin: '20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#444' : '#ddd',
        color: theme === 'light' ? '#fff' : '#000',
        transition: 'all 0.3s ease',
      }}
    >
      Cambiar a modo {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};
