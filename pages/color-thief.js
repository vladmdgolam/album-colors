import Head from "next/head"

import ColorDownloader from "@/components/colorsDownloader"


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
