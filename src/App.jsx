import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import Home from './pages/Home'
import Services from './pages/Services'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

  const openContactModal = (packageType = '') => {
    setSelectedPackage(packageType)
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
    setSelectedPackage('')
  }

  // Initialize Google Tag Manager
  useEffect(() => {
    // GTM initialization code
    const script = document.createElement('script')
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXXX');
    `
    document.head.appendChild(script)

    // GTM noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
    document.body.appendChild(noscript)

    return () => {
      document.head.removeChild(script)
      document.body.removeChild(noscript)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onContactClick={openContactModal} />
      
      <main>
        <Routes>
          <Route path="/" element={<Home onContactClick={openContactModal} />} />
          <Route path="/services" element={<Services onContactClick={openContactModal} />} />
          <Route path="/process" element={<Process onContactClick={openContactModal} />} />
          <Route path="/pricing" element={<Pricing onContactClick={openContactModal} />} />
          <Route path="/case-studies" element={<CaseStudies onContactClick={openContactModal} />} />
          <Route path="/about" element={<About onContactClick={openContactModal} />} />
          <Route path="/contact" element={<Contact onContactClick={openContactModal} />} />
        </Routes>
      </main>
      
      <Footer onContactClick={openContactModal} />
      
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        selectedPackage={selectedPackage}
      />
    </div>
  )
}

export default App

