import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Check } from 'lucide-react'

const GuaranteeSection = ({ guaranteePoints, differentiators }) => {
  return (
    <section className="section-shell surface-alt" aria-labelledby="guarantee-heading">
      <div className="container-light grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          className="rounded-3xl border border-ui-border bg-white/90 p-10 shadow-subtle backdrop-blur"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-1 text-sm font-medium text-accent-primary">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Satisfaction Guarantee
          </span>
          <h2 id="guarantee-heading" className="mt-4 text-3xl font-display font-semibold text-text-primary md:text-4xl">
            We stand behind every release
          </h2>
          <p className="mt-3 text-lg text-text-secondary leading-relaxed">
            Accountability and clarity fuel every delivery. If something feels off, we fix it—fast.
          </p>
          <ul className="mt-6 space-y-4">
            {guaranteePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-2xl border border-ui-border bg-bg-secondary/80 p-4">
                <Check className="mt-1 h-4 w-4 text-accent-primary" aria-hidden="true" />
                <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-accent-secondary/30 bg-gradient-to-br from-orange-50 via-pink-50 to-white p-10 shadow-[0_24px_60px_rgba(255,107,53,0.18)]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
            <Sparkles className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
            Why Techinium
          </span>
          <h3 className="mt-4 text-2xl font-display font-semibold text-text-primary">
            Premium-grade execution, startup-friendly pace
          </h3>
          <ul className="mt-5 space-y-4">
            {differentiators.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white/80 p-4">
                <p className="text-base font-semibold text-text-primary">{item.title}</p>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default GuaranteeSection
