import { useRef, useState, useEffect } from "react"
import ColorThief from "colorthief"

import rgbToHex from "@/lib/rgbToHex"
import sortColorsByHue from "@/lib/sortColors"

import data from "@/data/albums.json"

const ColorDownloader = () => {
  const [albums, setAlbums] = useState(data)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 100) {
      console.log("finished", albums)
    } else {
      console.log("in process", { count })
    }
  }, [count])

  const sort = () => {
    const newAlbums = sortColorsByHue(albums).reverse()
    setAlbums(newAlbums)
  }

  const downloadRef = useRef(null)

  const download = () => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(albums))
    var downloadAnchorNode = document.createElement("a")
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", "albums" + ".json")
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <>
      <button onClick={sort}>1. sort</button>
      <button ref={downloadRef} download="albums.json" onClick={download}>
        2. download
      </button>
      {/* {data.map((song, key) => (
        <Card
          albums={albums}
          setAlbums={setAlbums}
          song={song}
          id={key}
          key={key}
          setCount={setCount}
          count={count}
        />
      ))} */}
    </>
  )
}

export default ColorDownloader

function Card({ song, id, setAlbums, albums, count, setCount }) {
  const { artist, album } = song

  const cut = (string) => {
    return string.toLowerCase().replace(/\s/g, "-").replace(/\?/g, "")
  }

  const filename = cut(artist) + "·" + cut(album)
  // console.log(object)

  // console.log({filename})

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
      // console.log("future color, count", futureColor)
      setAlbums(nextAlbums)
    }
  }

  const getColorWTimeout = () => {
    setTimeout(() => {
      getColor()
    }, 1000)
  }

  if (imgRef.current && imgRef.current.complete) {
    getColorWTimeout()
  }

  return (
    <img
      crossOrigin="Anonymous"
      ref={imgRef}
      src={`/albums/${filename}.jpg`}
      onLoad={getColorWTimeout}
    />
  )
}
