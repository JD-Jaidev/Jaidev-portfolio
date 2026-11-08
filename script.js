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
        title: "TeamForge",
        category: "AI & ML",
        desc: "TeamForge is an AI-powered student collaboration platform that helps students discover teammates, match complementary skills, form project teams, and collaborate through intelligent matching in a unified workspace.",
        tags: ["HTML, CSS, JS", "Python", "PostgreSQL", "Supabase"],
        img: "assets/TEAMFORGE.png",
        link: "https://github.com/JD-Jaidev/TeamForgeProject",
        siteLink: "https://team-forge-project.vercel.app/"
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
        title: "AI Playground",
        category: "AI & ML",
        desc: "A centralized platform bringing multiple AI projects into a unified interactive portal, allowing users to switch models and explore diverse AI-powered features with seamless execution.",
        tags: ["HTML", "CSS", "JavaScript", "Vercel"],
        img: "assets/AI-PLAYGROUND.png",
        link: "https://github.com/JD-Jaidev/AI-PLAYGROUND",
        siteLink: null
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
        type: "Schooling & STEM Foundations",
        institution: "Ebenezer Marcus International School",
        board: "CBSE Curriculum (Class 12th)",
        duration: "Completed",
        icon: "fas fa-school",
        color: "hover:border-[#2D4354] hover:shadow-black/50",
        badgeColor: "bg-[#534145] text-[#FED7A5] border-[#FED7A5]/30",
        details: "Built a solid academic foundation focusing closely on Higher Mathematics, Physics, and foundational Computer Science principles.",
        tags: ["Higher Mathematics", "Physics", "Computer Science", "CBSE Class 12"]
    },
    {
        type: "Undergraduate Degree",
        institution: "Chennai Institute of Technology",
        board: "B.E. Computer Science Engineering (AI/ML Specialization)",
        duration: "2026–2030 / Active",
        icon: "fas fa-user-graduate",
        color: "hover:border-[#9E6752] hover:shadow-black/50",
        badgeColor: "bg-[#9E6752]/20 text-[#FED7A5] border-[#9E6752]/40",
        details: "Actively specializing in Artificial Intelligence, Deep Learning architectures, and Autonomous Agent workflows. Crafting intelligent systems and mastering modern computational algorithms.",
        tags: ["B.E. CSE", "AIML Specialization", "Data Structures", "Algorithms"]
    },
    {
        type: "Specialization & Systems",
        institution: "Applied AI, Machine Learning & RAG",
        board: "Autonomous Systems & Intelligent Workflows",
        duration: "Active Focus",
        icon: "fas fa-brain",
        color: "hover:border-[#2D4354] hover:shadow-black/50",
        badgeColor: "bg-[#2D4354]/40 text-[#FED7A5] border-[#2D4354]/50",
        details: "Deepening expertise in LangChain orchestration, Retrieval-Augmented Generation, vector embeddings, multi-model chatbots, and automated AI workflow pipelines.",
        tags: ["LangChain", "Vector DBs", "RAG Pipelines", "LLM APIs"]
    },
    {
        type: "Initiatives & Tech Community",
        institution: "FinTech CoE & Developer Groups",
        board: "AI Innovation & Community Collaboration",
        duration: "Ongoing",
        icon: "fas fa-laptop-code",
        color: "hover:border-[#FED7A5] hover:shadow-black/50",
        badgeColor: "bg-[#534145] text-[#FED7A5] border-[#FED7A5]/30",
        details: "Developing intelligent FinTech solutions like Fraud Flagger, participating in hackathons, and contributing to tech clubs including Google Developer Groups.",
        tags: ["FinTech CoE", "GDG", "AI Innovation", "Open Source"]
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

    return items.map((s, index) => {
        const theme = themeStyles[s.category] || themeStyles.beige;
        return `
        <div class="skill-card skill-theme-${s.category} group" id="skill-card-${index}" data-skill-index="${index}">
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

/* ── Render Journey (React Bits ScrollStack) ── */
function renderJourney(items, settings = {}) {
    const itemDistance = settings.itemDistance ?? 140;
    const itemStackDistance = settings.itemStackDistance ?? 24;
    const stackPosition = settings.stackPosition ?? (typeof window !== 'undefined' && window.innerWidth < 640 ? 85 : 115);
    const toLength = val => (typeof val === 'number' ? `${val}px` : val);

    let html = '';
    items.forEach((j, index) => {
        const gap = itemDistance - (items.length - index) * itemStackDistance;
        if (index > 0) {
            html += `<div aria-hidden="true" style="height: ${Math.max(0, gap)}px; margin-top: ${Math.min(0, gap)}px;"></div>`;
        }

        const topStyle = `calc(${toLength(stackPosition)} + ${index * itemStackDistance}px)`;
        const marginBottom = (items.length - 1 - index) * itemStackDistance;
        const zIndex = index + 1;

        html += `
            <div data-stack-slot="" class="scroll-stack__slot" style="top: ${topStyle}; margin-bottom: ${marginBottom}px; z-index: ${zIndex};">
                <div class="scroll-stack-card journey-card group ${j.color || ''}" data-card-index="${index}">
                    <div class="flex items-start justify-between mb-4">
                        <div class="journey-icon-box">
                            <i class="${j.icon}"></i>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="journey-step-badge">Milestone 0${index + 1}</span>
                            <span class="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border ${j.badgeColor}">
                                ${j.duration}
                            </span>
                        </div>
                    </div>
                    <span class="text-[#8E9185] text-xs font-bold uppercase tracking-widest block mb-1">${j.type}</span>
                    <h3 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#FED7A5] transition-all">${j.institution}</h3>
                    <p class="text-[#FED7A5] font-medium text-xs sm:text-sm mb-3">${j.board}</p>
                    <p class="text-[#c4c6bd] text-xs sm:text-sm leading-relaxed mb-4">${j.details}</p>
                    ${j.tags ? `
                        <div class="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                            ${j.tags.map(tag => `<span class="journey-tag"><i class="fas fa-check text-[10px] text-[#FED7A5]"></i> ${tag}</span>`).join('')}
                        </div>
                    ` : ''}
                    <span class="scroll-stack-card__shade" aria-hidden="true"></span>
                </div>
            </div>
        `;
    });

    html += `<div class="scroll-stack__end" aria-hidden="true"></div>`;
    return html;
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
        const currentActive = document.querySelector("#nav-list .nav-link.active") || navLinks[0];
        activeLink = currentActive;
        moveIndicatorTo(activeLink);
    }, 150);

    // Only move bubble on selection (click) - hover shows underline only
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            activeLink = link;
            moveIndicatorTo(link);
        });
    });

    // Window resize: re-position bubble on active link
    window.addEventListener("resize", () => {
        if (activeLink) {
            moveIndicatorTo(activeLink);
        }
    });

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


// ━━━ 7.5 SCROLL STACK ENGINE (REACT BITS) ━━━

function initScrollStack(root, options = {}) {
    if (!root) return;

    const inner = root.querySelector(".scroll-stack__inner");
    const end = root.querySelector(".scroll-stack__end");
    if (!inner || !end) return;

    const settings = {
        itemDistance: options.itemDistance ?? 100,
        itemStackDistance: options.itemStackDistance ?? 24,
        stackPosition: options.stackPosition ?? "6%",
        itemScale: options.itemScale ?? 0.05,
        baseScale: options.baseScale ?? 0.85,
        dimAmount: options.dimAmount ?? 0.22,
        blurAmount: options.blurAmount ?? 0,
        tiltAmount: options.tiltAmount ?? 3.5,
        rotationAmount: options.rotationAmount ?? 1.2,
        holdDistance: options.holdDistance ?? 160,
        smoothScroll: options.smoothScroll ?? true,
        snap: options.snap ?? true,
        useWindowScroll: options.useWindowScroll ?? false,
        onStackComplete: options.onStackComplete
    };

    const windowed = settings.useWindowScroll;
    const target = windowed ? window : root;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cache = new Map();
    let frame = 0;
    let glide = 0;
    let rest = 0;
    let complete = false;
    let gliding = false;
    let pressed = false;
    let current = 0;
    let goal = 0;
    let written = 0;
    let last = 0;
    let points = [];
    let reach = 0;

    const resolveOffset = (value, size) => {
        if (typeof value === "number") return value;
        const text = String(value).trim();
        if (text.endsWith("%")) return (parseFloat(text) / 100) * size;
        return parseFloat(text) || 0;
    };

    const scrollsInside = (node, stop, delta) => {
        for (let element = node; element && element !== stop; element = element.parentElement) {
            if (element.scrollHeight <= element.clientHeight + 1) continue;
            const overflow = getComputedStyle(element).overflowY;
            if (overflow !== "auto" && overflow !== "scroll") continue;
            if (delta > 0 ? element.scrollTop + element.clientHeight < element.scrollHeight - 1 : element.scrollTop > 0) {
                return true;
            }
        }
        return false;
    };

    const readScroll = () => (windowed ? window.scrollY : root.scrollTop);
    const maxScroll = () =>
        windowed ? document.documentElement.scrollHeight - window.innerHeight : root.scrollHeight - root.clientHeight;

    const writeScroll = value => {
        written = value;
        target.scrollTo({ top: value, behavior: "instant" });
    };

    const write = (key, value, apply) => {
        if (cache.get(key) === value) return false;
        cache.set(key, value);
        apply(value);
        return true;
    };

    const update = () => {
        frame = 0;
        const slots = Array.from(inner.children).filter(child => child.hasAttribute("data-stack-slot"));
        if (!slots.length) return;

        const viewHeight = windowed ? window.innerHeight : root.clientHeight;
        const viewTop = windowed ? 0 : root.getBoundingClientRect().top + root.clientTop;
        const stackTop = resolveOffset(settings.stackPosition, viewHeight);
        const offset = settings.itemStackDistance;
        const heights = slots.map(slot => slot.offsetHeight);
        const tops = slots.map(slot => slot.getBoundingClientRect().top);
        const lastPin = stackTop + (slots.length - 1) * offset;
        const padTop = windowed ? 0 : stackTop;
        const endHeight =
            settings.holdDistance + (windowed ? 0 : Math.max(0, viewHeight - lastPin - (heights[heights.length - 1] || 0)));

        let moved = write("padTop", padTop, value => {
            inner.style.paddingTop = `${value}px`;
        });
        moved =
            write("endHeight", endHeight, value => {
                end.style.height = `${value}px`;
            }) || moved;

        let flow = inner.getBoundingClientRect().top - viewTop + readScroll() + padTop;
        points = heights.map((height, i) => {
            const point = flow - stackTop - i * offset;
            flow += height + settings.itemDistance;
            return point;
        });
        reach = Math.max(40, ((heights[0] || 240) + settings.itemDistance - offset) / 2);

        const depths = slots.map(() => 0);
        let lastCover = 0;
        for (let j = 1; j < slots.length; j++) {
            const pinBefore = viewTop + stackTop + (j - 1) * offset;
            const start = pinBefore + heights[j - 1];
            const span = Math.max(1, start - pinBefore - offset);
            const cover = Math.min(1, Math.max(0, (start - tops[j]) / span));
            for (let i = 0; i < j; i++) depths[i] += cover;
            lastCover = cover;
        }

        const dimStep = Math.min(Math.max(settings.dimAmount, 0), 1);
        slots.forEach((slot, i) => {
            const card = slot.firstElementChild;
            if (!card) return;
            const depth = depths[i];
            const lean = Math.min(depth, 1);
            const scale = Math.max(Math.min(settings.baseScale, 1), 1 - depth * settings.itemScale);
            const tilt = -lean * settings.tiltAmount;
            const turn = lean * settings.rotationAmount * (i % 2 ? -1 : 1);
            const blur = depth * settings.blurAmount;
            const dim = 1 - Math.pow(1 - dimStep, depth);
            const transform =
                depth < 0.0005
                    ? ""
                    : `perspective(1200px) rotateX(${tilt.toFixed(2)}deg) rotate(${turn.toFixed(2)}deg) scale(${scale.toFixed(4)})`;

            write(`transform${i}`, transform, value => {
                card.style.transform = value;
            });
            write(`filter${i}`, blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : "", value => {
                card.style.filter = value;
            });
            write(`dim${i}`, dim.toFixed(3), value => {
                card.style.setProperty("--scroll-stack-dim", value);
            });
        });

        const done = slots.length > 1 && lastCover >= 0.999;
        if (done !== complete) {
            complete = done;
            if (done) settings.onStackComplete?.();
        }

        if (moved) schedule();
    };

    const schedule = () => {
        if (!frame) frame = requestAnimationFrame(update);
    };

    const step = now => {
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (Math.abs(readScroll() - written) > 2) {
            gliding = false;
            glide = 0;
            settleSoon();
            return;
        }
        current += (goal - current) * (1 - Math.pow(0.9, dt * 60));
        if (Math.abs(goal - current) < 0.5) current = goal;
        writeScroll(current);
        if (current === goal) {
            gliding = false;
            glide = 0;
            settleSoon();
            return;
        }
        glide = requestAnimationFrame(step);
    };

    const glideTo = value => {
        goal = Math.min(Math.max(value, 0), maxScroll());
        if (motion.matches) {
            writeScroll(goal);
            return;
        }
        if (gliding) return;
        gliding = true;
        current = readScroll();
        written = current;
        last = performance.now();
        glide = requestAnimationFrame(step);
    };

    const settle = () => {
        rest = 0;
        if (!settings.snap || gliding || pressed || !points.length) return;
        const now = readScroll();
        const nearest = points.reduce((best, point) => (Math.abs(point - now) < Math.abs(best - now) ? point : best));
        const gap = Math.abs(nearest - now);
        if (gap > 1 && gap < reach) glideTo(nearest);
    };

    const settleSoon = () => {
        window.clearTimeout(rest);
        rest = window.setTimeout(settle, 140);
    };

    const onScroll = () => {
        schedule();
        if (!gliding) settleSoon();
    };

    const onWheel = event => {
        if (!settings.smoothScroll || motion.matches || event.defaultPrevented || event.ctrlKey) return;
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
        const page = windowed ? window.innerHeight : root.clientHeight;
        const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? page : 1);
        if (!delta || scrollsInside(event.target, windowed ? document.body : root, delta)) return;
        const base = gliding ? goal : readScroll();
        if ((delta < 0 && base <= 0) || (delta > 0 && base >= maxScroll() - 0.5)) return;
        event.preventDefault();
        window.clearTimeout(rest);
        glideTo(base + delta);
    };

    const onPress = () => {
        pressed = true;
        window.clearTimeout(rest);
    };

    const onRelease = () => {
        if (!pressed) return;
        pressed = false;
        settleSoon();
    };

    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    observer.observe(inner);
    target.addEventListener("scroll", onScroll, { passive: true });
    target.addEventListener("wheel", onWheel, { passive: false });
    target.addEventListener("pointerdown", onPress, { passive: true });
    window.addEventListener("pointerup", onRelease, { passive: true });
    window.addEventListener("pointercancel", onRelease, { passive: true });
    window.addEventListener("resize", schedule);

    schedule();
    update();

    return {
        update,
        glideTo,
        destroy: () => {
            cancelAnimationFrame(frame);
            cancelAnimationFrame(glide);
            window.clearTimeout(rest);
            observer.disconnect();
            target.removeEventListener("scroll", onScroll);
            target.removeEventListener("wheel", onWheel);
            target.removeEventListener("pointerdown", onPress);
            window.removeEventListener("pointerup", onRelease);
            window.removeEventListener("pointercancel", onRelease);
            window.removeEventListener("resize", schedule);
        }
    };
}


// ━━━ 8. ENTRANCE GATE - REACT BITS TEAR TICKET ENGINE ━━━

function initTearTicketGate() {
    const rootEl = document.getElementById("entrance-tear-ticket");
    const overlay = document.getElementById("ticket-gate-overlay");
    const skipBtn = document.getElementById("ticket-gate-enter-btn");
    if (!rootEl || !overlay) return;

    // Component Configuration matching React Bits TearTicket Props
    const width = 540;
    const height = 250;
    const stubSize = 135;
    const radius = 16;
    const holes = 12;
    const holeSize = 6;
    const notch = 3;
    const roughness = 0;
    const tearAngle = 30;
    const stretch = 30;
    const resistance = 0.45;
    const rotate = 3.5;
    const tilt = true;
    const tiltMax = 9;
    const tiltReach = 260;
    const parallax = 6;
    const perspective = 1000;
    const background = "#262734";
    const stubBackground = "#1f202c";
    const color = "#FFFDF9";
    const borderColor = "rgba(254, 215, 165, 0.4)";
    const borderWidth = 1.2;
    const scrim = true;
    const imageRadius = 8;
    const recenter = true;
    const orientation = "horizontal";
    const vertical = orientation === "vertical";
    const imageUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80";
    const imageAlt = "AI Digital Neural Waves";

    const TILT_SPRING = { stiffness: 220, damping: 24, mass: 0.6 };
    const GRAVITY = 2400;
    const ART_INSET = 8;
    const ART_SPAN = 0.78;
    const RETRACT = 0.17;

    const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
    const rad = deg => (deg * Math.PI) / 180;
    const wrap = a => Math.atan2(Math.sin(a), Math.cos(a));
    const noise = seed => {
        let s = seed | 0;
        return () => {
            s = (s + 0x6d2b79f5) | 0;
            let t = Math.imul(s ^ (s >>> 15), 1 | s);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    };
    const f = n => n.toFixed(2);

    const buildGeometry = (W, H, S, R, holesCount, holeDiameter, notchRadius, rough, isVertical) => {
        const main = isVertical ? H : W;
        const cross = isVertical ? W : H;
        const x = main - S;
        const hr = holeDiameter / 2;
        const n = Math.max(1, Math.round(holesCount));
        const span = cross - 2 * notchRadius;
        const bridge = Math.max(2, (span - n * holeDiameter) / (n + 1));
        const random = noise(n * 7919 + Math.round(cross));
        const at = (u, v) => (isVertical ? { x: v, y: u } : { x: u, y: v });
        const pt = (u, v) => (isVertical ? `${f(v)},${f(u)}` : `${f(u)},${f(v)}`);
        const arc = (r, sweep, u, v) => `A${f(r)},${f(r)} 0 0 ${isVertical ? 1 - sweep : sweep} ${pt(u, v)}`;
        const bridges = [];
        for (let i = 0; i <= n; i += 1) {
            const y0 = notchRadius + i * (bridge + holeDiameter);
            const y1 = y0 + bridge;
            const steps = Math.max(2, Math.round(bridge / 2.2));
            const pts = [];
            for (let k = 1; k < steps; k += 1) pts.push([x + (random() - 0.5) * 2 * rough, y0 + (bridge * k) / steps]);
            bridges.push({ y0, y1, mid: (y0 + y1) / 2, pts, ...at(x, (y0 + y1) / 2) });
        }
        let body = `M${pt(R, 0)}L${pt(x - notchRadius, 0)}${arc(notchRadius, 0, x, notchRadius)}`;
        bridges.forEach((b, i) => {
            b.pts.forEach(p => {
                body += `L${pt(p[0], p[1])}`;
            });
            body += `L${pt(x, b.y1)}`;
            if (i < n) body += arc(hr, 0, x, b.y1 + holeDiameter);
        });
        body += `${arc(notchRadius, 0, x - notchRadius, cross)}L${pt(R, cross)}${arc(R, 1, 0, cross - R)}L${pt(0, R)}${arc(R, 1, R, 0)}Z`;
        let stub = `M${pt(x + notchRadius, 0)}L${pt(main - R, 0)}${arc(R, 1, main, R)}L${pt(main, cross - R)}${arc(R, 1, main - R, cross)}L${pt(x + notchRadius, cross)}${arc(notchRadius, 0, x, cross - notchRadius)}`;
        for (let i = n; i >= 0; i -= 1) {
            const b = bridges[i];
            for (let k = b.pts.length - 1; k >= 0; k -= 1) stub += `L${pt(b.pts[k][0], b.pts[k][1])}`;
            stub += `L${pt(x, b.y0)}`;
            if (i > 0) stub += arc(hr, 0, x, b.y0 - holeDiameter);
        }
        stub += `${arc(notchRadius, 0, x + notchRadius, 0)}Z`;
        const ends = [
            { ...at(x, notchRadius), v: notchRadius },
            { ...at(x, cross - notchRadius), v: cross - notchRadius }
        ];
        const bodyOutline = `M${pt(x, cross - notchRadius)}${arc(notchRadius, 0, x - notchRadius, cross)}L${pt(R, cross)}${arc(R, 1, 0, cross - R)}L${pt(0, R)}${arc(R, 1, R, 0)}L${pt(x - notchRadius, 0)}${arc(notchRadius, 0, x, notchRadius)}`;
        const stubOutline = `M${pt(x, notchRadius)}${arc(notchRadius, 0, x + notchRadius, 0)}L${pt(main - R, 0)}${arc(R, 1, main, R)}L${pt(main, cross - R)}${arc(R, 1, main - R, cross)}L${pt(x + notchRadius, cross)}${arc(notchRadius, 0, x, cross - notchRadius)}`;
        return { vertical: isVertical, cross, body, stub, bridges, ends, bodyOutline, stubOutline };
    };

    const geo = buildGeometry(width, height, stubSize, radius, holes, holeSize, notch, roughness, vertical);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Apply CSS variables
    rootEl.style.setProperty("--tt-w", `${width}px`);
    rootEl.style.setProperty("--tt-h", `${height}px`);
    rootEl.style.setProperty("--tt-stub", `${stubSize}px`);
    rootEl.style.setProperty("--tt-bg", background);
    rootEl.style.setProperty("--tt-stub-bg", stubBackground);
    rootEl.style.setProperty("--tt-ink", color);
    rootEl.style.setProperty("--tt-edge", borderColor);
    rootEl.style.setProperty("--tt-edge-w", borderWidth);
    rootEl.style.setProperty("--tt-parallax", `${parallax}px`);
    rootEl.style.setProperty("--tt-body-w", `${vertical ? width : width - stubSize}px`);
    rootEl.style.setProperty("--tt-body-h", `${vertical ? height - stubSize : height}px`);
    rootEl.style.setProperty("--tt-inset", `${ART_INSET}px`);
    rootEl.style.setProperty("--tt-span", ART_SPAN);
    rootEl.style.setProperty("--tt-art-radius", `${imageRadius}px`);

    // Render Component DOM Structure
    rootEl.innerHTML = `
        <svg class="tt-clip-defs" aria-hidden="true" style="position: absolute; width: 0; height: 0; pointer-events: none;">
            <defs>
                <clipPath id="tt-clip-body" clipPathUnits="userSpaceOnUse"><path d="${geo.body}"></path></clipPath>
                <clipPath id="tt-clip-stub" clipPathUnits="userSpaceOnUse"><path d="${geo.stub}"></path></clipPath>
            </defs>
        </svg>
        <div class="tear-ticket__stage">
            <div class="tear-ticket__plane">
                <div class="tear-ticket__piece tear-ticket__piece--body">
                    <svg class="tear-ticket__edge" viewBox="0 0 ${width} ${height}" aria-hidden="true">
                        <path d="${geo.bodyOutline}"></path>
                    </svg>
                    <div class="tear-ticket__paper" style="clip-path: path('${geo.body}');">
                        <div class="tear-ticket__art">
                            <img class="tear-ticket__image" src="${imageUrl}" alt="${imageAlt}" draggable="false">
                            ${scrim ? '<div class="tear-ticket__scrim"></div>' : ""}
                        </div>
                        <div class="tear-ticket__content">
                            <div class="tt-content-wrap">
                                <div class="tt-content-top">
                                    <div class="tt-badge">
                                        <i class="fas fa-sparkles text-[#FED7A5]"></i>
                                        <span>OFFICIAL PASS</span>
                                    </div>
                                    <span class="tt-serial">№ 2026-AI</span>
                                </div>
                                <div class="tt-content-hero">
                                    <h2 class="tt-title">JAIDEV S</h2>
                                    <p class="tt-subtitle">Aspiring AI/ML Engineer</p>
                                </div>
                                <div class="tt-content-bottom">
                                    <div class="tt-tags">
                                        <span class="tt-tag"><i class="fas fa-brain"></i> Machine Learning</span>
                                        <span class="tt-tag"><i class="fas fa-network-wired"></i> Autonomous Systems</span>
                                    </div>
                                    <div class="tt-tear-cta">
                                        <span>TEAR STUB</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <svg class="tear-ticket__fibres" aria-hidden="true"></svg>

                <div class="tear-ticket__piece tear-ticket__piece--stub"
                     role="button"
                     tabindex="0"
                     aria-label="Tear off the stub to enter portfolio">
                    <svg class="tear-ticket__edge" viewBox="0 0 ${width} ${height}" aria-hidden="true">
                        <path d="${geo.stubOutline}"></path>
                    </svg>
                    <div class="tear-ticket__paper tear-ticket__paper--stub" style="clip-path: path('${geo.stub}');">
                        <div class="tear-ticket__stub">
                            <div class="tt-stub-wrap">
                                <div class="tt-stub-header">
                                    <span class="tt-stub-admit">ADMIT ONE</span>
                                    <span class="tt-stub-name">JAIDEV S</span>
                                </div>
                                <div class="tt-stub-barcode-box">
                                    <div class="tt-barcode" aria-hidden="true">
                                        <span></span><span></span><span></span><span></span><span></span>
                                        <span></span><span></span><span></span><span></span><span></span>
                                        <span></span><span></span><span></span><span></span><span></span>
                                        <span></span><span></span><span></span><span></span><span></span>
                                        <span></span><span></span><span></span><span></span>
                                    </div>
                                    <span class="tt-barcode-num">JS-2026-PORTFOLIO</span>
                                </div>
                                <div class="tt-stub-pull-prompt">
                                    <div class="tt-pull-badge">
                                        <i class="fas fa-hand-pointer"></i>
                                        <span>PULL & TEAR</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="tear-ticket__sr" role="status"></span>
    `;

    // DOM references
    const stageRef = rootEl.querySelector(".tear-ticket__stage");
    const planeRef = rootEl.querySelector(".tear-ticket__plane");
    const bodyRef = rootEl.querySelector(".tear-ticket__piece--body");
    const stubRef = rootEl.querySelector(".tear-ticket__piece--stub");
    const artImageRef = rootEl.querySelector(".tear-ticket__image");
    const contentRef = rootEl.querySelector(".tear-ticket__content");
    const fibresSvg = rootEl.querySelector(".tear-ticket__fibres");

    // Create fibres SVG paths
    const fibres = [];
    geo.bridges.forEach((b, i) => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const p1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const p2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        g.appendChild(p1);
        g.appendChild(p2);
        fibresSvg.appendChild(g);
        fibres[i * 2] = p1;
        fibres[i * 2 + 1] = p2;
    });

    // Responsive scaling
    const updateFit = () => {
        const available = Math.min(window.innerWidth - 32, (rootEl.parentElement ? rootEl.parentElement.clientWidth : width) || width);
        const fit = Math.min(1, available / width) || 1;
        rootEl.style.setProperty("--tt-fit", fit);
        rootEl.style.width = `${width * fit}px`;
        rootEl.style.height = `${height * fit}px`;
    };
    updateFit();
    window.addEventListener("resize", updateFit);

    // Physics Simulation State
    let used = false;
    const sim = {
        raf: 0,
        last: 0,
        phase: "idle",
        id: null,
        sign: 1,
        hinge: { x: 0, y: 0 },
        hingeV: 0,
        grab: { x: 0, y: 0 },
        start: { x: 0, y: 0 },
        point: { x: 0, y: 0 },
        a0: 0,
        theta: 0,
        thetaV: 0,
        sx: 0,
        sy: 0,
        vx: 0,
        vy: 0,
        spin: 0,
        pvx: 0,
        pvy: 0,
        pt: 0,
        fade: 1,
        age: 0,
        bx: 0,
        bv: 0,
        snapped: [],
        snapAt: [],
        span: []
    };

    // 3D Spring Tilt State
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    let tiltVx = 0;
    let tiltVy = 0;
    let tiltRaf = 0;
    let lastTiltTime = performance.now();

    const depth = tiltMax > 0 ? parallax / tiltMax : 0;

    const tiltStep = now => {
        const dt = clamp((now - lastTiltTime) / 1000, 0.001, 0.034);
        lastTiltTime = now;

        const ax = ((targetTiltX - currentTiltX) * TILT_SPRING.stiffness - TILT_SPRING.damping * tiltVx) / TILT_SPRING.mass;
        tiltVx += ax * dt;
        currentTiltX += tiltVx * dt;

        const ay = ((targetTiltY - currentTiltY) * TILT_SPRING.stiffness - TILT_SPRING.damping * tiltVy) / TILT_SPRING.mass;
        tiltVy += ay * dt;
        currentTiltY += tiltVy * dt;

        planeRef.style.transform = `perspective(${perspective}px) rotate(${rotate}deg) rotateX(${currentTiltX.toFixed(2)}deg) rotateY(${currentTiltY.toFixed(2)}deg)`;
        if (artImageRef && !reduce) {
            const artX = -currentTiltY * depth;
            const artY = currentTiltX * depth;
            artImageRef.style.transform = `translate(${artX.toFixed(2)}px, ${artY.toFixed(2)}px)`;
        }
        if (contentRef && !reduce) {
            const inkX = currentTiltY * depth * 0.22;
            const inkY = -currentTiltX * depth * 0.22;
            contentRef.style.transform = `translate(${inkX.toFixed(2)}px, ${inkY.toFixed(2)}px)`;
        }

        const isMoving = Math.abs(targetTiltX - currentTiltX) > 0.01 || Math.abs(targetTiltY - currentTiltY) > 0.01 || Math.abs(tiltVx) > 0.01 || Math.abs(tiltVy) > 0.01;
        if (isMoving) {
            tiltRaf = requestAnimationFrame(tiltStep);
        } else {
            tiltRaf = 0;
        }
    };

    const runTilt = () => {
        if (tiltRaf) return;
        lastTiltTime = performance.now();
        tiltRaf = requestAnimationFrame(tiltStep);
    };

    const onPointerMoveWindow = e => {
        if (!tilt || reduce || used || e.pointerType === "touch" || sim.id !== null) return;
        const r = rootEl.getBoundingClientRect();
        const nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2 + tiltReach), -1, 1);
        const ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2 + tiltReach), -1, 1);
        targetTiltY = nx * tiltMax;
        targetTiltX = -ny * tiltMax;
        runTilt();
    };
    window.addEventListener("pointermove", onPointerMoveWindow);

    // Paint function
    const paint = now => {
        const s = sim;
        if (stubRef) {
            stubRef.style.transform = `translate(${s.sx.toFixed(2)}px, ${s.sy.toFixed(2)}px) rotate(${((s.theta * s.sign * 180) / Math.PI).toFixed(3)}deg)`;
            stubRef.style.opacity = s.fade.toFixed(3);
        }
        const up = geo.vertical;
        if (bodyRef) bodyRef.style.transform = `translate${up ? "Y" : "X"}(${s.bx.toFixed(2)}px)`;
        const cos = Math.cos(s.theta * s.sign);
        const sin = Math.sin(s.theta * s.sign);
        const lx = up ? 1.6 : 0;
        const ly = up ? 0 : 1.6;
        let busy = false;

        geo.bridges.forEach((b, i) => {
            const dx = b.x - s.hinge.x;
            const dy = b.y - s.hinge.y;
            const tx = s.hinge.x + dx * cos - dy * sin + s.sx;
            const ty = s.hinge.y + dx * sin + dy * cos + s.sy;
            const ox = b.x + (up ? 0 : s.bx);
            const oy = b.y + (up ? s.bx : 0);
            const gx = tx - ox;
            const gy = ty - oy;
            const gap = Math.hypot(gx, gy);
            const near = fibres[i * 2];
            const far = fibres[i * 2 + 1];
            if (!near || !far) return;
            const live = s.phase !== "idle" && !reduce;
            if (!s.snapped[i]) {
                if (!live || gap < 0.35) {
                    near.style.opacity = "0";
                    far.style.opacity = "0";
                    return;
                }
                const k = clamp(gap / stretch, 0, 1);
                const sag = gap * 0.18;
                const w = (1.7 - 1.15 * k).toFixed(2);
                const sx = (up ? sag : 0) + gx / 2;
                const sy = (up ? 0 : sag) + gy / 2;
                near.setAttribute("d", `M${f(ox - lx)},${f(oy - ly)}Q${f(ox - lx + sx)},${f(oy - ly + sy)} ${f(tx - lx)},${f(ty - ly)}`);
                far.setAttribute("d", `M${f(ox + lx)},${f(oy + ly)}Q${f(ox + lx + gx - sx)},${f(oy + ly + gy - sy)} ${f(tx + lx)},${f(ty + ly)}`);
                near.style.strokeWidth = w;
                far.style.strokeWidth = w;
                near.style.opacity = "1";
                far.style.opacity = "1";
                s.span[i] = gap;
                return;
            }
            const t = (now - s.snapAt[i]) / 1000 / RETRACT;
            if (!live || t >= 1 || !s.snapAt[i]) {
                near.style.opacity = "0";
                far.style.opacity = "0";
                return;
            }
            busy = true;
            const left = (1 - t) * (1 - t);
            const len = (s.span[i] || stretch) * 0.5 * left;
            const ux = gap > 0.01 ? gx / gap : 1;
            const uy = gap > 0.01 ? gy / gap : 0;
            near.setAttribute("d", `M${f(ox)},${f(oy)}L${f(ox + ux * len)},${f(oy + uy * len)}`);
            far.setAttribute("d", `M${f(tx)},${f(ty)}L${f(tx - ux * len)},${f(ty - uy * len)}`);
            near.style.strokeWidth = "0.9";
            far.style.strokeWidth = "0.9";
            near.style.opacity = left.toFixed(2);
            far.style.opacity = left.toFixed(2);
        });
        return busy;
    };

    const finish = () => {
        if (stubRef) stubRef.style.visibility = "hidden";
        used = true;
        rootEl.setAttribute("data-used", "");
        if (recenter) rootEl.setAttribute("data-shift", vertical ? "y" : "x");
        const sr = rootEl.querySelector(".tear-ticket__sr");
        if (sr) sr.textContent = "Used";

        // Trigger entrance sequence
        handleTicketTorn();
    };

    const step = now => {
        const s = sim;
        const dt = clamp((now - s.last) / 1000, 0.001, 0.034);
        s.last = now;
        const limit = rad(tearAngle);

        if (s.phase === "held") {
            const count = geo.bridges.length;
            let intact = 0;
            for (let i = 0; i < count; i += 1) if (!s.snapped[i]) intact += 1;
            const hold = count ? intact / count : 0;
            const follow = 0.92 * (1 - clamp(resistance, 0, 0.95) * hold);
            const a = Math.atan2(s.point.y - s.hinge.y, s.point.x - s.hinge.x);
            const want = clamp(wrap(a - s.a0) * s.sign * follow, 0, limit + 0.1);
            s.theta += (want - s.theta) * (1 - Math.exp(-dt / 0.035));
            const up = geo.vertical;
            const away = clamp(((up ? s.point.y - s.start.y : s.point.x - s.start.x) || 0) * 0.05, -2, 4);
            const side = clamp(((up ? s.point.x - s.start.x : s.point.y - s.start.y) || 0) * 0.05, -3, 3);
            const px = up ? side : away;
            const py = up ? away : side;
            s.sx += (px - s.sx) * (1 - Math.exp(-dt / 0.05));
            s.sy += (py - s.sy) * (1 - Math.exp(-dt / 0.05));
            const slack = Math.hypot(s.sx, s.sy);
            let left = 0;
            geo.bridges.forEach((b, i) => {
                if (s.snapped[i]) return;
                const d = Math.abs(b.mid - s.hingeV);
                if (2 * d * Math.sin(s.theta / 2) + slack > stretch || s.theta >= limit) {
                    s.snapped[i] = true;
                    s.snapAt[i] = now;
                    s.bv -= 560 / geo.bridges.length;
                } else left += 1;
            });
            if (left === 0) {
                s.phase = "free";
                s.bv -= 150;
            }
        } else if (s.phase === "free") {
            const cos = Math.cos(s.theta * s.sign);
            const sin = Math.sin(s.theta * s.sign);
            const gx = s.grab.x - s.hinge.x;
            const gy = s.grab.y - s.hinge.y;
            const wx = s.point.x - s.hinge.x - (gx * cos - gy * sin);
            const wy = s.point.y - s.hinge.y - (gx * sin + gy * cos);
            s.sx += (wx - s.sx) * (1 - Math.exp(-dt / 0.045));
            s.sy += (wy - s.sy) * (1 - Math.exp(-dt / 0.045));
            const hang = limit * 0.55 + clamp(s.pvx * 0.0009 * s.sign, -0.3, 0.3);
            s.theta += (hang - s.theta) * (1 - Math.exp(-dt / 0.12));
        } else if (s.phase === "drop") {
            s.age += dt;
            s.vy += GRAVITY * dt;
            s.sx += s.vx * dt;
            s.sy += s.vy * dt;
            s.theta += s.spin * dt;
            if (s.age > 0.16) s.fade = clamp(1 - (s.age - 0.16) / 0.42, 0, 1);
            if (s.fade <= 0) {
                s.phase = "idle";
                finish();
            }
        } else if (s.phase === "return") {
            s.thetaV += (-300 * s.theta - 24 * s.thetaV) * dt;
            s.theta += s.thetaV * dt;
            s.sx += (0 - s.sx) * (1 - Math.exp(-dt / 0.07));
            s.sy += (0 - s.sy) * (1 - Math.exp(-dt / 0.07));
            if (Math.abs(s.theta) < 0.0008 && Math.abs(s.thetaV) < 0.01 && Math.hypot(s.sx, s.sy) < 0.05) {
                s.theta = 0;
                s.thetaV = 0;
                s.sx = 0;
                s.sy = 0;
                s.phase = "idle";
            }
        }

        s.bv += (-520 * s.bx - 30 * s.bv) * dt;
        s.bx += s.bv * dt;
        const busy = paint(now);
        const moving = Math.abs(s.bx) > 0.02 || Math.abs(s.bv) > 0.5;
        if (s.phase !== "idle" || moving || busy) {
            s.raf = requestAnimationFrame(step);
        } else {
            s.bx = 0;
            s.bv = 0;
            paint(now);
            s.raf = 0;
        }
    };

    const run = () => {
        if (sim.raf) return;
        sim.last = performance.now();
        sim.raf = requestAnimationFrame(step);
    };

    const local = e => {
        const r = stageRef.getBoundingClientRect();
        const k = r.width / width || 1;
        return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k };
    };

    const tearNow = () => {
        cancelAnimationFrame(sim.raf);
        sim.raf = 0;
        sim.phase = "idle";
        rootEl.setAttribute("data-instant", "");
        finish();
    };

    const onStubDown = e => {
        if (used || e.button !== 0 || sim.id !== null || sim.phase === "drop") return;
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
        const p = local(e);
        sim.id = e.pointerId;
        sim.start = p;
        sim.point = p;
        sim.pt = performance.now();
        sim.pvx = 0;
        sim.pvy = 0;
        if (sim.theta < 0.01) {
            const far = (geo.vertical ? p.x : p.y) < geo.cross / 2;
            const end = geo.ends[far ? 1 : 0];
            sim.sign = (far ? 1 : -1) * (geo.vertical ? -1 : 1);
            sim.hinge = { x: end.x, y: end.y };
            sim.hingeV = end.v;
            if (stubRef) stubRef.style.transformOrigin = `${sim.hinge.x}px ${sim.hinge.y}px`;
        }
        const cos = Math.cos(-sim.theta * sim.sign);
        const sin = Math.sin(-sim.theta * sim.sign);
        const ux = p.x - sim.sx - sim.hinge.x;
        const uy = p.y - sim.sy - sim.hinge.y;
        sim.grab = { x: sim.hinge.x + ux * cos - uy * sin, y: sim.hinge.y + ux * sin + uy * cos };
        sim.a0 = Math.atan2(sim.grab.y - sim.hinge.y, sim.grab.x - sim.hinge.x) - (sim.theta * sim.sign) / 0.92;
        sim.phase = "held";
        sim.thetaV = 0;
        targetTiltX = 0;
        targetTiltY = 0;
        rootEl.setAttribute("data-grabbing", "");
        run();
    };

    const onStubMove = e => {
        if (sim.id !== e.pointerId) return;
        const p = local(e);
        const now = performance.now();
        const dt = Math.max(0.004, (now - sim.pt) / 1000);
        sim.pvx += ((p.x - sim.point.x) / dt - sim.pvx) * 0.35;
        sim.pvy += ((p.y - sim.point.y) / dt - sim.pvy) * 0.35;
        sim.pt = now;
        sim.point = p;
        if (reduce && Math.hypot(p.x - sim.start.x, p.y - sim.start.y) > 28) {
            sim.id = null;
            rootEl.removeAttribute("data-grabbing");
            tearNow();
        }
    };

    const onStubUp = e => {
        if (sim.id !== e.pointerId) return;
        sim.id = null;
        try {
            if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        rootEl.removeAttribute("data-grabbing");
        if (sim.phase === "free") {
            const still = performance.now() - sim.pt > 80;
            sim.vx = still ? 0 : clamp(sim.pvx, -1600, 1600);
            sim.vy = still ? 0 : clamp(sim.pvy, -1600, 1200);
            sim.spin = clamp(sim.vx * 0.004, -6, 6) + 1.2 * sim.sign;
            sim.age = 0;
            sim.phase = "drop";
        } else if (sim.phase === "held") {
            sim.phase = "return";
        }
        run();
    };

    const onStubKey = e => {
        if (used || (e.key !== "Enter" && e.key !== " ")) return;
        e.preventDefault();
        if (!e.repeat) tearNow();
    };

    stubRef.addEventListener("pointerdown", onStubDown);
    stubRef.addEventListener("pointermove", onStubMove);
    stubRef.addEventListener("pointerup", onStubUp);
    stubRef.addEventListener("pointercancel", onStubUp);
    stubRef.addEventListener("lostpointercapture", onStubUp);
    stubRef.addEventListener("keydown", onStubKey);

    // Initial render call
    runTilt();
    paint(performance.now());

    // Entrance Unlock Controller
    function handleTicketTorn() {
        const pillText = document.querySelector(".ticket-gate-pill-text");
        const pillIcon = document.querySelector(".ticket-gate-pill i");
        const pill = document.querySelector(".ticket-gate-pill");
        if (pillText) pillText.textContent = "ACCESS GRANTED • WELCOME";
        if (pillIcon) pillIcon.className = "fas fa-check-circle text-[#FED7A5]";
        if (pill) pill.classList.add("access-unlocked");

        // Allow user to appreciate recentered torn ticket before opening gate
        setTimeout(() => {
            unlockGate();
        }, 650);
    }

    function unlockGate() {
        overlay.classList.add("gate-unlocked");
        document.body.classList.remove("gate-locked");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 800);
    }

    if (skipBtn) {
        skipBtn.addEventListener("click", () => {
            unlockGate();
        });
    }
}


// ━━━ 10. REACT BITS <LANYARD /> COMPONENT (THREE.JS 3D DEVELOPER PASS) ━━━

const LANYARD_CARD_SIZES = {
    portrait: [1.6, 2.25],
    landscape: [2.25, 1.6]
};
const LANYARD_ANCHORS = { left: 0.27, center: 0.5, right: 0.73 };
const LANYARD_THICKNESS = 0.018;
const LANYARD_BEVEL = 0.007;
const LANYARD_JOINTS = 4;
const LANYARD_NODE_WEIGHT = 1 / 0.05;
const LANYARD_MAX_STEP = 1 / 960;
const LANYARD_ITERATIONS = 2;
const LANYARD_SAMPLES = 72;
const LANYARD_FOV = 24;
const LANYARD_STRAP_WIDTH = 0.36;
const LANYARD_RING_RADIUS = 0.095;
const LANYARD_RING_TUBE = 0.0135;
const LANYARD_EYELET_RADIUS = 0.036;
const LANYARD_CLAMP_BODY = 0.15;
const LANYARD_FACE_WIDTH = 1024;

const LANYARD_FINISHES = {
    glossy: { roughness: 0.22, metalness: 0, clearcoat: 0, clearcoatRoughness: 0, foil: 0, anisotropy: 0 },
    subtleGloss: { roughness: 0.22, metalness: 0, clearcoat: 0, clearcoatRoughness: 0, foil: 0, anisotropy: 0 },
    matte: { roughness: 0.22, metalness: 0, clearcoat: 0, clearcoatRoughness: 0, foil: 0, anisotropy: 0 },
    holographic: { roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.04, foil: 1, anisotropy: 0 },
    metallic: { roughness: 0.36, metalness: 0.75, clearcoat: 0.5, clearcoatRoughness: 0.18, foil: 0, anisotropy: 0.7 }
};

const LANYARD_BAND_COLUMNS = [0, 0.07, 0.93, 1];
const LANYARD_BAND_BEND = [-0.95, -0.28, 0.28, 0.95];
const LANYARD_FLIP_SPIN = 9;

const LANYARD_FOIL_VERTEX_HEAD = `
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;
`;

const LANYARD_FOIL_VERTEX_BODY = `
vFoilUv = uv;
vFoilX = normalize((modelViewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
vFoilY = normalize((modelViewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
`;

const LANYARD_FOIL_FRAGMENT_HEAD = `
uniform float foilStrength;
uniform float foilAspect;
uniform vec3 foilKey;
uniform vec3 foilFill;
uniform vec3 foilTop;
varying vec2 vFoilUv;
varying vec3 vFoilX;
varying vec3 vFoilY;

float foilHash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float foilBump(float t, float center, float width) {
  float x = (t - center) / width;
  return max(0.0, 1.0 - x * x);
}

vec3 foilSpectrum(float t) {
  return vec3(
    foilBump(t, 0.82, 0.32) + 0.4 * foilBump(t, 0.02, 0.12),
    foilBump(t, 0.5, 0.26),
    foilBump(t, 0.18, 0.24)
  );
}

vec3 foilGrating(float u, float spacing) {
  vec3 color = vec3(0.0);
  for (int m = 1; m <= 2; m++) {
    float order = float(m);
    float t = (spacing * abs(u) / order - 0.38) / 0.32;
    color += foilSpectrum(t) / order;
  }
  return color;
}

vec3 foilShard(vec2 p) {
  vec2 base = floor(p);
  float best = 9.0;
  float edge = 9.0;
  vec2 id = base;
  for (int j = -1; j <= 1; j++) {
    for (int i = -1; i <= 1; i++) {
      vec2 cell = base + vec2(float(i), float(j));
      vec2 site = cell + vec2(foilHash(cell), foilHash(cell + 7.31)) * 0.9 + 0.05;
      float d = length(site - p);
      if (d < best) {
        edge = best;
        best = d;
        id = cell;
      } else if (d < edge) {
        edge = d;
      }
    }
  }
  return vec3(foilHash(id + 3.17), foilHash(id + 11.73), edge - best);
}
`;

const LANYARD_FOIL_FRAGMENT_BODY = `
if (foilStrength > 0.0) {
  vec3 foilView = normalize(vViewPosition);
  vec3 foilNormal = normalize(normal);
  vec2 foilP = vec2(vFoilUv.x, vFoilUv.y * foilAspect);
  vec3 shard = foilShard(foilP * 26.0);
  vec2 ray = foilP - vec2(-1.6, 2.6 * foilAspect);
  float angle = atan(ray.y, ray.x) + (shard.x - 0.5) * 0.16;
  vec3 grating = normalize(vFoilX * cos(angle) + vFoilY * sin(angle));
  float spacing = 1.7 * (0.95 + shard.y * 0.1);
  vec3 rainbow = foilGrating(dot(foilKey + foilView, grating), spacing);
  rainbow += 0.6 * foilGrating(dot(foilTop + foilView, grating), spacing);
  rainbow *= 0.8 + 0.2 * smoothstep(0.0, 0.04, shard.z);
  rainbow = max(rainbow - 0.35 * min(rainbow.r, min(rainbow.g, rainbow.b)), 0.0);
  vec2 grid = foilP * 64.0;
  vec2 cell = floor(grid);
  vec2 jitter = vec2(foilHash(cell + 1.7), foilHash(cell + 9.2));
  float flake = smoothstep(0.32, 0.06, length(fract(grid) - jitter * 0.6 - 0.2)) * step(0.45, foilHash(cell + 4.4));
  vec3 facet = normalize(foilNormal + (vFoilX * (jitter.x - 0.5) + vFoilY * (jitter.y - 0.5)) * 0.8);
  float glint = pow(max(dot(reflect(-foilKey, facet), foilView), 0.0), 28.0);
  glint += 0.7 * pow(max(dot(reflect(-foilTop, facet), foilView), 0.0), 28.0);
  float fine = 1.0 - smoothstep(0.35, 0.9, max(fwidth(grid.x), fwidth(grid.y)));
  vec3 sparkle = flake * glint * fine * (vec3(0.7) + foilGrating(dot(foilKey + foilView, grating) + jitter.x * 0.4, spacing));
  float ink = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float foil = foilStrength * (0.08 + 0.92 * smoothstep(0.04, 0.7, ink));
  float facing = clamp(dot(foilNormal, foilView), 0.0, 1.0);
  float tint = clamp(dot(rainbow, vec3(0.4)), 0.0, 1.0);
  outgoingLight = outgoingLight * (1.0 - foil * (0.3 + 0.32 * tint)) + (rainbow * 0.62 * (0.4 + 0.6 * facing) + sparkle * 1.6) * foil;
}
`;

const LANYARD_METALS = {
    silver: { color: '#d9dce2', roughness: 0.16 },
    gold: { color: '#FED7A5', roughness: 0.2 },
    graphite: { color: '#4d4f55', roughness: 0.28 }
};

const lanyardClamp = (val, min, max) => Math.min(max, Math.max(min, val));
const lanyardMix = (a, b, t) => a + (b - a) * t;

const lanyardParseColor = (value, fallback) => {
    try {
        if (typeof document === 'undefined') return fallback;
        const ctx = document.createElement('canvas').getContext('2d');
        if (!ctx) return fallback;
        ctx.fillStyle = '#000000';
        ctx.fillStyle = value;
        const resolved = ctx.fillStyle;
        if (resolved.startsWith('#')) {
            const n = parseInt(resolved.slice(1), 16);
            return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
        }
        const parts = resolved.match(/[\d.]+/g);
        if (!parts || parts.length < 3) return fallback;
        return [Number(parts[0]) / 255, Number(parts[1]) / 255, Number(parts[2]) / 255];
    } catch {
        return fallback;
    }
};

const lanyardLuminance = rgb => 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
const lanyardToCss = (rgb, alpha = 1) =>
    `rgba(${Math.round(rgb[0] * 255)}, ${Math.round(rgb[1] * 255)}, ${Math.round(rgb[2] * 255)}, ${alpha})`;

const lanyardSeeded = start => {
    let state = start >>> 0;
    return () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
};

const lanyardTraceRoundedRect = (path, x, y, width, height, radius) => {
    const r = Math.max(0, Math.min(radius, width / 2, height / 2));
    const k = r * 0.4477;
    path.moveTo(x + r, y);
    path.lineTo(x + width - r, y);
    path.bezierCurveTo(x + width - k, y, x + width, y + k, x + width, y + r);
    path.lineTo(x + width, y + height - r);
    path.bezierCurveTo(x + width, y + height - k, x + width - k, y + height, x + width - r, y + height);
    path.lineTo(x + r, y + height);
    path.bezierCurveTo(x + k, y + height, x, y + height - k, x, y + height - r);
    path.lineTo(x, y + r);
    path.bezierCurveTo(x, y + k, x + k, y, x + r, y);
};

const lanyardLoadImage = (cache, url) => {
    if (!url) return Promise.resolve(null);
    let resolvedUrl = url;
    if (typeof window !== 'undefined' && window.HERO_AVATAR_DATA_URI && (url.includes('prof-img.png') || url === 'avatar')) {
        resolvedUrl = window.HERO_AVATAR_DATA_URI;
    }
    const cached = cache.get(resolvedUrl);
    if (cached) return cached;
    const promise = new Promise(resolve => {
        let settled = false;
        const done = img => {
            if (settled) return;
            settled = true;
            resolve(img);
        };

        // 1. Instant resolve if data URI image is ready
        if (typeof window !== 'undefined' && window.heroAvatarDataImage && window.heroAvatarDataImage.naturalWidth > 0 && resolvedUrl === window.HERO_AVATAR_DATA_URI) {
            done(window.heroAvatarDataImage);
            return;
        }

        // 2. Check if preloaded DOM element already has decoded dimensions
        if (typeof document !== 'undefined') {
            const pre = document.getElementById("hero-lanyard-avatar");
            if (pre && pre.naturalWidth > 0 && (url.includes('prof-img.png') || (pre.src && pre.src.includes(url)))) {
                done(pre);
                return;
            }
        }

        // 3. Load via standalone Image object
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => done(image);
        image.onerror = (err) => {
            console.warn("Failed to load lanyard image:", url, err);
            done(null);
        };
        // Safety timeout so Promise.all never hangs indefinitely
        setTimeout(() => {
            if (!settled) done(image.naturalWidth > 0 ? image : null);
        }, 1200);

        image.src = resolvedUrl;
        if (image.complete && image.naturalWidth > 0) {
            done(image);
        }
    });
    cache.set(resolvedUrl, promise);
    return promise;
};

const lanyardCardLayout = (orientation, cornerRadius) => {
    const [width, height] = LANYARD_CARD_SIZES[orientation] || LANYARD_CARD_SIZES.portrait;
    const radius = lanyardMix(0.03, Math.min(width, height) * 0.2, lanyardClamp(cornerRadius, 0, 1));
    const slot = { width: 0.34, height: 0.07, y: height / 2 - 0.13 };
    const ringY = height / 2 - 0.055;
    return { width, height, radius, slot, ringY, hangY: ringY + LANYARD_RING_RADIUS };
};

const lanyardBuildCardGeometry = layout => {
    const { width, height, radius, slot } = layout;
    const outline = new THREE.Shape();
    lanyardTraceRoundedRect(
        outline,
        -width / 2 + LANYARD_BEVEL,
        -height / 2 + LANYARD_BEVEL,
        width - LANYARD_BEVEL * 2,
        height - LANYARD_BEVEL * 2,
        Math.max(radius - LANYARD_BEVEL, 0.005)
    );
    const hole = new THREE.Path();
    lanyardTraceRoundedRect(
        hole,
        -slot.width / 2 - LANYARD_BEVEL,
        slot.y - slot.height / 2 - LANYARD_BEVEL,
        slot.width + LANYARD_BEVEL * 2,
        slot.height + LANYARD_BEVEL * 2,
        slot.height / 2 + LANYARD_BEVEL
    );
    outline.holes.push(hole);
    const body = new THREE.ExtrudeGeometry(outline, {
        depth: LANYARD_THICKNESS,
        bevelEnabled: true,
        bevelThickness: LANYARD_BEVEL,
        bevelSize: LANYARD_BEVEL,
        bevelSegments: 5,
        curveSegments: 24
    });
    body.translate(0, 0, -LANYARD_THICKNESS / 2);
    const face = new THREE.ShapeGeometry(outline, 24);
    const position = face.getAttribute('position');
    const uv = face.getAttribute('uv');
    for (let i = 0; i < position.count; i++) {
        uv.setXY(i, (position.getX(i) + width / 2) / width, (position.getY(i) + height / 2) / height);
    }
    uv.needsUpdate = true;
    return { body, face };
};

const lanyardBuildClampGeometry = width => {
    const shape = new THREE.Shape();
    const w = width * 1.16;
    lanyardTraceRoundedRect(shape, -w / 2 + 0.014, -LANYARD_CLAMP_BODY / 2 + 0.014, w - 0.028, LANYARD_CLAMP_BODY - 0.028, 0.024);
    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: 0.02,
        bevelEnabled: true,
        bevelThickness: 0.014,
        bevelSize: 0.014,
        bevelSegments: 6,
        curveSegments: 10
    });
    geometry.translate(0, 0, -0.01);
    return geometry;
};

const lanyardBuildBandGeometry = count => {
    const columns = LANYARD_BAND_COLUMNS.length;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(count * columns * 3), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(count * columns * 3), 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * columns * 2), 2));
    const index = [];
    for (let i = 0; i < count - 1; i++) {
        for (let c = 0; c < columns - 1; c++) {
            const a = i * columns + c;
            index.push(a, a + columns, a + 1, a + 1, a + columns, a + columns + 1);
        }
    }
    geometry.setIndex(index);
    return geometry;
};

const lanyardBuildEnvironment = renderer => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0.035, 0.035, 0.04);
    const geometry = new THREE.PlaneGeometry(1, 1);
    const materials = [];
    const panel = (intensity, position, scale, rotation = 0) => {
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(intensity, intensity, intensity),
            side: THREE.DoubleSide
        });
        materials.push(material);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...position);
        mesh.scale.set(scale[0], scale[1], 1);
        mesh.lookAt(0, 0, 0);
        mesh.rotateZ(rotation);
        scene.add(mesh);
    };
    panel(2.6, [0, 4.5, 8], [9, 4]);
    panel(6, [-5.5, 0.5, 7], [0.9, 14]);
    panel(4, [5, -0.5, 8], [0.6, 14]);
    panel(3.5, [0, -1, 9], [24, 0.35], Math.PI / 3);
    panel(2.5, [1, 2.5, 9], [24, 0.2], Math.PI / 3);
    panel(1.4, [0, 6, -6], [12, 4]);
    panel(0.5, [0, -7, 1], [16, 6]);
    panel(0.9, [8, 0, -2], [4, 10]);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const target = pmrem.fromScene(scene, 0.035);
    pmrem.dispose();
    geometry.dispose();
    materials.forEach(material => material.dispose());
    return target;
};

const lanyardMakeCanvasTexture = (canvas, anisotropy) => {
    const texture = new THREE.CanvasTexture(canvas);
    if (THREE.SRGBColorSpace) {
        texture.colorSpace = THREE.SRGBColorSpace;
    } else if (THREE.sRGBEncoding) {
        texture.encoding = THREE.sRGBEncoding;
    }
    texture.anisotropy = anisotropy;
    texture.generateMipmaps = false;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
};

const lanyardBuildGrainTexture = () => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return new THREE.CanvasTexture(canvas);
    const random = lanyardSeeded(7);
    const field = Float32Array.from({ length: size * size }, () => random());
    const height = (x, y) => {
        let sum = 0;
        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) sum += field[((y + j + size) % size) * size + ((x + i + size) % size)];
        }
        return (sum / 9) * 1.6;
    };
    const image = ctx.createImageData(size, size);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const nx = height((x - 1 + size) % size, y) - height((x + 1) % size, y);
            const ny = height(x, (y - 1 + size) % size) - height(x, (y + 1) % size);
            const length = Math.hypot(nx, ny, 1);
            const i = (y * size + x) * 4;
            image.data[i] = ((nx / length) * 0.5 + 0.5) * 255;
            image.data[i + 1] = ((ny / length) * 0.5 + 0.5) * 255;
            image.data[i + 2] = ((1 / length) * 0.5 + 0.5) * 255;
            image.data[i + 3] = 255;
        }
    }
    ctx.putImageData(image, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 7);
    return texture;
};

const lanyardBuildWeaveTexture = () => {
    const size = 128;
    const threads = 8;
    const random = lanyardSeeded(19);
    const fiber = Float32Array.from({ length: size * size }, () => random());
    const profile = f => Math.sqrt(Math.max(0, 1 - 4 * f * f));
    const height = (x, y) => {
        const px = ((x % size) + size) % size;
        const py = ((y % size) + size) % size;
        const u = (px / size) * threads;
        const v = (py / size) * threads;
        const cu = Math.floor(u);
        const cv = Math.floor(v);
        const fu = u - cu - 0.5;
        const fv = v - cv - 0.5;
        const lift = (cu + cv) % 2 === 0;
        const warp = profile(fu) * (0.55 + 0.45 * Math.cos(fv * Math.PI * (lift ? 1 : 0.6)));
        const weft = profile(fv) * (0.55 + 0.45 * Math.cos(fu * Math.PI * (lift ? 0.6 : 1)));
        return (lift ? Math.max(warp, weft * 0.7) : Math.max(weft, warp * 0.7)) + fiber[py * size + px] * 0.08;
    };
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const nx = (height(x - 1, y) - height(x + 1, y)) * 1.6;
            const ny = (height(x, y - 1) - height(x, y + 1)) * 1.6;
            const length = Math.hypot(nx, ny, 1);
            const i = (y * size + x) * 4;
            data[i] = ((nx / length) * 0.5 + 0.5) * 255;
            data[i + 1] = ((ny / length) * 0.5 + 0.5) * 255;
            data[i + 2] = ((1 / length) * 0.5 + 0.5) * 255;
            data[i + 3] = 255;
        }
    }
    const texture = new THREE.DataTexture(data, size, size);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;
    return texture;
};

const lanyardDrawFitted = (ctx, image, width, height, fit, targetX = 0, targetY = 0) => {
    const imgW = (image && (image.naturalWidth || image.width)) || 0;
    const imgH = (image && (image.naturalHeight || image.height)) || 0;
    if (!imgW || !imgH) return;
    const scale = (fit === 'contain' ? Math.min : Math.max)(width / imgW, height / imgH);
    const w = imgW * scale;
    const h = imgH * scale;
    ctx.drawImage(image, targetX + (width - w) / 2, targetY + (height - h) / 2, w, h);
};

const lanyardDrawBadgePass = (canvas, photoImage, isBack) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    const BLACK = '#0E0F15';

    // Base background
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, w, h);

    if (!isBack) {
        // ─── FRONT: COLOR-GRADED STUDIO PORTRAIT PASS ───
        let photo = photoImage;
        if ((!photo || !photo.naturalWidth) && typeof window !== 'undefined') {
            if (window.heroAvatarDataImage && window.heroAvatarDataImage.naturalWidth > 0) {
                photo = window.heroAvatarDataImage;
            } else {
                const preloaded = document.getElementById("hero-lanyard-avatar");
                if (preloaded && preloaded.naturalWidth > 0) photo = preloaded;
            }
        }

        try {
            if (photo && photo.naturalWidth && photo.naturalWidth > 0) {
                // Professional studio color grading: tames bright highlights, deepens blacks, preserves skin tones
                try {
                    ctx.filter = 'brightness(0.95) contrast(1.02) saturate(1.03)';
                } catch (_) {}

                lanyardDrawFitted(ctx, photo, w, h, 'cover', 0, 0);

                try {
                    ctx.filter = 'none';
                } catch (_) {}

            } else {
                // Elegant dark placeholder while image decodes
                ctx.fillStyle = '#171822';
                ctx.fillRect(0, 0, w, h);

                ctx.fillStyle = '#FFFFFF';
                ctx.font = 'bold 120px "Outfit", system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('JS', w / 2, h / 2 + 40);
            }
        } catch (err) {
            console.warn('Error drawing avatar image:', err);
        }
    } else {
        // ─── BACK: IDENTITY & ACCREDITATION (NAME & TAGLINE) ───
        ctx.fillStyle = BLACK;
        ctx.fillRect(0, 0, w, h);

        // Subtle luxury outer border
        ctx.strokeStyle = 'rgba(254, 215, 165, 0.35)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        lanyardTraceRoundedRect(ctx, 42, 42, w - 84, h - 84, 28);
        ctx.stroke();

        // Corner accents
        ctx.strokeStyle = '#FED7A5';
        ctx.lineWidth = 6;
        const cornerLen = 38;
        ctx.beginPath(); ctx.moveTo(42, 42 + cornerLen); ctx.lineTo(42, 42); ctx.lineTo(42 + cornerLen, 42); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w - 42 - cornerLen, 42); ctx.lineTo(w - 42, 42); ctx.lineTo(w - 42, 42 + cornerLen); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(42, h - 42 - cornerLen); ctx.lineTo(42, h - 42); ctx.lineTo(42 + cornerLen, h - 42); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(w - 42 - cornerLen, h - 42); ctx.lineTo(w - 42, h - 42); ctx.lineTo(w - 42, h - 42 - cornerLen); ctx.stroke();

        // Centered Circular Monogram
        const circleRadius = 135;
        const circleY = 510;

        ctx.save();
        ctx.beginPath();
        ctx.arc(w / 2, circleY, circleRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#14151F';
        ctx.fill();
        ctx.strokeStyle = '#FED7A5';
        ctx.lineWidth = 4.5;
        ctx.stroke();

        ctx.fillStyle = '#FED7A5';
        ctx.font = '900 120px "Outfit", system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('JS', w / 2, circleY + 40);
        ctx.restore();

        // ── Behind card: Name (JAIDEV S) ──
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '900 82px "Outfit", system-ui, -apple-system, sans-serif';
        ctx.fillText('JAIDEV S', w / 2, circleY + circleRadius + 105);

        // ── Behind card: Tagline (Aspiring AI/ML Developer) ──
        const tagText = 'Aspiring AI/ML Developer';
        ctx.font = 'bold 38px "Space Grotesk", system-ui, -apple-system, sans-serif';
        const tagW = ctx.measureText(tagText).width + 56;
        const tagH = 58;
        const tagX = (w - tagW) / 2;
        const tagY = circleY + circleRadius + 155;

        ctx.fillStyle = '#171824';
        ctx.beginPath();
        lanyardTraceRoundedRect(ctx, tagX, tagY, tagW, tagH, 29);
        ctx.fill();
        ctx.strokeStyle = '#FED7A5';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.fillStyle = '#FED7A5';
        ctx.fillText(tagText, w / 2, tagY + 41);
    }
};

const lanyardPaintStrap = (canvas, image, color) => {
    const across = 192;
    const along = image ? Math.max(64, Math.round((image.width / image.height) * across)) : 384;
    canvas.width = across;
    canvas.height = along;
    const ctx = canvas.getContext('2d');
    if (!ctx) return along / across;
    ctx.fillStyle = '#0E0F15';
    ctx.fillRect(0, 0, across, along);

    if (image) {
        ctx.save();
        ctx.translate(across, 0);
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(image, 0, 0, along, across);
        ctx.restore();
        return along / across;
    }

    // Gold/beige stitched tracks
    ctx.fillStyle = 'rgba(254, 215, 165, 0.5)';
    for (let y = 0; y < along; y += 12) {
        ctx.fillRect(16, y, 4, 7);
        ctx.fillRect(across - 20, y, 4, 7);
    }

    ctx.save();
    ctx.translate(across / 2, along / 2);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = '#FED7A5';
    ctx.font = 'bold 22px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('★ JAIDEV S • CIT • AI/ML ★', 0, 7);
    ctx.restore();

    return along / across;
};

const lanyardCreateSimulation = () => {
    const vectors = () => Array.from({ length: LANYARD_JOINTS + 1 }, () => new THREE.Vector3());
    return {
        nodes: vectors(),
        previous: vectors(),
        velocities: vectors(),
        lengths: new Float64Array(LANYARD_JOINTS),
        impulses: new Float64Array(LANYARD_JOINTS),
        rest: 1,
        anchor: new THREE.Vector3(),
        body: {
            position: new THREE.Vector3(),
            previous: new THREE.Vector3(),
            velocity: new THREE.Vector3(),
            quaternion: new THREE.Quaternion(),
            previousQuaternion: new THREE.Quaternion(),
            angular: new THREE.Vector3(),
            mass: 1,
            inverseInertia: new THREE.Vector3(1, 1, 1),
            hang: new THREE.Vector3()
        },
        grab: null,
        turn: 0,
        twist: 0,
        twistRaw: 0,
        calm: 0
    };
};

const lanyardScratch = {
    a: new THREE.Vector3(),
    b: new THREE.Vector3(),
    c: new THREE.Vector3(),
    d: new THREE.Vector3(),
    e: new THREE.Vector3(),
    f: new THREE.Vector3(),
    g: new THREE.Vector3(),
    pin: new THREE.Vector3(),
    q: new THREE.Quaternion(),
    r: new THREE.Quaternion()
};

const lanyardApplyInverseInertia = (body, vector, out) => {
    lanyardScratch.r.copy(body.quaternion).invert();
    out.copy(vector).applyQuaternion(lanyardScratch.r);
    out.set(out.x * body.inverseInertia.x, out.y * body.inverseInertia.y, out.z * body.inverseInertia.z);
    return out.applyQuaternion(body.quaternion);
};

const lanyardRotateBody = (q, w) => {
    const { x: qx, y: qy, z: qz, w: qw } = q;
    q.x += 0.5 * (w.x * qw + w.y * qz - w.z * qy);
    q.y += 0.5 * (w.y * qw + w.z * qx - w.x * qz);
    q.z += 0.5 * (w.z * qw + w.x * qy - w.y * qx);
    q.w += 0.5 * (-w.x * qx - w.y * qy - w.z * qz);
    q.normalize();
};

const lanyardBodyWeight = (body, r, normal) => {
    const rn = lanyardScratch.c.crossVectors(r, normal);
    return 1 / body.mass + rn.dot(lanyardApplyInverseInertia(body, rn, lanyardScratch.d));
};

const lanyardPushBody = (body, r, impulse) => {
    body.position.addScaledVector(impulse, 1 / body.mass);
    lanyardRotateBody(body.quaternion, lanyardApplyInverseInertia(body, lanyardScratch.e.crossVectors(r, impulse), lanyardScratch.f));
};

const lanyardSolveSegment = (sim, i, h, physics) => {
    const { nodes, body } = sim;
    const a = nodes[i];
    const wa = i === 0 ? 0 : LANYARD_NODE_WEIGHT;
    const last = i === LANYARD_JOINTS - 1;
    const r = lanyardScratch.g;
    let b = nodes[i + 1];
    if (last) {
        r.copy(body.hang).applyQuaternion(body.quaternion);
        b = lanyardScratch.b.copy(body.position).add(r);
    }
    const delta = lanyardScratch.a.subVectors(b, a);
    const length = delta.length();
    const stretch = length - sim.rest;
    if (stretch <= 0 || length < 1e-9) return;
    const normal = delta.divideScalar(length);
    const wb = last ? lanyardBodyWeight(body, r, normal) : LANYARD_NODE_WEIGHT;
    const rate = (length - sim.lengths[i]) / h;
    const tension =
        physics.hold * Math.tanh((physics.stiffness * stretch) / physics.hold) +
        physics.spring * stretch +
        physics.bandDamping * Math.max(0, rate);
    const room = tension * h * h - sim.impulses[i];
    if (room <= 0) return;
    const lambda = Math.min(stretch / (wa + wb), room);
    sim.impulses[i] += lambda;
    if (wa) a.addScaledVector(normal, lambda * wa);
    if (last) lanyardPushBody(body, r, normal.multiplyScalar(-lambda));
    else b.addScaledVector(normal, -lambda * wb);
};

const lanyardSolvePin = (body, grab, target) => {
    const r = lanyardScratch.g.copy(grab.local).applyQuaternion(body.quaternion);
    const delta = lanyardScratch.a.copy(target).sub(body.position).sub(r);
    const distance = delta.length();
    if (distance < 1e-9) return;
    const normal = delta.divideScalar(distance);
    const lambda = distance / lanyardBodyWeight(body, r, normal);
    lanyardPushBody(body, r, normal.multiplyScalar(lambda));
};

const lanyardPlaceHanging = (sim, layout, intro) => {
    const { nodes, previous, velocities, body, anchor } = sim;
    nodes[0].copy(anchor);
    for (let i = 1; i <= LANYARD_JOINTS; i++) {
        nodes[i].copy(nodes[i - 1]);
        if (intro) nodes[i].x += sim.rest;
        else nodes[i].y -= sim.rest;
    }
    body.quaternion.identity();
    if (intro) body.quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    body.hang.set(0, layout.hangY, 0);
    const offset = lanyardScratch.a.copy(body.hang).applyQuaternion(body.quaternion);
    body.position.copy(nodes[LANYARD_JOINTS]).sub(offset);
    body.previous.copy(body.position);
    body.previousQuaternion.copy(body.quaternion);
    body.velocity.set(0, 0, 0);
    body.angular.set(0, 0, 0);
    for (let i = 0; i <= LANYARD_JOINTS; i++) {
        previous[i].copy(nodes[i]);
        velocities[i].set(0, 0, 0);
    }
    sim.lengths.fill(sim.rest);
    sim.turn = 0;
    sim.twist = 0;
    sim.twistRaw = 0;
    sim.calm = 0;
};

const lanyardConfigureSimulation = (sim, layout, length) => {
    sim.rest = length / LANYARD_JOINTS;
    const { width, height } = layout;
    const body = sim.body;
    const t = LANYARD_THICKNESS + LANYARD_BEVEL * 2;
    body.mass = 1;
    body.inverseInertia.set(
        12 / (height * height + t * t),
        12 / (width * width + t * t),
        12 / (width * width + height * height)
    );
    body.hang.set(0, layout.hangY, 0);
};

const lanyardStepSimulation = (sim, dt, physics, time) => {
    const steps = Math.max(1, Math.ceil(dt / LANYARD_MAX_STEP - 1e-6));
    const h = dt / steps;
    const { nodes, previous, velocities, body } = sim;
    const windX = physics.breeze * (Math.sin(time * 0.53) * 0.7 + Math.sin(time * 1.31 + 1.7) * 0.3) * 3;
    const windZ = physics.breeze * Math.sin(time * 0.37 + 0.6) * 2;
    const grab = sim.grab;
    const pin = lanyardScratch.pin;
    const nodeDrag = Math.exp(-physics.nodeDrag * h);
    const linearDrag = Math.exp(-physics.linearDrag * h);
    const angularDrag = Math.exp(-physics.angularDrag * h);

    for (let s = 0; s < steps; s++) {
        for (let i = 1; i < LANYARD_JOINTS; i++) {
            const v = velocities[i];
            v.y -= physics.gravity * h;
            v.x += windX * h;
            v.z += windZ * h;
            previous[i].copy(nodes[i]);
            nodes[i].addScaledVector(v, h);
        }

        body.previous.copy(body.position);
        body.previousQuaternion.copy(body.quaternion);
        const q = body.quaternion;
        if (grab) {
            const turn = lanyardScratch.q.copy(grab.rotation).multiply(lanyardScratch.r.copy(q).invert());
            if (turn.w < 0) turn.set(-turn.x, -turn.y, -turn.z, -turn.w);
            const torque = lanyardScratch.a.set(turn.x, turn.y, turn.z).multiplyScalar(2 * physics.grip);
            torque.addScaledVector(body.angular, -physics.gripDamping);
            body.angular.addScaledVector(lanyardApplyInverseInertia(body, torque, lanyardScratch.b), h);
        }
        const up = lanyardScratch.a.set(0, 1, 0).applyQuaternion(q);
        const front = lanyardScratch.b.set(-up.x * up.z, -up.y * up.z, 1 - up.z * up.z);
        if (front.lengthSq() > 1e-3) {
            const facing = lanyardScratch.d.set(0, 0, 1).applyQuaternion(q);
            const raw = Math.atan2(lanyardScratch.e.crossVectors(front, facing).dot(up), front.dot(facing));
            let turned = raw - sim.twistRaw;
            if (turned > Math.PI) turned -= Math.PI * 2;
            else if (turned < -Math.PI) turned += Math.PI * 2;
            sim.twist += turned;
            sim.twistRaw = raw;
        }
        if (!grab) {
            const spin = body.angular.dot(up);
            body.angular.addScaledVector(up, (physics.twist * (sim.turn - sim.twist) - physics.twistDamping * spin) * h);
        }
        body.velocity.y -= physics.gravity * h;
        body.velocity.x += windX * 0.35 * h;
        body.velocity.z += windZ * 0.35 * h;
        body.position.addScaledVector(body.velocity, h);
        lanyardRotateBody(body.quaternion, lanyardScratch.f.copy(body.angular).multiplyScalar(h));

        sim.impulses.fill(0);
        if (grab) pin.lerpVectors(grab.from, grab.target, (s + 1) / steps);
        for (let iteration = 0; iteration < LANYARD_ITERATIONS; iteration++) {
            for (let i = 0; i < LANYARD_JOINTS; i++) lanyardSolveSegment(sim, i, h, physics);
            if (grab) lanyardSolvePin(body, grab, pin);
        }

        for (let i = 1; i < LANYARD_JOINTS; i++) {
            const v = velocities[i].subVectors(nodes[i], previous[i]).divideScalar(h).multiplyScalar(nodeDrag);
            v.multiplyScalar(1 / (1 + physics.nodeAir * v.length() * h));
        }
        body.velocity.subVectors(body.position, body.previous).divideScalar(h);
        const dq = lanyardScratch.q.copy(body.previousQuaternion).invert().premultiply(body.quaternion);
        body.angular.set(dq.x, dq.y, dq.z).multiplyScalar((2 / h) * (dq.w < 0 ? -1 : 1));

        const normal = lanyardScratch.a.set(0, 0, 1).applyQuaternion(body.quaternion);
        const across = body.velocity.dot(normal);
        const along = lanyardScratch.b.copy(body.velocity).addScaledVector(normal, -across);
        along.multiplyScalar(1 / (1 + physics.air * along.length() * h));
        body.velocity
            .copy(along)
            .addScaledVector(normal, across / (1 + physics.broadside * Math.abs(across) * h))
            .multiplyScalar(linearDrag);
        body.angular.multiplyScalar(angularDrag / (1 + physics.spinAir * body.angular.length() * h));
        if (body.velocity.lengthSq() > 3600) body.velocity.setLength(60);
        if (body.angular.lengthSq() > 1600) body.angular.setLength(40);

        nodes[LANYARD_JOINTS].copy(body.hang).applyQuaternion(body.quaternion).add(body.position);
        for (let i = 0; i < LANYARD_JOINTS; i++) sim.lengths[i] = nodes[i].distanceTo(nodes[i + 1]);
    }

    if (grab) grab.from.copy(grab.target);

    let energy = body.velocity.lengthSq() + body.angular.lengthSq() * 0.3;
    for (let i = 1; i < LANYARD_JOINTS; i++) energy += velocities[i].lengthSq() * 0.05;
    sim.calm = energy < 2e-4 ? sim.calm + dt : 0;
};

function createLanyard(container, userOptions = {}) {
    if (!container || typeof THREE === "undefined") return null;

    const options = Object.assign({
        frontImage: 'assets/prof-img.png',
        backImage: null,
        imageFit: 'cover',
        cardColor: '#0E0F15',
        orientation: 'portrait',
        finish: 'glossy',
        cornerRadius: 0.28,
        size: 0.62,
        anchor: 'center',
        strapLength: 0.44,
        strapImage: null,
        strapColor: '#0E0F15',
        strapWidth: 0.72,
        metal: 'gold',
        gravity: 1,
        damping: 0.5,
        elasticity: 0.55,
        breeze: 0.45,
        interactive: true,
        intro: true
    }, userOptions);

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
        console.warn("WebGLRenderer creation failed for Lanyard:", e);
        return null;
    }

    renderer.setClearColor(0x000000, 0);
    if (THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
    } else if (THREE.sRGBEncoding) {
        renderer.outputEncoding = THREE.sRGBEncoding;
    }
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.toneMappingExposure = 1;

    const canvas = renderer.domElement;
    canvas.className = 'lanyard-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    container.appendChild(canvas);

    const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy ? renderer.capabilities.getMaxAnisotropy() : 4);
    const scene = new THREE.Scene();
    const environment = lanyardBuildEnvironment(renderer);
    scene.environment = environment.texture;

    const camera = new THREE.PerspectiveCamera(LANYARD_FOV, 1, 0.1, 200);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(-2.5, 4, 6);
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.35);
    fillLight.position.set(3, -1, 4);
    scene.add(keyLight, fillLight);

    const imageCache = new Map();
    const images = { front: null, back: null, strap: null };
    let layout = lanyardCardLayout(options.orientation || 'portrait', options.cornerRadius ?? 0.28);
    const faceW = LANYARD_FACE_WIDTH;
    const faceH = Math.round((LANYARD_FACE_WIDTH * layout.height) / layout.width);

    const frontCanvas = document.createElement('canvas');
    const backCanvas = document.createElement('canvas');
    const strapCanvas = document.createElement('canvas');
    frontCanvas.width = faceW;
    frontCanvas.height = faceH;
    backCanvas.width = faceW;
    backCanvas.height = faceH;

    // Grab preloaded data URI avatar or DOM avatar if available
    let domAvatar = null;
    if (typeof window !== 'undefined' && window.heroAvatarDataImage && window.heroAvatarDataImage.naturalWidth > 0) {
        domAvatar = window.heroAvatarDataImage;
    } else if (typeof document !== 'undefined') {
        const domImg = document.getElementById("hero-lanyard-avatar");
        if (domImg && domImg.naturalWidth > 0) {
            domAvatar = domImg;
        }
    }
    images.front = domAvatar;
    images.back = domAvatar;

    lanyardDrawBadgePass(frontCanvas, images.front, false);
    lanyardDrawBadgePass(backCanvas, images.back || images.front, true);

    const frontTexture = lanyardMakeCanvasTexture(frontCanvas, anisotropy);
    const backTexture = lanyardMakeCanvasTexture(backCanvas, anisotropy);
    const strapTexture = lanyardMakeCanvasTexture(strapCanvas, anisotropy);
    strapTexture.wrapS = THREE.ClampToEdgeWrapping;
    strapTexture.wrapT = THREE.RepeatWrapping;
    tileRatio = lanyardPaintStrap(strapCanvas, images.strap, lanyardParseColor(options.strapColor, [0.12, 0.12, 0.16]));
    strapTexture.needsUpdate = true;

    const grain = lanyardBuildGrainTexture();
    const weave = lanyardBuildWeaveTexture();

    const foilUniforms = {
        foilStrength: { value: 0 },
        foilAspect: { value: 1.4 },
        foilKey: { value: new THREE.Vector3() },
        foilFill: { value: new THREE.Vector3() },
        foilTop: { value: new THREE.Vector3() }
    };

    const injectFoil = shader => {
        Object.assign(shader.uniforms, foilUniforms);
        shader.vertexShader = shader.vertexShader
            .replace('#include <common>', `#include <common>\n${LANYARD_FOIL_VERTEX_HEAD}`)
            .replace('#include <project_vertex>', `#include <project_vertex>\n${LANYARD_FOIL_VERTEX_BODY}`);

        if (shader.fragmentShader.includes('#include <opaque_fragment>')) {
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', `#include <common>\n${LANYARD_FOIL_FRAGMENT_HEAD}`)
                .replace('#include <opaque_fragment>', `${LANYARD_FOIL_FRAGMENT_BODY}\n#include <opaque_fragment>`);
        } else if (shader.fragmentShader.includes('#include <dithering_fragment>')) {
            shader.fragmentShader = shader.fragmentShader
                .replace('#include <common>', `#include <common>\n${LANYARD_FOIL_FRAGMENT_HEAD}`)
                .replace('#include <dithering_fragment>', `${LANYARD_FOIL_FRAGMENT_BODY}\n#include <dithering_fragment>`);
        }
    };

    const frontMaterial = new THREE.MeshBasicMaterial({
        map: frontTexture,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
    });
    const backMaterial = new THREE.MeshBasicMaterial({
        map: backTexture,
        side: THREE.DoubleSide,
        polygonOffset: true,
        polygonOffsetFactor: -4,
        polygonOffsetUnits: -4
    });
    const edgeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x0e0f15),
        side: THREE.DoubleSide
    });
    const metalMaterial = new THREE.MeshStandardMaterial({ metalness: 1 });
    const bandMaterial = new THREE.MeshPhysicalMaterial({
        map: strapTexture,
        normalMap: weave,
        normalScale: new THREE.Vector2(0.7, 0.7),
        roughness: 0.68,
        sheen: 1,
        sheenRoughness: 0.42,
        sheenColor: new THREE.Color(0.32, 0.32, 0.34),
        side: THREE.DoubleSide
    });

    const cardGroup = new THREE.Group();
    const bodyMesh = new THREE.Mesh(undefined, edgeMaterial);
    const frontMesh = new THREE.Mesh(undefined, frontMaterial);
    const backMesh = new THREE.Mesh(undefined, backMaterial);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(LANYARD_RING_RADIUS, LANYARD_RING_TUBE, 18, 72), metalMaterial);
    ring.rotation.y = Math.PI / 2 - 0.7;
    cardGroup.add(bodyMesh, frontMesh, backMesh, ring);
    scene.add(cardGroup);

    const bandGeometry = lanyardBuildBandGeometry(LANYARD_SAMPLES);
    const band = new THREE.Mesh(bandGeometry, bandMaterial);
    band.frustumCulled = false;
    scene.add(band);

    const clampGroup = new THREE.Group();
    const clampMesh = new THREE.Mesh(lanyardBuildClampGeometry(LANYARD_STRAP_WIDTH), metalMaterial);
    clampMesh.position.y = LANYARD_EYELET_RADIUS + LANYARD_CLAMP_BODY / 2 - 0.004;
    const eyelet = new THREE.Mesh(new THREE.TorusGeometry(LANYARD_EYELET_RADIUS, 0.0105, 14, 40), metalMaterial);
    clampGroup.add(clampMesh, eyelet);
    scene.add(clampGroup);

    const sim = lanyardCreateSimulation();
    const controls = [];
    const mouth = new THREE.Vector3();
    const tuck = new THREE.Vector3();
    const curve = new THREE.CatmullRomCurve3(controls, false, 'centripetal');
    const view = { width: 1, height: 1 };
    layout = lanyardCardLayout(options.orientation || 'portrait', options.cornerRadius ?? 0.28);
    let applied = {};
    let strapScale = LANYARD_STRAP_WIDTH;
    let raf = 0;
    let last = performance.now();
    let time = 0;
    let visible = true;
    let alive = true;
    let placed = false;
    let hovering = false;
    let press = null;
    let imageToken = 0;
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const paintFaces = () => {
        const width = LANYARD_FACE_WIDTH;
        const height = Math.round((LANYARD_FACE_WIDTH * layout.height) / layout.width);
        if (frontCanvas.width !== width || frontCanvas.height !== height) {
            frontCanvas.width = width;
            frontCanvas.height = height;
            backCanvas.width = width;
            backCanvas.height = height;
        }
        lanyardDrawBadgePass(frontCanvas, images.front, false);
        lanyardDrawBadgePass(backCanvas, images.back || images.front, true);
        frontTexture.needsUpdate = true;
        backTexture.needsUpdate = true;
        start();
    };

    const repaintStrap = () => {
        const s = options;
        tileRatio = lanyardPaintStrap(strapCanvas, images.strap, lanyardParseColor(s.strapColor, [0.12, 0.12, 0.16]));
        weave.repeat.set(2, 2 * tileRatio);
        strapTexture.needsUpdate = true;
        start();
    };

    const frameView = () => {
        const s = options;
        const aspect = view.width / view.height;
        let viewHeight = layout.height / lanyardClamp(s.size, 0.15, 0.9);
        const minimumWidth = layout.width / 0.72;
        if (viewHeight * aspect < minimumWidth) viewHeight = minimumWidth / aspect;
        const viewWidth = viewHeight * aspect;
        camera.aspect = aspect;
        camera.position.set(0, 0, viewHeight / 2 / Math.tan((LANYARD_FOV * Math.PI) / 360));
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld();
        foilUniforms.foilKey.value.set(-2.5, 4, 6).normalize().transformDirection(camera.matrixWorldInverse);
        foilUniforms.foilFill.value.set(3, -1, 4).normalize().transformDirection(camera.matrixWorldInverse);
        foilUniforms.foilTop.value.set(0.5, 4.5, 8).normalize().transformDirection(camera.matrixWorldInverse);
        const anchorX = ((LANYARD_ANCHORS[s.anchor] || 0.5) - 0.5) * viewWidth;
        const anchorY = viewHeight / 2 + 0.2;
        const cardTop = viewHeight / 2 - viewHeight * lanyardMix(0.12, 0.42, lanyardClamp(s.strapLength, 0, 1));
        const hangTop = cardTop + (layout.hangY - layout.height / 2);
        sim.anchor.set(anchorX, anchorY, 0);
        lanyardConfigureSimulation(sim, layout, anchorY - hangTop);
        sim.nodes[0].copy(sim.anchor);
        sim.previous[0].copy(sim.anchor);
    };

    const apply = () => {
        const s = options;
        const layoutKey = `${s.orientation}|${s.cornerRadius}`;
        if (layoutKey !== applied.layoutKey) {
            layout = lanyardCardLayout(s.orientation, s.cornerRadius);
            const geometry = lanyardBuildCardGeometry(layout);
            bodyMesh.geometry.dispose();
            frontMesh.geometry.dispose();
            backMesh.geometry.dispose();
            bodyMesh.geometry = geometry.body;
            bodyMesh.renderOrder = 0;
            frontMesh.geometry = geometry.face;
            frontMesh.renderOrder = 2;
            backMesh.geometry = geometry.face.clone();
            backMesh.renderOrder = 2;
            frontMesh.position.z = LANYARD_THICKNESS / 2 + LANYARD_BEVEL + 0.012;
            backMesh.rotation.y = Math.PI;
            backMesh.position.z = -(LANYARD_THICKNESS / 2 + LANYARD_BEVEL + 0.012);
            ring.position.set(0, layout.ringY, 0);
            applied.framingKey = '';
        }
        const framingKey = `${layoutKey}|${s.size}|${s.anchor}|${s.strapLength}|${view.width}|${view.height}`;
        if (framingKey !== applied.framingKey) {
            frameView();
            if (!placed) {
                lanyardPlaceHanging(sim, layout, s.intro && !reducedMotion);
                placed = true;
            } else if (layoutKey !== applied.layoutKey) {
                lanyardPlaceHanging(sim, layout, false);
            }
        }

        const imageKey = `${s.frontImage}|${s.backImage}|${s.strapImage}`;
        if (imageKey !== applied.imageKey) {
            const token = ++imageToken;
            Promise.all([
                lanyardLoadImage(imageCache, s.frontImage),
                lanyardLoadImage(imageCache, s.backImage),
                lanyardLoadImage(imageCache, s.strapImage)
            ]).then(([front, back, strap]) => {
                if (!alive || token !== imageToken) return;
                images.front = front;
                images.back = back;
                images.strap = strap;
                paintFaces();
                repaintStrap();
            });
        }
        const faceKey = `${layoutKey}|${s.cardColor}|${s.imageFit}`;
        if (faceKey !== applied.faceKey) paintFaces();
        if (s.strapColor !== applied.strapColor) repaintStrap();

        const finish = LANYARD_FINISHES[s.finish] || LANYARD_FINISHES.holographic;
        const card = lanyardParseColor(s.cardColor, [0.09, 0.09, 0.13]);
        [frontMaterial, backMaterial].forEach(material => {
            material.roughness = finish.roughness;
            material.metalness = finish.metalness;
            material.clearcoat = finish.clearcoat;
            material.clearcoatRoughness = finish.clearcoatRoughness;
            material.anisotropy = finish.anisotropy;
        });
        foilUniforms.foilStrength.value = finish.foil;
        foilUniforms.foilAspect.value = layout.height / layout.width;
        if (THREE.SRGBColorSpace) {
            edgeMaterial.color.setRGB(card[0] * 0.92, card[1] * 0.92, card[2] * 0.92, THREE.SRGBColorSpace);
        } else {
            edgeMaterial.color.setRGB(card[0] * 0.92, card[1] * 0.92, card[2] * 0.92);
        }
        edgeMaterial.roughness = finish.roughness;
        edgeMaterial.metalness = finish.metalness;
        edgeMaterial.clearcoat = finish.clearcoat;
        edgeMaterial.clearcoatRoughness = finish.clearcoatRoughness;

        const metalLook = LANYARD_METALS[s.metal] || LANYARD_METALS.gold;
        metalMaterial.color.set(metalLook.color);
        metalMaterial.roughness = metalLook.roughness;

        strapScale = LANYARD_STRAP_WIDTH * lanyardClamp(s.strapWidth, 0.4, 2);
        if (strapScale !== applied.strapScale) {
            clampMesh.geometry.dispose();
            clampMesh.geometry = lanyardBuildClampGeometry(strapScale);
        }
        canvas.style.touchAction = s.interactive ? 'pan-y' : 'auto';

        applied = { layoutKey, framingKey, imageKey, faceKey, strapColor: s.strapColor, strapScale };
        start();
    };

    const points = Array.from({ length: LANYARD_SAMPLES }, () => new THREE.Vector3());
    const sides = Array.from({ length: LANYARD_SAMPLES }, () => new THREE.Vector3());
    const bends = LANYARD_BAND_BEND.map(angle => [Math.cos(angle), Math.sin(angle)]);
    const work = {
        tangent: new THREE.Vector3(),
        toCamera: new THREE.Vector3(),
        basis: new THREE.Matrix4(),
        up: new THREE.Vector3(),
        across: new THREE.Vector3(),
        facing: new THREE.Vector3(),
        end: new THREE.Vector3()
    };

    const updateBand = () => {
        const hang = sim.nodes[LANYARD_JOINTS];
        const reach = LANYARD_EYELET_RADIUS + LANYARD_CLAMP_BODY + 0.05;
        let guide = LANYARD_JOINTS - 1;
        while (guide > 0 && sim.nodes[guide].distanceTo(hang) < reach * 1.1) guide--;
        const axis = work.up.subVectors(sim.nodes[guide], hang);
        if (axis.lengthSq() < 1e-8) axis.set(0, 1, 0).applyQuaternion(sim.body.quaternion);
        axis.normalize();
        mouth.copy(hang).addScaledVector(axis, reach);
        tuck.copy(hang).addScaledVector(axis, LANYARD_EYELET_RADIUS + LANYARD_CLAMP_BODY * 0.35);
        controls.length = 0;
        for (let i = 0; i <= guide; i++) controls.push(sim.nodes[i]);
        controls.push(mouth, tuck);
        curve.updateArcLengths();
        for (let i = 0; i < LANYARD_SAMPLES; i++) curve.getPointAt(i / (LANYARD_SAMPLES - 1), points[i]);
        const length = curve.getLength();
        const held = 1 - mouth.distanceTo(tuck) / Math.max(length, 0.001);
        const position = bandGeometry.getAttribute('position');
        const normal = bandGeometry.getAttribute('normal');
        const uv = bandGeometry.getAttribute('uv');
        const columns = LANYARD_BAND_COLUMNS.length;
        const restLength = sim.rest * LANYARD_JOINTS;
        const repeats = restLength / (strapScale * tileRatio);
        const width = strapScale / Math.pow(Math.max(1, length / Math.max(restLength, 0.001)), 0.35);
        const { tangent, toCamera, across, facing } = work;
        for (let i = 0; i < LANYARD_SAMPLES; i++) {
            tangent.subVectors(points[Math.min(LANYARD_SAMPLES - 1, i + 1)], points[Math.max(0, i - 1)]);
            if (tangent.lengthSq() < 1e-12) tangent.set(0, -1, 0);
            tangent.normalize();
            toCamera.subVectors(camera.position, points[i]).normalize();
            const side = sides[i].crossVectors(toCamera, tangent);
            if (side.lengthSq() < 1e-10) side.copy(i > 0 ? sides[i - 1] : lanyardScratch.a.set(1, 0, 0));
            side.normalize();
            if (i > 0 && side.dot(sides[i - 1]) < 0) side.negate();
            const angle = -sim.twist * Math.pow(Math.min(1, i / (LANYARD_SAMPLES - 1) / held), 1.3);
            facing.crossVectors(tangent, side);
            across.copy(side).multiplyScalar(Math.cos(angle)).addScaledVector(facing, Math.sin(angle));
            facing.crossVectors(tangent, across);
            const p = points[i];
            const v = (1 - i / (LANYARD_SAMPLES - 1)) * repeats;
            for (let c = 0; c < columns; c++) {
                const k = i * columns + c;
                const offset = (LANYARD_BAND_COLUMNS[c] - 0.5) * width;
                const [bendCos, bendSin] = bends[c];
                position.setXYZ(k, p.x + across.x * offset, p.y + across.y * offset, p.z + across.z * offset);
                normal.setXYZ(
                    k,
                    facing.x * bendCos + across.x * bendSin,
                    facing.y * bendCos + across.y * bendSin,
                    facing.z * bendCos + across.z * bendSin
                );
                uv.setXY(k, LANYARD_BAND_COLUMNS[c], v);
            }
        }
        work.end.copy(across);
        position.needsUpdate = true;
        normal.needsUpdate = true;
        uv.needsUpdate = true;

        across.copy(work.end).addScaledVector(axis, -work.end.dot(axis)).normalize();
        facing.crossVectors(across, axis).normalize();
        work.basis.makeBasis(across, axis, facing);
        clampGroup.quaternion.setFromRotationMatrix(work.basis);
        clampGroup.position.copy(hang);
    };

    const render = () => {
        cardGroup.position.copy(sim.body.position);
        cardGroup.quaternion.copy(sim.body.quaternion);
        updateBand();
        renderer.render(scene, camera);
    };

    const physics = () => {
        const s = options;
        const gravity = 40 * lanyardClamp(s.gravity, 0, 3);
        const weight = Math.max(gravity, 20);
        const springy = lanyardClamp(s.elasticity, 0, 1);
        const settle = lanyardClamp(s.damping, 0, 1);
        return {
            gravity,
            hold: weight * lanyardMix(2.2, 5.5, springy),
            stiffness: weight * 10 * LANYARD_JOINTS,
            spring: weight * lanyardMix(0.1, 0.4, springy) * LANYARD_JOINTS,
            bandDamping: weight * lanyardMix(0.3, 0.08, springy) * LANYARD_JOINTS,
            linearDrag: 0.25 * Math.pow(16, settle),
            angularDrag: 0.5 * Math.pow(12, settle),
            air: 0.15,
            broadside: 0.5,
            spinAir: 0.03,
            nodeDrag: 2,
            nodeAir: 0.2,
            twist: 30,
            twistDamping: 3,
            grip: 40,
            gripDamping: 6,
            breeze: reducedMotion ? 0 : lanyardClamp(s.breeze, 0, 1)
        };
    };

    const tick = now => {
        raf = 0;
        if (!alive) return;
        const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000));
        last = now;
        time += dt;
        const current = physics();
        lanyardStepSimulation(sim, dt, current, time);
        const body = sim.body;
        if (!Number.isFinite(body.position.x + body.position.y + body.position.z + body.quaternion.w)) {
            sim.grab = null;
            lanyardPlaceHanging(sim, layout, false);
        }
        render();
        const resting = sim.calm > 1.2 && !sim.grab && current.breeze === 0;
        if (visible && !resting) raf = requestAnimationFrame(tick);
    };

    const start = () => {
        if (raf || !visible || !alive) return;
        sim.calm = 0;
        last = performance.now();
        raf = requestAnimationFrame(tick);
    };

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const toPointer = event => {
        const rect = canvas.getBoundingClientRect();
        pointer.set(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1
        );
        raycaster.setFromCamera(pointer, camera);
    };

    const pickCard = () => {
        cardGroup.updateMatrixWorld();
        const hits = raycaster.intersectObjects([bodyMesh, frontMesh, backMesh], false);
        return hits[0] || null;
    };

    const setCursor = value => {
        if (canvas.style.cursor !== value) canvas.style.cursor = value;
    };

    const flip = point => {
        const body = sim.body;
        const up = lanyardScratch.a.set(0, 1, 0).applyQuaternion(body.quaternion);
        let direction = sim.turn > 0 ? -1 : 1;
        if (sim.turn === 0) {
            const away = lanyardScratch.c.subVectors(point, camera.position).normalize();
            direction = lanyardScratch.b.subVectors(point, body.position).cross(away).dot(up) < 0 ? -1 : 1;
        }
        sim.turn = sim.turn === 0 ? Math.PI * direction : 0;
        body.angular.addScaledVector(up, LANYARD_FLIP_SPIN * direction);
    };

    const onPointerDown = event => {
        if (!options.interactive || event.button > 0) return;
        toPointer(event);
        const hit = pickCard();
        if (!hit) return;
        sim.grab = {
            local: hit.point.clone().sub(sim.body.position).applyQuaternion(sim.body.quaternion.clone().invert()),
            rotation: sim.body.quaternion.clone(),
            reach: hit.distance,
            from: hit.point.clone(),
            target: hit.point.clone()
        };
        press = { x: event.clientX, y: event.clientY, time: performance.now(), point: hit.point.clone() };
        if (canvas.setPointerCapture) {
            try { canvas.setPointerCapture(event.pointerId); } catch {}
        }
        setCursor('grabbing');
        event.preventDefault();
        start();
    };

    const onPointerMove = event => {
        if (!options.interactive) return;
        toPointer(event);
        if (sim.grab) {
            if (press && Math.hypot(event.clientX - press.x, event.clientY - press.y) > 6) press = null;
            raycaster.ray.at(sim.grab.reach, sim.grab.target);
            start();
            return;
        }
        if (event.pointerType === 'touch') return;
        hovering = !!pickCard();
        setCursor(hovering ? 'grab' : '');
    };

    const onPointerUp = event => {
        if (!sim.grab) return;
        sim.grab = null;
        if (press && event.type === 'pointerup' && performance.now() - press.time < 450) flip(press.point);
        press = null;
        if (canvas.releasePointerCapture) {
            try { canvas.releasePointerCapture(event.pointerId); } catch {}
        }
        setCursor(hovering && event.pointerType !== 'touch' ? 'grab' : '');
        start();
    };

    const onTouchStart = event => {
        if (!options.interactive || event.touches.length !== 1) return;
        toPointer(event.touches[0]);
        if (pickCard()) event.preventDefault();
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('lostpointercapture', onPointerUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });

    const resize = () => {
        view.width = Math.max(1, container.clientWidth);
        view.height = Math.max(1, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(view.width, view.height, false);
        apply();
        render();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
    });
    intersectionObserver.observe(container);

    const onVisibility = () => {
        if (!document.hidden) start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    resize();

    return {
        repaintFaces: paintFaces,
        destroy: () => {
            alive = false;
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            canvas.removeEventListener('pointerdown', onPointerDown);
            canvas.removeEventListener('pointermove', onPointerMove);
            canvas.removeEventListener('pointerup', onPointerUp);
            canvas.removeEventListener('pointercancel', onPointerUp);
            canvas.removeEventListener('lostpointercapture', onPointerUp);
            canvas.removeEventListener('touchstart', onTouchStart);
            [bodyMesh, frontMesh, backMesh, ring, clampMesh, eyelet, band].forEach(mesh => mesh.geometry && mesh.geometry.dispose());
            [frontMaterial, backMaterial, edgeMaterial, metalMaterial, bandMaterial].forEach(mat => mat.dispose());
            [frontTexture, backTexture, strapTexture, grain, weave].forEach(tex => tex.dispose());
            environment.dispose();
            renderer.dispose();
            if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        }
    };
}

