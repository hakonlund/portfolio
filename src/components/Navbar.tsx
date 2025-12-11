'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
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
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">🎵 Håkon Teigen Lund</div>
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      <nav ref={navRef} className={menuOpen ? 'nav open' : 'nav'}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Hjem</Link>
        <Link href="/arrangementer" onClick={() => setMenuOpen(false)}>Arrangementer</Link>
      </nav>
    </header>
  );
}
