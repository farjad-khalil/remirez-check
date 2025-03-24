'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { accordion_data, choose_data } from '@/constants/constants'

// Animation Variants
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

const slideInRight = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function ChooseUs() {
  return (
    <section className="bg-neonGreen text-white relative overflow-visible ">
      <div className="max-w-7xl mx-auto relative md:pb-5">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="p-6 pb-0">
            <motion.div
              className="text-2xl font-bold mb-2"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              {choose_data.h1}
            </motion.div>

            <motion.div
              className="mb-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              {choose_data.desc}
            </motion.div>
          </div>

          <div className="px-6">
            <Accordion type="single" collapsible>
              {accordion_data.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 2}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white text-black border-t border-gray-300 my-3"
                  >
                    <AccordionTrigger className="bg-white text-black font-medium hover:no-underline p-4 w-full flex justify-between items-center">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-black p-4 border-t border-gray-300">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div
            className="mt-4"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={accordion_data.length + 3}
          >
            <Image
              src="/assets/home/person-1.png"
              alt="Landscaper with plants"
              width={550}
              height={660}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex ">
          <motion.div
            className="w-1/2 p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-2xl font-bold mb-2" variants={fadeInUp} custom={0}>
              {choose_data.h1}
            </motion.div>

            <motion.div className="mb-6" variants={fadeInUp} custom={1}>
              {choose_data.desc}
            </motion.div>

            <Accordion type="single" collapsible defaultValue="item-0">
              {accordion_data.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index + 2}>
                  <AccordionItem value={`item-${index}`} className="border-t border-white/20 py-1">
                    <AccordionTrigger className="bg-white text-black text-left p-4 font-medium hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-white text-black p-4">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="w-1/2 relative overflow-visible"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute right-7 bottom-4 h-[calc(100%+4rem)]">
              <Image
                src="/assets/home/person-1.png"
                alt="Landscaper with plants"
                width={660}
                height={770}
                className="h-full object-contain scale-110 "
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