function initHeroLanyard() {
    const container = document.getElementById("lanyard-canvas-container");
    if (!container) return;

    // Preload data URI avatar image early
    if (typeof window !== 'undefined' && window.HERO_AVATAR_DATA_URI && !window.heroAvatarDataImage) {
        const img = new Image();
        img.onload = () => {
            if (window.heroLanyardInstance && typeof window.heroLanyardInstance.repaintFaces === 'function') {
                window.heroLanyardInstance.repaintFaces();
            }
        };
        img.src = window.HERO_AVATAR_DATA_URI;
        window.heroAvatarDataImage = img;
    }

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (window.heroLanyardInstance && typeof window.heroLanyardInstance.repaintFaces === 'function') {
                window.heroLanyardInstance.repaintFaces();
            }
        });
    }

    let attempts = 0;
    const startLanyard = () => {
        if (typeof THREE === "undefined") {
            attempts++;
            if (attempts < 60) {
                setTimeout(startLanyard, 100);
            } else {
                console.warn("Three.js not loaded in time for Lanyard");
            }
            return;
        }

        try {
            const avatarSrc = (typeof window !== 'undefined' && window.HERO_AVATAR_DATA_URI) ? window.HERO_AVATAR_DATA_URI : 'assets/prof-img.png';
            window.heroLanyardInstance = createLanyard(container, {
                frontImage: avatarSrc,
                backImage: null,
                imageFit: 'cover',
                cardColor: '#0E0F15',
                orientation: 'portrait',
                finish: 'matte',
                cornerRadius: 0.28,
                size: 0.62,
                anchor: 'center',
                strapLength: 0.44,
                strapColor: '#0E0F15',
                strapWidth: 0.72,
                metal: 'gold',
                gravity: 1,
                damping: 0.5,
                elasticity: 0.55,
                breeze: 0.45,
                interactive: true,
                intro: true
            });
        } catch (err) {
            console.error("Failed to initialize Lanyard 3D component:", err);
        }
    };

    startLanyard();
}


