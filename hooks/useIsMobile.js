import { useEffect, useState } from "react"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState()

  useEffect(() => {
    handleWindowSizeChange()
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [isMobile])

  const handleWindowSizeChange = () => {
    return setIsMobile(window.innerWidth < 900 ? true : false)
  }

  return isMobile
}

export default useIsMobile
