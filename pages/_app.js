import { useState, useEffect } from "react"

import "../styles/globals.css"
import { AppProvider } from "@/hooks/AppContext"

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
