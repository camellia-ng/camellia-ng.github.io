// Project Data Store for dynamic modal injection - English Version
const projectsDataEn = {
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
        stack: ["Excel", "Pivot Tables", "Sector Shift", "Demographics", "GSO Data", "State Journal Publication"],
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
        stack: ["Stata", "Excel", "2SLS Regression", "Comparative Analysis", "Endogeneity"],
        details: [
            "<strong>Theory Synthesis:</strong> Synthesized classical and endogenous growth theories and compiled macro-indicators (HDI, capital, labor, technology, corruption).",
            "<strong>Panel Processing:</strong> Collected, cleaned, and structured a macro panel dataset covering 54 countries (27 HICs with 405 obs, 27 MICs with 302 obs) over 15 years.",
            "<strong>2SLS Regression Modeling:</strong> Programmed panel regression models in Stata to compare growth elasticities, modeling the endogeneity and reverse causality of corruption and technology using lag structures."
        ],
        pdf: "projects/Tăng trưởng và phát triển/Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020.pdf",
        data: "projects/Tăng trưởng và phát triển/High income country data.xlsx"
    }
};

// Project Data Store for dynamic modal injection - Vietnamese Version
const projectsDataVi = {
    "arima-forecasting": {
        title: "Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA",
        category: "Dự báo chuỗi thời gian",
        role: "Đồng tác giả, Chuyên viên phân tích dữ liệu",
        image: "assets/arima_forecast.png",
        description: "Nghiên cứu dự báo chuỗi thời gian nhằm xây dựng mô hình và dự phóng dự trữ ngoại hối của Việt Nam. Dựa trên dữ liệu IMF theo tháng lịch sử (2016–2025), nghiên cứu đã chọn mô hình ARIMA(1,1,0) để dự báo rằng dự trữ của Việt Nam sẽ tiếp tục xu hướng tăng, đạt khoảng 93.294 triệu USD (tương đương 93,3 tỷ USD) vào tháng 12 năm 2026.",
        stack: ["Eviews", "Excel", "Mô hình ARIMA", "Dự báo chuỗi thời gian", "Dữ liệu IMF"],
        details: [
            "<strong>Tổng quan tài liệu:</strong> Nghiên cứu và tổng hợp các tài liệu học thuật liên quan đến dự báo chuỗi thời gian và dự trữ quốc tế.",
            "<strong>Xử lý dữ liệu:</strong> Thu thập, làm sạch và xử lý chuỗi số liệu theo tháng gồm 120 quan sát (tháng 1 năm 2016 – tháng 12 năm 2025) từ cơ sở dữ liệu IMF.",
            "<strong>Xây dựng mô hình:</strong> Xây dựng, kiểm định và ước lượng mô hình ARIMA(1,1,0) (AIC: 17.6598, SC: 17.7298, MAPE: 5.13%) để dự phóng mức dự trữ cho cả 12 tháng năm 2026."
        ],
        pdf: "projects/Dự báo trong kinh tế và kinh doanh/Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.pdf",
        data: "projects/Dự báo trong kinh tế và kinh doanh/Data_Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA.csv"
    },
    "labor-structure": {
        title: "Cơ cấu lao động ở Việt Nam trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư",
        category: "Nghiên cứu đã công bố",
        role: "Đồng tác giả, Chuyên viên phân tích dữ liệu",
        image: "assets/vietnam_labor.png",
        description: "Bài báo nghiên cứu học thuật được đăng trên Tạp chí Quản lý nhà nước (Số 337, tháng 2 năm 2026) phân tích sự dịch chuyển cơ cấu lao động ngành tại Việt Nam. Nghiên cứu nhấn mạnh một bước chuyển dịch lớn, bao gồm sự sụt giảm tỷ trọng lao động nông nghiệp từ 44.0% năm 2015 xuống 26.9% năm 2023, và sự gia tăng tỷ trọng lao động làm công ăn lương lên 53.9%.",
        stack: ["Excel", "Pivot Tables", "Chuyển dịch cơ cấu", "Nhân khẩu học", "Dữ liệu GSO", "Tạp chí Nhà nước"],
        details: [
            "<strong>Tổng hợp khung nghiên cứu:</strong> Tiến hành nghiên cứu toàn diện về các cuộc cách mạng công nghiệp và dịch chuyển thị trường lao động tại các nền kinh tế đang phát triển.",
            "<strong>Thu thập dữ liệu:</strong> Thu thập, cấu trúc và làm sạch các số liệu thống kê nhân khẩu học và việc làm quốc gia từ Tổng cục Thống kê (GSO) từ năm 2010 đến năm 2023.",
            "<strong>Trực quan hóa dữ liệu:</strong> Thực hiện trực quan hóa theo ngành và phân tích bảng xoay (Pivot Tables) để rút ra các thông tin chi tiết về chuyển dịch cơ cấu lao động (Nông nghiệp, Công nghiệp & Xây dựng, Dịch vụ, Làm công ăn lương)."
        ],
        pdf: "https://www.quanlynhanuoc.vn/2025/11/14/co-cau-lao-dong-o-viet-nam-trong-boi-canh-cuoc-cach-mang-cong-nghiep-lan-thu-tu/",
        data: "projects/Báo/Dữ liệu thu thập.xlsx"
    },
    "gender-inequality": {
        title: "Tác động của bất bình đẳng giới trong lao động và việc làm đến tăng trưởng kinh tế tại các quốc gia đang phát triển giai đoạn 2015 - 2022",
        category: "Phân tích kinh tế lượng",
        role: "Đồng tác giả, Chuyên viên phân tích dữ liệu",
        image: "assets/gender_equality.png",
        description: "Nghiên cứu kinh tế lượng sử dụng dữ liệu bảng đánh giá tác động của bất bình đẳng giới trên thị trường lao động đối với GDP bình quan đầu người. Sử dụng phương pháp ước lượng bình phương tối thiểu tổng quát khả thi (FGLS), nghiên cứu phát hiện ra rằng tăng 1% bình đẳng giới trong phát triển con người (GDI) có hệ số tác động dương là +5.4379, trong khi tỷ lệ tham gia lực lượng lao động của nữ giới (lnFELB) có hệ số là -0.9868 (đã khắc phục hiện tượng phương sai sai số thay đổi, tự tương quan và phụ thuộc chéo).",
        stack: ["Stata", "Excel", "Hồi quy dữ liệu bảng", "Ước lượng FGLS", "Dữ liệu World Bank"],
        details: [
            "<strong>Tổng quan tài liệu:</strong> Nghiên cứu và tổng hợp tài liệu kinh tế về kinh tế học giới và các lý thuyết phát triển kinh tế.",
            "<strong>Xử lý dữ liệu:</strong> Thu thập, làm sạch và tích hợp dữ liệu bảng của 94 quốc gia đang phát triển trong giai đoạn 8 năm, tổng cộng 751 quan sát.",
            "<strong>Ước lượng kinh tế lượng:</strong> Xây dựng, ước lượng và kiểm định các mô hình hồi quy dữ liệu bảng (OLS, Tác động cố định, FGLS) để phân tích các mối quan hệ và khắc phục các khuyết tật của mô hình."
        ],
        pdf: "projects/Kinh tế phát triển/Tác động của bất bình đẳng giới trong lao động và việc làm đến tăng trưởng kinh tế tại các quốc gia đang phát triển giai đoạn 2015 - 2022.pdf",
        data: "projects/Kinh tế phát triển/Data.xlsx"
    },
    "economic-growth-drivers": {
        title: "Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020",
        category: "Nghiên cứu chính sách so sánh",
        role: "Đồng tác giả, Chuyên viên phân tích dữ liệu",
        image: "assets/growth_drivers.png",
        description: "Phân tích bảng so sánh khám phá các động lực vĩ mô thúc đẩy tăng trưởng GDP ở các quốc gia thu nhập trung bình so với thu nhập cao. Nghiên cứu chỉ ra rằng Chỉ số Phát triển Con người (HDI) là nhân tố quyết định chi phối tăng trưởng kinh tế ở cả các nước thu nhập cao (hệ số +3.4815) và các nước thu nhập trung bình (hệ số +3.8140). Lực lượng lao động (lnLAB) có hệ số tương ứng là +1.0499 (HICs) và +0.8098 (MICs), và Công nghệ (lnPT) có hệ số là -0.0213 (HICs) và +0.1238 (MICs).",
        stack: ["Stata", "Excel", "Hồi quy 2SLS", "Phân tích so sánh", "Nội sinh"],
        details: [
            "<strong>Tổng hợp lý thuyết:</strong> Tổng hợp các lý thuyết tăng trưởng cổ điển và nội sinh, đồng thời biên tập các chỉ số vĩ mô (HDI, vốn, lao động, công nghệ, tham nhũng).",
            "<strong>Xử lý dữ liệu bảng:</strong> Thu thập, làm sạch và cấu trúc tập dữ liệu bảng vĩ mô bao gồm 54 quốc gia (27 quốc gia thu nhập cao với 405 quan sát, 27 quốc gia thu nhập trung bình với 302 quan sát) trong giai đoạn 15 năm.",
            "<strong>Mô hình hóa hồi quy 2SLS:</strong> Lập trình các mô hình hồi quy dữ liệu bảng trong Stata để so sánh độ co giãn tăng trưởng, kiểm soát tính nội sinh và quan hệ nhân quả ngược của biến tham nhũng và công nghệ bằng cấu trúc độ trễ."
        ],
        pdf: "projects/Tăng trưởng và phát triển/Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020.pdf",
        data: "projects/Tăng trưởng và phát triển/High income country data.xlsx"
    }
};

