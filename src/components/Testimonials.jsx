import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import avatarNeha from '../assets/profile_neha.png'
import avatarPriya from '../assets/profile_priya.png'
import avatarShalini from '../assets/profile_shalini.png'
import Reveal from './Reveal'

const testimonials = [
  {
    text: "I finally understood why I kept repeating the same relationship patterns. The guidance helped me communicate with more confidence and peace.",
    name: 'Neha S.',
    role: 'Working Professional',
    avatar: avatarNeha,
  },
  {
    text: "The session gave me practical insights I could apply immediately. My home environment and my mindset both started changing.",
    name: 'Priya M.',
    role: 'IT Professional & Mother',
    avatar: avatarPriya,
  },
  {
    text: "For the first time, I felt truly understood. The combination of coaching, Numerology, and Vastu gave me a completely new perspective.",
    name: 'Shalini T.',
    role: 'Entrepreneur',
    avatar: avatarShalini,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="w-full bg-[#FFF9FC] py-10 md:py-[60px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Centered Heading with lines & hand-drawn heart */}
        <Reveal direction="top">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 max-w-[120px] sm:max-w-[200px] h-[1.5px] bg-gradient-to-r from-transparent to-[#E63EA8]/20" />

            <div className="flex items-center gap-2 flex-nowrap">
              <h2 className="font-display text-[22px] sm:text-[30px] md:text-[40px] font-semibold text-[#2C2C2C] text-center leading-tight whitespace-nowrap">
                What Women Are Saying
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

        {/* Carousel Container */}
        <Reveal direction="bottom">
          <div className="relative flex items-center justify-between gap-4">

            {/* Left Arrow Button */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border-2 border-[#E63EA8] text-[#E63EA8] flex items-center justify-center shrink-0 hover:bg-[#E63EA8] hover:text-white transition-colors duration-200 cursor-pointer shadow-sm z-10"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Testimonial Cards viewport */}
            <div className="flex-1 overflow-hidden py-4 px-2">

              {/* Sliding Track for mobile/tablet, normal grid for desktop */}
              <div
                className="w-full flex md:grid md:grid-cols-3 gap-0 md:gap-[30px]"
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`${i === activeIndex ? 'block' : 'hidden md:block'} w-full md:w-auto flex-shrink-0 bg-white border border-[#F4D5E8] rounded-[20px] p-6 md:p-10 shadow-[0px_15px_35px_rgba(0,0,0,0.08)] relative flex flex-col justify-between hover:shadow-md transition-shadow duration-300 md:transform-none`}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Large bold pink quote mark at top left */}
                      <span className="text-[#E63EA8] text-[48px] font-display leading-none select-none block -mt-2 -mb-2">“</span>

                      {/* Testimonial text (Poppins, 18px Regular, Line Height 1.8) */}
                      <p className="text-[16px] lg:text-[18px] text-[#2C2C2C] leading-[1.8] font-body font-normal mb-6 flex-grow">
                        {t.text}
                      </p>

                      {/* Client info block at the bottom */}
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0"
                        />
                        <div>
                          <p className="font-body font-bold text-[16px] text-[#2C2C2C]">— {t.name}</p>
                          <p className="text-sm text-[#666666] font-body font-normal">{t.role}</p>

                          {/* Rating Stars using Brand Gold */}
                          <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <Star key={s} className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" strokeWidth={0} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Arrow Button */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border-2 border-[#E63EA8] text-[#E63EA8] flex items-center justify-center shrink-0 hover:bg-[#E63EA8] hover:text-white transition-colors duration-200 cursor-pointer shadow-sm z-10"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>

          </div>
        </Reveal>

        {/* CSS override to cancel translation on desktop (md upwards) */}
        <style>{`
          @media (min-width: 768px) {
            .md\\:grid {
              transform: none !important;
            }
          }
        `}</style>

      </div>
    </section>
  )
}