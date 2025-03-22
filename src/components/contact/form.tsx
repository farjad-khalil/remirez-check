'use client'

import Image from 'next/image'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { motion } from 'framer-motion'

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
  const [snackbar, setSnackbar] = useState<{
    open: boolean
    message: string
    severity: 'error' | 'warning' | 'info' | 'success'
  }>({
    open: false,
    message: '',
    severity: 'success',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSnackbar({ open: false, message: '', severity: 'success' })

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
        setSnackbar({ open: true, message: 'Email sent successfully!', severity: 'success' })
        setFormData({ fullName: '', email: '', phone: '', message: '' })
      } else {
        setSnackbar({
          open: true,
          message: result.error || 'Failed to send email.',
          severity: 'error',
        })
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message)
      } else {
        console.error('Unknown error occurred')
      }
      setSnackbar({
        open: true,
        message: 'Something went wrong. Please try again later.',
        severity: 'error',
      })
    }

    setLoading(false)
  }

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center bg-offWhite min-h-screen p-10 md:px-24 max-sm:p-4 gap-6">
      {/* Left - Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative h-[650px] max-sm:h-auto bg-neonGreen p-10 max-sm:p-4 w-full md:w-1/2 text-white px-8 md:px-20 overflow-hidden flex flex-col"
      >
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
            >
              {loading ? 'Sending...' : 'Contact us'}
            </button>
          </motion.div>
        </form>
      </motion.div>

      {/* Right - Image Section */}
      <motion.div
        className="w-full h-[650px] md:w-1/2 flex justify-center md:justify-end max-md:hidden"
        initial={{ opacity: 0, x: 100 }}
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

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </section>
  )
}

export default ContactForm
