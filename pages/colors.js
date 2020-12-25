import { useContext } from "react"
import styled from "styled-components"

import data from "@/data/albums.json"
import { sm } from "@/data/constants"
import MagicButton from "@/components/magick-button"
import AppContext from "@/hooks/AppContext"
import getFileName from "@/lib/getFilename"

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${({ color }) => (color ? color : "transparent")};
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

  const filename = getFileName(artist, album)

  return (
    <>
      <Container>
        <Wrapper href={albumLink}>
          <Color color={color}>
            <Img
              showColors={showColors}
              crossOrigin="Anonymous"
              src={filename}
              alt={album}
            />
          </Color>
        </Wrapper>
      </Container>
    </>
  )
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
  grid-auto-rows: 1fr;
`

const CardList = () => {
  return (
    <Grid>
      <MagicButton />
      {data.map((song, key) => (
        <Card song={song} id={key} key={key} />
      ))}
    </Grid>
  )
}

export default CardList
