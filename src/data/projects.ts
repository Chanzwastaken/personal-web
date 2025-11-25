import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Nugas.AI",
        description: "Nugas.AI is an AI-powered study assistant that helps students understand and study their academic documents.",
        longDescription: "Nugas.AI is an AI-powered study assistant that helps students understand and study their academic documents. Upload a PDF, and get instant summaries, keywords, concept explanations, quizzes, and the ability to chat with your document.",
        image: "/projects/nugas-ai.png",
        category: "AI Apps",
        features: [
            "📄 PDF Upload: Drag-and-drop interface for uploading academic documents (up to 20 MB)",
            "🤖 AI Analysis: Automatic extraction of summaries, keywords, and key concepts",
            "📝 Interactive Quiz: Multiple-choice questions generated from your document",
            "💬 Document Chat: Ask questions about your document and get AI-powered answers",
            "🎨 Modern UI: Clean, minimalist design built with TailwindCSS"
        ],
        techStack: ["Google Gemini 2.0 Flash API", "TypeScript", "Next.js", "TailwindCSS", "pdf-parse"],
        links: {
            github: "https://github.com/Chanzwastaken/nugas-ai",
            demo: "https://nugas-ai.vercel.app/"
        }
    },
    {
        id: "2",
        title: "LLM Dataset Prep and Text Classification GTA VI Comments",
        description: "A Case Study on GTA VI Trailer 2.",
        longDescription: "This project demonstrates best practices in creating high-quality datasets for Large Language Model (LLM) training and text classification. It covers the complete pipeline from data collection to model training",
        image: "/projects/gtallm.png",
        category: "Data Science",
        features: [
            "Data Collection via YouTube API v3",
            "Comprehensive Cleaning & validation pipeline",
            "Multi-dimensional Labeling with custom Streamlit tool",
            "Quality Assurance with inter-annotator agreement",
            "Model Training using DistilBERT",
            "Professional Documentation and dataset card"
        ],
        techStack: ["Python", "PyTorch", "google-api-python-client", "Hugging Face", "Streamlit"],
        links: {
            github: "https://github.com/Chanzwastaken/gta-vi-llm"
        }
    },
    {
        id: "3",
        title: "Data Science Salaries Dashboard",
        description: "This project provides comprehensive analysis and visualization of data science salaries spanning 2020-2022.",
        longDescription: "An interactive data visualization and analysis project exploring data science salaries across different experience levels, employment types, company sizes, and geographic locations from 2020-2022.",
        image: "/projects/dsdashboard.png",
        category: "Dashboard",
        features: [
            "💰 Average salaries by experience level and employment type",
            "🏢 Company size distribution and geographic locations",
            "🌍 Top employee residence locations",
            "🗺️ Geographic salary visualization by country",
            "📈 Correlation analysis between key variables"
        ],
        techStack: ["Python", "Tableau", "Pandas", "Matplotlib", "Seaborn"],
        links: {
            github: "https://github.com/Chanzwastaken/twb-ds-salaries-dashboard",
            demo: "https://public.tableau.com/views/DataScienceSalaries2022/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
        }
    },
    {
        id: "4",
        title: "EngliScribe",
        description: "EngliScribe is an AI-powered web application designed to revolutionize English language learning for Indonesian students.",
        longDescription: "EngliScribe is an AI-powered web application designed to revolutionize English language learning for Indonesian students. By leveraging cutting-edge Microsoft Azure AI services, we provide an intelligent, accessible, and inclusive platform that helps students improve their English grammar, writing skills, and overall language proficiency.",
        image: "/projects/engliscribe.png",
        category: "AI Apps",
        features: [
            "✨ AI-Powered Grammar Correction - Real-time spelling and grammar checking with accuracy metrics",
            "🔍 Intelligent OCR - Extract and analyze text from images using Azure Document Intelligence",
            "♿ Accessibility First - Immersive Reader feature designed for dyslexic learners",
            "📝 Smart Summarization - AI-driven extractive text summarization",
            "💬 Interactive Learning - AI chatbot for personalized language learning support",
            "🎥 Video Analysis - Advanced video indexing and insights (in development)",
            "📊 Analytics Dashboard - Track progress with Power BI integration"
        ],
        techStack: ["Python", "Flask", "OpenCV", "Transformers", "Azure AI Services"],
        links: {
            github: "https://github.com/Chanzwastaken/engliscribe",
            demo: "https://www.youtube.com/watch?v=rSCdGNUufy8"
        }
    },
    {
        id: "5",
        title: "London Bike Sharing Analysis Dashboard",
        description: "A comprehensive data analysis project exploring London's bike-sharing patterns from 2015-2017.",
        longDescription: "A comprehensive data analysis project exploring London's bike-sharing patterns from 2015-2017, featuring interactive Tableau visualizations that reveal insights into how weather conditions and temporal factors influence bike usage.",
        image: "/projects/londondashboard.png",
        category: "Dashboard",
        features: [
            "Bike ride trends over time with moving average analysis",
            "Temperature vs. wind speed correlation heatmaps",
            "Seasonal and weather-based usage patterns",
            "Hour-by-hour demand analysis"
        ],
        techStack: ["Python", "Tableau", "Pandas"],
        links: {
            github: "https://github.com/Chanzwastaken/twb-london-bikes",
            demo: "https://public.tableau.com/views/LondonBikesRidesVisualization/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
    },
    {
        id: "6",
        title: "Indonesia GDP Analysis Dashboard",
        description: "A comprehensive data engineering project analyzing Indonesia's provincial GDP distribution through web scraping, data processing, and interactive visualization.",
        longDescription: "This project analyzes the Gross Domestic Product (GDP) distribution across Indonesian provinces to identify economic patterns and regional disparities. The analysis provides insights into which provinces contribute most significantly to Indonesia's economy and reveals the economic concentration in specific regions.",
        image: "/projects/gdpindo.png",
        category: "Dashboard",
        features: [
            "Extract and process provincial GDP data from reliable sources",
            "Enrich data with geographic coordinates for spatial analysis",
            "Create interactive visualizations for data exploration",
            "Identify top-performing provinces and regional economic patterns",
            "Present findings through a professional Tableau dashboard"
        ],
        techStack: ["Python", "Tableau", "Pandas", "BeautifulSoup4"],
        links: {
            github: "https://github.com/Chanzwastaken/twb-indonesia-gdp",
            demo: "https://public.tableau.com/views/IndonesiaGDP_17046746539830/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
    },
    {
        id: "7",
        title: "Data Science Salary Analysis with KNN and K-means Clustering",
        description: "This project provides a comprehensive analysis of data science job salaries using two powerful machine learning techniques.",
        longDescription: "This project provides a comprehensive analysis of data science job salaries using two powerful machine learning techniques: K-Nearest Neighbors (KNN) for salary prediction and K-Means Clustering for identifying salary patterns. The analysis aims to uncover insights into the factors influencing salary levels and discover distinct salary segments within the data science job market.",
        image: "/projects/dsknn.png",
        category: "Data Science",
        features: [
            "Predict salary levels based on job-related features using supervised learning",
            "Identify natural salary clusters and patterns using unsupervised learning",
            "Understand the relationship between experience level, job title, location, and compensation",
            "Provide data-driven insights for job seekers and employers in the data science field"
        ],
        techStack: ["Python", "numpy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
        links: {
            github: "https://github.com/Chanzwastaken/ds-salaries-knn-kmeans"

        }
    },
    {
        id: "8",
        title: "Salary Analysis by Gender",
        description: "This project analyzes the gender pay gap using data science and linear regression techniques.",
        longDescription: "This project analyzes the gender pay gap using data science and linear regression techniques to explore salary disparities between male and female employees across different education levels, years of experience, and age groups. The analysis reveals insights into how various factors influence salary and quantifies the extent of gender-based pay differences in the dataset.",
        image: "/projects/salarygender.png",
        category: "Data Science",
        features: [
            "Analyze salary distribution patterns by gender",
            "Identify key factors influencing salary differences",
            "Build a predictive model using linear regression",
            "Quantify the gender pay gap across different demographics",
            "Provide data-driven insights into compensation equity"
        ],
        techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
        links: {
            github: "https://github.com/Chanzwastaken/salary-by-gender"

        }
    },
    {
        id: "9",
        title: "ECOVERSE",
        description: "A mobile game that turns real-world eco-actions like walking, recycling, and cleaning into fun, rewarding missions.",
        longDescription: "A mobile game that turns real-world eco-actions like walking, recycling, and cleaning into fun, rewarding missions. This project nominated as 1st place in ASEAN GREEN HACKATHON 2025.",
        image: "/projects/Ecoverse.png",
        category: "Others",
        features: [
            "Eco-Spots: Discover real-world recycling zones, trash bins, and litter hotspots.",
            "Eco-Actions: Walk to earn EXP, Sort trash correctly & Join community green events.",
            "Eco-Rewards: Earn XP and Green Points (GP), Grow plant pets, Unlock items & rise on the leaderboard.",
        ],
        techStack: ["Flutter", "Firebase", "PostgreSQL", "Redis", "AWS Storage"],
        links: {
            demo: "https://www.canva.com/design/DAGrbrv5wtE/bhMQLJFEiR0MB2CgQZrgBQ/view?utm_content=DAGrbrv5wtE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf61ed55d10"

        }
    },
    {
        id: "10",
        title: "Electric Vehicle Dashboard",
        description: "A comprehensive Power BI dashboard analyzing the electric vehicle market landscape in the United States, providing actionable insights into EV adoption trends, market distribution, and technological advancements.",
        longDescription: "This interactive Power BI dashboard delivers an in-depth analysis of the electric vehicle (EV) market across the United States, empowering stakeholders with data-driven insights for strategic decision-making in sustainable transportation.",
        image: "/projects/ev.png",
        category: "Dashboard",
        features: [
            "📈 Market Analysis: Comprehensive overview of 150,000+ electric vehicles including BEVs and PHEVs",
            "🗺️ Geographic Distribution: Interactive state-level mapping of EV adoption rates",
            "🏭 Manufacturer Insights: Market share analysis of leading EV brands and models",
            "⚡ Technology Trends: Electric range analytics showcasing technological advancements",
            "🎯 CAFV Eligibility: Clean Alternative Fuel Vehicle incentive analysis",
            "📅 Temporal Trends: Year-over-year growth patterns from 2010 onwards",
            "🔍 Dynamic Filtering: Interactive filters by city, electric utility, and vehicle type"
        ],
        techStack: ["PowerBI", "Excel"],
        links: {
            github: "https://github.com/Chanzwastaken/pbi-ev-dashboard"

        }
    },
    {
        id: "11",
        title: "SILIT",
        description: "Sign Language Translator",
        longDescription: "SILIT (Sign Language Translator) is an AI-powered application that translates American Sign Language (ASL) hand signs into text in real-time. Using MediaPipe for hand tracking and a custom-trained neural network, SILIT achieves 90-95% accuracy while running at 30 FPS for smooth, responsive translation.",
        image: "/projects/silit.png",
        category: "Data Science",
        features: [
            "29 gesture classes: A–Z letters, space, delete, nothing",
            "Real-time translation: live camera processing, instant recognition, automatic word building, confidence visualization",
            "Smart prediction: rolling buffer smoothing, duplicate prevention, stability tracking, confidence thresholding",
            "User interface: hand skeleton view, live predictions, confidence meter, FPS counter, word builder",
            "Additional features: text-to-speech, keyboard shortcuts, configurable parameters, statistics tracking"
        ],
        techStack: ["Python", "MediaPipe", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
        links: {
            github: "https://github.com/Chanzwastaken/silit"

        }
    },
    {
        id: "12",
        title: "Supervision of Payment System Dashboard",
        description: "Sign Language Translator",
        longDescription: "This dashboard displays monitoring data for BB UKA and KUPVA BB (money changers) in an easy-to-analyze interactive graph. This dashboard was a project I did while I was an intern at the Jakarta branch of Bank Indonesia.",
        image: "/projects/bi.png",
        category: "Dashboard",
        features: [
            "Filters based on period, region, and type of business entity",
            "Transaction trend charts with high interactivity",
            "Visualizations that can be exported (images or tabular data)",
            "Ability to export data directly from Power BI for internal reports",
        ],
        techStack: ["PowerBI", "Excel", "Power Automate", "SharePoint"],
        links: {
            demo: "https://drive.google.com/file/d/11ZSnGIhagjvwDzIpGbj9V4qnkK2SWMbi/view?usp=sharing"

        }
    },
];
