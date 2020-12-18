import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900)

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [isMobile])

  const handleWindowSizeChange = () => {
    return setIsMobile(window.innerWidth < 900)
  }

  return isMobile
}

export default useIsMobile
