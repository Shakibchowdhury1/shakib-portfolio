import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  Award01Icon,
  Briefcase01Icon,
  CheckmarkBadge01Icon,
  Download04Icon,
  UniversityIcon,
  Mail01Icon,
  Menu01Icon,
  Presentation01Icon,
  Task01Icon,
  TelephoneIcon,
  UserMultiple02Icon,
  Cancel01Icon,
  AnalyticsUpIcon,
  WorkflowCircle06Icon,
  Target02Icon,
  AiInnovation01Icon,
  SmartPhone01Icon,
  Alert01Icon,
  Calendar01Icon,
  Building01Icon,
  FavouriteIcon,
  Copy01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
  Layers01Icon,
} from '@hugeicons/core-free-icons'
import Icon from './components/Icon'
import Reveal from './components/Reveal'
import SectionHeading from './components/SectionHeading'
import {
  quickStats,
  capabilities,
  pmToolstack,
  projectsData,
  certifications,
  deliverySteps,
  coCurricularActivities,
} from './data/portfolio'

const navItems = [
  ['About', '#about'],
  ['Capabilities', '#capabilities'],
  ['Work', '#work'],
  ['Approach', '#approach'],
  ['Credentials', '#credentials'],
  ['Activities', '#activities'],
  ['Contact', '#contact'],
]

