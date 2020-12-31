import { useState, useEffect } from "react"
import data from "@/data/albums.json"
import selected from "@/data/selected"
import Card from "@/components/card"
import PlaylistCard from "@/components/playlist-card"
import styled from "styled-components"
import { Caption } from "@/components/typography"
import usePx from "@/hooks/usePx"
import { sm } from "@/data/constants"
import Hero from "./hero"

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: ${() => usePx(60)};
  grid-auto-rows: 1fr;
  align-items: flex-start;

  ${sm} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Nomination = styled(Caption)`
  margin-bottom: ${() => usePx(25)};
`

const Winner = styled.div``

const Winners = () => {
  const { bestAlbum, bestSingle } = selected

  const bestAlbumData = data.filter((el) => el.id === bestAlbum)[0]
  const bestSingleData = data.filter((el) => el.id === bestSingle)[0]

  return (
    <>
      <Grid>
        <Winner>
          <Nomination>1. плейлист</Nomination>
          <PlaylistCard />
        </Winner>
        <Winner>
          <Nomination>2. альбом года</Nomination>
          <Card song={bestAlbumData} />
        </Winner>
        <Winner>
          <Nomination>3. сингл года</Nomination>
          <Card song={bestSingleData} />
        </Winner>
      </Grid>
    </>
  )
}

export default Winners
