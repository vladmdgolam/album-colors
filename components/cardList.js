import data from "@/data/albums.json"
import Card from "@/components/card"
import styled from "styled-components"

import { sm } from "@/data/constants"

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;

  ${sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardList = () => {
  return (
    <Grid>
      {data.map((song, key) => (
        <Card song={song} id={key} key={key} />
      ))}
    </Grid>
  )
}

export default CardList
