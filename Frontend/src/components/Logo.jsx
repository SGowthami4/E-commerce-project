import React from 'react'

export default function Logo() {
  return (
    <div className="w-full h-full">
    <svg width={80} height={50} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Background Circle --> */}
  <circle cx="100" cy="100" r="90" fill="#2d3748" />
  
  {/* <!-- Circuit Board Pattern --> */}
  <path d="M30 65 L170 65 M30 135 L170 135 M65 30 L65 170 M135 30 L135 170" stroke="#4299e1" strokeWidth="2" opacity="0.4" />
  <path d="M65 65 L135 65 M65 135 L135 135 M65 65 L65 135 M135 65 L135 135" stroke="#4299e1" strokeWidth="2" opacity="0.4" />
  
  {/* <!-- Small Circuit Nodes --> */}
  <circle cx="65" cy="65" r="4" fill="#4299e1" />
  <circle cx="135" cy="65" r="4" fill="#4299e1" />
  <circle cx="65" cy="135" r="4" fill="#4299e1" />
  <circle cx="135" cy="135" r="4" fill="#4299e1" />
  
  {/* <!-- Phone Shape --> */}
  <rect x="70" y="50" width="30" rx="3" ry="3" height="60" stroke="#f56565" strokeWidth="2" fill="none" />
  <line x1="70" y1="60" x2="100" y2="60" stroke="#f56565" strokeWidth="1" />
  <circle cx="85" cy="55" r="1" fill="#f56565" />
  <line x1="82" y1="105" x2="88" y2="105" stroke="#f56565" strokeWidth="2" />
  
  {/* <!-- Laptop Shape --> */}
  <path d="M95 90 L130 90 L130 120 L95 120 Z" stroke="#38b2ac" strokeWidth="2" fill="none" />
  <path d="M90 120 L135 120 L140 130 L85 130 Z" stroke="#38b2ac" strokeWidth="2" fill="none" />
  
  {/* <!-- Connection Lines --> */}
  <path d="M100 90 L100 65" stroke="#f6e05e" strokeWidth="1.5" strokeDasharray="2,2" />
  <path d="M95 100 L80 100" stroke="#f6e05e" strokeWidth="1.5" strokeDasharray="2,2" />
  
  {/* <!-- Central Hub Point --> */}
  <circle cx="100" cy="100" r="6" fill="#ed64a6" />
  <circle cx="100" cy="100" r="10" stroke="#ed64a6" strokeWidth="2" fill="none" />
  
  {/* <!-- Outer Glow --> */}
  <circle cx="100" cy="100" r="85" stroke="#38b2ac" strokeWidth="3" fill="none" opacity="0.6" />
</svg>

  </div>
    
  )
}
