import { useState } from "react"
import Head from "next/head"
import Color from "color-thief-react"

import CardList from "@/components/cardList"

import Header from "@/components/header"
import Footer from "@/components/footer"
import MagicButton from "@/components/magick-button"
// import ColorDownloader from "@/components/colorsDownloader"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Цвета Альбомов</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ColorDownloader /> */}
      <Header />
      <MagicButton />
      <CardList />

      <Footer />
    </div>
  )
}
