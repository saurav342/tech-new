import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Icons from 'lucide-react'

const dropdownVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.98 },
}

const PricingTabs = ({ categories, activeCategoryId, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const activeCategory = useMemo(
    () => categories.find((category) => category.id === activeCategoryId) ?? categories[0],
    [categories, activeCategoryId],
  )

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectCategory = (categoryId) => {
    onChange(categoryId)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 rounded-3xl border border-white/80 bg-white/95 px-5 py-4 shadow-[0_22px_60px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.14)] focus:outline-none focus:ring-2 focus:ring-accent-primary/70"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-primary/10 text-accent-primary">
            {(() => {
              const Icon = Icons[activeCategory?.icon] ?? Icons.LayoutGrid
              return <Icon className="h-5 w-5" aria-hidden="true" />
            })()}
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-secondary/70">Service</p>
            <p className="text-base font-semibold text-accent-primary">{activeCategory?.label}</p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-text-secondary"
        >
          <Icons.ChevronDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-30 mt-4 rounded-3xl border border-white/80 bg-white/92 p-4 shadow-[0_38px_85px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            role="listbox"
            aria-label="Select pricing category"
          >
            <div className="flex flex-col gap-2">
              {categories.map((category) => {
                const Icon = Icons[category.icon] ?? Icons.LayoutGrid
                const isActive = activeCategoryId === category.id

                return (
                  <motion.button
                    key={category.id}
                    type="button"
                    onClick={() => handleSelectCategory(category.id)}
                    className={`group flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-white shadow-[0_14px_40px_rgba(255,107,53,0.18)]'
                        : 'hover:bg-white'
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${
                        isActive
                          ? 'border-transparent bg-accent-primary/10 text-accent-primary'
                          : 'border-ui-border bg-white text-text-secondary group-hover:text-accent-primary'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isActive ? 'text-accent-primary' : 'text-text-secondary group-hover:text-text-primary'
                      }`}
                    >
                      {category.label}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PricingTabs
