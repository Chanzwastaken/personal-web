import { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Project 1",
        description: "A machine learning model to predict customer churn for a telecommunications company.",
        longDescription: "Developed a predictive model using Random Forest and XGBoost to identify customers at risk of churning. The project involved extensive data cleaning, feature engineering, and hyperparameter tuning. The final model achieved an accuracy of 92% and helped the marketing team target retention campaigns effectively.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        category: "Data Science",
        features: [
            "Data Preprocessing & Cleaning",
            "Exploratory Data Analysis (EDA)",
            "Model Training & Evaluation",
            "Feature Importance Analysis"
        ],
        techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        links: {
            github: "https://github.com",
            demo: "https://demo.com"
        }
    },
    {
        id: "2",
        title: "Project 2",
        description: "Analyzing social media sentiment to predict stock market trends.",
        longDescription: "Built a NLP pipeline to scrape and analyze tweets and news headlines related to major tech stocks. Used BERT and LSTM models to classify sentiment and correlate it with stock price movements. Created a real-time dashboard to visualize sentiment trends.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
        category: "NLP",
        features: [
            "Real-time Data Scraping",
            "Sentiment Classification (BERT)",
            "Time Series Analysis",
            "Interactive Dashboard"
        ],
        techStack: ["Python", "PyTorch", "Hugging Face", "Streamlit"],
        links: {
            github: "https://github.com"
        }
    },
    {
        id: "3",
        title: "Project 3",
        description: "Deep learning model to detect pneumonia from chest X-ray images.",
        longDescription: "Implemented a Convolutional Neural Network (CNN) to classify chest X-rays as normal or pneumonia-infected. Utilized transfer learning with ResNet50 to improve performance on a limited dataset. The model achieved a sensitivity of 95%.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        category: "Computer Vision",
        features: [
            "Image Augmentation",
            "Transfer Learning (ResNet50)",
            "Model Interpretability (Grad-CAM)",
            "Flask API Deployment"
        ],
        techStack: ["Python", "TensorFlow", "Keras", "Flask"],
        links: {
            github: "https://github.com",
            demo: "https://demo.com"
        }
    },
    {
        id: "4",
        title: "Project 4",
        description: "Collaborative filtering system to recommend products to users.",
        longDescription: "Designed and implemented a recommendation system for an online retail platform. Used matrix factorization and nearest neighbor algorithms to provide personalized product suggestions based on user purchase history and ratings.",
        image: "https://images.unsplash.com/photo-1472851294608-415522f9631f?q=80&w=2070&auto=format&fit=crop",
        category: "Data Science",
        features: [
            "Collaborative Filtering",
            "Matrix Factorization",
            "A/B Testing Framework",
            "Scalable Architecture"
        ],
        techStack: ["Python", "Spark", "SQL", "AWS"],
        links: {
            github: "https://github.com"
        }
    }
];
