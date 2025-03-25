'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ButtonGreenBright, ButtonWhite } from '../Button/button'
import { contactus_data } from '@/constants/constants'

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  return (
    <section className="relative mb-10 py-16 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-black opacity-95 "
        style={{
          backgroundImage: "url('/assets/aboutus/contact.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      ></div>

      <motion.div
        className="container mx-auto px-4 max-md:px-7 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl max-sm:text-2xl font-bold mb-4" variants={itemVariants}>
          Elevate Your <span className="text-BrightGreen">Green Space!</span>
        </motion.h2>

        <motion.p className="max-w-2xl mx-auto mb-8 font-semibold" variants={itemVariants}>
          {contactus_data}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 items-center"
          variants={itemVariants}
        >
          <ButtonWhite text={'Contact Us'} to="/contact" />
          <ButtonGreenBright text={'Call us'} to={'tel:(516) 270-7024'} />
        </motion.div>
      </motion.div>
    </section>
  )
}
