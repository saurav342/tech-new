import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

/**
 * FAQ Section Component - Light Agency Theme
 * 
 * Features:
 * - Accordion-style FAQ with 4 items
 * - Smooth expand/collapse animations
 * - Accessible keyboard navigation
 * - Clean, minimal design
 * 
 * Props:
 * - onContactClick: Function to handle CTA clicks
 */
const FAQ = ({ onContactClick }) => {
  const [openItems, setOpenItems] = useState(new Set())

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary depending on scope and complexity. Most landing pages take 2-4 weeks, while full product designs can take 6-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      id: 2,
      question: 'What is included in the design process?',
      answer: 'Our design process includes research, wireframing, visual design, prototyping, and development. We also provide copywriting, 3D models, and post-launch support as part of our comprehensive packages.'
    },
    {
      id: 3,
      question: 'Do you offer post-launch support?',
      answer: 'Yes! All our packages include at least 1 month of free support after launch. We also offer extended support packages for ongoing maintenance and updates.'
    },
    {
      id: 4,
      question: 'Can I customize the package?',
      answer: 'Absolutely! We understand that every project is unique. We can customize any package to fit your specific needs and budget. Contact us to discuss your requirements.'
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, PayPal, and cryptocurrency. Payment terms are typically 50% upfront and 50% on delivery, but we can discuss flexible arrangements.'
    }
  ]

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="bg-bg-secondary py-16 sm:py-20 md:py-24 lg:py-32" role="region" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-5 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            If you don't find your answer here, feel free to reach out!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-bg-primary rounded-2xl shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-bg-tertiary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-inset"
                aria-expanded={openItems.has(faq.id)}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.has(faq.id) ? (
                    <Minus className="w-6 h-6 text-accent-primary" />
                  ) : (
                    <Plus className="w-6 h-6 text-accent-primary" />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-6">
            Still have questions? We'd love to hear from you.
          </p>
          <button
            onClick={() => onContactClick && onContactClick()}
            className="bg-accent-gradient text-white px-8 py-4 rounded-xl font-medium hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
            aria-label="Contact us with your questions"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