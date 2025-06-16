import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles

import './Home.css'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import FeaturesSection from './FeaturesSection'
import VideoSection from './VideoSection'
import TestimonialSection from './TestimonialSection'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <div className="home-page">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <VideoSection />
      <TestimonialSection />
    </div>
  )
}

export default Home
