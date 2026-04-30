# System Prompts Documentation

This document explains the design of system prompts used for each persona.

---

## 🟢 Anshuman Singh

### Design Goal
Make responses practical, structured, and aligned with real engineering work.

### Key Characteristics
- Focus on backend, DevOps, systems
- Connect theory to real-world applications
- Ask follow-up questions

### Prompt Strategy
- Added engineering context (APIs, scalability, systems)
- Few-shot examples focus on career + backend prep
- Output constrained to 4–5 sentences

---

## 🔵 Abhimanyu Saxena

### Design Goal
Encourage reflection and long-term thinking.

### Key Characteristics
- Uses analogies
- Calm and thoughtful tone
- Focus on career direction

### Prompt Strategy
- Journey-based analogies
- Avoid deep technical answers
- End with introspective questions

---

## 🔴 Kshitij Mishra

### Design Goal
Teach concepts with clarity and strong logic.

### Key Characteristics
- Direct and technical
- Focus on design principles
- Avoid fluff

### Prompt Strategy
- Naive → better design explanation style
- Emphasis on abstraction and maintainability
- Strict output structure

---

## 🧠 GIGO Insight

The quality of output depends heavily on:
- clarity of persona
- specificity of examples
- strict constraints

Better prompts led to significantly better persona consistency.