import React from 'react';
import '../css/Projects.css';

function Projects() {
    // Progetti realizzati
    const completedProjects = [
        {
            id: 'dryblue',
            title: 'Platform DryBlue',
            subtitle: 'Ingegneria del Software & Software Project Management (UNISA)',
            category: 'Web Application & Management',
            description: 'Sviluppo in team interfacciato con studenti della Laurea Magistrale per la gestione dell’intero ciclo di vita di una web application per servizi di lavanderia digitale.',
            tags: ['Java', 'Spring Boot', 'Thymeleaf', 'Architettura MVC'],
            githubLink: 'https://github.com/DryBlue'
        },
        {
            id: 'slot-machine',
            title: 'Slot Machine',
            subtitle: 'Progetto Web (2024)',
            category: 'Single Page Application',
            description: 'Progettazione e sviluppo di una Single Page Application ad uso scenico realizzata per un cortometraggio. Focus sulla resa visiva, animazioni e reattività dell’interfaccia utente.',
            tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
            githubLink: 'https://github.com/MiriamFerrara/slot-machine',
            demoLink: 'https://miriamferrara.github.io/slot-machine/'
        },
        {
            id: 'campionato-in-pista',
            title: 'Campionato In Pista',
            subtitle: 'Basi di Dati (UNISA)',
            category: 'Database & Motorsport App',
            description: 'Progettazione concettuale, logica e sviluppo individuale di un database relazionale e relativa applicazione web per la gestione completa di un campionato automobilistico.',
            tags: ['SQL', 'MySQL', 'DBMS Relazionale', 'Java'],
            githubLink: 'https://github.com/MiriamFerrara/CampionatoInPista'
        },
        {
            id: 'qua-la-zampa',
            title: 'Qua La Zampa',
            subtitle: 'Tecnologie Software per il Web (UNISA)',
            category: 'E-Commerce Platform',
            description: 'Realizzazione in team di una piattaforma e-commerce completa per la vendita di prodotti per animali domestici, con dinamiche avanzate lato client e server.',
            tags: ['Java', 'SQL', 'JavaScript (AJAX, jQuery)', 'Apache Tomcat', 'HTML', 'CSS'],
            githubLink: 'https://github.com/MiriamFerrara/QuaLaZampa'
        },
        {
            id: 'saf-milky',
            title: 'S.A.F. MILKY (Smart Artificial Farming)',
            subtitle: 'Interazione Uomo-Macchina (UNISA)',
            category: 'Android App & UX/UI',
            description: 'Progettazione e sviluppo in team di un’applicazione Android nativa per la gestione digitale di un caseificio, con forte focus su usabilità, accessibilità e interazione utente.',
            tags: ['Java', 'Android Studio', 'XML', 'UX/UI Design'],
            githubLink: 'https://github.com/MiriamFerrara/Gruppo-n-21'
        }
    ];

    // Progetto in corso (Tesi)
    const ongoingProject = {
        id: 'tesi-bedigital',
        title: 'Progetto di Tesi: Prompt Engineering',
        subtitle: 'Tesi Laurea Triennale in collaborazione con BeDigital',
        category: 'In Corso',
        description: 'Sviluppo di un sistema di supporto al prompt engineering per BeDigital, orientato alla creazione guidata di risorse educative sulla cittadinanza digitale.',
        tags: ['Prompt Engineering', 'Generative AI', 'LLM', 'Ollama', 'Java'],
        statusText: 'In fase di sviluppo'
    };

    return (
        <section id="projects" className="projects-page">
            <div className="projects-container">

                {/* Header della Sezione */}
                <div className="projects-header">
                    <h2 className="projects-title">
                        Prog<span className="projects-title-highlight">etti</span>
                    </h2>
                    <p className="projects-subtitle">
                        Una panoramica sulle applicazioni sviluppate durante il percorso universitario e sui progetti in corso.
                    </p>
                </div>

                {/* SEZIONE 1: PROGETTI REALIZZATI */}
                <div className="projects-section">
                    <h3 className="projects-section-title">
                        <span className="section-dot completed-dot"></span> Progetti Realizzati
                    </h3>

                    <div className="projects-grid">
                        {completedProjects.map((project) => (
                            <article className="project-card" key={project.id}>
                                <div className="project-card-header">
                                    <span className="project-category">{project.category}</span>
                                    <h4 className="project-card-title">{project.title}</h4>
                                    <span className="project-card-subtitle">{project.subtitle}</span>
                                </div>

                                <p className="project-card-desc">{project.description}</p>

                                <div className="project-card-footer">
                                    <div className="project-tags">
                                        {project.tags.map((tag, tIndex) => (
                                            <span className="project-tag" key={tIndex}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link github"
                                            >
                                                GitHub &rarr;
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link demo"
                                            >
                                                Demo Live &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* SEZIONE 2: PROGETTO IN CORSO */}
                <div className="projects-section">
                    <h3 className="projects-section-title">
                        <span className="section-dot ongoing-dot"></span> Progetto in Corso
                    </h3>

                    <article className="project-card project-card-featured">
                        <div className="project-card-header">
                            <div className="project-header-top">
                                <span className="project-category ongoing-category">{ongoingProject.category}</span>
                                <span className="status-badge">{ongoingProject.statusText}</span>
                            </div>
                            <h4 className="project-card-title">{ongoingProject.title}</h4>
                            <span className="project-card-subtitle">{ongoingProject.subtitle}</span>
                        </div>

                        <p className="project-card-desc">{ongoingProject.description}</p>

                        <div className="project-card-footer">
                            <div className="project-tags">
                                {ongoingProject.tags.map((tag, tIndex) => (
                                    <span className="project-tag" key={tIndex}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>

            </div>
        </section>
    );
}

export default Projects;