let currentLang = localStorage.getItem("lang") || "en";
let projectsData = currentLang === 'en' ? projectsDataEn : projectsDataVi;

const wordsEn = ["Aspiring Data Analyst", "Quantitative Economics Researcher", "Foreign Trade University Student"];
const wordsVi = ["Định hướng phân tích dữ liệu", "Nhà nghiên cứu kinh tế lượng", "Sinh viên Đại học Ngoại Thương"];
let words = currentLang === 'en' ? wordsEn : wordsVi;

let projectModal = null;
let certModal = null;
let modalBody = null;

// Translations dictionary
const translations = {
    en: {
        navAbout: "About",
        navEducation: "Education",
        navSkills: "Skills",
        navProjects: "Projects",
        navResume: "Resume",
        heroName: "Hi, I'm Giang Nguyen",
        heroDesc: "An International Economics student at Foreign Trade University with a strong passion for quantitative research. I specialize in data collection, econometric modeling, and time-series forecasting using Excel, Stata, Eviews, SQL, and Python to solve analytical problems and derive actionable insights.",
        btnViewProjects: "View Projects",
        btnViewResume: "View Resume",
        objectiveTitle: "Career Objective",
        objectiveP1: "With a strong academic foundation in International Economics from <strong>Foreign Trade University</strong>, I have developed solid skills in data collection, econometric modeling, time-series forecasting, and data analysis using <strong>Stata, Eviews, Excel (MOS), SQL, and Python</strong>.",
        objectiveP2: "Within the next 2-3 years, I aim to secure a professional role as a <strong>Data Analyst</strong>, <strong>Business Intelligence Analyst</strong>, or <strong>Research Analyst</strong>, where I can apply quantitative methods to solve complex business and economic problems. In the long term, I aspire to grow into a <strong>Senior Data Analyst</strong> or <strong>Quantitative Researcher</strong>, driving strategic growth and policy design through data-backed decisions.",
        eduSubtitle: "Background",
        eduTitle: "Education & Certifications",
        eduHeader: "Education",
        eduFtuName: "Foreign Trade University",
        eduFtuYears: "2023 - 2027 (Expected)",
        eduFtuMajor: "Undergraduate in International Economics",
        eduFtuGpa: "GPA: <strong>3.63 / 4.00</strong>",
        eduFtuDesc: "The energetic environment at Foreign Trade University has sharpened my logical reasoning, business problem-solving skills, and ability to present and collaborate in teams.",
        eduFtuCoursework: "<strong>Relevant Coursework:</strong> Econometrics, Economics and Business Forecasting, Research methodology for economics and business, Applied Informatics.",
        eduVphsName: "Vinh Phuc High School for the Gifted",
        eduVphsYears: "2020 - 2023",
        eduVphsMajor: "Mathematics Specialization",
        eduVphsAward: "2nd Prize - Provincial Math Olympiad",
        eduVphsDesc: "Concentrated study in advanced mathematics, cultivating a rigorous foundation in quantitative reasoning, logical analysis, and structured problem-solving. Awarded the Second Prize in the Provincial Mathematics Competition for Excellent Students.",
        certHeader: "Certifications",
        certGoogleName: "Google Data Analysis with Python Specialization",
        certGoogleDesc: "Advanced specialization from Google focused on Python for data science, covering data structures, data scraping, and exploratory data analysis using Pandas, NumPy, and Matplotlib.",
        certExcelName: "Microsoft Office Specialist: Excel (Office 2016)",
        certExcelDesc: "Certifies professional expertise in advanced formulas, Pivot Tables, data visualization charts, and data auditing using MS Excel.",
        certPptName: "Microsoft Office Specialist: PowerPoint (Office 2016)",
        certPptDesc: "Certifies professional expertise in dynamic slide layout design, multimedia animations/transitions, and custom business presentations.",
        certWordName: "Microsoft Office Specialist: Word (Office 2016)",
        certWordDesc: "Certifies professional document layouts, dynamic indexing, reference management, page formatting, and custom styling rules.",
        btnViewCert: "View Certificate",
        skillsSubtitle: "Competence",
        skillsTitle: "Technical & Soft Skills",
        skillsTechTitle: "Technical Skills (Data Stack)",
        skillsSoftTitle: "Analytical Mindset & Soft Skills",
        skillATTitle: "Analytical Thinking",
        skillATDesc: "Translating business problems into structured technical questions and data solutions.",
        skillDSTitle: "Data Storytelling",
        skillDSDesc: "Explaining complex technical numbers into easily understood business insights for stakeholders.",
        skillTWTitle: "Teamwork & Collaboration",
        skillTWDesc: "Effective cross-functional communication and project coordination in team assignments.",
        skillPSTitle: "AI Tool Integration",
        skillPSDesc: "Leveraging generative AI models and prompt engineering to optimize research and data processing workflows.",
        projSubtitle: "Showcase",
        projTitle: "Projects",
        btnViewProject: "View Project",
        projArimaMetaLabel: "Data: IMF Monthly (2016-2025)",
        projArimaMetaResult: "Result: 2026 Forecast ~$93.3B",
        projArimaCategory: "Time-Series Forecasting",
        projArimaTitle: "Forecasting Vietnam's Foreign Exchange Reserves in 2026 Using the ARIMA Model",
        projArimaDesc: "Quantitative research forecasting Vietnam's foreign exchange reserves using an ARIMA model, projecting reserves up to 2026.",
        projLaborMetaLabel: "Data: GSO National (2010-2023)",
        projLaborMetaResult: "Result: Agri. 44% ➔ 26.9%",
        projLaborCategory: "Published Research",
        projLaborTitle: "Labor Structure in Vietnam in the Context of the Fourth Industrial Revolution",
        projLaborDesc: "Research paper published in the State Management Journal analyzing sectoral labor transitions and employment dynamics in Vietnam.",
        projGenderMetaLabel: "Data: WB 94 Countries Panel",
        projGenderMetaResult: "Result: GDI Coeff +5.438",
        projGenderCategory: "Econometric Analysis",
        projGenderTitle: "Impact of Gender Inequality in Labor and Employment on Economic Growth in Developing Countries (2015-2022)",
        projGenderDesc: "Panel data regression analyzing the impact of labor-market gender inequality on economic growth across developing nations (2015–2022).",
        projGrowthMetaLabel: "Data: WB 54 Countries Panel",
        projGrowthMetaResult: "Result: HDI Dominant (+3.48 / +3.81)",
        projGrowthCategory: "Comparative Policy Study",
        projGrowthTitle: "Factors Affecting Economic Growth in Middle-Income and High-Income Country Groups (2005-2020)",
        projGrowthDesc: "Comparative econometric analysis of growth determinants (FDI, trade openness, human capital) in middle vs. high-income countries.",
        footerCopyright: "&copy; 2026 Giang Nguyen. All rights reserved.",
        footerTech: "Built with HTML, CSS, JavaScript • Hosted on GitHub Pages",
        footerAbout: "About",
        footerEducation: "Education",
        footerSkills: "Skills",
        footerProjects: "Projects",
        modalCertTitle: "MOS Credentials - Microsoft Office Specialist",
        modalCertIntro: "Expanded view of credentials issued by Microsoft, certifying international-standard office productivity skills.",
        modalCertBundle: "My MOS certification bundle includes rigorous exams covering the following tools:",
        modalCertExcelDesc: "Associate level. Covers managing worksheets, dynamic formulas, tables, charts, Power Query, and basic interactive reporting dashboards.",
        modalCertWordDesc: "Associate level. Covers custom document setups, dynamic tables of contents, document references, references management, and professional formatting guidelines.",
        modalCertPptDesc: "Associate level. Covers structured presentation design, dynamic transitions and animations, custom charts, and optimal slideshow delivery configurations."
    },
    vi: {
        navAbout: "Giới thiệu",
        navEducation: "Học vấn",
        navSkills: "Kỹ năng",
        navProjects: "Dự án",
        navResume: "Hồ sơ",
        heroName: "Xin chào, mình là Giang Nguyễn",
        heroDesc: "Sinh viên ngành Kinh tế quốc tế tại Trường Đại học Ngoại Thương với niềm đam mê mạnh mẽ đối với nghiên cứu định lượng. Tôi chuyên về thu thập dữ liệu, mô hình hóa kinh tế lượng và dự báo chuỗi thời gian bằng cách sử dụng Excel, Stata, Eviews, SQL và Python để giải quyết các vấn đề phân tích và đưa ra các giải pháp thực tiễn.",
        btnViewProjects: "Xem dự án",
        btnViewResume: "Xem CV",
        objectiveTitle: "Mục tiêu nghề nghiệp",
        objectiveP1: "Với nền tảng học thuật vững vàng về Kinh tế quốc tế tại <strong>Trường Đại học Ngoại Thương</strong>, tôi đã phát triển các kỹ năng thực tế trong việc thu thập dữ liệu, mô hình hóa kinh tế lượng, dự báo chuỗi thời gian và phân tích dữ liệu bằng cách sử dụng <strong>Stata, Eviews, Excel (MOS), SQL và Python</strong>.",
        objectiveP2: "Trong vòng 2-3 năm tới, mục tiêu của tôi là đảm nhận một vị trí chuyên nghiệp như <strong>Chuyên viên phân tích dữ liệu (Data Analyst)</strong>, <strong>Phân tích trí tuệ doanh nghiệp (BI Analyst)</strong> hoặc <strong>Nhà phân tích nghiên cứu (Research Analyst)</strong>, nơi tôi có thể áp dụng các phương pháp định lượng để giải quyết các bài toán kinh doanh và kinh tế phức tạp. Về lâu dài, tôi mong muốn phát triển thành <strong>Chuyên viên phân tích dữ liệu cấp cao (Senior Data Analyst)</strong> hoặc <strong>Nhà nghiên cứu định lượng (Quantitative Researcher)</strong>, góp phần thúc đẩy sự tăng trưởng chiến lược và thiết kế chính sách thông qua các quyết định dựa trên dữ liệu.",
        eduSubtitle: "Nền tảng",
        eduTitle: "Học vấn & Chứng chỉ",
        eduHeader: "Học vấn",
        eduFtuName: "Trường Đại học Ngoại Thương",
        eduFtuYears: "2023 - 2027 (Dự kiến)",
        eduFtuMajor: "Sinh viên ngành Kinh tế quốc tế",
        eduFtuGpa: "GPA: <strong>3.63 / 4.00</strong>",
        eduFtuDesc: "Môi trường năng động tại Trường Đại học Ngoại Thương đã giúp tôi rèn luyện tư duy logic, kỹ năng giải quyết vấn đề kinh doanh, cũng như khả năng thuyết trình và hợp tác làm việc nhóm.",
        eduFtuCoursework: "<strong>Môn học liên quan:</strong> Kinh tế lượng, Dự báo trong kinh tế và kinh doanh, Phương pháp nghiên cứu trong kinh tế và kinh doanh, Tin học ứng dụng.",
        eduVphsName: "Trường THPT Chuyên Vĩnh Phúc",
        eduVphsYears: "2020 - 2023",
        eduVphsMajor: "Chuyên Toán",
        eduVphsAward: "Giải Nhì - Học sinh giỏi Toán cấp Tỉnh",
        eduVphsDesc: "Môi trường học tập chuyên sâu môn Toán giúp xây dựng nền tảng tư duy định lượng vững chắc, phương pháp phân tích logic và khả năng giải quyết các bài toán phức tạp một cách hệ thống. Đạt giải Nhì trong Kỳ thi học sinh giỏi Toán cấp tỉnh.",
        certHeader: "Chứng chỉ",
        certGoogleName: "Google Data Analysis with Python Specialization",
        certGoogleDesc: "Chuyên ngành nâng cao từ Google tập trung vào Python cho khoa học dữ liệu, bao gồm cấu trúc dữ liệu, thu thập dữ liệu và phân tích khám phá dữ liệu (EDA) sử dụng Pandas, NumPy và Matplotlib.",
        certExcelName: "Microsoft Office Specialist: Excel (Office 2016)",
        certExcelDesc: "Chứng nhận chuyên môn chuyên nghiệp về Excel nâng cao, bao gồm lập công thức phức tạp, bảng xoay Pivot Tables, trực quan hóa biểu đồ và kiểm toán dữ liệu.",
        certPptName: "Microsoft Office Specialist: PowerPoint (Office 2016)",
        certPptDesc: "Chứng nhận kỹ năng chuyên nghiệp về thiết kế bố cục slide động, chuyển cảnh và hiệu ứng đa phương tiện, cùng với tối ưu trình bày báo cáo kinh doanh.",
        certWordName: "Microsoft Office Specialist: Word (Office 2016)",
        certWordDesc: "Chứng nhận chuyên môn định dạng văn bản chuyên nghiệp, bao quát biểu mẫu tài liệu, mục lục tự động, quản lý trích dẫn nguồn và thiết lập quy tắc định dạng tùy chỉnh.",
        btnViewCert: "Xem chứng chỉ",
        skillsSubtitle: "Năng lực",
        skillsTitle: "Kỹ năng chuyên môn & Kỹ năng mềm",
        skillsTechTitle: "Kỹ năng chuyên môn (Data Stack)",
        skillsSoftTitle: "Tư duy phân tích & Kỹ năng mềm",
        skillATTitle: "Tư duy phân tích",
        skillATDesc: "Chuyển đổi bài toán kinh doanh thành các câu hỏi kỹ thuật có cấu trúc và giải pháp dữ liệu.",
        skillDSTitle: "Truyền tải câu chuyện dữ liệu",
        skillDSDesc: "Giải thích các con số kỹ thuật phức tạp thành các phân tích kinh doanh dễ hiểu cho các bên liên quan.",
        skillTWTitle: "Làm việc nhóm & Hợp tác",
        skillTWDesc: "Giao tiếp hiệu quả và phối hợp nhịp nhàng giữa các thành viên trong các bài tập nhóm.",
        skillPSTitle: "Ứng dụng công cụ AI",
        skillPSDesc: "Sử dụng các mô hình AI tạo sinh và kỹ thuật viết prompt để tối ưu hóa quy trình nghiên cứu và xử lý dữ liệu.",
        projSubtitle: "Trình bày",
        projTitle: "Dự án",
        btnViewProject: "Xem dự án",
        projArimaMetaLabel: "Dữ liệu: IMF theo tháng (2016-2025)",
        projArimaMetaResult: "Kết quả: Dự báo 2026 ~$93.3 tỷ USD",
        projArimaCategory: "Dự báo chuỗi thời gian",
        projArimaTitle: "Dự báo dự trữ ngoại hối của Việt Nam năm 2026 bằng mô hình ARIMA",
        projArimaDesc: "Nghiên cứu định lượng dự báo dự trữ ngoại hối của Việt Nam sử dụng mô hình ARIMA, dự phóng mức dự trữ đến năm 2026.",
        projLaborMetaLabel: "Dữ liệu: GSO Quốc gia (2010-2023)",
        projLaborMetaResult: "Kết quả: Nông nghiệp 44% ➔ 26.9%",
        projLaborCategory: "Nghiên cứu đã công bố",
        projLaborTitle: "Cơ cấu lao động ở Việt Nam trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư",
        projLaborDesc: "Nghiên cứu được đăng trên Tạp chí Quản lý nhà nước phân tích sự chuyển dịch cơ cấu lao động ngành và động thái việc làm tại Việt Nam.",
        projGenderMetaLabel: "Dữ liệu: WB Dữ liệu bảng 94 quốc gia",
        projGenderMetaResult: "Kết quả: Hệ số GDI +5.438",
        projGenderCategory: "Phân tích kinh tế lượng",
        projGenderTitle: "Tác động của bất bình đẳng giới trong lao động và việc làm đến tăng trưởng kinh tế tại các quốc gia đang phát triển giai đoạn 2015 - 2022",
        projGenderDesc: "Hồi quy dữ liệu bảng phân tích tác động của bất bình đẳng giới trên thị trường lao động đối với sự tăng trưởng kinh tế của các quốc gia đang phát triển (2015–2022).",
        projGrowthMetaLabel: "Dữ liệu: WB Dữ liệu bảng 54 quốc gia",
        projGrowthMetaResult: "Kết quả: HDI vượt trội (+3.48 / +3.81)",
        projGrowthCategory: "Nghiên cứu chính sách so sánh",
        projGrowthTitle: "Các nhân tố ảnh hưởng đến tăng trưởng kinh tế ở nhóm các quốc gia có thu nhập trung bình và thu nhập cao giai đoạn 2005 - 2020",
        projGrowthDesc: "Phân tích kinh tế lượng so sánh các yếu tố thúc đẩy tăng trưởng (FDI, độ mở thương mại, vốn con người) ở các nước có thu nhập trung bình và cao.",
        footerCopyright: "&copy; 2026 Giang Nguyễn. Bảo lưu mọi quyền.",
        footerTech: "Xây dựng bằng HTML, CSS, JavaScript • Lưu trữ trên GitHub Pages",
        footerAbout: "Giới thiệu",
        footerEducation: "Học vấn",
        footerSkills: "Kỹ năng",
        footerProjects: "Dự án",
        modalCertTitle: "Chứng chỉ MOS - Microsoft Office Specialist",
        modalCertIntro: "Xem chi tiết chứng chỉ được cấp bởi Microsoft, chứng nhận kỹ năng làm việc văn phòng đạt tiêu chuẩn quốc tế.",
        modalCertBundle: "Bộ chứng chỉ MOS của tôi bao gồm các kỳ thi nghiêm ngặt bao quát các công cụ sau:",
        modalCertExcelDesc: "Cấp độ cộng tác viên (Associate). Bao quát quản lý trang tính, công thức động, bảng biểu, biểu đồ, Power Query và bảng báo cáo phân tích tương tác.",
        modalCertWordDesc: "Cấp độ cộng tác viên (Associate). Bao quát định dạng tài liệu nâng cao, mục lục động, trích dẫn tài liệu, quản lý tham chiếu và quy chuẩn định dạng chuyên nghiệp.",
        modalCertPptDesc: "Cấp độ cộng tác viên (Associate). Bao quát thiết kế bài thuyết trình có cấu trúc, hiệu ứng chuyển cảnh và hoạt ảnh động, biểu đồ tùy chỉnh và cấu hình trình chiếu tối ưu."
    }
};

