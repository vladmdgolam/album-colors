import { useContext } from "react"
import styled from "styled-components"
import AppContext from "@/hooks/AppContext"
import getFileName from "@/lib/getFilename"
import usePx from "@/hooks/usePx"
import { sm, xl } from "@/data/constants"
import { Caption } from "@/components/typography"

const Container = styled.div`
  grid-column: span 3;
  border: 1px solid var(--text-color);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${() => usePx(20)};

  ${sm} {
    grid-column: span 1;
    display: grid;
    grid-template-rows: repeat(3, max-content);
    grid-gap: ${() => usePx(15)};
    padding: 15%;
  }

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
    ${sm} {
      content: none;
    }
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
  width: 70%;
  flex-shrink: 0;
  margin: 0 ${() => usePx(40)};
  background-color: ${(props) => props.hexadecimal};

  ${sm} {
    width: 100%;
    /* margin: 0 ${() => usePx(20)}; */
    margin: 0;
  }

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

const SideContent = styled.div`
  width: ${() => usePx(28)};
  padding: ${() => usePx(20)};
  ${sm} {
    width: ${() => usePx(14)};
  }
`

const RightContent = styled(SideContent)``

const SideText = styled.h3`
  /* padding-top: 30px; */
  text-transform: uppercase;
  line-height: 1;

  /* padding-top: 20px; */
  white-space: nowrap;
  position: absolute;
  transform-origin: 50% 0px;
`

const RightText = styled(SideText)`
  transform: translateX(-50%) translateY(-50%) rotate(90deg);
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

const LeftContent = styled(SideContent)``

const LeftText = styled(SideText)`
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
`

const Circle = styled.div`
  background: ${({ color }) => color};
  width: 50%;
  height: 50%;
  border-radius: 100%;
  position: absolute;
  z-index: 100;
`

const InspirationContent = styled.div`
  position: relative;
  flex-basis: 15%;
  align-self: flex-start;
  margin-top: 15%;
  ${sm} {
    margin-top: 0;
  }
`
const Inspiration = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  /* grid-gap: ${() => usePx(60)}; */
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  ${sm} {
    transform: none;
    position: relative;
  }
`

const AuthorsContent = styled.div`
  position: relative;
  flex-basis: 15%;
  /* align-self: flex-end;
  display: flex;
  /* flex-shrink: 10000000; */
  /* flex-grow: 0; */
  /* right: 0; */
  align-self: flex-end;
  margin-bottom: 15%;
  /* overflow: visible;
  position: relative;
  transform-origin: 0% 100%;
  transform: translateX(50%) translateY(0%) rotate(-90deg); */
  ${sm} {
    margin-bottom: 0;
  }
`
const Authors = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: ${() => usePx(60)};
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: 0% 0%;
  transform: translateX(0%) translateY(100%) rotate(-90deg);
  ${sm} {
    transform: none;
    position: relative;
    grid-gap: ${() => usePx(20)};
  }
`
const SideBlock = styled.div`
  h2 {
    white-space: nowrap;
    text-decoration: underline;
  }
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
      <InspirationContent>
        <Inspiration>
          <SideBlock>
            <Caption>вдохновлено:</Caption>
            <h2>albumcolors.com</h2>
            {/* <Caption>albumcolors.com</Caption> */}
          </SideBlock>
        </Inspiration>
      </InspirationContent>
      {/* <LeftContent data-scroll data-scroll-speed="3.5">
        <LeftText>
          Вдохновлено проектом{" "}
          <a href="https://albumcolors.com/">albumcolors.com</a>
        </LeftText>
      </LeftContent> */}

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
      <AuthorsContent>
        <Authors>
          <SideBlock>
            <Caption>разработка и кураторство</Caption>
            <h2>Vlad Md</h2>
          </SideBlock>
          <SideBlock>
            <Caption>дизайн:</Caption>
            <a href="https://www.instagram.com/921d0/">
              <h2>Katya Do</h2>
            </a>
          </SideBlock>
        </Authors>
      </AuthorsContent>
      {/* <RightContent data-scroll data-scroll-speed="-2.5">
        <RightText>
          Создал и курирует <a href="https://vladmdgolam.now.sh/">Влад Мд</a>,
          дизайн: <a href="https://www.instagram.com/921d0/">Катя До</a>
        </RightText>
      </RightContent> */}
    </Container>
  )
}

export default Hero
