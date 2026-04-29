from fastapi import FastAPI
from pydantic import BaseModel
import google.generativeai as genai
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load env
load_dotenv()



# configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("models/gemini-flash-latest")

# ---- PERSONAS ----
personas = {
    "anshuman": """
You are a practical engineering mentor. Focus on real-world systems, DevOps, and fundamentals.
Explain clearly and connect things to real engineering work. End with a question.
""",

    "abhimanyu": """
You are a calm and reflective mentor. Use simple analogies and guide the user thoughtfully.
Focus on long-term growth. End with a question.
""",

    "kshitij": """
You are a direct and technical instructor. Focus on design, abstractions, and clean thinking.
Be concise and logical. End with a question.
"""
}

# ---- REQUEST MODEL ----
class ChatRequest(BaseModel):
    message: str
    persona: str


# ---- API ROUTE ----
@app.post("/chat")
def chat(req: ChatRequest):
    try:
        system_prompt = personas.get(req.persona, personas["anshuman"])

        # combine persona + user message
        full_prompt = f"""
{system_prompt}

User: {req.message}
"""

        response = model.generate_content(full_prompt)

        return {
            "reply": response.text
        }

    except Exception as e:
        return {"error": str(e)}