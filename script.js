// Project Data Store for dynamic modal injection
const projectsData = {
    "arima-forecasting": {
        title: "Forecasting Vietnam's Foreign Exchange Reserves in 2026 Using the ARIMA Model",
        category: "Time-Series Forecasting",
        role: "Co-author, Data Analyst",
        image: "assets/arima_forecast.png",
        description: "A time-series forecasting project to model and project Vietnam's foreign exchange reserves. Based on historical monthly IMF data (2016–2025), the study selects the ARIMA(1,1,0) model to forecast that Vietnam's reserves will continue an upward trend, reaching approximately $93,294 million (or $93.3 Billion) by December 2026.",
        stack: ["Eviews", "Excel", "ARIMA Model", "Time-Series Forecasting", "IMF Data"],
        details: [
            "<strong>Literature Review:</strong> Researched and synthesized relevant academic literature on time-series forecasting and international reserves.",
            "<strong>Data Processing:</strong> Collected, cleaned, and processed a monthly time-series dataset of 120 observations (January 2016 – December 2025) from the IMF database.",
            "<strong>Model Construction:</strong> Built, diagnosed, and estimated the ARIMA(1,1,0) model (AIC: 17.6598, SC: 17.7298, MAPE: 5.13%) to project reserve levels for all 12 months of 2026."
        ],
        pdf: "projects/Dự báo trong kinh tế và kinh doanh/Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.pdf",
        data: "projects/Dự báo trong kinh tế và kinh doanh/Data_Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.csv"
    },
    "labor-structure": {
        title: "Labor Structure in Vietnam in the Context of the Fourth Industrial Revolution",
        category: "Published Research",
        role: "Co-author, Data Analyst",
        image: "assets/vietnam_labor.png",
        description: "An academic research paper published in the State Management Journal (No. 337, Feb 2026) analyzing the sectoral labor structure shifts in Vietnam. The paper highlights a major transition, including a decline in agricultural labor share from 44.0% in 2015 to 26.9% in 2023, and a rise in formal wage-earning employment (Làm công ăn lương) to 53.9%.",
        stack: ["Excel", "Pivot Tables", "Sector Shift", "Demographics", "GSO Data"],
        details: [
            "<strong>Framework Synthesis:</strong> Conducted comprehensive research on industrial revolutions and labor market transitions in developing economies.",
            "<strong>Data Acquisition:</strong> Collected, structured, and cleaned national demographic and employment statistics from the General Statistics Office (GSO) from 2010 to 2023.",
            "<strong>Data Visualization:</strong> Performed sector-wise visualization and pivot table analysis to extract labor structure shift insights (Agriculture, Industry & Construction, Services, Wage-earners)."
        ],
        pdf: "https://www.quanlynhanuoc.vn/2025/11/14/co-cau-lao-dong-o-viet-nam-trong-boi-canh-cuoc-cach-mang-cong-nghiep-lan-thu-tu/",
        data: "projects/Báo/Dữ liệu thu thập.xlsx"
    },
    "gender-inequality": {
        title: "Impact of Gender Inequality in Labor and Employment on Economic Growth in Developing Countries (2015-2022)",
        category: "Econometric Analysis",
        role: "Co-author, Data Analyst",
        image: "assets/gender_equality.png",
        description: "An econometric panel study evaluating the impact of labor-market gender inequality on GDP per capita. Using a Feasible Generalized Least Squares (FGLS) estimator, the study finds that a 1% increase in gender equality in human development (GDI) has a positive impact coefficient of +5.4379, while female labor force participation (lnFELB) has a coefficient of -0.9868 (correcting for heteroscedasticity, autocorrelation, and cross-sectional dependence).",
        stack: ["Stata", "Excel", "Panel Regression", "FGLS Estimator", "World Bank Data"],
        details: [
            "<strong>Literature Review:</strong> Researched and synthesized economic literature on gender economics and economic development theories.",
            "<strong>Data Wrangling:</strong> Gathered, cleaned, and merged panel data across 94 developing nations over an 8-year timeframe, totaling 751 observations.",
            "<strong>Econometric Estimation:</strong> Developed, estimated, and validated panel data regression models (OLS, Fixed Effects, FGLS) to analyze relationships and correct for diagnostic defects."
        ],
        pdf: "projects/Kinh tế phát triển/Tác động của bất bình đẳng giới trong lao động và việc làm đến tăng trưởng kinh tế tại các quốc gia đang phát triển giai đoạn 2015 - 2022.pdf",
        data: "projects/Kinh tế phát triển/Data.xlsx"
    },
    "economic-growth-drivers": {
        title: "Factors Affecting Economic Growth in Middle-Income and High-Income Country Groups (2005-2020)",
        category: "Comparative Policy Study",
        role: "Co-author, Data Analyst",
        image: "assets/growth_drivers.png",
        description: "A comparative panel analysis exploring the macroeconomic drivers of GDP growth in middle vs. high-income countries. The research shows that Human Development Index (HDI) is the dominant driver of economic growth in both high-income countries (coefficient +3.4815) and middle-income countries (coefficient +3.8140). Labor force (lnLAB) has coefficients of +1.0499 (HICs) vs. +0.8098 (MICs), and Technology (lnPT) has coefficients of -0.0213 (HICs) vs. +0.1238 (MICs).",
        stack: ["Stata", "Excel", "2SLS Regression", "Panel Regression", "Endogeneity & Exogeneity"],
        details: [
            "<strong>Theory Synthesis:</strong> Synthesized classical and endogenous growth theories and compiled macro-indicators (HDI, capital, labor, technology, corruption).",
            "<strong>Panel Processing:</strong> Collected, cleaned, and structured a macro panel dataset covering 54 countries (27 HICs with 405 obs, 27 MICs with 302 obs) over 15 years.",
            "<strong>2SLS Regression Modeling:</strong> Programmed panel regression models in Stata to compare growth elasticities, modeling the endogeneity and reverse causality of corruption and technology using lag structures."
        ],
        pdf: "projects/Tăng trưởng và phát triển/Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020.pdf",
        data: "projects/Tăng trưởng và phát triển/High income country data.xlsx"
    }
};
// Active chart and project references for card/modal integration
let activeProjectChart = null;
let currentOpenProjectId = null;
let cardCharts = [];

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

        // Re-color dynamic card charts and active modal chart
        destroyCardCharts();
        setTimeout(() => {
            initCardCharts();
            if (projectModal.classList.contains("open") && activeProjectChart && currentOpenProjectId) {
                renderProjectChart(currentOpenProjectId);
            }
        }, 50);
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

    // Initialize Card Charts (Vibrant / Bright Colors)
    function initCardCharts() {
        if (typeof Chart === 'undefined') return;

        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const isDark = currentTheme === "dark";
        const textColor = isDark ? '#cbd5e1' : '#475569';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';

        // 1. ARIMA Card Chart
        const arimaCtx = document.getElementById('cardChart-arima-forecasting');
        if (arimaCtx) {
            const chart = new Chart(arimaCtx, {
                type: 'line',
                data: {
                    labels: ['16', '18', '20', '22', '24', '25', '26(F)'],
                    datasets: [
                        {
                            data: [36.7, 55.4, 94.2, 86.7, 79.0, 85.0, null],
                            borderColor: '#00f2fe', // Bright cyan
                            borderWidth: 2.5,
                            pointRadius: 2.5,
                            pointHoverRadius: 4,
                            fill: false,
                            tension: 0.3
                        },
                        {
                            data: [null, null, null, null, null, 85.0, 93.3],
                            borderColor: '#ff9f43', // Bright orange
                            borderWidth: 2.5,
                            borderDash: [4, 4],
                            pointRadius: 3.5,
                            pointHoverRadius: 5,
                            fill: false,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: textColor, font: { size: 9, weight: '500' } } },
                        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 9, weight: '500' } } }
                    }
                }
            });
            cardCharts.push(chart);
        }

        // 2. Labor Structure Card Chart
        const laborCtx = document.getElementById('cardChart-labor-structure');
        if (laborCtx) {
            const chart = new Chart(laborCtx, {
                type: 'bar',
                data: {
                    labels: ['Agri', 'Ind', 'Serv', 'Formal'],
                    datasets: [
                        {
                            label: '2015',
                            data: [44.0, 22.8, 33.2, 39.3],
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
                            borderRadius: 3
                        },
                        {
                            label: '2023',
                            data: [26.9, 33.5, 39.6, 53.9],
                            backgroundColor: '#00f5d4', // Bright neon teal
                            borderRadius: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: textColor, font: { size: 9, weight: '500' } } },
                        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 9, weight: '500' } } }
                    }
                }
            });
            cardCharts.push(chart);
        }

        // 3. Gender Inequality Card Chart
        const genderCtx = document.getElementById('cardChart-gender-inequality');
        if (genderCtx) {
            const chart = new Chart(genderCtx, {
                type: 'bar',
                data: {
                    labels: ['GDI', 'lnFELB', 'lnTO', 'POP'],
                    datasets: [
                        {
                            data: [5.4379, -0.9868, 0.2064, -0.1381],
                            backgroundColor: ['#10b981', '#ef4444', '#10b981', '#ef4444'], // Green for positive, red for negative
                            borderRadius: 3
                        }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 9, weight: '500' } } },
                        y: { grid: { display: false }, ticks: { color: textColor, font: { size: 9, weight: '500' } } }
                    }
                }
            });
            cardCharts.push(chart);
        }

        // 4. Growth Drivers Card Chart (Scatter)
        const growthCtx = document.getElementById('cardChart-economic-growth-drivers');
        if (growthCtx) {
            const chart = new Chart(growthCtx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'High',
                            data: [
                                {x: 0.25, y: 6.7}, {x: 0.29, y: 6.0}, {x: 0.32, y: 5.9}, {x: 0.34, y: 6.2}, 
                                {x: 0.58, y: 5.1}, {x: 0.65, y: 5.3}, {x: 0.72, y: 5.2}, {x: 0.85, y: 6.1}
                            ],
                            backgroundColor: '#00f2fe', // Bright cyan
                            pointRadius: 4.5
                        },
                        {
                            label: 'Middle',
                            data: [
                                {x: 0.12, y: 1.1}, {x: 0.18, y: 1.5}, {x: 0.22, y: 2.4}, {x: 0.30, y: 2.3}, 
                                {x: 0.38, y: 3.1}, {x: 0.45, y: 2.7}, {x: 0.52, y: 3.3}, {x: 0.58, y: 2.4}
                            ],
                            backgroundColor: '#ff7a00', // Bright orange
                            pointRadius: 4.5
                        },
                        {
                            type: 'line',
                            data: [{x: 0.1, y: 1.5}, {x: 0.9, y: 6.0}],
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)',
                            borderWidth: 1.5,
                            borderDash: [3, 3],
                            pointRadius: 0,
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true } },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 8 } }, min: 0, max: 1.0 },
                        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 8 } }, min: 0, max: 8.0 }
                    }
                }
            });
            cardCharts.push(chart);
        }
    }

    // Destroy Card Charts
    function destroyCardCharts() {
        cardCharts.forEach(c => {
            if (c) c.destroy();
        });
        cardCharts = [];
    }

    // Render dynamic detailed Chart.js chart inside project details modal
    function renderProjectChart(projectId) {
        if (activeProjectChart) {
            activeProjectChart.destroy();
        }

        const canvasId = projectId === 'economic-growth-drivers' ? 'growthDriversScatterChart' : 'projectModalChart';
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const isDark = currentTheme === "dark";

        // Chart color variables synced with CSS variables (Vibrant Tones)
        const textColor = isDark ? '#cbd5e1' : '#475569';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
        const accentBlue = '#00f2fe'; // Bright cyan
        const accentPurple = '#d946ef'; // Bright magenta/purple
        const accentOrange = '#ff7a00'; // Bright orange

        let config = {};

        if (projectId === 'arima-forecasting') {
            config = {
                type: 'line',
                data: {
                    labels: ['16', '18', '20', '22', '24', '25', '26(F)'],
                    datasets: [
                        {
                            label: 'Historical',
                            data: [36.7, 55.4, 94.2, 86.7, 79.0, 85.0, null],
                            borderColor: '#00f2fe', // Bright cyan
                            borderWidth: 2.5,
                            pointRadius: 2.5,
                            pointHoverRadius: 4,
                            pointBackgroundColor: '#00f2fe',
                            fill: false,
                            tension: 0.3
                        },
                        {
                            label: 'Forecast',
                            data: [null, null, null, null, null, 85.0, 93.3],
                            borderColor: '#ff9f43', // Bright orange
                            borderWidth: 2.5,
                            borderDash: [4, 4],
                            pointRadius: 3.5,
                            pointHoverRadius: 5,
                            pointBackgroundColor: '#ff9f43',
                            fill: false,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: textColor, font: { family: 'Inter', size: 9, weight: '500' } }
                        },
                        y: {
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter', size: 9, weight: '500' },
                                callback: function(value) { return '$' + value + 'B'; }
                            },
                            title: {
                                display: true,
                                text: 'Billion USD',
                                color: textColor,
                                font: { family: 'Inter', size: 9, weight: 'bold' }
                            }
                        }
                    }
                }
            };
        } else if (projectId === 'labor-structure') {
            config = {
                type: 'bar',
                data: {
                    labels: ['Nông nghiệp', 'Công nghiệp & XD', 'Dịch vụ', 'Làm công ăn lương'],
                    datasets: [
                        {
                            label: '2010 Share',
                            data: [48.7, 21.7, 29.6, 33.8],
                            backgroundColor: 'rgba(94, 234, 212, 0.15)',
                            borderColor: 'rgba(94, 234, 212, 0.3)',
                            borderWidth: 1,
                            borderRadius: 4
                        },
                        {
                            label: '2015 Share',
                            data: [44.0, 22.8, 33.2, 39.3],
                            backgroundColor: 'rgba(59, 130, 246, 0.4)',
                            borderColor: '#3B82F6',
                            borderWidth: 1,
                            borderRadius: 4
                        },
                        {
                            label: '2023 Share',
                            data: [26.9, 33.5, 39.6, 53.9],
                            backgroundColor: '#00f5d4', // Bright neon teal
                            borderColor: '#00f5d4',
                            borderWidth: 1,
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: textColor, font: { family: 'Inter', size: 11, weight: '600' } }
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: gridColor },
                            ticks: { color: textColor, font: { family: 'Inter' } }
                        },
                        y: {
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter' },
                                callback: function(value) { return value + '%'; }
                            },
                            title: {
                                display: true,
                                text: 'Employment Share (%)',
                                color: textColor,
                                font: { family: 'Inter', weight: 'bold' }
                            }
                        }
                    }
                }
            };
        } else if (projectId === 'gender-inequality') {
            config = {
                type: 'bar',
                data: {
                    labels: ['GDI Equality (0.1 ↑)', 'lnFELB (Female LFPR)', 'lnTO (Trade Openness)', 'POP (Pop Growth)'],
                    datasets: [
                        {
                            label: 'FGLS Regression Coefficients',
                            data: [5.4379, -0.9868, 0.2064, -0.1381],
                            backgroundColor: [
                                '#10b981', // green for positive GDI
                                '#ef4444', // red for negative LFPR
                                '#10b981', // green for positive Trade Openness
                                '#ef4444'  // red for negative Pop Growth
                            ],
                            borderRadius: 4
                        }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter' }
                            },
                            title: {
                                display: true,
                                text: 'Impact Coefficient Value',
                                color: textColor,
                                font: { family: 'Inter', weight: 'bold' }
                            }
                        },
                        y: {
                            grid: { display: false },
                            ticks: { color: textColor, font: { family: 'Inter' } }
                        }
                    }
                }
            };
        } else if (projectId === 'economic-growth-drivers') {
            config = {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: 'High-Income Countries (405 obs / 27 countries)',
                            data: [
                                {x: 0.22, y: 5.8}, {x: 0.25, y: 6.7}, {x: 0.28, y: 6.7}, {x: 0.29, y: 6.0}, 
                                {x: 0.31, y: 5.5}, {x: 0.32, y: 5.9}, {x: 0.34, y: 6.2}, {x: 0.28, y: 5.9}, 
                                {x: 0.26, y: 5.3}, {x: 0.30, y: 5.7}, {x: 0.33, y: 5.6}, {x: 0.35, y: 5.0}, 
                                {x: 0.29, y: 6.1}, {x: 0.38, y: 6.0}, {x: 0.27, y: 6.3},
                                {x: 0.55, y: 4.8}, {x: 0.58, y: 5.1}, {x: 0.60, y: 5.4}, {x: 0.63, y: 5.6}, 
                                {x: 0.65, y: 5.3}, {x: 0.68, y: 5.0}, {x: 0.70, y: 5.6}, {x: 0.72, y: 5.2}, 
                                {x: 0.75, y: 4.8}, {x: 0.78, y: 5.1}, {x: 0.80, y: 5.3}, {x: 0.83, y: 5.2}, 
                                {x: 0.85, y: 6.1}, {x: 0.88, y: 6.5}, {x: 0.90, y: 5.7}
                            ],
                            backgroundColor: accentBlue,
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: 1,
                            pointRadius: 6,
                            pointHoverRadius: 8
                        },
                        {
                            label: 'Middle-Income Countries (302 obs / 27 countries)',
                            data: [
                                {x: 0.12, y: 1.1}, {x: 0.15, y: 0.9}, {x: 0.18, y: 1.5}, {x: 0.14, y: 2.1}, 
                                {x: 0.22, y: 2.4}, {x: 0.25, y: 2.9}, {x: 0.28, y: 2.8}, {x: 0.30, y: 2.3}, 
                                {x: 0.32, y: 2.0}, {x: 0.35, y: 2.5}, {x: 0.38, y: 3.1}, {x: 0.40, y: 3.4}, 
                                {x: 0.42, y: 2.9}, {x: 0.45, y: 2.7}, {x: 0.48, y: 2.3}, {x: 0.50, y: 2.5}, 
                                {x: 0.52, y: 3.3}, {x: 0.55, y: 3.5}, {x: 0.58, y: 2.4}, {x: 0.21, y: 4.1}, 
                                {x: 0.38, y: 4.2}, {x: 0.11, y: 1.3}, {x: 0.16, y: 1.8}, {x: 0.24, y: 2.0}, 
                                {x: 0.29, y: 3.5}, {x: 0.33, y: 3.7}, {x: 0.41, y: 1.9}, {x: 0.47, y: 2.1}, 
                                {x: 0.26, y: 3.2}, {x: 0.34, y: 3.0}
                            ],
                            backgroundColor: accentOrange,
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                            borderWidth: 1,
                            pointRadius: 6,
                            pointHoverRadius: 8
                        },
                        {
                            label: '2SLS Regression Line',
                            type: 'line',
                            data: [
                                {x: 0.1, y: 1.5},
                                {x: 0.9, y: 6.0}
                            ],
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.45)',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            fill: false,
                            pointRadius: 0,
                            pointHoverRadius: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: textColor, font: { family: 'Inter', size: 10, weight: '600' } }
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': (X: ' + context.parsed.x.toFixed(2) + ', Y: ' + context.parsed.y.toFixed(1) + '%)';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: gridColor },
                            ticks: { color: textColor, font: { family: 'Inter' } },
                            title: {
                                display: true,
                                text: 'FDI + TRADE OPENNESS + HUMAN CAPITAL',
                                color: textColor,
                                font: { family: 'Inter', weight: 'bold', size: 10 }
                            },
                            min: 0,
                            max: 1.0
                        },
                        y: {
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter' },
                                callback: function(value) { return value + '%'; }
                            },
                            title: {
                                display: true,
                                text: 'AVG. REAL GDP GROWTH (%)',
                                color: textColor,
                                font: { family: 'Inter', weight: 'bold', size: 10 }
                            },
                            min: 0,
                            max: 8.0
                        }
                    }
                }
            };
        }

        activeProjectChart = new Chart(ctx, config);
    }

    // Open Project Modal
    document.addEventListener("click", (e) => {
        const projectCard = e.target.closest(".project-card");
        if (projectCard) {
            const projectId = projectCard.getAttribute("data-project-id");
            const project = projectsData[projectId];

            if (project) {
                currentOpenProjectId = projectId; // Set active project ID
                const modalContentEl = projectModal.querySelector('.modal-content');

                // Build dynamic modal content
                let stackBadges = project.stack.map(s => `<span class="tech-badge">${s}</span>`).join("");
                let bulletPoints = project.details.map(d => `<li><i class="fa-solid fa-chevron-right"></i><div>${d}</div></li>`).join("");

                // Set wide width styling for all projects
                if (modalContentEl) {
                    modalContentEl.classList.add('modal-dashboard-wide');
                }

                if (projectId === 'arima-forecasting') {
                    modalBody.innerHTML = `
                        <div class="growth-drivers-dashboard-header" data-project-id="arima-forecasting" style="margin-bottom: 1rem; padding-bottom: 0.6rem;">
                            <h3>FORECASTING VIETNAM'S FOREIGN EXCHANGE RESERVES</h3>
                            <p>ARIMA(1, 1, 0) Time-Series Forecasting Model (2016-2026)</p>
                        </div>

                        <div class="growth-drivers-dashboard" style="gap: 1.2rem; margin-top: 1rem;">
                            <!-- Left Column: Chart Card & Model Diagnostics -->
                            <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                                <!-- Chart Card (looks exactly like the thumbnail one) -->
                                <div class="dashboard-card glass" style="padding: 1.2rem 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.3rem;">
                                        <span style="background: rgba(255, 255, 255, 0.05); padding: 0.25rem 0.6rem; border-radius: 4px; border: 1px solid var(--glass-border); font-size: 0.75rem; font-weight: 600; color: var(--text-secondary);">Data: IMF Monthly (2016-2025)</span>
                                        <span style="background: rgba(0, 242, 254, 0.1); color: #00f2fe; padding: 0.25rem 0.6rem; border-radius: 4px; border: 1px solid rgba(0, 242, 254, 0.2); font-size: 0.75rem; font-weight: 600;">Result: 2026 Forecast ~$93.3B</span>
                                    </div>
                                    <div style="position: relative; height: 200px; width: 100%;">
                                        <canvas id="projectModalChart"></canvas>
                                    </div>
                                    <div style="text-align: center; font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-top: 0.3rem;">
                                        TIME-SERIES FORECASTING
                                    </div>
                                </div>

                                <!-- Metrics -->
                                <div class="dashboard-card glass" style="padding: 1.2rem 1.5rem;">
                                    <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-list-check"></i> Model Diagnostics & Fit</h4>
                                    <div class="metrics-comparison-grid">
                                        <div class="metric-row-header">
                                            <div style="text-align: left;">Statistical Metric</div>
                                            <div class="high-income-header">Value</div>
                                            <div class="middle-income-header">Status</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-chart-line"></i> Adjusted R-squared</div>
                                            <div class="metric-val high-income-val">0.2216</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">Significant</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-calculator"></i> Akaike (AIC)</div>
                                            <div class="metric-val high-income-val">17.6598</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">Minimised</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-code-branch"></i> Schwarz (SC)</div>
                                            <div class="metric-val high-income-val">17.7298</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">Minimised</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-compass"></i> S.E. of Regression</div>
                                            <div class="metric-val high-income-val">1,631.71</div>
                                            <div class="metric-val middle-income-val" style="color: var(--text-secondary);">Million USD</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-percent"></i> Forecast Error (MAPE)</div>
                                            <div class="metric-val high-income-val">5.13%</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">Excellent</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column: Project Context & Tasks -->
                            <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                                <!-- Context & Actions -->
                                <div class="dashboard-card glass" style="padding: 1.2rem 1.5rem;">
                                    <h4 style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 0.8rem;">
                                        <span><i class="fa-solid fa-circle-info"></i> Project Context</span>
                                        <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> Read Paper</a>
                                    </h4>
                                    <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.8rem; margin-top: 0;">
                                        ${project.description}
                                    </p>
                                    <div class="project-tech-stack" style="margin-bottom: 0.2rem;">
                                        ${stackBadges}
                                    </div>
                                </div>

                                <!-- Metrics & Specific Tasks moved inside Right Column -->
                                <div class="dashboard-card glass" style="padding: 1.2rem 1.5rem;">
                                    <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bars-progress"></i> Metrics & Specific Tasks</h4>
                                    <ul class="proj-modal-bullet-list" style="margin: 0; padding: 0;">
                                        ${bulletPoints}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (projectId === 'labor-structure') {
                    modalBody.innerHTML = `
                        <div class="growth-drivers-dashboard-header" data-project-id="labor-structure">
                            <h3>LABOR STRUCTURE SHIFT IN VIETNAM (IR4.0)</h3>
                            <p>National Employment Sector & Demographic Analysis (2010-2023)</p>
                        </div>

                        <div class="growth-drivers-dashboard">
                            <!-- Left Column: Metrics & Table -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Metrics -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-list-check"></i> Key Labor Market Indicators</h4>
                                    <div class="metrics-comparison-grid">
                                        <div class="metric-row-header">
                                            <div style="text-align: left;">Key Indicator</div>
                                            <div class="high-income-header">2015</div>
                                            <div class="middle-income-header">2023</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-wheat-awn"></i> Agricultural Share</div>
                                            <div class="metric-val high-income-val" style="color: #64748b;">44.0%</div>
                                            <div class="metric-val middle-income-val" style="color: #ef4444;">26.9% (-17.1%)</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-handshake"></i> Formal Employment</div>
                                            <div class="metric-val high-income-val" style="color: #64748b;">39.3%</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">53.9% (+14.6%)</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-venus-mars"></i> Trained Share (M / F)</div>
                                            <div class="metric-val high-income-val" style="color: #64748b;">23.6% / 20.1%</div>
                                            <div class="metric-val middle-income-val" style="color: #3b82f6;">31.8% / 26.8%</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-graduation-cap"></i> Higher Ed. Unemployment</div>
                                            <div class="metric-val high-income-val" style="color: #64748b;">-</div>
                                            <div class="metric-val middle-income-val" style="color: #f59e0b;">2.85% (vs. 2.28% avg)</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Comparison Table -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-table"></i> Sectoral Employment Shifts (2010 vs 2023)</h4>
                                    <div class="dashboard-table-wrapper">
                                        <table class="dashboard-table">
                                            <thead>
                                                <tr>
                                                    <th>Economic Sector</th>
                                                    <th>2010 Share</th>
                                                    <th>2015 Share</th>
                                                    <th>2023 Share</th>
                                                    <th>Shift Trend</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Nông, lâm, thủy sản</strong></td>
                                                    <td>48.7%</td>
                                                    <td>44.0%</td>
                                                    <td>26.9%</td>
                                                    <td><span class="badge badge-danger">Decreasing</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Công nghiệp & xây dựng</strong></td>
                                                    <td>21.7%</td>
                                                    <td>22.8%</td>
                                                    <td>33.5%</td>
                                                    <td><span class="badge badge-success">Increasing</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Dịch vụ</strong></td>
                                                    <td>29.6%</td>
                                                    <td>33.2%</td>
                                                    <td>39.6%</td>
                                                    <td><span class="badge badge-success">Increasing</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Làm công ăn lương (Formal)</strong></td>
                                                    <td>33.8%</td>
                                                    <td>39.3%</td>
                                                    <td>53.9%</td>
                                                    <td><span class="badge badge-success">Rapid Growth</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column: Bar Chart & Details -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Bar Chart -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-chart-column"></i> Sectoral Employment Shift (2010 vs 2023)</h4>
                                    <span class="chart-subtitle">(Agriculture vs Industry vs Services Share)</span>
                                    <div style="position: relative; height: 190px; width: 100%;">
                                        <canvas id="projectModalChart"></canvas>
                                    </div>
                                </div>

                                <!-- Context & Actions -->
                                <div class="dashboard-card glass">
                                    <h4 style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                        <span><i class="fa-solid fa-circle-info"></i> Project Context</span>
                                        <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> Read Paper</a>
                                    </h4>
                                    <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.5rem; margin-top: 0;">
                                        ${project.description}
                                    </p>
                                    <div class="project-tech-stack" style="margin-bottom: 0.5rem;">
                                        ${stackBadges}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="project-modal-bottom-full" style="margin-top: 1rem;">
                            <div class="proj-modal-details-section">
                                <h4 class="proj-modal-section-title">Metrics & Specific Tasks</h4>
                                <ul class="proj-modal-bullet-list">
                                    ${bulletPoints}
                                </ul>
                            </div>
                        </div>
                    `;
                } else if (projectId === 'gender-inequality') {
                    modalBody.innerHTML = `
                        <div class="growth-drivers-dashboard-header" data-project-id="gender-inequality">
                            <h3>IMPACT OF GENDER INEQUALITY ON ECONOMIC GROWTH</h3>
                            <p>Panel Regression across 94 Developing Countries (2015-2022)</p>
                        </div>

                        <div class="growth-drivers-dashboard">
                            <!-- Left Column: Metrics & Table -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Metrics -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-list-check"></i> Econometric Model & Diagnostics</h4>
                                    <div class="metrics-comparison-grid">
                                        <div class="metric-row-header">
                                            <div style="text-align: left;">Diagnostic Check</div>
                                            <div class="high-income-header">Result/Value</div>
                                            <div class="middle-income-header">Decision</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-users"></i> Observations / Groups</div>
                                            <div class="metric-val high-income-val">751 obs / 94 countries</div>
                                            <div class="metric-val middle-income-val" style="color: var(--text-muted);">Unbalanced panel</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-vial"></i> Breusch-Pagan LM Test</div>
                                            <div class="metric-val high-income-val">p = 0.0000</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">REM > POLS</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-vials"></i> Hausman Selection Test</div>
                                            <div class="metric-val high-income-val">p = 0.0000</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">FEM > REM</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-shield-halved"></i> Heteroscedasticity / AR</div>
                                            <div class="metric-val high-income-val">p = 0.0000 (detected)</div>
                                            <div class="metric-val middle-income-val" style="color: #ef4444;">FGLS Required</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-calculator"></i> Wald chi2(4) statistic</div>
                                            <div class="metric-val high-income-val">1,096.45</div>
                                            <div class="metric-val middle-income-val" style="color: #10b981;">p = 0.0000 (Sig.)</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Comparison Table -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-table"></i> FGLS Panel Regression Coefficients Table</h4>
                                    <div class="dashboard-table-wrapper">
                                        <table class="dashboard-table">
                                            <thead>
                                                <tr>
                                                    <th>Variable Name</th>
                                                    <th>Coeff. (Impact)</th>
                                                    <th>z-statistic</th>
                                                    <th>p-value</th>
                                                    <th>Significance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>GDI (Gender Dev Index)</strong></td>
                                                    <td>+5.4379</td>
                                                    <td>16.59</td>
                                                    <td>0.000</td>
                                                    <td><span class="badge badge-success">1% Significance</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>lnFELB (Female LFPR)</strong></td>
                                                    <td>-0.9868</td>
                                                    <td>-13.65</td>
                                                    <td>0.000</td>
                                                    <td><span class="badge badge-success">1% Significance</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>lnTO (Trade Openness)</strong></td>
                                                    <td>+0.2064</td>
                                                    <td>7.43</td>
                                                    <td>0.000</td>
                                                    <td><span class="badge badge-success">1% Significance</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>POP (Pop Growth Rate)</strong></td>
                                                    <td>-0.1381</td>
                                                    <td>-10.32</td>
                                                    <td>0.000</td>
                                                    <td><span class="badge badge-success">1% Significance</span></td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Constant (Intercept)</strong></td>
                                                    <td>+5.8490</td>
                                                    <td>16.71</td>
                                                    <td>0.000</td>
                                                    <td><span class="badge badge-success">1% Significance</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column: Horizontal Bar Chart & Details -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Bar Chart -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-chart-column"></i> FGLS Estimator Coefficients</h4>
                                    <span class="chart-subtitle">(Direct impact on Log of GDP per Capita)</span>
                                    <div style="position: relative; height: 190px; width: 100%;">
                                        <canvas id="projectModalChart"></canvas>
                                    </div>
                                </div>

                                <!-- Context & Actions -->
                                <div class="dashboard-card glass">
                                    <h4 style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                        <span><i class="fa-solid fa-circle-info"></i> Project Context</span>
                                        <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> Read Paper</a>
                                    </h4>
                                    <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.5rem; margin-top: 0;">
                                        ${project.description}
                                    </p>
                                    <div class="project-tech-stack" style="margin-bottom: 0.5rem;">
                                        ${stackBadges}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="project-modal-bottom-full" style="margin-top: 1rem;">
                            <div class="proj-modal-details-section">
                                <h4 class="proj-modal-section-title">Metrics & Specific Tasks</h4>
                                <ul class="proj-modal-bullet-list">
                                    ${bulletPoints}
                                </ul>
                            </div>
                        </div>
                    `;
                } else if (projectId === 'economic-growth-drivers') {
                    modalBody.innerHTML = `
                        <div class="growth-drivers-dashboard-header" data-project-id="economic-growth-drivers">
                            <h3>MACROECONOMIC GROWTH DRIVERS COMPARISON</h3>
                            <p>High-Income vs Middle-Income Countries (2005-2020)</p>
                        </div>

                        <div class="growth-drivers-dashboard">
                            <!-- Left Column: Metrics & Table -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Metrics -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-list-check"></i> Key Performance Metrics</h4>
                                    <div class="metrics-comparison-grid">
                                        <div class="metric-row-header">
                                            <div style="text-align: left;">Metric</div>
                                            <div class="high-income-header">High-Income</div>
                                            <div class="middle-income-header">Middle-Income</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-chart-line"></i> Real GDP Growth</div>
                                            <div class="metric-val high-income-val">2.1% (Avg.)</div>
                                            <div class="metric-val middle-income-val">4.5% (Avg.)</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-flask"></i> R&D Expenditure</div>
                                            <div class="metric-val high-income-val">2.8% of GDP</div>
                                            <div class="metric-val middle-income-val">1.1% of GDP</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-user-graduate"></i> Human Capital Index</div>
                                            <div class="metric-val high-income-val">0.85</div>
                                            <div class="metric-val middle-income-val">0.62</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-globe"></i> Trade Openness</div>
                                            <div class="metric-val high-income-val">75% of GDP</div>
                                            <div class="metric-val middle-income-val">58% of GDP</div>
                                        </div>
                                        <div class="metric-row">
                                            <div class="metric-label"><i class="fa-solid fa-city"></i> Urban Population</div>
                                            <div class="metric-val high-income-val">81%</div>
                                            <div class="metric-val middle-income-val">55%</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Comparison Table -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-table"></i> 2SLS Panel Regression Growth Drivers Table</h4>
                                    <div class="dashboard-table-wrapper">
                                        <table class="dashboard-table">
                                            <thead>
                                                <tr>
                                                    <th>Driver (Variable)</th>
                                                    <th>High-Income (HICs)</th>
                                                    <th>Middle-Income (MICs)</th>
                                                    <th>Key Divergence</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>HDI (Human Development)</strong></td>
                                                    <td><span class="badge badge-success">+3.4815***</span></td>
                                                    <td><span class="badge badge-success">+3.8140***</span></td>
                                                    <td>Strongest impact in both</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>lnLAB (Labor Force)</strong></td>
                                                    <td><span class="badge badge-success">+1.0499***</span></td>
                                                    <td><span class="badge badge-success">+0.8098***</span></td>
                                                    <td>25% stronger in HICs</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>lnKPL (Capital per Labor)</strong></td>
                                                    <td><span class="badge badge-success">+0.5002***</span></td>
                                                    <td><span class="badge badge-success">+0.1360***</span></td>
                                                    <td>3.6x stronger in HICs</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>lnPT (Tech / Patents)</strong></td>
                                                    <td><span class="badge badge-danger">-0.0213***</span></td>
                                                    <td><span class="badge badge-success">+0.1238***</span></td>
                                                    <td>Positive only in MICs</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>CRPT (Corruption Control)</strong></td>
                                                    <td><span class="badge badge-success">+0.1141***</span></td>
                                                    <td><span class="badge badge-success">+0.2470***</span></td>
                                                    <td>2x stronger in MICs</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Adjusted R2 / Obs</strong></td>
                                                    <td>0.9828 / 405 obs</td>
                                                    <td>0.9636 / 302 obs</td>
                                                    <td>Excellent fit in both</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column: Scatter Plot & Details -->
                            <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                <!-- Scatter Chart -->
                                <div class="dashboard-card glass">
                                    <h4><i class="fa-solid fa-chart-scatter"></i> Scatter Plot of Growth Drivers</h4>
                                    <span class="chart-subtitle">(2005-2020 Macro Panel Data)</span>
                                    <div style="position: relative; height: 190px; width: 100%;">
                                        <canvas id="growthDriversScatterChart"></canvas>
                                    </div>
                                </div>

                                <!-- Context & Actions -->
                                <div class="dashboard-card glass">
                                    <h4 style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                                        <span><i class="fa-solid fa-circle-info"></i> Project Context</span>
                                        <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> Read Paper</a>
                                    </h4>
                                    <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.5rem; margin-top: 0;">
                                        ${project.description}
                                    </p>
                                    <div class="project-tech-stack" style="margin-bottom: 0.5rem;">
                                        ${stackBadges}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="project-modal-bottom-full" style="margin-top: 1rem;">
                            <div class="proj-modal-details-section">
                                <h4 class="proj-modal-section-title">Metrics & Specific Tasks</h4>
                                <ul class="proj-modal-bullet-list">
                                    ${bulletPoints}
                                </ul>
                            </div>
                        </div>
                    `;
                }

                openModal(projectModal);

                // Render the detailed interactive modal chart if library loaded
                if (typeof Chart !== 'undefined') {
                    renderProjectChart(projectId);
                }
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

        // Remove wide dashboard styles on close
        const modalContentEl = projectModal.querySelector('.modal-content');
        if (modalContentEl) {
            modalContentEl.classList.remove('modal-dashboard-wide');
        }

        // Clean up chart if closing the project modal
        if (modal === projectModal) {
            if (activeProjectChart) {
                activeProjectChart.destroy();
                activeProjectChart = null;
            }
            currentOpenProjectId = null;
        }
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

    // Initialize Homepage Card Micro-Dashboards
    initCardCharts();
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
