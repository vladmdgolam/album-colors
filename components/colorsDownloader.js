import { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import ColorThief from "colorthief"

import rgbToHex from "@/lib/rgbToHex"
import sortColorsByHue from "@/lib/sortColors"

import data from "@/data/albums.json"

function Card({ song, id, setAlbums, albums, count, setCount }) {
  const { picture } = song
  const imgRef = useRef(null)

  const getColor = () => {
    const colorThief = new ColorThief()
    imgRef.current.crossOrigin = "Anonymous"
    let img = imgRef.current
    img.crossOrigin = "Anonymous"

    const result = colorThief.getColor(img, 100)
    const futureColor = rgbToHex(...result)

    if (futureColor) {
      let nextAlbums = albums
      nextAlbums[id].color = futureColor
      setCount(count + 1)
      setAlbums(nextAlbums)
    }
  }

  return (
    <div>
      <img
        crossOrigin="Anonymous"
        ref={imgRef}
        src={picture}
        onLoad={getColor}
      />
    </div>
  )
}

const Grid = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  gap: 20px;
`

const ColorDownloader = () => {
  const [albums, setAlbums] = useState(data)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 100) {
      console.log("finished", albums)
      sort()
    } else {
      console.log({ count })
    }
  }, [count])

  const sort = () => {
    const newAlbums = sortColorsByHue(albums).reverse()
    setAlbums(newAlbums)
    console.log("new albums")
  }

  const downloadRef = useRef(null)

  const download = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(albums))
    var downloadAnchorNode = document.createElement("a")
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", "albums" + ".json")
    document.body.appendChild(downloadAnchorNode) // required for firefox
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }
  //   const download = () => {
  //     const dataStr =
  //       "data:text/json;charset=utf-8," +
  //       encodeURIComponent(JSON.stringify(albums))
  //     downloadRef.current.setAttribute("href", dataStr)
  //   }

  return (
    <Grid>
      <button ref={downloadRef} download="albums.json" onClick={download}>
        download
      </button>
      {data.map((song, key) => (
        <Card
          albums={albums}
          setAlbums={setAlbums}
          song={song}
          id={key}
          key={key}
          setCount={setCount}
          count={count}
        />
      ))}
    </Grid>
  )
}

export default ColorDownloader
