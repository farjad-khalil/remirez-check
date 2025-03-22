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

export default function ChooseUs() {
  return (
    <section className="bg-neonGreen text-white relative overflow-visible">
      <div className="max-w-7xl mx-auto relative md:pb-5">
        {/* Mobile Layout (stacked) */}
        <div className="block md:hidden">
          <div className="p-6 pb-0">
            <div className="text-2xl font-bold mb-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {choose_data.h1}
              </motion.div>
            </div>
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {choose_data.desc}
              </motion.div>
            </div>
          </div>

          <div className="px-6">
            <Accordion type="single" collapsible>
              {accordion_data.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white  text-black border-t border-gray-300 my-3"
                >
                  {/* Accordion Header */}
                  <AccordionTrigger className="bg-white text-black font-medium hover:no-underline p-4 w-full flex justify-between items-center">
                    {item.title}
                  </AccordionTrigger>

                  {/* Accordion Content */}
                  <AccordionContent className="bg-white text-black p-4 border-t border-gray-300">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-4">
            <Image
              src="/assets/home/person-1.png"
              alt="Landscaper with plants"
              width={550}
              height={660}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="w-1/2 p-12">
            <div className="text-2xl font-bold mb-2">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {choose_data.h1}
              </motion.div>
            </div>
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {choose_data.desc}
              </motion.div>
            </div>

            <Accordion type="single" collapsible defaultValue="item-0">
              {accordion_data.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t border-white/20 py-1"
                >
                  <AccordionTrigger className="bg-white text-black text-left p-4 font-medium hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="bg-white text-black p-4  ">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-1/2 relative overflow-visible">
            <div className="absolute right-0 bottom-4 h-[calc(100%+4rem)] ">
              <Image
                src="/assets/home/person-1.png"
                alt="Landscaper with plants"
                width={660}
                height={770}
                className="h-full object-contain scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
