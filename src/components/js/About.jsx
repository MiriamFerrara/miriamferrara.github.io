import React from 'react';
import '../css/About.css';
import aboutImage from '../img/about-miriam.jpeg';
import elvisImage from '../img/elvis.jpeg'; // 👈 Salva la foto di Elvis in src/img con questo nome

function About() {
    return (
        <div className="about-page">
            {/* ==========================================================================
               HERO SECTION - Layout Split con Foto a SINISTRA e Testo a DESTRA
               ========================================================================== */}
            <section id="about" className="hero-split">

                {/* Lato Sinistro: Foto 1200x1600 con Overlay Smeraldo */}
                <div className="hero-split-media">
                    <div className="media-container">
                        <img
                            src={aboutImage}
                            alt="Miriam Ferrara - Chi Sono"
                            className="hero-split-img"
                        />
                        <div className="hero-split-overlay"></div>
                    </div>
                </div>

                {/* Lato Destro: Presentazione e Continuazione dalla Home */}
                <div className="hero-split-content">
                    <div className="hero-split-inner">

                        <h1 className="hero-split-title">
                            Chi <span className="hero-split-name">sono</span>
                        </h1>

                        <p className="hero-split-subtitle">
                            Junior Full Stack Developer & Studentessa di Informatica
                        </p>

                        <p className="hero-split-text">
                            La mia passione per la tecnologia nasce da bambina, guidata dalla curiosità di capire come funziona un PC. Un percorso fatto di determinazione e studio costante che mi vede oggi a soli 2 esami dalla laurea triennale in Informatica presso l'Università degli Studi di Salerno.
                        </p>

                    </div>
                </div>

            </section>

            {/* ==========================================================================
               SEZIONE DETTAGLI - Approfondimento del percorso, della tesi e delle passioni
               ========================================================================== */}
            <section className="about-details-section">

                {/* 1. Come lavoro e la passione per il software completo */}
                <div className="about-card">
                    <h2 className="about-card-title">Dall'idea al codice</h2>
                    <p>
                        Ciò che mi stimola di più dello sviluppo Full Stack è l'intero ciclo di vita del software: partire da un'idea e vederla prendere forma giorno dopo giorno fino al prodotto finito.
                    </p>
                    <p>
                        Amo curare l'aspetto visivo e la semplicità dell'interfaccia visiva (Front-end), affrontando con tenacia la logica del Back-end e la gestione dei dati. Quando c'è un problema di logica o un bug da risolvere, non mi fermo finché non trovo la soluzione.
                    </p>
                </div>

                {/* 2. Il percorso universitario e la Tesi */}
                <div className="about-card">
                    <h2 className="about-card-title">Il mio percorso & La Tesi</h2>
                    <p>
                        Nonostante un diploma iniziale in ambito turistico — una scelta legata alla scarsa presenza di percorsi informatici all'epoca —, la mia attrazione per il codice è rimasta viva. Ho scelto di mettermi in gioco iscrivendomi a Informatica, dimostrando grande spirito di adattamento e capacità di imparare in autonomia.
                    </p>
                    <p>
                        Attualmente sto lavorando al mio <strong>Progetto di Tesi</strong>: uno studio sul <em>Prompt Engineering</em> per <strong>BeDigital</strong>, focalizzato sulla creazione guidata di risorse educative per la cittadinanza digitale.
                    </p>
                </div>


                <div className="about-card about-card-split">
                    <div className="about-card-text">
                        <h2 className="about-card-title">Passioni e vita quotidiana</h2>
                        <p>
                            Curiosa e precisa per natura, amo organizzare ogni cosa nei dettagli, dai viaggi ai progetti personali.
                        </p>
                        <p>
                            Nel tempo libero partecipo a mostre ed esibizioni d'auto, con una grande ammirazione per il marchio <strong>Ferrari</strong>. Sono inoltre appassionata di cinema, romanzi (in particolare Paulo Coelho), musica elettronica e cucina.
                        </p>
                        <p>
                            Amante degli animali, condivido le mie giornate con <strong>Elvis</strong>, un gatto coccolone dal manto nero con una macchia bianca a forma di cuore sul petto.
                        </p>
                    </div>

                    <div className="about-card-media">
                        <img
                            src={elvisImage}
                            alt="Elvis - Il gatto di Miriam"
                            className="elvis-img"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;