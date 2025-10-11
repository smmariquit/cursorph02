import React from 'react'

const services = [
  { id: 1, name: 'Service 1', url: '/api/service1' },
  { id: 2, name: 'Service 2', url: '/api/service2' },
  { id: 3, name: 'Service 3', url: '/api/service3' },
  { id: 4, name: 'Service 4', url: '/api/service4' },
  { id: 5, name: 'Service 5', url: '/api/service5' }
]

export default function MicroserviceLinks() {
  return (
    <section className="services">
      <h2>Quick Links</h2>
      <p className="note">Tap a big button to open a service (placeholders).</p>
      <div className="services-grid">
        {services.map(s => (
          <a key={s.id} href={s.url} className="service-btn" aria-label={`Open ${s.name}`}>
            {s.name}
          </a>
        ))}
      </div>
    </section>
  )
}
