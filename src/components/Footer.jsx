import { Facebook, Instagram, Youtube, Mail } from 'lucide-react'
import Reveal from './Reveal'
import logoImg from '../assets/Dipa Logo website BG.png'

const socials = [
  { Icon: Facebook, href: 'https://www.facebook.com/share/1EKTHsaJqi/', label: 'Facebook' },
  { Icon: Instagram, href: 'https://www.instagram.com/dipa.relationshipcoach?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { Icon: Youtube, href: 'https://www.youtube.com/@healingwithdipa', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#F4D5E8]/60 py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

        {/* Left Column: Logo + Name Info */}
        <Reveal direction="left">
          <div className="flex flex-col items-center sm:items-start gap-0">
            {/* Logo Image */}
            <img src={logoImg} alt="Dipa M Kapur" className="h-20 sm:h-16 md:h-20 w-auto object-contain shrink-0" />

            <div className="hidden sm:block text-center sm:text-left -mt-1 sm:-mt-2">
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

        {/* Right Column: Email */}
        <Reveal direction="right">
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-[#E2A83E]" strokeWidth={1.8} />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Lifecoachdipa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C2C2C] hover:text-[#E63EA8] font-medium text-lg tracking-wide hover:underline transition-colors"
            >
              Lifecoachdipa@gmail.com
            </a>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}