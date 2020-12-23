import { useState, useRef } from "react"
import Vibrant from "node-vibrant"
// import ColorThief from "colorthief"
// import rgbToHex from "@/lib/rgbToHex"

function ColorWork({ song, id, setAlbums, albums, increase }) {
  const computed = useRef(false)
  const { artist, album } = song

  const cut = (string) => {
    return string.toLowerCase().replace(/\s/g, "-").replace(/\?/g, "")
  }

  const filename = cut(artist) + "·" + cut(album)
  const imgRef = useRef(null)

  const getColor = () => {
    if (!computed.current) {
      const opts = { colorCount: 1, quality: 2 }
      const path = `/albums/${filename}.jpg`

      Vibrant.from(path, opts)
        .getPalette()
        .then((palette) => {
          if (palette && palette.Vibrant) {
            computed.current = true
            let nextAlbums = albums
            nextAlbums[id].color = palette.Vibrant.hex
            console.log({ palette })
            // console.log (palette.Muted)
            
            const color = Vibrant.Util.rgbToHex(...palette.DarkVibrant.rgb)
            // console.log({color})
            // console.log("%c Hello!", `background: #ff00ff;`)
            console.log("%c Hello!", `background: ${color};`)

            // console.log(id)
            setAlbums(nextAlbums)
            increase()
          }
        })
    }
  }

  // const getColor = () => {
  //   const colorThief = new ColorThief()
  //   imgRef.current.crossOrigin = "Anonymous"
  //   let img = imgRef.current
  //   img.crossOrigin = "Anonymous"

  //   const result = colorThief.getColor(img, 100)
  //   const futureColor = rgbToHex(...result)

  //   if (futureColor) {
  //     let nextAlbums = albums
  //     nextAlbums[id].color = futureColor
  //     setCount(count + 1)
  //     // console.log("future color, count", futureColor)
  //     setAlbums(nextAlbums)
  //   }
  // }

  const getColorWTimeout = () => {
    getColor()
  }

  if (imgRef.current && imgRef.current.complete && !computed) {
    getColorWTimeout()
  }

  return (
    <img
      crossOrigin="Anonymous"
      ref={imgRef}
      src={`/albums/${filename}.jpg`}
      onLoad={getColorWTimeout}
      style={{ display: "none" }}
    />
  )
}

export default ColorWork
