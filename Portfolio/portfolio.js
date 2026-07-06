// ━━━ DATA LAYER ━━
const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" }
];

const skills = [
    { name: "Python & Data Science (NumPy/Pandas)", level: 64, color: "from-[#7ec8e3] to-[#4a90d9]" },
    { name: "Machine Learning (SciKit-Learn)", level: 28, color: "from-[#b39ddb] to-[#9c27b0]" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: 25, color: "from-[#f4a261] to-[#e76f51]" },
    { name: "NLP & Computer Vision (OpenCV)", level: 27, color: "from-[#9c27b0] to-[#7ec8e3]" },
    { name: "Computer Networks & Operating systems", level: 30, color: "from-[#7ec8e3] to-[#b39ddb]" },
    { name: "Version Control & IDEs", level: 85, color: "from-[#f4a261] to-[#9c27b0]" },
    { name: "Workflow Automations (n8n/Zapier)", level: 23, color: "from-[#f4a261] to-[#9c27b0]" }
];

const projects = [
    {
        title: "Stark – AI Study Companion",
        desc: "Stark is a lightweight, AI study companion designed to streamline student learning and productivity. Frontend developed in MIT App Inventor, the application seamlessly communicates with a dynamic backend hosted on Google Colab with custom API integrations.",
        tags: ["Python", "Google Colab", "MIT App Inventor"],
        img: "https://ebookmakerapi.com/blog/wp-content/uploads/2024/07/the-benefits-of-ai-powered-writing-assistants-ebook-creator-ai-1024x559.webp",
        link: "#"
    },
    {
        title: "E-Commerce Database Management System",
        desc: "A database-driven e-commerce management system using Python and MySQL to efficiently manage product information and customer interactions. The application connects Python with a MySQL database to display available products, allow users to select items, and retrieve product details in real time.",
        tags: ["Python", "MySQL", "DBMS"],
        img: "https://www.orbitechno.com/assets/images/animal/1736480292-1590826222.jpg",
        link: "#"
    }
    /*  {
        title: "AutoML Pipeline",
        desc: "End-to-end automated ML pipeline with feature engineering, model selection, and hyperparameter tuning.",
        tags: ["Scikit-learn", "Streamlit", "AWS"],
        img: "https://picsum.photos/600/400?random=30",
        link: "#"
    },
    {
        title: "Multi-Agent Deep Research Assistant",
        desc: "An AI-powered multi-agent research assistant that automates web research, fact-checking, report writing, code generation, data analysis, and presentation creation using LLMs and Retrieval-Augmented Generation (RAG).",
        tags: ["Python", "LangChain", "RAG"],
        img: "https://picsum.photos/600/400?random=30",
        link: "#"
    },
    {
        title: "Multi-Agent Deep Research Assistant",
        desc: "An AI-powered multi-agent research assistant that automates web research, fact-checking, report writing, code generation, data analysis, and presentation creation using LLMs and Retrieval-Augmented Generation (RAG).",
        tags: ["Python", "LangChain", "RAG"],
        img: "https://picsum.photos/600/400?random=30",
        link: "#"
    }*/
];

const journeyData = [
    {
        type: "Schooling",
        institution: "Ebenezer Marcus International School (Class 12th)",
        board: "CBSE Curriculum",
        duration: "Completed",
        icon: "fas fa-school",
        color: "hover:border-[#7ec8e3]/40 hover:shadow-[#7ec8e3]/10",
        badgeColor: "bg-[#7ec8e3]/10 text-[#7ec8e3] border-[#7ec8e3]/30",
        details: "Built a solid academic foundation focusing closely on Science, Mathematics, and foundational Computer Science principles."
    },
    {
        type: "Undergraduate",
        institution: "Chennai Institute of Technology",
        board: "B.E. Computer Science Engineering (AI/ML)",
        duration: "In Progress",
        icon: "fas fa-user-graduate",
        color: "hover:border-[#b4218b]/40 hover:shadow-[#b4218b]/10",
        badgeColor: "bg-[#b4218b]/10 text-[#b39ddb] border-[#b4218b]/30",
        details: "Actively specializing in Artificial Intelligence and Machine Learning. Developing smart backend tools, handling data management protocols, and exploring advanced algorithmic models."
    }
];

const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/JD-Jaidev/", label: "GitHub" },
    { icon: "fab fa-linkedin-in", href: "https://linkedin.com/in/jaidev-s/", label: "LinkedIn" },
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
];

// ━━━ RENDER FUNCTIONS ━━━
function renderNav(items) {
    return items.map(i =>
        `<li><a href= "${i.href}" class="nav-link text-[#a0a0b8] transition-colors duration-300 text-sm font-medium">${i.label}</a></li>`
    ).join("");
}

