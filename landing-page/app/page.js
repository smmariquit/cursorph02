// landing-page/app/page.js

import MicroserviceLinks from '../components/MicroserviceLinks'
import CameraModule from '../components/CameraModule'
import VoiceRecorder from '../components/VoiceRecorder'

export const metadata = {
  title: 'Cebu Pacific — Phone Rental for Seniors',
  description: 'A simple phone with everything you need for your flight. Big text, easy buttons.',
}

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1 className="headline">Cebu Pacific Phone Rental — 500 PHP</h1>
        <p className="subhead">A simple phone with everything you need for your flight. Big text, easy buttons.</p>

        <section className="value">
          <h2>What you get</h2>
          <ul>
            <li>Phone with Cebu Pacific info and services for the whole flight</li>
            <li>Easy voice controls — just press and speak</li>
            <li>Camera-ready for future AR features</li>
            <li>Friendly interface for seniors</li>
          </ul>
        </section>

        <div className="big-actions">
          <VoiceRecorder />
          <CameraModule />
        </div>

        <MicroserviceLinks />

        <footer className="footer">Rent for 500 PHP — Cebu Pacific in your pocket.</footer>
      </main>
    </div>
  )
}
