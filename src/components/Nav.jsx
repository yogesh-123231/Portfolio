import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = ['About', 'Experience', 'Projects', 'Education', 'Contact']

export default function Nav() {
  const [active, setActive] = useState('About')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#top" className="nav__logo">
          YD<span className="nav__logo-dot">.</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((label) => {
            const id = label === 'Projects' ? 'projects' : label.toLowerCase()
            return (
              <a
                key={label}
                href={`#${id}`}
                className={`nav__link ${active === label ? 'nav__link--active' : ''}`}
                onClick={() => setActive(label)}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="nav__actions">
          <a className="nav__resume" href="https://drive.google.com/drive/folders/17Rt92bSjtEzIstyytYtDJGAIrL2Wgv9U?usp=drive_link" target="_blank" rel="noreferrer">
            Resume <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
