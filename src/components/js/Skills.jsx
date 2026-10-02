import React from 'react';
import '../css/Skills.css';

function Skills() {
    const techCategories = [
        {
            category: "Linguaggi di Programmazione",
            skills: ["Java", "SQL", "JavaScript", "C"]
        },
        {
            category: "Sviluppo Backend & API",
            skills: ["Spring Boot", "Node.js", "REST API", "Thymeleaf"]
        },
        {
            category: "Sviluppo Frontend",
            skills: ["React", "HTML5", "CSS3", "AJAX", "jQuery"]
        },
        {
            category: "Database & Server",
            skills: ["MySQL", "Apache Tomcat", "GlassFish"]
        },
        {
            category: "Strumenti & Versionamento",
            skills: ["Git", "GitHub", "IntelliJ IDEA", "VS Code", "Eclipse", "Android Studio"]
        },
        {
            category: "Metodologie & Architetture",
            skills: ["Programmazione ad Oggetti (OOP)", "Pattern MVC", "Programmazione Distribuita", "Mobile Programming", "UX/UI Design"]
        },
        {
            category: "Sistemi Operativi",
            skills: ["Linux (Ubuntu)", "Windows"]
        }
    ];

    const softSkills = [
        {
            num: "01",
            title: "Pianificazione e organizzazione"
        },
        {
            num: "02",
            title: "Lavoro in team multidisciplinare"
        },
        {
            num: "03",
            title: "Problem solving"
        },
        {
            num: "04",
            title: "Precisione e cura del dettaglio"
        },
        {
            num: "05",
            title: "Capacità di imparare in autonomia"
        }
    ];

    return (
        <div className="skills-page" id="skills">
            <div className="skills-container">
                {/* Header della Sezione */}
                <span className="skills-header">
                    <h1 className="skills-title">
                        Sk<span className="skills-title-highlight">ills</span>
                    </h1>
                    <p className="skills-subtitle">
                        Panoramica dettagliata su linguaggi, framework, strumenti, architetture e sistemi utilizzati nello sviluppo software.
                    </p>
                </span>

                {/* Sezione Tech Stack - Layout a Righe (Senza Card) */}
                <section className="tech-list-section">
                    {techCategories.map((cat, idx) => (
                        <div className="tech-row" key={idx}>
                            <div className="tech-row-info">
                                <span className="tech-row-dot"></span>
                                <h2 className="tech-row-title">{cat.category}</h2>
                            </div>
                            <div className="tech-row-skills">
                                {cat.skills.map((skill, sIdx) => (
                                    <span className="skill-chip" key={sIdx}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Sezione Soft Skills */}
                <section className="soft-skills-section">
                    <div className="soft-header-inline">
                        <span className="tech-row-dot ongoing-dot"></span>
                        <h2 className="soft-main-title">Soft Skills</h2>
                    </div>

                    <div className="soft-skills-timeline">
                        {softSkills.map((soft, idx) => (
                            <div className="soft-item" key={idx}>
                                <span className="soft-number">{soft.num}</span>
                                <h3 className="soft-item-title">{soft.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Skills;