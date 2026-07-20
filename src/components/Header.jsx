import { useEffect, useState } from 'react'
import Reveal from './Reveal'

// A properly-proportioned, symmetric heart outline (rounded lobes + a true
// center notch + a pointed base) with an elegant flourish tail trailing off
// the bottom point — drawn as a single continuous stroke, the way a trained
// hand-letterer would sketch it, rather than a rough freehand scribble.
const HEART_PATH =
  "M50,85 C20,62 8,40 8,25 C8,8 28,2 42,14 C46,17 49,22 50,28 C51,22 54,17 58,14 C72,2 92,8 92,25 C92,40 80,62 50,85 C42,90 30,90 22,86 C16,83 10,86 6,94"

/**
 * AnimatedHeart
 * Renders the hand-drawn heart line-art so that it "draws itself" the moment
 * the page loads — like someone sketching it freestyle with a pen — and gives
 * it a soft 3D / embossed look via a gradient stroke, drop-shadow and an
 * offset depth layer that fades in once the drawing finishes.
 */
function AnimatedHeart() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Small delay so the draw-on effect is noticeable right as the page lands
    const t = setTimeout(() => setAnimate(true), 250)
    return () => clearTimeout(t)
  }, [])

  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 100 100"
      fill="none"
      className="shrink-0 overflow-visible"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heartStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7FCB" />
          <stop offset="50%" stopColor="#E63EA8" />
          <stop offset="100%" stopColor="#9C1A6B" />
        </linearGradient>
      </defs>

      {/* Depth layer: a slightly offset, darker duplicate stroke that fades in
          after the line finishes drawing, giving the heart a raised / 3D,
          embossed-ink feel rather than a flat line. */}
      <path
        d={HEART_PATH}
        transform="translate(2.6, 3.4)"
        stroke="#7A1257"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          opacity: animate ? 0.35 : 0,
          transition: 'opacity 0.9s ease 1.9s',
        }}
      />

      {/* Main stroke: draws itself using the pathLength trick so we don't
          need to hand-calculate the real path length. */}
      <path
        d={HEART_PATH}
        pathLength="1"
        stroke="url(#heartStrokeGradient)"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: animate ? 0 : 1,
          transition: 'stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1)',
          filter:
            'drop-shadow(0 2px 2px rgba(122, 18, 87, 0.45)) drop-shadow(0 0 6px rgba(230, 62, 168, 0.25))',
        }}
      />

      {/* Pen tip: a small dot that travels along the exact same path in sync
          with the drawing, so it reads as a hand freestyle-sketching the
          heart rather than the line simply fading in. */}
      {animate && (
        <circle r="4" fill="#FCE3A1" stroke="#9C1A6B" strokeWidth="0.9">
          <animateMotion dur="2s" begin="0s" fill="freeze" calcMode="linear" path={HEART_PATH} />
          <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.92;1" dur="2s" begin="0s" fill="freeze" />
        </circle>
      )}
    </svg>
  )
}

export default function Header() {
  return (
    <header className="w-full bg-[#FFF9FC]">
      <div className="w-[90%] max-w-[1200px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left Side: Logo + Name Info */}
        <Reveal direction="left" duration={700}>
          <div className="flex items-center gap-4">
            {/* Logo container */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E63EA8] via-[#C72D8E] to-[#B0217C] flex items-center justify-center shrink-0 shadow-md transform hover:scale-105 transition-transform duration-200">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M5 4 L13 12 L5 20" stroke="#F6E7A8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4 L20 12 L12 20" stroke="#F6E7A8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div>
              <h1 className="font-display text-2xl md:text-3xl font-extrabold text-brand-pinkDeep tracking-tight">
                Dipa M Kapur
              </h1>
              <p className="text-sm md:text-[15px] font-semibold text-brand-text leading-snug">
                Women Relationship Energy Coach
              </p>
              <p className="text-xs md:text-sm text-brand-textSoft leading-snug font-medium">
                Expert in Numerology | Vastu | Astrology
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Side: Hand-drawn, self-drawing 3D heart + Tagline */}
        <Reveal direction="right" duration={700}>
          <div className="flex items-center gap-4 max-w-sm sm:max-w-md">
            <AnimatedHeart />

            <div className="text-sm md:text-[15px] text-brand-text leading-relaxed font-medium">
              <p className="text-[#666666]">Helping working women</p>
              <p className="font-semibold text-brand-text">create stronger relationships,</p>
              <p className="text-[#666666]">emotional balance &amp; life alignment.</p>
            </div>
          </div>
        </Reveal>

      </div>
    </header>
  )
}