import { useState } from "react"
import Head from "next/head"
import Color from "color-thief-react"

import CardList from "@/components/cardList"

import Sources from "@/components/sources"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Winners from "@/components/winners"
import MagicButton from "@/components/magick-button"
// import ColorDownloader from "@/components/colorsDownloader"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Цвета Альбомов</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>

      {/* <ColorDownloader /> */}
      <Header />
      <MagicButton />
      <CardList />

      <Winners />
      <Sources />

      <Footer />
    </div>
  )
}
