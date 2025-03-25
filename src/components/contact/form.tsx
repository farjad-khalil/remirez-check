'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { ImSpinner2 } from 'react-icons/im'
import { AiOutlineCheck } from 'react-icons/ai'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    try {
      const response = await fetch('https://email-service-20kt.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'general',
          clientName: 'Excilify',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()
      if (response.ok && result.success) {
        setFormData({ fullName: '', email: '', phone: '', message: '' })

        // Show success toast
        toast.success('Message sent successfully!')

        setSuccess(true)
        // Hide success state after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        // Show success toast
        toast.error(result.error)
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error('Unknown error occurred')
      }

      toast.error('Something went wrong. Please try again later.')
    }

    setLoading(false)
  }

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-offWhite min-h-screen p-10 custom-1170:px-24 px-10 max-sm:p-4 gap-6">
      {/* Left - Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative  h-[650px]   max-sm:h-auto bg-neonGreen p-10 max-sm:p-4 w-full md:w-1/2 text-white px-6 xl:px-20 lg:px-14  overflow-hidden flex flex-col"
      >
        {/* Toast Container */}
        <ToastContainer />

        {/* Leaves Image Positioned at Bottom Right */}
        <div className="absolute bottom-0 -right-20 w-[450px]">
          <Image
            src="/assets/contact/leaves.png"
            alt="Decorative Leaves"
            width={550}
            height={550}
            className="w-[450px] h-auto"
            priority
          />
        </div>

        <motion.h2
          className="md:text-3xl text-xl font-bold mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Want a Free Estimate?
        </motion.h2>

        <motion.p
          className="mb-6 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          We&apos;re here to bring your outdoor vision to life! Whether you need landscape design,
          tree trimming, sod installation, or seasonal cleanup, our expert team is ready to assist.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10 w-full">
          {['fullName', 'email', 'phone'].map((field, i) => (
            <motion.input
              key={field}
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              placeholder={
                field === 'fullName'
                  ? 'Full Name'
                  : field === 'email'
                    ? 'Email Address'
                    : 'Phone Number'
              }
              className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              required
            />
          ))}

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={4}
            className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            required
          ></motion.textarea>

          <motion.div
            className="py-2 flex justify-end"
            variants={fadeUp}
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <button
              type="submit"
              className="bg-white text-neonGreen px-8 py-3 font-medium border-2 border-neonGreen transition-all duration-300 hover:bg-neonGreen hover:text-white hover:border-white"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <ImSpinner2 className="text-xl animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : success ? (
                <div className="flex items-center gap-2">
                  <AiOutlineCheck className="text-xl animate-bounce" />
                  <span>Sent!</span>
                </div>
              ) : (
                'Contact Us'
              )}
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Right - Image Section */}
      <motion.div
        className="w-full h-[650px] md:w-1/2 flex justify-center md:justify-end max-md:hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/assets/contact/form.png"
          alt="Person Working"
          width={650}
          height={550}
          className="object-cover max-w-full"
          priority
        />
      </motion.div>
    </section>
  )
}

export default ContactForm
