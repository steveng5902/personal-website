import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, BookOpen, Code2, Download, ExternalLink, GraduationCap, HeartHandshake, Mail, MapPin, Menu, Music2, Phone, Sparkles, Trophy, X } from 'lucide-react'
import './styles.css'

const navigation = ['Home', 'About', 'Experience', 'Activities', 'Contact']

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      const sections = navigation.map((item) => document.getElementById(item.toLowerCase()))
      const current = sections.findLast((section) => section && section.getBoundingClientRect().top <= 130)
      if (current) setActive(current.id[0].toUpperCase() + current.id.slice(1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (item) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return <div className="site-shell">
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo('Home')} aria-label="Go to home">
          <span className="brand-dot" /> <span>steven</span><b>gong</b>
        </button>
        <div className="nav-links">
          {navigation.map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => goTo(item)}>{item}</button>)}
        </div>
        <div className="nav-actions">
          <a className="resume-link" href="/Steven-Resume.pdf" target="_blank" rel="noreferrer"><Download size={15}/> Resume</a>
          <a className="talk-button" href="mailto:steveng5902@gmail.com"><Mail size={15}/> Let's talk</a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="mobile-menu">
        {navigation.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
        <a href="mailto:steveng5902@gmail.com">Get in touch <ArrowUpRight size={16}/></a>
      </div>}
    </header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> Student developer · Scarborough, ON</div>
          <h1>Curious minds<br/><em>build</em> meaningful things.</h1>
          <p className="hero-intro">I'm Steven Gong, a student developer learning to turn ideas into thoughtful web and software experiences.</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => goTo('Activities')}>Explore my journey <ArrowDown size={17}/></button>
            <a className="secondary-button" href="/Steven-Resume.pdf" target="_blank" rel="noreferrer"><Download size={17}/> View resume</a>
          </div>
          <div className="social-row">
            <a href="https://github.com/steveng5902" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19}/></a>
            <a href="mailto:steveng5902@gmail.com" aria-label="Email"><Mail size={19}/></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="code-card">
            <div className="window-top"><i/><i/><i/><span>learning.java</span></div>
            <pre><span className="violet">public class</span> <span className="yellow">Steven</span> {'{'}{`\n`}  <span className="violet">String</span> focus = {`"create"`};{`\n\n`}  <span className="violet">void</span> <span className="green">grow</span>() {'{'}{`\n`}    learn();{`\n`}    build();{`\n`}    contribute();{`\n`}  {'}'}{`\n`}{'}'}</pre>
          </div>
          <div className="floating-card school-card"><GraduationCap size={19}/><span>Learning at<br/><b>Agincourt C.I.</b></span></div>
          <div className="floating-card build-card"><Code2 size={19}/><span>Always<br/><b>building</b></span></div>
        </div>
      </section>

      <section id="about" className="section muted-section">
        <div className="container about-grid">
          <div><div className="eyebrow"><BookOpen size={15}/> A little about me</div><h2>A foundation for a future in technology.</h2></div>
          <div className="about-text"><p>I’m a high school student with a growing interest in software, problem-solving, and the way technology can make everyday life better.</p><p>My learning is grounded in Java, home and web application practice, and three years of mentoring in core Java. Beyond the screen, I value patience, teamwork, and giving back to my community.</p><a href="https://github.com/steveng5902" target="_blank" rel="noreferrer" className="text-link">Find me on GitHub <ExternalLink size={15}/></a></div>
        </div>
      </section>

      <section id="experience" className="section container">
        <div className="section-heading"><div><div className="eyebrow"><Code2 size={15}/> Learning by doing</div><h2>Skills & experience.</h2></div><p>Each step has helped me become a more capable and community-minded builder.</p></div>
        <div className="experience-layout">
          <article className="feature-card teal-card"><span className="card-number">01</span><Code2 size={29}/><h3>Programming</h3><p>Completed ICS3U and developed a foundation in core Java through sustained mentoring and personal practice.</p><div className="pill-row"><span>Java</span><span>Web apps</span><span>Home apps</span></div></article>
          <div className="timeline">
            <article className="timeline-item"><div className="time">2023 — present</div><div><h3>High School Student</h3><p>Agincourt Collegiate Institute · Scarborough, Ontario</p></div></article>
            <article className="timeline-item"><div className="time">2024</div><div><h3>Elementary School Volunteer</h3><p>Supported music and gym classes at North Agincourt Junior Public School · 37 hours</p></div></article>
            <article className="timeline-item"><div className="time">2026</div><div><h3>Hospital Volunteer</h3><p>Front desk volunteer for Endoscopy & Minor OR at Scarborough General Hospital</p></div></article>
          </div>
        </div>
      </section>

      <section id="activities" className="section activities-section">
        <div className="container"><div className="section-heading"><div><div className="eyebrow"><Sparkles size={15}/> Beyond the code</div><h2>Curiosity takes many forms.</h2></div><p>From robotics and music to swimming and service, I enjoy learning wherever there is something new to master.</p></div>
          <div className="activity-grid">
            <article className="activity-card purple"><Trophy/><span className="card-number">01</span><h3>FRC Robotics</h3><p>Member of Team 11270 Nova at the Canadian STEM & AI Academy.</p><small>Currently attending</small></article>
            <article className="activity-card orange"><Music2/><span className="card-number">02</span><h3>Piano, Level 8</h3><p>Trained through Little Chopin Academy and Musical World FA Academy.</p><small>2017 — 2023</small></article>
            <article className="activity-card blue"><HeartHandshake/><span className="card-number">03</span><h3>Swimming</h3><p>Completed Ultra 9 and Bronze Medallion training through community recreation centres.</p><small>2017 — 2023</small></article>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-card"><div><div className="eyebrow light"><Mail size={15}/> Get in touch</div><h2>Let’s connect<br/>and create.</h2><p>I’m always happy to talk about technology, learning, and new opportunities.</p></div><div className="contact-actions"><a className="contact-button" href="mailto:steveng5902@gmail.com"><Mail size={18}/> steveng5902@gmail.com</a><a className="contact-button ghost" href="tel:+16478555756"><Phone size={18}/> 647-855-5756</a><div className="location"><MapPin size={17}/> Scarborough, Ontario</div></div></div>
      </section>
    </main>
    <footer><div className="container footer-inner"><button className="brand" onClick={() => goTo('Home')}><span className="brand-dot"/> <span>steven</span><b>gong</b></button><p>© {new Date().getFullYear()} Steven Gong. Built with curiosity.</p><a href="https://github.com/steveng5902" target="_blank" rel="noreferrer"><Code2 size={18}/></a></div></footer>
  </div>
}

export default App

createRoot(document.getElementById('root')).render(<App />)
