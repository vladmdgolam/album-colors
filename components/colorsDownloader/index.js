import { useRef, useState, useEffect, useContext } from "react"

import sortColorsByHue from "@/lib/sortColors"
import ColorWork from "./colorWork"
import data from "@/data/albums.json"
import { ReactSortable } from "react-sortablejs"
import AppContext from "@/hooks/AppContext"
import getFileName from "@/lib/getFilename"

import styled from "styled-components"

import Mix from "./mix"

const Img = styled.img`
  will-change: opacity;
  transition: var(--transition);
  opacity: ${({ showColors }) => (showColors ? 0 : 1)};
  width: 100%;
`

const ColorEl = styled.div`
  background: ${({ color }) => color};
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Flex = styled(ReactSortable)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10%, 1fr));
`

const Sort = (props) => {
  const [state, setState] = useState(data)
  const { showColors, setShowColors } = useContext(AppContext)

  return (
    <>
      <menu>
        <button onClick={() => setShowColors(!showColors)}>
          toggle colors
        </button>
        <button onClick={() => download(state)}>download sorted</button>
      </menu>
      <Flex list={state} setList={setState}>
        {state.map((item) => {
          const filename = getFileName(item.artist, item.album)
          return (
            <ColorEl showColors={showColors} color={item.color} key={item.id}>
              <Img showColors={showColors} src={filename} />
            </ColorEl>
          )
        })}
      </Flex>
    </>
  )
}

const ColorsDownloader = () => {
  const [albums, setAlbums] = useState(data)
  const [count, setCount] = useState(0)
  const [colorCompute, setColorCompute] = useState(false)

  useEffect(() => {
    if (colorCompute) {
      if (count === 150) {
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

  const randomSong = data.filter((el) => el.id === "1498762174")

  return (
    <>
      <menu>
        <button onClick={sort}>color sort</button>
        <button onClick={setColorCompute}>color recompute</button>
        <button
          ref={downloadRef}
          download="albums.json"
          onClick={() => download(albums)}
        >
          download not mixed
        </button>
      </menu>
      <Mix />
      <Sort />
      {colorCompute &&
        data.map((song, key) => (
          <ColorWork
            albums={albums}
            setAlbums={setAlbums}
            song={song}
            id={key}
            key={key}
            count={count}
            increase={increase}
          />
        ))}
    </>
  )
}

export default ColorsDownloader

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
