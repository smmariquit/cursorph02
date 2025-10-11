import Head from 'next/head'
import Link from 'next/link'

export default function FlightInfoReader() {
  return (
    <div className="container">
      <Head>
        <title>Flight Info Reader - Cebu Pacific</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1 className="headline">Flight Info Reader</h1>
        <p className="subhead">Hear your flight details read aloud in clear, simple language</p>

        <section className="service-content">
          <div className="feature-card">
            <h2>My Flight Status</h2>
            <p className="big-text">Get real-time updates on your Cebu Pacific flight</p>
            <button className="btn btn-start">Check My Flight</button>
          </div>

          <div className="feature-card">
            <h2>Boarding Information</h2>
            <p className="big-text">When and where to board, read clearly</p>
            <button className="btn btn-start">Boarding Details</button>
          </div>

          <div className="feature-card">
            <h2>Gate Changes</h2>
            <p className="big-text">Instant notifications about gate or time changes</p>
            <button className="btn btn-start">Set Alerts</button>
          </div>

          <div className="accessibility-note">
            <h3>Accessibility Features</h3>
            <ul className="big-list">
              <li>Text-to-speech for all information</li>
              <li>Large, clear text displays</li>
              <li>Simple language explanations</li>
              <li>Repeat information on request</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}