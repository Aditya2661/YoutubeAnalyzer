## **CommentAnaly: YouTube Comment Sentiment Analyzer** 

**CommentAnaly** is a full-stack web application designed to analyze the sentiment of YouTube video comments, helping content creators, marketers, and researchers gain insights into audience reactions. The platform uses **VADER (Valence Aware Dictionary and sEntiment Reasoner)**, a powerful sentiment analysis tool, to classify YouTube comments into **Positive, Negative, or Neutral** categories based on polarity scores. It also provides a **visual representation of sentiment distribution** through a dynamic pie chart for better insights.  

The application allows users to enter a **YouTube video URL**, fetches its comments using the **YouTube Data API**, processes the sentiment using **VADER**, and displays the analysis in a clear and structured manner. Additionally, users can **export the sentiment analysis report in PDF format** for future reference, making it a valuable tool for content optimization and audience understanding.  

---

**How It Works**
- **YouTube Data API Integration:** The application utilizes the **YouTube Data API** to fetch comments from any YouTube video based on the provided URL.  
- **Sentiment Analysis with VADER:** The fetched comments are processed using **VADER (a pre-trained NLP model)**, which classifies each comment as **Positive**, **Negative**, or **Neutral** based on its polarity score.  
- **Dynamic Pie Chart Visualization:** The results are presented in a **pie chart**, visually showing the sentiment distribution for easy analysis.  
- **PDF Report Export:** Users can download the complete sentiment analysis report in **PDF format**, enabling them to keep a record of their analysis.  
- **Optimized CORS Handling:** Ensures smooth and secure communication between the frontend and backend during data processing.  

---
**Tech Stack**
- **React.js:** Used for building the user-friendly frontend interface with dynamic chart visualizations.  
- **Flask (Python):** Powers the backend, handles sentiment analysis, API requests, and PDF report generation.  
- **VADER (NLTK):** A pre-trained sentiment analysis tool for classifying YouTube comments based on polarity.  
- **YouTube Data API:** Fetches comments from YouTube videos in real-time based on the provided URL.  

---
**Why CommentAnaly?**
- **Audience Insights:** Helps content creators understand how their audience feels about their content.  
- **Data-Driven Decisions:** Provides clear sentiment breakdown to improve content strategies.  
- **Report Generation:** Allows users to download sentiment analysis reports for future reference.  
- **Easy Integration:** Simple interface to fetch and analyze YouTube comments instantly.  
- **Real-Time Data:** Ensures up-to-date sentiment analysis with real-time comment fetching.  

**CommentAnaly** simplifies the process of gathering insights from YouTube comments, empowering creators to optimize their content strategy based on audience sentiment. Whether you're a **YouTuber, marketer, or researcher**, **CommentAnaly** helps you turn raw comments into actionable insights.
