// =========================================================
// PROFILE CONFIGURATION - EDIT THIS SECTION ONLY
// =========================================================
const PROFILE = {
    // Basic Info
    name: "Saumitra Rajput",
    role: "Azure Administrator & Cloud Engineer",
    shortRole: "Cloud & DevOps Engineer",
    location: "Lucknow, Uttar Pradesh, India (Open to Remote Any Location)",
    email: "saumitrarajput3jan@gmail.com",
    
    // Social Links
    social: {
        linkedin: "https://www.linkedin.com/in/saumitra-rajput-18268120a/",
        github: "https://github.com/saumitra-rajput",
        linkhub: "https://saumitra-rajput.github.io/portfolio/",
        resume: "assets/docs/saumitra-rajput.pdf",
        certifications: "https://learn.microsoft.com/en-us/users/saumitrarajput-5854/credentials/certifications"
    },

    // Stats for Hero Section
    stats: [
        { label: "Core Strength", value: "Azure" },
        { label: "Certifications", value: "5x" },
        { label: "Goal", value: "DevOps Engineer" }
    ],

    // Skills Configuration
    skills: {
        visual: [
            { icon: '<i class="fa-brands fa-microsoft"></i>', name: 'Azure' },
            { icon: '<i class="fa-brands fa-linux"></i>', name: 'Linux' },
            { icon: '<i class="fa-brands fa-aws"></i>', name: 'AWS' },
            { icon: '<i class="fa-brands fa-docker"></i>', name: 'Docker' },
            { icon: '<i class="fa-brands fa-git-alt"></i>', name: 'Git' },
            { icon: '<i class="fa-brands fa-github"></i>', name: 'GitHub' },
            { icon: '<i class="fa-solid fa-gears"></i>', name: 'CI/CD' },
            { icon: '<i class="fa-solid fa-dharmachakra"></i>', name: 'K8s' }
        ],
        list: [
            { title: 'Microsoft Azure Cloud', desc: 'VMs, Storage Accounts, VNets, NSG, Azure AD, App Services, P2S/S2S VPN, Azure Policy, RBAC, PIM', percent: '90%' },
            { title: 'Linux Administration', desc: 'Users, Permissions, Processes, Networking, Services, Monitoring, Bash Scripting', percent: '85%' },
            { title: 'DevOps & Automation', desc: 'Docker, GitHub Actions, CI/CD Concepts, YAML, Azure DevOps Basics', percent: '75%' },
            { title: 'Infrastructure & Security', desc: 'IAM, RBAC, PIM, Azure Policy, Disaster Recovery, Backup, Cross-region Replication', percent: '88%' },
            { title: 'AWS Cloud', desc: 'EC2, S3, IAM, VPC (Fundamentals)', percent: '60%' },
            { title: 'Containers & Orchestration', desc: 'Docker, Docker Compose, Kubernetes (Learning)', percent: '65%' }
        ]
    },

    // Projects Configuration - USING JSDELIVR URLs
    projects: [
        {
            title: 'Linux Administration (MyLinux)',
            description: 'Hands-on Linux administration project covering user and group management, permissions, process monitoring, package management, service configuration, networking basics, and shell scripting. Built as a structured lab environment to strengthen system-level troubleshooting and automation skills for DevOps.',
            imageUrl: 'https://cdn.jsdelivr.net/gh/saumitra-rajput/portfolio@dev/assets/images/linux.webp',
            tags: ['Linux', 'User Management', 'Networking', 'Linux Admin', 'Troubleshooting'],
            link: 'https://github.com/saumitra-rajput/my-linux'
        },
        {
            title: 'Shell Scripting',
            description: 'Developed a modular Bash script to monitor system health including CPU usage, memory consumption, disk utilization, uptime, and top resource-intensive processes. Implemented strict error handling using set -euo pipefail and structured functions for production-ready automation.',
            imageUrl: 'https://cdn.jsdelivr.net/gh/saumitra-rajput/portfolio@dev/assets/images/bash.webp',
            tags: ['Bash Scripting', 'Linux', 'Automation', 'System Monitoring'],
            link: 'https://github.com/saumitra-rajput/bash-scripting'
        },
        {
            title: 'Azure Cloud Infrastructure Deployment',
            description: 'Provisioned and managed Azure Virtual Machines, Storage Accounts, VNets, and NSGs. Configured secure inbound rules and deployed a web server (Nginx) to host applications while following cloud security best practices.',
            imageUrl: 'https://cdn.jsdelivr.net/gh/saumitra-rajput/portfolio@dev/assets/images/azure.webp',
            tags: ['Microsoft Azure', 'VMs', 'Networking', 'Azure Security'],
            link: 'https://github.com/saumitra-rajput/my-azure'
        },
        {
            title: 'Microsoft Azure Certifications (5x Certified)',
            description: 'Earned multiple Microsoft Azure certifications validating expertise in Azure administration, security, AI engineering, and cloud services. Demonstrates strong understanding of Azure infrastructure, identity management, and cloud best practices.',
            imageUrl: 'https://cdn.jsdelivr.net/gh/saumitra-rajput/portfolio@dev/assets/images/cert.webp',
            tags: ['AZ-104', 'AZ-500', 'AZ-900', 'AI-900', 'SC-900', 'GitHub Foundations'],
            link: 'https://learn.microsoft.com/en-us/users/saumitrarajput-5854/credentials/certifications'
        }
    ],

    // Timeline Configuration
    timeline: [
        {
            category: 'education',
            icon: '🎓',
            year: '2018 – 2021',
            title: 'Bachelor of Arts',
            company: 'Lucknow University',
            description: 'Developed strong analytical, communication, and critical thinking skills through academic study, while independently building technical expertise in Linux, Cloud Computing, and Python.'
        },
        {
            category: 'work',
            icon: '💼',
            year: 'June 2021 – June 2022',
            title: 'Executive – (Zomato Project)',
            company: 'Startek',
            description: 'Handled customer operations across India and UAE regions, resolving high-volume service issues while maintaining SLA compliance. Contributed to process optimization within the Rider Assert system, focusing on digital efficiency and automation improvements. Recognized as Winner of the “All Ideas Matter” Contest (May 26, 2022) for innovation-driven process enhancement.',
            skills: ['Incident Management', 'Process Improvement', 'SLA Management', 'Operations Support', 'Automation Mindset']
        },
        {
            category: 'work',
            icon: '💼',
            year: 'Nov 2022 – Feb 2026',
            title: 'Analyst – Cloud Engineer (Tenet Healthcare Project)',
            company: 'HCL Technologies',
            description: 'Managed and supported enterprise-scale Azure cloud infrastructure including Virtual Machines, VNets, Load Balancers, NSGs, Azure SQL VMs, DNS, Policies, and Subscriptions. Worked extensively on Azure IAM (Azure AD, RBAC, PIM, Access Policies, Storage, VMs) to ensure secure access governance. Configured VNET peering (regional & global), P2S/S2S VPN, Application Gateway, and Availability Sets. Performed backup, disaster recovery, and cross-region replication for critical workloads.',
            skills: ['Microsoft Azure', 'Azure AD & RBAC', 'Azure Policy', 'VNet Peering', 'VPN', 'Azure CLI', 'ServiceNow']
        },
        {
            category: 'Upskilling',
            icon: '🚀',
            year: '2026 – Present',
            title: 'Learning DevOps',
            company: 'Train with Shubham',
            description: 'Currently building expertise in Docker, GitHub, Kubernetes, Prometheus, Ansible, Terraform and Python for DevOps. Expanding knowledge toward automation, infrastructure as code, and monitoring.',
            skills: ['Docker', 'Kubernetes', 'Ansible', 'Python', 'Monitoring', 'GitHub Actions']
        }
    ],

    // About Section
    about: {
        intro: "I am a 5x Azure-certified Cloud Engineer with 2+ years of enterprise experience supporting production healthcare workloads. Experienced in managing Azure VMs, VNet Peering, VPN (P2S/S2S), Azure AD (Entra ID), RBAC, PIM, Azure Policy, and Disaster Recovery strategies.",
        fullBio: "With hands-on experience in enterprise Azure environments at HCL Technologies, I have managed cloud infrastructure, identity governance, networking, backup, and cross-region replication for critical workloads. My foundation in infrastructure operations and cloud support has strengthened my understanding of system reliability, security, and scalability.",
        currentFocus: "Currently strengthening DevOps fundamentals including Bash scripting, automation, GitHub Actions, Docker, Kubernetes, monitoring tools, and infrastructure best practices.",
        careerGoal: "To transition into a DevOps Engineer role by leveraging my Azure expertise, Linux administration skills, and automation mindset to design scalable, secure, and resilient cloud-native infrastructure solutions."
    },

    // Availability Tags
    availability: [
        "Azure Administrator",
        "Cloud Engineer",
        "Jr. DevOps Engineer",
        "Azure Security Engineer"
    ]
};

