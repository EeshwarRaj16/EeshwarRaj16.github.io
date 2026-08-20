/* =========================================================
   EESHWAR RAJ — IRON / STARK THEME
   ========================================================= */


/* =========================================================
   ROOT VARIABLES — DARK MODE
   ========================================================= */

:root {

    --bg: #08090c;
    --bg-secondary: #111318;
    --surface: #171a20;
    --surface-2: #20242c;

    --text: #fff8f2;
    --text-secondary: #d8c9c2;
    --muted: #9b8c86;

    --red: #d71912;
    --red-bright: #ff2b1f;
    --red-dark: #8c0805;

    --gold: #ffb300;
    --gold-bright: #ffd75a;
    --gold-dark: #a96c00;

    --blue: #009fe3;
    --cyan: #51dcff;

    --border: rgba(255, 179, 0, 0.20);

    --shadow-red: rgba(215, 25, 18, 0.35);
    --shadow-gold: rgba(255, 179, 0, 0.30);
    --shadow-blue: rgba(0, 159, 227, 0.30);

    --radius: 18px;

    --max-width: 1200px;

    --transition: 0.3s ease;
}


/* =========================================================
   BRIGHT MODE
   ========================================================= */

body.light-mode {

    --bg: #fff8f1;
    --bg-secondary: #fff0df;

    --surface: #ffffff;
    --surface-2: #fff4e8;

    --text: #24100c;
    --text-secondary: #513b34;
    --muted: #806b62;

    --red: #c71910;
    --red-bright: #ee291c;
    --red-dark: #980c07;

    --gold: #d88d00;
    --gold-bright: #ffbf1f;
    --gold-dark: #a86600;

    --blue: #008dcc;
    --cyan: #00a9df;

    --border: rgba(180, 75, 20, 0.20);

    --shadow-red: rgba(199, 25, 16, 0.22);
    --shadow-gold: rgba(216, 141, 0, 0.20);
    --shadow-blue: rgba(0, 141, 204, 0.18);
}


/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {

    font-family: "Inter", sans-serif;

    background:
        radial-gradient(
            circle at 85% 10%,
            rgba(215, 25, 18, 0.13),
            transparent 25%
        ),
        radial-gradient(
            circle at 10% 80%,
            rgba(0, 159, 227, 0.08),
            transparent 25%
        ),
        var(--bg);

    color: var(--text);

    line-height: 1.6;

    overflow-x: hidden;

    transition:
        background 0.4s ease,
        color 0.4s ease;
}

body.light-mode {

    background:
        radial-gradient(
            circle at 85% 10%,
            rgba(239, 41, 28, 0.15),
            transparent 25%
        ),
        radial-gradient(
            circle at 10% 75%,
            rgba(0, 169, 223, 0.10),
            transparent 25%
        ),
        linear-gradient(
            135deg,
            #fffaf5,
            #fff0df
        );
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}

::selection {
    background: var(--red);
    color: white;
}


/* =========================================================
   GLOBAL CONTAINER
   ========================================================= */

.section-container,
.nav-container,
.hero-container,
.footer-container {
    width: min(92%, var(--max-width));
    margin: auto;
}


/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(8, 9, 12, 0.82);

    backdrop-filter: blur(18px);

    border-bottom: 1px solid rgba(255, 179, 0, 0.12);

    transition:
        background 0.3s ease,
        border-color 0.3s ease;
}

body.light-mode .navbar {

    background: rgba(255, 248, 241, 0.86);

    border-bottom:
        1px solid rgba(199, 25, 16, 0.12);
}

.nav-container {

    height: 76px;

    display: flex;

    align-items: center;

    justify-content: space-between;
}


/* LOGO */

.logo {

    display: flex;

    align-items: center;

    gap: 12px;

    font-family: "Orbitron", sans-serif;

    font-weight: 700;

    letter-spacing: 1px;
}

.logo-mark {

    width: 42px;
    height: 42px;

    display: grid;

    place-items: center;

    border-radius: 10px;

    background:
        linear-gradient(
            135deg,
            var(--red-bright),
            var(--red-dark)
        );

    color: white;

    font-family: "Orbitron", sans-serif;

    font-size: 12px;

    box-shadow:
        0 0 20px var(--shadow-red);

    border: 1px solid var(--gold);
}

.logo-text {
    font-size: 13px;
}


/* NAV LINKS */

