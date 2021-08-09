import { useState, useEffect } from "react"

import "../styles/globals.css"
import { AppProvider } from "@/hooks/AppContext"

import ReactGA from "react-ga"

function MyApp({ Component, pageProps }) {
  const [showColors, setShowColors] = useState(false)
  const [isMobile, setIsMobile] = useState(null)
  const dataProvider = {
    showColors,
    setShowColors,
    isMobile,
    setIsMobile,
  }

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)
    ReactGA.initialize("G-HT1FJTMLVL")
    ReactGA.pageview(window.location.pathname + window.location.search)

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    return setIsMobile(window.innerWidth < 900)
  }

  return (
    <AppProvider value={dataProvider}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
