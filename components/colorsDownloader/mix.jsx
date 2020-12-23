import { useState } from "react"
import vibrant from "@/data/albums-vibrant-sorted.json"
import thief from "@/data/albums-thief-sorted.json"

const Mix = () => {
  const [albums, setAlbums] = useState(vibrant)

  const mix = () => {
    let newAlbums = albums
    newAlbums.map((el) => {
      const wow = thief.find((c) => c.id == el.id)
      el.color = wow.color
    })
    setAlbums(newAlbums)
    console.log("setted")
  }

  return (
    <>
      <button onClick={mix}>mix</button>
      <button onClick={() => download(vibrant)}>download</button>
    </>
  )
}

export default Mix

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
