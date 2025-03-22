'use client'

import { motion } from 'framer-motion'
import { home_info } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import { ButtonGreen } from '../Button/button'

export default function Info() {
  return (
    <div>
      <section className="bg-white pb-10 mx-8 max-sm:mx-5 md:mx-14">
        <div className=" ">
          <div className="grid md:grid-cols-12 ">
            <div className="col-span-7">
              <Image
                src="/assets/home/who_we_are.png"
                alt="Garden Pergola"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="bg-neonGreen text-white py-4 px-4 md:py-10 md:px-10 col-span-5 ">
              <div className="mb-4">
                <div className="">
                  <span className="md:text-4xl text-2xl font-bold text-white mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                      {home_info.heading}
                    </motion.div>

                    <br />
                  </span>

                  <span className="md:text-lg  text-sm montserrat-light  text-white ">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    >
                      {home_info.description}
                    </motion.div>
                  </span>
                  <div className="mt-10 max-md:flex max-md:justify-center">
                    <ButtonGreen text="Read More" hover={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
