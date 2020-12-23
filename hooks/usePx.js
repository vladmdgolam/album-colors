import useIsMobile from "./useIsMobile"

const usePx = (amount) => {
  const isMobile = useIsMobile()
  return `calc((100vw/${isMobile ? 375 : 1440}) * ${amount})`
}

export default usePx
