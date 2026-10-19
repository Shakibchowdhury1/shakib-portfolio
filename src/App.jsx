import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
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
} from '@hugeicons/core-free-icons'
import Icon from './components/Icon'
import Reveal from './components/Reveal'
import SectionHeading from './components/SectionHeading'
import { capabilities, certifications, deliverySteps, coCurricularActivities } from './data/portfolio'

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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-aqua selection:text-ink">
      <motion.div className="fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-aqua" style={{ scaleX }} />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-white/10 bg-ink/78 shadow-2xl shadow-black/10 backdrop-blur-2xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Go to top">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] font-display text-sm font-extrabold tracking-tight text-aqua shadow-glow transition-transform duration-300 group-hover:-translate-y-0.5">
              SC
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-bold tracking-tight">Md Shakib Chowdhury</div>
              <div className="text-[11px] text-mist">Project Manager</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-mist transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:chowdhury2305191014@diu.edu.bd"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-aqua/40 hover:bg-aqua hover:text-ink"
            >
              Let&apos;s talk
              <Icon icon={ArrowRight01Icon} size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={menuOpen ? Cancel01Icon : Menu01Icon} />
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-mist hover:bg-white/[0.06] hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main>
        <section id="top" className="relative isolate min-h-screen overflow-hidden pt-28">
          <div className="absolute inset-0 -z-20 bg-hero-grid bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-[18%] -z-10 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
          <div className="absolute bottom-10 left-[45%] -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/[0.07] px-3.5 py-2 text-xs font-semibold text-aqua"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                </span>
                Project management · Business analysis · Delivery
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl font-display text-[clamp(3rem,8vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.065em]"
              >
                I turn complex work into{' '}
                <span className="bg-gradient-to-r from-sky via-white to-aqua bg-clip-text text-transparent">clear momentum.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.17 }}
                className="mt-8 max-w-2xl text-base leading-8 text-mist sm:text-lg"
              >
                I&apos;m <strong className="font-semibold text-white">Md Shakib Chowdhury</strong>, a Project Manager with an IT & Management foundation — focused on planning, stakeholder coordination, Agile delivery, business analysis and data-informed decision support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-aqua"
                >
                  Explore my work
                  <Icon icon={ArrowDown01Icon} size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="/Shakib_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white/[0.08]"
                >
                  View CV
                  <Icon icon={Download04Icon} size={17} />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="absolute inset-8 rounded-[3rem] bg-sky/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Current focus</p>
                    <h3 className="mt-1 font-display text-xl font-bold">Delivery with clarity</h3>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-aqua/20 bg-aqua/10 text-aqua">
                    <Icon icon={Briefcase01Icon} size={24} />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['Planning', 'Structure goals into executable work.'],
                    ['People', 'Align stakeholders and team priorities.'],
                    ['Process', 'Use Agile + SDLC thinking to reduce friction.'],
                    ['Insight', 'Support decisions with data and analysis.'],
                  ].map(([label, text], index) => (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-white/10 bg-black/15 p-4"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.06] text-xs font-bold text-aqua">0{index + 1}</span>
                        <span className="font-display text-sm font-bold">{label}</span>
                      </div>
                      <p className="text-sm leading-6 text-mist">{text}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-sky/15 bg-sky/[0.055] p-5">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sky/10 text-sky">
                      <Icon icon={Award01Icon} size={19} />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold">1st Runner-Up · Project Showcasing 2025</p>
                      <p className="mt-1 text-sm leading-6 text-mist">Machine learning project focused on student academic performance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-5 -top-6 hidden rounded-2xl border border-white/10 bg-ink/90 px-4 py-3 shadow-glow backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-aqua/10 text-aqua"><Icon icon={AiInnovation01Icon} size={16} /></span>
                  AI-aware PM
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:px-10">
            <SectionHeading
              eyebrow="About"
              title="A project manager with a technology-first mindset."
              copy="My background combines Information Technology & Management with a major in Project Management. I work best where planning, analysis, communication and execution need to come together cleanly."
            />

            <Reveal className="grid gap-4 sm:grid-cols-3">
              {[
                ['7', 'PM / leadership / productivity trainings'],
                ['1st', 'Runner-Up in Project Showcasing 2025'],
                ['ITM', 'Technology + management foundation'],
              ].map(([value, label], i) => (
                <motion.div
                  key={value}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white">{value}</div>
                  <p className="mt-3 text-sm leading-6 text-mist">{label}</p>
                  <div className={`mt-6 h-1 rounded-full ${i === 0 ? 'bg-sky/50' : i === 1 ? 'bg-aqua/50' : 'bg-white/20'}`} />
                </motion.div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="capabilities" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Capabilities"
              title="The skills I bring to project delivery."
              copy="A balanced toolkit spanning planning, people, process, analysis and communication — designed to keep work moving with less ambiguity."
            />

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] p-6 transition-colors duration-300 hover:border-sky/25"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-sky transition-all duration-300 group-hover:border-aqua/25 group-hover:bg-aqua/10 group-hover:text-aqua">
                        <Icon icon={skillIcons[index]} size={23} />
                      </div>
                      <span className="text-xs font-semibold text-white/30">0{index + 1}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-mist">
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

        <section id="work" className="relative border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:72px_72px] opacity-50 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects, concepts & delivery in action."
              copy="From active mobile application concept planning to award-winning data research — turning user needs, workflows, and analysis into structured project deliverables."
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

                          <span className="rounded-full border border-aqua/25 bg-aqua/[0.08] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-aqua">
                            Ongoing Project
                          </span>
                        </div>

                        <h3 className="mt-5 max-w-3xl font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
                          A Smart Elder-Care Management System
                        </h3>
                        <p className="mt-4 max-w-3xl text-sm leading-7 text-mist sm:text-base">
                          Developing an academic mobile application concept focused on organizing elderly-care activities and supporting communication among family members, caregivers, and volunteers.
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-mist/80">Role-based scope:</span>
                          {['Administrators', 'Family Members', 'Nurses & Caregivers', 'Volunteers'].map((role) => (
                            <span
                              key={role}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/90"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm transition-colors hover:border-aqua/30">
                          <div className="mb-2 flex items-center gap-2.5 text-aqua">
                            <div className="grid h-7 w-7 place-items-center rounded-lg bg-aqua/10">
                              <Icon icon={WorkflowCircle06Icon} size={16} />
                            </div>
                            <div className="text-sm font-bold text-white">Role-Based Workflows</div>
                          </div>
                          <div className="mt-2 text-xs leading-5 text-mist">
                            Working on role-based user workflows and dashboard planning for administrators, family members, nurses/caregivers, and volunteers.
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm transition-colors hover:border-sky/30">
                          <div className="mb-2 flex items-center gap-2.5 text-sky">
                            <div className="grid h-7 w-7 place-items-center rounded-lg bg-sky/10">
                              <Icon icon={Calendar01Icon} size={16} />
                            </div>
                            <div className="text-sm font-bold text-white">Profiles & Scheduling</div>
                          </div>
                          <div className="mt-2 text-xs leading-5 text-mist">
                            Planning key features such as resident profiles, daily wellbeing updates, and visit scheduling.
                          </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm transition-colors hover:border-rose-400/30">
                          <div className="mb-2 flex items-center gap-2.5 text-rose-400">
                            <div className="grid h-7 w-7 place-items-center rounded-lg bg-rose-400/10">
                              <Icon icon={Alert01Icon} size={16} />
                            </div>
                            <div className="text-sm font-bold text-white">Emergency SOS Support</div>
                          </div>
                          <div className="mt-2 text-xs leading-5 text-mist">
                            Planning emergency SOS support with quick-trigger alerts to notify caregivers and family members during urgent situations.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>

              {/* Research Project & Supporting Cards Grid */}
              <div className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
                <Reveal delay={0.05}>
                  <motion.article
                    whileHover={{ y: -4 }}
                    className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-panel/80 shadow-glow"
                  >
                    <div className="relative min-h-[360px] overflow-hidden p-7 sm:p-9">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(85,230,207,.16),transparent_34%),radial-gradient(circle_at_20%_100%,rgba(124,200,255,.16),transparent_38%)]" />
                      <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between">
                        <div>
                          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-aqua/20 bg-aqua/[0.08] px-3 py-1.5 text-xs font-semibold text-aqua">
                            <Icon icon={AnalyticsUpIcon} size={15} /> Research & Project Experience
                          </div>
                          <h3 className="max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                            Student Academic Performance Using Machine Learning Techniques
                          </h3>
                          <p className="mt-5 max-w-2xl text-sm leading-7 text-mist sm:text-base">
                            A research-oriented project focused on predicting student academic performance using educational datasets and evaluating factors associated with academic success.
                          </p>
                        </div>

                        <div className="mt-10 grid gap-3 sm:grid-cols-3">
                          {[
                            ['Data preparation', 'Preprocessing and feature-selection concepts'],
                            ['Model evaluation', 'Compared predictive approaches and inputs'],
                            ['Project insight', 'Translated analytical findings into clear takeaways'],
                          ].map(([title, text]) => (
                            <div key={title} className="rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm">
                              <div className="text-sm font-bold text-white">{title}</div>
                              <div className="mt-2 text-xs leading-5 text-mist">{text}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>

                <div className="grid gap-5">
                  <Reveal delay={0.1}>
                    <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-aqua/10 text-aqua">
                        <Icon icon={Award01Icon} size={23} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">Achievement</p>
                      <h3 className="mt-3 font-display text-2xl font-bold">1st Runner-Up</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">Project Showcasing Competition 2025 · Machine Learning Project.</p>
                    </motion.div>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <motion.div whileHover={{ y: -4 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-sky/10 text-sky">
                        <Icon icon={UserMultiple02Icon} size={23} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky">Industry exposure</p>
                      <h3 className="mt-3 font-display text-2xl font-bold">Project & career seminars</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">Participated in DIU CDC sessions with professionals from Brain Station 23, BJIT and HawarIT, with exposure to project planning, Agile practices and stakeholder management.</p>
                    </motion.div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Approach"
              title="A simple operating rhythm for getting work done."
              copy="The goal is not to add process for process&apos;s sake. It is to create just enough structure so people know what matters, what comes next and where decisions are needed."
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
                        <h3 className="font-display text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-mist">{step.text}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="credentials" className="border-y border-white/10 bg-white/[0.018] py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Credentials"
                  title="Learning built around modern project delivery."
                  copy="My training covers project management, Agile, SDLC, AI-assisted project work, leadership and practical productivity tools."
                />

                <Reveal className="mt-9 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky/[0.08] to-aqua/[0.04] p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky/10 text-sky"><Icon icon={UniversityIcon} size={23} /></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky">Education</p>
                      <h3 className="mt-2 font-display text-xl font-bold">B.Sc. in Information Technology & Management</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">Daffodil International University · Major in Project Management</p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="space-y-3">
                {certifications.map((item, index) => (
                  <Reveal key={item} delay={index * 0.035}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition-colors duration-300 hover:border-aqua/20 hover:bg-white/[0.05]"
                    >
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-aqua/10 text-aqua">
                        <Icon icon={CheckmarkBadge01Icon} size={17} />
                      </div>
                      <p className="text-sm leading-6 text-white/90">{item}</p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Co-Curricular Activities"
              title="Exposure beyond coursework."
              copy="Hands-on organizational visits, volunteer service, and industry-led project management and Agile learning sessions."
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

        <section id="contact" className="relative py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_90%,rgba(85,230,207,.10),transparent_38%)]" />
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <SectionHeading
              eyebrow="Contact"
              title="Have a project that needs structure, alignment and momentum?"
              copy="I&apos;m interested in project delivery, PMO, business analysis and cross-functional coordination opportunities where clear execution matters."
              align="center"
            />

            <Reveal className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:chowdhury2305191014@diu.edu.bd"
                className="group inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <Icon icon={Mail01Icon} size={18} />
                Email me
                <Icon icon={ArrowRight01Icon} size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+8801740901847"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-sky/30 hover:bg-white/[0.07]"
              >
                <Icon icon={TelephoneIcon} size={18} />
                +880 1740-901847
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-mist sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Md Shakib Chowdhury. Built with React, TailwindCSS & Framer Motion.</p>
          <a href="#top" className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-aqua">
            Back to top <Icon icon={ArrowDown01Icon} size={16} className="rotate-180" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
