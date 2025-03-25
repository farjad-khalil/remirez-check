'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { our_story_text } from '@/constants/constants'
export default function OurStory() {
  return (
    <div>
      <section className="bg-white py-12 ">
        <div className=" ">
          <div className="grid md:grid-cols-2 ">
            <div className="bg-neonGreen p-8 text-white py-14 px-9 max-sm:py-9 max-sm:px-5  md:px-16 ">
              <div className="md:text-7xl text-2xl font-bold mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  Our Story
                </motion.div>
              </div>

              <div className="mb-4">
                <div className="">
                  <span className="md:text-2xl text-lg font-bold text-white mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </span>
                  <span className="md:text-2xl text-lg montserrat-light  text-white ">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                      <span className="font-bold"> {our_story_text.heading} </span>
                      {our_story_text.description}
                    </motion.div>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/assets/aboutus/our_story.png"
                alt="Garden Pergola"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
