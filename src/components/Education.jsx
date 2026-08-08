import './Education.css'

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education__container">

        {/* Section heading */}
        <div className="section-head">
          <p className="eyebrow section-head">04 / Education</p>
        </div>

        {/* Education content */}
        <div className="education__grid">

          {/* B.Tech */}
          <div className="education__item">

            <h2 className="education__heading">
              B.Tech in
              <br />
              <span className="accent">
                Computer Engineering
              </span>
            </h2>

            <p className="education__grad mono">
              2024 - 2027 · CGPA : 9+
            </p>

          </div>


          {/* Diploma */}
          <div className="education__item">

            <h2 className="education__heading">
              Diploma in
              <br />
              <span className="accent">
                Computer Engineering
              </span>
            </h2>

            <p className="education__institution">
              MIT Polytechnic, Pune
            </p>

            <p className="education__grad mono">
              2021 — 2024 · Percentage : 82%
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}