function renderSkills(items) {
    return items.map(s => `
                <div class="bg-[#12121a] border border-[#1e1e2a] rounded-2xl p-6 hover:border-[#b39ddb]/30 transition-all duration-300">
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-white font-semibold">${s.name}</span>
                        <span class="text-[#b39ddb] text-sm font-bold">${s.level}%</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill bg-gradient-to-r ${s.color}" data-level="${s.level}"></div>
                    </div>
                </div>
            `).join("");
}

function renderProjects(items) {
    return items.map(p => `
                <div class="project-card group relative w-[400px]">
                    <div class="relative overflow-hidden">
                        <img src="${p.img}" alt="${p.title}" loading="lazy" class="w-full h-52 object-cover">
                        <div class="project-overlay">
                            <div class="flex flex-wrap gap-2">
                                ${p.tags.map(t => `<span class="px-3 py-1 bg-[#9c27b0]/30 border border-[#9c27b0]/40 rounded-full text-xs text-[#b39ddb]">${t}</span>`).join("")}
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-2">${p.title}</h3>
                        <p class="text-[#a0a0b8] text-sm leading-relaxed">${p.desc}</p>
                    </div>
                    <div class="px-6 pb-6">
                        <a href="${p.link}" class="inline-flex items-center gap-2 text-[#7ec8e3] text-sm font-medium hover:text-[#b39ddb] transition-colors">
                            View Details <i class="fas fa-arrow-right text-xs"></i>
                        </a>
                    </div>
                </div>
            `).join("");
}

function renderJourney(items) {
    return items.map(j => `
        <div class="bg-[#12121a] border border-[#1e1e2a] rounded-2xl p-8 transition-all duration-400 transform hover:-translate-y-2 border-b-4 ${j.color} group relative overflow-hidden">
            <div class="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-[#b39ddb]/10 to-transparent blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            <div class="flex items-start justify-between mb-6">
                <div class="w-14 h-14 rounded-xl bg-[#1e1e2a] flex items-center justify-center text-2xl text-[#7ec8e3] border border-[#1e1e2a] group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-[#9c27b0] group-hover:to-[#7ec8e3] transition-all duration-300">
                    <i class="${j.icon}"></i>
                </div>
                <span class="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border ${j.badgeColor}">
                    ${j.duration}
                </span>
            </div>
            <span class="text-[#a0a0b8] text-xs font-bold uppercase tracking-widest block mb-1">${j.type}</span>
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#7ec8e3] transition-all duration-300">${j.institution}</h3>
            <p class="text-[#7ec8e3] font-medium text-sm mb-4">${j.board}</p>
            <p class="text-[#a0a0b8] text-sm leading-relaxed">${j.details}</p>
        </div>
    `).join("");
}

function renderSocial(items) {
    return items.map(s => `
                <a href="${s.href}" class="w-10 h-10 rounded-full bg-[#1e1e2a] flex items-center justify-center text-[#a0a0b8] hover:bg-[#9c27b0] hover:text-white transition-all duration-300" aria-label="${s.label}">
                    <i class="${s.icon}"></i>
                </a>
            `).join("");
}

// ━━━ MOUNT ━━━
document.getElementById("nav-list").innerHTML = renderNav(navItems);
document.getElementById("mobile-nav-list").innerHTML = renderNav(navItems);
document.getElementById("skills-grid").innerHTML = renderSkills(skills);
document.getElementById("projects-grid").innerHTML = renderProjects(projects);
document.getElementById("journey-grid").innerHTML = renderJourney(journeyData);
document.getElementById("footer-social").innerHTML = renderSocial(socialLinks);

// ━━━ ANIMATE PROGRESS BARS ON SCROLL ━━━
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar-fill');
    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !bar.dataset.animated) {
            bar.dataset.animated = "true";
            const level = bar.dataset.level;
            setTimeout(() => { bar.style.width = level + "%"; }, 200);
        }
    });
}
window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// ━━━ EVENT DELEGATION ━━━
document.addEventListener("click", function (e) {
    // Smooth scroll for anchor links
    const link = e.target.closest("a[href^='#']");
    if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            // Close mobile menu if open
            const mobileMenu = document.getElementById("mobile-menu");
            if (!mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("hidden");
            }
        }
    }

    // Mobile menu toggle
    const menuBtn = e.target.closest("#mobile-menu-btn");
    if (menuBtn) {
        e.preventDefault();
        const mobileMenu = document.getElementById("mobile-menu");
        mobileMenu.classList.toggle("hidden");
    }
});

// ━━━ CONTACT FORM HANDLING ━━━
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // Simulate sending
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        document.getElementById("form-success").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("form-success").classList.add("hidden");
        }, 4000);
    }, 1500);
});