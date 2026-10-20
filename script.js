// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// JAIDEV S - CREATIVE INTERACTIVE PORTFOLIO ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━ 1. DATA LAYER ━━━

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
];

/* ─── MOVING TECH SKILLS MARQUEE (With brand colors & glows) ─── */
const techSkillsRow1 = [
    {
        name: "LangChain",
        iconType: "svg",
        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
        color: "#22c55e",
        glow: "rgba(34, 197, 94, 0.45)"
    },
    {
        name: "Python",
        iconClass: "devicon-python-plain",
        color: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.5)"
    },
    {
        name: "C++",
        iconClass: "devicon-cplusplus-plain",
        color: "#0284c7",
        glow: "rgba(2, 132, 199, 0.5)"
    },
    {
        name: "JavaScript",
        iconClass: "devicon-javascript-plain",
        color: "#facc15",
        glow: "rgba(250, 204, 21, 0.55)"
    },
    {
        name: "HTML5",
        iconClass: "devicon-html5-plain",
        color: "#f97316",
        glow: "rgba(249, 115, 22, 0.5)"
    },
    {
        name: "CSS3",
        iconClass: "devicon-css3-plain",
        color: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.5)"
    },
    {
        name: "Git",
        iconClass: "devicon-git-plain",
        color: "#f05032",
        glow: "rgba(240, 80, 50, 0.5)"
    },
    {
        name: "PyTorch",
        iconClass: "devicon-pytorch-original",
        color: "#ee4c2c",
        glow: "rgba(238, 76, 44, 0.5)"
    },
    {
        name: "TensorFlow",
        iconClass: "devicon-tensorflow-original",
        color: "#ff6f00",
        glow: "rgba(255, 111, 0, 0.5)"
    },
    {
        name: "OpenCV",
        iconClass: "devicon-opencv-plain",
        color: "#5c8dbc",
        glow: "rgba(92, 141, 188, 0.5)"
    },
    {
        name: "React",
        iconClass: "devicon-react-original",
        color: "#61dafb",
        glow: "rgba(97, 218, 251, 0.5)"
    }
];

const techSkillsRow2 = [
    {
        name: "Streamlit",
        iconClass: "devicon-streamlit-plain",
        color: "#ff4b4b",
        glow: "rgba(255, 75, 75, 0.5)"
    },
    {
        name: "Docker",
        iconClass: "devicon-docker-plain",
        color: "#2496ed",
        glow: "rgba(36, 150, 237, 0.5)"
    },
    {
        name: "Linux",
        iconClass: "devicon-linux-plain",
        color: "#facc15",
        glow: "rgba(250, 204, 21, 0.5)"
    },
    {
        name: "MySQL",
        iconClass: "devicon-mysql-original",
        color: "#00758f",
        glow: "rgba(0, 117, 143, 0.5)"
    },
    {
        name: "FastAPI",
        iconClass: "devicon-fastapi-plain",
        color: "#009688",
        glow: "rgba(0, 150, 136, 0.5)"
    },
    {
        name: "NumPy",
        iconClass: "devicon-numpy-plain",
        color: "#4dabcf",
        glow: "rgba(77, 171, 207, 0.5)"
    },
    {
        name: "Pandas",
        iconClass: "devicon-pandas-plain",
        color: "#818cf8",
        glow: "rgba(129, 140, 248, 0.5)"
    },
    {
        name: "Scikit-Learn",
        iconClass: "devicon-scikitlearn-plain",
        color: "#f59e0b",
        glow: "rgba(245, 158, 11, 0.5)"
    },
    {
        name: "Hugging Face",
        iconType: "svg",
        svg: `<svg viewBox="0 0 100 100" fill="currentColor"><path d="M50 8C26.8 8 8 26.8 8 50s18.8 42 42 42 42-18.8 42-42S73.2 8 50 8zm-15 28c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm30 0c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm-15 36c-10 0-18.2-6.5-20.2-15.5h40.4C68.2 65.5 60 72 50 72z"/></svg>`,
        color: "#ffd21e",
        glow: "rgba(255, 210, 30, 0.5)"
    },
    {
        name: "TypeScript",
        iconClass: "devicon-typescript-plain",
        color: "#3178c6",
        glow: "rgba(49, 120, 198, 0.5)"
    },
    {
        name: "Node.js",
        iconClass: "devicon-nodejs-plain",
        color: "#68a063",
        glow: "rgba(104, 160, 99, 0.5)"
    }
];

