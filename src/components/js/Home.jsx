import React from 'react';
import '../css/Home.css';
import miriamImage from '../img/miriamferrara.jpg';

function Home() {
    return (
        <section id="home" className="hero-split">

            {/* Lato Sinistro: Presentazione e CTA */}
            <div className="hero-split-content">
                <div className="hero-split-inner">

                    {/* Titolo Principale */}
                    <h1 className="hero-split-title">
                        Ciao, sono <br />
                        <span className="hero-split-name">Miriam Ferrara</span>
                    </h1>

                    {/* Subtitle e Testo */}
                    <p className="hero-split-subtitle">
                        Junior Full Stack Developer
                    </p>

                    <p className="hero-split-text">
                        Appassionata di sviluppo Full Stack. Amo trasformare un'idea in un prodotto
                        software completo, curato nei dettagli e semplice da usare.
                    </p>
                </div>
            </div>

            {/* Lato Destro: Foto Screen-Height con Overlay Smeraldo */}
            <div className="hero-split-media">
                <div className="media-container">
                    <img
                        src={miriamImage}
                        alt="Miriam Ferrara - Junior Full Stack Developer"
                        className="hero-split-img"
                    />
                    <div className="hero-split-overlay"></div>
                </div>
            </div>

        </section>
    );
}

export default Home;