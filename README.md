# 🌿 Miriam Ferrara — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-miriamferrara.github.io-064e3b?style=for-the-badge&logo=githubpages&logoColor=white)](https://miriamferrara.github.io/)

Un portfolio web moderno, reattivo e minimalista realizzato in **React**, progettato con un'estetica emerald-green e una struttura Single Page Application (SPA).

---

## 🌐 Live Website

Il portfolio è pubblicato e raggiungibile all'indirizzo: **[https://miriamferrara.github.io/](https://miriamferrara.github.io/)**

---

## 🚀 Caratteristiche Principali

* **Design Minimal & Palette Emerald**: Layout pulito basato su griglie ordinate con palette smeraldo (`#064e3b`, `#059669`, `#a7f3d0`) e toni neutri.
* **Architettura a Componenti**: Struttura modulare sviluppata con componenti React riutilizzabili (`Header`, `Home`, `About`, `Skills`, `Projects`, `Contact`, `Footer`).
* **Modulo di Contatto Asincrono**: Form integrato con `fetch` per l'invio diretto di e-mail senza intermediari o client di posta esterni.
* **Layout Full Responsive**: Ottimizzazione completa per dispositivi mobile, tablet e desktop.

---

## 🛠️ Tech Stack

* **Frontend**: React, JavaScript (ES6+)
* **Styling**: CSS3 (Flexbox, CSS Grid, Custom Variables)
* **Build Tool**: Vite
* **Hosting & Deployment**: GitHub Pages

---

## 📁 Struttura del Progetto

```text
src/
├── components/
│   └── js/
│       ├── Header.jsx    # Navigation bar e menu responsive
│       ├── Home.jsx      # Sezione Introduttiva / Hero
│       ├── About.jsx     # Presentazione personale e profilo
│       ├── Skills.jsx    # Competenze tecniche e toolkit
│       ├── Projects.jsx  # Selezione dei progetti sviluppati
│       ├── Contact.jsx   # Form di contatto e social links
│       └── Footer.jsx    # Footer e note di copyright
├── css/                  # Fogli di stile dedicati ai singoli componenti
├── App.jsx               # Componente principale
├── App.css               # Stili e variabili cromatiche globali
└── main.jsx              # Entry point dell'applicazione React
```

---

## 💻 Configurazione ed Esecuzione Locale

### Prerequisiti
Assicurati di aver installato sul tuo sistema:
* **Node.js** (versione 18 o superiore consigliata)
* **npm** (incluso con Node.js)
* **Git**

### Passaggi per l'installazione

1. **Clona la repository**:
   ```bash
   git clone https://github.com/MiriamFerrara/miriamferrara.github.io.git
   ```

2. **Accedi alla cartella del progetto**:
   ```bash
   cd miriamferrara.github.io
   ```

3. **Installa le dipendenze**:
   ```bash
   npm install
   ```

4. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   Apri l'indirizzo mostrato nel terminale (solitamente `http://localhost:5173`) per visualizzare l'applicazione in locale.

5. **Compilazione per la produzione (Build)**:
   ```bash
   npm run build
   ```

