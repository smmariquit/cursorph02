import Head from 'next/head'
import Link from 'next/link'

export default function NavigationAssistant() {
  return (
    <div className="container">
      <Head>
        <title>Navigation Assistant - Cebu Pacific</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1 className="headline">Navigation Assistant</h1>
        <p className="subhead">Find your way around the airport with voice and visual guidance</p>

        <section className="service-content">
          <div className="feature-card">
            <h2>Gate Finder</h2>
            <p className="big-text">Tell me your gate number and I'll guide you there step by step</p>
            <button className="btn btn-start">Find My Gate</button>
          </div>

          <div className="feature-card">
            <h2>Facility Locator</h2>
            <p className="big-text">Find restrooms, restaurants, shops, and other services</p>
            <button className="btn btn-start">Find Facilities</button>
          </div>

          <div className="feature-card">
            <h2>Walking Directions</h2>
            <p className="big-text">Audio turn-by-turn directions to your destination</p>
            <button className="btn btn-start">Get Directions</button>
          </div>

          <div className="accessibility-note">
            <h3>Accessibility Features</h3>
            <ul className="big-list">
              <li>Voice-guided navigation</li>
              <li>High contrast visual indicators</li>
              <li>Step-by-step audio instructions</li>
              <li>Wheelchair-accessible route options</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}