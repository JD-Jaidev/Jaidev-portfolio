// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// JAIDEV S - CREATIVE INTERACTIVE PORTFOLIO ENGINE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━━ 1. DATA LAYER ━━━

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Resume", href: "#resume" },
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
    { name: "Python & Data Science (NumPy/Pandas)", level: 64, category: "beige", icon: "devicon-python-plain" },
    { name: "Machine Learning (SciKit-Learn)", level: 28, category: "brown", icon: "fas fa-brain" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: 20, category: "green", icon: "fas fa-network-wired" },
    { name: "LLMs, RAG & LangChain", level: 82, category: "brown", icon: "fas fa-robot" },
    { name: "NLP & Computer Vision (OpenCV)", level: 27, category: "green", icon: "fas fa-eye" },
    { name: "Web Development (HTML5, CSS3, JS)", level: 56, category: "beige", icon: "devicon-javascript-plain" },
    { name: "C++ Programming", level: 35, category: "green", icon: "devicon-cplusplus-plain" },
    { name: "Computer Networks & Operating Systems", level: 20, category: "brown", icon: "fas fa-network-wired" },
    { name: "Databases & DBMS (MySQL)", level: 43, category: "brown", icon: "devicon-mysql-original" },
    { name: "Version Control & Git/GitHub", level: 83, category: "beige", icon: "devicon-git-plain" },
    { name: "Workflow Automations (Zapier)", level: 23, category: "green", icon: "fas fa-bolt" },
    { name: "PC Building", level: 93, category: "beige", icon: "fas fa-laptop-code" }
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
        title: "Task Orchestrator & To-Do Suite",
        category: "Web Apps",
        desc: "Fluid, responsive task management application with real-time state tracking, persistent local storage, interactive task categorization, and smooth micro-animations.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        img: "assets/TODO.png",
        link: "https://github.com/JD-Jaidev/TO-DO-LIST",
        siteLink: "https://todo-list-athera.vercel.app/"
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
        title: "Fraud Flagger",
        category: "FinTech",
        desc: "A predictive analytics platform that leverages advanced statistical modeling and machine learning algorithms to identify and flag fraudulent financial transactions with high accuracy.",
        tags: ["Python", "FinTech", "Streamlit"],
        img: "assets/FRAUD-FLAGGER.png",
        link: "https://github.com/Nitin-VR/Fraud-Flagger",
        siteLink: "https://fraud-flagger.streamlit.app/"
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
        color: "hover:border-[#2D4354] hover:shadow-black/50",
        badgeColor: "bg-[#534145] text-[#FED7A5] border-[#FED7A5]/30",
        details: "Built a solid academic foundation focusing closely on Higher Mathematics, Physics, and foundational Computer Science principles."
    },
    {
        type: "Undergraduate Degree",
        institution: "Chennai Institute of Technology",
        board: "B.E. Computer Science Engineering (AI/ML Specialization)",
        duration: "Incoming / Active",
        icon: "fas fa-user-graduate",
        color: "hover:border-[#9E6752] hover:shadow-black/50",
        badgeColor: "bg-[#9E6752]/20 text-[#FED7A5] border-[#9E6752]/40",
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
    const themeStyles = {
        beige: {
            fillClass: "progress-beige",
            badgeClass: "bg-[#FED7A5]/15 border-[#FED7A5]/35 text-[#FED7A5] group-hover:bg-[#FED7A5] group-hover:text-[#20212B]",
            percentColor: "text-[#FED7A5]"
        },
        brown: {
            fillClass: "progress-brown",
            badgeClass: "bg-[#C46645]/20 border-[#E98C6C]/40 text-[#E98C6C] group-hover:bg-[#E98C6C] group-hover:text-[#20212B]",
            percentColor: "text-[#E98C6C]"
        },
        green: {
            fillClass: "progress-green",
            badgeClass: "bg-[#52A665]/20 border-[#8EE29D]/40 text-[#8EE29D] group-hover:bg-[#8EE29D] group-hover:text-[#20212B]",
            percentColor: "text-[#8EE29D]"
        }
    };

    return items.map(s => {
        const theme = themeStyles[s.category] || themeStyles.beige;
        return `
        <div class="skill-card skill-theme-${s.category} group">
            <div class="flex justify-between items-center mb-3">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg border flex items-center justify-center text-sm ${theme.badgeClass} group-hover:scale-110 transition-all">
                        <i class="${s.icon}"></i>
                    </div>
                    <span class="text-white font-semibold text-sm sm:text-base">${s.name}</span>
                </div>
                <span class="${theme.percentColor} text-sm font-bold">${s.level}%</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar-fill ${theme.fillClass}" data-level="${s.level}"></div>
            </div>
        </div>
        `;
    }).join("");
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
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-[#FED7A5] transition-colors">${p.title}</h3>
                    <p class="text-[#c4c6bd] text-sm leading-relaxed">${p.desc}</p>
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
            <span class="text-[#8E9185] text-xs font-bold uppercase tracking-widest block mb-1">${j.type}</span>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-[#FED7A5] transition-all">${j.institution}</h3>
            <p class="text-[#FED7A5] font-medium text-sm mb-4">${j.board}</p>
            <p class="text-[#c4c6bd] text-sm leading-relaxed">${j.details}</p>
        </div>
    `).join("");
}

/* ── Render Social Footer ── */
function renderSocial(items) {
    return items.map(s => `
        <a href="${s.href}" target="_blank" rel="noopener noreferrer" 
           class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c4c6bd] hover:text-[#20212B] hover:bg-[#FED7A5] hover:border-transparent hover:scale-110 transition-all duration-300" 
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


// ━━━ 7. BACK TO TOP BUTTON (REACT BITS SLINGSHOT ENGINE) ━━━

const backToTop = document.getElementById("backToTop");

function setupSlingBackToTop() {
    if (!backToTop) return;

    // Scroll trigger (appears at bottom-right when scrolled)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    const root = backToTop;
    const pad = root.querySelector(".sling-button__pad");
    const padMove = root.querySelector(".sling-button__move");
    const band = root.querySelector(".sling-button__band");
    const hot = root.querySelector(".sling-button__band--hot");
    const arc = root.querySelector(".sling-button__arc");
    const fx = root.querySelector(".sling-button__tension");
    const icon = root.querySelector(".sling-button__icon");
    const dots = Array.from(root.querySelectorAll(".sling-button__dot"));

    if (!pad || !padMove || !band || !hot || !arc || !fx) return;

    const size = 54;
    const strokeWidth = 3;
    const GAP = 4;
    const wellR = size / 2 + GAP + strokeWidth; // 34
    const padR = size / 2 - strokeWidth / 2; // 25.5
    const ARM = 42;
    const R = 140; // maxPull
    const launchSpeed = 2600;
    const recoil = 0.25;
    const flight = 120;
    const spread = 60;
    const SLOP = { fine: 4, coarse: 8 };

    let px = 0;
    let py = 0;
    let dir = { ux: 0, uy: -1 };
    let grip = null;
    let isArmed = false;
    let animId = null;
    let skipClick = false;
    let power = 0;

    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

    function aimIcon(ux, uy, dist) {
        if (!icon) return;
        const angle = (Math.atan2(-uy, -ux) * 180) / Math.PI + 90;
        icon.style.transition = "none";
        icon.style.transform = `rotate(${angle * clamp(dist / 12, 0, 1)}deg)`;
    }

    function relaxIcon() {
        if (!icon) return;
        icon.style.transition = "transform 360ms cubic-bezier(0.23, 1, 0.32, 1)";
        icon.style.transform = "rotate(0deg)";
    }

    function paint() {
        const x = px;
        const y = py;
        const { ux, uy } = dir;
        const proj = x * ux + y * uy;
        const p = clamp(proj / ARM, 0, 1);
        const dist = Math.hypot(x, y);
        let d = "";
        if (dist > 0.5) {
            const a = Math.atan2(y, x);
            const b = Math.acos(clamp((wellR - padR) / dist, -1, 1));
            d = [a + b, a - b]
                .map(t => {
                    const cx = Math.cos(t);
                    const cy = Math.sin(t);
                    return `M${(wellR * cx).toFixed(2)},${(wellR * cy).toFixed(2)}L${(x + padR * cx).toFixed(2)},${(y + padR * cy).toFixed(2)}`;
                })
                .join("");
        }
        band.setAttribute("d", d);
        hot.setAttribute("d", d);
        hot.style.opacity = String(p);
        fx.style.opacity = String(clamp(proj / 6, 0, 1));
        arc.setAttribute("stroke-dasharray", `${p} ${1 - p}`);
        arc.setAttribute("stroke-dashoffset", String(p / 2));
        arc.style.opacity = p > 0.01 ? "1" : "0";
        if (grip) aimIcon(ux, uy, dist);
        arc.setAttribute("transform", `rotate(${(Math.atan2(-uy, -ux) * 180) / Math.PI})`);
        padMove.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
    }

    function launchDot() {
        relaxIcon();
        const { ux, uy } = dir;
        const base = Math.atan2(-uy, -ux);
        const cone = (spread * Math.PI) / 180;
        const push = 0.85 + 0.35 * power;
        dots.forEach((dot, i) => {
            if (!dot) return;
            const lead = i === 0;
            const angle = base + (lead ? 0 : (Math.random() + Math.random() - 1) * (cone / 2));
            const cx = Math.cos(angle);
            const cy = Math.sin(angle);
            const reach = (lead ? flight : flight * (0.3 + Math.random())) * push;
            const drift = lead ? 0 : (Math.random() - 0.5) * flight * 0.4;
            const scale = lead ? 1 : 0.3 + Math.random() * 0.6;
            const shrink = lead ? 0.6 : scale * (0.2 + Math.random() * 0.4);
            const duration = lead ? 320 : 320 * (0.7 + Math.random());
            const delay = lead ? 0 : Math.random() * 70;
            const to = wellR + reach;
            dot.animate(
                [
                    { transform: `translate(${cx * wellR}px, ${cy * wellR}px) scale(${scale})` },
                    { transform: `translate(${cx * to - cy * drift}px, ${cy * to + cx * drift}px) scale(${shrink})` }
                ],
                { duration, delay, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "none" }
            );
            dot.animate(
                [
                    { opacity: 1, offset: 0 },
                    { opacity: 1, offset: 0.55 },
                    { opacity: 0, offset: 1 }
                ],
                { duration, delay, easing: "linear", fill: "none" }
            );
        });
    }

    function sendToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        root.setAttribute("data-sent", "");
        setTimeout(() => root.removeAttribute("data-sent"), 350);
    }

    function settle(v0) {
        let curX = px;
        let curY = py;
        let vx = v0.x;
        let vy = v0.y;
        const stiffness = 260;
        const damping = 22 * (1 - recoil * 0.4);
        let lastTime = performance.now();

        cancelAnimationFrame(animId);
        function step(now) {
            const dt = Math.min((now - lastTime) / 1000, 0.032);
            lastTime = now;
            const ax = -stiffness * curX - damping * vx;
            const ay = -stiffness * curY - damping * vy;
            vx += ax * dt;
            vy += ay * dt;
            curX += vx * dt;
            curY += vy * dt;
            px = curX;
            py = curY;
            paint();
            if (Math.hypot(curX, curY) < 0.25 && Math.hypot(vx, vy) < 3) {
                px = 0;
                py = 0;
                paint();
                relaxIcon();
                return;
            }
            animId = requestAnimationFrame(step);
        }
        animId = requestAnimationFrame(step);
    }

    function onPointerDown(e) {
        if (grip || e.button !== 0) return;
        const rect = root.getBoundingClientRect();
        const scale = rect.width / (root.offsetWidth || rect.width) || 1;
        cancelAnimationFrame(animId);
        const dNow = Math.hypot(px, py);
        const dClamped = Math.min(dNow, 0.95 * R);
        const rawNow = dNow > 0.5 ? (R * dClamped) / (R - dClamped) : 0;
        grip = {
            id: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            scale,
            moved: false,
            hist: [],
            rawOrigin: dNow > 0.5 ? { x: (rawNow * px) / dNow, y: (rawNow * py) / dNow } : { x: 0, y: 0 },
            slop: e.pointerType === "touch" ? SLOP.coarse : SLOP.fine
        };
        try {
            pad.setPointerCapture(e.pointerId);
        } catch {}
        pad.setAttribute("data-held", "");
    }

    function onPointerMove(e) {
        if (!grip || grip.id !== e.pointerId) return;
        const dx = (e.clientX - grip.startX) / grip.scale;
        const dy = (e.clientY - grip.startY) / grip.scale;
        let rx = grip.rawOrigin.x + dx;
        let ry = grip.rawOrigin.y + dy;
        if (!grip.moved && Math.hypot(dx, dy) > grip.slop) grip.moved = true;
        const raw = Math.hypot(rx, ry);
        if (raw < 0.01) return;
        const d = (R * raw) / (R + raw);
        const ux = rx / raw;
        const uy = ry / raw;
        dir = { ux, uy };
        px = d * ux;
        py = d * uy;
        const t = performance.now();
        grip.hist.push({ x: px, y: py, t });
        while (grip.hist.length > 4 || t - grip.hist[0].t > 80) grip.hist.shift();
        const armed = d >= ARM;
        if (armed !== isArmed) {
            isArmed = armed;
            if (armed) {
                root.setAttribute("data-armed", "");
                pad.setAttribute("data-armed", "");
            } else {
                root.removeAttribute("data-armed");
                pad.removeAttribute("data-armed");
            }
        }
        paint();
    }

    function release(pointerId, cancelled) {
        if (!grip || grip.id !== pointerId) return;
        const g = grip;
        grip = null;
        skipClick = true;
        try {
            pad.releasePointerCapture(pointerId);
        } catch {}

        const d = Math.hypot(px, py);
        const p = d / ARM;
        const { ux, uy } = dir;
        let vx = 0;
        let vy = 0;
        if (!cancelled && g.hist.length > 1) {
            const a = g.hist[0];
            const b = g.hist[g.hist.length - 1];
            const dt = b.t - a.t;
            if (dt > 0 && performance.now() - b.t < 50) {
                vx = ((b.x - a.x) / dt) * 1000;
                vy = ((b.y - a.y) / dt) * 1000;
            }
        }
        const fm = Math.hypot(vx, vy);
        if (fm > 3000) {
            vx *= 3000 / fm;
            vy *= 3000 / fm;
        }

        if (!g.moved) {
            relaxIcon();
            if (!cancelled) {
                sendToTop();
                launchDot();
            }
        } else {
            const fire = isArmed && !cancelled;
            const launch = fire ? launchSpeed * Math.min(p, 1.5) : 0.5 * launchSpeed * Math.min(p, 1);
            let v0x = vx - ux * launch;
            let v0y = vy - uy * launch;
            const m = Math.hypot(v0x, v0y);
            if (m > 6000) {
                v0x *= 6000 / m;
                v0y *= 6000 / m;
            }
            if (!fire) relaxIcon();
            if (fire) {
                sendToTop();
                power = clamp((Math.min(p, 1.5) - 1) / 0.5, 0, 1);
                setTimeout(launchDot, 120);
            }
            settle({ x: v0x, y: v0y });
        }

        isArmed = false;
        root.removeAttribute("data-armed");
        pad.removeAttribute("data-armed");
        pad.removeAttribute("data-held");
    }

    pad.addEventListener("pointerdown", onPointerDown);
    pad.addEventListener("pointermove", onPointerMove);
    pad.addEventListener("pointerup", e => release(e.pointerId, false));
    pad.addEventListener("pointercancel", e => release(e.pointerId, true));
    pad.addEventListener("lostpointercapture", e => release(e.pointerId, true));
    pad.addEventListener("keydown", e => {
        if (e.key === "Escape" && grip) release(grip.id, true);
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            sendToTop();
            launchDot();
        }
    });
    pad.addEventListener("click", () => {
        if (skipClick) {
            skipClick = false;
            return;
        }
        sendToTop();
        launchDot();
    });

    paint();
}


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
    setupSlingBackToTop();

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

    // Resume Document Actions & Preview Toggle
    const previewToggleBtn = document.getElementById("resume-preview-toggle-btn");
    const teaserPreviewBtn = document.getElementById("resume-teaser-preview-btn");
    const closePreviewBtn = document.getElementById("resume-close-preview-btn");
    const previewContainer = document.getElementById("resume-preview-container");
    const teaserCard = document.getElementById("resume-teaser-card");
    const resumeFrame = document.getElementById("resume-frame");
    const previewBtnText = document.getElementById("preview-btn-text");
    const previewBtnIcon = document.getElementById("preview-btn-icon");

    function openResumePreview() {
        if (!previewContainer) return;
        
        // Lazy-load PDF source on demand
        if (resumeFrame && (!resumeFrame.src || resumeFrame.src === "about:blank" || !resumeFrame.getAttribute("src"))) {
            const targetSrc = resumeFrame.dataset.src || "assets/Jaidev-S-Resume.pdf#view=FitH";
            resumeFrame.src = targetSrc;
        }

        previewContainer.classList.remove("hidden");
        if (teaserCard) teaserCard.classList.add("hidden");
        
        if (previewBtnText) previewBtnText.textContent = "Close Preview";
        if (previewBtnIcon) {
            previewBtnIcon.className = "fas fa-eye-slash mr-2";
        }
        if (previewToggleBtn) {
            previewToggleBtn.classList.add("active-preview");
        }

        // Smooth scroll to preview station
        setTimeout(() => {
            previewContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 120);
    }

    function closeResumePreview() {
        if (!previewContainer) return;
        previewContainer.classList.add("hidden");
        if (teaserCard) teaserCard.classList.remove("hidden");

        if (previewBtnText) previewBtnText.textContent = "Preview Resume";
        if (previewBtnIcon) {
            previewBtnIcon.className = "fas fa-eye mr-2";
        }
        if (previewToggleBtn) {
            previewToggleBtn.classList.remove("active-preview");
        }
    }

    function toggleResumePreview() {
        if (previewContainer && previewContainer.classList.contains("hidden")) {
            openResumePreview();
        } else {
            closeResumePreview();
        }
    }

    if (previewToggleBtn) {
        previewToggleBtn.addEventListener("click", toggleResumePreview);
    }
    if (teaserPreviewBtn) {
        teaserPreviewBtn.addEventListener("click", openResumePreview);
    }
    if (closePreviewBtn) {
        closePreviewBtn.addEventListener("click", closeResumePreview);
    }

    const resumePrintBtn = document.getElementById("resume-print-btn");
    if (resumePrintBtn) {
        resumePrintBtn.addEventListener("click", () => {
            // If preview isn't open, open it first
            if (previewContainer && previewContainer.classList.contains("hidden")) {
                openResumePreview();
            }
            const frame = document.getElementById("resume-frame");
            if (frame && frame.contentWindow) {
                try {
                    frame.contentWindow.focus();
                    frame.contentWindow.print();
                } catch (e) {
                    window.open("assets/Jaidev-S-Resume.pdf", "_blank");
                }
            } else {
                window.open("assets/Jaidev-S-Resume.pdf", "_blank");
            }
        });
    }
});