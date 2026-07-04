# Cebu Pacific Senior Phone: Landing Page (Next.js App Router)

This is a complete Next.js application using App Router for a mobile-friendly landing page aimed at seniors (very large fonts, simple UI).

## Features
- **Big, readable fonts and large buttons** - Perfect for seniors
- **Voice recording using native MediaRecorder API** (mic permission required)
- **Camera module** (video stream) for future AR integration
- **Five accessibility-focused microservices:**
 1. **Navigation Assistant** - Find gates, facilities, get directions
 2. **Flight Info Reader** - Hear flight details clearly
 3. **Emergency Helper** - Quick access to help and security
 4. **Accessibility Services** - Wheelchair, vision, hearing support 
 5. **Language Translator** - Translate text and speech

## Project Structure
```
cursorph02/
├── landing-page/ # Main Next.js App Router application
│ ├── app/ # App Router pages
│ │ ├── page.js # Homepage/landing page
│ │ ├── layout.js # Root layout
│ │ ├── navigation/ # Navigation Assistant service
│ │ ├── flight-info/ # Flight Info Reader service
│ │ ├── emergency/ # Emergency Helper service
│ │ ├── accessibility/ # Accessibility Services
│ │ └── translator/ # Language Translator service
│ ├── components/ # Reusable React components
│ └── styles/ # Global CSS styles
└── package.json # Root package with dev scripts
```

## Quick Start

1. Install dependencies (from root directory)
```powershell
npm install
```

2. Run dev server
```powershell
npm run dev
```

Or run directly from landing-page:
```powershell
cd landing-page
npx next dev -p 3000
```

Open http://localhost:3000 on a mobile device or desktop with responsive mode.

Notes & privacy
- The voice recorder uses the browser's microphone. Recordings are kept locally in the browser (not uploaded) in this scaffold.
- The camera module opens the device camera stream in the page.
- For a production release add proper server endpoints, secure upload, and user consent flows.

Next steps you might want me to do:
- Wire the voice recordings to a speech-to-text microservice
- Replace placeholders with real microservice URLs
- Add analytics and accessibility testing

## 📊 Current State of the Code
- **Tech Stack:** React, Next.js, Node.js/NPM
- **Repository Size:** 96 tracked files
- **Latest Update:** `f27d4dc chore: add stale issue and PR validators`

---
*☕ If you found this project useful, you can support my work at [kape.stimmie.dev](https://kape.stimmie.dev)!*