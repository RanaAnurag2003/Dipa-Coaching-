import { Facebook, Instagram, Youtube, Linkedin, Globe } from 'lucide-react'
import Reveal from './Reveal'

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#F4D5E8]/60 py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

        {/* Left Column: Logo + Name Info */}
        <Reveal direction="left">
          <div className="flex items-center gap-4">
            {/* Gold circular badge with double right chevron >> */}
            <div className="w-16 h-16 rounded-full bg-[#E2A83E] flex items-center justify-center shrink-0 shadow-sm">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-[#C72D8E]">
                <path d="M6 17L13 12L6 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 17L20 12L13 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-display font-bold text-[#2C2C2C] text-xl leading-tight">
                Dipa M Kapur
              </p>
              <p className="text-[#2C2C2C] text-xs md:text-base font-medium leading-tight mt-0.5">
                Women Relationship Energy Coach
              </p>
              <p className="text-[#666666] text-sm font-medium leading-tight">
                Expert in Numerology | Vastu | Astrology
              </p>
            </div>
          </div>
        </Reveal>

        {/* Vertical Divider 1 */}
        <div className="hidden md:block h-12 w-[1.5px] bg-[#D8B9CC]" />

        {/* Center Column: Social Media Links */}
        <Reveal direction="top">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#2C2C2C] text-base font-semibold uppercase tracking-wider">
              Let's Connect
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-[#2C2C2C] flex items-center justify-center hover:bg-[#2C2C2C] hover:text-white group transition-all duration-200"
                >
                  <Icon className="w-6 h-6 text-[#2C2C2C] group-hover:text-white" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Vertical Divider 2 */}
        <div className="hidden md:block h-12 w-[1.5px] bg-[#D8B9CC]" />

        {/* Right Column: Website URL */}
        <Reveal direction="right">
          <div className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-[#E2A83E]" strokeWidth={1.8} />
            <a
              href="https://www.dipamkapur.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C2C2C] hover:text-[#E63EA8] font-semibold text-lg hover:underline transition-colors"
            >
              www.dipamkapur.com
            </a>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}