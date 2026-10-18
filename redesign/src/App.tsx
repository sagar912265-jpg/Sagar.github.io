import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Terminal,
} from 'lucide-react'
import './App.css'

const features = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Creating responsive websites with thoughtful design and useful interactions.',
    tag: 'HTML · CSS · JavaScript',
    icon: Code2,
    variant: 'web',
  },
  {
    number: '02',
    title: 'Linux & Termux',
    description:
      'Exploring Linux environments, command-line tools and development workflows.',
    tag: 'LINUX · TERMINAL',
    icon: Terminal,
    variant: 'terminal',
  },
  {
    number: '03',
    title: 'Building Projects',
    description:
      'Turning ideas into working projects, learning through experimentation.',
    tag: 'GIT · GITHUB',
    icon: Layers3,
    variant: 'projects',
  },
]

function App() {
  return (
    <div className="portfolio">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sagar, home">
          <span className="brand-mark">S.</span>

          <span className="brand-copy">
            <strong>SAGAR</strong>
            <small>DEVELOPER PORTFOLIO</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" />
            CURIOUS MIND. PRACTICAL BUILDER.
            <span className="eyebrow-year">PORTFOLIO / 2026</span>
          </motion.div>

          <div className="hero-layout">
            <motion.div
              className="hero-main"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="hero-kicker">HELLO, I'M SAGAR</p>

              <h1>
                Turning ideas into
                <br />
                <span className="gradient-text">digital experiences</span>
                <span className="heading-period">.</span>
              </h1>

              <div className="hero-bottom">
                <p className="hero-description">
                  I'm a developer in the making, exploring web development,
                  Linux and modern tools. I learn by building real projects
                  and turning curiosity into something useful.
                </p>

                <div className="hero-actions">
                  <a className="button-primary" href="#projects">
                    Explore my work <ArrowRight size={17} />
                  </a>

                  <a className="button-secondary" href="#contact">
                    Get in touch <ArrowUpRight size={17} />
                  </a>
                </div>

                <div className="hero-caption">
                  <span>Based in India</span>
                  <span className="caption-divider" />
                  <span>Always learning, always building</span>
                </div>
              </div>
            </motion.div>

            <motion.aside
              className="hero-aside"
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="aside-top">
                <span>THE WAY I WORK</span>
                <span className="aside-symbol">✳</span>
              </div>

              <div className="orbit-visual" aria-hidden="true">
                <div className="orbit orbit-outer" />
                <div className="orbit orbit-inner" />
                <div className="orbit-core">
                  <Code2 size={31} strokeWidth={1.5} />
                </div>
                <span className="orbit-node node-one" />
                <span className="orbit-node node-two" />
                <span className="orbit-node node-three" />
              </div>

              <p className="aside-title">Think. Build. Improve.</p>
              <p className="aside-description">
                Small experiments. Real progress. Better ideas.
              </p>

              <div className="aside-footer">
                <span>CREATIVITY MEETS CODE</span>
                <ArrowUpRight size={16} />
              </div>
            </motion.aside>
          </div>

          <div className="feature-heading">
            <div>
              <p className="section-eyebrow">MY CREATIVE TOOLKIT</p>
              <h2>
                Things I'm <span>building with.</span>
              </h2>
            </div>

            <p className="feature-heading-note">
              The tools, ideas and skills behind my journey.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  className={`feature-card feature-${feature.variant}`}
                  key={feature.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="feature-card-top">
                    <span>{feature.number} / TOOLKIT</span>
                    <ArrowUpRight size={17} />
                  </div>

                  <div className="feature-visual">
                    {feature.variant === 'web' && (
                      <div className="browser-art">
                        <div className="browser-bar">
                          <i />
                          <i />
                          <i />
                          <span>my-next-project.dev</span>
                        </div>
                        <div className="browser-content">
                          <span className="art-overline">
                            DESIGN · CODE · CREATE
                          </span>
                          <div className="art-headline">
                            Make it
                            <br />
                            <span>meaningful.</span>
                          </div>
                          <div className="art-lines">
                            <i />
                            <i />
                          </div>
                          <div className="art-action">
                            Explore <ArrowUpRight size={13} />
                          </div>
                        </div>
                      </div>
                    )}

                    {feature.variant === 'terminal' && (
                      <div className="terminal-art">
                        <div className="terminal-bar">
                          <i />
                          <i />
                          <i />
                          <span>bash — terminal</span>
                        </div>
                        <div className="terminal-content">
                          <p>
                            <b>~/sagar</b> <span>$</span> whoami
                          </p>
                          <p className="terminal-output">curious-developer</p>
                          <p>
                            <b>~/sagar</b> <span>$</span> echo $PASSION
                          </p>
                          <p className="terminal-output">
                            build · learn · repeat
                          </p>
                          <p className="terminal-prompt">
                            <b>~/sagar</b> <span>$</span>{' '}
                            <i className="terminal-cursor" />
                          </p>
                        </div>
                      </div>
                    )}

                    {feature.variant === 'projects' && (
                      <div className="project-art">
                        <div className="project-art-icon">
                          <Layers3 size={27} strokeWidth={1.4} />
                        </div>
                        <div className="project-art-lines">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="project-art-status">
                          <span className="status-dot" />
                          WORK IN PROGRESS
                        </div>
                        <div className="project-art-stamp">BUILD / 001</div>
                      </div>
                    )}
                  </div>

                  <div className="feature-card-body">
                    <div className="feature-icon">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>

                    <span className="feature-tag">{feature.tag}</span>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>
        <section className="content-section" id="about">
          <div className="section-head">
            <p className="section-eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curiosity into <span>creation.</span>
            </h2>
            <p className="section-intro">
              I'm Sagar, a developer in the making who enjoys learning
              through practical projects and exploring how technology works.
            </p>
          </div>

          <div className="about-panel">
            <div className="about-initial">S.</div>
            <div className="about-copy">
              <p className="section-eyebrow">MY APPROACH</p>
              <h3>Learn something. Build something. Improve it.</h3>
              <p>
                From building websites to exploring Linux, Termux and modern
                development tools, I'm focused on turning what I learn into
                projects people can actually explore.
              </p>
              <div className="about-facts">
                <span>Based in India</span>
                <span>Project-driven learning</span>
                <span>Always curious</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="skills">
          <div className="section-head">
            <p className="section-eyebrow">MY TOOLKIT</p>
            <h2>
              Skills I'm <span>developing.</span>
            </h2>
            <p className="section-intro">
              Technologies and tools I'm learning by experimenting,
              building and improving real projects.
            </p>
          </div>

          <div className="skills-grid">
            {[
              'HTML & CSS',
              'JavaScript',
              'React',
              'TypeScript',
              'Tailwind CSS',
              'Git & GitHub',
              'Linux',
              'Termux',
            ].map((skill, index) => (
              <div className="skill-chip" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{skill}</span>
                <span className="skill-indicator" />
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-head">
            <p className="section-eyebrow">SELECTED WORK</p>
            <h2>
              Projects built <span>with purpose.</span>
            </h2>
            <p className="section-intro">
              Practical experiments, personal projects and ideas
              developed through hands-on learning.
            </p>
          </div>

          <div className="portfolio-projects">
            <article className="portfolio-project-card">
              <div className="project-card-top">
                <span>PROJECT / 01</span>
                <span className="project-state">
                  <span className="status-dot" />
                  FRONTEND PROTOTYPE
                </span>
              </div>

              <div className="project-card-art store-art">
                <span className="store-art-icon">S.</span>
                <span className="store-art-title">
                  Sagar Sangam
                  <br />
                  General Store
                </span>
                <span className="store-art-caption">
                  A LOCAL STORE, ONLINE
                </span>
              </div>

              <div className="project-card-copy">
                <h3>Sagar Sangam General Store</h3>
                <p>
                  A grocery storefront concept with product categories,
                  search, cart UI and a WhatsApp ordering flow.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <a
                  className="project-link"
                  href="https://sagar912265-jpg.github.io/Sagar-Sangam-General-Store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View live prototype <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="portfolio-project-card">
              <div className="project-card-top">
                <span>PROJECT / 02</span>
                <span className="project-state project-state-progress">
                  <span className="status-dot" />
                  IN DEVELOPMENT
                </span>
              </div>

              <div className="project-card-art portfolio-art">
                <span className="portfolio-art-mark">S.</span>
                <span className="portfolio-art-title">
                  Personal
                  <br />
                  Portfolio
                </span>
                <span className="portfolio-art-caption">
                  DESIGN · DEVELOP · DEPLOY
                </span>
              </div>

              <div className="project-card-copy">
                <h3>Personal Portfolio Redesign</h3>
                <p>
                  A modern developer portfolio being rebuilt with React,
                  TypeScript, Tailwind CSS and animated UI components.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind</span>
                </div>
                <a
                  className="project-link"
                  href="https://github.com/sagar912265-jpg/Sagar.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <p className="section-eyebrow">HAVE A LOOK AROUND</p>
          <h2>
            Let's connect and <span>keep building.</span>
          </h2>
          <p className="section-intro">
            Explore my repositories and follow my progress as I learn,
            experiment and build new projects.
          </p>
          <a
            className="button-primary contact-cta"
            href="https://github.com/sagar912265-jpg"
            target="_blank"
            rel="noreferrer"
          >
            Find me on GitHub <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          S<span>.</span>
        </a>

        <p>Made with curiosity and a little bit of code.</p>

        <a
          className="footer-github"
          href="https://github.com/sagar912265-jpg"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  )
}

export default App
