import { useState } from "react"

import "../styles/globals.css"
import { AppProvider } from "@/hooks/AppContext"

function MyApp({ Component, pageProps }) {
  const [showColors, setShowColors] = useState(false)
  const dataProvider = {
    showColors,
    setShowColors,
  }
  return (
    <AppProvider value={dataProvider}>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
