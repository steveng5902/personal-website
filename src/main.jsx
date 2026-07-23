import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Award, BookOpen, BriefcaseBusiness, CheckCircle2, Code2, Download, ExternalLink, GraduationCap, HeartHandshake, Mail, MapPin, Menu, Music2, Phone, Sparkles, Trophy, X } from 'lucide-react'
import './styles.css'

const navigation = ['Home', 'About', 'Experience', 'Activities', 'Contact']

const scrollId = (label) => label.toLowerCase()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      const visible = navigation.map((label) => document.getElementById(scrollId(label)))
        .filter(Boolean)
        .findLast((section) => section.getBoundingClientRect().top <= 150)
      if (visible) setActive(visible.id[0].toUpperCase() + visible.id.slice(1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (label) => {
    document.getElementById(scrollId(label))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return <div className="site-shell">
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <button className="brand" onClick={() => goTo('Home')} aria-label="Go to home"><span className="brand-mark">&lt;/&gt;</span> Steven Gong</button>
        <div className="nav-links">
          {navigation.map((item) => <button key={item} className={active === item ? 'active' : ''} onClick={() => goTo(item)}>{item}</button>)}
        </div>
        <div className="nav-actions">
          <a className="button button-quiet" href="/Steven-Resume.pdf" target="_blank" rel="noreferrer"><Download size={15}/> Resume</a>
          <button className="button" onClick={() => goTo('Contact')}><Mail size={15}/> Let&apos;s talk</button>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
      {menuOpen && <div className="mobile-menu container">
        {navigation.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
        <a href="/Steven-Resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a>
      </div>}
    </header>

    <main>
      <section id="home" className="hero">
        <div className="container hero-inner">
          <div className="hero-badge"><Sparkles size={14}/> Student developer</div>
          <h1>Steven Gong</h1>
          <p className="hero-title">Learning, building, and growing in technology.</p>
          <p className="hero-copy">A high school student developer interested in thoughtful software, problem-solving, and creating experiences that make everyday life better.</p>
          <div className="hero-meta"><span><MapPin size={15}/> Scarborough, Ontario</span><i/> <span>Agincourt Collegiate Institute</span></div>
          <div className="hero-actions">
            <button className="button button-large" onClick={() => goTo('Activities')}>Explore my work <ArrowDown size={16}/></button>
            <a className="button button-quiet button-large" href="/Steven-Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Resume</a>
            <a className="icon-button" href="https://github.com/steveng5902" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={19}/></a>
            <a className="icon-button" href="mailto:steveng5902@gmail.com" aria-label="Email"><Mail size={19}/></a>
          </div>
          <div className="stats-grid">
            <div><strong>3+</strong><span>Years learning Java</span></div>
            <div><strong>2</strong><span>Volunteer roles</span></div>
            <div><strong>37</strong><span>Service hours</span></div>
            <div><strong>8</strong><span>Piano level achieved</span></div>
          </div>
        </div>
        <button className="scroll-button" onClick={() => goTo('About')} aria-label="Scroll to about"><ArrowDown size={17}/></button>
      </section>

      <section id="about" className="section section-soft">
        <div className="container about-grid">
          <div className="section-intro"><span className="eyebrow"><BookOpen size={15}/> About me</span><h2>Building a strong foundation.</h2></div>
          <div className="about-content"><p>I’m a high school student with a growing interest in software, problem-solving, and the way technology can make everyday life better.</p><p>My learning is grounded in Java, web and home application practice, and three years of mentoring in core Java. Beyond the screen, I value patience, teamwork, and giving back to my community.</p><a className="inline-link" href="https://github.com/steveng5902" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={15}/></a></div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow"><BriefcaseBusiness size={15}/> Experience & skills</span><h2>Learning by doing.</h2><p>Every project, class, and volunteer opportunity has helped me become a more capable and community-minded builder.</p></div>
          <div className="experience-grid">
            <article className="skill-card"><div className="card-icon"><Code2 size={21}/></div><h3>Programming</h3><p>A foundation in core Java developed through ICS3U, mentoring, and personal practice.</p><div className="tag-list"><span>Java</span><span>Web apps</span><span>Home apps</span></div></article>
            <article className="skill-card"><div className="card-icon"><GraduationCap size={21}/></div><h3>Student life</h3><p>Learning at Agincourt Collegiate Institute and actively exploring technology beyond the classroom.</p><div className="tag-list"><span>ICS3U</span><span>Problem solving</span><span>Teamwork</span></div></article>
            <article className="skill-card"><div className="card-icon"><HeartHandshake size={21}/></div><h3>Community</h3><p>Service experiences that have strengthened my communication, reliability, and patience.</p><div className="tag-list"><span>Volunteering</span><span>Mentoring</span><span>Service</span></div></article>
          </div>
          <div className="timeline">
            <article><div className="timeline-top"><span className="status current">Current</span><time>2023 — present</time></div><h3>High School Student</h3><p className="place"><GraduationCap size={15}/> Agincourt Collegiate Institute · Scarborough, Ontario</p><p>Developing technical and academic foundations while exploring opportunities in software and technology.</p></article>
            <article><div className="timeline-top"><span className="status">Volunteer</span><time>2026</time></div><h3>Hospital Volunteer</h3><p className="place"><MapPin size={15}/> Scarborough General Hospital</p><p>Front desk volunteer for Endoscopy & Minor OR, supporting visitors and the care team.</p></article>
            <article><div className="timeline-top"><span className="status">Volunteer</span><time>2024</time></div><h3>Elementary School Volunteer</h3><p className="place"><MapPin size={15}/> North Agincourt Junior Public School</p><p>Supported music and gym classes, contributing 37 hours of service.</p></article>
          </div>
        </div>
      </section>

      <section id="activities" className="section section-soft">
        <div className="container"><div className="section-heading centered"><span className="eyebrow"><Award size={15}/> Beyond the classroom</span><h2>Curiosity takes many forms.</h2><p>From robotics and music to swimming and service, I enjoy learning wherever there is something new to master.</p></div>
          <div className="activity-grid">
            <article className="activity-card"><div className="activity-icon"><Trophy size={23}/></div><span className="activity-type">Robotics</span><h3>FRC Robotics</h3><p>Member of Team 11270 Nova at the Canadian STEM & AI Academy.</p><div className="activity-footer"><span>Currently attending</span><ArrowUpRight size={16}/></div></article>
            <article className="activity-card"><div className="activity-icon"><Music2 size={23}/></div><span className="activity-type">Music</span><h3>Piano, Level 8</h3><p>Trained through Little Chopin Academy and Musical World FA Academy.</p><div className="activity-footer"><span>2017 — 2023</span><CheckCircle2 size={16}/></div></article>
            <article className="activity-card"><div className="activity-icon"><HeartHandshake size={23}/></div><span className="activity-type">Athletics</span><h3>Swimming</h3><p>Completed Ultra 9 and Bronze Medallion training through community recreation centres.</p><div className="activity-footer"><span>2017 — 2023</span><CheckCircle2 size={16}/></div></article>
          </div>
          <div className="github-cta"><a className="button button-quiet" href="https://github.com/steveng5902" target="_blank" rel="noreferrer"><Code2 size={16}/> More on GitHub</a></div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container"><div className="section-heading centered"><span className="eyebrow"><Mail size={15}/> Contact</span><h2>Let’s connect.</h2><p>I’m always happy to talk about technology, learning, and new opportunities.</p></div>
          <div className="contact-grid"><article className="contact-card"><div className="card-icon"><Mail size={22}/></div><h3>Email</h3><p>Have a question or opportunity in mind?</p><a className="button" href="mailto:steveng5902@gmail.com"><Mail size={16}/> Send an email</a></article><article className="contact-card"><div className="card-icon"><Phone size={22}/></div><h3>Phone & location</h3><p><a href="tel:+16478555756">647-855-5756</a><br/>Scarborough, Ontario</p><a className="inline-link" href="https://github.com/steveng5902" target="_blank" rel="noreferrer">GitHub profile <ExternalLink size={15}/></a></article></div>
        </div>
      </section>
    </main>
    <footer><div className="container footer-inner"><span className="brand"><span className="brand-mark">&lt;/&gt;</span> Steven Gong</span><span>© {new Date().getFullYear()} Steven Gong. Built with curiosity.</span><a href="mailto:steveng5902@gmail.com"><Mail size={17}/></a></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
