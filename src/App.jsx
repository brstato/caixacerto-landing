import './App.css'
import HeroSection from './components/HeroSection'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import UpcomingFeatures from './components/UpcomingFeatures'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import PricingSection from './components/PricingSection'

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSolution />
      <Features />
      <PricingSection />
      <Testimonials />
      <CallToAction />
      <UpcomingFeatures />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

