'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { DividerCenter } from '../Divider/divider'
import { our_approach } from '@/constants/constants'

export default function OurApproach() {
  return (
    <div>
      <section className="bg-softWhite pb-12 ">
        <div className=" mx-auto ">
          <DividerCenter t1={'Our'} t2={'Approach'} />

          <div className="grid lg:grid-cols-12 gap-8 mt-8 p-5 px-16 max-sm:px-4">
            <div className="bg-white p-6 rounded-sm shadow-sm flex lg:flex-row  flex-col justify-around max-lg:items-center md:col-span-7 border border-solid border-primary ">
              <Image
                src="/assets/aboutus/our_team.png"
                alt="Team Members"
                width={338}
                height={279}
                priority
              />

              <div className="space-y-4 max-md:pt-10 flex flex-col justify-between">
                {[
                  { icon: '/assets/aboutus/Frame.svg', text: 'Customer-Centric Service' },
                  { icon: '/assets/aboutus/Frame-1.svg', text: 'Commitment to Excellence' },
                  { icon: '/assets/aboutus/Frame-2.svg', text: 'Long-Term Trust & Care' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-lightGray py-3 px-6 max-sm:px-4 rounded"
                  >
                    <Image
                      src={item.icon}
                      alt="Icon"
                      width={40}
                      height={40}
                      className="min-w-[40px] min-h-[40px] "
                      priority
                    />
                    <span className="font-bold text-black max-sm:text-sm leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neonGreen p-8 text-white md:col-span-5 flex items-center">
              <h3 className="mb-4 text-2xl montserrat-light ">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  {our_approach}
                </motion.div>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
