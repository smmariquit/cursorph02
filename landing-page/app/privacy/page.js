// landing-page/app/privacy/page.js

export const metadata = {
  title: 'Privacy Policy | Cebu Pacific Phone Rental',
}

export default function PrivacyPage() {
  return (
    <div className="container">
      <main>
        <p><a href="/">← Back</a></p>
        <h1 className="headline" style={{ fontSize: 32 }}>Privacy Policy</h1>
        <p className="subhead">Last updated: July 4, 2026</p>
        <p>
          This demo landing page describes a senior-friendly phone rental concept for Cebu Pacific passengers.
          When a production service launches, its privacy policy will be published at{' '}
          <a href="https://uplbtools.me/privacy">uplbtools.me/privacy</a>.
        </p>
        <p>
          Voice and camera modules on this page process input locally in the browser for prototyping — no data is sold.
        </p>
      </main>
    </div>
  )
}
