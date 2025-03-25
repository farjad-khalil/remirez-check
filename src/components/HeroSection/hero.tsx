'use client'
import Image from 'next/image'
import { ButtonGreenBright, ButtonWhite } from '../Button/button'
import { motion } from 'framer-motion'
type HeroProps = {
  t1: string
  t2: string
  description: React.ReactNode
  src: string
  extra_class?: string
  buttons?: boolean
  btn_1?: string
  btn_2?: string
  to_1?: string
  to_2?: string
}
export default function Hero({
  t1,
  t2,
  description,
  src,
  extra_class,
  buttons = false,
  btn_1,
  btn_2,
  to_1,
  to_2,
}: HeroProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`relative  h-[600px] ${extra_class} `}>
      {/* Background Image */}
      <Image
        src={src} // Now it works
        alt="Hero"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute md:px-44 max-md:px-20 max-sm:px-0  inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-10 text-center">
        <div>
          <h1 className="text-4xl max-sm:text-2xl md:text-7xl font-bold mb-6 px-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t1} <span className="text-BrightGreen">{t2}</span>
            </motion.div>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h1>{description}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {buttons ? (
              <div className="py-20 flex gap-10 justify-center max-md:flex-col items-center">
                <ButtonWhite
                  text={btn_1}
                  to={to_1}
                  // onClick={() => scrollToSection('contact-section')}
                />

                <ButtonGreenBright text={btn_2} to={to_2} />
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
