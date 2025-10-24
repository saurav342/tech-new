import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Sparkles } from 'lucide-react'

const TierCard = ({ tier, categoryLabel = '' }) => {
  const {
    emoji,
    tierLabel,
    title,
    priceUsd,
    priceInr,
    timeline,
    idealFor,
    features,
    ctaLabel,
    isFeatured,
    isPremium,
    id,
  } = tier

  const highlightClasses = isPremium
    ? 'bg-gradient-to-br from-orange-50 via-pink-50 to-white border-transparent shadow-[0_20px_50px_rgba(255,107,53,0.18)]'
    : isFeatured
      ? 'border-accent-primary/60 shadow-[0_18px_40px_rgba(255,107,53,0.12)]'
      : 'border-ui-border shadow-subtle'

  const eyebrowClasses = isPremium
    ? 'bg-accent-primary/15 text-accent-primary'
    : isFeatured
      ? 'bg-accent-secondary/10 text-accent-secondary'
      : 'bg-secondary-100 text-text-secondary'

  const linkHref = `/contact?service=${categoryLabel?.toLowerCase().replace(/\s+/g, '-')}&tier=${id}`

  return (
    <motion.article
      initial={{ opacity: 0, translateY: 40 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative h-full rounded-3xl border bg-bg-primary p-8 flex flex-col gap-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-soft ${highlightClasses}`}
    >
      {isFeatured && !isPremium && (
        <span className="absolute -top-3 right-8 inline-flex items-center gap-2 rounded-full bg-accent-primary text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Popular
        </span>
      )}

      <header className="space-y-4">
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium ${eyebrowClasses}`}>
          <span aria-hidden="true" className="text-base">{emoji}</span>
          <span>{tierLabel}</span>
        </div>
        <h3 className="text-2xl font-semibold text-text-primary font-display">
          {title}
        </h3>
        <div className="flex flex-wrap items-baseline gap-3 text-text-primary">
          <span className="text-3xl font-bold">{priceUsd}</span>
          <span className="text-text-secondary font-medium">{priceInr}</span>
        </div>
        <p className="text-text-secondary leading-relaxed">
          {idealFor}
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-sm font-medium text-text-secondary bg-bg-secondary/80 border border-ui-border rounded-2xl px-4 py-2 w-fit">
          <Clock className="h-4 w-4 text-accent-primary" aria-hidden="true" />
          Timeline: {timeline}
        </div>

        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3 items-start">
              <div className="mt-1 rounded-full bg-accent-primary/10 text-accent-primary p-1.5">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="text-sm text-text-secondary leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-4">
        <a
          href={linkHref}
          className={`w-full inline-flex justify-center items-center gap-2 rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${
            isPremium
              ? 'bg-accent-gradient text-white shadow-[0_10px_30px_rgba(233,30,99,0.35)] hover:shadow-[0_16px_45px_rgba(233,30,99,0.45)]'
              : 'cta-primary justify-center'
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </motion.article>
  )
}

export default TierCard
