import { useRef, useState, useContext } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"

import AppContext from "@/hooks/AppContext"
import rgbToHex from "@/lib/rgbToHex"

const H1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 0;
  line-height: 1;

  font-family: "Suisse Int'l";
  font-size: 20px;

  font-weight: normal;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ color }) => (color ? color : "transparent")};
  &::before {
    content: "";
    display: inline-block;
    padding-bottom: 100%;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  img {
    width: 100%;
    height: auto;
  }
`

function Card({ song }) {
  const { picture, album, artist } = song
  const [color, setColor] = useState(null)
  const imgRef = useRef(null)
  const { showColors } = useContext(AppContext)

  // const getColor = () => {
  //   const colorThief = new ColorThief()
  //   imgRef.current.crossOrigin = "Anonymous"
  //   let img = imgRef.current
  //   img.crossOrigin = "Anonymous"

  //   const result = colorThief.getColor(img, 100)
  //   const futureColor = rgbToHex(...result)
  //   setColor(futureColor)
  // }

  // const { data: dominantColor, loading, error } = useColor(picture, "hex", {
  //   crossOrigin: "Anonymous",
  //   quality: 100,
  // })

  return (
    <Container color={color}>
      <Wrapper>
        <img
          crossOrigin="Anonymous"
          ref={imgRef}
          src={picture}
          alt={album}
          // onLoad={getColor}
        />
        <H1>{album}</H1>
        <H1>{artist}</H1>
      </Wrapper>
    </Container>
  )
}

export default Card
