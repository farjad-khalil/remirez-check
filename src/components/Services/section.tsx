'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ButtonGreen, ButtonLight } from '../Button/button'
import Image from 'next/image'

type SectionProps = {
  index: number
  title: string
  h1: string
  h2: string
  h3: string
  desc_1: string
  desc_2: string
  desc_3: string
  img: string
  icon: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const imageVariant = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
})

export default function Section({
  index,
  title,
  h1,
  h2,
  h3,
  desc_1,
  desc_2,
  desc_3,
  img,
  icon,
}: SectionProps) {
  const isEven = index % 2 === 0

  return (
    <section className="p-14 max-md:p-10 max-sm:p-6 bg-lightGreen mb-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center ">
        {/* Left Image Section */}
        <motion.div
          className={`relative w-full md:w-5/12 mt-14 max-md:p-3 max-md:pl-14 md:mt-0 order-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}
          variants={imageVariant(isEven)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="border-4 border-neonGreen relative">
            <Image
              src={img}
              alt="Landscape Design"
              width={600}
              height={400}
              className="relative w-full h-auto -top-9 -left-9"
              priority
            />
          </div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          className={`w-full md:w-1/2 md:px-16 order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-neonGreen flex items-center gap-3"
            variants={fadeInUp}
            custom={0}
          >
            <Image src={icon} alt="Icon" width={80} height={80} priority />
            {title}
          </motion.h2>

          {/* Features List */}
          <div className="mt-6 space-y-6 px-4 md:px-10 md:text-lg">
            {[
              { h: h1, d: desc_1 },
              { h: h2, d: desc_2 },
              { h: h3, d: desc_3 },
            ].map(({ h, d }, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                variants={fadeInUp}
                custom={i + 1}
              >
                <div className="text-3xl text-neonGreen font-bold">✔</div>
                <div>
                  <h3 className="md:text-lg font-bold">{h}</h3>
                  <p className="text-gray-700">{d}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="flex p-10 max-md:justify-center max-md:hidden"
              variants={fadeInUp}
              custom={4}
            >
              {isEven ? (
                <ButtonGreen text={'Book Service'} />
              ) : (
                <ButtonLight text={'Book Service'} />
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Button */}
        <motion.div
          className="flex p-10 max-md:justify-center order-3 md:hidden"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={5}
          viewport={{ once: true }}
        >
          {isEven ? <ButtonGreen text={'Book Service'} /> : <ButtonLight text={'Book Service'} />}
        </motion.div>
      </div>
    </section>
  )
}
