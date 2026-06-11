import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Financing from './components/Financing'
import Testimonials from './components/Testimonials'
import ServiceArea from './components/ServiceArea'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCallBar from './components/MobileCallBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChoose />
        <Financing />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  )
}
