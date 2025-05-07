'use client';

import styles from './NavBar.module.css';
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Elite Broker: Unleash Your Trading Power!
        </div>
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        <div className={`${styles.content} ${menuOpen ? styles.show : ''}`}>
          <ul className={styles.menu}>
            <li><a href="#marketNews">Market News</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#guide">One-On-One Trading Guide</a></li>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#ourChamps">Hear From Our Champs</a></li>
            <li><a href="#gift">Special Gift</a></li>
            <li><a href="#contactUs">Contact Us</a></li>
          </ul>

          <div className={styles.languages}>
            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="English (US)">
              <svg viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="26">
                <g clipPath="url(#clip0)">
                  <path d="M28 0H0V20H28V0Z" fill="url(#paint0)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 0H28V1.33333H0V0ZM0 2.66667H28V4H0V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM0 8H28V9.33333H0V8ZM0 10.6667H28V12H0V10.6667ZM0 13.3333H28V14.6667H0V13.3333ZM0 16H28V17.3333H0V16ZM0 18.6667H28V20H0V18.6667Z" fill="url(#paint1)" />
                  <path d="M12 0H0V9.33333H12V0Z" fill="url(#paint2)" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M...Z" fill="url(#paint3)" /> {/* звезды опущены для краткости */}
                </g>
                <defs>
                  <linearGradient id="paint0" x1="14" y1="0" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#F0F0F0" />
                  </linearGradient>
                  <linearGradient id="paint1" x1="14" y1="0" x2="14" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D02F44" />
                    <stop offset="1" stopColor="#B12537" />
                  </linearGradient>
                  <linearGradient id="paint2" x1="6" y1="0" x2="6" y2="9.33333" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#46467F" />
                    <stop offset="1" stopColor="#3C3C6D" />
                  </linearGradient>
                  <linearGradient id="paint3" x1="6" y1="1.33333" x2="6" y2="8" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#F0F0F0" />
                  </linearGradient>
                  <clipPath id="clip0">
                    <rect width="28" height="20" rx="2" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Deutsch">
              <svg viewBox="0 0 36 36" width="36" height="26" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFCD05" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z" />
                <path fill="#ED1F24" d="M0 14h36v9H0z" />
                <path fill="#141414" d="M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4z" />
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Italiano">
              <svg viewBox="0 0 36 36" width="36" height="26" xmlns="http://www.w3.org/2000/svg">
                <path fill="#CE2B37" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z" />
                <path fill="#009246" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z" />
                <path fill="#EEE" d="M12 5h12v26H12z" />
              </svg>
            </button>
            <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} aria-label="Polski">
              <svg viewBox="0 0 36 36" width="36" height="26" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z" />
                <path fill="#DC143C" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9H0v9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}


