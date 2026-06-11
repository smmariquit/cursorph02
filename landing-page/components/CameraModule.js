// landing-page/components/CameraModule.js

'use client'

import React, { useRef, useState } from 'react'

export default function CameraModule() {
  const videoRef = useRef(null)
  const [isCameraOn, setIsCameraOn] = useState(false)

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) videoRef.current.srcObject = stream
      setIsCameraOn(true)
    } catch (e) {
      alert('Camera access denied or unavailable')
    }
  }

  function stopCamera() {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach(t => t.stop())
      videoRef.current.srcObject = null
    }
    setIsCameraOn(false)
  }

  return (
    <div className="camera-module">
      <h3 className="big">AR (Camera)</h3>
      <p className="note">This opens the camera for future AR features.</p>
      <div className="controls">
        {!isCameraOn ? (
          <button className="btn btn-start" onClick={startCamera}>Open Camera</button>
        ) : (
          <button className="btn btn-stop" onClick={stopCamera}>Close Camera</button>
        )}
      </div>

      <div className="video-wrap">
        <video ref={videoRef} autoPlay playsInline style={{ width: '100%', borderRadius: 8 }} />
      </div>
    </div>
  )
}
