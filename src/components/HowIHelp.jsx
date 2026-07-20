import { useState } from 'react'
import Reveal from './Reveal'

// Mockup-exact custom SVG icons styled with width="36" height="36"
const HighlightedHeartIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="text-current">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
)

const CircularSpeechBubbles = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    {/* Back bubble, top-right, smaller */}
    <path d="M12.5 3.5h6a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1l1.3 2.7-3.8-2.7h-2.5a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3z" />
    {/* Front bubble, bottom-left, larger, with dots */}
    <path d="M9.5 6.2h-4a3.8 3.8 0 0 0-3.8 3.8v2.3a3.8 3.8 0 0 0 3.8 3.8h.2l-1.4 3 4.3-3h.9a3.8 3.8 0 0 0 3.8-3.8V10a3.8 3.8 0 0 0-3.8-3.8z" />
    <circle cx="4.3" cy="12.2" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="7.1" cy="12.2" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="9.9" cy="12.2" r="0.75" fill="currentColor" stroke="none" />
  </svg>
)

const LotusBlossomIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="text-current">
    {/* Center pointed petal */}
    <path d="M12 4c-1.7 3.3-2.2 7.5-1.5 11 .4 1.8.9 2.9 1.5 3.3.6-.4 1.1-1.5 1.5-3.3.7-3.5.2-7.7-1.5-11z" />
    {/* Left curved petal */}
    <path d="M12 15.3c-2.8-.7-5.7-2.5-7.4-5.5-.5-.9-.2-1.6.7-1.4 2.3.9 4.7 3 6.7 6.9z" />
    {/* Right curved petal */}
    <path d="M12 15.3c2.8-.7 5.7-2.5 7.4-5.5.5-.9.2-1.6-.7-1.4-2.3.9-4.7 3-6.7 6.9z" />
  </svg>
)

const DiagonalNumbersIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor" className="text-current select-none font-sans font-black">
    {/* 1 (top-left) - 2 (middle) - 3 (bottom-right) */}
    <text x="3" y="12" fontSize="11" fontWeight="900">1</text>
    <text x="10" y="18" fontSize="8" fontWeight="900">2</text>
    <text x="17" y="23" fontSize="11" fontWeight="900">3</text>
  </svg>
)

const PersonStarsIcon = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    {/* Person Head Outline */}
    <circle cx="12" cy="6.5" r="2.7" strokeWidth="1.8" />
    {/* Shoulders */}
    <path d="M6.7 13.8a5.3 5.3 0 0 1 10.6 0" strokeWidth="1.8" />

    {/* Left Star */}
    <path d="M4.3 16.3l.5 1.05 1.15.17-.83.82.2 1.16-1.02-.55-1.03.55.2-1.16-.83-.82 1.15-.17z" strokeWidth="1" strokeLinejoin="round" />
    {/* Center Star (largest, lowest) */}
    <path d="M12 17.6l.62 1.27 1.4.2-1.01.99.24 1.4L12 20.8l-1.25.66.24-1.4-1.01-.99 1.4-.2z" strokeWidth="1" strokeLinejoin="round" />
    {/* Right Star */}
    <path d="M19.7 16.3l.5 1.05 1.15.17-.83.82.2 1.16-1.02-.55-1.03.55.2-1.16-.83-.82 1.15-.17z" strokeWidth="1" strokeLinejoin="round" />
  </svg>
)

const items = [
  {
    icon: HighlightedHeartIcon,
    title: 'Understand Your Patterns',
    desc: "Identify what's really affecting your relationships.",
  },
  {
    icon: CircularSpeechBubbles,
    title: 'Improve Communication',
    desc: 'Build deeper connection and better understanding.',
  },
  {
    icon: LotusBlossomIcon,
    title: 'Bring Harmony at Home',
    desc: 'Simple Vastu tips for peace and positive energy.',
  },
  {
    icon: DiagonalNumbersIcon,
    title: 'Align with Your Life Purpose',
    desc: 'Use Numerology & Astrology for clarity and right timing.',
  },
  {
    icon: PersonStarsIcon,
    title: 'Build a Balanced Life',
    desc: 'Emotional balance, confidence and a happier you.',
  },
]

export default function HowIHelp() {
  return (
    <section className="w-full bg-white py-10 md:py-[60px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Centered Heading with lines & hand-drawn heart */}
        <Reveal direction="top">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 max-w-[120px] sm:max-w-[200px] h-[1.5px] bg-gradient-to-r from-transparent to-[#E63EA8]/20" />

            <div className="flex items-center gap-2 flex-nowrap">
              <h2 className="font-display text-[22px] sm:text-[30px] md:text-[40px] font-semibold text-[#2C2C2C] text-center leading-tight whitespace-nowrap">
                How I Help You
              </h2>

              {/* Elegant Heading Heart SVG in Brand Gold */}
              <svg width="35" height="24" viewBox="0 0 35 24" fill="none" className="text-[#D4AF37] shrink-0 mt-1">
                <path
                  d="M21,8 C17,3 11,3 11,10 C11,15.5 16,19 21,22 C26,19 31,15.5 31,10 C31,3 25,3 21,8 M21,22 C15,22 9,21 4,20"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            <div className="flex-1 max-w-[120px] sm:max-w-[200px] h-[1.5px] bg-gradient-to-l from-transparent to-[#E63EA8]/20" />
          </div>
        </Reveal>

        {/* 5 Service Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[30px] lg:gap-0">
          {items.map(({ icon: Icon, title, desc }, i) => {
            return (
              <Reveal key={i} direction="bottom" delay={i * 120}>
                <div
                  className="flex flex-col items-center text-center px-4 py-4 lg:py-2 border-b sm:border-b-0 lg:border-r border-[#E63EA8]/10 last:border-0 group"
                >
                  {/* Unified icon wrapper style matching the mockup: soft pink bg, light border, pink icon */}
                  <div
                    className="w-16 h-16 rounded-full bg-[#FDF1F6] flex items-center justify-center mb-4 text-[#E63EA8] transform group-hover:scale-110 group-hover:bg-[#E63EA8] group-hover:text-white transition-all duration-300"
                  >
                    <Icon />
                  </div>

                  {/* Title (Card Heading: Poppins, 24px Bold, responsive) */}
                  <h3 className="font-body font-bold text-[#E63EA8] text-[20px] lg:text-[24px] mb-2 leading-snug max-w-[180px] mx-auto">
                    {title}
                  </h3>

                  {/* Description (Poppins, 18px Regular, Line Height 1.8) */}
                  <p className="text-[16px] lg:text-[18px] text-[#666666] leading-[1.8] font-body font-normal max-w-[190px] mx-auto">
                    {desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

      </div>
    </section>
  )
}