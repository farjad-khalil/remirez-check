import { DividerLeft } from '@/components/Divider/divider'
import Hero from '@/components/HeroSection/hero'
import Sections from '@/components/Services/section'
import { hero_data_services, sections } from '@/constants/constants'
import React from 'react'
import Contact from '@/components/aboutus/contact'
import Container from '@/components/Layout/container'

const Services = () => {
  console.log(sections)

  return (
    <div>
      <Hero
        t1={hero_data_services.t1}
        t2={hero_data_services.t2}
        description={hero_data_services.description}
        src={hero_data_services.src}
      />
      <Container>
        <DividerLeft t1={'See'} t2={'How We Help'} />
        {sections.map((sec, i) => (
          <div key={i}>
            <Sections
              index={i}
              title={sec.title}
              h1={sec.h1}
              h2={sec.h2}
              h3={sec.h3}
              desc_1={sec.desc_1}
              desc_2={sec.desc_2}
              desc_3={sec.desc_3}
              img={sec.img}
              icon={sec.icon}
              hoverIcon={sec.hoverIcon}
            />
          </div>
        ))}
        <Contact />
      </Container>
    </div>
  )
}

export default Services
