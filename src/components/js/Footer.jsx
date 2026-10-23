import React, { useState } from 'react';
import '../css/Footer.css';

function Footer() {
    const [isQrOpen, setIsQrOpen] = useState(false);
    const currentYear = new Date().getFullYear();
    const cvUrl = `${import.meta.env.BASE_URL}../altro/Miriam_Ferrara_cv.pdf`;

    const driveCvUrl = "https://drive.google.com/file/d/1OFCyjVvyQMYf6X9kNK-Z20uxpXREZQ9Z/view?usp=sharing";
    const siteUrl = "https://miriamferrara.github.io/";

    const qrCvImg = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(driveCvUrl)}&color=064e3b`;
    const qrSiteImg = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(siteUrl)}&color=064e3b`;

    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Miriam Ferrara</h3>
                        <p className="footer-tagline">
                            Junior Full Stack Developer & Studentessa di Informatica
                        </p>
                    </div>

                    <nav className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">Chi sono</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Progetti</a>
                        <a href="#certificates">Attestati</a>
                        <a href="#contact">Contatti</a>

                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-cv-btn"
                            title="Curriculum Vitae (Protetto da Password)"
                        >
                            CV 🔒
                        </a>

                        {/* Pulsante che apre il Modal */}
                        <button
                            type="button"
                            className="footer-qr-btn"
                            onClick={() => setIsQrOpen(true)}
                        >
                            QR Code 📱
                        </button>
                    </nav>

                    <div className="footer-socials">
                        <a
                            href="https://github.com/MiriamFerrara"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/miriam-ferrara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        <a
                            href="https://www.instagram.com/mirimiferrara/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p className="copyright-text">
                        © {currentYear} Miriam Ferrara
                    </p>
                    <p className="footer-sub-info">
                        Italia
                    </p>
                </div>

            </div>

            {/* MODAL POP-UP QR CODE */}
            {isQrOpen && (
                <div className="qr-modal-overlay" onClick={() => setIsQrOpen(false)}>
                    <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="qr-modal-close" onClick={() => setIsQrOpen(false)}>
                            ✕
                        </button>
                        <h2>Risorse & QR Code</h2>
                        <p className="qr-modal-subtitle">Scansiona con lo smartphone per accedere alle risorse</p>

                        <div className="qr-modal-grid">
                            <div className="qr-modal-card">
                                <div className="qr-img-box">
                                    <img src={qrCvImg} alt="QR Code CV" />
                                </div>
                                <h3>Curriculum Vitae</h3>
                                <a href={driveCvUrl} target="_blank" rel="noopener noreferrer" className="qr-modal-link">
                                    Apri su Drive 📄
                                </a>
                            </div>

                            <div className="qr-modal-card">
                                <div className="qr-img-box">
                                    <img src={qrSiteImg} alt="QR Code Portfolio" />
                                </div>
                                <h3>Sito Web</h3>
                                <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="qr-modal-link">
                                    Visita Portfolio 🌐
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}

export default Footer;