// ━━━ DATA LAYER ━━
const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
];

const skills = [
    { name: "Python & Data Science", level: 52, color: "from-[#7ec8e3] to-[#4a90d9]" },
    { name: "Machine Learning", level: 30, color: "from-[#b39ddb] to-[#9c27b0]" },
    { name: "Deep Learning (TensorFlow/PyTorch)", level: 25, color: "from-[#f4a261] to-[#e76f51]" },
    { name: "NLP & Computer Vision", level: 27, color: "from-[#9c27b0] to-[#7ec8e3]" },
    { name: "Data Engineering & SQL", level: 40, color: "from-[#7ec8e3] to-[#b39ddb]" },
    { name: "MLOps & Deployment", level: 37, color: "from-[#f4a261] to-[#9c27b0]" }
];

const projects = [
    {
        title: "DeepVision Classifier",
        desc: "Custom CNN architecture achieving 97% accuracy on medical imaging dataset with real-time inference pipeline.",
        tags: ["PyTorch", "CNN", "Flask"],
        img: "https://picsum.photos/600/400?random=10",
        link: "#"
    },
    {
        title: "NLP Sentiment Engine",
        desc: "Transformer-based sentiment analysis system processing 10K+ reviews/min with multi-language support.",
        tags: ["BERT", "FastAPI", "Docker"],
        img: "https://picsum.photos/600/400?random=20",
        link: "#"
    },
    {
        title: "AutoML Pipeline",
        desc: "End-to-end automated ML pipeline with feature engineering, model selection, and hyperparameter tuning.",
        tags: ["Scikit-learn", "Streamlit", "AWS"],
        img: "https://picsum.photos/600/400?random=30",
        link: "#"
    }
    /*{
        title: "Multi-Agent Deep Research Assistant",
        desc: "An AI-powered multi-agent research assistant that automates web research, fact-checking, report writing, code generation, data analysis, and presentation creation using LLMs and Retrieval-Augmented Generation (RAG).",
        tags: ["Python", "LangChain", "RAG"],
        img: "https://picsum.photos/600/400?random=30",
        link: "#"
    }*/
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
                <div class="project-card group relative">
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