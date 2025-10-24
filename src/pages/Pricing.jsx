import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { pricingCategories, addOnServices, paymentPlans, satisfactionGuarantee, consultationDetails, whyTechiniumList, ctaBanner } from '../data/pricing'
import CheckoutModal from '../components/pricing/CheckoutModal'
import PricingTabs from '../components/pricing/PricingTabs'
import TierCard from '../components/pricing/TierCard'
import AddOns from '../components/pricing/AddOns'
import GuaranteeSection from '../components/pricing/GuaranteeSection'
import ConsultationBanner from '../components/pricing/ConsultationBanner'

const Pricing = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(pricingCategories[0]?.id ?? '')
  const [selectedTier, setSelectedTier] = useState(null)
  const [selectedCategoryLabel, setSelectedCategoryLabel] = useState('')
  const [checkoutStage, setCheckoutStage] = useState('idle')
  const [selectedAmountPaise, setSelectedAmountPaise] = useState(null)
  const [paymentDetails, setPaymentDetails] = useState(null)
  const [checkoutError, setCheckoutError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Pricing | Techinium'
  }, [])

  const parseInrToPaise = (value) => {
    if (!value) return null

    const normalized = String(value).replace(/[^\d.]/g, '')
    if (!normalized) return null

    const amount = parseFloat(normalized)
    if (!Number.isFinite(amount) || amount <= 0) return null

    return Math.round(amount * 100)
  }

  const activeCategory = pricingCategories.find((category) => category.id === activeCategoryId) ?? pricingCategories[0]

  const handleTierSelect = (tier, categoryLabel) => {
    setSelectedTier(tier)
    setSelectedCategoryLabel(categoryLabel)
    setPaymentDetails(null)
    setCheckoutError(null)
    const amount = parseInrToPaise(tier?.priceInr)
    setSelectedAmountPaise(amount)
    setCheckoutStage('review')
  }

  const handleCloseCheckout = () => {
    setCheckoutStage('idle')
    setSelectedTier(null)
    setSelectedCategoryLabel('')
    setCheckoutError(null)
    setSelectedAmountPaise(null)
  }

  const handlePaymentSuccess = (details) => {
    setPaymentDetails(details)
    setCheckoutStage('success')
  }

  const handleCheckoutError = (message) => {
    setCheckoutError(message)
    setCheckoutStage('error')
  }

  const handleStageChange = (nextStage) => {
    if (nextStage === 'review') {
      setCheckoutError(null)
    }
    setCheckoutStage(nextStage)
  }

  return (
    <div className="bg-gradient-to-b from-white via-white to-bg-secondary text-text-primary">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ui-border bg-gradient-to-b from-white via-bg-secondary/60 to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent-primary/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-secondary/10 blur-3xl"></div>
        </div>
        <div className="container-light relative z-10 flex flex-col gap-12 py-24 md:py-32">
          <motion.div
            className="max-w-3xl space-y-5"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary shadow-subtle backdrop-blur">
              Pricing
            </span>
            <h1 className="font-display text-4xl leading-tight text-text-primary md:text-5xl">
              Transparent, Scalable Pricing for Every Stage of Growth.
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
              From startups to enterprises — choose a plan that fits your ambition. Every tier combines strategy, design, build, and post-launch momentum so you ship faster with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-subtle backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary/80">Why founders choose us</p>
              <p className="mt-3 text-base font-medium text-text-primary">Flat pricing, high-touch delivery, zero surprises.</p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-subtle backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary/80">Average timeline</p>
              <p className="mt-3 text-base text-text-secondary leading-relaxed">Launch-ready deliverables in as little as 3 days, enterprise programs up to 48 weeks.</p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/90 p-6 shadow-subtle backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-text-secondary/80">What&apos;s included</p>
              <p className="mt-3 text-base text-text-secondary leading-relaxed">Product strategy, design, engineering, QA, deployment, and support for every tier.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Tiers */}
      <section className="relative section-shell -mt-24 md:-mt-32">
        <div className="container-light">
          <div className="rounded-[36px] border border-white/60 bg-white/80 shadow-[0_45px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl px-6 py-10 md:px-12 md:py-14 space-y-10 lg:space-y-12">
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                <PricingTabs
                  categories={pricingCategories}
                  activeCategoryId={activeCategory.id}
                  onChange={setActiveCategoryId}
                />
              </div>
            </div>

            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="mx-auto max-w-3xl text-center md:text-left">
                <motion.h2
                  className="text-3xl font-display font-semibold text-text-primary md:text-4xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                >
                  {activeCategory.label}
                </motion.h2>
                <motion.p
                  className="mt-3 text-lg text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: 0.07 }}
                >
                  {activeCategory.description}
                </motion.p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory.id}-tiers`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {activeCategory.tiers.map((tier) => (
                    <TierCard
                      key={tier.id}
                      tier={tier}
                      categoryLabel={activeCategory.label}
                      onSelectTier={handleTierSelect}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>

      <div className="section-shell pt-0">
        <div className="container-light space-y-16">
          <AddOns services={addOnServices} paymentPlans={paymentPlans} />
          <GuaranteeSection guaranteePoints={satisfactionGuarantee} differentiators={whyTechiniumList} />
          <ConsultationBanner consultation={consultationDetails} ctaBanner={ctaBanner} />
        </div>
      </div>

      <CheckoutModal
        stage={checkoutStage}
        tier={selectedTier}
        categoryLabel={selectedCategoryLabel}
        amountInPaise={selectedAmountPaise}
        paymentDetails={paymentDetails}
        error={checkoutError}
        onClose={handleCloseCheckout}
        onPaymentSuccess={handlePaymentSuccess}
        onPaymentError={handleCheckoutError}
        onStageChange={handleStageChange}
      />
    </div>
  )
}

export default Pricing