.nav-links {

    display: flex;

    align-items: center;

    gap: 28px;
}

.nav-links a {

    position: relative;

    color: var(--text-secondary);

    font-size: 13px;

    font-weight: 600;

    transition: color var(--transition);
}

.nav-links a:hover {
    color: var(--gold);
}

.nav-links a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    background:
        linear-gradient(
            90deg,
            var(--red),
            var(--gold)
        );

    transition: width var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}


/* THEME BUTTON */

.theme-toggle {

    width: 42px;
    height: 42px;

    border-radius: 50%;

    border: 1px solid var(--border);

    background: var(--surface);

    color: var(--gold);

    cursor: pointer;

    font-size: 18px;

    display: grid;

    place-items: center;

    transition:
        transform var(--transition),
        background var(--transition),
        border-color var(--transition);
}

.theme-toggle:hover {

    transform: rotate(20deg) scale(1.08);

    border-color: var(--gold);

    box-shadow:
        0 0 20px var(--shadow-gold);
}


/* =========================================================
   HERO
   ========================================================= */

.hero {

    min-height: 100vh;

    padding-top: 76px;

    display: flex;

    align-items: center;

    position: relative;

    overflow: hidden;
}

.hero::before {

    content: "";

    position: absolute;

    width: 600px;
    height: 600px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(215, 25, 18, 0.18),
            transparent 68%
        );

    top: -200px;
    right: -180px;

    pointer-events: none;
}

.hero-container {

    display: grid;

    grid-template-columns:
        1.05fr
        0.95fr;

    align-items: center;

    gap: 60px;

    padding: 80px 0;
}


/* HERO CONTENT */

.status-badge {

    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding: 8px 14px;

    border-radius: 999px;

    background: var(--surface);

    border: 1px solid var(--border);

    color: var(--text-secondary);

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 0.8px;

    margin-bottom: 25px;
}

.status-dot {

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #23d46b;

    box-shadow:
        0 0 10px rgba(35, 212, 107, 0.8);
}

.hero-small {

    font-family: "Orbitron", sans-serif;

    color: var(--gold);

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 5px;

    margin-bottom: 8px;
}

.hero h1 {

    font-family: "Orbitron", sans-serif;

    font-size: clamp(55px, 8vw, 105px);

    line-height: 0.95;

    letter-spacing: -4px;

    margin-bottom: 20px;
}

.hero h1 span {

    color: var(--red-bright);

    text-shadow:
        0 0 35px var(--shadow-red);
}

.hero h2 {

    font-size: clamp(27px, 4vw, 45px);

    line-height: 1.1;

    margin-bottom: 18px;

    font-weight: 700;
}

.hero-description {

    font-family: "Orbitron", sans-serif;

    font-size: 13px;

    font-weight: 600;

    color: var(--blue);

    letter-spacing: 2px;

    margin-bottom: 18px;
}

.hero-text {

    max-width: 600px;

    color: var(--muted);

    font-size: 16px;

    margin-bottom: 30px;
}


/* HERO BUTTONS */

.hero-buttons {

    display: flex;

    gap: 14px;

    flex-wrap: wrap;

    margin-bottom: 40px;
}

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 10px;

    padding: 13px 22px;

    border-radius: 10px;

    font-size: 13px;

    font-weight: 700;

    border: 1px solid transparent;

    transition:
        transform var(--transition),
        box-shadow var(--transition),
        background var(--transition);
}

.btn:hover {

    transform: translateY(-3px);
}

.btn-primary {

    color: white;

    background:
        linear-gradient(
            135deg,
            var(--red-bright),
            var(--red-dark)
        );

    border-color: var(--red-bright);

    box-shadow:
        0 10px 35px var(--shadow-red);
}

.btn-primary:hover {

    box-shadow:
        0 15px 45px var(--shadow-red);
}

.btn-secondary {

    color: var(--text);

    background: var(--surface);

    border-color: var(--border);
}

.btn-secondary:hover {

    border-color: var(--gold);

    box-shadow:
        0 10px 30px var(--shadow-gold);
}


/* HERO STATS */

.hero-stats {

    display: flex;

    gap: 35px;
}

.stat {

    display: flex;

    flex-direction: column;
}

.stat strong {

    font-family: "Orbitron", sans-serif;

    font-size: 14px;

    color: var(--gold);
}

