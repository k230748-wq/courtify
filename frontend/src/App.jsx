import { useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import WhoIsItFor from "./components/WhoIsItFor"
import Preloader from "./components/Preloader"
import WaitList from "./components/Waitlist"
import ProblemSection from "./components/ProblemSection"
import HowItWorks from "./components/HowItWorks"
import KeyFeatures from "./components/KeyFeatures"
import WhyCourtify from "./components/WhyCourtify"
import ForVendorsCTA from "./components/ForVendorsCTA"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import SeparatorLine from "./components/SeparatorLine"

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div>
          <Navbar />
          <Hero />

          <SeparatorLine />
          <ProblemSection />

          <SeparatorLine />
          <WhyCourtify />

          <SeparatorLine />
          <WhoIsItFor />
          
          <SeparatorLine />
          <HowItWorks />
          
          <SeparatorLine />
          <KeyFeatures />
          
          <SeparatorLine />
          <WaitList />
          
          <SeparatorLine />
          <ForVendorsCTA />

          <SeparatorLine />
          <FAQ />

          <SeparatorLine />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
