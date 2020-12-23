import { useRef, useState, useEffect } from "react"

import sortColorsByHue from "@/lib/sortColors"
import ColorWork from "./colorWork"
import data from "@/data/albums.json"

import Mix from "./mix"

const ColorDownloader = () => {
  const [albums, setAlbums] = useState(data)
  const [count, setCount] = useState(0)
  const [colorCompute, setColorCompute] = useState(false)

  useEffect(() => {
    if (colorCompute) {
      if (count === 100) {
        console.log("color computing finished", albums)
      } else {
        console.log("in process", { count })
      }
    }
  }, [count])

  const sort = () => {
    const newAlbums = sortColorsByHue(albums).reverse()
    setAlbums(newAlbums)
    console.log("sorting finished")
  }

  useEffect(() => {
    console.log({ albums }, "albums changed")
  }, [albums])

  const downloadRef = useRef(null)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={sort}>color sort</button>
      <button onClick={setColorCompute}>color recompute</button>
      <button
        ref={downloadRef}
        download="albums.json"
        onClick={() => download(albums)}
      >
        download not mixed
      </button>
      <Mix />
      {colorCompute &&
        data.map((song, key) => (
          <ColorWork
            albums={albums}
            setAlbums={setAlbums}
            song={song}
            id={key}
            key={key}
            increase={increase}
          />
        ))}
    </>
  )
}

export default ColorDownloader

const download = (albums) => {
  var dataStr =
    "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(albums))
  var downloadAnchorNode = document.createElement("a")
  downloadAnchorNode.setAttribute("href", dataStr)
  downloadAnchorNode.setAttribute("download", "albums" + ".json")
  document.body.appendChild(downloadAnchorNode)
  downloadAnchorNode.click()
  downloadAnchorNode.remove()
}
