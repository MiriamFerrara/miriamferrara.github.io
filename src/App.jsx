import React, { useState } from 'react';
import './App.css';
import Header from './components/js/Header';
import Home from './components/js/Home';
import About from './components/js/About';
import Skills from './components/js/Skills';
import Projects from './components/js/Projects';
import Contact from './components/js/Contact';
import Footer from './components/js/Footer';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="portfolio-app">
            <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;