/* ─── CORE COMPETENCY METRICS ─── */
const coreCompetencies = [
    { name: "Python & Data Science (NumPy/Pandas)", level: 64, color: "from-[#38bdf8] to-[#0284c7]", icon: "devicon-python-plain" },
    { name: "Machine Learning (SciKit-Learn)", level: 28, color: "from-[#c084fc] to-[#9333ea]", icon: "fas fa-brain" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: 20, color: "from-[#f472b6] to-[#db2777]", icon: "fas fa-network-wired" },
    { name: "LLMs, RAG & LangChain", level: 82, color: "from-[#22c55e] to-[#059669]", icon: "fas fa-robot" },
    { name: "NLP & Computer Vision (OpenCV)", level: 27, color: "from-[#38bdf8] to-[#a855f7]", icon: "fas fa-eye" },
    { name: "Web Development (HTML5, CSS3, JS)", level: 56, color: "from-[#f59e0b] to-[#ea580c]", icon: "devicon-javascript-plain" },
    { name: "Databases & DBMS (MySQL)", level: 43, color: "from-[#06b6d4] to-[#0284c7]", icon: "devicon-mysql-original" },
    { name: "Version Control & Git/GitHub", level: 83, color: "from-[#f97316] to-[#dc2626]", icon: "devicon-git-plain" },
    { name: "Workflow Automations (Zapier)", level: 23, color: "from-[#a855f7] to-[#ec4899]", icon: "fas fa-bolt" },
    { name: "PC Building", level: 93, color: "from-[#f59e0b] to-[#ea580c]", icon: "fas fa-laptop-code" },
    { name: "Computer Networks & Operating Systems", level: 20, color: "from-[#22c55e] to-[#059669]", icon: "fas fa-network-wired" }
];

/* ─── PROJECTS ─── */
const projectCategories = ["All", "AI & ML", "Web Apps", "Tools & Systems"];

