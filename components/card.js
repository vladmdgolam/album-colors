import { useRef, useContext, useEffect } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"
import { useInView } from "react-intersection-observer"

import selected from "@/data/selected"
import AppContext from "@/hooks/AppContext"
import rgbToHex from "@/lib/rgbToHex"
import usePx from "@/hooks/usePx"
import { sm, xl } from "@/data/constants"
import getFileName from "@/lib/getFilename"
import { Caption } from "@/components/typography"

const Single = styled.h3`
  margin: 0;
  font-size: ${() => usePx(20)};
  line-height: 1;
  font-style: italic;
  letter-spacing: -0.03em;
  text-transform: lowercase;
  margin-left: ${() => usePx(10)};
`

const Album = styled.div`
  margin-top: 0;
  margin-bottom: ${() => usePx(20)};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  h3 {
    line-height: 1.14;
    font-size: ${() => usePx(21)};
  }
  display: flex;
  font-weight: normal;
`
const Artist = styled(Album)`
  margin: 0;
  font-size: ${() => usePx(21)};
  text-transform: uppercase;
`
const ColorHex = styled(Artist)`
  ${sm} {
    margin-left: ${() => usePx(10)};
  }
`

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
  ${sm} {
    grid-column: span 3;
  }
`
const Wrapper = styled.a`
  &:hover {
    text-decoration: none;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;

  img {
    width: 100%;
    position: absolute;
    max-height: 100%;
    top: 0;
    object-fit: cover;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Color = styled.div`
  background-color: ${({ color }) => color};
  display: flex;

  padding-bottom: 100%;
  position: relative;
  height: 0;
  width: 100%;
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

  const single = album.search("Single")

  const filename = getFileName(artist, album)
  const clearedAlbum = album
    .replace(/\s\-\sEP/g, "")
    .replace(/\s\-\sSingle/g, "")

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <Container ref={ref} big={selected.selected.includes(id)}>
      <Wrapper href={albumLink}>
        <Color color={color}>
          {inView && (
            <Img
              showColors={showColors}
              crossOrigin="Anonymous"
              src={filename}
              alt={artist + " " + clearedAlbum}
            />
          )}
        </Color>

        <Info>
          <Album>
            <h3>{clearedAlbum}</h3> {single != -1 && <Single>сингл</Single>}
          </Album>
          <Flex>
            <Artist>{artist}</Artist>
            <ColorHex>{color === "#fff" ? "∞" : color}</ColorHex>
          </Flex>
        </Info>
      </Wrapper>
    </Container>
  )
}

export default Card