.stat span {

    color: var(--muted);

    font-size: 11px;

    margin-top: 2px;
}


/* =========================================================
   REACTOR
   ========================================================= */

.hero-visual {

    min-height: 560px;

    display: grid;

    place-items: center;

    position: relative;
}

.reactor {

    width: 390px;
    height: 390px;

    position: relative;

    display: grid;

    place-items: center;
}

.reactor::before {

    content: "";

    position: absolute;

    width: 75%;
    height: 75%;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(255, 215, 90, 0.40),
            rgba(255, 43, 31, 0.15),
            transparent 68%
        );

    filter: blur(15px);

    animation:
        reactor-glow 2.8s infinite alternate ease-in-out;
}

.reactor-ring {

    position: absolute;

    border-radius: 50%;

    border: 1px solid;
}

.ring-one {

    width: 100%;
    height: 100%;

    border-color:
        rgba(255, 179, 0, 0.30);

    animation:
        spin 18s linear infinite;
}

.ring-two {

    width: 78%;
    height: 78%;

    border-color:
        rgba(0, 159, 227, 0.45);

    border-style: dashed;

    animation:
        spin-reverse 12s linear infinite;
}

.ring-three {

    width: 57%;
    height: 57%;

    border-color:
        rgba(255, 43, 31, 0.65);

    animation:
        spin 8s linear infinite;
}

.reactor-core {

    width: 145px;
    height: 145px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    position: relative;

    z-index: 3;

    background:
        radial-gradient(
            circle at 35% 30%,
            #fff,
            var(--gold-bright) 18%,
            var(--gold) 35%,
            var(--red-bright) 58%,
            var(--red-dark) 100%
        );

    border:
        5px solid rgba(255, 255, 255, 0.8);

    box-shadow:
        0 0 20px var(--gold),
        0 0 50px var(--red),
        0 0 100px var(--shadow-red);

    animation:
        core-pulse 2.5s infinite ease-in-out;
}

.reactor-core span {

    font-family: "Orbitron", sans-serif;

    color: white;

    font-size: 28px;

    font-weight: 800;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.5);
}


/* ENERGY LINES */

.energy-line {

    position: absolute;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            transparent,
            var(--gold),
            var(--red),
            transparent
        );

    opacity: 0.6;
}

.line-one {

    width: 170px;

    top: 30%;

    left: 3%;

    transform: rotate(-25deg);
}

.line-two {

    width: 200px;

    bottom: 25%;

    right: 0;

    transform: rotate(-25deg);
}

.line-three {

    width: 120px;

    top: 16%;

    right: 15%;

    transform: rotate(35deg);
}


/* TECH LABELS */

.tech-label {

    position: absolute;

    font-family: "Orbitron", sans-serif;

    font-size: 9px;

    letter-spacing: 2px;

    color: var(--cyan);

    padding: 7px 10px;

    border: 1px solid rgba(81, 220, 255, 0.25);

    background: rgba(0, 159, 227, 0.06);

    backdrop-filter: blur(8px);
}

.label-one {
    top: 20%;
    left: 5%;
}

.label-two {
    right: 0;
    top: 40%;
}

.label-three {
    bottom: 17%;
    left: 12%;
}


/* =========================================================
   SECTIONS
   ========================================================= */

.section {

    padding: 120px 0;

    position: relative;
}

.section-heading {

    display: flex;

    align-items: flex-start;

    gap: 18px;

    margin-bottom: 55px;
}

.section-number {

    font-family: "Orbitron", sans-serif;

    color: var(--red-bright);

    font-size: 13px;

    font-weight: 700;

    padding-top: 6px;
}

.section-kicker {

    color: var(--gold);

    font-family: "Orbitron", sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 3px;

    margin-bottom: 5px;
}

.section-heading h2 {

    font-family: "Orbitron", sans-serif;

    font-size: clamp(32px, 5vw, 52px);

    line-height: 1.1;
}


/* =========================================================
   ABOUT
   ========================================================= */

.about-grid {

    display: grid;

    grid-template-columns:
        1.4fr
        0.8fr;

    gap: 70px;

    align-items: center;
}

.about-main h3 {

    font-size: clamp(28px, 4vw, 44px);

    line-height: 1.2;

    margin-bottom: 25px;
}

.about-main h3 span {

    color: var(--red-bright);

    text-shadow:
        0 0 20px var(--shadow-red);
}

