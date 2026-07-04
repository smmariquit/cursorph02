// landing-page/app/terms/page.js

export const metadata = {
  title: 'Terms of Service | Cebu Pacific Phone Rental',
}

export default function TermsPage() {
  return (
    <div className="container">
      <main>
        <p><a href="/">← Back</a></p>
        <h1 className="headline" style={{ fontSize: 32 }}>Terms of Service</h1>
        <p className="subhead">Last updated: July 4, 2026</p>
        <p>
          This is a prototype landing page. It is not an official Cebu Pacific product. Use is at your own risk.
        </p>
        <p>
          Production terms, when available, will be published at{' '}
          <a href="https://uplbtools.me/privacy">uplbtools.me/privacy</a>.
        </p>
      </main>
    </div>
  )
}
