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
  /* margin-top: 0; */
  margin-top: ${() => usePx(20)};
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
  ${sm} {
    grid-column: span 3;
  }
`
const Wrapper = styled.div`
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

const Card = () => {
  const { showColors } = useContext(AppContext)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <Container ref={ref}>
      <Wrapper>
        <Color color="#303030">
          {inView && (
            <Img
              showColors={showColors}
              src="/playlist.png"
              alt="Album Colors playlist cover"
            />
          )}
        </Color>

        <Info>
          <Album>
            {/* <a href="https://music.apple.com/ru/playlist/%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%BE%D0%B2-2020/pl.u-oVdlIqMJgex"> */}
            <h3>Apple Music</h3>
            {/* </a> */}
          </Album>
          <Flex>
            <Artist>
              {/* <a href="https://open.spotify.com/playlist/40SDjHeZqQhlrs6x8KIwh7?si=mlIvh3WLQpqjgv2jSLdQFw"> */}
              Spotify
              {/* </a> */}
            </Artist>
          </Flex>
        </Info>

        {/* <Info>
          <Album>
            <h3>heeeeeee</h3>
          </Album>
          <Flex>
            <Artist>hiiiiii</Artist>
            <ColorHex>heyyyy</ColorHex>
          </Flex>
        </Info> */}

        {/* <Info> */}
        {/* <Flex> */}
        {/* <div>
            <a href="https://music.apple.com/ru/playlist/%D1%86%D0%B2%D0%B5%D1%82%D0%B0-%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC%D0%BE%D0%B2-2020/pl.u-oVdlIqMJgex">
              <Artist>Apple Music</Artist>
            </a>
            <Artist>
              <a href="https://open.spotify.com/playlist/40SDjHeZqQhlrs6x8KIwh7?si=mlIvh3WLQpqjgv2jSLdQFw">
                Spotify
              </a>
            </Artist>
            </div> */}
        {/* </Flex> */}
        {/* </Info> */}
      </Wrapper>
    </Container>
  )
}

export default Card
