let chatHistory = {
    anshuman: "",
    abhimanyu: "",
    kshitij: ""
  };
  
  let currentPersona = "anshuman";
  
  function resetChat() {
    const chatBox = document.getElementById("chat-box");
    const newPersona = document.getElementById("persona").value;
  
    chatHistory[currentPersona] = chatBox.innerHTML;
    currentPersona = newPersona;
    chatBox.innerHTML = chatHistory[currentPersona] || "";
  }
  
  async function sendMessage() {
    const messageInput = document.getElementById("message");
    const persona = currentPersona;
    const chatBox = document.getElementById("chat-box");
  
    const message = messageInput.value;
    if (!message) return;
  
    chatBox.innerHTML += `<div class="user"><div>${message}</div></div>`;
    chatBox.innerHTML += `<div class="bot" id="typing"><div>Thinking...</div></div>`;
    messageInput.value = "";
  
    try {
      const response = await fetch("https://chatbot-backend-bhsc.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: message,
          persona: persona
        })
      });
  
      const text = await response.text();
  
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid JSON from backend");
      }
  
      document.getElementById("typing")?.remove();
  
      if (data.reply) {
        const formattedReply = data.reply.replace(/\n/g, "<br>");
        chatBox.innerHTML += `<div class="bot"><div>${formattedReply}</div></div>`;
      } else if (data.error) {
        const formattedError = data.error.replace(/\n/g, "<br>");
        chatBox.innerHTML += `<div class="bot"><div>${formattedError}</div></div>`;
      } else {
        chatBox.innerHTML += `<div class="bot"><div>Unexpected response</div></div>`;
      }
  
    } catch (err) {
      document.getElementById("typing")?.remove();
      chatBox.innerHTML += `<div class="bot"><div>${err.message}</div></div>`;
    }
  
    chatBox.scrollTop = chatBox.scrollHeight;
    chatHistory[currentPersona] = chatBox.innerHTML;
  }
  
  document.getElementById("message").addEventListener("keypress", function(e) {
    if (e.key === "Enter" && document.getElementById("message").value.trim() !== "") {
      sendMessage();
    }
  });