// =========================================================
// RENDER ENGINE - DON'T EDIT BELOW THIS LINE
// =========================================================
class ProfileRenderer {
    constructor(config) {
        this.config = config;
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.renderAll();
            this.setupInteractions();
        });
    }

    renderAll() {
        this.renderStats();
        this.renderAboutCards();
        this.renderSkills();
        this.renderProjects();
        this.renderTimeline();
        this.renderContactInfo();
        this.updateActiveMenuItem();
        this.setupFadeInObserver();
    }

    renderStats() {
        const container = document.getElementById('stats-container');
        if (!container) return;
        
        container.innerHTML = this.config.stats.map(stat => `
            <div class="stat-card">
                <span class="stat-number">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }

    renderAboutCards() {
        const container = document.getElementById('about-cards-container');
        if (!container) return;
        
        container.innerHTML = `
            <div class="about-card">
                <h3>🎯 Current Focus</h3>
                <p>${this.config.about.currentFocus}</p>
            </div>
            <div class="about-card">
                <h3>💡 Career Goal</h3>
                <p>${this.config.about.careerGoal}</p>
            </div>
        `;
    }

    renderSkills() {
        const circle = document.getElementById('skillsCircle');
        const list = document.getElementById('skillsList');

        if (circle) {
            circle.innerHTML = this.config.skills.visual.map(s => `
                <div class="skill-node">
                    <div class="skill-icon">${s.icon}</div>
                    <div class="skill-name">${s.name}</div>
                </div>
            `).join('') + `<div class="skills-center">☁</div>`;
        }

        if (list) {
            list.innerHTML = this.config.skills.list.map(s => `
                <div class="skill-item">
                    <h4>${s.title}</h4>
                    <p>${s.desc}</p>
                    <div class="skill-progress">
                        <div class="skill-progress-bar" style="width:${s.percent}"></div>
                    </div>
                </div>
            `).join('');
        }
    }

    renderProjects() {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;

        grid.innerHTML = this.config.projects.map(p => `
            <a href="${p.link}" target="_blank" class="portfolio-link">
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="${p.imageUrl}" alt="${p.title}" loading="lazy">
                    </div>
                    <div class="portfolio-content">
                        <h3>${p.title}</h3>
                        <div class="spacer"></div>
                        <p>${p.description}</p>
                        <div class="spacer"></div>
                        <div class="portfolio-tags">
                            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </a>
        `).join('');
    }

    renderTimeline(filter = 'all') {
        const container = document.getElementById('timelineContainer');
        if (!container) return;

        const filtered = this.config.timeline.filter(i => 
            filter === 'all' || i.category === filter
        );

        const html = filtered.map(i => `
            <div class="timeline-item visible" data-category="${i.category}">
                <div class="timeline-node">${i.icon}</div>
                <div class="timeline-content">
                    <div class="timeline-year">${i.year}</div>
                    <h3 class="timeline-title">${i.title}</h3>
                    <div class="timeline-company">${i.company}</div>
                    <p class="timeline-description">${i.description}</p>
                    ${i.skills ? `
                        <div class="timeline-skills">
                            ${i.skills.map(s => `<span class="timeline-skill">${s}</span>`).join('')}
                        </div>` : ''}
                </div>
            </div>
        `).join('');

        container.innerHTML = `
            <div class="timeline-line"></div>
            <div class="timeline-progress"></div>
            ${html}
        `;

        this.setupTimelineFilters();
    }

    renderContactInfo() {
        const linksContainer = document.getElementById('contact-links');
        if (linksContainer) {
            linksContainer.innerHTML = `
                <a href="${this.config.social.linkedin}" target="_blank" class="contact-btn">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
                <a href="${this.config.social.github}" target="_blank" class="contact-btn">
                    <i class="fa-brands fa-github"></i> GitHub
                </a>
                <a href="mailto:${this.config.email}" class="contact-btn email-hover">
                    <i class="fa-solid fa-envelope"></i> Email
                </a>
                <a href="${this.config.social.resume}" class="contact-btn resume-btn" download>
                    <i class="fa-solid fa-file-arrow-down"></i> Resume
                </a>
                <a href="${this.config.social.certifications}" target="_blank" class="contact-btn">
                    <i class="fa-solid fa-certificate"></i> Certifications
                </a>
            `;
        }

        const tagsContainer = document.getElementById('availability-tags');
        if (tagsContainer) {
            tagsContainer.innerHTML = this.config.availability.map(tag => 
                `<span class="tag-item">${tag}</span>`
            ).join('');
        }
    }

    setupInteractions() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupTimelineFilters();
        window.addEventListener('scroll', () => this.updateActiveMenuItem());
    }

    setupTimelineFilters() {
        document.querySelectorAll('.timeline-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.timeline-filter').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderTimeline(btn.dataset.filter);
            });
        });
    }

    setupMobileMenu() {
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        if (mobileBtn && mobileNav) {
            mobileBtn.addEventListener('click', () => {
                mobileBtn.classList.toggle('active');
                mobileNav.classList.toggle('active');
            });

            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileBtn.classList.remove('active');
                    mobileNav.classList.remove('active');
                });
            });
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    updateActiveMenuItem() {
        const y = window.scrollY;
        document.querySelectorAll('section[id]').forEach(sec => {
            const top = sec.offsetTop - 120;
            const bottom = top + sec.offsetHeight;
            if (y >= top && y < bottom) {
                document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => a.classList.remove('active'));
                document.querySelectorAll(`a[href="#${sec.id}"]`).forEach(a => a.classList.add('active'));
            }
        });
    }

    setupFadeInObserver() {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }
}

// Initialize the renderer
new ProfileRenderer(PROFILE);