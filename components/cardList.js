import data from "@/data/albums.json"
import Card from "@/components/card"
import styled from "styled-components"

import useIsMobile from "@/hooks/useIsMobile"

const Grid = styled.div`
  width: 100%;
  /* padding: 20px; */
  display: grid;
  grid-template-columns: repeat(${({ isMobile }) => (isMobile ? 1 : 3)}, 1fr);
  gap: 20px;
`

const CardList = () => {
  const isMobile = useIsMobile()
  return (
    <Grid isMobile={isMobile}>
      {data.map((song, key) => (
        <Card song={song} key={key} />
      ))}
    </Grid>
  )
}

export default CardList
