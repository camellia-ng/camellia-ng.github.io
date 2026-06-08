// Project Data Store for dynamic modal injection
const projectsData = {
    "1": {
        title: "E-commerce Sales Performance Dashboard",
        category: "Power BI / Excel",
        image: "assets/project_ecommerce.png",
        description: "This is an in-depth analytics project aimed at tracking the retail sales performance of an online chain store with over 50,000 transactions. The core objective is to identify key products, analyze sales trends over time, and evaluate the operational performance of different geographic regions.",
        stack: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
        details: [
            "<strong>Data Modeling:</strong> Normalized and built a Snowflake schema combining Fact tables and multiple Dimension tables (Customer, Product, Branch, Time).",
            "<strong>Data Preparation:</strong> Utilized Power Query to clean null values, adjust date formats, and handle outliers. Created advanced DAX expressions (YTD, MTD, Rolling 12-Month Sales) for dynamic calculations.",
            "<strong>Insights:</strong> Discovered an 18% YoY revenue growth driven by Q3 promotional campaigns; however, the Fashion category showed a high return rate (8.5%), which squeezed net margins.",
            "<strong>Recommendations:</strong> Adjust inventory policy for the Fashion category and focus marketing budget on the Southern region, which contributes 42% of total sales."
        ],
        github: "https://github.com/giang-ntt",
        demo: "#"
    },
    "2": {
        title: "Customer Segmentation & RFM Clustering",
        category: "Python",
        image: "assets/project_customer.png",
        description: "This project utilizes Python to perform RFM (Recency, Frequency, Monetary) analysis to segment an e-commerce customer database into distinct behavioral groups, allowing marketing teams to design targeted CRM campaigns.",
        stack: ["Python", "Pandas", "Scikit-learn", "K-Means", "Matplotlib", "Seaborn"],
        details: [
            "<strong>Data Wrangling:</strong> Handled a large e-commerce transaction dataset using Pandas, calculating RFM metrics for each unique customer.",
            "<strong>Clustering Algorithm:</strong> Applied the K-Means clustering algorithm. Utilized the Elbow Method and Silhouette Score to determine the optimal number of clusters (K = 4).",
            "<strong>Customer Profiles:</strong> Segmented customers into VIPs (high frequency, high spend), Loyalists, New Customers, and At-Risk Customers.",
            "<strong>Business Value:</strong> The VIP segment represents only 8% of the customer base but generates 35% of total revenue. Proposed automated email marketing campaigns for the At-Risk group, yielding a 5% increase in customer retention."
        ],
        github: "https://github.com/giang-ntt",
        demo: "#"
    },
    "3": {
        title: "HR Analytics & Employee Turnover Investigation",
        category: "SQL / Tableau",
        image: "assets/project_sql.png",
        description: "This project uses SQL to query an HR database of a major technology firm to analyze employee turnover rates. The findings were subsequently visualized via an interactive Tableau Dashboard.",
        stack: ["PostgreSQL", "Window Functions", "CTEs", "Tableau", "Database Design"],
        details: [
            "<strong>SQL Query Design:</strong> Wrote complex queries involving Joins, CTEs, and Window Functions to compute cumulative turnover rates by department.",
            "<strong>Correlation Analysis:</strong> Explored relationships between employee overtime hours, previous performance reviews, compensation levels, and resignation decisions.",
            "<strong>Key Findings:</strong> Employees working over 15 hours of overtime per week with below-average pay were 3x more likely to resign. Employees at their 2-year tenure had the highest turnover rate (24%).",
            "<strong>Business Recommendations:</strong> Review compensation policies for employees reaching their 2-year anniversary, and set a hard cap on weekly overtime hours for software engineers."
        ],
        github: "https://github.com/giang-ntt",
        demo: "#"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Custom Cursor Glow Effect
    const cursorGlow = document.getElementById("cursorGlow");
    document.addEventListener("mousemove", (e) => {
        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";
    });

    // 2. Dark/Light Theme Switching
    const themeToggle = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    // Load theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        
        // Custom animation effect for theme toggle icon rotation
        const icon = themeToggle.querySelector("i:not([style*='display: none'])");
        if (icon) {
            icon.style.transform = "scale(0.8) rotate(180deg)";
            setTimeout(() => { icon.style.transform = ""; }, 300);
        }
    });

    // 3. Simple typing effect for Hero Title
    const words = ["Aspiring Data Analyst", "Data Analytics Enthusiast", "Foreign Trade University Student"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000;
    const typedTextSpan = document.getElementById("heroTitle");

    function type() {
        if (!typedTextSpan) return;
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? erasingDelay : typingDelay;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = newWordDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect
    setTimeout(type, 1000);

    // 4. Navbar shrink and shadow on scroll
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 5. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("open");
            navMenu.classList.toggle("open");
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("open");
                navMenu.classList.remove("open");
            });
        });
    }

    // 6. Active Nav Link on Scroll (IntersectionObserver)
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // triggers when section occupies center part of screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Trigger skills bar animation when skills section is in view
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add("active");
                }
            });
        }, { threshold: 0.15 });
        skillsObserver.observe(skillsSection);
    }

    // 7. Modals handling (Projects and Certificates)
    const projectModal = document.getElementById("projectModal");
    const certModal = document.getElementById("certModal");
    const modalBody = document.getElementById("modalBody");
    
    // Open Project Modal
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-view-project")) {
            const projectId = e.target.getAttribute("data-project-id");
            const project = projectsData[projectId];

            if (project) {
                // Build dynamic modal content
                let stackBadges = project.stack.map(s => `<span class="tech-badge">${s}</span>`).join("");
                let bulletPoints = project.details.map(d => `<li><i class="fa-solid fa-chevron-right"></i><div>${d}</div></li>`).join("");

                modalBody.innerHTML = `
                    <div class="project-modal-grid">
                        <div class="proj-modal-left">
                            <div class="proj-modal-img-container">
                                <img src="${project.image}" alt="${project.title}" class="proj-modal-img">
                            </div>
                            <div class="proj-modal-actions">
                                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-brands fa-github"></i> GitHub Code</a>
                                <a href="${project.demo}" class="btn btn-secondary btn-sm"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo Mockup</a>
                            </div>
                        </div>
                        <div class="proj-modal-details">
                            <h3 class="proj-modal-title">${project.title}</h3>
                            <span class="cert-tag cert-excel">${project.category}</span>
                            <p class="proj-modal-desc">${project.description}</p>
                            
                            <div class="proj-modal-stack-section">
                                <h4 class="proj-modal-section-title">Technology Stack</h4>
                                <div class="project-tech-stack">
                                    ${stackBadges}
                                </div>
                            </div>
                            
                            <div class="proj-modal-details-section">
                                <h4 class="proj-modal-section-title">Technical Details & Findings</h4>
                                <ul class="proj-modal-bullet-list">
                                    ${bulletPoints}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;

                openModal(projectModal);
            }
        }
    });

    // Close Project Modal
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalOverlay = document.getElementById("modalOverlay");
    
    if (modalCloseBtn && modalOverlay) {
        modalCloseBtn.addEventListener("click", () => closeModal(projectModal));
        modalOverlay.addEventListener("click", () => closeModal(projectModal));
    }

    // Open Certificate Modal
    const btnCertModal = document.getElementById("btnCertModal");
    if (btnCertModal) {
        btnCertModal.addEventListener("click", () => openModal(certModal));
    }

    // Close Certificate Modal
    const certModalCloseBtn = document.getElementById("certModalCloseBtn");
    const certModalOverlay = document.getElementById("certModalOverlay");
    
    if (certModalCloseBtn && certModalOverlay) {
        certModalCloseBtn.addEventListener("click", () => closeModal(certModal));
        certModalOverlay.addEventListener("click", () => closeModal(certModal));
    }

    // General Modal Functions
    function openModal(modal) {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeModal(modal) {
        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Re-enable background scroll
    }

    // Close modals on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (projectModal.classList.contains("open")) closeModal(projectModal);
            if (certModal.classList.contains("open")) closeModal(certModal);
        }
    });

    // 8. Contact Form Simulation and Toast Notification
    const contactForm = document.getElementById("contactForm");
    const toastContainer = document.getElementById("toastContainer");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Disable submit button during processing simulation
            const btnSubmit = document.getElementById("btnSubmitForm");
            const originalText = btnSubmit.innerHTML;
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...`;

            // Simulate server network latency
            setTimeout(() => {
                // Show Success Toast
                showToast("Message sent successfully! Thank you.", "success");

                // Reset form and submit button
                contactForm.reset();
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = originalText;
            }, 1500);
        });
    }

    function showToast(message, type = "success") {
        const toast = document.createElement("div");
        toast.className = `toast toast-${type}`;
        
        let iconClass = "fa-circle-check";
        if (type === "error") iconClass = "fa-circle-xmark";
        
        toast.innerHTML = `
            <i class="fa-solid ${iconClass}"></i>
            <span>${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        // Remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove("show");
            // Wait for transition to end before removing element
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }
});

// Inject basic fade-in keyframes style dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(styleSheet);
