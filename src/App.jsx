import Header from './components/Header'
import About from './components/About'
import Message from './components/Message'
import HowIHelp from './components/HowIHelp'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Header />
      <main className="pb-14">
        <About />
        <Message />
        <HowIHelp />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
