import { useState } from 'react'
import { User, Mail, Smartphone, CalendarDays, Lock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) {
      tempErrors.name = 'Required'
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid'
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, ''))) {
      tempErrors.phone = 'Invalid'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setSubmittedData({ ...formData })
      // Clear form
      setFormData({ name: '', email: '', phone: '' })
      setErrors({})
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  return (
    <section className="w-full bg-[#FFF9FC] py-15 md:py-13 lg:py-13">
      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Centered Top Tagline above the Banner Card */}
        <Reveal direction="top">
          <div className="flex items-center justify-center gap-2 mb-8 text-center max-w-5xl mx-auto px-4 select-none">
            <svg width="22" height="20" viewBox="0 0 24 22" fill="none" stroke="#E63EA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#E63EA8]">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <p className="text-sm md:text-[17px] lg:text-[18px] font-body font-light text-[#2C2C2C] leading-snug sm:whitespace-nowrap">
              Join 1000+ happy women who have transformed their relationships and life with clarity and confidence.
            </p>
          </div>
        </Reveal>

        <Reveal direction="bottom">
          <div className="bg-[#C72D8E] rounded-[24px] p-6 md:p-8 lg:p-10 shadow-[0_15px_35px_rgba(199,45,142,0.15)] border border-[#F4D5E8]/10">

            {submittedData ? (
              /* Success State Container */
              <div className="flex flex-col items-center justify-center text-center py-10 text-white animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#FCE3A1] mb-4 drop-shadow" />
                <h3 className="font-sans text-2xl md:text-3.5xl font-bold mb-2">
                  Registration Successful!
                </h3>
                <p className="text-sm md:text-base text-[#FCE3A1] font-semibold max-w-lg mb-6">
                  Thank you, {submittedData.name}. You are registered for the 45-Minute Introductory Webinar!
                </p>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-5 max-w-md">
                  <p className="text-xs md:text-sm leading-relaxed text-white/90">
                    We have sent your access link and calendar invitation to <strong className="text-white">{submittedData.email}</strong>. Please check your inbox (and spam folder) in a few minutes.
                  </p>
                </div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="mt-6 text-xs text-white/80 hover:text-white underline font-semibold transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Register another person
                </button>
              </div>
            ) : (
              /* Form Grid State matching the mockup image exactly */
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr_0.8fr] gap-6 lg:gap-8 items-center">

                {/* Left Column: Price, Title & Details */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start text-center sm:text-left">
                  {/* Gold circle badge with calendar icon */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E8C170] flex items-center justify-center shrink-0 shadow-sm">
                    <CalendarDays className="w-10 h-10 sm:w-14 sm:h-14 text-[#C72D8E]" strokeWidth={2.2} />
                  </div>
                  <div className="flex-1 w-full flex flex-col items-center sm:items-start">
                    <p className="text-white font-sans font-bold text-[14px] sm:text-[15px] leading-snug">
                      Start Your Transformation Today!
                    </p>
                    <p className="text-[#F6E7A8] text-[14px] sm:text-[15px] font-sans font-bold mt-1">
                      Join My 45-Minute Introductory Webinar
                    </p>
                    <h3 className="text-white font-sans font-bold text-[20px] sm:text-[24px] mt-1.5 leading-tight">
                      Transform Your Relationships
                    </h3>

                    {/* Pricing Info */}
                    <div className="flex items-end justify-center sm:justify-start gap-2 sm:gap-3 mt-3 select-none">
                      <span className="text-white/70 line-through text-[18px] sm:text-[20px] font-sans font-normal mb-1">
                        ₹499/-
                      </span>
                      <span className="text-white font-sans font-bold text-[32px] sm:text-[38px] leading-none">
                        ₹49/-
                      </span>
                      <span className="text-white text-[12px] sm:text-[14px] font-sans font-normal mb-1">
                        Only
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle Column: 3 Pill-Shaped Input Fields */}
                <div className="flex flex-col gap-3 w-full">

                  {/* Full Name */}
                  <div className="relative">
                    <label className="flex items-center gap-3 bg-white rounded-full px-5 h-12 border border-transparent focus-within:border-[#FFF] shadow-sm transition-colors">
                      <User className="w-[18px] h-[18px] text-[#C72D8E] shrink-0" strokeWidth={2} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="flex-1 text-[14px] font-sans font-normal text-[#2C2C2C] placeholder:text-[#999999] outline-none bg-transparent"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-brand-pinkDeep font-sans font-bold pr-1 shrink-0 animate-fadeIn">
                          {errors.name}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <label className="flex items-center gap-3 bg-white rounded-full px-5 h-12 border border-transparent focus-within:border-[#FFF] shadow-sm transition-colors">
                      <Mail className="w-[18px] h-[18px] text-[#C72D8E] shrink-0" strokeWidth={2} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="flex-1 text-[14px] font-sans font-normal text-[#2C2C2C] placeholder:text-[#999999] outline-none bg-transparent"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-brand-pinkDeep font-sans font-bold pr-1 shrink-0 animate-fadeIn">
                          {errors.email}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <label className="flex items-center gap-3 bg-white rounded-full px-5 h-12 border border-transparent focus-within:border-[#FFF] shadow-sm transition-colors">
                      <Smartphone className="w-[18px] h-[18px] text-[#C72D8E] shrink-0" strokeWidth={2} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number"
                        className="flex-1 text-[14px] font-sans font-normal text-[#2C2C2C] placeholder:text-[#999999] outline-none bg-transparent"
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-brand-pinkDeep font-sans font-bold pr-1 shrink-0 animate-fadeIn">
                          {errors.phone}
                        </span>
                      )}
                    </label>
                  </div>

                  {/* Security Message Centered Below Inputs */}
                  <div className="flex items-start sm:items-center justify-center gap-1.5 mt-2 sm:mt-1 text-white/80 select-none px-2 text-left sm:text-center">
                    <Lock className="w-4 h-4 text-white shrink-0 mt-0.5 sm:mt-0" strokeWidth={1.5} />
                    <p className="text-[13px] sm:text-[14px] font-sans font-normal text-white leading-snug sm:leading-normal lg:whitespace-nowrap">
                      Your information is 100% secure and will never be shared.
                    </p>
                  </div>

                </div>

                {/* Right Column: Gold CTA Card Button */}
                <button
                  type="submit"
                  className="bg-[#E8C170] hover:bg-[#F2C852] text-[#3A0A21] font-sans rounded-[18px] p-3 sm:p-4 w-full text-center flex flex-col items-center justify-center leading-snug cursor-pointer transition-all duration-300 shadow-[0_8px_25px_rgba(226,168,62,0.2)] hover:scale-[1.02] select-none outline-none border-0 h-full min-h-[105px] sm:min-h-[125px] lg:min-h-[135px]"
                >
                  <span className="text-[28px] sm:text-[32px] md:text-[37px] font-sans font-bold uppercase tracking-wide">YES!</span>
                  <span className="text-[18px] sm:text-[22px] md:text-[25px] font-sans font-bold mt-1 sm:mt-1.5 uppercase tracking-wide">I WANT TO JOIN</span>
                  <span className="text-[18px] sm:text-[22px] md:text-[25px] font-sans font-bold uppercase tracking-wide">FOR ₹49/-</span>

                  {/* Horizontal Arrow SVG */}
                  <svg className="w-7 h-7 sm:w-9 sm:h-9 mt-2 sm:mt-3 stroke-[#3A0A21]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </button>

              </form>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  )
}