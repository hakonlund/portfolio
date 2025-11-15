import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Arrangements } from './pages/Arrangements';
import './styles/App.css';
import { useRef, useState, useEffect } from 'react';
import '@fontsource/inter/400.css';  // normal
import '@fontsource/inter/600.css';  // semibold

import '@fontsource/lora/600.css';   // overskrift
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
  
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <header className="navbar">
          <div className="nav-container">
            <div className="logo">🎵 Håkon T. Lund</div>
            <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
          <nav ref={navRef} className={menuOpen ? 'nav open' : 'nav'}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Hjem</Link>
            <Link to="/arrangementer" onClick={() => setMenuOpen(false)}>Arrangementer</Link>
          </nav>
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arrangementer" element={<Arrangements />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;