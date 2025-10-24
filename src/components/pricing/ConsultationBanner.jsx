import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare } from 'lucide-react'

const ConsultationBanner = ({ consultation, ctaBanner }) => {
  return (
    <section className="section-shell" aria-labelledby="consultation-heading">
      <div className="container-light space-y-12">
        <motion.div
          className="rounded-3xl border border-ui-border bg-white px-8 py-10 shadow-subtle md:px-12 md:py-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-1 text-sm font-medium text-accent-primary">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Complimentary Consultation
              </span>
              <h2 id="consultation-heading" className="text-3xl font-display font-semibold text-text-primary md:text-4xl">
                {consultation.headline}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {consultation.description}
              </p>
              <ul className="grid gap-3 text-sm text-text-secondary sm:grid-cols-2">
                {consultation.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary"></span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-tertiary">
                Prefer email? <a href={`mailto:${consultation.contactEmail}`} className="font-medium text-accent-primary underline-offset-4 hover:underline">{consultation.contactEmail}</a>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://cal.com/techinium/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {consultation.ctaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-xs text-text-secondary text-center">
                No pressure, just clarity on next steps.
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl bg-accent-gradient text-white px-10 py-12 shadow-[0_24px_60px_rgba(233,30,99,0.35)]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="flex flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Let’s build together</p>
              <h3 className="text-2xl font-display font-semibold md:text-3xl">
                {ctaBanner.title}
              </h3>
              <p className="text-base text-white/80 md:max-w-xl">
                {ctaBanner.description}
              </p>
            </div>
            <a
              href={ctaBanner.ctaHref}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {ctaBanner.ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConsultationBanner
