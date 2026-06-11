// landing-page/app/accessibility/page.js

import Head from 'next/head'
import Link from 'next/link'

export default function AccessibilityServices() {
  return (
    <div className="container">
      <Head>
        <title>Accessibility Services - Cebu Pacific</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1 className="headline">Accessibility Services</h1>
        <p className="subhead">Special assistance and accessibility coordination</p>

        <section className="service-content">
          <div className="feature-card">
            <h2>Wheelchair Assistance</h2>
            <p className="big-text">Request wheelchair help and accessible routes</p>
            <button className="btn btn-start">Get Wheelchair Help</button>
          </div>

          <div className="feature-card">
            <h2>Vision Assistance</h2>
            <p className="big-text">Services for blind and low-vision travelers</p>
            <button className="btn btn-start">Vision Support</button>
          </div>

          <div className="feature-card">
            <h2>Hearing Assistance</h2>
            <p className="big-text">Sign language and hearing aid support</p>
            <button className="btn btn-start">Hearing Support</button>
          </div>

          <div className="feature-card">
            <h2>Cognitive Support</h2>
            <p className="big-text">Simple instructions and memory aids</p>
            <button className="btn btn-start">Cognitive Help</button>
          </div>

          <div className="accessibility-note">
            <h3>Available Services</h3>
            <ul className="big-list">
              <li>Staff assistance coordination</li>
              <li>Accessible facility information</li>
              <li>Equipment requests (wheelchairs, etc.)</li>
              <li>Special boarding arrangements</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}