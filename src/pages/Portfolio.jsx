import { useEffect } from 'react'
import { Globe, ExternalLink, Smartphone, Apple, ArrowRight, CheckCircle2 } from 'lucide-react'
import { portfolioProjects } from '../data/portfolio'

const Portfolio = ({ onContactClick }) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
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

  const formatVerifiedDate = (isoDate) => {
    if (!isoDate) return null
    const date = new Date(isoDate)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen">
      <section className="gradient-bg text-white section-padding" role="banner">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Real Products Built with Techinium
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              A snapshot of digital products we have shipped across mobility, marketplaces, SaaS, and commerce. Each engagement is tailored to the team, the market, and the growth stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onContactClick?.('Portfolio Inquiry')}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
              >
                Discuss your build
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://cal.com/techinium/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white/50 px-6 py-3 rounded-lg font-semibold text-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
              >
                Book a 15-min call
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-14 animate-on-scroll">
            <div className="inline-flex items-center gap-2 text-accent-primary font-semibold mb-4 uppercase tracking-wide text-sm">
              <CheckCircle2 className="w-4 h-4" />
              Verified Launches
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product snapshots by industry
            </h2>
            <p className="text-lg text-gray-600">
              Every build is staffed with a dedicated squad—design, engineering, QA, and product ops. Below is a quick overview of the platforms we maintain and the channels where they are live.
            </p>
          </div>

          <div className="space-y-10">
            {portfolioProjects.map((project) => {
              const androidVerified = formatVerifiedDate(project.android?.verifiedOn)
              const iosVerified = formatVerifiedDate(project.ios?.verifiedOn)

              return (
                <article
                  key={project.id}
                  className="bg-white border border-ui-border rounded-3xl px-6 sm:px-10 py-10 shadow-lg shadow-black/5 animate-on-scroll"
                >
                  <div className="flex flex-wrap items-start gap-6 sm:gap-10">
                    <div className="flex-1 min-w-[260px]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/20 text-accent-primary">
                          <Globe className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900">{project.name}</h3>
                          <p className="text-sm text-gray-500">
                            {project.sector || 'Industry details coming soon'}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        {project.engagement && (
                          <div>
                            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                              Engagement focus
                            </p>
                            <p className="text-base text-gray-600">{project.engagement}</p>
                          </div>
                        )}

                        <div>
                          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                            Deliverables
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.deliverables.map((item) => (
                              <span
                                key={item}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-accent-primary font-semibold">
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:underline"
                          >
                            Visit live site
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-[260px] w-full sm:max-w-md space-y-6">
                      <div className="bg-gray-50 border border-ui-border rounded-2xl p-5">
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Distribution channels
                        </p>
                        <div className="space-y-4">
                          {project.android ? (
                            <div>
                              <div className="flex items-center gap-2 text-gray-800 font-medium mb-1">
                                <Smartphone className="w-4 h-4 text-accent-primary" />
                                Android (Google Play)
                              </div>
                              <div className="text-sm text-gray-600 space-y-1">
                                {project.android.rating && <p>Rating: {project.android.rating}</p>}
                                {project.android.downloads && <p>Downloads: {project.android.downloads}</p>}
                                {androidVerified && <p>Verified on {androidVerified}</p>}
                              </div>
                              <a
                                href={project.android.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
                              >
                                View on Google Play
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          ) : (
                            <p className="text-sm text-gray-500">
                              Android listing not part of this engagement.
                            </p>
                          )}

                          <div className="border-t border-ui-border pt-4">
                            {project.ios ? (
                              <div>
                                <div className="flex items-center gap-2 text-gray-800 font-medium mb-1">
                                  <Apple className="w-4 h-4 text-gray-900" />
                                  iOS (App Store)
                                </div>
                                <div className="text-sm text-gray-600 space-y-1">
                                  {project.ios.rating && <p>Rating: {project.ios.rating}</p>}
                                  {project.ios.downloads && <p>Downloads: {project.ios.downloads}</p>}
                                  {iosVerified && <p>Verified on {iosVerified}</p>}
                                </div>
                                <a
                                  href={project.ios.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-primary hover:underline"
                                >
                                  View on App Store
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            ) : (
                              <p className="text-sm text-gray-500">
                                iOS listing not included or data pending.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build a product that ships and scales
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Whether you are validating a concept or scaling a live platform, we plug in squad-based teams that thrive on fast iteration and measurable outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onContactClick?.('Portfolio Follow-up')}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/60 transition-colors"
              >
                Start a project
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="https://cal.com/techinium/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white/30 px-6 py-3 rounded-lg font-semibold text-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-colors"
              >
                Quick discovery call
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