const projects = [
    {
        title: "AI Playground",
        category: "AI & ML",
        desc: "A centralized platform bringing multiple AI projects into a unified interactive portal, allowing users to switch models and explore diverse AI-powered features with seamless execution.",
        tags: ["HTML", "CSS", "JavaScript", "Vercel"],
        img: "assets/AI-PLAYGROUND.png",
        link: "https://github.com/JD-Jaidev/AI-PLAYGROUND",
        siteLink: null
    },
    {
        title: "RAG Multi-Model PDF Analyzer",
        category: "AI & ML",
        desc: "An intelligent PDF analyzer utilizing Retrieval-Augmented Generation (RAG) to parse complex documents. Employs LangChain, FAISS vector embeddings, and LLMs for precise contextual synthesis.",
        tags: ["RAG & LLMs", "LangChain", "FAISS", "Streamlit"],
        img: "assets/RAG.png",
        link: "https://github.com/JD-Jaidev/RAG-PDF-ANALYZER",
        siteLink: "https://ai-rag-pdf-analyzer.streamlit.app/"
    },
    {
        title: "AI Resume Analyzer with ATS Score",
        category: "AI & ML",
        desc: "Advanced resume grading system powered by LLMs and RAG. Evaluates resumes against target job descriptions, computes real-time ATS match scores, and provides intelligent enhancement feedback.",
        tags: ["Python", "LangChain", "RAG & LLMs", "Streamlit"],
        img: "assets/RAG-RESUME.png",
        link: "https://github.com/JD-Jaidev/AI-RESUME-ANALYZER",
        siteLink: "https://multi-ai-resume-analyzer.streamlit.app/"
    },
    {
        title: "AI Multi-Model ChatBot",
        category: "AI & ML",
        desc: "Full-featured conversational intelligence system supporting seamless switching across multiple state-of-the-art LLMs via OpenRouter API with conversational memory and dynamic parameter tuning.",
        tags: ["Python", "LangChain", "OpenRouter", "NLP APIs"],
        img: "assets/AI-CHATBOT.png",
        link: "https://github.com/JD-Jaidev/AI-CHATBOT/",
        siteLink: "https://ai-multi-model-chatbot.streamlit.app/"
    },
    {
        title: "MFX - Currency Converter & Market Trends",
        category: "Web Apps",
        desc: "Real-time global currency conversion and historical exchange-rate analytics dashboard. Features interactive time-series charts, currency pair favorites, and instant rate caching.",
        tags: ["HTML, CSS, JS", "Exchange API", "Vercel"],
        img: "assets/MFX.png",
        link: "https://github.com/JD-Jaidev/MFX-Currency-Exchange",
        siteLink: "https://mfx-currency-exchange.vercel.app/"
    },
    {
        title: "Stark - AI Study Companion",
        category: "AI & ML",
        desc: "Mobile AI-powered educational tutor built with MIT App Inventor and LLM APIs, enabling students to clarify complex scientific concepts and receive step-by-step problem solutions on demand.",
        tags: ["Python", "LLM APIs", "Mobile App"],
        img: "assets/STARK.png",
        link: "https://github.com/JD-Jaidev/",
        siteLink: null
    },
    {
        title: "Desktop Weather Application",
        category: "Tools & Systems",
        desc: "Native desktop forecasting suite built with Python and PyQt5. Fetches real-time atmospheric telemetry via REST APIs, displaying dynamic visual weather conditions and forecasts.",
        tags: ["Python", "PyQt5", "Weather API", "JSON"],
        img: "assets/WEATHER.png",
        link: "https://github.com/JD-Jaidev/Weather-Application-Project",
        siteLink: null
    },
    {
        title: "E-Commerce Database Management System",
        category: "Tools & Systems",
        desc: "Scalable relational inventory and customer transaction platform. Integrates Python with a normalized MySQL database schema to handle product indexing, orders, and real-time inventory queries.",
        tags: ["Python", "MySQL", "Relational DB"],
        img: "assets/ECOM.png",
        link: "https://github.com/JD-Jaidev/E-COMMERCE-DATABASE-MANAGEMENT",
        siteLink: null
    },
    {
        title: "Task Orchestrator & To-Do Suite",
        category: "Web Apps",
        desc: "Fluid, responsive task management application with real-time state tracking, persistent local storage, interactive task categorization, and smooth micro-animations.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        img: "assets/TODO.png",
        link: "https://github.com/JD-Jaidev/TO-DO-LIST",
        siteLink: "https://todo-list-athera.vercel.app/"
    }
];


/* ─── JOURNEY ─── */
const journeyData = [
    {
        type: "Schooling",
        institution: "Ebenezer Marcus International School",
        board: "CBSE Curriculum (Class 12th)",
        duration: "Completed",
        icon: "fas fa-school",
        color: "hover:border-[#38bdf8]/50 hover:shadow-[#38bdf8]/15",
        badgeColor: "bg-[#06b6d4]/10 text-[#38bdf8] border-[#06b6d4]/30",
        details: "Built a solid academic foundation focusing closely on Higher Mathematics, Physics, and foundational Computer Science principles."
    },
    {
        type: "Undergraduate Degree",
        institution: "Chennai Institute of Technology",
        board: "B.E. Computer Science Engineering (AI/ML Specialization)",
        duration: "Incoming / Active",
        icon: "fas fa-user-graduate",
        color: "hover:border-[#c084fc]/50 hover:shadow-[#c084fc]/15",
        badgeColor: "bg-[#a855f7]/10 text-[#c084fc] border-[#a855f7]/30",
        details: "Actively specializing in Artificial Intelligence, Deep Learning architectures, and Autonomous Agent workflows. Crafting intelligent systems and mastering modern computational algorithms."
    }
];


