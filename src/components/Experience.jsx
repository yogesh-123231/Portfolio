import './Experience.css'

const ROLES = [
  {
    period: 'Jan 2026 — May 2026',
    title: 'Web Developer Intern',
    org: 'SynergexAI · Freelance',
    duration: '5 months',
    desc:
      'Independently designed, built, and deployed two production websites for real clients using React.js, TypeScript, and Tailwind CSS. Built the Rise N Shine Coaching website with Framer Motion animations and EmailJS lead capture, generating 50+ inquiries in the first month. Also developed the frontend for Saraswati Classes, an EdTech platform built with Next.js, including role-based dashboards and REST API integration.',
    tags: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    period: 'Dec 2025 — Mar 2026',
    title: 'Machine Learning Intern',
    org: 'CreativeArc Services Pvt. Ltd.',
    duration: '4 months',
    desc:
      'Built an ML diagnostic web application where users can upload datasets, train Linear Regression or Decision Tree models, and evaluate R² scores, overfitting, and visual metrics. Completed ML assignments covering data cleaning, model training, and evaluation using Python and SQL while following Git workflows and CI/CD practices.',
    tags: ['Python', 'Machine Learning', 'SQL', 'FastAPI'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="wrap">
        <p className="eyebrow section-head">02 / Experience</p>

        <div className="experience__list">
          {ROLES.map((role) => (
            <div className="role" key={role.title}>
              <div className="role__period mono">{role.period}</div>

              <div className="role__body">
                <h3 className="role__title">{role.title}</h3>
                <p className="role__org mono">
                  {role.org}
                  {role.duration ? ` · ${role.duration}` : ''}
                </p>
                <p className="role__desc">{role.desc}</p>
              </div>

              <div className="role__tags">
                {role.tags.map((t) => (
                  <span key={t} className="tag tag--small">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