const skillIcons = [Target02Icon, UserMultiple02Icon, WorkflowCircle06Icon, Presentation01Icon, AnalyticsUpIcon, Task01Icon]
const activityIcons = [Building01Icon, FavouriteIcon, Presentation01Icon, WorkflowCircle06Icon]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [copiedKey, setCopiedKey] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 32, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)
      setShowBackToTop(scrollY > 420)

      const sectionIds = ['top', 'about', 'capabilities', 'work', 'approach', 'credentials', 'activities', 'contact']
      const scrollOffset = scrollY + 220

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el && el.offsetTop <= scrollOffset) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopy = (text, label, key) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key)
        setToastMessage(`${label} copied to clipboard!`)
        setTimeout(() => {
          setCopiedKey(null)
          setToastMessage(null)
        }, 2400)
      })
    } else {
      setToastMessage(`${label}: ${text}`)
      setTimeout(() => setToastMessage(null), 2400)
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-white selection:bg-aqua selection:text-ink">
      {/* Scroll progress bar */}
      <motion.div className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-gradient-to-r from-sky via-aqua to-sky" style={{ scaleX }} />

      {/* Header / Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-ink/80 shadow-2xl shadow-black/20 backdrop-blur-2xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Go to top">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] font-display text-sm font-extrabold tracking-tight text-aqua shadow-glow transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-aqua/40 group-hover:bg-aqua/10">
              SC
            </div>
            <div>
              <div className="font-display text-sm font-bold tracking-tight text-white transition-colors group-hover:text-aqua">
                Md Shakib Chowdhury
              </div>
              <div className="text-[11px] font-medium text-mist">Project Manager · ITM</div>
            </div>
          </a>

          {/* Desktop Nav with Active Scroll-Spy highlight */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-xl lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={label}
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? 'text-aqua' : 'text-mist hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full border border-aqua/30 bg-aqua/[0.08]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              )
            })}
          </nav>

          {/* Recruiter Quick Actions in Header */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/Shakib_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-mist transition-all duration-200 hover:border-sky/40 hover:bg-white/[0.08] hover:text-white"
            >
              <Icon icon={Download04Icon} size={15} />
              Resume
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-4 py-2 text-xs font-bold text-aqua transition-all duration-300 hover:border-aqua hover:bg-aqua hover:text-ink"
            >
              Contact
              <Icon icon={ArrowRight01Icon} size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={menuOpen ? Cancel01Icon : Menu01Icon} />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-ink/95 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-1.5">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-mist hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{label}</span>
                    <Icon icon={ArrowRight01Icon} size={15} className="text-white/40" />
                  </a>
                ))}
                <div className="mt-3 flex gap-2 pt-2 border-t border-white/10">
                  <a
                    href="/Shakib_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] py-2.5 text-xs font-bold text-white"
                  >
                    <Icon icon={Download04Icon} size={15} />
                    Download CV
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-aqua py-2.5 text-xs font-bold text-ink"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 -z-20 bg-hero-grid bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-[18%] -z-10 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
          <div className="absolute bottom-10 left-[45%] -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
            <div>
              {/* Recruiter Live Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-4 py-2 text-xs font-semibold text-emerald-300"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span>Open to Project Management & Delivery Roles</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl font-display text-[clamp(2.8rem,7vw,6.4rem)] font-extrabold leading-[0.93] tracking-[-0.065em]"
              >
                I turn complex work into{' '}
                <span className="bg-gradient-to-r from-sky via-white to-aqua bg-clip-text text-transparent">clear momentum.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16 }}
                className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg"
              >
                I&apos;m <strong className="font-semibold text-white">Md Shakib Chowdhury</strong>, a Project Manager with an Information Technology & Management foundation. I bridge business goals with technical execution through Agile delivery, structured planning, cross-functional stakeholder coordination, and data-informed decision support.
              </motion.p>

              {/* Recruiter Quick Details Pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-6 flex flex-wrap items-center gap-3 text-xs text-mist"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  <Icon icon={Location01Icon} size={14} className="text-aqua" />
                  Dhaka, Bangladesh · Remote / Hybrid / On-site
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                  <Icon icon={Briefcase01Icon} size={14} className="text-sky" />
                  Agile · Scrum · SDLC · Analytics
                </span>
              </motion.div>

              {/* Action Buttons with Copy Feedback */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-aqua hover:shadow-lg hover:shadow-aqua/20"
                >
                  Explore Work
                  <Icon icon={ArrowDown01Icon} size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="/Shakib_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white/[0.09]"
                >
                  Download CV
                  <Icon icon={Download04Icon} size={17} />
                </a>

                <button
                  onClick={() => handleCopy('chowdhury2305191014@diu.edu.bd', 'Email', 'hero-email')}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3.5 text-xs font-semibold text-mist transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  title="Click to copy email address"
                >
                  <Icon icon={copiedKey === 'hero-email' ? CheckmarkCircle01Icon : Copy01Icon} size={15} className={copiedKey === 'hero-email' ? 'text-aqua' : ''} />
                  {copiedKey === 'hero-email' ? 'Email Copied!' : 'Copy Email'}
                </button>
              </motion.div>
            </div>

            {/* PM Cockpit / Interactive Bento Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[530px]"
            >
              <div className="absolute inset-8 rounded-[3rem] bg-sky/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-aqua">Operating Framework</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">Delivery with Clarity</h3>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-aqua/20 bg-aqua/10 text-aqua">
                    <Icon icon={Briefcase01Icon} size={24} />
                  </div>
                </div>

                {/* 4 Core Pillars */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Planning', 'Structure objectives into clear WBS, timelines & milestones.'],
                    ['People', 'Align cross-functional teams and maintain stakeholder transparency.'],
                    ['Process', 'Execute with Agile Scrum & SDLC to eliminate blockers.'],
                    ['Insight', 'Back project decisions with empirical data and analysis.'],
                  ].map(([label, text], index) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -3, borderColor: 'rgba(85,230,207,0.3)' }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4 transition-colors"
                    >
                      <div className="mb-2.5 flex items-center gap-2">
                        <span className="grid h-6 w-6 place-items-center rounded-lg bg-white/[0.06] text-xs font-bold text-aqua">0{index + 1}</span>
                        <span className="font-display text-sm font-bold text-white">{label}</span>
                      </div>
                      <p className="text-xs leading-5 text-mist">{text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Highlight strip inside Cockpit */}
                <div className="mt-5 rounded-2xl border border-sky/20 bg-sky/[0.06] p-4">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/10 text-sky">
                      <Icon icon={Award01Icon} size={19} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-display text-xs font-bold text-white">1st Runner-Up · Project Showcasing 2025</p>
                      </div>
                      <p className="mt-0.5 text-xs leading-5 text-mist">
                        Machine learning project predicting student academic outcomes with empirical data analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating AI-aware pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 -top-5 hidden rounded-2xl border border-white/10 bg-ink/90 px-4 py-2.5 shadow-glow backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-aqua/10 text-aqua"><Icon icon={AiInnovation01Icon} size={15} /></span>
                  AI-Assisted Project Delivery
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* RECRUITER EXECUTIVE SUMMARY STRIP */}
        <section className="relative -mt-6 border-y border-white/10 bg-white/[0.02] py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {quickStats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.05}>
                  <div className="rounded-2xl border border-white/5 bg-white/[0.025] p-5 transition-all duration-300 hover:border-aqua/20 hover:bg-white/[0.04]">
                    <div className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                      <span className="text-gradient">{stat.value}</span>
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/90">{stat.label}</div>
                    <div className="mt-1 text-xs text-mist">{stat.detail}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:px-10">
            <SectionHeading
              eyebrow="About"
              title="A project manager with a technology-first mindset."
              copy="My academic background combines Information Technology & Management with a major in Project Management. I thrive where structured planning, business analysis, transparent stakeholder communication, and execution meet."
            />

            <Reveal className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  value: '7+',
                  title: 'PM & Leadership Credentials',
                  desc: 'Comprehensive training spanning Google PM, Agile, and SDLC models.',
                  accent: 'bg-sky/50',
                },
                {
                  value: '1st',
                  title: 'Runner-Up Award (2025)',
                  desc: 'Awarded for machine-learning research on student academic performance.',
                  accent: 'bg-aqua/50',
                },
                {
                  value: 'ITM',
                  title: 'Technology + Management',
                  desc: 'B.Sc. foundation bridging developer realities with business goals.',
                  accent: 'bg-white/30',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
                >
                  <div>
                    <div className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white">{item.value}</div>
                    <p className="mt-3 text-sm font-bold text-white">{item.title}</p>
                    <p className="mt-1.5 text-xs leading-5 text-mist">{item.desc}</p>
                  </div>
                  <div className={`mt-6 h-1 w-12 rounded-full ${item.accent}`} />
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CAPABILITIES & RECRUITER TOOLING MATRIX */}
        <section id="capabilities" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Capabilities & Tooling"
              title="The skills and tools I bring to project delivery."
              copy="A balanced toolkit spanning planning, cross-functional coordination, Agile governance, business analysis, and modern PM software — designed to reduce ambiguity and accelerate team velocity."
            />

            {/* Core Capability Cards */}
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-6 transition-all duration-300 hover:border-sky/30 hover:shadow-glow"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-sky transition-all duration-300 group-hover:border-aqua/30 group-hover:bg-aqua/10 group-hover:text-aqua">
                          <Icon icon={skillIcons[index]} size={22} />
                        </div>
                        <span className="text-xs font-semibold text-white/30">0{index + 1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-aqua transition-colors">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-mist">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>

            {/* RECRUITER ATS / TOOLSTACK MATRIX */}
            <div className="mt-16">
              <Reveal>
                <div className="rounded-[2rem] border border-white/10 bg-panel/60 p-6 sm:p-8 backdrop-blur-xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-aqua/10 text-aqua">
                      <Icon icon={Layers01Icon} size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">Project Management Tooling & Methodologies Stack</h3>
                      <p className="text-xs text-mist">Key frameworks, collaboration tools, and analytical instruments used in delivery</p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {pmToolstack.map((group) => (
                      <div key={group.category} className="rounded-2xl border border-white/5 bg-black/20 p-4">
                        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-aqua">
                          {group.category}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/90"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SELECTED WORK / PM CASE STUDIES */}
        <section id="work" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:72px_72px] opacity-40 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects, concepts & delivery in action."
              copy="Real-world project initiatives demonstrating mobile system concept planning, role-based workflows, empirical data research, and cross-functional execution."
            />

            <div className="mt-12 space-y-8">
              {/* Ongoing Project Card: A Smart Elder-Care Management System */}
              <Reveal>
                <motion.article
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow"
                >
                  <div className="relative min-h-[380px] overflow-hidden p-7 sm:p-9">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(85,230,207,.18),transparent_42%),radial-gradient(circle_at_85%_75%,rgba(124,200,255,.14),transparent_45%)]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/[0.1] px-3.5 py-1.5 text-xs font-semibold text-aqua">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                            </span>
                            <Icon icon={SmartPhone01Icon} size={15} />
                            Mobile App Concept
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-mist">
                              Role: {projectsData[0].role}
                            </span>
                            <span className="rounded-full border border-aqua/25 bg-aqua/[0.08] px-3 py-1 text-xs font-bold uppercase tracking-wider text-aqua">
                              Ongoing
                            </span>
                          </div>
                        </div>

                        <h3 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                          {projectsData[0].title}
                        </h3>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-mist sm:text-base">
                          {projectsData[0].description}
                        </p>

                        {/* Problem Statement box */}
                        <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 max-w-3xl">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-aqua">The Core Challenge: </span>
                          <span className="text-xs leading-5 text-mist">{projectsData[0].problem}</span>
                        </div>

                        {/* Personas */}
                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-mist/80">Role-based scope:</span>
                          {projectsData[0].personas.map((role) => (
                            <span
                              key={role}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/90"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 3 Pillars */}
                      <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {projectsData[0].pillars.map((pillar, idx) => (
                          <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm transition-colors hover:border-aqua/30">
                            <div className="mb-2 flex items-center gap-2.5">
                              <div className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.06] text-aqua">
                                <Icon icon={idx === 0 ? WorkflowCircle06Icon : idx === 1 ? Calendar01Icon : Alert01Icon} size={16} />
                              </div>
                              <div className="text-sm font-bold text-white">{pillar.title}</div>
                            </div>
                            <div className="mt-2 text-xs leading-5 text-mist">
                              {pillar.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>

              {/* Research Project & Supporting Cards Grid */}
              <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
                {/* ML Case Study */}
                <Reveal delay={0.05}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow"
                  >
                    <div className="relative min-h-[380px] overflow-hidden p-7 sm:p-9">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(85,230,207,.16),transparent_34%),radial-gradient(circle_at_20%_100%,rgba(124,200,255,.16),transparent_38%)]" />
                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/[0.08] px-3 py-1.5 text-xs font-semibold text-aqua">
                              <Icon icon={AnalyticsUpIcon} size={15} /> Research & Project Experience
                            </div>
                            <span className="rounded-full border border-sky/20 bg-sky/[0.08] px-3 py-1 text-xs font-medium text-sky">
                              Role: {projectsData[1].role}
                            </span>
                          </div>

                          <h3 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl text-white">
                            {projectsData[1].title}
                          </h3>
                          <p className="mt-4 max-w-2xl text-sm leading-7 text-mist sm:text-base">
                            {projectsData[1].description}
                          </p>

                          <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-3.5">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-sky">PM & Research Objective: </span>
                            <span className="text-xs leading-5 text-mist">{projectsData[1].problem}</span>
                          </div>
                        </div>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                          {projectsData[1].pillars.map((pillar) => (
                            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                              <div className="text-xs font-bold text-white">{pillar.title}</div>
                              <div className="mt-1.5 text-xs leading-5 text-mist">{pillar.text}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>

                {/* Milestone Cards */}
                <div className="grid gap-5">
                  <Reveal delay={0.1}>
                    <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-aqua/30">
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-aqua/10 text-aqua">
                        <Icon icon={Award01Icon} size={23} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">Competitive Achievement</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">1st Runner-Up</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">
                        Project Showcasing Competition 2025 · Machine Learning Category. Recognized for analytical methodology and structured presentation.
                      </p>
                    </motion.div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-sky/30">
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-sky/10 text-sky">
                        <Icon icon={UserMultiple02Icon} size={23} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky">Industry Exposure</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">Agile & PM Seminars</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">
                        Participated in DIU CDC sessions with leaders from Brain Station 23, BJIT, and HawarIT, gaining practical exposure to real-world Agile frameworks and stakeholder communication.
                      </p>
                    </motion.div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH SECTION / DELIVERY CADENCE */}
        <section id="approach" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Operating Rhythm"
              title="A simple operating rhythm for getting work done."
              copy="The goal is not to add process for process's sake. It is to create just enough structure so teams understand priorities, what comes next, and where decisions are needed."
            />

            <div className="relative mt-14">
              <div className="absolute left-[25px] top-0 hidden h-full w-px bg-gradient-to-b from-aqua/40 via-sky/20 to-transparent md:block" />
              <div className="space-y-4">
                {deliverySteps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.04}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.25 }}
                      className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 md:grid-cols-[52px_1fr] md:items-start md:border-transparent md:bg-transparent md:p-0"
                    >
                      <div className="relative z-10 grid h-[52px] w-[52px] place-items-center rounded-2xl border border-white/10 bg-panel text-xs font-extrabold text-aqua shadow-glow">
                        {step.number}
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-sky/20 hover:bg-white/[0.05]">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                          <span className="text-xs font-semibold text-aqua/90 uppercase tracking-wider">{step.subtitle}</span>
                        </div>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-mist">{step.text}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CREDENTIALS SECTION */}
        <section id="credentials" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Credentials"
                  title="Learning built around modern project delivery."
                  copy="My professional development covers project management, Agile frameworks, SDLC models, AI-assisted project productivity, leadership, and quantitative analysis tools."
                />

                <Reveal className="mt-9 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky/[0.08] to-aqua/[0.04] p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky/10 text-sky">
                      <Icon icon={UniversityIcon} size={23} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky">Formal Education</p>
                      <h3 className="mt-2 font-display text-xl font-bold text-white">B.Sc. in Information Technology & Management</h3>
                      <p className="mt-1 text-sm font-medium text-white/90">Major in Project Management</p>
                      <p className="mt-1 text-xs text-mist">Daffodil International University (DIU)</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Certifications with skills learned */}
              <div className="space-y-3">
                {certifications.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.03}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-colors duration-200 hover:border-aqua/30 hover:bg-white/[0.05]"
                    >
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-aqua/10 text-aqua">
                        <Icon icon={CheckmarkBadge01Icon} size={17} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <p className="text-sm font-bold text-white">{item.title}</p>
                          <span className="text-xs text-aqua">{item.issuer}</span>
                        </div>
                        <p className="mt-1 text-xs text-mist">Skills: {item.skills}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CO-CURRICULAR ACTIVITIES */}
        <section id="activities" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Co-Curricular Activities"
              title="Exposure beyond coursework."
              copy="Hands-on organizational visits, volunteer community leadership, and collaborative industry sessions with leading technology firms."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {coCurricularActivities.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-7 transition-all duration-300 hover:border-aqua/30 hover:shadow-glow"
                  >
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-aqua transition-all duration-300 group-hover:border-aqua/30 group-hover:bg-aqua/10">
                          <Icon icon={activityIcons[index]} size={22} />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold tracking-wide text-mist">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-aqua">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-sky">{item.subtitle}</p>

                      <p className="mt-3 text-sm leading-7 text-mist">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-mist/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION / RECRUITER FAST-TRACK */}
        <section id="contact" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_90%,rgba(85,230,207,.12),transparent_42%)]" />
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's build structured, high-momentum project delivery."
              copy="I am actively looking for Associate Project Manager, Junior PM, and Project Coordinator opportunities where clear execution, stakeholder alignment, and data-informed problem-solving make a real impact."
              align="center"
            />

            {/* Direct Contact Action Badges */}
            <Reveal className="mt-10 flex flex-wrap justify-center gap-3.5">
              <a
                href="mailto:chowdhury2305191014@diu.edu.bd"
                className="group inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-aqua/20"
              >
                <Icon icon={Mail01Icon} size={18} />
                Send Email
                <Icon icon={ArrowRight01Icon} size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              <button
                onClick={() => handleCopy('chowdhury2305191014@diu.edu.bd', 'Email address', 'contact-email')}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua/30 hover:bg-white/[0.08]"
              >
                <Icon icon={copiedKey === 'contact-email' ? CheckmarkCircle01Icon : Copy01Icon} size={17} className={copiedKey === 'contact-email' ? 'text-aqua' : ''} />
                {copiedKey === 'contact-email' ? 'Copied Email!' : 'Copy Email'}
              </button>

              <a
                href="tel:+8801740901847"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/30 hover:bg-white/[0.08]"
              >
                <Icon icon={TelephoneIcon} size={17} />
                +880 1740-901847
              </a>

              <a
                href="/Shakib_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.045] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua/30 hover:bg-white/[0.08]"
              >
                <Icon icon={Download04Icon} size={17} />
                Download CV (PDF)
              </a>
            </Reveal>

            {/* Recruiter Notes Card */}
            <Reveal delay={0.1} className="mt-12 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-xs text-mist">
              <div className="flex items-center justify-center gap-2 text-white font-bold text-sm">
                <Icon icon={Location01Icon} size={16} className="text-aqua" />
                Dhaka, Bangladesh · Available for On-Site, Hybrid & Remote Roles
              </div>
              <p className="mt-2 text-mist/80">
                Notice Period: Immediate · Interested in Tech Companies, Startups, PMO Departments, and Cross-Functional Delivery Teams.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-mist sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Md Shakib Chowdhury. Project Manager Portfolio.</p>
          <div className="flex items-center gap-4">
            <a
              href="/Shakib_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-mist transition-colors hover:text-white"
            >
              Resume
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#top"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition-colors hover:text-aqua"
            >
              Back to top <Icon icon={ArrowDown01Icon} size={14} className="rotate-180" />
            </a>
          </div>
        </div>
      </footer>

      {/* FLOATING BACK TO TOP */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-panel/90 text-white shadow-glow backdrop-blur-xl transition-colors hover:border-aqua/40 hover:text-aqua"
            aria-label="Scroll back to top"
          >
            <Icon icon={ArrowDown01Icon} size={18} className="rotate-180" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FLOATING CLIPBOARD TOAST */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 rounded-2xl border border-aqua/30 bg-panel/95 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-black/60 backdrop-blur-xl"
          >
            <div className="grid h-6 w-6 place-items-center rounded-full bg-aqua/20 text-aqua">
              <Icon icon={CheckmarkCircle01Icon} size={15} />
            </div>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
