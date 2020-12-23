import { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"

import AppContext from "@/hooks/AppContext"
import rgbToHex from "@/lib/rgbToHex"
import usePx from "@/hooks/usePx"
import { xl } from "@/data/constants"

const Album = styled.h1`
  margin-top: 0;
  margin-bottom: ${() => usePx(20)};
  line-height: 1.14;
  font-size: ${() => usePx(21)};
  font-weight: normal;
`
const Artist = styled(Album)`
  margin: 0;
  font-size: ${() => usePx(21)};
`
const ColorHex = styled(Artist)``

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ color }) => (color ? color : "transparent")};
  padding: ${() => usePx(20)};
  border: 1px solid ${({ color }) => (color ? color : "var(--text-color)")}; ;
`
const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  grid-column: ${({ big }) => (big ? "span 2" : "initial")};
  grid-row: ${({ big }) => (big ? "span 2" : "initial")};

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

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Info = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  padding-top: ${() => usePx(25)};
  flex-grow: 1;
`

function Card({ song }) {
  const { album, artist, albumLink, color, id } = song
  const { showColors } = useContext(AppContext)

  const cut = (string) => {
    return string.toLowerCase().replace(/\s/g, "-").replace(/\?/g, "")
  }
  const filename = cut(artist) + "·" + cut(album)
  const clearedAlbum = album.replace(/\s\-\sEP/g, "")

  const bigger = ["1497115892"]

  return (
    <Container big={bigger.includes(id)}>
      <Wrapper href={albumLink}>
        <Color color={color}>
          <Img
            showColors={showColors}
            crossOrigin="Anonymous"
            src={`/albums/${filename}.jpg`}
            alt={{ artist } + " " + clearedAlbum}
          />
        </Color>

        <Info>
          <Album>{clearedAlbum}</Album>
          <Flex>
            <Artist>{artist}</Artist>
            <ColorHex>{color}</ColorHex>
          </Flex>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default Card
