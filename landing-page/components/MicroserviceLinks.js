import React from 'react'

const services = [
  { id: 1, name: 'Navigation Assistant', url: '/navigation', description: 'Find gates, facilities, and get directions' },
  { id: 2, name: 'Flight Info Reader', url: '/flight-info', description: 'Hear your flight details clearly' },
  { id: 3, name: 'Emergency Helper', url: '/emergency', description: 'Quick access to help and security' },
  { id: 4, name: 'Accessibility Services', url: '/accessibility', description: 'Wheelchair, vision, and hearing support' },
  { id: 5, name: 'Language Translator', url: '/translator', description: 'Translate text and speech' }
]

export default function MicroserviceLinks() {
  return (
    <section className="services">
      <h2>Quick Links</h2>
      <p className="note">Tap a big button to open a service (placeholders).</p>
      <div className="services-grid">
        {services.map(s => (
          <a key={s.id} href={s.url} className="service-btn" aria-label={`Open ${s.name}`}>
            <div className="service-title">{s.name}</div>
            <div className="service-desc">{s.description}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
