import Reveal from './Reveal'

export default function Banner() {
  return (
    <section className="w-full bg-[#FFF9FC] pt-6 pb-6">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <Reveal direction="up">
          <div className="bg-gradient-to-br from-[#E63EA8] to-[#C72D8E] rounded-[20px] p-6 sm:p-8 md:p-10 shadow-[0_15px_35px_rgba(230,62,168,0.2)] text-center w-full">
            <h2 className="text-white font-display text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-3 sm:mb-4 leading-snug">
              First Ever Relationship Energy Coach in India..
            </h2>
            <p className="text-white/95 font-body text-[15px] sm:text-[17px] md:text-[18px] mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed">
              Relationship Energy healing using Numerology, Astrology & Vedic Vastu Sciences...
            </p>
            <p className="text-white font-body font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
              Proven Guaranteed Results...
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
