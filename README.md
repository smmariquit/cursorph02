# Cebu Pacific Senior Phone — Landing Page (Next.js)

This is a small Next.js JavaScript scaffold for a mobile-friendly landing page aimed at seniors (very large fonts, simple UI).

Features
- Big, readable fonts and large buttons
- Voice recording using RecordRTC (mic permission required)
- Camera module (video stream) for future AR integration
- Five placeholder microservice links

Quick start

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
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