// ━━━ 9. MOUNT AND EVENT LISTENERS ━━━

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

    // Journey (React Bits ScrollStack) & Social
    // Journey (React Bits ScrollStack - Main Page Embedded) & Social
    const journeyStackEl = document.getElementById("journey-stack");
    const journeyGrid = document.getElementById("journey-grid");
    if (journeyStackEl && journeyGrid) {
        const stackPos = window.innerWidth < 640 ? 85 : 115;
        journeyGrid.innerHTML = renderJourney(journeyData, {
            itemDistance: 140,
            itemStackDistance: 24,
            stackPosition: stackPos
        });
        initScrollStack(journeyStackEl, {
            itemDistance: 140,
            itemStackDistance: 24,
            stackPosition: stackPos,
            itemScale: 0.045,
            baseScale: 0.85,
            dimAmount: 0.22,
            blurAmount: 0,
            tiltAmount: 3.5,
            rotationAmount: 1.2,
            holdDistance: 220,
            smoothScroll: false,
            snap: false,
            useWindowScroll: true
        });
    } else if (journeyGrid) {
        journeyGrid.innerHTML = renderJourney(journeyData);
    }
    document.getElementById("footer-social").innerHTML = renderSocial(socialLinks);

    // Interactive Engine
    initSquishyNavbar();
    initMouseSpotlight();
    initTiltEffect();
    setupSlingBackToTop();
    initTearTicketGate();
    initHeroLanyard();

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