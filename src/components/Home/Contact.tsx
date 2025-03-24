'use client'

import { motion } from 'framer-motion'
import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { contact_data } from '@/constants/constants'
import Input from './Input'

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const slideIn = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
})

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    type: 'general',
    services: [],
  })
  type FieldName = 'fullName' | 'email' | 'phone'

  const fields: { name: FieldName; type: string; placeholder: string }[] = [
    { name: 'fullName', type: 'text', placeholder: 'Full Name' },
    { name: 'email', type: 'email', placeholder: 'Email Address' },
    { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
  ]
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('https://email-service-20kt.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formData.type,
          clientName: 'Excilify',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          ...(formData.type === 'service' ? { services: formData.services } : {}),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to submit free estimate request.')
      }

      setSuccess('Request sent successfully!')
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        type: 'general',
        services: [],
      })
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Something went wrong. Please try again later.'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto bg-neutral-50 border-4 border-neutral-200 rounded-md shadow-sm overflow-visible max-sm:overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 items-center">
          {/* Left Image */}
          <motion.div
            className="relative order-2 md:order-1 mt-6 md:mt-0 md:h-full flex items-end justify-center md:justify-start"
            variants={slideIn('right')}
          >
            <div className="relative md:absolute  md:-bottom-11 md:h-[110%]">
              <Image
                src="/assets/home/person-2.png"
                alt="Landscaper with plants and tools"
                width={660}
                height={790}
                className="h-full object-contain md:scale-110"
                priority
              />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="p-8 md:p-10 relative order-1 md:order-2"
            variants={slideIn('right')}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl font-bold text-neonGreen mb-4"
              variants={fadeInUp}
              custom={0}
            >
              {contact_data.h1}
            </motion.h2>

            {/* Description */}
            <motion.p className="text-gray-600 mb-6" variants={fadeInUp} custom={1}>
              {contact_data.desc}
            </motion.p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {fields.map((field, i) => (
                <motion.div key={field.name} variants={fadeInUp} custom={i + 2}>
                  <Input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                </motion.div>
              ))}

              <motion.div variants={fadeInUp} custom={5}>
                <textarea
                  name="message"
                  placeholder="Enter Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 border-2 border-neonGreen rounded-sm focus:outline-none focus:ring-1 focus:ring-neonGreen resize-none placeholder:text-black"
                />
              </motion.div>

              <motion.div className="flex justify-end" variants={fadeInUp} custom={6}>
                <button
                  type="submit"
                  className="bg-neonGreen text-white px-8 py-3 font-medium border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-neonGreen hover:border-neonGreen"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Contact Us'}
                </button>
              </motion.div>
            </form>

            {/* Success/Error messages */}
            {success && (
              <motion.p className="text-green-600 mt-4" variants={fadeInUp} custom={7}>
                {success}
              </motion.p>
            )}
            {error && (
              <motion.p className="text-red-600 mt-4" variants={fadeInUp} custom={8}>
                {error}
              </motion.p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
