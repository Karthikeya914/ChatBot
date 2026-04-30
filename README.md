# Persona-Based AI Chatbot

A full-stack AI chatbot that simulates conversations with three distinct tech mentors:

- Anshuman Singh — Practical, engineering-focused mentor  
- Abhimanyu Saxena — Reflective, career-oriented thinker  
- Kshitij Mishra — Direct, technical design instructor  

This project demonstrates prompt engineering, frontend-backend integration, and deployment of an AI-powered application.

---

## Live Project

Frontend: https://preeminent-bavarois-2c4f1a.netlify.app/  
Backend: https://chatbot-backend-bhsc.onrender.com  

---

## Features

- Persona switching (resets conversation)
- Strong system prompts with few-shot examples
- Clean chat UI with message bubbles
- Enter key to send messages
- Typing indicator while AI responds
- Graceful API error handling
- Fully deployed (frontend + backend)

---

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Python (FastAPI)

AI Model:
- Google Gemini API

Deployment:
- Frontend: Netlify  
- Backend: Render  

---

## Setup Instructions

### 1. Clone the repository

git clone https://github.com/Karthikeya914/ChatBot.git  
cd ChatBot

---

### 2. Backend Setup

pip install -r requirements.txt  

Create a .env file:

GEMINI_API_KEY=your_api_key_here  

Run backend:

uvicorn main:app --reload  

---

### 3. Frontend Setup

Open index.html  

Make sure backend URL in index.js is:

https://chatbot-backend-bhsc.onrender.com/chat  

---

## Project Structure

```bash
ChatBot/
├── main.py
├── index.html
├── style.css
├── index.js
├── requirements.txt
├── prompts.md
├── reflection.md
├── .env.example
├── README.md
---

## Prompt Engineering

Each persona uses a structured system prompt including:
- Detailed persona description  
- Few-shot examples  
- Internal reasoning instruction  
- Output format rules  
- Constraints  

This ensures consistent and realistic behavior.

---

## Environment Variables

GEMINI_API_KEY=your_api_key_here  

---


## Key Learnings

- Prompt quality directly impacts model output (GIGO principle)  
- Few-shot examples improve consistency  
- Clear system vs user separation improves responses  
- Full-stack integration is required for real AI apps  

---

## Future Improvements

- Persistent chat history  
- Better UI/UX  
- Multi-turn conversations  
- Authentication  

---

## Author

Karthikeya
