import { useEffect, useMemo } from 'react'
import {
  Globe,
  ExternalLink,
  Smartphone,
  Apple,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Rocket,
  CalendarCheck2,
} from 'lucide-react'
import { portfolioProjects } from '../data/portfolio'

const Portfolio = ({ onContactClick }) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const { totalProjects, totalDeliverables, appListings } = useMemo(() => {
    const deliverableSet = new Set()
    let totalListings = 0

    portfolioProjects.forEach((project) => {
      project.deliverables.forEach((deliverable) => deliverableSet.add(deliverable))
      if (project.android) totalListings += 1
      if (project.ios) totalListings += 1
    })

    return {
      totalProjects: portfolioProjects.length,
      totalDeliverables: deliverableSet.size,
      appListings: totalListings,
    }
  }, [])

  const formatVerifiedDate = (isoDate) => {
    if (!isoDate) return null
    const date = new Date(isoDate)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const renderDistributionBlock = (icon, listing, storeLabel) => {
    if (!listing) return null

    const verified = formatVerifiedDate(listing.verifiedOn)

    return (
      <div className="rounded-2xl bg-white/50 border border-white/60 p-5">
        <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
          {icon}
          {storeLabel}
        </div>
        <dl className="space-y-1 text-sm text-slate-600">
          {listing.rating && (
            <div className="flex justify-between">
              <dt>Rating</dt>
              <dd className="font-medium text-slate-800">{listing.rating}</dd>
            </div>
          )}
          {listing.downloads && (
            <div className="flex justify-between">
              <dt>Downloads</dt>
              <dd className="font-medium text-slate-800">{listing.downloads}</dd>
            </div>
          )}
          {verified && (
            <div className="flex justify-between">
              <dt>Verified</dt>
              <dd className="font-medium text-slate-800">{verified}</dd>
            </div>
          )}
        </dl>
        <a
          href={listing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
        >
          View listing
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    )
  }

  const renderProject = (project, index) => {
    const isEven = index % 2 === 0

    return (
      <article
        key={project.id}
        className="relative overflow-hidden rounded-[32px] border border-ui-border bg-gradient-to-br from-white via-white to-slate-50 shadow-xl shadow-slate-900/5 animate-on-scroll"
      >
        <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-accent-primary/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-300/30 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.6fr_1fr] px-6 sm:px-10 py-12">
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-accent-primary">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-primary/10 text-accent-primary">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                Case Study
              </div>
              <span className="text-sm font-medium text-slate-500">
                {project.sector || 'Sector coming soon'}
              </span>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-3">
                {project.name}
              </h3>
              {project.engagement && (
                <p className="text-lg text-slate-600 max-w-2xl">
                  {project.engagement}. Built as a multi-disciplinary squad to align product velocity with growth goals.
                </p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 border border-white px-5 py-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                  <Layers className="w-4 h-4 text-accent-primary" />
                  Key Deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-100/70 px-3 py-1 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white/90 border border-white px-5 py-6 shadow-sm">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                  <Rocket className="w-4 h-4 text-accent-primary" />
                  Outcomes
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-primary" />
                    <span>Full digital footprint delivered end-to-end by Techinium.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-primary" />
                    <span>Product launch support covering QA, distribution, and analytics instrumentation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-primary" />
                    <span>Ongoing iteration roadmap aligned with growth milestones.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-accent-primary hover:underline"
              >
                Visit live experience
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => onContactClick?.(`${project.name} Portfolio`)}
                className="inline-flex items-center gap-2 rounded-full border border-accent-primary/40 bg-white px-4 py-2 text-sm font-semibold text-accent-primary shadow-sm hover:border-accent-primary hover:bg-accent-primary/10 transition-colors"
              >
                Talk about a similar build
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className={`relative rounded-[28px] border border-white/40 bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white p-6 sm:p-8 ${isEven ? 'order-first lg:order-none' : ''}`}>
            <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)] opacity-90" aria-hidden="true" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/10 p-3">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">Go-to-market</p>
                  <p className="text-lg font-semibold">Distribution & Signals</p>
                </div>
              </div>

              <div className="space-y-4">
                {renderDistributionBlock(<Smartphone className="w-4 h-4 text-accent-primary" />, project.android, 'Google Play')}
                {renderDistributionBlock(<Apple className="w-4 h-4 text-white" />, project.ios, 'App Store')}
              </div>

              {!(project.android || project.ios) && (
                <div className="rounded-2xl border border-white/30 bg-white/10 p-5 text-sm text-white/70">
                  Web-first product with analytics dashboards and growth experiments delivered post-launch.
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-custom grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em]">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
                Launch partners who scaled with Techinium squads
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl">
                Full-stack product launches shipped across mobility, agritech, marketplaces, and SaaS. We pair lightning-fast execution with growth experimentation so every release lands with momentum.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onContactClick?.('Portfolio Discovery Call')}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-slate-100 transition-colors"
                >
                  Start a brief with us
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://cal.com/techinium/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Book a 15-min call
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-8 space-y-6">
              <h2 className="text-xl font-semibold text-white/90">
                Every Techinium engagement includes
              </h2>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>Cross-functional team spanning product, design, engineering, QA, and growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>AI-accelerated sprints with embedded analytics and release automation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                  <span>Lifecycle playbooks covering launch support, feedback loops, and post-release care.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom py-16">
          <div className="grid gap-6 sm:grid-cols-3 animate-on-scroll">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 mb-2">
                Products
              </p>
              <p className="text-4xl font-semibold text-slate-900 mb-1">{totalProjects}</p>
              <p className="text-sm text-slate-500">Shipped across mobility, agritech, SaaS, and commerce.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 mb-2">
                Capabilities
              </p>
              <p className="text-4xl font-semibold text-slate-900 mb-1">{totalDeliverables}+</p>
              <p className="text-sm text-slate-500">Distinct deliverables covered per engagement.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500 mb-2">
                App Listings
              </p>
              <p className="text-4xl font-semibold text-slate-900 mb-1">{appListings}</p>
              <p className="text-sm text-slate-500">Live on Google Play and App Store with continuous updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-custom space-y-12">
          <div className="max-w-3xl space-y-4 animate-on-scroll">
            <div className="inline-flex items-center gap-2 text-accent-primary font-semibold uppercase tracking-wide text-sm">
              <CalendarCheck2 className="w-5 h-5" />
              Recent launches
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Execution first. Every project ships with measurable signals.
            </h2>
            <p className="text-lg text-slate-600">
              Browse a curated view of how founders and functional teams partner with Techinium. We align scope and velocity to growth targets so each release creates momentum, not backlog.
            </p>
          </div>

          <div className="space-y-12">
            {portfolioProjects.map((project, index) => renderProject(project, index))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-black text-white">
        <div className="absolute inset-0 pointer-events-none opacity-80" aria-hidden="true">
          <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-60 w-60 rounded-full bg-indigo-500/30 blur-3xl" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-custom max-w-4xl space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Let’s architect your next launch—design, engineering, automation, and GTM, together.
            </h2>
            <p className="text-lg text-white/70">
              Share your roadmap and we will map the squad, sprints, and milestones to reach first-release and beyond. Expect a collaborative session, not a sales pitch.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onContactClick?.('Portfolio CTA')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-slate-100 transition-colors"
              >
                Scope a build together
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://cal.com/techinium/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Book a 15-min intro
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
