import { useEffect, useRef, useState } from 'react'

// Where the content visually travels FROM as it settles into place.
const OFFSETS = {
  left: { x: -70, y: 0 },
  right: { x: 70, y: 0 },
  top: { x: 0, y: -45 },
  bottom: { x: 0, y: 45 },
}

/**
 * Reveal
 * Wraps any block of content and animates it in (slide + fade) from the
 * given direction the moment it scrolls into the viewport. Uses
 * IntersectionObserver so it costs nothing until the element is actually
 * near the screen, and only fires once per element by default.
 *
 * Usage:
 *   <Reveal direction="left"><div>...column content...</div></Reveal>
 */
export default function Reveal({
  children,
  direction = 'bottom',
  delay = 0,
  duration = 800,
  once = true,
  threshold = 0.1,
  className = '',
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the browser can't do IntersectionObserver for some reason, just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    // Safety net: if the element is already on-screen the instant this mounts
    // (e.g. short pages, or the last section on the page where there's no
    // extra room below to scroll into), reveal it immediately instead of
    // waiting on a rootMargin-shrunk intersection that may never arrive.
    const rect = node.getBoundingClientRect()
    const alreadyInView =
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    if (alreadyInView) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(node)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  const { x, y } = OFFSETS[direction] || OFFSETS.bottom

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : `translate3d(${x}px, ${y}px, 0)`,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}