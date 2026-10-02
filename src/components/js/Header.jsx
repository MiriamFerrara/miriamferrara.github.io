import React from 'react';
import '../css/Header.css'; // o il percorso dove salvi il CSS della Navbar

function Header({ menuOpen, setMenuOpen }) {
    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
                <a href="#home" className="logo">
                    Miriam Ferrara
                </a>

                {/* Pulsante Hamburger Mobile */}
                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Link di Navigazione */}
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>Chi sono</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Progetti</a>
                    <a href="#contact" className="nav-btn" onClick={() => setMenuOpen(false)}>Contatti</a>
                </nav>

            </div>
        </header>
    );
}

export default Header;