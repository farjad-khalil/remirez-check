"use client"
import Hero from '@/components/HeroSection/hero'
import React from 'react'
import { galleryImages, hero_data_gallery } from '@/constants/constants'
import { DividerLeft } from '@/components/Divider/divider'
import Image from 'next/image'
import { ButtonGreen } from '@/components/Button/button'
import Contact from '@/components/aboutus/contact'
import { motion } from 'framer-motion'
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const Gallery = () => {
  return (
    <div>
      <Hero
        t1={hero_data_gallery.t1}
        t2={hero_data_gallery.t2}
        description={hero_data_gallery.description}
        src={hero_data_gallery.src}
      />
      <DividerLeft t1="A Showcase of" t2="Beautiful Landscapes" />

      <motion.div
        className="bg-lightGreen md:mx-40 mx-5 flex flex-col items-center md:grid md:grid-cols-3 gap-10 mb-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {galleryImages.map((src, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Image src={src} alt={`Gallery Image ${index + 1}`} width={440} height={440} priority />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center my-10 md:hidden">
        <ButtonGreen text="Book a Service" />
      </div>
      <div className="mb-10">
        <Contact />
      </div>
    </div>
  )
}

export default Gallery
