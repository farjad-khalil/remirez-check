'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { offer_data, services_heading } from '@/constants/constants'
import { containerVariants, itemVariants } from '@/constants/constants'
export default function Offer() {
  return (
    <section className=" mx-14 pb-10 max-sm:mx-5">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Heading and Plant Image */}
        <div className="space-y-8">
          <div>
            <h2 className="md:text-4xl text-2xl max-sm:text-base  font-bold text-neutral-600 mb-8 leading-tight">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {services_heading.h1}
              </motion.div>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p className="text-2xl max-sm:text-base  text-neonGreen">{services_heading.desc}</p>
            </motion.div>
          </div>

          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/home/plant.png"
              alt="Decorative plant arrangement with rocks"
              width={500}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Column - Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offer_data.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-neutral-100 overflow-hidden rounded-sm pb-2"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={service.image || '/placeholder.svg'}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-4 max-sm:py-2">
                <h3 className="text-xl max-md:text-2xl font-bold text-neonGreen mb-2 max-sm:mb-0">
                  {service.title}
                </h3>
                <br />
                <p className="text-gray-700 max-md:text-lg font-medium">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
