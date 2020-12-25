import { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"

import selected from "@/data/selected"
import AppContext from "@/hooks/AppContext"
import rgbToHex from "@/lib/rgbToHex"
import usePx from "@/hooks/usePx"
import { xl } from "@/data/constants"
import getFileName from "@/lib/getFilename"

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
  border: 1px solid ${({ color }) => (color ? color : "var(--text-color)")};
  &:hover {
    border-style: dashed;
  }

  ${xl} {
    grid-column: ${({ big }) => (big ? "span 2" : "initial")};
    grid-row: ${({ big }) => (big ? "span 2" : "initial")};
  }
`
const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

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

  const filename = getFileName(artist, album)
  const clearedAlbum = album.replace(/\s\-\sEP/g, "")

  return (
    <Container big={selected.selected.includes(id)}>
      <Wrapper href={albumLink}>
        <Color color={color}>
          <Img
            showColors={showColors}
            crossOrigin="Anonymous"
            src={filename}
            alt={artist + " " + clearedAlbum}
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
