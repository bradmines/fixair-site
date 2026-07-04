import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeComfort from '../components/HomeComfort'
import Services from '../components/Services'
import Financing from '../components/Financing'
import About from '../components/About'
import WhyChoose from '../components/WhyChoose'
import Testimonials from '../components/Testimonials'
import ServiceArea from '../components/ServiceArea'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MobileCallBar from '../components/MobileCallBar'
import { generalFaqs } from '../data/faqs'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeComfort />
        <Services />
        <Financing />
        <About />
        <WhyChoose />
        <Testimonials />
        <ServiceArea />
        <FAQ
          faqs={generalFaqs}
          heading="Frequently Asked Questions"
          moreHref="/faq/"
          moreLabel="See all HVAC FAQs"
        />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