// Active chart and project references for card/modal integration
let activeProjectChart = null;
let activeProjectChart2 = null;
let currentOpenProjectId = null;
let cardCharts = [];

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Modal Elements
    projectModal = document.getElementById("projectModal");
    certModal = document.getElementById("certModal");
    modalBody = document.getElementById("modalBody");

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

    // 2.5. English/Vietnamese Language Switching
    const langToggle = document.getElementById("langToggle");
    
    function updatePageLanguage() {
        if (langToggle) {
            langToggle.textContent = currentLang.toUpperCase();
        }

        // Loop over elements with data-i18n and update
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            const translatedText = translations[currentLang][key];
            if (translatedText) {
                el.innerHTML = translatedText;
            }
        });

        // Update the projectsData reference
        projectsData = currentLang === 'en' ? projectsDataEn : projectsDataVi;

        // Update dynamic typing words reference
        words = currentLang === 'en' ? wordsEn : wordsVi;

        // Update project card tech stacks dynamically
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const projectId = card.getAttribute("data-project-id");
            const project = projectsData[projectId];
            if (project) {
                const techStackContainer = card.querySelector(".project-tech-stack");
                if (techStackContainer) {
                    techStackContainer.innerHTML = project.stack.map(s => `<span class="tech-badge">${s}</span>`).join("");
                }
            }
        });

        // Re-color dynamic card charts and modal if open
        destroyCardCharts();
        initCardCharts();
        if (projectModal.classList.contains("open") && currentOpenProjectId) {
            renderProjectModalContent(currentOpenProjectId);
        }
    }

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "vi" : "en";
            localStorage.setItem("lang", currentLang);
            updatePageLanguage();
            
            // Show toast message to confirm language switch
            if (currentLang === 'en') {
                showToast("Language changed to English", "success");
            } else {
                showToast("Đã chuyển sang Tiếng Việt", "success");
            }
        });
    }

    // 3. Simple typing effect for Hero Title
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingDelay = 100;
    const erasingDelay = 50;
    const newWordDelay = 2000;
    const typedTextSpan = document.getElementById("heroTitle");

    function type() {
        if (!typedTextSpan) return;
        let currentWord = words[wordIndex];
        if (!currentWord) {
            wordIndex = 0;
            charIndex = 0;
            currentWord = words[0];
        }
        if (charIndex > currentWord.length) {
            charIndex = currentWord.length;
        }
        
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

    // Initial load of language preference
    updatePageLanguage();

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

        // 2. Labor Structure Card Chart (Stacked Area)
        const laborCtx = document.getElementById('cardChart-labor-structure');
        if (laborCtx) {
            const chart = new Chart(laborCtx, {
                type: 'line',
                data: {
                    labels: ["'10", "'11", "'12", "'13", "'14", "'15", "'16", "'17", "'18", "'19", "'20", "'21", "'22", "'23"],
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'Agriculture' : 'Nông nghiệp',
                            data: [48.7, 48.4, 47.4, 46.8, 46.3, 44.0, 41.9, 40.2, 37.7, 34.5, 33.1, 29.1, 27.5, 26.9],
                            backgroundColor: 'rgba(244, 63, 94, 0.15)', // Coral/Rose
                            borderColor: '#f43f5e',
                            borderWidth: 1.8,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 1,
                            pointHoverRadius: 3,
                            pointBackgroundColor: '#f43f5e'
                        },
                        {
                            label: currentLang === 'en' ? 'Industry & Construction' : 'Công nghiệp & Xây dựng',
                            data: [21.7, 21.3, 21.2, 21.2, 21.4, 22.8, 24.7, 25.8, 26.7, 30.1, 30.8, 33.1, 33.4, 33.5],
                            backgroundColor: 'rgba(255, 122, 0, 0.15)', // Orange
                            borderColor: '#ff7a00',
                            borderWidth: 1.8,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 1,
                            pointHoverRadius: 3,
                            pointBackgroundColor: '#ff7a00'
                        },
                        {
                            label: currentLang === 'en' ? 'Services' : 'Dịch vụ',
                            data: [29.6, 30.3, 31.4, 32.0, 32.2, 33.2, 33.4, 34.1, 35.6, 35.4, 36.1, 37.8, 39.0, 39.6],
                            backgroundColor: 'rgba(0, 245, 212, 0.15)', // Teal
                            borderColor: '#00f5d4',
                            borderWidth: 1.8,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 1,
                            pointHoverRadius: 3,
                            pointBackgroundColor: '#00f5d4'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { display: false }, 
                        tooltip: { 
                            enabled: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '%';
                                }
                            }
                        } 
                    },
                    scales: {
                        x: { 
                            grid: { display: false }, 
                            ticks: { color: textColor, font: { family: 'Inter', size: 9, weight: '500' } } 
                        },
                        y: { 
                            stacked: true,
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter', size: 8 },
                                callback: function(value) { return value + '%'; }
                            },
                            min: 0,
                            max: 100
                        }
                    }
                }
            });
            cardCharts.push(chart);
        }

        // 3. Gender Inequality Card Chart (Scatter Plot)
        const genderCtx = document.getElementById('cardChart-gender-inequality');
        if (genderCtx) {
            const chart = new Chart(genderCtx, {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'Countries' : 'Quốc gia',
                            data: [
                                {x: 0.81, y: 1.2}, {x: 0.83, y: 1.8}, {x: 0.85, y: 2.2}, 
                                {x: 0.87, y: 3.1}, {x: 0.89, y: 4.0}, {x: 0.91, y: 3.7}, 
                                {x: 0.93, y: 5.5}, {x: 0.95, y: 7.2}, {x: 0.97, y: 8.5}
                            ],
                            backgroundColor: '#d946ef', // Neon magenta
                            pointRadius: 3.5,
                            pointHoverRadius: 5
                        },
                        {
                            type: 'line',
                            label: currentLang === 'en' ? 'Regression Fit' : 'Đường hồi quy',
                            data: [{x: 0.80, y: 1.0}, {x: 0.98, y: 8.8}],
                            borderColor: '#00f2fe', // Neon cyan
                            borderWidth: 2,
                            pointRadius: 0,
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { display: false }, 
                        tooltip: { 
                            callbacks: {
                                label: function(context) {
                                    return `GDI: ${context.raw.x}, GDP: $${context.raw.y}k`;
                                }
                            }
                        } 
                    },
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 8, weight: '500' } }, min: 0.80, max: 1.00 },
                        y: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 8, weight: '500' } }, min: 0, max: 10 }
                    }
                }
            });
            cardCharts.push(chart);
        }

        // 4. Growth Drivers Card Chart (Horizontal Grouped Bar)
        const growthCtx = document.getElementById('cardChart-economic-growth-drivers');
        if (growthCtx) {
            const chart = new Chart(growthCtx, {
                type: 'bar',
                data: {
                    labels: currentLang === 'en' ? 
                        ['GDP Growth', 'R&D Spent', 'Human Capital', 'Trade Openness', 'Urban Pop'] : 
                        ['Tăng trưởng GDP', 'Chi tiêu R&D', 'Vốn con người', 'Độ mở thương mại', 'Dân số đô thị'],
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'High-Income' : 'Thu nhập cao',
                            data: [2.1, 2.8, 8.5, 7.5, 8.1], // Normalized values (0-10 scale)
                            backgroundColor: '#00f2fe', // Bright cyan
                            borderColor: '#00f2fe',
                            borderWidth: 1,
                            borderRadius: 3
                        },
                        {
                            label: currentLang === 'en' ? 'Middle-Income' : 'Thu nhập trung bình',
                            data: [4.5, 1.1, 6.2, 5.8, 5.5], // Normalized values (0-10 scale)
                            backgroundColor: '#ff7a00', // Bright orange
                            borderColor: '#ff7a00',
                            borderWidth: 1,
                            borderRadius: 3
                        }
                    ]
                },
                options: {
                    indexAxis: 'y', // Makes the bar chart horizontal
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { display: false }, 
                        tooltip: { 
                            enabled: true,
                            callbacks: {
                                label: function(context) {
                                    const datasetIndex = context.datasetIndex;
                                    const index = context.dataIndex;
                                    const isHic = datasetIndex === 0;
                                    const realValues = isHic ? 
                                        (currentLang === 'en' ? ['2.1% (Avg.)', '2.8% of GDP', '0.85 Index', '75% of GDP', '81% Share'] : ['2.1% (Tr.bình)', '2.8% GDP', '0.85 Chỉ số', '75% GDP', '81% Tỷ lệ']) : 
                                        (currentLang === 'en' ? ['4.5% (Avg.)', '1.1% of GDP', '0.62 Index', '58% of GDP', '55% Share'] : ['4.5% (Tr.bình)', '1.1% GDP', '0.62 Chỉ số', '58% GDP', '55% Tỷ lệ']);
                                    return context.dataset.label + ': ' + realValues[index];
                                }
                            }
                        } 
                    },
                    scales: {
                        x: { 
                            grid: { color: gridColor },
                            ticks: { display: false }, // Hide scale ticks since the metrics use different units
                            min: 0, 
                            max: 10 
                        },
                        y: { 
                            grid: { display: false }, 
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter', size: 8, weight: '600' } 
                            } 
                        }
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
            activeProjectChart = null;
        }
        if (activeProjectChart2) {
            activeProjectChart2.destroy();
            activeProjectChart2 = null;
        }

        let canvasId = 'projectModalChart';
        if (projectId === 'economic-growth-drivers') {
            canvasId = 'growthDriversModalBarChart';
        } else if (projectId === 'gender-inequality') {
            canvasId = 'projectModalScatterChart';
        }
        
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
                            label: currentLang === 'en' ? 'Historical' : 'Lịch sử',
                            data: [36.7, 55.4, 94.2, 86.7, 79.0, 85.0, null],
                            borderColor: '#00f2fe', // Bright cyan
                            borderWidth: 3.5,
                            pointRadius: 4.5,
                            pointHoverRadius: 6.5,
                            pointBackgroundColor: '#00f2fe',
                            fill: false,
                            tension: 0.3
                        },
                        {
                            label: currentLang === 'en' ? 'Forecast' : 'Dự báo',
                            data: [null, null, null, null, null, 85.0, 93.3],
                            borderColor: '#ff9f43', // Bright orange
                            borderWidth: 3.5,
                            borderDash: [4, 4],
                            pointRadius: 5.5,
                            pointHoverRadius: 7.5,
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
                            ticks: { color: textColor, font: { family: 'Inter', size: 11, weight: '500' } }
                        },
                        y: {
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter', size: 11, weight: '500' },
                                callback: function(value) { return '$' + value + 'B'; }
                            },
                            title: {
                                display: true,
                                text: currentLang === 'en' ? 'Billion USD' : 'Tỷ USD',
                                color: textColor,
                                font: { family: 'Inter', size: 11, weight: 'bold' }
                            }
                        }
                    }
                }
            };
        } else if (projectId === 'labor-structure') {
            config = {
                type: 'line',
                data: {
                    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'Agriculture' : 'Nông nghiệp',
                            data: [48.7, 48.4, 47.4, 46.8, 46.3, 44.0, 41.9, 40.2, 37.7, 34.5, 33.1, 29.1, 27.5, 26.9],
                            backgroundColor: 'rgba(244, 63, 94, 0.15)', // Coral/Rose
                            borderColor: '#f43f5e',
                            borderWidth: 2.5,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 2,
                            pointHoverRadius: 4,
                            pointBackgroundColor: '#f43f5e'
                        },
                        {
                            label: currentLang === 'en' ? 'Industry & Construction' : 'Công nghiệp & Xây dựng',
                            data: [21.7, 21.3, 21.2, 21.2, 21.4, 22.8, 24.7, 25.8, 26.7, 30.1, 30.8, 33.1, 33.4, 33.5],
                            backgroundColor: 'rgba(255, 122, 0, 0.15)', // Orange
                            borderColor: '#ff7a00',
                            borderWidth: 2.5,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 2,
                            pointHoverRadius: 4,
                            pointBackgroundColor: '#ff7a00'
                        },
                        {
                            label: currentLang === 'en' ? 'Services' : 'Dịch vụ',
                            data: [29.6, 30.3, 31.4, 32.0, 32.2, 33.2, 33.4, 34.1, 35.6, 35.4, 36.1, 37.8, 39.0, 39.6],
                            backgroundColor: 'rgba(0, 245, 212, 0.15)', // Teal
                            borderColor: '#00f5d4',
                            borderWidth: 2.5,
                            fill: true,
                            tension: 0.25,
                            pointRadius: 2,
                            pointHoverRadius: 4,
                            pointBackgroundColor: '#00f5d4'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: textColor,
                                font: { family: 'Inter', size: 11, weight: '600' },
                                boxWidth: 15,
                                padding: 10
                            }
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: textColor, font: { family: 'Inter', size: 11, weight: '500' } }
                        },
                        y: {
                            stacked: true,
                            grid: { color: gridColor },
                            ticks: { 
                                color: textColor, 
                                font: { family: 'Inter', size: 11, weight: '500' },
                                callback: function(value) { return value + '%'; }
                            },
                            min: 0,
                            max: 100
                        }
                    }
                }
            };
        } else if (projectId === 'gender-inequality') {
            config = {
                type: 'scatter',
                data: {
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'Countries' : 'Quốc gia',
                            data: [
                                {x: 0.81, y: 1.2}, {x: 0.83, y: 1.8}, {x: 0.85, y: 2.2}, 
                                {x: 0.87, y: 3.1}, {x: 0.89, y: 4.0}, {x: 0.91, y: 3.7}, 
                                {x: 0.93, y: 5.5}, {x: 0.95, y: 7.2}, {x: 0.97, y: 8.5}
                            ],
                            backgroundColor: '#d946ef', // Neon magenta
                            pointRadius: 7,
                            pointHoverRadius: 9.5,
                            pointStyle: 'circle'
                        },
                        {
                            type: 'line',
                            label: currentLang === 'en' ? 'Regression Fit' : 'Đường hồi quy',
                            data: [{x: 0.80, y: 1.0}, {x: 0.98, y: 8.8}],
                            borderColor: '#00f2fe', // Neon cyan
                            borderWidth: 3.5,
                            pointRadius: 0,
                            fill: false,
                            pointStyle: 'line'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { 
                            display: true,
                            position: 'top',
                            labels: {
                                color: textColor,
                                font: { family: 'Inter', size: 12, weight: '600' },
                                boxWidth: 25,
                                padding: 10,
                                usePointStyle: true
                            }
                        }, 
                        tooltip: { 
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            callbacks: {
                                label: function(context) {
                                    return `GDI: ${context.raw.x}, GDP: $${context.raw.y}k`;
                                }
                            }
                        } 
                    },
                    scales: {
                        x: { 
                            grid: { color: gridColor }, 
                            ticks: { color: textColor, font: { size: 11, weight: '500' } }, 
                            min: 0.80, 
                            max: 1.00,
                            title: {
                                display: true,
                                text: currentLang === 'en' ? 'Gender Development Index (GDI)' : 'Chỉ số Phát triển Giới (GDI)',
                                color: textColor,
                                font: { family: 'Inter', size: 12, weight: 'bold' }
                            }
                        },
                        y: { 
                            grid: { color: gridColor }, 
                            ticks: { color: textColor, font: { size: 11, weight: '500' } }, 
                            min: 0, 
                            max: 10,
                            title: {
                                display: true,
                                text: currentLang === 'en' ? 'GDP per Capita ($k)' : 'GDP bình quân đầu người (nghìn USD)',
                                color: textColor,
                                font: { family: 'Inter', size: 12, weight: 'bold' }
                            }
                        }
                    }
                }
            };
        } else if (projectId === 'economic-growth-drivers') {
            config = {
                type: 'bar',
                data: {
                    labels: currentLang === 'en' ? 
                        ['GDP Growth', 'R&D Spent', 'Human Capital', 'Trade Openness', 'Urban Pop'] : 
                        ['Tăng trưởng GDP', 'Chi tiêu R&D', 'Vốn con người', 'Độ mở thương mại', 'Dân số đô thị'],
                    datasets: [
                        {
                            label: currentLang === 'en' ? 'High-Income (HICs)' : 'Thu nhập cao (HICs)',
                            data: [2.1, 2.8, 8.5, 7.5, 8.1], // Normalized values (0-10 scale)
                            backgroundColor: '#00f2fe',
                            borderColor: '#00f2fe',
                            borderWidth: 1,
                            borderRadius: 3
                        },
                        {
                            label: currentLang === 'en' ? 'Middle-Income (MICs)' : 'Thu nhập trung bình (MICs)',
                            data: [4.5, 1.1, 6.2, 5.8, 5.5], // Normalized values (0-10 scale)
                            backgroundColor: '#ff7a00',
                            borderColor: '#ff7a00',
                            borderWidth: 1,
                            borderRadius: 3
                        }
                    ]
                },
                options: {
                    indexAxis: 'y', // Makes it horizontal
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: textColor,
                                font: { family: 'Inter', size: 11, weight: '600' },
                                boxWidth: 15,
                                padding: 10
                            }
                        },
                        tooltip: {
                            backgroundColor: isDark ? 'rgba(21, 29, 48, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            titleColor: isDark ? '#fff' : '#000',
                            bodyColor: isDark ? '#fff' : '#000',
                            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
                            borderWidth: 1,
                            callbacks: {
                                label: function(context) {
                                    const datasetIndex = context.datasetIndex;
                                    const index = context.dataIndex;
                                    const isHic = datasetIndex === 0;
                                    const realValues = isHic ? 
                                        (currentLang === 'en' ? ['2.1% (Avg.)', '2.8% of GDP', '0.85 Index', '75% of GDP', '81% Share'] : ['2.1% (Tr.bình)', '2.8% GDP', '0.85 Chỉ số', '75% GDP', '81% Tỷ lệ']) : 
                                        (currentLang === 'en' ? ['4.5% (Avg.)', '1.1% of GDP', '0.62 Index', '58% of GDP', '55% Share'] : ['4.5% (Tr.bình)', '1.1% GDP', '0.62 Chỉ số', '58% GDP', '55% Tỷ lệ']);
                                    return context.dataset.label + ': ' + realValues[index];
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: gridColor },
                            ticks: { display: false }, // Hide scale since units differ
                            min: 0,
                            max: 10
                        },
                        y: {
                            grid: { display: false },
                            ticks: {
                                color: textColor,
                                font: { family: 'Inter', size: 11, weight: '600' }
                            }
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

                // Set wide width styling for all projects
                if (modalContentEl) {
                    modalContentEl.classList.add('modal-dashboard-wide');
                }

                renderProjectModalContent(projectId);
                openModal(projectModal);
            }
        }
    });

    // Helper to render project modal content based on active language
    function renderProjectModalContent(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        let stackBadges = project.stack.map(s => `<span class="tech-badge">${s}</span>`).join("");
        let bulletPoints = project.details.map(d => `<li><i class="fa-solid fa-chevron-right"></i><div>${d}</div></li>`).join("");

        if (projectId === 'arima-forecasting') {
            modalBody.innerHTML = `
                <div class="growth-drivers-dashboard-header" data-project-id="arima-forecasting" style="margin-bottom: 1rem; padding-bottom: 0.6rem;">
                    <h3>${currentLang === 'en' ? "FORECASTING VIETNAM'S FOREIGN EXCHANGE RESERVES" : "DỰ BÁO DỰ TRỮ NGOẠI HỐI CỦA VIỆT NAM"}</h3>
                    <p>${currentLang === 'en' ? "ARIMA(1, 1, 0) Time-Series Forecasting Model (2016-2026)" : "Mô hình dự báo chuỗi thời gian ARIMA(1, 1, 0) (2016-2026)"}</p>
                </div>

                <div class="growth-drivers-dashboard" style="gap: 1.2rem; margin-top: 1rem;">
                    <!-- Left Column: Chart Card & Model Diagnostics -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Chart Card -->
                        <div class="dashboard-card glass" style="display: flex; flex-direction: column; gap: 0.6rem;">
                            <div class="dashboard-badge-row">
                                <span style="background: rgba(255, 255, 255, 0.05); padding: 0.25rem 0.6rem; border-radius: 4px; border: 1px solid var(--glass-border); font-size: 0.75rem; font-weight: 600; color: var(--text-secondary);">${currentLang === 'en' ? "Data: IMF Monthly (2016-2025)" : "Dữ liệu: IMF theo tháng (2016-2025)"}</span>
                                <span style="background: rgba(0, 242, 254, 0.1); color: #00f2fe; padding: 0.25rem 0.6rem; border-radius: 4px; border: 1px solid rgba(0, 242, 254, 0.2); font-size: 0.75rem; font-weight: 600;">${currentLang === 'en' ? "Result: 2026 Forecast ~$93.3B" : "Kết quả: Dự báo 2026 ~$93.3 tỷ USD"}</span>
                            </div>
                            <div style="position: relative; height: 250px; width: 100%;">
                                <canvas id="projectModalChart"></canvas>
                            </div>
                            <div style="text-align: center; font-size: 0.75rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-top: 0.3rem;">
                                ${currentLang === 'en' ? "TIME-SERIES FORECASTING" : "DỰ BÁO CHUỖI THỜI GIAN"}
                            </div>
                        </div>

                        <!-- Metrics -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-list-check"></i> ${currentLang === 'en' ? "Model Diagnostics & Fit" : "Chẩn đoán & Độ thích hợp của Mô hình"}</h4>
                            <div class="metrics-comparison-grid">
                                <div class="metric-row-header">
                                    <div style="text-align: left;">${currentLang === 'en' ? "Statistical Metric" : "Chỉ số thống kê"}</div>
                                    <div class="high-income-header">${currentLang === 'en' ? "Value" : "Giá trị"}</div>
                                    <div class="middle-income-header">${currentLang === 'en' ? "Status" : "Trạng thái"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-chart-line"></i> ${currentLang === 'en' ? "Adjusted R-squared" : "R-squared điều chỉnh"}</div>
                                    <div class="metric-val high-income-val">0.2216</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">${currentLang === 'en' ? "Significant" : "Ý nghĩa"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-calculator"></i> ${currentLang === 'en' ? "Akaike (AIC)" : "Akaike (AIC)"}</div>
                                    <div class="metric-val high-income-val">17.6598</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">${currentLang === 'en' ? "Minimised" : "Tối thiểu hóa"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-code-branch"></i> ${currentLang === 'en' ? "Schwarz (SC)" : "Schwarz (SC)"}</div>
                                    <div class="metric-val high-income-val">17.7298</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">${currentLang === 'en' ? "Minimised" : "Tối thiểu hóa"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-compass"></i> ${currentLang === 'en' ? "S.E. of Regression" : "Sai số chuẩn hồi quy"}</div>
                                    <div class="metric-val high-income-val">1,631.71</div>
                                    <div class="metric-val middle-income-val" style="color: var(--text-secondary);">${currentLang === 'en' ? "Million USD" : "Triệu USD"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-percent"></i> ${currentLang === 'en' ? "Forecast Error (MAPE)" : "Sai số dự báo (MAPE)"}</div>
                                    <div class="metric-val high-income-val">5.13%</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">${currentLang === 'en' ? "Excellent" : "Rất tốt"}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Project Context & Tasks -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Context & Actions -->
                        <div class="dashboard-card glass">
                            <h4 class="dashboard-card-title-row">
                                <span><i class="fa-solid fa-circle-info"></i> ${currentLang === 'en' ? "Project Context" : "Bối cảnh Dự án"}</span>
                                <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> ${currentLang === 'en' ? "Read Paper" : "Đọc bài"}</a>
                            </h4>
                            <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.8rem; margin-top: 0;">
                                ${project.description}
                            </p>
                            <div class="project-tech-stack" style="margin-bottom: 0.2rem;">
                                ${stackBadges}
                            </div>
                        </div>

                        <!-- Metrics & Specific Tasks -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bars-progress"></i> ${currentLang === 'en' ? "Metrics & Specific Tasks" : "Các chỉ số & Nhiệm vụ cụ thể"}</h4>
                            <ul class="proj-modal-bullet-list" style="margin: 0; padding: 0;">
                                ${bulletPoints}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else if (projectId === 'labor-structure') {
            modalBody.innerHTML = `
                <div class="growth-drivers-dashboard-header" data-project-id="labor-structure" style="margin-bottom: 1rem; padding-bottom: 0.6rem;">
                    <h3>${currentLang === 'en' ? "LABOR STRUCTURE SHIFT IN VIETNAM (IR4.0)" : "CƠ CẤU LAO ĐỘNG Ở VIỆT NAM (CMCN 4.0)"}</h3>
                    <p>${currentLang === 'en' ? "National Employment Sector & Demographic Analysis (2010-2023)" : "Phân tích Nhân khẩu học & Cơ cấu ngành việc làm quốc gia (2010-2023)"}</p>
                </div>

                <div class="growth-drivers-dashboard" style="gap: 1.2rem; margin-top: 1rem;">
                    <!-- Left Column: Chart & Indicators Table -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Stacked Area Chart -->
                        <div class="dashboard-card glass">
                            <h4><i class="fa-solid fa-chart-line"></i> ${currentLang === 'en' ? "Sectoral Employment Shifts (14-Year Trend)" : "Dịch chuyển việc làm theo ngành (Xu hướng 14 năm)"}</h4>
                            <div style="position: relative; height: 250px; width: 100%;">
                                <canvas id="projectModalChart"></canvas>
                            </div>
                        </div>

                        <!-- Key Labor Market Indicators -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-list-check"></i> ${currentLang === 'en' ? "Key Labor Market Indicators" : "Chỉ tiêu chính thị trường lao động"}</h4>
                            <div class="metrics-comparison-grid">
                                <div class="metric-row-header">
                                    <div style="text-align: left;">${currentLang === 'en' ? "Key Indicator" : "Chỉ tiêu chính"}</div>
                                    <div class="high-income-header">2015</div>
                                    <div class="middle-income-header">2023</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-wheat-awn"></i> ${currentLang === 'en' ? "Agricultural Share" : "Tỷ trọng Nông nghiệp"}</div>
                                    <div class="metric-val high-income-val" style="color: #64748b;">44.0%</div>
                                    <div class="metric-val middle-income-val" style="color: #ef4444;">26.9% (-17.1%)</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-handshake"></i> ${currentLang === 'en' ? "Formal Employment" : "Việc làm chính thức"}</div>
                                    <div class="metric-val high-income-val" style="color: #64748b;">39.3%</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">53.9% (+14.6%)</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-venus-mars"></i> ${currentLang === 'en' ? "Trained Share (M / F)" : "Tỷ lệ đã qua đào tạo (Nam / Nữ)"}</div>
                                    <div class="metric-val high-income-val" style="color: #64748b;">23.6% / 20.1%</div>
                                    <div class="metric-val middle-income-val" style="color: #3b82f6;">31.8% / 26.8%</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-graduation-cap"></i> ${currentLang === 'en' ? "Higher Ed. Unemployment" : "Thất nghiệp sau ĐH"}</div>
                                    <div class="metric-val high-income-val" style="color: #64748b;">-</div>
                                    <div class="metric-val middle-income-val" style="color: #f59e0b;">2.85% (vs. 2.28% avg)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Project Context & Tasks -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Context & Actions -->
                        <div class="dashboard-card glass">
                            <h4 class="dashboard-card-title-row">
                                <span><i class="fa-solid fa-circle-info"></i> ${currentLang === 'en' ? "Project Context" : "Bối cảnh Dự án"}</span>
                                <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> ${currentLang === 'en' ? "Read Paper" : "Đọc bài"}</a>
                            </h4>
                            <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.8rem; margin-top: 0;">
                                ${project.description}
                            </p>
                            <div class="project-tech-stack" style="margin-bottom: 0.2rem;">
                                ${stackBadges}
                            </div>
                        </div>

                        <!-- Metrics & Specific Tasks -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bars-progress"></i> ${currentLang === 'en' ? "Metrics & Specific Tasks" : "Các chỉ số & Nhiệm vụ cụ thể"}</h4>
                            <ul class="proj-modal-bullet-list" style="margin: 0; padding: 0;">
                                ${bulletPoints}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else if (projectId === 'gender-inequality') {
            modalBody.innerHTML = `
                <div class="growth-drivers-dashboard-header" data-project-id="gender-inequality" style="margin-bottom: 1rem; padding-bottom: 0.6rem;">
                    <h3>${currentLang === 'en' ? "IMPACT OF GENDER INEQUALITY ON ECONOMIC GROWTH" : "TÁC ĐỘNG CỦA BẤT BÌNH ĐẲNG GIỚI ĐẾN TĂNG TRƯỞNG KINH TẾ"}</h3>
                    <p>${currentLang === 'en' ? "Panel Regression across 94 Developing Countries (2015-2022)" : "Hồi quy dữ liệu bảng của 94 quốc gia đang phát triển (2015-2022)"}</p>
                </div>

                <div class="growth-drivers-dashboard" style="gap: 1.2rem; margin-top: 1rem;">
                    <!-- Left Column: Chart & Diagnostics Table -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Scatter Plot Chart -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-chart-line"></i> ${currentLang === 'en' ? "Gender Equality vs. Economic Growth" : "Bình đẳng giới vs. Tăng trưởng Kinh tế"}</h4>
                            <div style="position: relative; height: 250px; width: 100%;">
                                <canvas id="projectModalScatterChart"></canvas>
                            </div>
                        </div>

                        <!-- Metrics -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-list-check"></i> ${currentLang === 'en' ? "Econometric Model & Diagnostics" : "Mô hình kinh tế lượng & Chẩn đoán"}</h4>
                            <div class="metrics-comparison-grid">
                                <div class="metric-row-header">
                                    <div style="text-align: left;">${currentLang === 'en' ? "Diagnostic Check" : "Kiểm định chẩn đoán"}</div>
                                    <div class="high-income-header">${currentLang === 'en' ? "Result/Value" : "Kết quả/Giá trị"}</div>
                                    <div class="middle-income-header">${currentLang === 'en' ? "Decision" : "Quyết định"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-users"></i> ${currentLang === 'en' ? "Observations / Groups" : "Số quan sát / Số nhóm"}</div>
                                    <div class="metric-val high-income-val">751 obs / 94 countries</div>
                                    <div class="metric-val middle-income-val" style="color: var(--text-muted);">${currentLang === 'en' ? "Unbalanced panel" : "Dữ liệu bảng không cân bằng"}</div>
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
                                    <div class="metric-label"><i class="fa-solid fa-shield-halved"></i> ${currentLang === 'en' ? "Heteroscedasticity / AR" : "Phương sai sai số thay đổi / Tự tương quan"}</div>
                                    <div class="metric-val high-income-val">p = 0.0000 (${currentLang === 'en' ? "detected" : "phát hiện"})</div>
                                    <div class="metric-val middle-income-val" style="color: #ef4444;">FGLS Required</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-calculator"></i> Wald chi2(4) statistic</div>
                                    <div class="metric-val high-income-val">1,096.45</div>
                                    <div class="metric-val middle-income-val" style="color: #10b981;">p = 0.0000 (Sig.)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Project Context & Tasks -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Context & Actions -->
                        <div class="dashboard-card glass">
                            <h4 class="dashboard-card-title-row">
                                <span><i class="fa-solid fa-circle-info"></i> ${currentLang === 'en' ? "Project Context" : "Bối cảnh Dự án"}</span>
                                <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> ${currentLang === 'en' ? "Read Paper" : "Đọc bài"}</a>
                            </h4>
                            <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.8rem; margin-top: 0;">
                                ${project.description}
                            </p>
                            <div class="project-tech-stack" style="margin-bottom: 0.2rem;">
                                ${stackBadges}
                            </div>
                        </div>

                        <!-- Metrics & Specific Tasks -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bars-progress"></i> ${currentLang === 'en' ? "Metrics & Specific Tasks" : "Các chỉ số & Nhiệm vụ cụ thể"}</h4>
                            <ul class="proj-modal-bullet-list" style="margin: 0; padding: 0;">
                                ${bulletPoints}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else if (projectId === 'economic-growth-drivers') {
            modalBody.innerHTML = `
                <div class="growth-drivers-dashboard-header" data-project-id="economic-growth-drivers" style="margin-bottom: 1rem; padding-bottom: 0.6rem;">
                    <h3>${currentLang === 'en' ? "MACROECONOMIC GROWTH DRIVERS COMPARISON" : "SO SÁNH CÁC ĐỘNG LỰC TĂNG TRƯỞNG VĨ MÔ"}</h3>
                    <p>${currentLang === 'en' ? "High-Income vs Middle-Income Countries (2005-2020)" : "Nhóm quốc gia thu nhập cao vs. nhóm quốc gia thu nhập trung bình (2005-2020)"}</p>
                </div>

                <div class="growth-drivers-dashboard" style="gap: 1.2rem; margin-top: 1rem;">
                    <!-- Left Column: Metrics & Chart -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Metrics -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-list-check"></i> ${currentLang === 'en' ? "Key Performance Metrics" : "Các chỉ số hoạt động chính"}</h4>
                            <div class="metrics-comparison-grid">
                                <div class="metric-row-header">
                                    <div style="text-align: left;">${currentLang === 'en' ? "Metric" : "Chỉ số"}</div>
                                    <div class="high-income-header">${currentLang === 'en' ? "High-Income" : "Thu nhập cao"}</div>
                                    <div class="middle-income-header">${currentLang === 'en' ? "Middle-Income" : "Thu nhập trung bình"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-chart-line"></i> ${currentLang === 'en' ? "Real GDP Growth" : "Tăng trưởng GDP thực tế"}</div>
                                    <div class="metric-val high-income-val">${currentLang === 'en' ? "2.1% (Avg.)" : "2.1% (Tr.bình)"}</div>
                                    <div class="metric-val middle-income-val">${currentLang === 'en' ? "4.5% (Avg.)" : "4.5% (Tr.bình)"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-flask"></i> ${currentLang === 'en' ? "R&D Expenditure" : "Chi tiêu cho R&D"}</div>
                                    <div class="metric-val high-income-val">${currentLang === 'en' ? "2.8% of GDP" : "2.8% GDP"}</div>
                                    <div class="metric-val middle-income-val">${currentLang === 'en' ? "1.1% of GDP" : "1.1% GDP"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-user-graduate"></i> ${currentLang === 'en' ? "Human Capital Index" : "Chỉ số Phát triển Con người (HDI)"}</div>
                                    <div class="metric-val high-income-val">0.85</div>
                                    <div class="metric-val middle-income-val">0.62</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-globe"></i> ${currentLang === 'en' ? "Trade Openness" : "Độ mở Thương mại"}</div>
                                    <div class="metric-val high-income-val">${currentLang === 'en' ? "75% of GDP" : "75% GDP"}</div>
                                    <div class="metric-val middle-income-val">${currentLang === 'en' ? "58% of GDP" : "58% GDP"}</div>
                                </div>
                                <div class="metric-row">
                                    <div class="metric-label"><i class="fa-solid fa-city"></i> ${currentLang === 'en' ? "Urban Population" : "Dân số đô thị"}</div>
                                    <div class="metric-val high-income-val">81%</div>
                                    <div class="metric-val middle-income-val">55%</div>
                                </div>
                            </div>
                        </div>

                        <!-- Horizontal Grouped Bar Chart -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-chart-bar"></i> ${currentLang === 'en' ? "Macroeconomic Drivers Comparison" : "So sánh các động lực kinh tế vĩ mô"}</h4>
                            <div style="position: relative; height: 200px; width: 100%;">
                                <canvas id="growthDriversModalBarChart"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Project Context & Tasks -->
                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <!-- Context & Actions -->
                        <div class="dashboard-card glass">
                            <h4 class="dashboard-card-title-row">
                                <span><i class="fa-solid fa-circle-info"></i> ${currentLang === 'en' ? "Project Context" : "Bối cảnh Dự án"}</span>
                                <a href="${project.pdf}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-xs" style="margin: 0;"><i class="fa-regular fa-file-pdf"></i> ${currentLang === 'en' ? "Read Paper" : "Đọc bài"}</a>
                            </h4>
                            <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-secondary); text-align: justify; margin-bottom: 0.8rem; margin-top: 0;">
                                ${project.description}
                            </p>
                            <div class="project-tech-stack" style="margin-bottom: 0.2rem;">
                                ${stackBadges}
                            </div>
                        </div>

                        <!-- Metrics & Specific Tasks -->
                        <div class="dashboard-card glass">
                            <h4 style="margin-bottom: 0.8rem;"><i class="fa-solid fa-bars-progress"></i> ${currentLang === 'en' ? "Metrics & Specific Tasks" : "Các chỉ số & Nhiệm vụ cụ thể"}</h4>
                            <ul class="proj-modal-bullet-list" style="margin: 0; padding: 0;">
                                ${bulletPoints}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        }

        // Render the detailed interactive modal chart if library loaded
        if (typeof Chart !== 'undefined') {
            renderProjectChart(projectId);
        }
    }

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
            if (activeProjectChart2) {
                activeProjectChart2.destroy();
                activeProjectChart2 = null;
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