/* ─── SOCIAL LINKS ─── */
const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/JD-Jaidev/", label: "GitHub" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com/in/jaidev-s/", label: "LinkedIn" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/jd._.jxidev/", label: "Instagram" },
    { icon: "fab fa-discord", href: "https://discord.com/users/1545065224598585451", label: "Discord" },
    { icon: "fab fa-x-twitter", href: "https://x.com/Jaidevs10", label: "X" }
];


// ━━━ 2. RENDER FUNCTIONS ━━━

/* ── Render Squishy Nav ── */
function renderNav(items) {
    return items.map((i, index) =>
        `<li><a href="${i.href}" data-index="${index}" class="nav-link squishy-hover">${i.label}</a></li>`
    ).join("");
}


/* ── Render Skill Marquee Item (Glowing on hover) ── */
function createSkillPill(skill) {
    let iconHtml = '';
    if (skill.iconClass) {
        iconHtml = `<i class="${skill.iconClass}"></i>`;
    } else if (skill.iconType === 'svg') {
        iconHtml = skill.svg;
    } else if (skill.iconType === 'emoji') {
        iconHtml = `<span style="font-size: 1.25rem;">${skill.emoji}</span>`;
    }

    return `
        <div class="skill-pill" style="--brand-color: ${skill.color}; --brand-glow: ${skill.glow};">
            <span class="skill-pill-icon">${iconHtml}</span>
            <span class="skill-pill-text">${skill.name}</span>
        </div>
    `;
}


/* ── Populate Infinite Marquee Rows ── */
function setupMarquee() {
    const track1 = document.getElementById("marquee-track-1");
    const track2 = document.getElementById("marquee-track-2");
    if (!track1 || !track2) return;

    // Duplicate list 3 times for a completely seamless, stutter-free loop
    const row1Html = [...techSkillsRow1, ...techSkillsRow1, ...techSkillsRow1]
        .map(createSkillPill)
        .join("");

    const row2Html = [...techSkillsRow2, ...techSkillsRow2, ...techSkillsRow2]
        .map(createSkillPill)
        .join("");

    track1.innerHTML = row1Html;
    track2.innerHTML = row2Html;
}

/* ── Render Core Competencies ── */
function renderCompetencies(items) {
    return items.map(s => `
        <div class="skill-card group">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm text-[#38bdf8] group-hover:scale-110 group-hover:text-white group-hover:bg-purple-600/30 transition-all">
                        <i class="${s.icon}"></i>
                    </div>
                    <span class="text-white font-semibold text-sm sm:text-base">${s.name}</span>
                </div>
                <span class="text-[#c084fc] text-sm font-bold">${s.level}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill bg-gradient-to-r ${s.color}" data-level="${s.level}"></div>
            </div>
        </div>
    `).join("");
}

/* ── Render Project Filters ── */
let currentCategory = "All";

function renderProjectFilters() {
    const container = document.getElementById("project-filters");
    if (!container) return;
    container.innerHTML = projectCategories.map(cat => `
        <button class="filter-btn ${cat === currentCategory ? 'active' : ''} squishy-hover" data-category="${cat}">
            ${cat}
        </button>
    `).join("");
}