.about-main p {

    color: var(--muted);

    margin-bottom: 18px;

    max-width: 700px;
}


/* PROFILE CARD */

.about-card {

    padding: 28px;

    background:
        linear-gradient(
            145deg,
            var(--surface),
            var(--surface-2)
        );

    border:

        1px solid var(--border);

    border-radius: var(--radius);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

    color: var(--gold);

    font-family: "Orbitron", sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 25px;
}

.card-icon {

    font-size: 20px;

    color: var(--red-bright);
}

.profile-row {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 14px 0;

    border-bottom:
        1px solid var(--border);

    font-size: 12px;
}

.profile-row:last-child {
    border-bottom: none;
}

.profile-row span {
    color: var(--muted);
}

.profile-row strong {
    text-align: right;
}


/* =========================================================
   EDUCATION
   ========================================================= */

.education-grid {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 22px;
}

.education-card {

    display: grid;

    grid-template-columns: 70px 1fr;

    gap: 22px;

    padding: 30px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: var(--radius);

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.education-card:hover {

    transform: translateY(-6px);

    border-color: var(--gold);

    box-shadow:
        0 20px 45px var(--shadow-gold);
}

.education-icon {

    width: 60px;
    height: 60px;

    display: grid;

    place-items: center;

    border-radius: 14px;

    background:
        linear-gradient(
            135deg,
            var(--red),
            var(--red-dark)
        );

    color: white;

    font-family: "Orbitron", sans-serif;

    font-size: 20px;

    box-shadow:
        0 0 25px var(--shadow-red);
}

.education-level {

    color: var(--gold);

    font-family: "Orbitron", sans-serif;

    font-size: 9px;

    letter-spacing: 2px;
}

.education-card h3 {

    font-size: 21px;

    margin: 6px 0;
}

.education-card h4 {

    color: var(--blue);

    font-size: 13px;

    margin-bottom: 12px;
}

.education-card p {

    color: var(--muted);

    font-size: 13px;
}


/* =========================================================
   SKILLS
   ========================================================= */

.skills-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;
}

.skill-card {

    padding: 28px;

    min-height: 280px;

    background:
        linear-gradient(
            145deg,
            var(--surface),
            var(--surface-2)
        );

    border: 1px solid var(--border);

    border-radius: var(--radius);

    position: relative;

    overflow: hidden;

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.skill-card::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 3px;

    background:
        linear-gradient(
            90deg,
            var(--red),
            var(--gold),
            var(--blue)
        );
}

.skill-card:hover {

    transform: translateY(-7px);

    border-color: var(--gold);

    box-shadow:
        0 20px 45px var(--shadow-gold);
}

.skill-icon {

    width: 52px;
    height: 52px;

    display: grid;

    place-items: center;

    border-radius: 13px;

    margin-bottom: 22px;

    background:
        rgba(215, 25, 18, 0.12);

    border:
        1px solid rgba(215, 25, 18, 0.30);

    color: var(--red-bright);

    font-family: "Orbitron", sans-serif;

    font-weight: 800;

    font-size: 14px;
}

.skill-card h3 {

    font-size: 19px;

    margin-bottom: 12px;
}

.skill-card p {

    color: var(--muted);

    font-size: 13px;

    margin-bottom: 22px;
}

.skill-tags,
.project-tech {

    display: flex;

    flex-wrap: wrap;

    gap: 7px;
}

.skill-tags span,
.project-tech span {

    padding: 5px 9px;

    border-radius: 6px;

    background: var(--surface-2);

    border: 1px solid var(--border);

    color: var(--text-secondary);

    font-size: 9px;

    font-weight: 700;
}


/* =========================================================
   PROJECTS
   ========================================================= */

.projects-grid {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;
}

.project-card {

    padding: 30px;

    min-height: 360px;

    background:
        linear-gradient(
            145deg,
            var(--surface),
            var(--surface-2)
        );

    border: 1px solid var(--border);

    border-radius: var(--radius);

    position: relative;

    overflow: hidden;

    transition:
        transform var(--transition),
        border-color var(--transition),
        box-shadow var(--transition);
}

.project-card:hover {

    transform: translateY(-8px);

    border-color: var(--red-bright);

    box-shadow:
        0 25px 55px var(--shadow-red);
}

