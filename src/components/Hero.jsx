import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="hero-noise" />

      {/* =====================================================
          HERO MAIN
          ===================================================== */}

      <div className="hero-inner">

        {/* ================= LEFT CONTENT ================= */}

        <div className="hero-content">

          <div className="hero-eyebrow">
            ~ FINAL-YEAR COMPUTER ENGINEERING STUDENT
          </div>

          <h1 className="hero-title">
            <span>Yogesh</span>
            <span className="hero-title-accent">Dumane</span>
          </h1>

          <h2 className="hero-tagline">
            Building useful software
            <br />
            with modern technology.
          </h2>

          <p className="hero-description">
            Focused on full-stack development, scalable web
            <br className="desktop-break" />
            applications, and AI-powered software.
          </p>

          {/* ================= CTA ================= */}

          <div className="hero-actions">

            <a
              href="#projects"
              className="hero-btn hero-btn-primary"
            >
              <span>VIEW PROJECTS</span>
              <span className="hero-arrow">↗</span>
            </a>

            <a
              href="https://drive.google.com/drive/folders/17Rt92bSjtEzIstyytYtDJGAIrL2Wgv9U?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="hero-btn hero-btn-secondary"
            >
              <span>DOWNLOAD RESUME</span>
              <span className="hero-arrow">↗</span>
            </a>

          </div>

        </div>


        {/* =================================================
            RIGHT SYSTEM GRAPHIC
            ================================================= */}

        <div className="hero-system">

          <div className="system-label system-label-top">
            <span>FULL-STACK + AI</span>
            <strong>DEVELOPER</strong>
          </div>

          <div className="system-label system-label-bottom">
            <span>OPEN TO</span>
            <strong>Software Engineering Opportunities →</strong>
          </div>

          <div className="system-diagonal" />

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="system-core">
            <div className="system-core-inner">

             
              <span className="system-caption">
                BUILD / SHIP / LEARN
              </span>

            </div>
          </div>

        </div>

      </div>


      {/* =====================================================
          LOWER HERO / SOCIAL AREA
          ===================================================== */}

      <div className="hero-lower">

        <div className="hero-socials">

          {/* GitHub */}
          <a
            href="https://github.com/yogesh-123231"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg
              className="social-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22V18.5C15 17.5 15.5 16.8 16 16.2C19.5 15.8 22 14.1 22 9.5C22 8.2 21.5 7 20.7 6C20.9 5.5 21.1 3.9 20.5 2C20.5 2 19.4 1.7 17 3.3C15.1 2.8 12.9 2.8 11 3.3C8.6 1.7 7.5 2 7.5 2C6.9 3.9 7.1 5.5 7.3 6C6.5 7 6 8.2 6 9.5C6 14.1 8.5 15.8 12 16.2C12.5 16.8 13 17.5 13 18.5V22"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 19C6 20 5 18 4 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            <span>GitHub</span>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yogeshdumane"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg
              className="social-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9V21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M6 5.5C6 6.3 5.3 7 4.5 7C3.7 7 3 6.3 3 5.5C3 4.7 3.7 4 4.5 4C5.3 4 6 4.7 6 5.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M11 21V9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M11 14C11 11.2 12.6 9 15.2 9C18 9 20 10.8 20 14.2V21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M20 21V14.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <span>LinkedIn</span>
          </a>


          {/* Email */}
          <a
            href="mailto:yogeshdumane987@gmail.com"
            className="social-link"
          >
            <svg
              className="social-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />

              <path
                d="M4 7L12 13L20 7"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Email</span>
          </a>

        </div>


        {/* =================================================
            SCROLL INDICATOR
            ================================================= */}

        <div className="scroll-explore">

          <span className="scroll-arrow">
            ↓
          </span>

          <span>
            SCROLL TO EXPLORE
          </span>

        </div>


        {/* =================================================
            BOTTOM DIVIDER
            ================================================= */}

        <div className="hero-divider" />

      </div>

    </section>
  );
};

export default Hero;