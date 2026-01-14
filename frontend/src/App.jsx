import { useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import WhoIsItFor from "./components/WhoIsItFor"
import Preloader from "./components/Preloader"

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div>
          <Navbar />
          <Hero />
          <WhoIsItFor />
        </div>
      )}
    </>
  )
}

export default App
