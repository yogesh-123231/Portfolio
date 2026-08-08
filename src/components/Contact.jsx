import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('https://formsubmit.co/ajax/yogeshdumane987@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === 'true') {
          setSent(true)
          alert('Message sent successfully!')
          setForm({ name: '', email: '', message: '' })
        } else {
          alert('Something went wrong, please try again.')
        }
      })
      .catch(() => {
        alert('Something went wrong, please try again.')
      })
  }

  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <p className="eyebrow section-head">05 / Contact</p>

        <div className="contact__grid">
          <div className="contact__left">
            <h2 className="contact__heading">
              Let's build
              <br />
              <span className="accent">something</span>
              <br />
              useful.
            </h2>

            <p className="contact__desc">
              I'm open to software engineering opportunities, internships,
              freelance projects, and interesting technical collaborations.
            </p>

            <ul className="contact__list mono">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="1.5" y="4" width="21" height="16" rx="2.4" />
                  <path d="m2.5 5.5 9.5 8 9.5-8" />
                </svg>
                <a href="mailto:yogeshdumane987@gmail.com">yogeshdumane987@gmail.com</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.06 3.29 9.35 7.86 10.87.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.08.78 2.17 0 1.57-.02 2.83-.02 3.22 0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12c0-6.29-5.23-11.5-11.5-11.5Z" />
                </svg>
                <a href="https://github.com/yogesh-123231" target="_blank" rel="noreferrer">
                  github.com/yogesh-123231
                </a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1 4.98 2.12 4.98 3.5ZM.24 8.25h4.48V23H.24V8.25ZM8.31 8.25h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.48v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23H8.31V8.25Z" />
                </svg>
                <a href="https://www.linkedin.com/in/yogeshdumane" target="_blank" rel="noreferrer">
                  linkedin.com/in/yogeshdumane
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="field">
              <span className="field__label mono">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="field">
              <span className="field__label mono">Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="field">
              <span className="field__label mono">Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me a little about the idea."
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn--primary">
              {sent ? 'Message sent' : 'Send Message'} <span className="arrow">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
