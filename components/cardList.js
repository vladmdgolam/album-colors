import { useState, useEffect } from "react"
import data from "@/data/albums.json"
import selected from "@/data/selected"
import Card from "@/components/card"
import styled from "styled-components"

import usePx from "@/hooks/usePx"
import { sm } from "@/data/constants"
import Hero from "./hero"

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 20px;
  margin-bottom: ${() => usePx(60)};

  ${sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const CardList = () => {
  const randomSongId = data[Math.floor(Math.random() * data.length)]
  const randomSong = data.filter((el) => el.id === randomSongId.id)
  const [featuredSong, setFeaturedSong] = useState(null)
  // const selectedCovers = selected.selected
  useEffect(() => {
    setFeaturedSong(randomSong)
  }, [])
  return (
    <>
      {featuredSong && <Hero song={featuredSong[0]} />}
      <Grid>
        {data.map((song, key) => (
          <Card song={song} id={key} key={key} />
        ))}
      </Grid>
    </>
  )
}

export default CardList
