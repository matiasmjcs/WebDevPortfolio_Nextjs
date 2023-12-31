'use client'
import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils' 

interface ParallaxProps {
  children: string
  baseVelocity: number
}

/**
 * Renders a parallax effect on a text component.
 *
 * @param {ParallaxProps} props - The props for the ParallaxText component.
 * @param {React.ReactNode} props.children - The text content to be rendered.
 * @param {number} props.baseVelocity - The base velocity for the parallax effect. Default is 100.
 * @return {JSX.Element} - The rendered ParallaxText component.
 */
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })
  return (
    <div className={"parallax"}>
      <motion.div className={"scroller"} style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  )
}

/**
 * Renders the Animation component.
 *
 * @return {JSX.Element} The rendered Animation component.
 */
export default function Animation() {
  return (
    <section data-testid="animation-component" className={"section"}>
      <ParallaxText baseVelocity={-2}>
        React.js typescript Angular Redux React-query
      </ParallaxText>
      <ParallaxText baseVelocity={2}>
        Next.js Node.js Tailwind HTML CSS MongoDB Express
      </ParallaxText>
    </section>
  )
}
