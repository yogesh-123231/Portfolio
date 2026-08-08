import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p className="mono">© 2026 Yogesh Dumane</p>

        <div className="footer__links mono">
          <a href="https://github.com/yogesh-123231" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yogeshdumane" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:yogeshdumane987@gmail.com">Email</a>
        </div>

        <p className="mono footer__made">Made with intent.</p>
      </div>
    </footer>
  )
}
