import { useState } from "react"
import Color from "color-thief-react"

import CardList from "@/components/card-list"

import Sources from "@/components/sources"
import Header from "@/components/header"
import Head from "@/components/head"
import Footer from "@/components/footer"
// import { Container } from "@/components/layout"
import Winners from "@/components/winners"
import MagicButton from "@/components/magick-button"
import { YMInitializer } from "react-yandex-metrika"

export default function Home() {
  return (
    <>
      <YMInitializer accounts={[70926418]} />

      <Head />
      {/* <Container> */}
      <Header />
      <MagicButton />
      <CardList />

      <Winners />
      <Sources />

      <Footer />
      {/* </Container> */}
    </>
  )
}
