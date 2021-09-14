import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from './utils/hooks';

function App() {
  return (
    <ThemeProvider>

      <Home />
    </ThemeProvider>
  );
}

export default App;
