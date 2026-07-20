import { Target, Eye } from 'lucide-react'
import Reveal from './Reveal'

export default function Message() {
  return (
    <section className="w-full bg-[#FFF9FC] py-10 md:py-[60px]">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="bg-[#FFF2F8] rounded-[20px] p-6 md:p-10 border border-[#F4D5E8] shadow-[0px_15px_35px_rgba(0,0,0,0.08)]">
 
          <div className="grid md:grid-cols-2 gap-[30px] items-center">
 
            {/* Left Column: Feather SVG and Message text */}
            <Reveal direction="left">
              <div className="flex gap-5 items-start">
 
                {/* Custom Elegant Hand-drawn Feather SVG using Brand Gold */}
                <svg width="60" height="130" viewBox="0 0 60 130" fill="none" className="shrink-0 text-[#D4AF37] mt-1 hidden sm:block">
                  {/* Central shaft */}
                  <path d="M30,105 C30,85 28,45 32,8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
 
                  {/* Vanes (left side) */}
                  <path d="M29,95 C20,90 15,85 12,77" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M29,85 C18,80 12,75 10,65" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M30,73 C15,67 8,57 8,45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M30,60 C16,53 10,43 12,30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M31,45 C18,37 15,27 18,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
 
                  {/* Vanes (right side) */}
                  <path d="M31,100 C38,95 42,90 44,83" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M31,90 C42,85 46,77 48,67" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M31,77 C44,71 50,60 52,47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M31,63 C44,55 50,43 50,30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M32,47 C44,40 48,27 46,15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
 
                  {/* Small heart at bottom of the stem using Brand Pink */}
                  <path
                    d="M30,105 C27,109 23,109 23,113 C23,117 26,120 30,124 C34,120 37,117 37,113 C37,109 33,109 30,105 Z"
                    fill="#E63EA8"
                    stroke="#E63EA8"
                    strokeWidth="1"
                  />
                </svg>
 
                <div className="flex-1">
                  <h2 className="font-display text-[26px] sm:text-[32px] md:text-[40px] font-semibold text-[#2C2C2C] mb-4">
                    My Message
                  </h2>
                  <p className="font-body font-bold text-[18px] text-[#2C2C2C] mb-4">
                    Dear Beautiful Woman,
                  </p>
                  <div className="space-y-4 text-[#666666] font-body text-[18px] leading-[1.8] font-normal">
                    <p>
                      You don't have to choose between a successful career and a happy personal life.
                    </p>
                    <p>
                      You deserve both.
                    </p>
                    <p>
                      Every woman deserves to feel loved, respected, emotionally secure, and confident in every stage of life.
                    </p>
                    <p>
                      My mission is to help women stop merely surviving and start living with clarity, confidence, and balance.
                    </p>
                    <p>
                      Small changes, when guided with the right understanding, can create meaningful transformation.
                    </p>
                    <p className="font-semibold text-[#2C2C2C] mt-6">
                      – Dipa M Kapur
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
 
            {/* Right Column: Goal & Vision white Card */}
            <Reveal direction="right">
              <div className="bg-white rounded-[20px] p-6 md:p-10 shadow-[0px_15px_35px_rgba(0,0,0,0.08)] border border-[#F4D5E8] space-y-6">

                {/* Goal Block */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#FFF2F8] flex items-center justify-center shrink-0 border border-[#E63EA8]/15 shadow-sm">
                    <Target className="w-6 h-6 text-[#E63EA8]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-[#2C2C2C] text-[18px] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63EA8]" />
                      My Goal
                    </h3>
                    <p className="text-[16px] font-body text-[#666666] leading-[1.8] font-normal">
                      To help working women understand themselves, heal their relationships and create harmony in every area of life.
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#F4D5E8]" />

                {/* Vision Block */}
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#FFF2F8] flex items-center justify-center shrink-0 border border-[#E63EA8]/15 shadow-sm">
                    <Eye className="w-6 h-6 text-[#E63EA8]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-[#2C2C2C] text-[18px] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E63EA8]" />
                      My Vision
                    </h3>
                    <p className="text-[16px] font-body text-[#666666] leading-[1.8] font-normal">
                      A world where every woman feels valued, heard, emotionally strong and aligned with her true self.
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  )
}