/* ── Render Projects Grid ── */
function renderProjects(items) {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    const filtered = currentCategory === "All" 
        ? items 
        : items.filter(p => p.category === currentCategory);

    container.innerHTML = filtered.map(p => `
        <div class="project-card group" data-tilt>
            <div class="project-img-wrapper">
                <img src="${p.img}" alt="${p.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="flex flex-wrap gap-1.5">
                        ${p.tags.map(t => `<span class="tag-badge">${t}</span>`).join("")}
                    </div>
                </div>
            </div>

            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">${p.title}</h3>
                    <p class="text-[#94a3b8] text-sm leading-relaxed">${p.desc}</p>
                </div>

                <div class="pt-6 mt-4 border-t border-white/5 flex items-center justify-between gap-3">
                    <a href="${p.link}" target="_blank" rel="noopener noreferrer"
                        class="project-btn project-btn-details squishy-hover">
                        <span>Code Repo</span>
                        <i class="fab fa-github text-xs"></i>
                    </a>
                    ${p.siteLink ? `
                        <a href="${p.siteLink}" target="_blank" rel="noopener noreferrer"
                            class="project-btn project-btn-live squishy-hover">
                            <span>Live App</span>
                            <i class="fas fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    ` : ""}
                </div>
            </div>
        </div>
    `).join("");

    // Reattach 3D tilt
    initTiltEffect();
}

/* ── Render Journey ── */
function renderJourney(items) {
    return items.map(j => `
        <div class="journey-card group">
            <div class="flex items-start justify-between mb-6">
                <div class="journey-icon-box">
                    <i class="${j.icon}"></i>
                </div>
                <span class="px-3.5 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border ${j.badgeColor}">
                    ${j.duration}
                </span>
            </div>
            <span class="text-[#94a3b8] text-xs font-bold uppercase tracking-widest block mb-1">${j.type}</span>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">${j.institution}</h3>
            <p class="text-[#38bdf8] font-medium text-sm mb-4">${j.board}</p>
            <p class="text-[#94a3b8] text-sm leading-relaxed">${j.details}</p>
        </div>
    `).join("");
}

/* ── Render Social Footer ── */
function renderSocial(items) {
    return items.map(s => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" 
           class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#06b6d4] hover:border-transparent hover:scale-110 transition-all duration-300" 
           aria-label="${s.label}">
            <i class="${s.icon}"></i>
        </a>
    `).join("");
}

// ━━━ 3. SQUISHY NAVBAR INDICATOR PHYSICS ━━━

function initSquishyNavbar() {
    const navWrapper = document.querySelector(".nav-wrapper");
    const indicator = document.getElementById("nav-indicator");
    const navLinks = document.querySelectorAll("#nav-list .nav-link");
    const header = document.getElementById("main-header");

    if (!indicator || !navLinks.length) return;

    let activeLink = navLinks[0];

    function moveIndicatorTo(link) {
        if (!link) return;
        const linkRect = link.getBoundingClientRect();
        const wrapperRect = navWrapper.getBoundingClientRect();

        const offsetLeft = linkRect.left - wrapperRect.left;
        const width = linkRect.width;

        indicator.style.left = `${offsetLeft}px`;
        indicator.style.width = `${width}px`;
        indicator.classList.add("active");

        // Update active class on nav links for glowing under-dot
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    }

    // Set initial position
    setTimeout(() => {
        moveIndicatorTo(activeLink);
    }, 150);

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            moveIndicatorTo(link);
        });

        link.addEventListener("click", () => {
            activeLink = link;
            moveIndicatorTo(link);
        });
    });

    if (navWrapper) {
        navWrapper.addEventListener("mouseleave", () => {
            moveIndicatorTo(activeLink);
        });
    }

    // Smooth section tracking on scroll
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Toggle header scrolled styling
                if (window.scrollY > 40) {
                    header.classList.add("scrolled");
                } else {
                    header.classList.remove("scrolled");
                }

                // Detect section in view
                const sections = document.querySelectorAll("section[id]");
                let currentSectionId = "";

                sections.forEach(sec => {
                    const rect = sec.getBoundingClientRect();
                    if (rect.top <= 240 && rect.bottom >= 240) {
                        currentSectionId = sec.getAttribute("id");
                    }
                });

                if (currentSectionId) {
                    const matchingLink = document.querySelector(`#nav-list a[href="#${currentSectionId}"]`);
                    if (matchingLink && matchingLink !== activeLink) {
                        activeLink = matchingLink;
                        moveIndicatorTo(activeLink);
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ━━━ 4. INTERACTIVE MOUSE SPOTLIGHT (AURORA FOLLOWER) ━━━

function initMouseSpotlight() {
    const spotlight = document.getElementById("mouse-spotlight");
    if (!spotlight) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    }, { passive: true });

    function animateSpotlight() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        spotlight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
        requestAnimationFrame(animateSpotlight);
    }
    animateSpotlight();
}

