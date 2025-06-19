# AutomationPro: Local AI Auto-Poster System

This system lets you auto-post videos to TikTok (or other platforms) using `n8n`, fully offline and 100% free.

## 🧠 How It Works
- Uses Docker to run n8n locally
- Connects to your Google Drive to pull video content
- Posts to TikTok via UploadPost API or sid_tt session
- Completely customizable and extendable

## 📦 What's Inside
- `/workflow.json` → ready-to-import n8n workflow
- `Local_Install_Guide.pdf` → full setup instructions
- `Google_Drive_Credential_Guide.pdf` → how to connect Drive
- `ChatGPT_Prompt.txt` → just copy/paste this into ChatGPT for help

## 🚀 Getting Started
1. Install Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)
2. Run this in terminal:

```bash
docker run -it --rm -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n
```

3. Open: [http://localhost:5678](http://localhost:5678)
4. Import the workflow
5. Connect your Google Drive
6. Add your UploadPost API key or sid_tt token
7. You're live!