import { useState, useRef } from "react"
// import Vibrant from "node-vibrant"
import getFileName from "@/lib/getFilename"
import ColorThief from "colorthief"
import rgbToHex from "@/lib/rgbToHex"

function ColorWork({ song, id, setAlbums, albums, increase }) {
  const computed = useRef(false)
  const { artist, album } = song

  const path = getFileName(artist, album)

  const imgRef = useRef(null)

  // const getColor = () => {
  //   if (!computed.current) {
  //     const opts = { colorCount: 1, quality: 2 }

  //     Vibrant.from(path, opts)
  //       .getPalette()
  //       .then((palette) => {
  //         if (palette && palette.Vibrant) {
  //           computed.current = true
  //           let nextAlbums = albums
  //           nextAlbums[id].color = palette.Vibrant.hex
  //           console.log({ palette })
  //           // console.log (palette.Muted)

  //           const color = Vibrant.Util.rgbToHex(...palette.DarkVibrant.rgb)
  //           // console.log({color})
  //           // console.log("%c Hello!", `background: #ff00ff;`)
  //           console.log("%c Hello!", `background: ${color};`)

  //           // console.log(id)
  //           setAlbums(nextAlbums)
  //           increase()
  //         }
  //       })
  //   }
  // }

  const getColor = () => {
    const colorThief = new ColorThief()
    let img = imgRef.current

    const result = colorThief.getPalette(img)
    // console.log(result[1])
    const futureColor = rgbToHex(...result[0])
    // result.map((r) => {
    //   const hexRes = rgbToHex(...r)
    //   console.log(`%c ${path} ${hexRes}`, `background: ${hexRes};`)
    // })

    if (result) {
      console.log(`%c ${path} ${futureColor}`, `background: ${futureColor};`)
      // let nextAlbums = albums
      // nextAlbums[id].color = futureColor
      // increase()
      // setAlbums(nextAlbums)
    }
  }

  const getColorWTimeout = () => {
    getColor()
  }

  if (imgRef.current && imgRef.current.complete && !computed) {
    getColorWTimeout()
  }

  return (
    <img
      ref={imgRef}
      src={path}
      onLoad={getColorWTimeout}
      style={{ display: "none" }}
    />
  )
}

export default ColorWork
