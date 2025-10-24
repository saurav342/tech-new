import React, { useMemo } from 'react'

/**
 * Techinium Logo Component
 * 
 * Features:
 * - Network-inspired design with connected nodes
 * - Uses the orange-to-yellow gradient theme
 * - Scalable SVG format
 * - Clean, modern tech aesthetic
 * 
 * Props:
 * - size: Size of the logo (default: 40)
 * - className: Additional CSS classes
 */
const TechiniumLogo = ({ size = 40, className = "" }) => {
  // useMemo produces a stable id per mounted instance. This avoids
  // potential issues with `useId` (colons/SSR mismatch) causing
  // gradient URL references to break in some environments.
  const uniqueId = useMemo(() => `techinium-${Math.random().toString(36).slice(2, 9)}`, [])
  const gradientId = `${uniqueId}-techinium-gradient`
  const nodeGradientId = `${uniqueId}-node-gradient`

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`${className} block`} 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F76B1C" />
          <stop offset="50%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FFF8BE" />
        </linearGradient>
        <linearGradient id={nodeGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F76B1C" />
          <stop offset="100%" stopColor="#FFB366" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle cx="32" cy="32" r="30" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
      
      {/* Network nodes */}
      <circle cx="32" cy="18" r="4" fill={`url(#${nodeGradientId})`} />
      <circle cx="45" cy="25" r="3.5" fill={`url(#${nodeGradientId})`} />
      <circle cx="45" cy="39" r="3.5" fill={`url(#${nodeGradientId})`} />
      <circle cx="32" cy="46" r="4" fill={`url(#${nodeGradientId})`} />
      <circle cx="19" cy="39" r="3.5" fill={`url(#${nodeGradientId})`} />
      <circle cx="19" cy="25" r="3.5" fill={`url(#${nodeGradientId})`} />
      <circle cx="32" cy="32" r="3" fill={`url(#${nodeGradientId})`} />
      
      {/* Connecting lines */}
      <path d="M32 18 L32 29" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 35 L32 46" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 32 L42 36" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 32 L22 36" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 29 L42 26" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 29 L22 26" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 35 L42 39" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M29 35 L22 39" stroke={`url(#${nodeGradientId})`} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default TechiniumLogo
