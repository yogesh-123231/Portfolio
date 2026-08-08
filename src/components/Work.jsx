import { useState } from 'react'
import './Work.css'

import docmindScreenshot from '../assets/docmind.png'
import solaraScreenshot from '../assets/solara.png'
import riseNShineScreenshot from '../assets/rise-n-shine.png'
import saraswatiScreenshot from '../assets/saraswati.png'
import customerSupportScreenshot from '../assets/customer-support.png'

const PROJECTS = [
  {
    index: '01',
    label: 'Featured / AI Systems',
    title: 'DocMind.AI',
    category: 'AI',
    desc:
      'A document intelligence platform that makes uploaded knowledge searchable and traceable using retrieval-augmented generation, semantic search, and LLM-powered responses.',
    tags: ['FastAPI', 'React', 'LLM APIs', 'Vector Search', 'RAG'],
    thumb: '01',
    image: docmindScreenshot,

    github: 'https://github.com/yogesh-123231/DocMind.AI',
    live: 'https://doc-mind-ai-psi.vercel.app/',
  },

  {
    index: '02',
    label: 'Commerce / MERN',
    title: 'Solara',
    category: 'FULL STACK',
    desc:
      'A complete e-commerce platform with role-based user and admin dashboards, product discovery, filtering, cart management, and Stripe payment integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
    thumb: '02',
    image: solaraScreenshot,

    github: 'https://github.com/yogesh-123231/Solara_v2',
    live: 'https://solara-v2.vercel.app/',
  },

  {
    index: '03',
    label: 'Client / Production',
    title: 'Rise N Shine Coaching',
    category: 'FREELANCE',
    desc:
      'A production coaching website built for a real client with React, Framer Motion animations, and EmailJS lead capture, generating 50+ inquiries in the first month.',
    tags: ['React', 'Framer Motion', 'EmailJS', 'Tailwind CSS'],
    thumb: '03',
    image: riseNShineScreenshot,

    github: 'https://www.risenshinecoaching.in/',
    live: 'https://www.risenshinecoaching.in/',
  },

  {
    index: '04',
    label: 'Client / EdTech',
    title: 'Saraswati Classes',
    category: 'FREELANCE',
    desc:
      'An EdTech platform frontend built with Next.js, featuring role-based Admin and Student dashboards with REST API integration for a structured learning experience.',
    tags: ['Next.js', 'React', 'REST APIs', 'Tailwind CSS'],
    thumb: '04',
    image: saraswatiScreenshot,

    github: 'https://www.saraswaticlass.in/',
    live: 'https://www.saraswaticlass.in/',
  },

  {
    index: '05',
    label: 'Product / Full-stack',
    title: 'Customer Support Agent',
    category: 'FULL STACK',
    desc:
      'A full-stack customer support application built with Spring Boot, React, and MySQL, designed to manage support workflows through a structured backend and focused interface.',
    tags: ['Spring Boot', 'React', 'MySQL'],
    thumb: '05',
    image: customerSupportScreenshot,

    github: 'https://github.com/yogesh-123231/Customer-Support-Agent',
    live: 'https://customer-support-agent-nine.vercel.app/login',
  },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredProjects = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section className="work section" id="projects">
      <div className="wrap">
        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <p className="eyebrow section-head">03 / Selected work</p>

        {/* =================================================
            INTRO
            ================================================= */}

        <div className="work__intro">
          <h2 className="work__heading">
            Things I've
            <br />
            <span className="dim">
              built recently.
            </span>
          </h2>

          <p className="work__note">
            Real software, considered from the first interaction to the last
            edge case.
          </p>
        </div>

        {/* =================================================
            PROJECT FILTERS
            ================================================= */}

        <div className="work__filters mono">
          {['ALL', 'AI', 'FULL STACK', 'FREELANCE'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* =================================================
            PROJECT LIST
            ================================================= */}

        <div className="work__list">
          {filteredProjects.map((p) => (
            <article
              className="project"
              key={p.index}
            >
              {/* PROJECT META */}
              <div className="project__meta mono">
                <span className="project__index">
                  {p.index}
                </span>
                <span className="project__label">
                  {p.label}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project__body">
                <h3 className="project__title">
                  {p.title}
                </h3>
                <p className="project__desc">
                  {p.desc}
                </p>
                <div className="project__tags">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag tag--small"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* =================================================
                  PROJECT LINKS
                  ================================================= */}
              <div className="project__links mono">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  GitHub
                  <span className="arrow">
                    ↗
                  </span>
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  Live demo
                  <span className="arrow">
                    ↗
                  </span>
                </a>
              </div>

              {/* =================================================
                  PROJECT SCREENSHOT
                  ================================================= */}
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project__thumb"
              >
                <img
                  src={p.image}
                  alt={`${p.title} project screenshot`}
                  className="project__image"
                />
                <span className="project__thumb-number">
                  {p.thumb}
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* =================================================
            VIEW ALL PROJECTS
            ================================================= */}
        <div className="work__footer">
          <a
            href="https://github.com/yogesh-123231?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="work__all-projects"
          >
            <span>
              VIEW ALL PROJECTS
            </span>
            <span className="work__all-arrow">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}