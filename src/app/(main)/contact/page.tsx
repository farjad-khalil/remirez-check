import { DividerLeft } from '@/components/Divider/divider'
import ContactForm from '@/components/contact/form'
import ContactInfo from '@/components/contact/contactinfo'
import { hero_data_contactus } from '@/constants/constants'
import Hero from '@/components/HeroSection/hero'

export default function Home() {
  return (
    <div className="">
      <Hero
        t1={hero_data_contactus.t1}
        t2={hero_data_contactus.t2}
        description={hero_data_contactus.description}
        src={hero_data_contactus.src}
      />
      <DividerLeft t1={'Get'} t2="In Touch" />
      <ContactForm />
      <ContactInfo />
    </div>
  )
}