.project-card::after {

    content: "";

    position: absolute;

    width: 180px;
    height: 180px;

    border-radius: 50%;

    right: -80px;
    bottom: -80px;

    background:
        radial-gradient(
            circle,
            var(--shadow-red),
            transparent 70%
        );
}

.project-top {

    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 30px;
}

.project-number {

    font-family: "Orbitron", sans-serif;

    color: var(--gold);

    font-size: 12px;

    font-weight: 700;
}

.project-status {

    padding: 5px 9px;

    border: 1px solid var(--border);

    border-radius: 5px;

    color: var(--muted);

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1px;
}

.project-icon {

    width: 58px;
    height: 58px;

    display: grid;

    place-items: center;

    border-radius: 15px;

    background:
        linear-gradient(
            135deg,
            var(--red),
            var(--red-dark)
        );

    color: white;

    font-family: "Orbitron", sans-serif;

    font-size: 15px;

    font-weight: 800;

    margin-bottom: 22px;

    box-shadow:
        0 0 25px var(--shadow-red);
}

.project-card h3 {

    font-size: 24px;

    margin-bottom: 12px;
}

.project-card p {

    color: var(--muted);

    font-size: 13px;

    max-width: 500px;

    margin-bottom: 25px;
}


/* =========================================================
   JOURNEY
   ========================================================= */

.timeline {

    max-width: 850px;

    margin: auto;

    position: relative;
}

.timeline::before {

    content: "";

    position: absolute;

    left: 8px;

    top: 5px;
    bottom: 5px;

    width: 1px;

    background:
        linear-gradient(
            to bottom,
            var(--red),
            var(--gold),
            var(--blue)
        );
}

.timeline-item {

    position: relative;

    padding-left: 45px;

    padding-bottom: 55px;
}

.timeline-item:last-child {
    padding-bottom: 0;
}

.timeline-dot {

    position: absolute;

    left: 0;
    top: 4px;

    width: 17px;
    height: 17px;

    border-radius: 50%;

    background: var(--red-bright);

    border: 4px solid var(--bg);

    box-shadow:
        0 0 15px var(--shadow-red);
}

body.light-mode .timeline-dot {
    border-color: var(--bg);
}

.timeline-year {

    color: var(--gold);

    font-family: "Orbitron", sans-serif;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;
}

.timeline-content h3 {

    font-size: 22px;

    margin: 6px 0 10px;
}

.timeline-content p {

    color: var(--muted);

    font-size: 14px;

    max-width: 700px;
}

.timeline-item.future .timeline-dot {

    background: var(--blue);

    box-shadow:
        0 0 15px var(--shadow-blue);
}


/* =========================================================
   CONTACT
   ========================================================= */

.contact-box {

    position: relative;

    overflow: hidden;

    display: grid;

    grid-template-columns:
        1.3fr
        0.7fr;

    align-items: center;

    gap: 40px;

    padding: 65px;

    border-radius: 25px;

    background:
        linear-gradient(
            135deg,
            var(--red-dark),
            var(--red)
        );

    border:
        1px solid var(--gold);

    box-shadow:
        0 30px 70px var(--shadow-red);
}

.contact-box::before {

    content: "";

    position: absolute;

    width: 400px;
    height: 400px;

    border-radius: 50%;

    right: -150px;
    top: -150px;

    border:
        1px solid rgba(255, 215, 90, 0.35);

    box-shadow:
        0 0 0 40px rgba(255, 215, 90, 0.04),
        0 0 0 80px rgba(255, 215, 90, 0.03);
}

.contact-content {

    position: relative;

    z-index: 2;
}

.contact-content .section-kicker {
    color: var(--gold-bright);
}

.contact-content h2 {

    font-family: "Orbitron", sans-serif;

    font-size: clamp(35px, 5vw, 60px);

    line-height: 1.05;

    margin-bottom: 20px;
}

.contact-content h2 span {

    color: var(--gold-bright);

    text-shadow:
        0 0 25px rgba(255, 215, 90, 0.4);
}

.contact-content p:not(.section-kicker) {

    max-width: 620px;

    color: rgba(255, 255, 255, 0.78);

    margin-bottom: 30px;
}

.contact-buttons {

    display: flex;

    flex-wrap: wrap;

    gap: 12px;
}

.contact-box .btn-primary {

    background: white;

    color: var(--red-dark);

    border-color: white;

    box-shadow: none;
}

