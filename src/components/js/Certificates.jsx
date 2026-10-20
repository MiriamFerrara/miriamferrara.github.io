import React from 'react';
import '../css/Certificates.css';

function Certificates() {
    const baseUrl = import.meta.env.BASE_URL;

    const certificates = [
        {
            id: 'claude-week-2026',
            title: 'Attestato di Partecipazione Claude Week 2026',
            subtitle: 'Formazione Live su Claude AI (12-15 Ottobre 2026)',
            issuer: 'Profession.ai',
            description: 'Corso pratico incentrato sulla configurazione di assistenti AI per il customer care, gestione della memoria e fonti, integrazione con strumenti operativi e testing di sistemi generativi.',
            tags: ['Claude AI', 'Prompt Engineering', 'LLM', 'AI Customer Care'],
            imagePreview: `${baseUrl}attestati/img/ProfessionAI-Claude-Week.jpg`,
            fileLink: `${baseUrl}attestati/ProfessionAI-Claude-Week.pdf`
        }
    ];

    return (
        <section id="certificates" className="certificates-page">
            <div className="certificates-container">

                <div className="certificates-header">
                    <h2 className="certificates-title">
                        Attestati & <span className="certificates-title-highlight">Certificazioni</span>
                    </h2>
                    <p className="certificates-subtitle">
                        Percorsi di formazione continua, workshop ed esami di certificazione conseguiti.
                    </p>
                </div>

                <div className="certificates-list">
                    {certificates.map((cert) => (
                        <article className="cert-card" key={cert.id}>

                            <div className="cert-card-left">
                                <a
                                    href={cert.fileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-thumb-wrapper"
                                >
                                    <img
                                        src={cert.imagePreview}
                                        alt={`Anteprima ${cert.title}`}
                                        className="cert-thumb-img"
                                    />
                                </a>
                            </div>

                            <div className="cert-card-content">
                                <div className="cert-meta">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <span className="cert-bullet">•</span>
                                    <span className="cert-date">Ottobre 2026</span>
                                </div>

                                <h3 className="cert-card-title">{cert.title}</h3>
                                <span className="cert-card-subtitle">{cert.subtitle}</span>

                                <p className="cert-card-desc">{cert.description}</p>

                                <div className="cert-tags">
                                    {cert.tags.map((tag, i) => (
                                        <span className="cert-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="cert-card-action">
                                {cert.fileLink && (
                                    <a
                                        href={cert.fileLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-btn-pdf"
                                    >
                                        <span>Apri PDF</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Certificates;