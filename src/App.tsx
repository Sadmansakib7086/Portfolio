import { useState } from "react";
import portrait from "./assets/uploads/sadman-sakib-portrait.jpg";
import englishOlympiad from "./assets/uploads/english-olympiad-certificate.jpg";
import dataStructures from "./assets/uploads/data-structures-certificate.png";
import resume from "./assets/uploads/sadman-sakib-resume.pdf";
import dataStructuresPdf from "./assets/uploads/data-structures-certificate.pdf";

const ArrowUpRight = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Download = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="m8 9-3 3 3 3m8-6 3 3-3 3m-2-9-4 12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.5 8.25H3.25V20H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.9 6.75 1.88 1.88 0 0 0 4.88 3ZM20.75 13.26c0-3.54-1.89-5.19-4.41-5.19-2.03 0-2.94 1.12-3.45 1.9V8.25H9.64V20h3.25v-5.82c0-1.54.29-3.03 2.2-3.03 1.88 0 1.9 1.76 1.9 3.13V20h3.25l.51-6.74Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 6h16v12H4V6Zm0 1 8 6 8-6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const menuItems = ["About", "Projects", "Skills", "Journey", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a href="#top" className="brand" onClick={closeMenu} aria-label="Sadman Sakib, home">
            <span className="brand-mark">SS</span>
            <span className="brand-name">
              Sadman <b>Sakib</b>
            </span>
          </a>

          <div className="desktop-nav">
            {menuItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={index === 0 ? "active" : ""}>
                {item}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <span className="availability">
              <i /> Available for opportunities
            </span>
            <a className="button button-primary nav-resume" href={resume} download>
              Résumé <Download />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-nav">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                  {item}
                </a>
              ))}
              <a href={resume} download onClick={closeMenu}>
                Download résumé
              </a>
            </div>
          )}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span>01</span> Hello, I’m Sadman
            </div>
            <h1>
              I turn ideas into <em>useful digital experiences.</em>
            </h1>
            <p className="hero-intro">
              Computer Science undergraduate and aspiring Data Science &amp; AI Engineer, building
              thoughtful software through code, data, and curiosity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight />
              </a>
              <a className="text-link" href="mailto:sadman9205@gmail.com">
                Let’s talk <span>→</span>
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Dhaka</strong>
                <span>Bangladesh</span>
              </div>
              <div>
                <strong>CSE</strong>
                <span>AIUB undergraduate</span>
              </div>
              <div>
                <strong>3.10</strong>
                <span>Current CGPA</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait of Sadman Sakib">
            <div className="portrait-frame">
              <img src={portrait} alt="Sadman Sakib standing on a rooftop" />
              <div className="portrait-label">
                <span>Current focus</span>
                <strong>Data Science · AI · Software</strong>
              </div>
            </div>
            <div className="floating-card code-card">
              <CodeIcon />
              <div>
                <span>Always learning</span>
                <strong>Building with purpose</strong>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            <span>Data Science</span>
            <i>✦</i>
            <span>Artificial Intelligence</span>
            <i>✦</i>
            <span>Software Development</span>
            <i>✦</i>
            <span>Visual Storytelling</span>
            <i>✦</i>
            <span>Data Science</span>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <div className="eyebrow">
              <span>02</span> About me
            </div>
            <h2>
              Curious by nature.
              <br />
              Driven by <em>impact.</em>
            </h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                I’m a Computer Science &amp; Engineering student at American International
                University-Bangladesh.
              </p>
              <p>
                My interests sit where technology and real-world problem solving meet—from
                database-driven applications to data analytics, machine learning, and business
                intelligence.
              </p>
              <p>
                Beyond code, I contribute to visual storytelling as a director and cinematographer
                with the AIUB Film Club, and support environmental initiatives as an executive at
                Ecorevolution.
              </p>
              <div className="social-row">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <GithubIcon /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
            <div className="video-wrap">
              <iframe
                src="https://www.youtube.com/embed/oqDhvmVVuJM"
                title="About Sadman Sakib"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="video-caption">
                <span>Play introduction</span>
                <strong>Meet Sadman in 60 seconds</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading row-heading">
            <div>
              <div className="eyebrow">
                <span>03</span> Selected projects
              </div>
              <h2>
                Work shaped by
                <br />
                <em>real needs.</em>
              </h2>
            </div>
            <p>
              Two practical software projects focused on accessibility, utility, and clear user
              experience.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card project-blue">
              <div className="project-top">
                <span className="project-number">01</span>
                <div className="project-icon">
                  <CodeIcon />
                </div>
              </div>
              <div>
                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>
                </div>
                <h3>ShopEase</h3>
                <p>
                  A web-based supermarket platform that makes product browsing and everyday online
                  shopping clear and convenient.
                </p>
              </div>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                View on GitHub <ArrowUpRight />
              </a>
            </article>

            <article className="project-card project-violet">
              <div className="project-top">
                <span className="project-number">02</span>
                <div className="project-icon">
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3v18M3 12h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="tags">
                  <span>Java</span>
                  <span>OOP</span>
                  <span>Logic Design</span>
                </div>
                <h3>Disaster Emergency Guide</h3>
                <p>
                  An emergency assistance app providing preparedness guidance, first aid
                  instructions, and critical rescue information.
                </p>
              </div>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                View on GitHub <ArrowUpRight />
              </a>
            </article>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <div className="eyebrow">
              <span>04</span> Capabilities
            </div>
            <h2>
              Tools I use to move
              <br />
              from <em>idea to outcome.</em>
            </h2>
          </div>
          <div className="skill-grid">
            <div className="skill-card">
              <span className="skill-index">01</span>
              <h3>Programming</h3>
              <p>Python · C · C++ · Java · C#</p>
            </div>
            <div className="skill-card">
              <span className="skill-index">02</span>
              <h3>Data &amp; Databases</h3>
              <p>SQL · MySQL · Power BI · Excel</p>
            </div>
            <div className="skill-card">
              <span className="skill-index">03</span>
              <h3>Web Development</h3>
              <p>HTML · CSS · JavaScript</p>
            </div>
            <div className="skill-card">
              <span className="skill-index">04</span>
              <h3>Growing Expertise</h3>
              <p>Machine Learning · AI · Automation</p>
            </div>
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-heading row-heading">
            <div>
              <div className="eyebrow">
                <span>05</span> Journey
              </div>
              <h2>
                Learning beyond
                <br />
                the <em>classroom.</em>
              </h2>
            </div>
            <p>A mix of technical education, creative collaboration, and community leadership.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>Present</span>
              <div>
                <h3>BSc in Computer Science &amp; Engineering</h3>
                <p>American International University-Bangladesh · CGPA 3.10/4.00</p>
              </div>
              <b>Education</b>
            </div>
            <div className="timeline-item">
              <span>Active</span>
              <div>
                <h3>Director &amp; Cinematographer</h3>
                <p>AIUB Film Club · Visual storytelling, camera operations, and creative events</p>
              </div>
              <b>Creative</b>
            </div>
            <div className="timeline-item">
              <span>Current</span>
              <div>
                <h3>Executive</h3>
                <p>
                  Ecorevolution · Sustainability campaigns and environmental awareness initiatives
                </p>
              </div>
              <b>Leadership</b>
            </div>
          </div>
        </section>

        <section className="section credentials-section">
          <div className="section-heading row-heading">
            <div>
              <div className="eyebrow">
                <span>06</span> Credentials
              </div>
              <h2>
                Milestones worth
                <br />
                <em>remembering.</em>
              </h2>
            </div>
            <p>
              Recognition for technical learning and active participation beyond university
              coursework.
            </p>
          </div>
          <div className="credential-grid">
            <a
              href={dataStructuresPdf}
              target="_blank"
              rel="noreferrer"
              className="credential-card"
            >
              <div className="credential-image">
                <img src={dataStructures} alt="Phitron Data Structure and Algorithm certificate" />
              </div>
              <div>
                <span>Phitron · Recognition</span>
                <h3>Data Structure &amp; Algorithm</h3>
                <p>Outstanding result</p>
              </div>
              <ArrowUpRight />
            </a>
            <a href={englishOlympiad} target="_blank" rel="noreferrer" className="credential-card">
              <div className="credential-image">
                <img src={englishOlympiad} alt="National English Olympiad 2018 certificate" />
              </div>
              <div>
                <span>National · Participation</span>
                <h3>English Olympiad 2018</h3>
                <p>Trailblazers group</p>
              </div>
              <ArrowUpRight />
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-orbit orbit-one" />
          <div className="contact-orbit orbit-two" />
          <div className="eyebrow light">
            <span>07</span> Get in touch
          </div>
          <h2>
            Have an idea?
            <br />
            Let’s make it <em>real.</em>
          </h2>
          <p>
            I’m open to internships, collaborative projects, and opportunities in software, data,
            and AI.
          </p>
          <a className="button button-light" href="mailto:sadman9205@gmail.com">
            <MailIcon /> Start a conversation
          </a>
        </section>
      </main>

      <footer>
        <a href="#top" className="footer-brand">
          <span className="brand-mark">SS</span> Sadman Sakib
        </a>
        <p>Designed for curiosity. Built with purpose.</p>
        <div>
          <a href="mailto:sadman9205@gmail.com">Email</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
