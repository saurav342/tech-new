import { motion } from 'framer-motion'
import { Plus, CreditCard, CheckCircle2 } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const AddOns = ({ services, paymentPlans }) => {
  return (
    <section className="section-shell" aria-labelledby="addons-heading">
      <div className="container-light space-y-16">
        <div className="max-w-3xl">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-accent-primary/10 px-4 py-1 text-sm font-medium text-accent-primary"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Add-on Services
          </motion.span>
          <motion.h2
            id="addons-heading"
            className="mt-4 text-3xl font-display font-semibold text-text-primary md:text-4xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            Fine-tune your engagement with flexible add-ons
          </motion.h2>
          <motion.p
            className="mt-3 text-lg text-text-secondary"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            Mix and match modular services to extend your roadmap, add growth channels, or keep momentum post-launch.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="relative h-full rounded-3xl border border-ui-border bg-white p-8 shadow-subtle transition-all duration-500 hover:-translate-y-2 hover:shadow-soft"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-semibold text-text-primary">{service.title}</h3>
              <ul className="mt-6 space-y-4">
                {service.items.map((item) => (
                  <li key={item.name} className="rounded-2xl bg-bg-secondary/70 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-base font-medium text-text-primary">{item.name}</span>
                      <span className="text-sm font-semibold text-accent-primary">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl border border-ui-border bg-bg-secondary/90 px-8 py-10 shadow-subtle">
          <motion.div
            className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                <CreditCard className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
                Payment Plans
              </span>
              <h3 className="mt-4 text-2xl font-display font-semibold text-text-primary">
                Flexible options designed around your cash flow
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                Pick a structure that keeps momentum without straining budgets. Every approach includes transparent milestones and weekly updates.
              </p>
            </div>
            <div className="grid w-full max-w-3xl gap-4 md:grid-cols-3">
              {paymentPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="flex h-full flex-col rounded-2xl border border-ui-border bg-white p-5 transition-all duration-300 hover:border-accent-primary/60 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-text-primary">{plan.title}</h4>
                    <CheckCircle2 className="h-4 w-4 text-accent-primary" aria-hidden="true" />
                  </div>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{plan.description}</p>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    {plan.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent-primary">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AddOns
