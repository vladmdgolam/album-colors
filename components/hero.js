import { useContext } from "react"
import styled from "styled-components"
import AppContext from "@/hooks/AppContext"
import getFileName from "@/lib/getFilename"
import usePx from "@/hooks/usePx"
import { sm, xl } from "@/data/constants"

const Container = styled.div`
  grid-column: span 3;
  border: 1px solid var(--text-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    padding-bottom: 88%;
  }

  @media (max-width: 769px) {
    grid-column: span 2;

    &:after {
      content: "";
      padding-bottom: 120%;
    }
  }

  @media (max-width: 512px) {
    grid-column: span 1;
  }
`

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Cover = styled.a`
  position: relative;
  width: 60%;
  margin: 0 auto;
  background-color: ${(props) => props.hexadecimal};

  display: block;
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const CoverCircle = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.heroimageurl});
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.showCovers ? "1" : "0")};

  @media (max-width: 769px) {
    width: 60%;
    height: 60%;
  }
`

const CoverContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${(props) => props.heroimageurl});
  transition: opacity 0.3s ease, transform 0.3s ease 0.3s;
  opacity: ${(props) => (props.showCovers ? "1" : "0")};
  left: 0;
  top: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TopText = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  text-transform: uppercase;
  width: calc(90% - 40px);
  line-height: 1;

  @media (max-width: 512px) {
    left: 10px;
    top: 10px;
  }
`

const RightContent = styled.div`
  position: absolute;
  ${xl} {
    right: ${() => usePx(-322.5)};
  }
`

const RightText = styled.h3`
  display: block;
  text-transform: uppercase;
  line-height: 1;
  transform-origin: 50% 0;
  transform: rotate(90deg);
  ${sm} {
    transform: rotate(90deg) translateY(${() => usePx(-170)});
  }
`

const BottomText = styled.div`
  width: calc(90% - 40px);
  position: absolute;
  right: 40px;
  bottom: 20px;
  text-transform: uppercase;
  line-height: 1;
  text-align: right;

  @media (max-width: 512px) {
    width: calc(95% - 40px);
    text-align: left;
    bottom: 10px;
    left: 10px;
  }
`

const LeftContent = styled.div`
  /* position: absolute;
  left: 20px;
  top: 60%; */

  position: absolute;
  left: ${() => usePx(-309)};
  margin-left: ${() => usePx(20)};

  @media (max-width: 512px) {
    left: ${() => usePx(-171)};
  }
`

const LeftText = styled.h3`
  text-transform: uppercase;
  line-height: 1;
  transform-origin: 50% 0;
  transform: rotate(-90deg);
`

const Circle = styled.div`
  background: ${({ color }) => color};
  width: 50%;
  height: 50%;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
`

const Hero = ({ song }) => {
  const { album, artist, albumLink, color, id } = song
  const { showColors } = useContext(AppContext)

  const filename = getFileName(artist, album)

  return (
    <Container>
      {/* <TopText>
        A COLLECTION OF 150 ALBUM COVERS TO celebrate the colors in music in
        2020.
      </TopText>
      <BottomText>
        Created and curated by{" "}
        <a href="http://www.gasparian.co/" target="_blank" rel="noreferrer">
          josé gasparian
        </a>{" "}
        &{" "}
        <a href="https://marcosrp.co/" target="_blank" rel="noreferrer">
          marcos rodriguez
        </a>
        . Developed by{" "}
        <a href="https://edkf.com.br/" target="_blank" rel="noreferrer">
          Edgard Kozlowski
        </a>
        .
      </BottomText> */}
      <LeftContent data-scroll data-scroll-speed="3.5">
        <LeftText>
          Вдохновлено проектом{" "}
          <a href="https://albumcolors.com/">albumcolors.com</a>
        </LeftText>
      </LeftContent>
      <RightContent data-scroll data-scroll-speed="-2.5">
        <RightText>
          Создал и курирует <a href="https://vladmdgolam.now.sh/">Влад Мд</a>,
          дизайн: <a href="https://www.instagram.com/921d0/">Катя До</a>
        </RightText>
        {/* <RightText href="/">Refresh to change color</RightText> */}
      </RightContent>
      <Cover
        href={albumLink}
        target="_blank"
        rel="noreferrer"
        data-scroll
        data-scroll-speed="1.5"
        hexadecimal={color}
      >
        <CoverContent
          data-scroll
          showCovers={!showColors}
          heroimageurl={filename}
        >
          <Circle color={color}></Circle>
        </CoverContent>
      </Cover>
    </Container>
  )
}

export default Hero
