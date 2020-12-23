import Head from "next/head"
import styled from "styled-components"

import ColorDownloader from "@/components/colorsDownloader"

const Button = styled.button`
  --webkit-appearance: none;
  border: none;
  /* background: none; */
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 20px;
  background: black;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0;
  outline: none;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Цвета Альбомов</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorDownloader />
    </div>
  )
}
