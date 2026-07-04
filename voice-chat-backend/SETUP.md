# Voice Chat Backend Setup

## Environment Variables

Create a `.env.local` file in the `voice-chat-backend` directory with the following variables:

```bash
# Gemini AI API Key
# Get your API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Backend API Port (optional, defaults to 3000)
PORT=3000
```

## Getting Started

1. Install dependencies:
 ```bash
 pnpm install
 ```

2. Set up your environment variables (see above)

3. Start the development server:
 ```bash
 pnpm dev
 ```

4. The API will be available at `http://localhost:3000`

## API Endpoints

- `POST /api/chat` - Send a message to Gemini AI
 - Body: `{ "message": "your message here" }`
 - Response: `{ "response": "AI response", "timestamp": "ISO string" }`

## Features

- ✅ Gemini AI integration
- ✅ CORS enabled for frontend communication
- ✅ Error handling
- ✅ TypeScript support (optional)
