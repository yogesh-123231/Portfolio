import './About.css'

const SKILLS = [
  { label: 'React.js', highlight: true },
  'JavaScript',
  'Node.js',
  'Express.js',
  'Next.js',
  'Spring Boot',
  'Python',
  'FastAPI',
  { label: 'MongoDB', highlight: true },
  'MySQL',
  'PostgreSQL',
  'Git / GitHub',
  { label: 'Java', highlight: true },
  'AI / LLMs',
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <p className="eyebrow section-head">01 / About</p>

        <div className="about__grid">
          <h2 className="about__heading">
            Curious by nature.
            <br />
            <span className="dim">Practical by craft.</span>
          </h2>

          <div className="about__body">
            <p>
              I'm Yogesh, a final-year Computer Engineering student who enjoys
              turning complex problems into software people can actually use.
            </p>
            <p>
              From real client websites to AI-powered products, I've hands-on
              experience across the stack — with a bias toward clarity,
              thoughtful interfaces, and systems that hold up beyond the demo.
            </p>

            <ul className="about__tags">
              {SKILLS.map((s) => {
                const label = typeof s === 'string' ? s : s.label
                const highlight = typeof s === 'object' && s.highlight
                return (
                  <li key={label} className={`tag ${highlight ? 'tag--accent' : ''}`}>
                    {label}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
