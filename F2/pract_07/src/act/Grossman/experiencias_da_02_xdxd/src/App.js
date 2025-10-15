import { Content } from './components/Content';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App() {
  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <ThemeSwitcher />
      <Content />
    </div>
  );
}

export default App;
