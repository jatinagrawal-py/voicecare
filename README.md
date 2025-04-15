# 🗣️ VoiceCare - AI-Powered Voice Assistant for Elderly Care



VoiceCare is an AI-driven voice assistant designed specifically for elderly individuals and dementia patients. It enables natural conversation, memory recall, medication reminders, and emergency alerts to family members — all through voice interaction.

🚫 **Note**: The web app is currently **not functional** due to the expiry of AWS hosting for the Flask-based AI backend and deactivation of Azure STT/TTS services. The frontend is still accessible for UI preview.

🔗 **Frontend Demo (fully responsive)**: [https://voicecare-ten.vercel.app](https://voicecare-ten.vercel.app)  
🌐 **Backend (Auth Service)**: Hosted on Render

---

## 💡 Features

- 🎙️ **Natural Voice Interaction** using Azure Speech-to-Text (STT) and Text-to-Speech (TTS)
- 🧠 **Memory Recall** powered by Pinecone vector DB and LLMs (OpenAI + Groq)
- 💊 **Automated Reminders** for medications and routines via Twilio
- 🆘 **Emergency Alert System** to notify family in urgent situations
- 🔐 **Secure Auth** with bcrypt, JWT, token blacklisting & token expiration
- 🔁 **Cron Jobs** for reminder scheduling with confirmation logic
- 🧩 **Microservices Architecture** for scalability and modularity

---

## 🛠️ Tech Stack

| Area       | Technologies Used                                                                 |
|------------|------------------------------------------------------------------------------------|
| **Frontend** | React (Vite), Tailwind CSS, deployed on Vercel                                     |
| **Backend**  | Node.js + Express (auth), Flask + FastAPI (AI + LLM orchestration), Render & AWS  |
| **AI & Memory** | OpenAI API, Groq API, Pinecone (vector DB for persistent memory embeddings)      |
| **Voice**    | Azure Cognitive Services (STT/TTS)                                                 |
| **Reminders**| Twilio, Node-Cron                                                                 |
| **Database** | MongoDB Atlas                                                                     |
| **Auth**     | bcrypt, JWT (with blacklist & token expiry)                                       |
| **Deployment** | Vercel (frontend), Render (auth), AWS (Flask/AI - currently expired)             |

---

## 🧪 Testing & Deployment

- Environment variables are used for secure API key management
- Modular testing pipelines for both frontend and backend services
- Microservices communicate via secure API routes and shared tokens
- Auto-deployments through Vercel and Render with GitHub Actions

---

## ⚠️ Current Limitations

> ❌ **The backend services for AI conversation and voice (Flask + Azure STT/TTS) are currently inactive** due to the expiry of AWS hosting and Azure credits.  
> ✅ The frontend remains live for UI/UX showcase purposes.

---

## 🧭 Future Improvements

- Reactivate backend with alternative free/low-cost hosting for Flask + FastAPI
- Migrate from Azure STT/TTS to open-source Whisper + Coqui TTS
- Add multi-language support for broader accessibility
- Integrate with smart devices for a more complete assistive ecosystem

---

## 📷 Preview

![Screenshot](https://via.placeholder.com/1000x600?text=VoiceCare+App+UI+Preview)

---

## 📬 Contact

Built with ❤️ by Jatin Agrawal  
For queries: jatinagrawal0987654321@gmail.com  

---

