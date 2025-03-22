'use client'

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
            <h2 className="text-2xl font-bold mb-2">At Ramirez Landscaping</h2>
            <p className="mb-6">
              we take pride in delivering top-quality landscaping services tailored to your needs.
              Our expert team ensures your outdoor space remains lush, vibrant, and well-maintained
              throughout the year.
            </p>
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
            <h2 className="text-3xl font-bold mb-3">{choose_data.h1}</h2>
            <p className="mb-8 text-lg">{choose_data.desc}</p>

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
