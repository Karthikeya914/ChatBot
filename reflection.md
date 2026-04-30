# Reflection

This project helped me understand the practical importance of prompt engineering beyond theory. Initially, I assumed that simply describing a persona briefly would be enough, but the outputs were generic and inconsistent. This clearly demonstrated the GIGO (Garbage In, Garbage Out) principle — weak prompts led to weak responses.

As I improved the system prompts by adding detailed persona descriptions, few-shot examples, and constraints, the outputs became significantly more aligned with each personality. For example, Anshuman’s responses became more practical and engineering-focused, Abhimanyu’s responses became reflective and analogy-driven, and Kshitij’s responses became more technical and structured.

One key learning was the importance of few-shot examples. They acted as strong anchors for the model’s behavior and helped enforce tone and structure. Another important realization was that separating system-level instructions from user input improved consistency.

From a system perspective, building the full stack (frontend + backend + deployment) helped me understand how LLMs integrate into real applications. Handling API errors, managing state in the frontend, and deploying the app gave me practical exposure beyond just prompt writing.

If I had more time, I would improve the UI further, add persistent chat history, and experiment with different prompt structures to make persona behavior even more distinct.

Overall, this project reinforced that prompt engineering is not about writing longer prompts, but about writing more precise and intentional ones.