// ━━━ 5. 3D TILT EFFECT ON CARDS & PROFILE ━━━

function initTiltEffect() {
    // Project cards 3D tilt
    const tiltCards = document.querySelectorAll("[data-tilt]");
    tiltCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });

    // Profile photo & orbits 3D holographic tilt on hover
    const profileContainer = document.getElementById("hero-profile-container");
    if (profileContainer) {
        const profileCircle = profileContainer.querySelector(".profile-circle");
        profileContainer.addEventListener("mousemove", (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            if (profileCircle) {
                profileCircle.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }
        });

        profileContainer.addEventListener("mouseleave", () => {
            if (profileCircle) {
                profileCircle.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
            }
        });
    }
}

// ━━━ 6. ANIMATE PROGRESS BARS ON SCROLL ━━━

function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar-fill');
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !bar.dataset.animated) {
            bar.dataset.animated = "true";
            const level = bar.dataset.level;
            setTimeout(() => { bar.style.width = level + "%"; }, 150);
        }
    });
}


// ━━━ 7. BACK TO TOP BUTTON ━━━

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});


// ━━━ 8. MOUNT AND EVENT LISTENERS ━━━

document.addEventListener("DOMContentLoaded", () => {
    // Nav
    document.getElementById("nav-list").innerHTML = renderNav(navItems);
    document.getElementById("mobile-nav-list").innerHTML = renderNav(navItems);

    // Setup Moving Marquee Ticker
    setupMarquee();

    // Core Skills & Projects
    document.getElementById("skills-grid").innerHTML = renderCompetencies(coreCompetencies);
    renderProjectFilters();
    renderProjects(projects);

    // Journey & Social
    document.getElementById("journey-grid").innerHTML = renderJourney(journeyData);
    document.getElementById("footer-social").innerHTML = renderSocial(socialLinks);

    // Interactive Engine
    initSquishyNavbar();
    initMouseSpotlight();
    initTiltEffect();

    window.addEventListener('scroll', animateProgressBars);
    animateProgressBars();

    // Event Delegation: Filters & Smooth Scroll
    document.addEventListener("click", function (e) {
        // Project Filter Buttons
        const filterBtn = e.target.closest(".filter-btn");
        if (filterBtn) {
            e.preventDefault();
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            filterBtn.classList.add("active");
            currentCategory = filterBtn.dataset.category;
            renderProjects(projects);
            return;
        }

        // Smooth scroll for anchor links
        const link = e.target.closest("a[href^='#']");
        if (link) {
            const href = link.getAttribute("href");
            if (href === "#") return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                // Close mobile menu if open
                const mobileMenu = document.getElementById("mobile-menu");
                if (mobileMenu) mobileMenu.classList.remove("active");
            }
        }

        // Mobile menu toggle
        const menuBtn = e.target.closest("#mobile-menu-btn");
        if (menuBtn) {
            e.preventDefault();
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu.classList.toggle("active");
        }
    });

    // Contact Form Handling (retraining existing Google Apps Script endpoint)
    const contactForm = document.getElementById("contact-form");
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyAoMHgn1PZ3oeGgLQCKaLz-cS05PTm-WOcUiOFuTmtTHzzOMJdL5eKyi-dmvPR6ESQBA/exec";

    if (contactForm) {
        contactForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const submitBtn = form.querySelector("button[type='submit']");
            const originalContent = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Transmitting...';
            submitBtn.disabled = true;

            try {
                await fetch(SCRIPT_URL, {
                    method: "POST",
                    body: formData,
                    mode: "no-cors"
                });

                form.reset();
                const successMsg = document.getElementById("form-success");
                successMsg.classList.remove("hidden");

                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Sent Successfully!';
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                    successMsg.classList.add("hidden");
                }, 4000);
            } catch (error) {
                console.error("Submission failed:", error);
                submitBtn.innerHTML = '<i class="fas fa-triangle-exclamation mr-2"></i> Delivery Error';
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
    }
});
