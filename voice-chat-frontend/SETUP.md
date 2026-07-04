# Voice Chat Frontend Setup

## Getting Started

1. Install dependencies:
 ```bash
   pnpm install
   ```

2. Start the development server:
 ```bash
   pnpm dev
   ```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

## Features

- ✅ Voice recording with 3-second timeout
- ✅ Speech-to-text conversion
- ✅ Text-to-speech for AI responses
- ✅ Real-time chat interface
- ✅ Responsive design
- ✅ Dark mode support

## Browser Compatibility

- Chrome (recommended)
- Edge
- Safari
- Firefox (limited speech recognition support)

## Usage

1. Click the microphone button to start recording
2. Speak your message
3. The app will automatically stop recording after 3 seconds of silence
4. AI will respond with both text and voice

## Configuration

The frontend connects to the backend API at `http://localhost:3000/api/chat`. Make sure the backend is running before using the frontend.
