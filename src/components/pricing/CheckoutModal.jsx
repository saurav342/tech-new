import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, CalendarCheck, CheckCircle2, ExternalLink, Loader2, ShieldCheck, X, XCircle } from 'lucide-react'

const RAZORPAY_CHECKOUT_URL = 'https://checkout.razorpay.com/v1/checkout.js'
let razorpayLoaderPromise = null

const ensureRazorpayIsAvailable = () => {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Razorpay checkout is only available in the browser.'))
  }

  if (window.Razorpay) {
    return Promise.resolve(window.Razorpay)
  }

  if (!razorpayLoaderPromise) {
    razorpayLoaderPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = RAZORPAY_CHECKOUT_URL
      script.async = true
      script.onload = () => resolve(window.Razorpay)
      script.onerror = () => reject(new Error('Failed to load Razorpay checkout.'))
      document.body.appendChild(script)
    })
  }

  return razorpayLoaderPromise
}

const derivePlanKey = (tierId = '') =>
  `VITE_RAZORPAY_PLAN_${tierId.replace(/-/g, '_').toUpperCase()}`

const CheckoutModal = ({
  stage = 'idle',
  tier,
  categoryLabel,
  paymentDetails,
  error,
  onClose,
  onPaymentSuccess,
  onPaymentError,
  onStageChange,
}) => {
  const [mounted, setMounted] = useState(false)
  const [internalError, setInternalError] = useState(null)
  const [scheduleConfirmed, setScheduleConfirmed] = useState(false)

  const isOpen = Boolean(tier) && stage !== 'idle'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setInternalError(null)
    }
  }, [isOpen])

  useEffect(() => {
    if (stage !== 'success') {
      setScheduleConfirmed(false)
    }
  }, [stage])

  const planKey = useMemo(() => (tier ? derivePlanKey(tier.id) : ''), [tier])
  const planId = useMemo(() => (tier ? import.meta.env[planKey] : null), [planKey, tier])
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_RXHtqdXfswzCLE";
  const subscriptionEndpoint = import.meta.env.VITE_RAZORPAY_SUBSCRIPTION_ENDPOINT
  const testSubscriptionId = import.meta.env.VITE_RAZORPAY_TEST_SUBSCRIPTION_ID || 123;

  const closeModal = useCallback(() => {
    if (stage === 'processing') {
      return
    }
    if (stage === 'success' && !scheduleConfirmed) {
      return
    }
    onClose?.()
  }, [onClose, scheduleConfirmed, stage])

  const initiateSubscription = useCallback(async () => {
    if (!tier) return null

    if (!razorpayKeyId) {
      throw new Error('Missing Razorpay key id. Add VITE_RAZORPAY_KEY_ID to your environment.')
    }

    if (!planId && !testSubscriptionId && !subscriptionEndpoint) {
      throw new Error(
        `Missing plan configuration for ${tier.title}. Define ${planKey} in your .env or provide VITE_RAZORPAY_SUBSCRIPTION_ENDPOINT.`,
      )
    }

    if (testSubscriptionId) {
      return { subscriptionId: testSubscriptionId }
    }

    if (!subscriptionEndpoint) {
      throw new Error('Subscription endpoint is not configured. Add VITE_RAZORPAY_SUBSCRIPTION_ENDPOINT.')
    }

    const response = await fetch(subscriptionEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId,
        tierId: tier.id,
        tierName: tier.title,
        categoryLabel,
      }),
    })

    if (!response.ok) {
      const message = await response.text()
      throw new Error(message || 'Failed to create subscription with Razorpay.')
    }

    const data = await response.json()
    return {
      subscriptionId: data?.subscriptionId ?? data?.subscription_id ?? null,
      shortId: data?.shortId ?? data?.id ?? null,
      customer: data?.customer ?? null,
    }
  }, [tier, planId, planKey, categoryLabel, razorpayKeyId, subscriptionEndpoint, testSubscriptionId])

  const handleProceedToPayment = useCallback(async () => {
    if (!tier) return

    try {
      setInternalError(null)
      onStageChange?.('processing')

      const Razorpay = await ensureRazorpayIsAvailable()
      const subscriptionData = await initiateSubscription()

      if (!subscriptionData || !subscriptionData.subscriptionId) {
        throw new Error('Subscription id missing from backend response.')
      }

      const checkoutOptions = {
        key: razorpayKeyId,
        subscription_id: subscriptionData.subscriptionId,
        name: 'Techinium',
        description: `${tier.title} Subscription`,
        theme: {
          color: '#FF6B35',
        },
        notes: {
          tierId: tier.id,
          tierName: tier.title,
          category: categoryLabel,
        },
        prefill: subscriptionData.customer
          ? {
              name: subscriptionData.customer.name ?? '',
              email: subscriptionData.customer.email ?? '',
              contact: subscriptionData.customer.phone ?? '',
            }
          : undefined,
        modal: {
          ondismiss: () => {
            onStageChange?.('review')
          },
          escape: false,
          confirm_close: true,
        },
        handler: (response) => {
          onPaymentSuccess?.({
            ...response,
            tierId: tier.id,
            tierName: tier.title,
            categoryLabel,
            subscriptionId: subscriptionData.subscriptionId,
            shortId: subscriptionData.shortId,
            customer: subscriptionData.customer ?? null,
            paidAt: new Date().toISOString(),
          })
        },
      }

      const razorpayInstance = new Razorpay(checkoutOptions)

      razorpayInstance.on('payment.failed', (response) => {
        const errorMessage = response?.error?.description ?? 'Payment failed. Please try again.'
        onPaymentError?.(errorMessage)
      })

      razorpayInstance.open()
    } catch (initError) {
      console.error(initError)
      const message = initError instanceof Error ? initError.message : 'Unable to initiate payment.'
      setInternalError(message)
      onPaymentError?.(message)
    }
  }, [categoryLabel, initiateSubscription, onPaymentError, onPaymentSuccess, onStageChange, razorpayKeyId, tier])

  const handleConfirmScheduled = useCallback(() => {
    setScheduleConfirmed(true)
    onClose?.()
  }, [onClose])

  if (!mounted || !isOpen) {
    return null
  }

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-6 bg-slate-900/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
          onClick={closeModal}
          aria-label="Close checkout"
          disabled={stage === 'processing' || (stage === 'success' && !scheduleConfirmed)}
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid gap-6 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8 md:p-10">
          <aside className="hidden flex-col justify-between rounded-2xl bg-slate-900/90 px-6 py-8 text-white md:flex">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">Selected tier</p>
                <h2 className="font-display text-2xl font-semibold">{tier?.title}</h2>
                <p className="text-white/70">{categoryLabel}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-white/60">Price</p>
                  <p className="mt-1 text-lg font-semibold">{tier?.priceUsd}</p>
                  <p className="text-sm text-white/60">{tier?.priceInr}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    Secured by Razorpay
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex flex-col gap-6">
            {stage === 'review' && (
              <>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-tertiary">Checkout</p>
                  <h3 className="text-2xl font-display font-semibold text-text-primary">
                    Confirm your subscription
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Complete the payment to lock in your slot. You&apos;ll be redirected to schedule a kickoff call right after payment.
                  </p>
                  {planId ? (
                    <p className="text-xs text-text-tertiary">
                      Plan reference: <span className="font-mono">{planId}</span>
                    </p>
                  ) : null}
                </div>

                <div className="rounded-2xl border border-ui-border bg-bg-secondary/70 p-4">
                  <p className="text-sm font-medium text-text-primary">What happens next?</p>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                      Pay securely via Razorpay subscription checkout
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                      Receive an instant confirmation screen with your payment reference
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                      Schedule your kickoff call through Cal.com to finalise onboarding
                    </li>
                  </ul>
                </div>

                {(internalError || error) && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Checkout currently unavailable</p>
                      <p>{internalError || error}</p>
                    </div>
                  </div>
                )}

                <div className="mt-auto flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={handleProceedToPayment}
                    className="cta-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-medium"
                  >
                    Proceed to Payment
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ui-border px-6 py-3 text-sm font-medium text-text-secondary transition hover:bg-bg-secondary"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                </div>
              </>
            )}

            {stage === 'processing' && (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <Loader2 className="h-12 w-12 animate-spin text-accent-primary" aria-hidden="true" />
                <div>
                  <p className="text-lg font-semibold text-text-primary">Opening secure checkout…</p>
                  <p className="mt-2 text-sm text-text-secondary">
                    Please do not refresh the page. You&apos;ll be redirected to Razorpay to complete your subscription.
                  </p>
                </div>
              </div>
            )}

            {stage === 'error' && (
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-base font-semibold">Something went wrong</p>
                    <p>{error ?? internalError ?? 'Payment could not be started.'}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onStageChange?.('review')}
                  className="cta-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-medium"
                >
                  Try Again
                </button>
              </div>
            )}

            {stage === 'success' && paymentDetails && (
              <div className="space-y-6">
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-base font-semibold">Payment confirmed</p>
                    <p className="text-sm text-emerald-700/80">
                      Razorpay reference: {paymentDetails.razorpay_payment_id ?? 'n/a'}
                    </p>
                    <p className="mt-1 text-xs text-emerald-800/70">
                      Close button unlocks once you confirm your kickoff call scheduling.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-ui-border bg-bg-secondary/60 p-4">
                  <p className="text-sm font-semibold text-text-primary">Payment summary</p>
                  <dl className="mt-3 space-y-2 text-sm text-text-secondary">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-text-tertiary">Plan</dt>
                      <dd className="font-medium text-text-primary">{tier?.title}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-text-tertiary">Payment ID</dt>
                      <dd className="font-mono text-xs">{paymentDetails.razorpay_payment_id ?? 'n/a'}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-text-tertiary">Subscription ID</dt>
                      <dd className="font-mono text-xs">{paymentDetails.subscriptionId ?? 'n/a'}</dd>
                    </div>
                    {paymentDetails.shortId ? (
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-text-tertiary">Reference</dt>
                        <dd className="font-mono text-xs">{paymentDetails.shortId}</dd>
                      </div>
                    ) : null}
                    {paymentDetails.customer?.email ? (
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-text-tertiary">Email</dt>
                        <dd className="font-medium text-text-primary">{paymentDetails.customer.email}</dd>
                      </div>
                    ) : null}
                  </dl>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-primary/10 text-accent-primary">
                      <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-text-primary">Schedule your kickoff call</p>
                      <p className="text-sm text-text-secondary">
                        Pick a slot below to finalise onboarding. This step is required before we begin the engagement.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-ui-border bg-white shadow-subtle">
                    <iframe
                      title="Schedule kickoff call with Techinium"
                      src="https://cal.com/techinium/15min?embed=1&primaryColor=FF6B35"
                      className="h-[420px] w-full"
                      loading="lazy"
                      allow="payment *; microphone *; camera *"
                    ></iframe>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://cal.com/techinium/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-ui-border px-6 py-3 text-sm font-medium text-text-secondary transition hover:bg-bg-secondary"
                    >
                      Open scheduler in new tab
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleConfirmScheduled}
                      className="cta-primary inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-medium"
                    >
                      I have scheduled my kickoff call
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default CheckoutModal
