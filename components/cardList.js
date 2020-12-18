import data from "@/data/albums.json"
import Card from "@/components/card"
import styled from "styled-components"

const Grid = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

const CardList = () => {
  return (
    <Grid>
      {data.map((song, key) => (
        <Card song={song} key={key} />
      ))}
    </Grid>
  )
}

export default CardList
