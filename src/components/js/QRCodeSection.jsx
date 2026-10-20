import React from 'react';
import '../css/QRCodeSection.css';

function QRCodeSection() {
    // Link diretto al tuo file Google Drive per il CV
    const driveCvUrl = "https://drive.google.com/file/d/1OFCyjVvyQMYf6X9kNK-Z20uxpXREZQ9Z/view?usp=sharing";
    const siteUrl = "https://miriamferrara.github.io/";

    // QR Code generati dinamici ad alta risoluzione in colore verde smeraldo (#064e3b)
    const qrCvImg = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(driveCvUrl)}&color=064e3b`;
    const qrSiteImg = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(siteUrl)}&color=064e3b`;

    return (
        <section id="more" className="qr-section">
            <div className="qr-container">
                <h3 className="qr-title">Risorse & QR Code</h3>
                <p className="qr-subtitle">
                    Scansiona con la fotocamera dello smartphone per aprire direttamente il CV su Google Drive o esplorare il portfolio.
                </p>

                <div className="qr-cards-grid">
                    {/* Card QR CV Google Drive */}
                    <div className="qr-card">
                        <div className="qr-wrapper">
                            <img src={qrCvImg} alt="QR Code Curriculum Vitae Google Drive" />
                        </div>
                        <h4>Curriculum Vitae</h4>
                        <p>Visualizza e scarica il PDF su Google Drive</p>
                        <a
                            href={driveCvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="qr-link"
                        >
                            Apri su Drive 📄
                        </a>
                    </div>

                    {/* Card QR Portfolio */}
                    <div className="qr-card">
                        <div className="qr-wrapper">
                            <img src={qrSiteImg} alt="QR Code Portfolio Website" />
                        </div>
                        <h4>Sito Web</h4>
                        <p>Link diretto al tuo portfolio online</p>
                        <a
                            href={siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="qr-link"
                        >
                            Visita Portfolio 🌐
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QRCodeSection;