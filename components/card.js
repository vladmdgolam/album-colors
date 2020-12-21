import { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"

import AppContext from "@/hooks/AppContext"
import rgbToHex from "@/lib/rgbToHex"

const H1 = styled.h1`
  margin-top: 5px;
  margin-bottom: 0;
  line-height: 1;
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
  /* &::before {
    content: "";
    display: inline-block;
    padding-bottom: 100%;
  } */
`
const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
  }
`

const Color = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
`

const Img = styled.img`
  will-change: opacity;
  transition: var(--transition);
  opacity: ${({ showColors }) => (showColors ? 0 : 1)};
`

function Card({ song }) {
  const { album, artist, albumLink, color } = song
  const { showColors } = useContext(AppContext)

  const cut = (string) => {
    return string.toLowerCase().replace(/\s/g, "-").replace(/\?/g, "")
  }
  const filename = cut(artist) + "·" + cut(album)

  return (
    <Container>
      <Wrapper href={albumLink}>
        <Color color={color}>
          <Img
            showColors={showColors}
            crossOrigin="Anonymous"
            src={`/albums/${filename}.jpg`}
            alt={album}
          />
        </Color>

        <H1>{album}</H1>
        <H1>{artist}</H1>
      </Wrapper>
    </Container>
  )
}

export default Card
