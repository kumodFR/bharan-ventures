'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: React.ReactNode
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px"
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection