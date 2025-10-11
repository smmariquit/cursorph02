'use client';

import { useState, useEffect, useRef } from 'react';

const VoiceRecorder = ({ onTranscript, onRecordingChange, isRecording, setIsRecording }) => {
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState(null);
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);
  const silenceTimeoutRef = useRef(null);

  useEffect(() => {
    // Check if speech recognition is supported
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setIsSupported(true);
      initializeSpeechRecognition();
    } else {
      setError('Speech recognition is not supported in this browser');
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);
    };
  }, []);

  const initializeSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => {
      console.log('Speech recognition started');
      setError(null);
    };

    recognitionRef.current.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      // Reset silence timeout when speech is detected
      if (interimTranscript || finalTranscript) {
        if (silenceTimeoutRef.current) {
          clearTimeout(silenceTimeoutRef.current);
        }
        
        // Set 3-second timeout after user stops talking
        silenceTimeoutRef.current = setTimeout(() => {
          if (finalTranscript.trim()) {
            onTranscript(finalTranscript.trim());
            stopRecording();
          }
        }, 3000);
      }

      // Update UI with interim results
      if (interimTranscript) {
        console.log('Interim transcript:', interimTranscript);
      }
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setError(`Speech recognition error: ${event.error}`);
      stopRecording();
    };

    recognitionRef.current.onend = () => {
      console.log('Speech recognition ended');
      setIsRecording(false);
    };
  };

  const startRecording = () => {
    if (!recognitionRef.current) return;
    
    try {
      recognitionRef.current.start();
      setIsRecording(true);
      onRecordingChange(true);
      setError(null);
    } catch (err) {
      console.error('Error starting speech recognition:', err);
      setError('Failed to start recording');
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current && isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
      onRecordingChange(false);
    }
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (silenceTimeoutRef.current) clearTimeout(silenceTimeoutRef.current);
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  if (!isSupported) {
    return (
      <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">
          Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {error && (
        <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
          {error}
        </div>
      )}
      
      <button
        onClick={handleToggleRecording}
        disabled={!isSupported}
        className={`
          relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50
          ${isRecording 
            ? 'bg-red-500 hover:bg-red-600 focus:ring-red-300 animate-pulse' 
            : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300'
          }
          ${!isSupported ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        aria-label={isRecording ? 'Stop recording' : 'Start recording'}
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          {isRecording ? (
            <rect x="6" y="6" width="12" height="12" rx="2" />
          ) : (
            <path d="M12 1c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 12c-2.21 0-4-1.79-4-4V5h2v4c0 1.1.9 2 2 2s2-.9 2-2V5h2v4c0 2.21-1.79 4-4 4z" />
          )}
        </svg>
      </button>
      
      <div className="text-center">
        <p className="text-sm text-gray-600">
          {isRecording ? 'Listening... Speak now' : 'Click to start voice recording'}
        </p>
        {isRecording && (
          <p className="text-xs text-gray-500 mt-1">
            Will stop automatically after 3 seconds of silence
          </p>
        )}
      </div>
    </div>
  );
};

export default VoiceRecorder;
