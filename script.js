// Project Data Store for dynamic modal injection
const projectsData = {
    "arima-forecasting": {
        title: "Forecasting Vietnam's Foreign Exchange Reserves in 2026 Using the ARIMA Model",
        category: "Time-Series Forecasting",
        role: "Co-author, Data Analyst",
        image: "assets/arima_forecast.png",
        description: "A time-series forecasting project to model and project Vietnam's foreign exchange reserves. Based on historical monthly IMF data (2016–2025), the study forecasts that Vietnam's reserves will continue an upward trend, reaching approximately $89,500 million (or $89.5 Billion) by December 2026.",
        stack: ["Eviews", "Excel", "ARIMA Model", "Time-Series Forecasting", "IMF Data"],
        details: [
            "<strong>Literature Review:</strong> Researched and synthesized relevant academic literature on time-series forecasting and international reserves.",
            "<strong>Data Processing:</strong> Collected, cleaned, and processed a monthly time-series dataset of 120 observations (January 2016 – December 2025) from the IMF database.",
            "<strong>Model Construction:</strong> Built and estimated the ARIMA forecasting model to project reserve levels."
        ],
        pdf: "projects/Dự báo trong kinh tế và kinh doanh/Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.pdf",
        data: "projects/Dự báo trong kinh tế và kinh doanh/Data_Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.csv"
    },
    "labor-structure": {
        title: "Labor Structure in Vietnam in the Context of the Fourth Industrial Revolution",
        category: "Published Research",
        role: "Co-author, Data Analyst",
        image: "assets/vietnam_labor.png",
        description: "An academic research paper published in the State Management Journal (No. 337, Feb 2026) analyzing the sectoral labor structure shifts in Vietnam. The paper highlights a major transition, including a decline in agricultural labor share from 44% in 2015 to 27.5% in 2024, and a rise in formal wage-earning employment to 50.5%.",
        stack: ["Excel", "Pivot Tables", "Shift-Share Analysis", "Demographics", "GSO Data"],
        details: [
            "<strong>Framework Synthesis:</strong> Conducted comprehensive research on industrial revolutions and labor market transitions in developing economies.",
            "<strong>Data Acquisition:</strong> Collected, structured, and cleaned national demographic and employment statistics from the General Statistics Office (GSO) from 2015 to 2024.",
            "<strong>Data Visualization:</strong> Performed sector-wise visualization and pivot table analysis to extract labor structure shift insights."
        ],
        pdf: "projects/Báo/Cơ cấu lao động ở Việt Nam trong bối cảnh cuộc cách mạng công nghiệp lần thứ tư _ Tạp chí Quản lý nhà nước.pdf",
        data: "projects/Báo/Dữ liệu thu thập.xlsx"
    },
    "gender-inequality": {
        title: "Impact of Gender Inequality in Labor and Employment on Economic Growth in Developing Countries (2015-2022)",
        category: "Econometric Analysis",
        role: "Co-author, Data Analyst",
        image: "assets/gender_equality.png",
        description: "An econometric panel study evaluating the impact of labor-market gender inequality on GDP per capita. Using a Feasible Generalized Least Squares (FGLS) estimator, the study finds that a 1% increase in female labor force participation raises GDP per capita by 0.385%, and gender equality in human development (GDI) has a positive impact coefficient of 0.542.",
        stack: ["Stata", "Excel", "Panel Regression", "FGLS Estimator", "World Bank Data"],
        details: [
            "<strong>Literature Review:</strong> Researched and synthesized economic literature on gender economics and economic development theories.",
            "<strong>Data Wrangling:</strong> Gathered, cleaned, and merged panel data across 45 developing nations over an 8-year timeframe, totaling 360 observations.",
            "<strong>Econometric Estimation:</strong> Developed, estimated, and validated panel data regression models (OLS, Fixed Effects, FGLS) to analyze relationships."
        ],
        pdf: "projects/Kinh tế phát triển/Tác động của bất bình đẳng giới trong lao động và việc làm đến tăng trưởng kinh tế tại các quốc gia đang phát triển giai đoạn 2015 - 2022.pdf",
        data: "projects/Kinh tế phát triển/Data.xlsx"
    },
    "economic-growth-drivers": {
        title: "Factors Affecting Economic Growth in Middle-Income and High-Income Country Groups (2005-2020)",
        category: "Comparative Policy Study",
        role: "Co-author, Data Analyst",
        image: "assets/growth_drivers.png",
        description: "A comparative panel analysis exploring the macroeconomic drivers of GDP growth in middle vs. high-income countries. The research shows that Human Capital (education) is the dominant driver in high-income countries (coefficient 0.425), whereas FDI (coefficient 0.245) and GFCF (coefficient 0.182) are highly significant in middle-income countries.",
        stack: ["Stata", "Excel", "Comparative Analysis", "Panel Regression", "Endogeneity & Exogeneity"],
        details: [
            "<strong>Theory Synthesis:</strong> Synthesized classical and endogenous growth theories and compiled macro-indicators (FDI, trade openness, human capital).",
            "<strong>Panel Processing:</strong> Collected, cleaned, and structured a macro panel dataset covering 70 countries (35 middle-income, 35 high-income) over 16 years, totaling 1,120 observations.",
            "<strong>Regression Modeling:</strong> Programmed panel regression models in Stata to compare growth elasticities, modeling the endogeneity and reverse causality of FDI and Trade Openness using lag structures, while contrasting with exogenous demographic controls."
        ],
        pdf: "projects/Tăng trưởng và phát triển/Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020.pdf",
        data: "projects/Tăng trưởng và phát triển/High income country data.xlsx"
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
    const words = ["Aspiring Data Analyst", "Quantitative Economics Researcher", "Foreign Trade University Student"];
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
    const menuCloseBtn = document.getElementById("menuCloseBtn");
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("open");
            navMenu.classList.toggle("open");
        });

        if (menuCloseBtn) {
            menuCloseBtn.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("open");
                navMenu.classList.remove("open");
            });
        }

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
        const projectCard = e.target.closest(".project-card");
        if (projectCard) {
            const projectId = projectCard.getAttribute("data-project-id");
            const project = projectsData[projectId];

            if (project) {
                // Build dynamic modal content
                let stackBadges = project.stack.map(s => `<span class="tech-badge">${s}</span>`).join("");
                let bulletPoints = project.details.map(d => `<li><i class="fa-solid fa-chevron-right"></i><div>${d}</div></li>`).join("");

                modalBody.innerHTML = `
                    <div class="project-modal-top-grid">
                        <div class="proj-modal-left">
                            <div class="proj-modal-img-container">
                                <img src="${project.image}" alt="${project.title}" class="proj-modal-img">
                            </div>
                            <div class="proj-modal-actions">
                                <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm"><i class="fa-regular fa-file-pdf"></i> Read Full Paper</a>
                                <a href="${project.data}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm"><i class="fa-regular fa-file-excel"></i> Explore Dataset</a>
                            </div>
                        </div>
                        <div class="proj-modal-details">
                            <h3 class="proj-modal-title">${project.title}</h3>
                            <div class="proj-modal-meta" style="display: flex; gap: 0.8rem; align-items: center; margin-bottom: 0.8rem;">
                                <span class="tech-badge" style="color: var(--accent-primary); border-color: rgba(0, 242, 254, 0.3);">${project.category}</span>
                                <span class="tech-badge" style="color: #10b981; border-color: rgba(16, 185, 129, 0.3); font-weight: 600;"><i class="fa-regular fa-user"></i> Role: ${project.role}</span>
                            </div>
                            <p class="proj-modal-desc">${project.description}</p>
                        </div>
                    </div>
                    
                    <div class="project-modal-bottom-full">
                        <div class="proj-modal-stack-section">
                            <h4 class="proj-modal-section-title">Tags</h4>
                            <div class="project-tech-stack">
                                ${stackBadges}
                            </div>
                        </div>
                        
                        <div class="proj-modal-details-section">
                            <h4 class="proj-modal-section-title">Metrics & Specific Tasks</h4>
                            <ul class="proj-modal-bullet-list">
                                ${bulletPoints}
                            </ul>
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
    const certBadgeImg = document.getElementById("certBadgeImg");
    if (btnCertModal) {
        btnCertModal.addEventListener("click", () => openModal(certModal));
    }
    if (certBadgeImg) {
        certBadgeImg.style.cursor = "pointer";
        certBadgeImg.addEventListener("click", () => openModal(certModal));
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

    // 9. Copy Email to Clipboard on Click
    const btnHeroEmail = document.getElementById("btnHeroEmail");
    if (btnHeroEmail) {
        btnHeroEmail.addEventListener("click", (e) => {
            e.preventDefault();
            const email = "nguyenthithugiang3105@gmail.com";
            navigator.clipboard.writeText(email).then(() => {
                showToast("Email address copied to clipboard!", "success");
                setTimeout(() => {
                    window.location.href = "mailto:" + email;
                }, 1000);
            });
        });
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
