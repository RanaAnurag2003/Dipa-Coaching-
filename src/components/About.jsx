import { Briefcase, User2, Flower2, Heart } from 'lucide-react'
import aboutBg from '../assets/About BG.png'
import Reveal from './Reveal'

const stats = [
  { icon: Briefcase, value: '20+', label: 'Years of Corporate Experience' },
  { icon: User2, value: null, label: 'Women Relationship Energy Coach' },
  { icon: Flower2, value: null, label: 'Expert in Numerology, Vastu & Astrology' },
  { icon: Heart, value: '1000+', label: 'Women Guided' },
]

export default function About() {
  return (
    <section className="w-full bg-[#FFF9FC] pt-0 pb-8 md:pb-[45px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div 
          className="about-card-bg rounded-[20px] py-6 px-5 md:py-8 md:px-10 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-[#F4D5E8]"
          style={{ '--about-bg-url': `url(${aboutBg})` }}
        >

          {/* Grid layout */}
          <div className="grid md:grid-cols-2 gap-[28px] items-start">

            {/* Left Column: Heading, Subheading, Story, and Stats */}
            <Reveal direction="left">
              <div className="flex flex-col justify-center">
                {/* Heading with Gold Heart SVG */}
                <div className="flex items-center flex-nowrap gap-2 mb-1">
                  <h2 className="font-display text-[22px] sm:text-[28px] md:text-[34px] font-semibold text-[#2C2C2C] leading-tight whitespace-nowrap">
                    About Dipa M Kapur
                  </h2>

                  {/* Custom Elegant Hand-drawn Heart SVG using Brand Gold */}
                  <svg width="40" height="28" viewBox="0 0 45 30" fill="none" className="shrink-0 text-[#D4AF37] mt-1">
                    <path
                      d="M27,10 C22,4 14,4 14,13 C14,20 20,24 27,28 C34,24 40,20 40,13 C40,4 32,4 27,10 M27,28 C20,28 12,27 6,25"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Thin accent line */}
                <div className="h-[2px] bg-gradient-to-r from-[#E63EA8]/20 to-transparent w-full mb-4" />

                <h3 className="font-body font-bold text-[14px] sm:text-[18px] md:text-[22px] text-[#2C2C2C] mb-3 whitespace-nowrap">
                  Your Coach. Your Guide. Your Supporter.
                </h3>

                <div className="space-y-3 text-[#666666] font-body text-[15px] md:text-[16px] leading-[1.7] font-normal">
                  <p>
                    With over 20 years of corporate experience, I understand what it feels like to balance deadlines, family responsibilities, motherhood, and personal dreams.
                  </p>
                  <p>
                    Like many working women, I experienced the constant pressure of managing everything while often putting myself last.
                  </p>
                  <p>
                    My journey led me to Relationship Coaching, Numerology, Astrology, and Vastu—not as quick fixes, but as tools for deeper self-awareness, stronger relationships, and a more balanced life.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[20px] mt-8 pt-5 border-t border-[#E63EA8]/10">
                  {stats.map(({ icon: Icon, value, label }, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      {/* White background + solid Brand Pink border */}
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-[#E63EA8] shadow-[0px_10px_25px_rgba(0,0,0,0.06)] mb-2.5 hover:scale-105 transition-transform duration-200">
                        <Icon className="w-[22px] h-[22px] text-[#E63EA8]" strokeWidth={2} />
                      </div>
                      {value ? (
                        <p className="font-body font-bold text-[#E63EA8] text-[18px] leading-none mb-1">
                          {value}
                        </p>
                      ) : null}
                      <p className={`text-[14px] font-body text-[#666666] leading-snug font-normal ${!value ? 'mt-1.5' : ''} max-w-[110px]`}>
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Bottom-aligned Quote Card */}
            <Reveal direction="right" className="self-end">
              <div className="w-full max-w-[460px] mx-auto md:ml-auto mt-5 md:mt-2 md:translate-x-6">
                {/* Pink quote card block */}
                <div className="bg-gradient-to-br from-[#E63EA8] to-[#C72D8E] rounded-[20px] p-[20px] sm:p-[24px] shadow-[0px_12px_30px_rgba(0,0,0,0.07)] w-full transform hover:scale-[1.01] transition-transform duration-300 relative">
                  {/* Large Decorative Quotation Mark */}
                  <span className="text-white/20 text-6xl font-display leading-none absolute top-1 left-2 select-none">&ldquo;</span>
                  <p className="text-white text-[14px] md:text-[15px] leading-[1.7] font-body font-normal pl-4 relative z-10">
                    Today, I help working women and mothers understand themselves better, improve communication, create healthier relationships, and build lives filled with confidence, clarity, and inner peace.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  )
}