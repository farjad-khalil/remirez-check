'use client'
import { motion } from 'framer-motion'

export function DividerCenter({ t1, t2 }: { t1: string; t2: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center w-full bg-white md:pt-12 md:px-14 pt-4 px-4 max-sm:px-5"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[1px] md:h-[2.5px] bg-neonGreen origin-left"
      />
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="px-4 md:text-6xl text-3xl font-semibold"
      >
        <span className="text-black">{t1}</span> <span className="text-neonGreen">{t2}</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[1px] md:h-[2.5px] bg-neonGreen origin-right"
      />
    </motion.div>
  )
}
export function DividerLeft({ t1, t2 }: { t1: string; t2: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center w-full bg-white pt-12 px-5 pb-8 md:pb-16 md:px-10 max-sm:px-2"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="px-4 max-sm:px-2 md:text-4xl text-lg font-semibold"
      >
        <span className="text-black montserrat-regular">{t1}</span>{' '}
        <span className="text-neonGreen">{t2}</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex-1 h-[2.5px] mx-4 bg-neonGreen origin-left"
      />
    </motion.div>
  )
}
