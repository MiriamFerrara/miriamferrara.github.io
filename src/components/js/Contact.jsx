import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        messaggio: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false });

        try {
            // Chiamata all'endpoint AJAX di FormSubmit
            const response = await fetch("https://formsubmit.co/ajax/miriamferrara1397@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    Nome: formData.nome,
                    Cognome: formData.cognome,
                    Email: formData.email,
                    Messaggio: formData.messaggio,
                    _subject: `Nuovo messaggio dal portfolio da ${formData.nome} ${formData.cognome}`,
                    _captcha: "false" // Disabilita il reCAPTCHA di FormSubmit
                })
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: false });
                setFormData({ nome: '', cognome: '', email: '', messaggio: '' });
            } else {
                setStatus({ loading: false, success: false, error: true });
            }
        } catch (error) {
            console.error("Errore durante l'invio del messaggio:", error);
            setStatus({ loading: false, success: false, error: true });
        }
    };

    return (
        <section id="contact" className="contact-page">
            <div className="section-container">

                {/* Intestazione della Sezione */}
                <div className="section-header">
                    <h2 className="section-title">Cont<span className="contact-title-highlight">atti</span></h2>
                    <p className="section-subtitle">
                        Compila il modulo per inviarmi un messaggio diretto o connettiti tramite i social.
                    </p>
                </div>

                {/* Grid Principale in 2 Colonne */}
                <div className="contact-main-grid">

                    {/* Scheda Info & Social */}
                    <div className="contact-info-card">

                        <div className="info-detail-item">
                            <span className="info-detail-icon">✉</span>
                            <div>
                                <strong>Email:</strong>
                                <a href="mailto:miriamferrara1397@gmail.com">miriamferrara1397@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-detail-item">
                            <span className="info-detail-icon">📍</span>
                            <div>
                                <strong>Luogo:</strong>
                                <span>Napoli, Campania (Italia)</span>
                            </div>
                        </div>

                        {/* Social Badges */}
                        <div className="social-links-grid">
                            <a
                                href="https://github.com/MiriamFerrara"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-badge github"
                                title="GitHub"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/miriam-ferrara/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-badge linkedin"
                                title="LinkedIn"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://www.instagram.com/mirimiferrara/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-badge instagram"
                                title="Instagram"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Scheda Modulo Form */}
                    <div className="contact-form-card">
                        <form className="contact-form-inner" onSubmit={handleSubmit}>
                            {/* Campo antispam invisibile */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div className="form-double-row">
                                <div className="input-field-group">
                                    <label htmlFor="nome">Nome *</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        required
                                        placeholder="Il tuo nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="input-field-group">
                                    <label htmlFor="cognome">Cognome *</label>
                                    <input
                                        type="text"
                                        id="cognome"
                                        name="cognome"
                                        required
                                        placeholder="Il tuo cognome"
                                        value={formData.cognome}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-field-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="nome@esempio.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="input-field-group">
                                <label htmlFor="messaggio">Messaggio *</label>
                                <textarea
                                    id="messaggio"
                                    name="messaggio"
                                    rows="5"
                                    required
                                    placeholder="Scrivi qui il tuo messaggio..."
                                    value={formData.messaggio}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="submit-action-btn"
                                disabled={status.loading}
                            >
                                {status.loading ? "Invio in corso..." : "Invia il messaggio"}
                            </button>

                            {/* Notifiche per l'utente */}
                            {status.success && (
                                <p style={{ color: '#059669', fontWeight: '600', marginTop: '1rem', fontSize: '0.9rem' }}>
                                    ✓ Messaggio inviato con successo!
                                </p>
                            )}
                            {status.error && (
                                <p style={{ color: '#dc2626', fontWeight: '600', marginTop: '1rem', fontSize: '0.9rem' }}>
                                    ✕ Impossibile inviare il messaggio. Si è verificato un errore, riprova più tardi.
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;