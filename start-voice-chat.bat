@echo off
echo Starting Voice Chat AI Application...
echo.

echo Starting Backend Server...
start "Voice Chat Backend" cmd /k "cd voice-chat-backend && pnpm dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "Voice Chat Frontend" cmd /k "cd voice-chat-frontend && pnpm dev"

echo.
echo Both servers are starting...
echo Backend: http://localhost:3000
echo Frontend: http://localhost:3001
echo.
echo Press any key to exit...
pause >nul