.contact-box .btn-primary:hover {

    background: var(--gold-bright);

    border-color: var(--gold-bright);
}

.contact-box .btn-secondary {

    background: transparent;

    color: white;

    border-color: rgba(255, 255, 255, 0.35);
}

.contact-box .btn-secondary:hover {

    border-color: var(--gold-bright);

    color: var(--gold-bright);
}


/* MINI REACTOR */

.contact-reactor {

    display: grid;

    place-items: center;

    position: relative;

    z-index: 2;
}

.mini-reactor {

    width: 190px;
    height: 190px;

    border-radius: 50%;

    display: grid;

    place-items: center;

    position: relative;

    border:
        2px solid rgba(255, 215, 90, 0.45);

    box-shadow:
        0 0 30px rgba(255, 215, 90, 0.25),
        inset 0 0 30px rgba(255, 215, 90, 0.15);
}

.mini-ring {

    position: absolute;

    width: 80%;
    height: 80%;

    border-radius: 50%;

    border:
        2px dashed rgba(81, 220, 255, 0.7);

    animation:
        spin 10s linear infinite;
}

.mini-core {

    width: 75px;
    height: 75px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            white,
            var(--gold-bright),
            var(--red-bright)
        );

    color: white;

    font-family: "Orbitron", sans-serif;

    font-weight: 800;

    box-shadow:
        0 0 30px var(--gold),
        0 0 60px var(--red);
}


/* =========================================================
   FOOTER
   ========================================================= */

.footer {

    padding: 35px 0 20px;

    border-top:
        1px solid var(--border);
}

.footer-container {

    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 20px;

    padding-bottom: 25px;
}

.footer-brand {

    display: flex;

    align-items: center;

    gap: 10px;

    font-weight: 700;
}

.footer-brand .logo-mark {

    width: 32px;
    height: 32px;

    font-size: 9px;
}

.footer-container > p {

    color: var(--muted);

    font-size: 11px;
}

.footer-links {

    display: flex;

    gap: 18px;
}

.footer-links a {

    color: var(--muted);

    font-size: 11px;

    transition: color var(--transition);
}

.footer-links a:hover {
    color: var(--gold);
}

.footer-bottom {

    width: min(92%, var(--max-width));

    margin: auto;

    padding-top: 18px;

    border-top:
        1px solid var(--border);

    display: flex;

    justify-content: space-between;

    color: var(--muted);

    font-size: 9px;

    letter-spacing: 1px;
}


/* =========================================================
   ANIMATIONS
   ========================================================= */

@keyframes spin {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-reverse {

    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

@keyframes reactor-glow {

    from {
        transform: scale(0.95);
        opacity: 0.65;
    }

    to {
        transform: scale(1.08);
        opacity: 1;
    }
}

@keyframes core-pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.06);
    }
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 1000px) {

    .nav-links {
        gap: 16px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-text {
        max-width: 650px;
    }

    .hero-visual {
        min-height: 420px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 760px) {

    .nav-container {
        height: 68px;
    }

    .nav-links {
        display: none;
    }

    .hero {
        padding-top: 68px;
    }

    .hero-container {
        padding: 65px 0;
    }

    .hero h1 {
        font-size: clamp(48px, 16vw, 78px);
        letter-spacing: -3px;
    }

    .hero-stats {
        justify-content: center;
        gap: 20px;
    }

    .hero-visual {
        min-height: 350px;
    }

    .reactor {
        width: 300px;
        height: 300px;
    }

    .reactor-core {
        width: 110px;
        height: 110px;
    }

    .section {
        padding: 85px 0;
    }

    .education-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .contact-box {
        grid-template-columns: 1fr;
        padding: 40px 28px;
    }

    .contact-reactor {
        display: none;
    }

    .footer-container,
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }

}


@media (max-width: 480px) {

    .logo-text {
        display: none;
    }

    .hero-buttons {
        width: 100%;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .hero-stats {
        width: 100%;
        justify-content: space-between;
    }

    .stat strong {
        font-size: 11px;
    }

    .stat span {
        font-size: 9px;
    }

    .reactor {
        width: 260px;
        height: 260px;
    }

    .reactor-core {
        width: 95px;
        height: 95px;
    }

    .reactor-core span {
        font-size: 20px;
    }

    .tech-label {
        display: none;
    }

    .education-card {
        grid-template-columns: 1fr;
    }

}
