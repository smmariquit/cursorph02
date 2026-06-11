// landing-page/app/emergency/page.js

import Head from 'next/head'
import Link from 'next/link'

export default function EmergencyHelper() {
  return (
    <div className="container">
      <Head>
        <title>Emergency Helper - Cebu Pacific</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1 className="headline">Emergency Helper</h1>
        <p className="subhead">Quick access to help and emergency services</p>

        <section className="service-content">
          <div className="emergency-card">
            <h2>Call for Help</h2>
            <p className="big-text">One tap to connect with airport assistance</p>
            <button className="btn btn-emergency">CALL HELP NOW</button>
          </div>

          <div className="feature-card">
            <h2>Medical Assistance</h2>
            <p className="big-text">Find medical services and first aid</p>
            <button className="btn btn-start">Medical Help</button>
          </div>

          <div className="feature-card">
            <h2>Lost & Found</h2>
            <p className="big-text">Report lost items or find lost belongings</p>
            <button className="btn btn-start">Lost Items</button>
          </div>

          <div className="feature-card">
            <h2>Security Alert</h2>
            <p className="big-text">Report security concerns or suspicious activity</p>
            <button className="btn btn-start">Security Help</button>
          </div>

          <div className="accessibility-note">
            <h3>Emergency Features</h3>
            <ul className="big-list">
              <li>One-touch emergency calling</li>
              <li>Location sharing with responders</li>
              <li>Medical alert information</li>
              <li>Clear visual emergency buttons</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}