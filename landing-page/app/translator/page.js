import Head from 'next/head'
import Link from 'next/link'

export default function LanguageTranslator() {
  return (
    <div className="container">
      <Head>
        <title>Language Translator - Cebu Pacific</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Link href="/" className="back-link">← Back to Home</Link>
        
        <h1 className="headline">Language Translator</h1>
        <p className="subhead">Translate signs, announcements, and conversations</p>

        <section className="service-content">
          <div className="feature-card">
            <h2>Voice Translation</h2>
            <p className="big-text">Speak in your language, hear it in English or Filipino</p>
            <button className="btn btn-start">Start Voice Translation</button>
          </div>

          <div className="feature-card">
            <h2>Text Translation</h2>
            <p className="big-text">Point camera at signs to translate them</p>
            <button className="btn btn-start">Translate Text</button>
          </div>

          <div className="feature-card">
            <h2>Common Phrases</h2>
            <p className="big-text">Essential airport phrases in multiple languages</p>
            <button className="btn btn-start">Common Phrases</button>
          </div>

          <div className="feature-card">
            <h2>Emergency Translation</h2>
            <p className="big-text">Quick translation for urgent situations</p>
            <button className="btn btn-emergency">Emergency Help</button>
          </div>

          <div className="accessibility-note">
            <h3>Supported Languages</h3>
            <ul className="big-list">
              <li>English ↔ Filipino/Tagalog</li>
              <li>English ↔ Cebuano</li>
              <li>Basic Chinese and Japanese</li>
              <li>Large text display options</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}