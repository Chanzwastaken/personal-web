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
        techStack: ["Google Gemini 2.0 Flash API","TypeScript", "Next.js", "TailwindCSS", "pdf-parse"],
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
    }
];
